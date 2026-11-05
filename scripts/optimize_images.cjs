const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targets = [
  'hero-pool.jpg',
  'piscina-armacao.jpg',
  'piscina-inflavel.jpg',
  'boias-brinquedos.jpg',
  'filtro-bomba.jpg',
  'tratamento-agua.jpg',
  'capas-acessorios.jpg',
  'camping-lazer.jpg',
  'sobre-familia.jpg',
  'retirada-caicaras.jpg',
  'retirada-caiçaras.jpg'
];

async function optimizeAll() {
  const publicDir = path.resolve(__dirname, '../public');
  for (const filename of targets) {
    const filePath = path.join(publicDir, filename);
    if (!fs.existsSync(filePath)) continue;

    try {
      const inputBuffer = fs.readFileSync(filePath);
      const metadata = await sharp(inputBuffer).metadata();
      const width = metadata.width > 1600 ? 1600 : null;

      let pipeline = sharp(inputBuffer);
      if (width) {
        pipeline = pipeline.resize({ width, withoutEnlargement: true });
      }
      const outputBuffer = await pipeline
        .jpeg({ quality: 85, mozjpeg: true })
        .toBuffer();

      fs.writeFileSync(filePath, outputBuffer);
      console.log(`Optimized ${filename}: ${Math.round(outputBuffer.length / 1024)} KB (original was ${Math.round(inputBuffer.length / 1024)} KB)`);
    } catch (err) {
      console.error(`Error optimizing ${filename}:`, err.message);
    }
  }

  // Remove any opt_ files if left
  fs.readdirSync(publicDir).forEach(f => {
    if (f.startsWith('opt_')) {
      fs.unlinkSync(path.join(publicDir, f));
    }
  });
}

optimizeAll().then(() => console.log('Optimization complete!'));
