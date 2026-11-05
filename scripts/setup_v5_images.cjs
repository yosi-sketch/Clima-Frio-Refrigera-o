const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const appPage = path.resolve(__dirname, '../app/page.tsx');

const imageList = [
  'hero-pool',
  'piscina-armacao',
  'piscina-inflavel',
  'boias-brinquedos',
  'filtro-bomba',
  'tratamento-agua',
  'capas-acessorios',
  'camping-lazer',
  'sobre-familia',
  'retirada-caicaras'
];

// 1. Copy files to -v5.jpg in public/
for (const name of imageList) {
  const src = path.join(publicDir, `${name}.jpg`);
  const dest = path.join(publicDir, `${name}-v5.jpg`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${name}.jpg -> ${name}-v5.jpg (${fs.statSync(dest).size} bytes)`);
  }
}

// Also copy retirada-caiçaras-v5.jpg
if (fs.existsSync(path.join(publicDir, 'retirada-caicaras.jpg'))) {
  fs.copyFileSync(path.join(publicDir, 'retirada-caicaras.jpg'), path.join(publicDir, 'retirada-caiçaras-v5.jpg'));
}

// 2. Update app/page.tsx to replace .jpg?v=5 with -v5.jpg
let code = fs.readFileSync(appPage, 'utf8');

for (const name of imageList) {
  const regex = new RegExp(`/${name}\\.jpg(?:\\?v=\\d+)?`, 'g');
  code = code.replace(regex, `/${name}-v5.jpg`);
}

fs.writeFileSync(appPage, code, 'utf8');
console.log('Updated app/page.tsx to use clean -v5.jpg paths!');
