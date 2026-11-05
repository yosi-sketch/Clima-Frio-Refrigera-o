const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/sauna-spa.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/lago-ornamental.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/cascata-led.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/filtro-bomba.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/tratamento-agua.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/loja-showroom-pool.jpg'
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
