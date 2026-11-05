const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    // Hero pool - family fun in backyard pool
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/hero-pool.jpg'
  },
  {
    // Piscina de armação / frame pool
    url: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/piscina-armacao.jpg'
  },
  {
    // Piscina inflável / criança e família
    url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/piscina-inflavel.jpg'
  },
  {
    // Boias e infláveis coloridos
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/boias-brinquedos.jpg'
  },
  {
    // Filtros e bombas de piscina
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/filtro-bomba.jpg'
  },
  {
    // Tratamento de água / piscina cristalina
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/tratamento-agua.jpg'
  },
  {
    // Camping e lazer ao ar livre
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/camping-lazer.jpg'
  },
  {
    // Capas e proteção de piscina
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/capas-acessorios.jpg'
  },
  {
    // Retirada e entrega rápida em BH / atendimento Caiçaras
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/retirada-caiçaras.jpg'
  },
  {
    // Versão compatível sem acento
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/retirada-caicaras.jpg'
  },
  {
    // Diversão em família
    url: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/sobre-familia.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed status: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved: ' + dest);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of images) {
    try {
      await download(item.url, item.dest);
    } catch (e) {
      console.error('Error downloading ' + item.dest + ':', e.message);
    }
  }
}

run();
