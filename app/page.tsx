"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Snowflake,
  Flame,
  ThermometerSnowflake,
  Building2,
  Factory,
  ExternalLink,
  MessageCircle,
  Calculator,
  Compass,
  Maximize2,
  HelpCircle,
  Award,
  Zap,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// ==========================================
// DADOS OFICIAIS — FRIOMAX REFRIGERAÇÃO
// ==========================================
const COMPANY_NAME = "Friomax Refrigeração";
const COMPANY_LEGAL_NAME =
  "FRIOMAX INDÚSTRIA E COMÉRCIO DE REFRIGERAÇÃO LTDA";
const COMPANY_SLOGAN = "Friomax, a diferença está na qualidade!";
const WHATSAPP_NUMBER = "553135032400";
const WHATSAPP_DISPLAY = "(31) 3503-2400";
const PHONE_DISPLAY = "(31) 3503-2400";
const EMAIL_CONTACT = "contato@friomax.com.br";
const EMAIL_SALES = "vendas@friomax.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/friomax1991/";
const WEBSITE_URL = "https://www.friomax.com.br/";

const PRIMARY_FACTORY_ADDRESS =
  "R. São Paulo, 1500 - Nova Pampulha, Vespasiano - MG, CEP 33200-000";

const GOOGLE_RATING = "4,4";
const GOOGLE_REVIEW_COUNT = "41";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Friomax+Refrigera%C3%A7%C3%A3o+e+Climatiza%C3%A7%C3%A3o+Vespasiano+MG";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Friomax+Refrigera%C3%A7%C3%A3o+R.+S%C3%A3o+Paulo%2C+1500+-+Nova+Pampulha%2C+Vespasiano+-+MG%2C+33200-000";

// Assets Oficiais Friomax
const LOGO_SRC = "/logo.png";
const LOGO_FULL_SRC = "/logo.png";
const MASCOT_SRC = "/mascot.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de solicitar um orçamento de equipamentos de refrigeração comercial direto da fábrica com a equipe técnica da Friomax.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

// ==========================================
// DESTAQUES DO HERO (SLIDES INTERATIVOS)
// ==========================================
interface HeroSlideItem {
  id: string;
  title: string;
  badge: string;
  range: string;
  description: string;
  image: string;
}

const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: "freezers",
    title: "Freezers Comerciais & Expositores",
    badge: "Vidro Térmico Duplo Antiembaçante",
    range: "De 0°C a -22°C",
    description:
      "Máxima visibilidade e congelamento ultra-rápido para sorvetes, gelo, bebidas e carnes. Ar forçado frost-free e baixo consumo elétrico.",
    image: "/images/hero/banner-destaque-freezers.jpg",
  },
  {
    id: "camaras",
    title: "Câmaras Frigoríficas Modulares",
    badge: "Isolamento PUR de Alta Densidade",
    range: "De +15°C até -35°C",
    description:
      "Projetos sob medida para supermercados, açougues e centros de distribuição. Vedação hermética contínua e economia comprovada.",
    image: "/images/hero/banner-destaque-camara-fria.jpg",
  },
  {
    id: "balcoes",
    title: "Balcões & Vitrines Refrigeradas",
    badge: "Aço Inox & Iluminação LED Especial",
    range: "De +1°C a +7°C",
    description:
      "Vitrines de alta valorização visual para açougues, padarias e laticínios. Conservação térmica ideal que valoriza a exposição das mercadorias.",
    image: "/images/hero/banner-destaque-balcoes.jpg",
  },
];

// ==========================================
// TIPAGEM DOS PRODUTOS & EQUIPAMENTOS
// ==========================================
interface ProductItem {
  id: string;
  name: string;
  category: "freezers" | "vitrines" | "industriais" | "camaras";
  categoryLabel: string;
  badge: string;
  tagline: string;
  image: string;
  capacity: string;
  temperature: string;
  specs: { label: string; value: string }[];
  applications: string[];
  description: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "freezer-vertical-expositor",
    name: "Freezer Vertical Expositor com Vidro Aquecido",
    category: "freezers",
    categoryLabel: "Freezers Comerciais",
    badge: "Líder de Vendas no Comércio",
    tagline: "Porta de vidro duplo temperado antiembaçante com iluminação vertical em LED",
    image: "/images/products/freezer-vertical-expositor.jpg",
    capacity: "450L / 600L / 1.000L",
    temperature: "-18°C a -22°C (Congelados) ou 0°C a +5°C",
    specs: [
      { label: "Portas", value: "1 ou 2 portas com fechamento automático" },
      { label: "Vidro", value: "Duplo temperado com resistência térmica" },
      { label: "Refrigeração", value: "Ar forçado Frost-Free" },
      { label: "Controlador", value: "Digital eletrônico com degelo automático" },
      { label: "Prateleiras", value: "Aramadas reforçadas com regulagem de altura" },
      { label: "Gabinete", value: "Poliuretano injetado de alta densidade" },
    ],
    applications: [
      "Armazenamento e exposição de gelo e sorvetes",
      "Bebidas geladas, cervejas e refrigerantes",
      "Carnes embaladas, congelados e polpas",
      "Supermercados, padarias e lojas de conveniência",
    ],
    description:
      "Desenvolvido para resistir a aberturas constantes em ambientes comerciais de alto fluxo. O sistema de aquecimento do marco e vidro impede qualquer condensação ou embaçamento, mantendo os produtos 100% visíveis e atraentes para o consumidor final.",
  },
  {
    id: "freezer-horizontal-tampa-vidro",
    name: "Freezer Horizontal Expositor (Tampas Deslizantes)",
    category: "freezers",
    categoryLabel: "Freezers Comerciais",
    badge: "Máxima Eficiência Térmica",
    tagline: "Tampas de vidro curvo temperado de baixa emissividade e alta retenção de frio",
    image: "/images/products/freezer-horizontal-tampa-vidro.jpg",
    capacity: "350L a 750L",
    temperature: "-18°C a -24°C",
    specs: [
      { label: "Tampas", value: "Vidro curvo deslizante com trava" },
      { label: "Isolamento", value: "Poliuretano PUR 70mm ecológico" },
      { label: "Dreno", value: "Frontal para escoamento e limpeza rápida" },
      { label: "Rodízios", value: "Duplos reforçados para fácil locomoção" },
      { label: "Cestos", value: "Removíveis em aço termoplastificado" },
      { label: "Consumo", value: "Motor ecológico de classe A" },
    ],
    applications: [
      "Venda de picolés, sorvetes de massa e sobremesas",
      "Sacos de gelo em cubos e escamas",
      "Aves, pescados e legumes congelados",
      "Empórios, mercearias e postos de combustível",
    ],
    description:
      "Estrutura monobloco robusta fabricada com chapa tratada anticorrosiva e injeção de alta pressão de poliuretano expandido. Permite excelente retenção de frio mesmo em caso de interrupção elétrica momentânea.",
  },
  {
    id: "balcao-refrigerado-vitrine",
    name: "Balcão Vitrine Refrigerado para Açougue & Carnes",
    category: "vitrines",
    categoryLabel: "Balcões & Vitrines",
    badge: "Padrão Sanitário em Aço Inox",
    tagline: "Bancada de atendimento e bandejas em aço inox com iluminação realçadora de corte",
    image: "/images/products/balcao-refrigerado-vitrine.jpg",
    capacity: "1,5m a 3,0m de comprimento",
    temperature: "+1°C a +6°C (Resfriados)",
    specs: [
      { label: "Revestimento", value: "Aço Inox AISI 430/304 escovado" },
      { label: "Refrigeração", value: "Estática com serpentina aletada e placa fria" },
      { label: "Vidro Frontal", value: "Curvo ou reto temperado de alta segurança" },
      { label: "Iluminação", value: "LED especial tonalidade fria para carnes" },
      { label: "Depósito", value: "Inferior refrigerado com portas independentes" },
      { label: "Termômetro", value: "Analógico/Digital visível para o cliente" },
    ],
    applications: [
      "Açougues, boutiques de carnes e casas de assados",
      "Exposição de peças bovinas, suínas e aves frescas",
      "Queijos e frios em padarias e laticínios",
      "Supermercados e centros de carnes",
    ],
    description:
      "Projetado para manter a umidade natural da carne, evitando o ressecamento ou escurecimento dos cortes. O acabamento sanitário facilita a higienização rigorosa exigida pela vigilância sanitária.",
  },
  {
    id: "balcao-auto-servico",
    name: "Balcão Auto-Serviço Multi-Deck Aberto",
    category: "vitrines",
    categoryLabel: "Balcões & Vitrines",
    badge: "Acesso Rápido ao Consumidor",
    tagline: "Cortina de ar contínua que mantém a temperatura com acesso direto para compras por impulso",
    image: "/images/products/balcao-auto-servico.jpg",
    capacity: "1,2m a 2,5m modulável",
    temperature: "+2°C a +8°C",
    specs: [
      { label: "Cortina de Ar", value: "Fluxo laminar contínuo sem turbulência" },
      { label: "Prateleiras", value: "4 níveis reguláveis com porta-preços" },
      { label: "Iluminação", value: "LED em todos os níveis de prateleiras" },
      { label: "Cortina Noturna", value: "Inclusa para redução de 40% de energia" },
      { label: "Laterais", value: "Vidro duplo panorâmico ou espelhadas" },
      { label: "Degelo", value: "Automático programado por gás quente/timer" },
    ],
    applications: [
      "Bebidas lácteas, iogurtes e manteigas",
      "Embutidos fatiados, presuntos e queijos embalados",
      "Pratos prontos, massas frescas e sanduíches",
      "Supermercados, padarias gourmet e cafeterias",
    ],
    description:
      "A solução ideal para aumentar o ticket médio das lojas com vendas por impulso. O design moderno com cortina de ar otimizada assegura que os produtos permaneçam na temperatura adequada sem desconforto para o cliente.",
  },
  {
    id: "refrigerador-industrial-inox",
    name: "Refrigerador Industrial 2 a 6 Portas em Aço Inox",
    category: "industriais",
    categoryLabel: "Geladeiras Industriais",
    badge: "Estrutura Pesada para Gastronomia",
    tagline: "Construção 100% reforçada para cozinhas industriais, restaurantes e hospitais",
    image: "/images/products/refrigerador-industrial-inox.jpg",
    capacity: "700L a 1.800L (2, 4 ou 6 portas)",
    temperature: "0°C a +5°C (Resfriados) ou -15°C (Congelados)",
    specs: [
      { label: "Estrutura", value: "Aço Inox AISI 304/430 interno e externo" },
      { label: "Portas", value: "Com retorno automático e gaxetas magnéticas" },
      { label: "Compressor", value: "Unidade selada de alto torque de partida" },
      { label: "Gás Refrigerante", value: "Ecológico R-134a / R-404a" },
      { label: "Pés", value: "Niveladores em inox com regulagem de altura" },
      { label: "Gradeamento", value: "Prateleiras reforçadas para GN gastronorm" },
    ],
    applications: [
      "Cozinhas industriais e praças de alimentação",
      "Restaurantes à la carte, buffets e churrascarias",
      "Confeitarias e cozinhas de panificação",
      "Hospitais, laboratórios e refeitórios corporativos",
    ],
    description:
      "Projetado para suportar as condições mais severas de calor e umidade em cozinhas profissionais. O motor de alta capacidade garante rápida recuperação térmica a cada abertura de porta, garantindo a conservação dos alimentos conforme as normas ANVISA.",
  },
  {
    id: "ilha-congelados-supermercado",
    name: "Ilha de Congelados Panorâmica para Supermercados",
    category: "freezers",
    categoryLabel: "Freezers Comerciais",
    badge: "Alta Capacidade de Venda",
    tagline: "Visão panorâmica dos produtos com tampas deslizantes de vidro anti-reflexo",
    image: "/images/products/ilha-congelados-supermercado.jpg",
    capacity: "800L a 1.500L modulável em linha",
    temperature: "-18°C a -22°C",
    specs: [
      { label: "Vidros", value: "Temperados planos ou curvos de baixa reflexão" },
      { label: "Compressor", value: "Inverter ou convencional de alta eficiência" },
      { label: "Modulação", value: "Pode ser instalada individualmente ou em baterias" },
      { label: "Iluminação", value: "LED embutido de alta intensidade" },
      { label: "Divisórias", value: "Grades internas móveis organizadoras" },
      { label: "Proteção", value: "Bate-carrinho em PVC de alta resistência" },
    ],
    applications: [
      "Supermercados, atacarejos e hipermercados",
      "Exposição de carnes, peixes e hambúrgueres",
      "Congelados rápidos, pizzas e vegetais",
      "Distribuidoras de alimentos e empórios",
    ],
    description:
      "A linha de ilhas da Friomax reúne máxima visibilidade dos produtos com custo operacional reduzido. O sistema de condensação e evaporador aletado entrega resfriamento constante sem acúmulo excessivo de gelo nas paredes.",
  },
  {
    id: "camara-frigorifica-modular",
    name: "Câmara Frigorífica Modular Sob Medida",
    category: "camaras",
    categoryLabel: "Câmaras Frigoríficas",
    badge: "Engenharia Térmica Personalizada",
    tagline: "Isolamento contínuo em poliuretano PUR ou EPS com portas pesadas herméticas",
    image: "/images/products/camara-frigorifica-modular.jpg",
    capacity: "De 5 m³ a mais de 500 m³",
    temperature: "+15°C a -35°C",
    specs: [
      { label: "Paredes e Teto", value: "Painéis modulares macho-fêmea com vedação" },
      { label: "Núcleo", value: "Poliuretano PUR 40 kg/m³ ou EPS Classe F-1" },
      { label: "Porta", value: "Giratória ou de correr com destravamento interno" },
      { label: "Piso", value: "Isolamento em placas de alta densidade" },
      { label: "Unidade Condensadora", value: "Dimensionada para a carga térmica exata" },
      { label: "Quadro Elétrico", value: "Microprocessado com proteções eletrônicas" },
    ],
    applications: [
      "Câmaras de congelados para carnes, pescados e gelo",
      "Câmaras de resfriados para laticínios, verduras e frutas",
      "Beer Caves para postos de combustíveis e conveniências",
      "Centros de distribuição de hortifrúti e distribuidores",
    ],
    description:
      "Engenharia completa da Friomax desde a medição no local até a entrega e montagem. Cada câmara é dimensionada por técnicos que calculam a carga térmica real considerando fluxo de mercadorias, rotação de estoque e temperatura ambiente da sua região.",
  },
  {
    id: "porta-frigorifica-pesada",
    name: "Porta Frigorífica Industrial Pesada (Giratória e Correr)",
    category: "camaras",
    categoryLabel: "Câmaras Frigoríficas",
    badge: "Ferragens Industriais Robustas",
    tagline: "Resistência de silicone embutida no marco e vedação perimétrica estanque",
    image: "/images/products/porta-frigorifica-pesada.jpg",
    capacity: "Vão livre padrão ou sob medida",
    temperature: "Até -40°C",
    specs: [
      { label: "Ferragens", value: "Dobradiças e fechos industriais de alta carga" },
      { label: "Resistência", value: "Cabo térmico no batente para evitar travamento" },
      { label: "Batentes", value: "Injetados com poliuretano rígido de alta densidade" },
      { label: "Segurança", value: "Manípulo de destravamento interno de emergência" },
      { label: "Revestimento", value: "Aço pré-pintado ou aço inoxidável" },
      { label: "Vedação", value: "Gaxeta elastomérica com memória elástica" },
    ],
    applications: [
      "Docas e antecâmaras de galpões frigorificados",
      "Câmaras frias comerciais e industriais de grande circulação",
      "Passagem de paleteiras manuais e carrinhos de carga",
      "Salas climatizadas de manipulação e desossa",
    ],
    description:
      "Fabricada com reforços internos estruturais para resistir a milhares de ciclos diários sem desregulagem. Nas opções para congelamento, a resistência perimétrica impede que a umidade congele nas borrachas, preservando a vida útil do conjunto.",
  },
];

// ==========================================
// OBRAS REAIS EXECUTADAS & CLIENTES
// ==========================================
interface ObraItem {
  id: string;
  title: string;
  category: "supermercados" | "acougues" | "padarias" | "distribuidoras";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  scope: string;
}

const OBRAS_DATA: ObraItem[] = [
  {
    id: "supermercado-expositores",
    title: "Supermercado & Bateria de Expositores em Linha",
    category: "supermercados",
    categoryLabel: "Supermercados",
    image: "/images/obras/obra-supermercado-expositores.jpg",
    location: "Vespasiano / MG",
    description:
      "Instalação completa de corredores refrigerados, ilhas centrais de congelados com vidro curvo e vitrines de auto-serviço multi-deck para laticínios.",
    scope: "12 módulos de expositores verticais, 4 ilhas de congelados e balcões de corte.",
  },
  {
    id: "acougue-vitrines",
    title: "Casa de Carnes & Boutique de Cortes Nobres",
    category: "acougues",
    categoryLabel: "Casas de Carnes",
    image: "/images/obras/obra-acougue-vitrines.jpg",
    location: "Belo Horizonte / MG",
    description:
      "Balcões frigoríficos contínuos em aço inox AISI 304 com iluminação LED especializada para carnes vermelhas e câmara de desossa acoplada.",
    scope: "Vitrines de atendimento em curva, câmara fria de carcaças e bancadas inox.",
  },
  {
    id: "padaria-balcoes",
    title: "Rede de Padarias & Confeitarias Gourmet",
    category: "padarias",
    categoryLabel: "Padarias & Empórios",
    image: "/images/obras/obra-padaria-balcoes.jpg",
    location: "Região Metropolitana / MG",
    description:
      "Vitrines refrigeradas panorâmicas para sobremesas, tortas geladas e frios com vidros retos térmicos e refrigeração estática suave.",
    scope: "Balcões térmicos e refrigerados alinhados com acabamento em marcenaria e inox.",
  },
  {
    id: "distribuidora-camara",
    title: "Centro de Distribuição & Armazenagem Frigorificada",
    category: "distribuidoras",
    categoryLabel: "Centros de Distribuição",
    image: "/images/obras/obra-distribuidora-camara-fria.jpg",
    location: "Vetor Norte / MG",
    description:
      "Câmara frigorífica de grande porte com controle de temperatura de precisão para estocagem paletizada de produtos lácteos e carnes resfriadas.",
    scope: "Isolamento térmico em PUR, portas de correr industriais e unidades condensadoras.",
  },
  {
    id: "conveniencia-walkin",
    title: "Loja de Conveniência & Beer Cave Gelada",
    category: "supermercados",
    categoryLabel: "Conveniências & Beer Cave",
    image: "/images/obras/obra-conveniencia-walk-in.jpg",
    location: "Minas Gerais",
    description:
      "Expositor frontal de vidro térmico com câmara walk-in de abastecimento traseiro (gravitacional) para cervejas em temperatura negativa estalando.",
    scope: "Portas de vidro expositoras com abastecimento por trás e prateleiras inclinadas.",
  },
  {
    id: "cozinha-industrial",
    title: "Cozinha Industrial & Restaurante de Alta Demanda",
    category: "distribuidoras",
    categoryLabel: "Cozinhas Industriais",
    image: "/images/obras/obra-cozinha-industrial.jpg",
    location: "Belo Horizonte / MG",
    description:
      "Refrigeradores industriais verticais em aço inox escovado, bancadas de preparo refrigeradas e antecâmara para carnes e hortifrúti.",
    scope: "Refrigeradores 4 e 6 portas, balcões refrigerados de apoio e câmara de congelamento.",
  },
];

// ==========================================
// GOOGLE REVIEWS REAIS FORNECIDOS (4,4★)
// ==========================================
interface ReviewItem {
  author: string;
  badge: string;
  text: string;
  rating: number;
  timeAgo: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    author: "Rayane Meira Leles",
    badge: "Local Guide · 94 avaliações · 153 fotos",
    text: "Melhor empresa de equipamento de refrigeração. Friomax, a diferença está na qualidade.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Ana Castro",
    badge: "18 avaliações no Google",
    text: "Equipamentos de alta qualidade. Ótimo atendimento. Mercadorias entregue no prazo solicitado.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Bruno Fabiio",
    badge: "Local Guide · 16 avaliações",
    text: "Melhor freezers de Vespasiano. Equipamentos robustos que duram muitos anos sem dar problema.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Bruna Araujo",
    badge: "2 avaliações · 9 fotos",
    text: "Excelentes equipamentos! Recomendo. Muito bom atendimento da equipe técnica e comercial.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Antônio Jose (Zezé)",
    badge: "Local Guide · 15 avaliações · 21 fotos",
    text: "Fiz uma coleta lá e fui muito bem recebido a equipe está de parabéns! Estrutura impecável.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Frederick Afonso",
    badge: "4 avaliações no Google",
    text: "Melhores Equipamentos para refrigeração. Já compramos para nossos estabelecimentos e o frio é constante.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Sergio Araujo",
    badge: "Local Guide · 189 avaliações · 4 fotos",
    text: "Atendimento muito adequado em serviços de refrigeração. Pessoal técnico experiente e solícito.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Flávio Marcus",
    badge: "Local Guide · 31 avaliações · 3 fotos",
    text: "Conhecendo os produtos e a qualidade na fabricação. Empresa séria com décadas de tradição.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Lourenço Ferreira",
    badge: "2 avaliações no Google",
    text: "Empresa de Refrigeração comercial com compromisso no pós-venda e peças originais.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
  {
    author: "Ayslan Leles",
    badge: "Local Guide · 71 avaliações · 28 fotos",
    text: "Equipamentos de qualidade. Vale cada centavo investido para o comércio.",
    rating: 5,
    timeAgo: "Cliente Verificado",
  },
];

// ==========================================
// PERGUNTAS FREQUENTES (FAQ)
// ==========================================
const FAQS = [
  {
    question: "A Friomax fabrica equipamentos sob medida para meu comércio?",
    answer:
      "Sim! Fabricamos balcões expositores, vitrines em aço inox e câmaras frigoríficas nas dimensões exatas da sua loja, restaurante ou supermercado. Nossa equipe de engenharia térmica projeta cada detalhe para aproveitar ao máximo a sua planta e fluxo de clientes.",
  },
  {
    question: "Como os freezers e balcões da Friomax economizam energia elétrica?",
    answer:
      "Nossos equipamentos contam com injeção sob alta pressão de poliuretano expandido (PUR) ecológico de altíssima densidade, vidros duplos térmicos com gás argônio e compressores modernos de alto rendimento. Isso reduz o ciclo de acionamento do motor em até 35%, diminuindo diretamente a conta de luz.",
  },
  {
    question: "A Friomax entrega em Belo Horizonte, região metropolitana e outros estados?",
    answer:
      "Sim. Nossa fábrica está localizada na R. São Paulo, 1500 - Nova Pampulha, em Vespasiano - MG, com fácil acesso pelo Vetor Norte e BR-040. Entregamos e despachamos com frotas seguras para toda a Região Metropolitana de BH, interior de Minas Gerais e para todo o território nacional.",
  },
  {
    question: "Os equipamentos contam com garantia de fábrica e assistência técnica?",
    answer:
      "Com certeza. Como somos fábrica com mais de 30 anos no mercado (desde 1991), oferecemos garantia total de fabricação, assistência técnica especializada e estoque contínuo de peças de reposição originais, garantindo tranquilidade para o seu negócio não parar nunca.",
  },
  {
    question: "Quais são as opções de pagamento para equipar meu estabelecimento?",
    answer:
      "Trabalhamos com condições facilitadas para pessoa jurídica e produtores: parcelamento no cartão de crédito, faturamento via boleto para CNPJ sob análise cadastral, condições especiais para compra de lote completo e opções de financiamento para modernização comercial.",
  },
  {
    question: "Qual o prazo médio de fabricação e entrega dos equipamentos?",
    answer:
      "Possuímos diversos modelos de freezers verticais, horizontais e refrigeradores padrão à pronta-entrega em nossa expedição. Para projetos sob medida ou câmaras frigoríficas personalizadas, o prazo é combinado no orçamento, com cumprimento rigoroso do cronograma de entrega elogiado por nossos clientes.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeProductTab, setActiveProductTab] = useState<
    "todos" | "freezers" | "vitrines" | "industriais" | "camaras"
  >("todos");
  const [activeObraFilter, setActiveObraFilter] = useState<
    "todos" | "supermercados" | "acougues" | "padarias" | "distribuidoras"
  >("todos");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Troca automática de slides do hero (a cada 6 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Estados do Simulador de Refrigeração Comercial
  const [simBusinessType, setSimBusinessType] = useState<
    "supermercado" | "acougue" | "padaria" | "restaurante" | "distribuidora" | "conveniencia"
  >("supermercado");
  const [simProductCategory, setSimProductCategory] = useState<
    "freezer" | "balcao" | "camara" | "inox"
  >("freezer");
  const [simTempRange, setSimTempRange] = useState<"congelados" | "resfriados" | "ambos">("congelados");
  const [simStoreSize, setSimStoreSize] = useState<"pequeno" | "medio" | "grande">("medio");

  // Resultados calculados do Simulador
  const simResults = useMemo(() => {
    let recommendation = "Linha de Freezers Expositores Verticais Frost-Free";
    let estimatedUnits = "2 a 4 módulos";
    let compressorPower = "1/2 HP a 1 HP de alto rendimento";
    let idealTemp = "-18°C a -22°C";

    if (simProductCategory === "freezer") {
      recommendation =
        simStoreSize === "grande"
          ? "Bateria de Ilhas Panorâmicas + Freezers Verticais de 2 Portas"
          : "Freezers Verticais com Vidro Duplo Aquecido Antiembaçante";
      estimatedUnits = simStoreSize === "pequeno" ? "1 a 2 unidades" : simStoreSize === "medio" ? "3 a 5 unidades" : "6 a 12 unidades";
      idealTemp = simTempRange === "congelados" ? "-18°C a -22°C" : "0°C a +4°C";
      compressorPower = "Compressores ecológicos de baixo ruído e consumo";
    } else if (simProductCategory === "balcao") {
      recommendation = "Balcão Vitrine em Aço Inox com Iluminação LED & Placa Fria";
      estimatedUnits = simStoreSize === "pequeno" ? "1 balcão (1,8m)" : simStoreSize === "medio" ? "2 a 3 balcões modulados (3m a 5m)" : "Linha contínua sob medida";
      idealTemp = "+1°C a +6°C";
      compressorPower = "Serpentina aletada com degelo automático e termostato digital";
    } else if (simProductCategory === "camara") {
      recommendation = "Câmara Frigorífica Modular em Painéis PUR com Porta Fermod Pesada";
      estimatedUnits = simStoreSize === "pequeno" ? "Câmara compacta 2x2m (10 m³)" : simStoreSize === "medio" ? "Câmara comercial 3x4m (30 m³)" : "Câmara industrial > 60 m³";
      idealTemp = simTempRange === "congelados" ? "-18°C a -25°C" : "0°C a +4°C";
      compressorPower = "Unidade condensadora carenada de alta durabilidade";
    } else if (simProductCategory === "inox") {
      recommendation = "Refrigeradores Industriais em Aço Inox AISI 304/430 (2, 4 ou 6 Portas)";
      estimatedUnits = simStoreSize === "pequeno" ? "1 refrigerador 2 portas" : simStoreSize === "medio" ? "1 a 2 refrigeradores 4 portas" : "3+ refrigeradores 6 portas";
      idealTemp = "0°C a +4°C (ou -15°C)";
      compressorPower = "Motor hermético com alta recuperação térmica";
    }

    return {
      recommendation,
      estimatedUnits,
      compressorPower,
      idealTemp,
    };
  }, [simBusinessType, simProductCategory, simTempRange, simStoreSize]);

  // Mensagem customizada para o WhatsApp do Simulador
  const simWhatsAppUrl = useMemo(() => {
    const businessLabels = {
      supermercado: "Supermercado / Mercearia",
      acougue: "Açougue / Casa de Carnes",
      padaria: "Padaria / Confeitaria",
      restaurante: "Restaurante / Cozinha Industrial",
      distribuidora: "Distribuidora / Atacado",
      conveniencia: "Conveniência / Posto de Combustível",
    };
    const categoryLabels = {
      freezer: "Freezers Comerciais & Expositores",
      balcao: "Balcões & Vitrines Refrigeradas",
      camara: "Câmara Frigorífica Modular",
      inox: "Geladeiras e Balcões Industriais Inox",
    };
    const sizeLabels = {
      pequeno: "Pequeno porte (Loja compacta)",
      medio: "Médio porte (Comércio padrão)",
      grande: "Grande porte (Alta circulação / Rede)",
    };

    const msg = `Olá, equipe técnica da Friomax Refrigeração!
Fiz uma simulação no site para equipar meu estabelecimento e gostaria de um orçamento direto da fábrica:

- Tipo de Negócio: ${businessLabels[simBusinessType]}
- Solução Desejada: ${categoryLabels[simProductCategory]}
- Faixa de Temperatura: ${simResults.idealTemp}
- Porte Estimado: ${sizeLabels[simStoreSize]}
- Recomendação do Simulador: ${simResults.recommendation} (~${simResults.estimatedUnits})

Poderiam calcular o melhor valor e condições de fábrica para mim?`;

    return getWhatsAppUrl(msg);
  }, [simBusinessType, simProductCategory, simStoreSize, simResults]);

  // Filtro de produtos
  const filteredProducts = useMemo(() => {
    if (activeProductTab === "todos") return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter((p) => p.category === activeProductTab);
  }, [activeProductTab]);

  // Filtro de obras
  const filteredObras = useMemo(() => {
    if (activeObraFilter === "todos") return OBRAS_DATA;
    return OBRAS_DATA.filter((o) => o.category === activeObraFilter);
  }, [activeObraFilter]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#07152B] flex flex-col font-sans selection:bg-[#0047FF] selection:text-white">
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT BAR — INDÚSTRIA & ATENDIMENTO DIRETO       */}
      {/* ============================================================== */}
      <div className="bg-[#07152B] text-white border-b border-blue-950/60 text-xs py-2 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#0047FF] to-[#012B8E] text-white font-bold text-[11px] tracking-wide uppercase shadow-xs">
              <Factory className="w-3 h-3 text-cyan-300" />
              Fábrica Própria desde 1991
            </span>
            <span className="hidden sm:inline text-blue-200/80">
              Vespasiano - MG (R. São Paulo, 1500) · 30+ Anos de Excelência em Refrigeração
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-blue-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com o time comercial da Friomax Refrigeração.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#4ADE80] hover:text-green-300 transition-colors font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#22C55E] text-white" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{GOOGLE_RATING}★ ({GOOGLE_REVIEW_COUNT} Google Reviews)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. HEADER PRINCIPAL & NAVEGAÇÃO                                */}
      {/* ============================================================== */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-[37px] z-40 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          {/* Logo da Marca Oficial Friomax Completo (Mascote, Estrelas e Emblema) */}
          <a href="#" className="flex items-center gap-3 group py-1">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 shrink-0 transition-transform duration-200 group-hover:scale-105 drop-shadow-sm">
              <Image
                src={LOGO_SRC}
                alt={COMPANY_NAME}
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#07152B] leading-none group-hover:text-[#0047FF] transition-colors">
                  FRIOMAX
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-[#0047FF] font-extrabold uppercase tracking-wider hidden sm:inline-block">
                  Desde 1991
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#0047FF] uppercase mt-0.5">
                Refrigeração Comercial
              </span>
              <span className="text-[9px] text-amber-600 font-bold tracking-tight hidden md:block italic">
                A diferença está na qualidade
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-slate-700">
            <a href="#produtos" className="hover:text-[#0047FF] transition-colors">
              Equipamentos & Linhas
            </a>
            <a
              href="#simulador"
              className="hover:text-[#0047FF] transition-colors flex items-center gap-1 text-[#0047FF] font-bold"
            >
              <Calculator className="w-4 h-4 text-[#0047FF]" />
              Simulador
            </a>
            <a href="#obras" className="hover:text-[#0047FF] transition-colors">
              Instalações Comerciais
            </a>
            <a href="#fabrica" className="hover:text-[#0047FF] transition-colors">
              Fábrica (30+ Anos)
            </a>
            <a href="#avaliacoes" className="hover:text-[#0047FF] transition-colors flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Avaliações ({GOOGLE_RATING}★)
            </a>
            <a href="#faq" className="hover:text-[#0047FF] transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-[#0047FF] transition-colors">
              Contato & Sede
            </a>
          </nav>

          {/* CTA Header Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de solicitar um orçamento de equipamentos de refrigeração direto da fábrica Friomax."
              )}
              target="_blank"
              variant="whatsapp"
              size="sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Orçamento WhatsApp</span>
            </GlowingButton>
          </div>

          {/* Botão Mobile Menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0047FF] hover:bg-slate-100 rounded-lg focus:outline-hidden"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-xl"
            >
              <a
                href="#produtos"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0047FF]"
              >
                Freezers, Balcões & Câmaras
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-bold text-[#0047FF]"
              >
                Simulador de Equipamentos
              </a>
              <a
                href="#obras"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0047FF]"
              >
                Instalações & Clientes
              </a>
              <a
                href="#fabrica"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0047FF]"
              >
                Nossa Fábrica em Vespasiano
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0047FF]"
              >
                Depoimentos do Google (4,4★)
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0047FF]"
              >
                Endereço & Telefones da Fábrica
              </a>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de um orçamento via WhatsApp com a Friomax.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp ({WHATSAPP_DISPLAY})</span>
                </GlowingButton>
                <GlowingButton
                  href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  <Phone className="w-4 h-4 text-[#0047FF]" />
                  <span>Ligar para a Fábrica: {PHONE_DISPLAY}</span>
                </GlowingButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ============================================================== */}
      {/* 3. HERO SECTION — AUTORIDADE INDUSTRIAL & CONVERSÃO MÁXIMA     */}
      {/* ============================================================== */}
      <section className="relative bg-gradient-to-br from-[#07152B] via-[#0B1E3F] to-[#030A17] text-white pt-12 pb-20 overflow-hidden border-b border-blue-950">
        {/* Efeitos de Iluminação Fria de Fundo */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0047FF] rounded-full blur-[140px]" />
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#38BDF8] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Coluna de Texto Hero */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge de Destaque com 5 Estrelas */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-100 text-xs sm:text-sm font-semibold backdrop-blur-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#38BDF8] animate-ping" />
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>Fábrica de Refrigeração Comercial desde 1991 · Vespasiano - MG</span>
              </div>

              {/* H1 Principal Solicitado */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                Fabricante Especialista em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-white">
                  Equipamentos de Refrigeração
                </span>{" "}
                Comercial e Industrial
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Mais de 30 anos de tradição, engenharia térmica de alta performance e durabilidade inigualável direto da fábrica em Vespasiano - MG. Freezers expositores, vitrines em aço inox, balcões refrigerados e câmaras frias projetadas para valorizar o seu ponto de venda e reduzir o consumo de energia.
              </p>

              {/* Slogan Histórico em Destaque */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={MASCOT_SRC}
                    alt="Mascote Friomax"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-amber-300 italic">
                    &ldquo;Friomax, a diferença está na qualidade!&rdquo;
                  </div>
                  <div className="text-xs text-slate-300">
                    Compromisso sério com eficiência térmica, robustez e assistência garantida.
                  </div>
                </div>
              </div>

              {/* Pilares Rápidos de Confiança */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Aço Inox & PUR Ecológico
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Alta Eficiência Energética
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs col-span-2 sm:col-span-1">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    4,4★ Google (41 Avaliações)
                  </span>
                </div>
              </div>

              {/* Botões de Ação Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar preços de equipamentos de refrigeração comercial e falar com o time de vendas da Friomax."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="shadow-lg shadow-green-950/40 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar com Especialista no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#simulador"
                  variant="gold"
                  size="lg"
                  className="text-base font-extrabold"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Simulador de Equipamento</span>
                </GlowingButton>
              </div>

              {/* Atendimento e Carregamento Rápido */}
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-4 h-4 text-[#38BDF8]" />
                  Despacho e entrega para todo o Brasil
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#38BDF8]" />
                  Segunda a Sexta: 07:30 às 17:30
                </span>
              </div>
            </div>

            {/* Coluna Visual do Hero — Vitrine de Destaques Sem Cortes */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="rounded-2xl overflow-hidden border border-blue-400/30 bg-[#0B1E3F] shadow-2xl shadow-blue-950/70 flex flex-col">
                {/* Barra de Status Superior */}
                <div className="px-4 py-2.5 bg-[#07152B] border-b border-blue-900/60 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#0047FF] to-[#012B8E] text-white font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <Factory className="w-3 h-3 text-cyan-300" />
                    Fabricação Própria Friomax
                  </span>
                  <span className="text-xs text-amber-300 font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {GOOGLE_RATING}★ ({GOOGLE_REVIEW_COUNT} Reviews)
                  </span>
                </div>

                {/* Imagem do Hero 100% visível sem cortes — Aspect ratio 16/9 */}
                <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden flex items-center justify-center group">
                  <Image
                    src={HERO_SLIDES[currentHeroSlide].image}
                    alt={HERO_SLIDES[currentHeroSlide].title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Botões de Navegação discretos */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentHeroSlide((prev) =>
                        prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all z-10 cursor-pointer shadow-md"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentHeroSlide((prev) =>
                        prev === HERO_SLIDES.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-all z-10 cursor-pointer shadow-md"
                    aria-label="Próximo slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Indicadores de slides */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentHeroSlide(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          currentHeroSlide === idx
                            ? "bg-[#0047FF] w-5"
                            : "bg-white/60 w-1.5 hover:bg-white"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Conteúdo Informativo ABAIXO da Imagem — 0% de corte ou sobreposição */}
                <div className="p-4 sm:p-5 space-y-2.5 bg-[#0B1E3F] text-white border-t border-blue-900/60">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">
                      {HERO_SLIDES[currentHeroSlide].title}
                    </h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-900/80 text-cyan-200 border border-blue-400/30 shrink-0">
                      {HERO_SLIDES[currentHeroSlide].badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {HERO_SLIDES[currentHeroSlide].description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-cyan-300 border-t border-blue-900/40">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <ThermometerSnowflake className="w-3.5 h-3.5 text-[#38BDF8]" />
                      {HERO_SLIDES[currentHeroSlide].range}
                    </span>
                    <a
                      href="#produtos"
                      className="font-bold underline hover:text-white flex items-center gap-1 transition-colors text-amber-300"
                    >
                      Ver todos os modelos <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Informativo Fabril Limpo Abaixo */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0047FF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                      Sede Própria em Vespasiano - MG
                    </div>
                    <div className="text-xs font-semibold text-white">
                      R. São Paulo, 1500 - Nova Pampulha · Tel: (31) 3503-2400
                    </div>
                  </div>
                </div>
                <a
                  href="#contato"
                  className="hidden sm:inline-flex text-xs font-bold text-cyan-300 hover:text-white underline"
                >
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. BARRA DE NÚMEROS & DIFERENCIAIS INDUSTRIAIS                  */}
      {/* ============================================================== */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0047FF]">30+ Anos</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                De tradição fabril contínua na refrigeração comercial (desde 1991)
              </div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#07152B]">Vespasiano</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Fábrica própria e sede estruturada na R. São Paulo, 1500 (MG)
              </div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#F59E0B]">4,4 ★</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Nota no Google Reviews com 41 avaliações comprovadas
              </div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#16A34A]">100% Qualidade</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                &ldquo;A diferença está na qualidade&rdquo; em durabilidade e assistência
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SIMULADOR INTERATIVO DE EQUIPAMENTOS FRIOMAX                */}
      {/* ============================================================== */}
      <section
        id="simulador"
        className="py-16 sm:py-20 bg-gradient-to-b from-[#EFF6FF] to-white border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0047FF] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
              Ferramenta Exclusiva Friomax
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#07152B]">
              Simulador de Equipamento & Dimensionamento Comercial
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Selecione o seu segmento e porte de comércio para receber a recomendação exata de equipamentos, temperatura ideal e enviar a cotação pronta para nossa fábrica.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-blue-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Controles do Simulador */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              {/* 1. Tipo de Negócio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Segmento do seu Estabelecimento
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "supermercado", label: "Supermercado / Mercearia" },
                    { id: "acougue", label: "Açougue / Casa de Carnes" },
                    { id: "padaria", label: "Padaria / Confeitaria" },
                    { id: "restaurante", label: "Cozinha / Restaurante" },
                    { id: "distribuidora", label: "Distribuidora / Atacado" },
                    { id: "conveniencia", label: "Conveniência / Beer Cave" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setSimBusinessType(
                          item.id as
                            | "supermercado"
                            | "acougue"
                            | "padaria"
                            | "restaurante"
                            | "distribuidora"
                            | "conveniencia"
                        )
                      }
                      className={`px-3 py-2.5 rounded-lg text-xs font-bold border transition-all text-center cursor-pointer ${
                        simBusinessType === item.id
                          ? "bg-[#0047FF] text-white border-[#0047FF] shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Categoria de Equipamento */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Solução Principal Buscada
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "freezer", label: "Freezers Expositores" },
                    { id: "balcao", label: "Balcões & Vitrines" },
                    { id: "camara", label: "Câmara Frigorífica" },
                    { id: "inox", label: "Geladeiras Inox" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() =>
                        setSimProductCategory(
                          cat.id as "freezer" | "balcao" | "camara" | "inox"
                        )
                      }
                      className={`p-2.5 rounded-lg text-xs font-bold border transition-all text-center cursor-pointer ${
                        simProductCategory === cat.id
                          ? "bg-[#012B8E] text-white border-[#012B8E] shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Faixa de Temperatura e Porte da Loja */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    3. Faixa de Temperatura
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: "congelados", label: "Congelados (-18°C)" },
                      { id: "resfriados", label: "Resfriados (+2°C)" },
                      { id: "ambos", label: "Misto / Ambos" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() =>
                          setSimTempRange(t.id as "congelados" | "resfriados" | "ambos")
                        }
                        className={`p-2 rounded-lg text-[11px] font-bold border transition-all text-center cursor-pointer ${
                          simTempRange === t.id
                            ? "bg-[#0047FF] text-white border-[#0047FF]"
                            : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    4. Porte do Estabelecimento
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: "pequeno", label: "Compacto" },
                      { id: "medio", label: "Médio Porte" },
                      { id: "grande", label: "Grande Rede" },
                    ].map((sz) => (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() =>
                          setSimStoreSize(sz.id as "pequeno" | "medio" | "grande")
                        }
                        className={`p-2 rounded-lg text-[11px] font-bold border transition-all text-center cursor-pointer ${
                          simStoreSize === sz.id
                            ? "bg-[#0047FF] text-white border-[#0047FF]"
                            : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        {sz.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Painel de Resultados do Simulador */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1E3F] to-[#07152B] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-blue-950">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-blue-900/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    Dimensionamento Recomendado
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-cyan-200 border border-blue-400/30">
                    Engenharia Friomax
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs text-slate-400">Linha Recomendada:</div>
                  <div className="text-base font-black text-white">
                    {simResults.recommendation}
                  </div>
                  <div className="text-xs text-amber-300 font-semibold pt-1">
                    Estimativa de Carga: {simResults.estimatedUnits}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400">Temperatura Ideal:</div>
                    <div className="text-lg font-black text-[#38BDF8]">
                      {simResults.idealTemp}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400">Isolamento Térmico:</div>
                    <div className="text-sm font-bold text-white">
                      PUR Injetado Alta Densidade
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-relaxed bg-black/25 p-2.5 rounded-lg border border-white/5">
                  💡 Nossos engenheiros analisam a planta do seu comércio para posicionar os balcões e freezers maximizando a circulação de clientes e a economia de energia.
                </div>
              </div>

              {/* Botão de Envio para WhatsApp */}
              <div className="pt-6">
                <GlowingButton
                  href={simWhatsAppUrl}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full text-sm font-bold shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Simulação para a Fábrica</span>
                </GlowingButton>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Atendimento rápido com preço de fábrica e condições facilitadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. CATÁLOGO DE PRODUTOS & LINHAS DE FABRICAÇÃO                 */}
      {/* ============================================================== */}
      <section id="produtos" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0047FF] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
              Catálogo Industrial Friomax
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07152B]">
              Equipamentos Fabricados com Alta Qualidade & Eficiência
            </h2>
            <p className="text-base text-slate-600">
              Linha completa de freezers expositores, vitrines em aço inox, balcões térmicos e câmaras frigoríficas construídos para durar décadas no seu comércio.
            </p>

            {/* Filtros de Categorias */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "todos", label: "Todos os Equipamentos" },
                { id: "freezers", label: "Freezers & Expositores" },
                { id: "vitrines", label: "Balcões & Vitrines" },
                { id: "industriais", label: "Geladeiras Industriais Inox" },
                { id: "camaras", label: "Câmaras Frigoríficas" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveProductTab(
                      tab.id as "todos" | "freezers" | "vitrines" | "industriais" | "camaras"
                    )
                  }
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeProductTab === tab.id
                      ? "bg-[#0047FF] text-white shadow-md shadow-blue-500/25"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-slate-200 bg-white hover:border-[#0047FF] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Imagem do Produto com Badge */}
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#0047FF] text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold">
                        {product.temperature}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-[#0047FF] uppercase tracking-wider">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-xl font-black text-[#07152B] leading-snug group-hover:text-[#0047FF] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Ficha Rápida */}
                    <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200/80 space-y-1.5 text-xs text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Capacidade / Medidas:</span>
                        <span className="font-semibold text-slate-900 truncate max-w-[170px]">
                          {product.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Faixa de Operação:</span>
                        <span className="font-semibold text-[#0047FF]">{product.temperature}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões do Card */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#0047FF]" />
                    <span>Ver Ficha Técnica</span>
                  </button>

                  <GlowingButton
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de uma cotação para o equipamento: ${product.name} (${product.capacity}).`
                    )}
                    target="_blank"
                    variant="whatsapp"
                    size="sm"
                    className="px-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotar</span>
                  </GlowingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. MODAL DE FICHA TÉCNICA DETALHADA DO PRODUTO                 */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
            >
              <div className="relative h-64 w-full bg-slate-900">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded bg-[#0047FF] text-white text-[11px] font-bold uppercase tracking-wider">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-1">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Descrição do Equipamento
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Especificações Construtivas */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Especificações Técnicas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProduct.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center"
                      >
                        <span className="text-slate-500 font-medium">{s.label}:</span>
                        <span className="font-bold text-[#07152B]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aplicações Típicas */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Aplicações Ideais
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedProduct.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rodapé do Modal */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    Fabricação com garantia de 30+ anos da Friomax.
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de cotar o equipamento: ${selectedProduct.name}.`
                    )}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Orçamento deste Item</span>
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================== */}
      {/* 8. INSTALAÇÕES REAIS & CLIENTES ATENDIDOS                      */}
      {/* ============================================================== */}
      <section id="obras" className="py-16 sm:py-24 bg-[#07152B] text-white border-b border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-900/60 text-[#38BDF8] text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              Instalações Comerciais
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Equipamentos Friomax em Operação no Mercado
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Supermercados, açougues, padarias e indústrias que confiam na robustez e no rendimento térmico da Friomax Refrigeração.
            </p>

            {/* Filtros de Obras */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "todos", label: "Todas as Instalações" },
                { id: "supermercados", label: "Supermercados" },
                { id: "acougues", label: "Casas de Carnes" },
                { id: "padarias", label: "Padarias & Empórios" },
                { id: "distribuidoras", label: "CDs & Cozinhas" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() =>
                    setActiveObraFilter(
                      f.id as "todos" | "supermercados" | "acougues" | "padarias" | "distribuidoras"
                    )
                  }
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeObraFilter === f.id
                      ? "bg-[#0047FF] text-white shadow-md"
                      : "bg-white/10 text-slate-300 hover:bg-white/20"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Instalações */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredObras.map((obra) => (
              <div
                key={obra.id}
                className="rounded-xl overflow-hidden border border-blue-900/40 bg-slate-900/70 hover:border-[#0047FF] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                    <Image
                      src={obra.image}
                      alt={obra.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-bold text-cyan-300 uppercase">
                        {obra.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-[#38BDF8]" />
                      <span>{obra.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                      {obra.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {obra.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-2 border-t border-blue-900/40 text-[11px] text-blue-200/80">
                    <span className="font-semibold text-white">Escopo:</span> {obra.scope}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chamada para Projetos Sob Medida */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-[#0B1E3F] to-[#0047FF]/35 border border-blue-700/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Está montando ou reformando seu supermercado, padaria ou açougue?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Nossos consultores calculam o melhor layout com balcões e freezers sob medida para o seu espaço.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Estou planejando equipar meu comércio e gostaria de um projeto personalizado com a fábrica Friomax."
              )}
              target="_blank"
              variant="whatsapp"
              size="md"
              className="shrink-0 font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Projeto no WhatsApp</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. SOBRE A EMPRESA & INFRAESTRUTURA FABRIL EM VESPASIANO       */}
      {/* ============================================================== */}
      <section id="fabrica" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Texto Institucional */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0047FF] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
                Mais de 30 Anos de Tradição e Confiança
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#07152B] leading-tight">
                Friomax Refrigeração: Fabricando com Qualidade e Eficiência desde 1991
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                A <strong>Friomax Refrigeração</strong> (Friomax Indústria e Comércio de Refrigeração Ltda) construiu ao longo de mais de 30 anos uma sólida reputação no mercado brasileiro, fabricando equipamentos de refrigeração comercial e industrial com excelência técnica, materiais de primeira linha e compromisso inegociável com o cliente.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Com sede própria em <strong>Vespasiano - MG (R. São Paulo, 1500 - Nova Pampulha)</strong>, dispomos de infraestrutura completa para conformação de chapas de aço inoxidável, injeção sob pressão de poliuretano de alta densidade e testes rigorosos de rendimento térmico.
              </p>

              {/* Destaques da Fábrica */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0047FF]">
                    <Factory className="w-5 h-5" />
                    <span>Fábrica Própria em MG</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Sede estruturada na R. São Paulo, 1500 em Vespasiano com capacidade para grandes encomendas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0047FF]">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>A Diferença na Qualidade</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Slogan histórico que reflete a durabilidade real dos nossos equipamentos em milhares de comércios.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0047FF]">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Aço Inox & PUR Injetado</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Isolamento de alta pressão e aço inox AISI 304/430 sanitário aprovado para alimentos.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0047FF]">
                    <Truck className="w-5 h-5" />
                    <span>Entrega Ágil & Prazos Honrados</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Pontualidade rigorosa elogiada nas avaliações do Google Reviews pelos nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Imagens da Fábrica / Estrutura */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/fabrica/fabrica-friomax-sede.jpg"
                  alt="Instalações Fabris da Friomax Refrigeração"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Parque Fabril
                  </div>
                  <div className="text-base font-bold">
                    Linha de Produção & Montagem de Refrigeração Comercial
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/fabrica/fabrica-montagem-inox.jpg"
                    alt="Montagem em Aço Inox"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 text-white text-[11px] font-bold">
                    Corte e Dobra em Inox
                  </div>
                </div>

                <div className="relative h-36 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/fabrica/fabrica-isolamento-pur.jpg"
                    alt="Injeção de Poliuretano"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 text-white text-[11px] font-bold">
                    Isolamento PUR Ecológico
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. DEPOIMENTOS DO GOOGLE REVIEWS (4,4★ REAIS)                 */}
      {/* ============================================================== */}
      <section id="avaliacoes" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header de Avaliações */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Avaliações Verificadas no Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07152B]">
              O que Dizem os Clientes da Friomax
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Mais de 41 avaliações públicas e nota {GOOGLE_RATING} estrelas no Google. A satisfação de quem adquire equipamentos de refrigeração direto de quem fabrica com seriedade.
            </p>

            {/* Selo Google Oficial */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xl font-black text-[#07152B]">{GOOGLE_RATING} / 5.0</span>
              <span className="text-slate-400">|</span>
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0047FF] hover:underline flex items-center gap-1"
              >
                Ver todas no Google <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Grid de Depoimentos Reais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS_DATA.map((review, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {review.timeAgo}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#0047FF] font-black text-sm flex items-center justify-center shrink-0">
                    {review.author[0]}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm font-bold text-[#07152B] truncate">
                      {review.author}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      {review.badge}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 11. TABELA COMPARATIVA — FRIOMAX VS CONCORRÊNCIA COMUM         */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0047FF] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
              Diferenciais de Fábrica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07152B]">
              Por que a Friomax é a Escolha Certa para o seu Negócio?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Veja a diferença entre comprar direto de uma fábrica consolidada há mais de 30 anos versus revendedores ou oficinas improvisadas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#07152B] text-white">
                    <th className="py-4 px-6 font-bold">Critério Técnico</th>
                    <th className="py-4 px-6 font-black text-[#38BDF8] bg-[#030A17]">
                      Friomax Refrigeração
                    </th>
                    <th className="py-4 px-6 font-semibold text-slate-400">
                      Revenda Comum / Oficinas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Origem & Fabricação
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0047FF] bg-blue-50/50">
                      Fábrica própria há 30+ anos (Vespasiano - MG)
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Intermediários com margem e sem controle de montagem
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Isolamento Térmico
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0047FF] bg-blue-50/50">
                      PUR de alta densidade injetado sob pressão
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Isolamento com falhas e pontes térmicas que gastam energia
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Vidros Expositores
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0047FF] bg-blue-50/50">
                      Vidro duplo temperado aquecido antiembaçante
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Vidros comuns que embaçam e ocultam as mercadorias
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Estrutura & Acabamento
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0047FF] bg-blue-50/50">
                      Aço inox AISI sanitário e pintura eletrostática
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Chapas finas que enferrujam rapidamente com a umidade
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Assistência e Peças
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0047FF] bg-blue-50/50">
                      Peças originais de reposição direto do fabricante
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Dificuldade de reposição e falta de suporte técnico
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Avaliação no Google
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0047FF] bg-blue-50/50">
                      Nota 4,4 ★ com 41 avaliações autênticas
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Avaliações baixas ou perfis sem reputação no mercado
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 12. FAQ — DÚVIDAS FREQUENTES                                   */}
      {/* ============================================================== */}
      <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0047FF] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
              Tire suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07152B]">
              Perguntas Frequentes sobre os Equipamentos Friomax
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Esclareça os principais pontos sobre nossa linha de fabricação, prazos, formas de pagamento e entrega.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0047FF] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0047FF] shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-slate-500 mb-3">
              Ficou com alguma dúvida sobre dimensões ou especificações técnicas?
            </p>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida técnica sobre os equipamentos da Friomax.")}
              target="_blank"
              variant="outlineRoyal"
              size="md"
            >
              <HelpCircle className="w-4 h-4 text-[#0047FF]" />
              <span>Falar com o Suporte Técnico da Fábrica</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 13. LOCALIZAÇÃO & VISITE NOSSA FÁBRICA                         */}
      {/* ============================================================== */}
      <section id="contato" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Informações de Contato e Endereço */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#0047FF] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
                Visite Nossa Sede Fabril
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#07152B] leading-tight">
                Friomax Refrigeração em Vespasiano - MG
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Nossa indústria está estrategicamente localizada em <strong>Vespasiano - MG</strong> (Região Metropolitana de Belo Horizonte / Vetor Norte), na <strong>R. São Paulo, 1500 - Nova Pampulha</strong>, com fácil acesso para carregamento rápido e despacho rodoviário.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Endereço da Fábrica:</strong>
                    <span>{PRIMARY_FACTORY_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Telefone Comercial / PABX:</strong>
                    <span>{PHONE_DISPLAY}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MessageCircle className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">WhatsApp Vendas Diretas:</strong>
                    <span>{WHATSAPP_DISPLAY} (Atendimento Consultivo)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Horário de Funcionamento:</strong>
                    <span>Segunda a Sexta: 07:30 às 17:30</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <GlowingButton
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  variant="primary"
                  size="md"
                >
                  <Compass className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </GlowingButton>

                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma visita à fábrica da Friomax em Vespasiano.")}
                  target="_blank"
                  variant="outline"
                  size="md"
                >
                  <MessageCircle className="w-4 h-4 text-[#16A34A]" />
                  <span>Agendar Visita</span>
                </GlowingButton>
              </div>
            </div>

            {/* Card com Mapa Interativo / Iframe Google */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-blue-100 shadow-xl bg-slate-100 h-96 sm:h-[420px] relative">
                <iframe
                  title="Localização Friomax Refrigeração"
                  src="https://maps.google.com/maps?q=Friomax+Refrigera%C3%A7%C3%A3o+Rua+S%C3%A3o+Paulo+1500+Nova+Pampulha+Vespasiano+MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 14. FOOTER INSTITUCIONAL COMPLETO                              */}
      {/* ============================================================== */}
      <footer className="bg-[#07152B] text-white border-t border-blue-950 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coluna 1: Marca & Síntese */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0">
                  <Image
                    src={LOGO_SRC}
                    alt="Friomax Refrigeração"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                    FRIOMAX
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-cyan-400 uppercase mt-0.5">
                    Refrigeração Comercial
                  </span>
                  <span className="text-[10px] text-amber-300 font-semibold italic mt-0.5">
                    Desde 1991 · Vespasiano - MG
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Indústria fabricante de equipamentos de refrigeração comercial e industrial. Freezers expositores, vitrines em aço inox, balcões refrigerados e câmaras frigoríficas sob medida.
              </p>
              <p className="text-xs font-bold text-amber-300 italic">
                &ldquo;Friomax, a diferença está na qualidade!&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0047FF] flex items-center justify-center transition-colors text-white"
                  aria-label="Instagram @friomax1991"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors text-white"
                  aria-label="Google Reviews Friomax"
                >
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Linha de Produtos */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Linhas de Fabricação
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Freezers Verticais com Vidro Duplo Aquecido
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Freezers Horizontais Tampas Deslizantes
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Ilhas de Congelados para Supermercados
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Balcões Vitrine para Açougues & Carnes
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Balcões Auto-Serviço Multi-Deck
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Geladeiras Industriais Inox (2, 4 e 6 Portas)
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Câmaras Frigoríficas Modulares & Walk-in Coolers
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Navegação Rápida */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Acesso Rápido
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#simulador" className="hover:text-white transition-colors">
                    Simulador de Equipamento Comercial
                  </a>
                </li>
                <li>
                  <a href="#obras" className="hover:text-white transition-colors">
                    Instalações & Clientes Comerciais
                  </a>
                </li>
                <li>
                  <a href="#fabrica" className="hover:text-white transition-colors">
                    Nossa Fábrica em Vespasiano - MG
                  </a>
                </li>
                <li>
                  <a href="#avaliacoes" className="hover:text-white transition-colors">
                    Depoimentos no Google ({GOOGLE_RATING}★)
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a
                    href={WEBSITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Portal Oficial www.friomax.com.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Sede */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Fale com a Indústria
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>PABX: {PHONE_DISPLAY}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{EMAIL_CONTACT}</span>
                </p>
                <p className="flex items-start gap-2 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{PRIMARY_FACTORY_ADDRESS}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Linha Inferior com Copyright e CNPJ */}
          <div className="pt-8 border-t border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 {COMPANY_LEGAL_NAME}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-3">
              <span>Sede Própria: Vespasiano - MG</span>
              <span>•</span>
              <a href="#simulador" className="hover:text-white">
                Orçamento Direto da Fábrica
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* 15. WHATSAPP FLUTUANTE & BOTÕES DE CONVERSÃO FIXOS             */}
      {/* ============================================================== */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de consultar preços de equipamentos de refrigeração com a equipe da Friomax.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 group font-bold text-sm border-2 border-white/20"
          aria-label="Atendimento WhatsApp Friomax"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white text-[#16A34A]" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-[10px] text-green-100 uppercase tracking-wider font-semibold">
              Fábrica Online
            </div>
            <div className="text-xs font-bold leading-none">
              Orçamento WhatsApp
            </div>
          </div>
        </a>
      </div>

      {/* Barra Fixa Inferior Mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
          className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 bg-slate-50 text-[#07152B] text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#0047FF]" />
          <span>Ligar Fábrica</span>
        </a>

        <a
          href={getWhatsAppUrl("Olá! Gostaria de um orçamento rápido pelo WhatsApp com a Friomax.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#16A34A] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-[#16A34A]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
