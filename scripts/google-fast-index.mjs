import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Possible credential locations
const GSC_OAUTH_PATH = path.join(os.homedir(), '.config', 'gsc', 'credentials.json');
const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_PATH || path.join(rootDir, 'google-service-account.json');
const SITEMAP_PATH = path.join(rootDir, 'out', 'sitemap.xml');
const SITE_DOMAIN = 'sc-domain:vocaplace.com';
const SITEMAP_URL = 'https://vocaplace.com/sitemap.xml';

// 1. Authenticate via OAuth refresh token or Service Account
async function getAccessToken() {
  // Strategy A: Check user's GSC OAuth config (~/.config/gsc/credentials.json)
  if (fs.existsSync(GSC_OAUTH_PATH)) {
    console.log(`🔑 Using configured Google OAuth credentials: ${GSC_OAUTH_PATH}`);
    const creds = JSON.parse(fs.readFileSync(GSC_OAUTH_PATH, 'utf-8'));
    
    if (creds.client_id && creds.client_secret && creds.refresh_token) {
      const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: creds.client_id,
          client_secret: creds.client_secret,
          refresh_token: creds.refresh_token,
          grant_type: 'refresh_token',
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`OAuth refresh failed (${res.status}): ${errText}`);
      }

      const data = await res.json();
      console.log('✅ Google OAuth2 access token retrieved.');
      return data.access_token;
    }
  }

  // Strategy B: Service Account JSON
  if (fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.log(`🔑 Using Google Service Account JSON: ${SERVICE_ACCOUNT_PATH}`);
    const sa = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'));
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: 'RS256', typ: 'JWT' };
    const claimSet = {
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/indexing https://www.googleapis.com/auth/webmasters',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    const base64UrlEncode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
    const signatureInput = `${base64UrlEncode(header)}.${base64UrlEncode(claimSet)}`;

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signatureInput);
    signer.end();
    const signature = signer.sign(sa.private_key, 'base64url');
    const jwt = `${signatureInput}.${signature}`;

    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Service Account auth failed (${res.status}): ${errText}`);
    }

    const data = await res.json();
    console.log('✅ Service account access token retrieved.');
    return data.access_token;
  }

  throw new Error('No Google credentials found in ~/.config/gsc/credentials.json or google-service-account.json');
}

// 2. Submit Sitemap to Google Search Console
async function submitSitemapToGsc(accessToken) {
  console.log(`\n📡 Submitting sitemap to Google Search Console API for ${SITE_DOMAIN}...`);
  const encodedSite = encodeURIComponent(SITE_DOMAIN);
  const encodedSitemap = encodeURIComponent(SITEMAP_URL);
  const putUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps/${encodedSitemap}`;

  try {
    const res = await fetch(putUrl, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (res.status === 204 || res.status === 200) {
      console.log('✅ Google Search Console: Sitemap received and marked for re-crawling (HTTP 204).');
    } else {
      console.warn(`⚠️ Google Search Console Sitemap status: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    console.error('❌ GSC Sitemap submission error:', err.message);
  }
}

// 3. Notify Google Indexing API
async function notifyGoogleIndexing(accessToken, url) {
  const endpoint = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      url: url,
      type: 'URL_UPDATED',
    }),
  });

  const body = await res.json().catch(() => ({}));
  return { status: res.status, body };
}

async function run() {
  console.log('⚡ Google Fast Indexing Pipeline\n');

  let accessToken;
  try {
    accessToken = await getAccessToken();
  } catch (err) {
    console.error('❌ Authentication Error:', err.message);
    process.exit(1);
  }

  // Submit sitemap first (unlimited GSC API quota)
  await submitSitemapToGsc(accessToken);

  // Parse sitemap URLs
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap not found at', SITEMAP_PATH);
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = urlMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

  console.log(`\n📋 Dispatching Google Indexing API publish requests (${urls.length} URLs found)...`);

  let successCount = 0;
  let rateLimited = false;

  for (const url of urls) {
    if (rateLimited) break;

    try {
      const result = await notifyGoogleIndexing(accessToken, url);
      if (result.status === 200) {
        successCount++;
        console.log(`✅ [Google Indexing 200]: ${url}`);
      } else if (result.status === 429) {
        rateLimited = true;
        console.warn(`\n⚠️  [Google Indexing API Quota Hit - HTTP 429]:`);
        console.warn(`Daily limit of 200 publish requests is currently consumed for today.`);
        console.warn(`Google Search Console sitemap is already active and crawling. The 200 API quota resets daily at midnight Pacific Time (12:30 PM IST).`);
      } else {
        console.warn(`⚠️ [Google Indexing ${result.status}]: ${url} - ${JSON.stringify(result.body)}`);
      }
      await new Promise(r => setTimeout(r, 120));
    } catch (e) {
      console.error(`❌ Failed: ${url} - ${e.message}`);
    }
  }

  console.log(`\n🎉 Google Indexing pipeline completed. Successfully notified: ${successCount} URLs.`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
