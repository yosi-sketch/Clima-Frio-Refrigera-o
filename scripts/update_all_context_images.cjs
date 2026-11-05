const https = require('https');
const fs = require('fs');
const path = require('path');

const imageMap = [
  {
    // SOBRE NÓS: Família feliz brincando na piscina no quintal
    // Substitui a foto da moça comendo salada em restaurante!
    name: 'sobre-familia.jpg',
    url: 'https://plus.unsplash.com/premium_photo-1681909562875-9a8eb53403e0?fm=jpg&q=85&w=1200&auto=format&fit=crop'
  },
  {
    // BOIAS E BRINQUEDOS: Boia gigante de unicórnio flutuando na piscina ensolarada
    name: 'boias-brinquedos.jpg',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
  },
  {
    // PISCINA DE ARMAÇÃO: Piscina de estrutura montada no quintal com grama verde e sol
    name: 'piscina-armacao.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Gartenpool_2011-by-RaBoe_01.jpg'
  },
  {
    // PISCINA INFLÁVEL & INFANTIL: Criança brincando na piscina inflável com brinquedos
    name: 'piscina-inflavel.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Baby_enjoying_playtime_in_inflatable_pool_with_colorful_toys.jpg'
  },
  {
    // RETIRADA NO CAIÇARAS: Carregando piscina e itens de lazer no porta-malas do carro
    name: 'retirada-caicaras.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Packing_Luggage_into_the_Car_for_a_Holiday.jpg'
  },
  {
    name: 'retirada-caiçaras.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Packing_Luggage_into_the_Car_for_a_Holiday.jpg'
  },
  {
    // HERO: Piscina de quintal com boias coloridas, dia de sol e água azul
    name: 'hero-pool.jpg',
    url: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    // CAMPING E LAZER: Barraca de acampamento em área verde ensolarada
    name: 'camping-lazer.jpg',
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    // TRATAMENTO DE ÁGUA: Água cristalina turquesa de piscina ensolarada
    name: 'tratamento-agua.jpg',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    // FILTROS E BOMBAS: Circulação e filtragem de piscina
    name: 'filtro-bomba.jpg',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    // CAPAS E ACESSÓRIOS: Proteção e conservação da piscina
    name: 'capas-acessorios.jpg',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode + ' for ' + dest));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Saved:', dest);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const publicDir = path.resolve(__dirname, '../public');
  for (const item of imageMap) {
    const dest = path.join(publicDir, item.name);
    try {
      await download(item.url, dest);
    } catch (e) {
      console.error('Failed', item.name, e.message);
    }
  }
  console.log('All context-appropriate images downloaded successfully!');
}

run();
