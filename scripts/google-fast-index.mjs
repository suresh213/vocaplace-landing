import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Path to Google Cloud Service Account JSON
const SERVICE_ACCOUNT_PATH = process.env.GOOGLE_SERVICE_ACCOUNT_PATH || path.join(rootDir, 'google-service-account.json');
const SITEMAP_PATH = path.join(rootDir, 'out', 'sitemap.xml');

async function getGoogleAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const base64UrlEncode = (obj) =>
    Buffer.from(JSON.stringify(obj)).toString('base64url');

  const encodedHeader = base64UrlEncode(header);
  const encodedClaimSet = base64UrlEncode(claimSet);
  const signatureInput = `${encodedHeader}.${encodedClaimSet}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureInput);
  signer.end();
  const signature = signer.sign(serviceAccount.private_key, 'base64url');

  const jwt = `${signatureInput}.${signature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    const errText = await tokenRes.text();
    throw new Error(`Google OAuth error (${tokenRes.status}): ${errText}`);
  }

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

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

  return { status: res.status, body: await res.json() };
}

async function run() {
  console.log('⚡ Google Fast Indexing Utility\n');

  if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.log('⚠️  google-service-account.json not found at:', SERVICE_ACCOUNT_PATH);
    console.log('\nTo use Google Fast Indexing API:');
    console.log('1. Go to Google Cloud Console (console.cloud.google.com).');
    console.log('2. Enable "Web Search Indexing API" (Indexing API).');
    console.log('3. Create a Service Account and download its JSON key.');
    console.log('4. Add that Service Account email as an "Owner" in Google Search Console.');
    console.log('5. Save the JSON key as "google-service-account.json" in this directory.');
    console.log('\nOnce saved, run: npm run index:google\n');
    process.exit(0);
  }

  const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, 'utf-8'));
  console.log(`🔑 Authenticating Service Account: ${serviceAccount.client_email}...`);

  const accessToken = await getGoogleAccessToken(serviceAccount);
  console.log('✅ Google OAuth2 Access Token successfully generated.\n');

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap not found at', SITEMAP_PATH);
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  const urls = urlMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

  console.log(`📋 Found ${urls.length} URLs in sitemap to notify Google.`);
  console.log('⚠️  Note: Google daily limit is 200 publish requests per day.\n');

  const batch = urls.slice(0, 200);
  let successCount = 0;

  for (const url of batch) {
    try {
      const result = await notifyGoogleIndexing(accessToken, url);
      if (result.status === 200) {
        successCount++;
        console.log(`✅ [Google Indexing API 200]: ${url}`);
      } else {
        console.warn(`⚠️ [Google Indexing API ${result.status}]: ${url} - ${JSON.stringify(result.body)}`);
      }
      // Small 100ms throttle
      await new Promise(r => setTimeout(r, 100));
    } catch (e) {
      console.error(`❌ Failed: ${url} - ${e.message}`);
    }
  }

  console.log(`\n🎉 Finished! Successfully notified Google for ${successCount}/${batch.length} URLs.`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
