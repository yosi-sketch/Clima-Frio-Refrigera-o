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
        'Accept': '*/*'
      },
      timeout: 12000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const origin = new URL(url).origin;
          redirectUrl = new URL(redirectUrl, origin).href;
        }
        return resolve(fetchUrl(redirectUrl));
      }
      let chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve({ status: res.statusCode, headers: res.headers, buffer, body: buffer.toString('latin1') });
      });
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function downloadFile(url, dest) {
  try {
    const res = await fetchUrl(url);
    if (res.status === 200 && res.buffer.length > 500) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, res.buffer);
      console.log(`Saved image: ${dest} (${res.buffer.length} bytes)`);
      return true;
    }
  } catch (e) {
    console.error(`Failed to download ${url}: ${e.message}`);
  }
  return false;
}

async function run() {
  const pages = [
    'https://www.isominas.ind.br/institucional',
    'https://www.isominas.ind.br/produtos/isopaineis/17',
    'https://www.isominas.ind.br/produtos/portas-frigorificas/29',
    'https://www.isominas.ind.br/produtos/placas-isolantes/28',
    'https://www.isominas.ind.br/produtos/telhas/31',
    'https://www.isominas.ind.br/obras',
    'https://www.isominas.ind.br/localizacao',
    'https://www.isominas.ind.br/detalhes-produtos/29/49',
    'https://www.isominas.ind.br/detalhes-produtos/29/32',
    'https://www.isominas.ind.br/detalhes-produtos/28/35',
    'https://www.isominas.ind.br/detalhes-produtos/17/25'
  ];

  const allImages = new Set();

  for (const pageUrl of pages) {
    try {
      console.log(`Fetching ${pageUrl}...`);
      const res = await fetchUrl(pageUrl);
      const safeName = pageUrl.replace(/^https?:\/\/www\.isominas\.ind\.br\//, '').replace(/[\/\?&=]/g, '_') + '.html';
      const outPath = path.join(__dirname, '..', 'outputs', safeName);
      fs.writeFileSync(outPath, res.body, 'utf-8');

      // find images
      const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
      let match;
      while ((match = imgRegex.exec(res.body)) !== null) {
        let src = match[1];
        if (src.startsWith('//')) src = 'https:' + src;
        else if (src.startsWith('/')) src = 'https://www.isominas.ind.br' + src;
        else if (!src.startsWith('http')) src = 'https://www.isominas.ind.br/' + src;
        allImages.add(src);
      }
    } catch (e) {
      console.error(`Error on ${pageUrl}:`, e.message);
    }
  }

  console.log(`\nFound ${allImages.size} total unique images.`);
  let i = 0;
  for (const imgUrl of allImages) {
    i++;
    const ext = path.extname(new URL(imgUrl).pathname) || '.jpg';
    const dest = path.join(__dirname, '..', 'outputs', 'images', `img_${i}${ext}`);
    console.log(`Downloading (${i}/${allImages.size}): ${imgUrl}`);
    await downloadFile(imgUrl, dest);
  }
}

run();
