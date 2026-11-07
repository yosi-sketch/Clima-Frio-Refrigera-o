const fs = require('fs');

function parse(filename) {
  console.log(`\n================== PARSING: ${filename} ==================`);
  if (!fs.existsSync(filename)) {
    console.log('File not found:', filename);
    return;
  }
  const html = fs.readFileSync(filename, 'utf-8');
  
  // Extract links
  const linkMatches = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const links = linkMatches.map(m => ({
    href: m[1],
    text: m[2].replace(/<[^>]+>/g, '').trim()
  })).filter(l => l.text.length > 0 || l.href.length > 1);
  console.log('--- Found Links ---');
  links.forEach(l => console.log(`${l.text} -> ${l.href}`));

  // Extract images
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  console.log('\n--- Found Images ---');
  imgMatches.forEach(m => console.log(m[1]));

  // Clean text
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&atilde;/g, 'ã')
    .replace(/&eacute;/g, 'é')
    .replace(/&oacute;/g, 'ó')
    .replace(/&iacute;/g, 'í')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ecirc;/g, 'ê')
    .replace(/\s+/g, ' ')
    .trim();

  console.log('\n--- Text Excerpt ---');
  console.log(clean.slice(0, 4000));
}

parse('outputs/_.html');
parse('outputs/_contato.html');
