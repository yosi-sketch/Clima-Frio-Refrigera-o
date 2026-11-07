const fs = require('fs');

const html = fs.readFileSync('outputs/obra_14.html', 'latin1');
console.log('Length:', html.length);
const srcRegex = /src=["']([^"']+)["']/gi;
let m;
while ((m = srcRegex.exec(html)) !== null) {
  console.log('src:', m[1]);
}
const bgRegex = /background(?:-image)?:\s*url\(['"]?([^'")]+)['"]?\)/gi;
while ((m = bgRegex.exec(html)) !== null) {
  console.log('bg:', m[1]);
}
const hrefRegex = /href=["']([^"']+)["']/gi;
while ((m = hrefRegex.exec(html)) !== null) {
  if (m[1].match(/\.(jpg|jpeg|png|webp)/i)) {
    console.log('image link:', m[1]);
  }
}
