const sharp = require('sharp');
const fs = require('fs');

async function buildAllImages() {
  console.log('Building all final production images...');

  // 1. PRODUCTS (800x600)
  
  // Balcão Auto-Serviço Multi-Deck
  await sharp('temp_multideck.jpg')
    .extract({ left: 150, top: 450, width: 2950, height: 1850 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/products/balcao-auto-servico.jpg');
  console.log('✓ public/images/products/balcao-auto-servico.jpg');

  // Ilha de Congelados Panorâmica (Tight crop removing the easter egg box completely)
  await sharp('temp_island_freezer.jpg')
    .extract({ left: 0, top: 180, width: 2800, height: 2100 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/products/ilha-congelados-supermercado.jpg');
  console.log('✓ public/images/products/ilha-congelados-supermercado.jpg');

  // Câmara Frigorífica Modular
  await sharp('temp_cold_room.jpg')
    .extract({ left: 0, top: 220, width: 1162, height: 1450 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/products/camara-frigorifica-modular.jpg');
  console.log('✓ public/images/products/camara-frigorifica-modular.jpg');

  // Porta Frigorífica Industrial Pesada
  await sharp('temp_sliding_door.jpg')
    .extract({ left: 30, top: 220, width: 1140, height: 1280 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/products/porta-frigorifica-pesada.jpg');
  console.log('✓ public/images/products/porta-frigorifica-pesada.jpg');

  // Refrigerador Industrial Inox
  await sharp('test_kitchen_equip.jpg')
    .extract({ left: 300, top: 1200, width: 3400, height: 2550 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/products/refrigerador-industrial-inox.jpg');
  console.log('✓ public/images/products/refrigerador-industrial-inox.jpg');

  // 2. OBRAS REAIS EXECUTADAS (800x600)

  // Supermercado Expositores
  await sharp('test_supermarket_line.jpg')
    .extract({ left: 50, top: 300, width: 3800, height: 2500 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/obras/obra-supermercado-expositores.jpg');
  console.log('✓ public/images/obras/obra-supermercado-expositores.jpg');

  // Açougue Vitrines
  await sharp('test_butcher.jpg')
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/obras/obra-acougue-vitrines.jpg');
  console.log('✓ public/images/obras/obra-acougue-vitrines.jpg');

  // Padaria Balcões
  await sharp('test_bakery.jpg')
    .extract({ left: 200, top: 800, width: 5700, height: 5000 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/obras/obra-padaria-balcoes.jpg');
  console.log('✓ public/images/obras/obra-padaria-balcoes.jpg');

  // Distribuidora Câmara Fria
  await sharp('temp_cold_room.jpg')
    .extract({ left: 0, top: 100, width: 1162, height: 1450 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/obras/obra-distribuidora-camara-fria.jpg');
  console.log('✓ public/images/obras/obra-distribuidora-camara-fria.jpg');

  // Conveniência Walk-In / Beer Cave
  await sharp('test_beer_cave.jpg')
    .extract({ left: 0, top: 150, width: 3850, height: 2650 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/obras/obra-conveniencia-walk-in.jpg');
  console.log('✓ public/images/obras/obra-conveniencia-walk-in.jpg');

  // Cozinha Industrial
  await sharp('test_prof_kitchen.jpg')
    .extract({ left: 0, top: 150, width: 768, height: 850 })
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/obras/obra-cozinha-industrial.jpg');
  console.log('✓ public/images/obras/obra-cozinha-industrial.jpg');

  // 3. HERO SLIDES (1400x800)

  // Banner Freezers
  await sharp('test_supermarket_line.jpg')
    .extract({ left: 100, top: 400, width: 3800, height: 2200 })
    .resize(1400, 800, { fit: 'cover' })
    .jpeg({ quality: 92, progressive: true })
    .toFile('public/images/hero/banner-destaque-freezers.jpg');
  console.log('✓ public/images/hero/banner-destaque-freezers.jpg');

  // Banner Câmara Fria
  await sharp('temp_sliding_door.jpg')
    .extract({ left: 0, top: 150, width: 1200, height: 1100 })
    .resize(1400, 800, { fit: 'cover' })
    .jpeg({ quality: 92, progressive: true })
    .toFile('public/images/hero/banner-destaque-camara-fria.jpg');
  console.log('✓ public/images/hero/banner-destaque-camara-fria.jpg');

  // Banner Balcões
  await sharp('test_butcher.jpg')
    .resize(1400, 800, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 92, progressive: true })
    .toFile('public/images/hero/banner-destaque-balcoes.jpg');
  console.log('✓ public/images/hero/banner-destaque-balcoes.jpg');

  // 4. FÁBRICA / INDÚSTRIA (1000x650 and 800x600)
  if (fs.existsSync('test_factory_interior.jpg')) {
    await sharp('test_factory_interior.jpg')
      .extract({ left: 0, top: 100, width: 3264, height: 2120 })
      .resize(1000, 650, { fit: 'cover' })
      .jpeg({ quality: 90, progressive: true })
      .toFile('public/images/fabrica/fabrica-friomax-sede.jpg');
    console.log('✓ public/images/fabrica/fabrica-friomax-sede.jpg');

    await sharp('test_factory_interior.jpg')
      .extract({ left: 0, top: 700, width: 2200, height: 1650 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 90, progressive: true })
      .toFile('public/images/fabrica/fabrica-montagem-inox.jpg');
    console.log('✓ public/images/fabrica/fabrica-montagem-inox.jpg');
  }

  console.log('All image assets have been successfully rebuilt!');
}

buildAllImages().catch(console.error);
