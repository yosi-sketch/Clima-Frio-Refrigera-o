const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('outputs').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(path.join('outputs', f), 'latin1');
  const clean = content
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  console.log(`\n================= ${f} =================`);
  console.log(clean.slice(0, 1500));
});
