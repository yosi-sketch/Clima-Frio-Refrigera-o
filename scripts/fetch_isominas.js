const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const origin = new URL(url).origin;
          redirectUrl = new URL(redirectUrl, origin).href;
        }
        console.log('Redirecting to:', redirectUrl);
        return resolve(fetchUrl(redirectUrl));
      }
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({ status: res.statusCode, headers: res.headers, body: buffer.toString('utf-8') });
      });
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function run() {
  const targetUrls = [
    'https://www.isominas.ind.br',
    'http://www.isominas.ind.br',
    'http://www.isominas.ind.br/home',
    'https://www.isominas.ind.br/produtos',
    'https://www.isominas.ind.br/quem-somos',
    'https://www.isominas.ind.br/contato'
  ];

  for (const url of targetUrls) {
    try {
      console.log(`\n--- Fetching: ${url} ---`);
      const res = await fetchUrl(url);
      console.log(`Status: ${res.status}, Length: ${res.body.length}`);
      const titleMatch = res.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      console.log('Title:', titleMatch ? titleMatch[1].trim() : 'No title');
      
      // Save HTML to scratch for deep reading
      const parsed = new URL(url);
      const safeName = (parsed.pathname.replace(/\//g, '_') || 'index') + '.html';
      const outPath = path.join(__dirname, '..', 'outputs', safeName);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, res.body);
      console.log(`Saved to ${outPath}`);

      // Extract emails, phones, images
      const phones = res.body.match(/(?:\(?\d{2}\)?\s*)?(?:9?\d{4}[-\s]?\d{4})/g) || [];
      const emails = res.body.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
      let match;
      const images = [];
      while ((match = imgRegex.exec(res.body)) !== null) {
        images.push(match[1]);
      }
      console.log('Sample phones:', [...new Set(phones)].slice(0, 5));
      console.log('Sample emails:', [...new Set(emails)].slice(0, 5));
      console.log('Images count:', images.length);
      console.log('Sample images:', images.slice(0, 10));
    } catch (e) {
      console.error(`Failed ${url}:`, e.message);
    }
  }
}

run();
