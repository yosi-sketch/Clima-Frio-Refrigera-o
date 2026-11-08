const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      timeout: 20000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchBuffer(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url}: Status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

const imagesToProcess = [
  // HERO SLIDES
  {
    dest: 'public/images/hero/banner-destaque-freezers.jpg',
    url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=85',
    width: 1400,
    height: 800
  },
  {
    dest: 'public/images/hero/banner-destaque-camara-fria.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85',
    width: 1400,
    height: 800
  },
  {
    dest: 'public/images/hero/banner-destaque-balcoes.jpg',
    url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1600&q=85',
    width: 1400,
    height: 800
  },

  // PRODUCTS
  {
    dest: 'public/images/products/freezer-vertical-expositor.jpg',
    url: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/freezer-horizontal-tampa-vidro.jpg',
    url: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/refrigerador-industrial-inox.jpg',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/balcao-refrigerado-vitrine.jpg',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/camara-frigorifica-modular.jpg',
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/ilha-congelados-supermercado.jpg',
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/balcao-auto-servico.jpg',
    url: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/products/porta-frigorifica-pesada.jpg',
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },

  // CLIENT INSTALLATIONS / OBRAS
  {
    dest: 'public/images/obras/obra-supermercado-expositores.jpg',
    url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/obras/obra-acougue-vitrines.jpg',
    url: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/obras/obra-padaria-balcoes.jpg',
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/obras/obra-distribuidora-camara-fria.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/obras/obra-conveniencia-walk-in.jpg',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/obras/obra-cozinha-industrial.jpg',
    url: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },

  // FACTORY & QUALITY
  {
    dest: 'public/images/fabrica/fabrica-friomax-sede.jpg',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    width: 1000,
    height: 650
  },
  {
    dest: 'public/images/fabrica/fabrica-montagem-inox.jpg',
    url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/fabrica/fabrica-isolamento-pur.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  },
  {
    dest: 'public/images/fabrica/fabrica-controle-qualidade.jpg',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=85',
    width: 800,
    height: 600
  }
];

async function run() {
  console.log(`Starting download and optimization of ${imagesToProcess.length} images...`);
  
  for (const item of imagesToProcess) {
    const dir = path.dirname(item.dest);
    fs.mkdirSync(dir, { recursive: true });
    
    try {
      console.log(`Fetching: ${item.dest}...`);
      const rawBuf = await fetchBuffer(item.url);
      await sharp(rawBuf)
        .resize(item.width, item.height, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 86, progressive: true })
        .toFile(item.dest);
      console.log(`✓ Saved ${item.dest} (${fs.statSync(item.dest).size} bytes)`);
    } catch (err) {
      console.error(`✗ Error processing ${item.dest}:`, err.message);
    }
  }
  
  console.log('All image assets have been processed and saved successfully!');
}

run().catch(console.error);
