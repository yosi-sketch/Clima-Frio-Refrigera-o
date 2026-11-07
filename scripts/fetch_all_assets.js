const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
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
        resolve({ status: res.statusCode, buffer, body: buffer.toString('latin1') });
      });
    });
    req.on('error', reject);
  });
}

async function downloadFile(url, dest) {
  try {
    const res = await fetchUrl(url);
    if (res.status === 200 && res.buffer.length > 500) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, res.buffer);
      console.log(`Saved: ${dest} (${res.buffer.length} bytes)`);
      return true;
    }
  } catch (e) {
    console.error(`Failed ${url}: ${e.message}`);
  }
  return false;
}

async function main() {
  const urls = [
    'https://www.isominas.ind.br/obra/14',
    'https://www.isominas.ind.br/obra/20',
    'https://www.isominas.ind.br/obra/8',
    'https://www.isominas.ind.br/obra/12',
    'https://www.isominas.ind.br/obra/13',
    'https://www.isominas.ind.br/obra/9',
    'https://www.isominas.ind.br/obra/11',
    'https://www.isominas.ind.br/obra/10',
    'https://www.isominas.ind.br/detalhes-produtos/isopaineis-eps-50mm-a-200mm/25',
    'https://www.isominas.ind.br/detalhes-produtos/isopaineis-pur/37',
    'https://www.isominas.ind.br/detalhes-produtos/porta-frigorifica-giratoria/32',
    'https://www.isominas.ind.br/detalhes-produtos/porta-frigorifica-de-correr/33',
    'https://www.isominas.ind.br/detalhes-produtos/porta-correr-automatica/44',
    'https://www.isominas.ind.br/detalhes-produtos/porta-vertical-seccional/45',
    'https://www.isominas.ind.br/detalhes-produtos/porta-giratoria-sala-limpa/49',
    'https://www.isominas.ind.br/detalhes-produtos/porta-vai-e-vem/52',
    'https://www.isominas.ind.br/detalhes-produtos/telhas-termicas-eps/41',
    'https://www.isominas.ind.br/detalhes-produtos/telhas-singelas/42',
    'https://www.isominas.ind.br/detalhes-produtos/telhas-pre-pintadas/43',
    'https://www.isominas.ind.br/detalhes-produtos/placas-de-eps-poliestireno-expandido/35',
    'https://www.isominas.ind.br/detalhes-produtos/placas-pur-poliuretano-expandido/50'
  ];

  const allImages = new Map();

  for (const u of urls) {
    try {
      const res = await fetchUrl(u);
      const safeName = u.replace('https://www.isominas.ind.br/', '').replace(/[\/\?&=]/g, '_') + '.html';
      fs.writeFileSync(path.join('outputs', safeName), res.body);

      // get images
      const matches = [...res.body.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?/gi)];
      for (const m of matches) {
        let src = m[1];
        const alt = m[2] || '';
        if (src.includes('galaxcms.com.br/imgs_') || src.includes('images/')) {
          if (!src.startsWith('http')) src = 'https://www.isominas.ind.br/' + src.replace(/^\//, '');
          allImages.set(src, { alt, url: src });
        }
      }
    } catch (e) {
      console.error('Error fetching', u, e.message);
    }
  }

  console.log(`Discovered ${allImages.size} galaxcms/isominas product/obra images!`);
  let count = 0;
  for (const [imgUrl, meta] of allImages.entries()) {
    count++;
    const filename = `asset_${count}_` + path.basename(new URL(imgUrl).pathname);
    const dest = path.join(__dirname, '..', 'outputs', 'assets', filename);
    await downloadFile(imgUrl, dest);
  }
}

main();
