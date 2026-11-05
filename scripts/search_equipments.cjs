const https = require('https');

function searchCommons(query, limit = 8) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrnamespace=6&prop=imageinfo&iiprop=url|mime&gsrlimit=' + limit + '&format=json';
    https.get(url, { headers: { 'User-Agent': 'PiscinasNaHoraBH_Bot/1.0 (https://piscinasnahorabh.com.br; dev@piscinasnahorabh.com.br)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const list = [];
          for (const k in pages) {
            const p = pages[k];
            const info = p.imageinfo?.[0];
            if (info && info.mime === 'image/jpeg') {
              list.push({ title: p.title, url: info.url });
            }
          }
          resolve(list);
        } catch(e) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const items = [
    { cat: 'pump/filter', q: 'pool filter pump' },
    { cat: 'pool maintenance/chlorine', q: 'swimming pool skimmer net' },
    { cat: 'pool water test', q: 'pool water test' },
    { cat: 'pool cover', q: 'pool solar cover OR pool leaf cover' },
    { cat: 'camping', q: 'camping tent campsite campfire' }
  ];
  for (const item of items) {
    console.log('=== ' + item.cat + ' ===');
    const res = await searchCommons(item.q, 6);
    res.forEach(r => console.log('  ' + r.title + ' -> ' + r.url.split('?')[0]));
  }
}
run();
