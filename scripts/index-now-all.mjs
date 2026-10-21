import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const HOST = 'vocaplace.com';
const KEY = 'a8f9c1e47b2d453896105f24e93c8b71';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(rootDir, 'out', 'sitemap.xml');

// 1. Parse Sitemap URLs
console.log('🔍 Reading sitemap from:', SITEMAP_PATH);
if (!fs.existsSync(SITEMAP_PATH)) {
  console.error('❌ Sitemap not found at', SITEMAP_PATH);
  console.error('Please run "npm run build" first.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
const urls = urlMatches.map(m => m.replace(/<\/?loc>/g, '').trim());

console.log(`✅ Extracted ${urls.length} URLs from sitemap.`);

if (urls.length === 0) {
  console.error('❌ No URLs found in sitemap.');
  process.exit(1);
}

// 2. Prepare IndexNow payload
const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
};

const endpoints = [
  { name: 'IndexNow Central (Umbrella)', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Microsoft Bing / Copilot', url: 'https://www.bing.com/indexnow' },
  { name: 'Yandex', url: 'https://yandex.com/indexnow' },
  { name: 'Seznam.cz', url: 'https://search.seznam.cz/indexnow' },
  { name: 'Ahrefs Yep', url: 'https://indexnow.yep.com/indexnow' },
];

async function submitToIndexNow() {
  console.log('\n🚀 Dispatching Batch IndexNow Submissions for all', urls.length, 'URLs...\n');

  for (const ep of endpoints) {
    try {
      const response = await fetch(ep.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Vocaplace-IndexNow-Client/1.0',
        },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`✅ [${ep.name}]: HTTP ${response.status} OK (Success)`);
      } else {
        console.warn(`⚠️ [${ep.name}]: HTTP ${response.status} - ${text || response.statusText}`);
      }
    } catch (err) {
      console.error(`❌ [${ep.name}] Connection failed:`, err.message);
    }
  }
}

async function pingSitemaps() {
  console.log('\n📡 Pinging Search Engine Sitemap Endpoints...\n');
  const sitemapUrl = `https://${HOST}/sitemap.xml`;
  const pings = [
    { name: 'Google Sitemap Ping', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
    { name: 'Bing Sitemap Ping', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
  ];

  for (const p of pings) {
    try {
      const res = await fetch(p.url, { method: 'GET' });
      console.log(`📡 [${p.name}]: HTTP ${res.status} (${res.ok ? 'Received' : 'Response status'})`);
    } catch (err) {
      console.warn(`⚠️ [${p.name}] Ping warning:`, err.message);
    }
  }
}

async function run() {
  await submitToIndexNow();
  await pingSitemaps();
  console.log('\n🎉 Complete indexation workflow executed successfully for all', urls.length, 'URLs!\n');
}

run();
