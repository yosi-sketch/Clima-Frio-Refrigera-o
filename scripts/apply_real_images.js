const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImages() {
  console.log('--- Processing All Refrigeration Images ---');

  // 1. PRODUCTS (800x600)
  
  // Balcão Auto-Serviço Multi-Deck Aberto
  // Using temp_multideck.jpg (3264x2448) - focus on the refrigerated open shelves
  if (fs.existsSync('temp_multideck.jpg')) {
    await sharp('temp_multideck.jpg')
      .extract({ left: 100, top: 400, width: 3000, height: 1800 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/products/balcao-auto-servico.jpg');
    console.log('✓ Updated public/images/products/balcao-auto-servico.jpg');
  }

  // Ilha de Congelados Panorâmica para Supermercados
  // Using temp_island_freezer.jpg (3820x2865) - crop out the right corner basket and focus on the island freezer
  if (fs.existsSync('temp_island_freezer.jpg')) {
    await sharp('temp_island_freezer.jpg')
      .extract({ left: 0, top: 180, width: 3200, height: 2400 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/products/ilha-congelados-supermercado.jpg');
    console.log('✓ Updated public/images/products/ilha-congelados-supermercado.jpg');
  }

  // Câmara Frigorífica Modular Sob Medida
  // Using temp_cold_room.jpg (1162x2048) - cold room with evaporators and PUR panels
  if (fs.existsSync('temp_cold_room.jpg')) {
    await sharp('temp_cold_room.jpg')
      .extract({ left: 0, top: 200, width: 1162, height: 1450 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/products/camara-frigorifica-modular.jpg');
    console.log('✓ Updated public/images/products/camara-frigorifica-modular.jpg');
  }

  // Porta Frigorífica Industrial Pesada
  // Using temp_sliding_door.jpg (1200x1600) - heavy duty sliding door with controllers and ramp
  if (fs.existsSync('temp_sliding_door.jpg')) {
    await sharp('temp_sliding_door.jpg')
      .extract({ left: 50, top: 220, width: 1100, height: 1250 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/products/porta-frigorifica-pesada.jpg');
    console.log('✓ Updated public/images/products/porta-frigorifica-pesada.jpg');
  }

  // Refrigerador Industrial Inox
  // Using test_jika_udon.jpg (2448x3264) - commercial reach-in upright refrigerators with digital displays
  if (fs.existsSync('test_jika_udon.jpg')) {
    await sharp('test_jika_udon.jpg')
      .extract({ left: 0, top: 0, width: 2400, height: 2800 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/products/refrigerador-industrial-inox.jpg');
    console.log('✓ Updated public/images/products/refrigerador-industrial-inox.jpg');
  }

  // 2. OBRAS / INSTALAÇÕES CLIENTES (800x600)

  // Supermercado & Bateria de Expositores em Linha
  // Using test_supermarket_line.jpg (4032x3024)
  if (fs.existsSync('test_supermarket_line.jpg')) {
    await sharp('test_supermarket_line.jpg')
      .extract({ left: 50, top: 300, width: 3800, height: 2500 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/obras/obra-supermercado-expositores.jpg');
    console.log('✓ Updated public/images/obras/obra-supermercado-expositores.jpg');
  }

  // Casa de Carnes & Boutique de Cortes Nobres
  // Using test_butcher.jpg (4111x2098)
  if (fs.existsSync('test_butcher.jpg')) {
    await sharp('test_butcher.jpg')
      .resize(800, 600, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/obras/obra-acougue-vitrines.jpg');
    console.log('✓ Updated public/images/obras/obra-acougue-vitrines.jpg');
  }

  // Rede de Padarias & Confeitarias Gourmet
  // Using test_bakery.jpg (6144x8160)
  if (fs.existsSync('test_bakery.jpg')) {
    await sharp('test_bakery.jpg')
      .extract({ left: 200, top: 800, width: 5700, height: 5000 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/obras/obra-padaria-balcoes.jpg');
    console.log('✓ Updated public/images/obras/obra-padaria-balcoes.jpg');
  }

  // Centro de Distribuição & Armazenagem Frigorificada
  // Using temp_cold_room.jpg (1162x2048)
  if (fs.existsSync('temp_cold_room.jpg')) {
    await sharp('temp_cold_room.jpg')
      .extract({ left: 0, top: 150, width: 1162, height: 1400 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/obras/obra-distribuidora-camara-fria.jpg');
    console.log('✓ Updated public/images/obras/obra-distribuidora-camara-fria.jpg');
  }

  // Loja de Conveniência & Beer Cave Gelada
  // Using test_beer_cave.jpg (4032x3024)
  if (fs.existsSync('test_beer_cave.jpg')) {
    await sharp('test_beer_cave.jpg')
      .extract({ left: 0, top: 200, width: 3800, height: 2600 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/obras/obra-conveniencia-walk-in.jpg');
    console.log('✓ Updated public/images/obras/obra-conveniencia-walk-in.jpg');
  }

  // Cozinha Industrial & Restaurante de Alta Demanda
  // Using test_kitchen_equip.jpg (4016x6016)
  if (fs.existsSync('test_kitchen_equip.jpg')) {
    await sharp('test_kitchen_equip.jpg')
      .extract({ left: 0, top: 800, width: 4016, height: 4200 })
      .resize(800, 600, { fit: 'cover' })
      .jpeg({ quality: 88, progressive: true })
      .toFile('public/images/obras/obra-cozinha-industrial.jpg');
    console.log('✓ Updated public/images/obras/obra-cozinha-industrial.jpg');
  }

  // 3. HERO SLIDES (1400x800)

  // Banner Freezers Comerciais
  if (fs.existsSync('test_supermarket_line.jpg')) {
    await sharp('test_supermarket_line.jpg')
      .extract({ left: 100, top: 400, width: 3800, height: 2200 })
      .resize(1400, 800, { fit: 'cover' })
      .jpeg({ quality: 90, progressive: true })
      .toFile('public/images/hero/banner-destaque-freezers.jpg');
    console.log('✓ Updated public/images/hero/banner-destaque-freezers.jpg');
  }

  // Banner Câmaras Frigoríficas
  if (fs.existsSync('temp_sliding_door.jpg')) {
    await sharp('temp_sliding_door.jpg')
      .extract({ left: 0, top: 150, width: 1200, height: 1100 })
      .resize(1400, 800, { fit: 'cover' })
      .jpeg({ quality: 90, progressive: true })
      .toFile('public/images/hero/banner-destaque-camara-fria.jpg');
    console.log('✓ Updated public/images/hero/banner-destaque-camara-fria.jpg');
  }

  // Banner Balcões e Vitrines
  if (fs.existsSync('test_butcher.jpg')) {
    await sharp('test_butcher.jpg')
      .resize(1400, 800, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 90, progressive: true })
      .toFile('public/images/hero/banner-destaque-balcoes.jpg');
    console.log('✓ Updated public/images/hero/banner-destaque-balcoes.jpg');
  }

  console.log('--- All Images Successfully Replaced and Processed! ---');
}

processImages().catch(console.error);
