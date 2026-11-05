const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../app/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const lines = content.split(/\r?\n/);

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.includes('image: "=5"')) {
    const context = lines.slice(Math.max(0, i - 10), i).join(' ');
    if (context.includes('boias-colchoes-brinquedos')) {
      lines[i] = line.replace('image: "=5"', 'image: "/boias-brinquedos.jpg?v=5"');
    } else if (context.includes('filtros-bombas-manutencao')) {
      lines[i] = line.replace('image: "=5"', 'image: "/filtro-bomba.jpg?v=5"');
    } else if (context.includes('quimicos-tratamento-agua')) {
      lines[i] = line.replace('image: "=5"', 'image: "/tratamento-agua.jpg?v=5"');
    } else if (context.includes('retirada-imediata-entrega-bh')) {
      lines[i] = line.replace('image: "=5"', 'image: "/retirada-caicaras.jpg?v=5"');
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Final replacement complete!');
