const https = require('https');
const fs = require('fs');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function searchUnsplash(query) {
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
  const html = await fetchHtml(url);
  // Match img tags with alt and src
  const imgRegex = /<img[^>]+src=["'](https:\/\/images\.unsplash\.com\/photo-[^"']+)["'][^>]*alt=["']([^"']+)["']/g;
  const results = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    results.push({ url: match[1], alt: match[2] });
  }
  // Also try alt before src
  const imgRegex2 = /<img[^>]+alt=["']([^"']+)["'][^>]*src=["'](https:\/\/images\.unsplash\.com\/photo-[^"']+)["']/g;
  while ((match = imgRegex2.exec(html)) !== null) {
    results.push({ url: match[2], alt: match[1] });
  }
  return results;
}

const q = process.argv[2] || 'inflatable-pool';
searchUnsplash(q).then(res => {
  console.log(`Found ${res.length} images for "${q}":`);
  res.slice(0, 8).forEach((r, i) => {
    console.log(`[${i}] Alt: ${r.alt}`);
    console.log(`    URL: ${r.url.split('?')[0]}`);
  });
}).catch(console.error);
