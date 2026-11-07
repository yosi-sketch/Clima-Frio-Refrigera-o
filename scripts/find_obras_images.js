const fs = require('fs');

const files = ['obras.html', 'produtos_isopaineis_17.html', 'produtos_portas-frigorificas_29.html', 'produtos_placas-isolantes_28.html', 'produtos_telhas_31.html'];

files.forEach(f => {
  const p = 'outputs/' + f;
  if (!fs.existsSync(p)) return;
  const html = fs.readFileSync(p, 'latin1');
  const imgs = [...html.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
  const links = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
  console.log(`=== ${f} ===`);
  console.log('Images:', imgs);
  console.log('Links:', links.filter(l => !l.includes('google') && !l.includes('webmail') && !l.includes('#')));
});
