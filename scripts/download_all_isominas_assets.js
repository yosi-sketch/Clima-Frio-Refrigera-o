const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchBuffer(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

// Map key GalaxCMS images to clean, descriptive names in public/images
const imagesToDownload = [
  // Isopainéis
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/ISOPAINeISEPS50MMA200MM-20151217123501.jpg', name: 'isopainel-eps-painel-1.jpg', category: 'isopaineis' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/ISOPAINeISEPS50MMA200MM-20151217123538.jpg', name: 'isopainel-eps-corte-detalhe.jpg', category: 'isopaineis' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/ISOPAINeISEPS50MMA200MM-20151217123555.jpg', name: 'isopainel-eps-encaixe-macho-femea.jpg', category: 'isopaineis' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/ISOPAINeISPUR-20151217123328.jpg', name: 'isopainel-pur-poliuretano.jpg', category: 'isopaineis' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/IsopaineisEPS50mma200mm-20130129090616.jpg', name: 'isopainel-estoque-fabrica.jpg', category: 'isopaineis' },
  
  // Portas Frigoríficas & Industriais
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAFRIGORiFICAGIRAToRIA-20151217122034.jpg', name: 'porta-giratoria-industrial.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAFRIGORiFICAGIRAToRIA-20151217121926.jpg', name: 'porta-giratoria-acabamento.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAFRIGORiFICADECORRER-20151217122111.jpg', name: 'porta-frigorifica-correr.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTACORRERAUTOMaTICA-20151214172828.jpg', name: 'porta-correr-automatica.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAVERTICALSECCIONAL-20151210165243.jpg', name: 'porta-vertical-seccional.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAGIRAToRIASALALIMPA-20151210171237.jpg', name: 'porta-giratoria-sala-limpa.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTACORRERSALALIMPA-20151210171912.jpg', name: 'porta-correr-sala-limpa.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAVAIEVEM-20151217122240.jpg', name: 'porta-vai-e-vem.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTINHOLA-20151217122741.jpg', name: 'portinhola-inspecao.jpg', category: 'portas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/PORTAFRIGORIFICAGIRAToRIACOMPASSAGEMDETRILHO-20151217122004.jpg', name: 'porta-passagem-trilho.jpg', category: 'portas' },

  // Placas Isolantes
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/ChapadeEPS-20130129084026.jpg', name: 'placas-eps-isolamento-piso.jpg', category: 'placas' },

  // Telhas Térmicas e Singelas
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/TELHASTeRMICASEPS-20151210171048.jpg', name: 'telhas-termicas-eps-sanduiche.jpg', category: 'telhas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/TELHASSINGELAS-20151222100458.jpg', name: 'telhas-singelas-trapezoidal.jpg', category: 'telhas' },
  { url: 'http://www.galaxcms.com.br/imgs_produtos/642/TELHASPRe-PINTADAS-20151222100528.jpg', name: 'telhas-pre-pintadas.jpg', category: 'telhas' },

  // Obras Reais e Instalações
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Camaradebatatas-20140228114809.jpg', name: 'obra-camara-frigorifica-batatas.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Centrodistribuicaologistica-20151117171455.jpg', name: 'obra-centro-distribuicao-logistica.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Centrodistribuicaologistica-20151117171609.jpg', name: 'obra-centro-logistico-camara-fria.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Centrodistribuicaologistica-20140228114007.jpg', name: 'obra-camara-paletizada.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Frigorificosuino-20140228113350.jpg', name: 'obra-frigorifico-suino-sala-cortes.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Frigorificosuino-20140228113545.jpg', name: 'obra-frigorifico-tunel-congelamento.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Frigorificopeixes-20140228113704.jpg', name: 'obra-frigorifico-peixes-processamento.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Fabricadegelo-20140228114345.jpg', name: 'obra-fabrica-de-gelo-armazenamento.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/Fabricadegelo-20140228114539.jpg', name: 'obra-fabrica-de-gelo-painel.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/FaculdadeUnoparSeteLagoas-20130328151654.jpg', name: 'obra-fachada-termica-institucional.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/SHOPPINGCENTERS-20151210164554.jpg', name: 'obra-shopping-center-fechamento.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/ObrasIsominas-20130116160217.jpg', name: 'obra-galpao-industrial-isopainel.jpg', category: 'obras' },
  { url: 'http://www.galaxcms.com.br/imgs_galerias/642/ObrasIsominas-20130116160225.jpg', name: 'obra-galpao-cobertura-termica.jpg', category: 'obras' },

  // Banners e Crops de Destaque
  { url: 'http://www.galaxcms.com.br/imgs_imgscrop/642/99b69e6414d847e3f46ca06f76658fa3-20151117160928.jpg', name: 'banner-destaque-camara-fria.jpg', category: 'banners' },
  { url: 'http://www.galaxcms.com.br/imgs_imgscrop/642/745da6303d1a8ba7827578c03e6cfaed-20151214172557.jpg', name: 'banner-destaque-portas.jpg', category: 'banners' },
  { url: 'http://www.galaxcms.com.br/imgs_imgscrop/642/1f4cc2e4d4d41de5f6148e9a28aad7f0-20151210161800.jpg', name: 'banner-destaque-painel-modular.jpg', category: 'banners' }
];

async function run() {
  fs.mkdirSync('public/images/products', { recursive: true });
  fs.mkdirSync('public/images/obras', { recursive: true });
  fs.mkdirSync('public/images/hero', { recursive: true });

  console.log(`Starting download of ${imagesToDownload.length} official images...`);
  let success = 0;

  for (const item of imagesToDownload) {
    const subfolder = item.category === 'obras' ? 'obras' : (item.category === 'banners' ? 'hero' : 'products');
    const dest = path.join('public', 'images', subfolder, item.name);
    try {
      console.log(`Downloading: ${item.name} from ${item.url}`);
      const buf = await fetchBuffer(item.url);
      fs.writeFileSync(dest, buf);
      console.log(`-> Saved: ${dest} (${buf.length} bytes)`);
      success++;
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }

  console.log(`\nCompleted! Successfully downloaded ${success}/${imagesToDownload.length} assets.`);
}

run();
