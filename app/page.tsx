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
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// ==========================================
// DADOS OFICIAIS — ISOMINAS ISOPAINEIS E REFRIGERAÇÃO
// ==========================================
const COMPANY_NAME = "ISOMINAS Isopainéis e Refrigeração";
const COMPANY_LEGAL_NAME =
  "ISOMINAS INDÚSTRIA E COMÉRCIO DE ISOPAINES E REFRIGERAÇÃO LTDA";
const WHATSAPP_NUMBER = "5531984183835";
const WHATSAPP_DISPLAY = "(31) 98418-3835";
const PHONE_DISPLAY = "(31) 3631-1500";
const PHONE_SECONDARY = "(31) 3458-5778";
const EMAIL_CONTACT = "contato@isominas.ind.br";
const INSTAGRAM_URL = "https://www.instagram.com/isominas_celio/";
const FACEBOOK_URL = "https://www.facebook.com/isominas.paineis";
const WEBSITE_URL = "http://www.isominas.ind.br";

const PRIMARY_FACTORY_ADDRESS =
  "Rua Alzira Menezes Nogueira, 151 - Distrito Industrial João de Almeida, Ribeirão das Neves - MG, CEP 33880-300";

const GOOGLE_REVIEW_COUNT = "33";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Isominas+Isopain%C3%A9is+e+Refrigera%C3%A7%C3%A3o+Botafogo+Ribeir%C3%A3o+das+Neves+MG";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=ISOMINAS+Ind%C3%BAstria+e+Com%C3%A9rcio+de+Isopain%C3%A9is+e+Refrigera%C3%A7%C3%A3o+R.+Alzira+Menezes+Nogueira%2C+151+-+Distrito+Industrial+Jo%C3%A3o+de+Almeida%2C+Ribeir%C3%A3o+das+Neves+-+MG%2C+33880-300";

// Assets Oficiais
const LOGO_TRANSPARENT_SRC = "/logo-transparent.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de solicitar um orçamento de isopainéis / portas frigoríficas direto da fábrica com a equipe técnica da ISOMINAS.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

// ==========================================
// DESTAQUES DO HERO (SEM CORTES)
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
    id: "camara-fria",
    title: "Câmaras Frigoríficas & Isopainéis",
    badge: "50mm a 200mm",
    range: "De +15°C até -40°C",
    description:
      "Isolamento térmico hermético para congelados e resfriados. Economia comprovada de energia e montagem rápida.",
    image: "/images/hero/banner-destaque-camara-fria.jpg",
  },
  {
    id: "portas",
    title: "Portas Frigoríficas Industriais",
    badge: "Padrão FERMOD Pesado",
    range: "Com Resistência no Marco",
    description:
      "Portas giratórias e de correr de alta resistência em ferro fundido para alto fluxo operacional e vedação estanque.",
    image: "/images/hero/banner-destaque-portas.jpg",
  },
  {
    id: "paineis-modulares",
    title: "Isopainéis Modulares EPS & PUR",
    badge: "Norma ABNT-NBR",
    range: "Classe F-1 Anti-Chamas",
    description:
      "Encaixe macho-fêmea de precisão milimétrica que elimina pontes térmicas e infiltrações na sua obra.",
    image: "/images/hero/banner-destaque-painel-modular.jpg",
  },
];

// ==========================================
// TIPAGEM DOS PRODUTOS
// ==========================================
interface ProductItem {
  id: string;
  name: string;
  category: "isopaineis" | "portas" | "telhas" | "placas";
  categoryLabel: string;
  badge: string;
  tagline: string;
  image: string;
  thickness: string;
  core: string;
  specs: { label: string; value: string }[];
  applications: string[];
  description: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "isopainel-eps",
    name: "Isopainéis Termoisolantes em EPS",
    category: "isopaineis",
    categoryLabel: "Isopainéis Térmicos",
    badge: "Mais Vendido da Fábrica",
    tagline: "Isolamento de alta performance com núcleo em EPS Classe F-1 autoextinguível",
    image: "/images/products/isopainel-eps-painel-1.jpg",
    thickness: "50mm a 200mm",
    core: "EPS (Poliestireno Expandido) Classe F-1 Anti-chamas",
    specs: [
      { label: "Largura Útil", value: "1.160 mm" },
      { label: "Espessuras", value: "50, 75, 100, 150 e 200 mm" },
      { label: "Comprimento", value: "Sob medida (conforme transporte)" },
      { label: "Condutibilidade", value: "0,028 Kcal/h.m.°C" },
      { label: "Norma Técnica", value: "ABNT-NBR 11949-9" },
      { label: "Encaixe", value: "Macho-Fêmea hermético" },
    ],
    applications: [
      "Câmaras frigoríficas de resfriados e congelados",
      "Centros de distribuição logística e galpões",
      "Salas de desossa e frigoríficos de carnes/pescados",
      "Fechamentos industriais e divisórias higiênicas",
    ],
    description:
      "Fabricados com revestimento em chapa de aço zincada e pré-pintada na cor branca lavável em ambas as faces. Encaixe macho-fêmea com vedação de alta precisão que anula infiltrações e pontes térmicas, garantindo máxima economia de energia no sistema de refrigeração.",
  },
  {
    id: "isopainel-pur",
    name: "Isopainéis Injetados em PUR (Poliuretano)",
    category: "isopaineis",
    categoryLabel: "Isopainéis Térmicos",
    badge: "Máxima Densidade Térmica",
    tagline: "Densidade de 40 kg/m³ para temperaturas ultra-baixas e túneis de congelamento",
    image: "/images/products/isopainel-pur-poliuretano.jpg",
    thickness: "50mm a 150mm",
    core: "Espuma Rígida de Poliuretano PUR (40 kg/m³)",
    specs: [
      { label: "Largura Útil", value: "1.160 mm" },
      { label: "Densidade PUR", value: "38 a 42 kg/m³" },
      { label: "Condutibilidade", value: "0,018 Kcal/h.m.°C" },
      { label: "Comportamento ao Fogo", value: "Retardante de chamas" },
      { label: "Acabamento", value: "Aço galvanizado pré-pintado" },
      { label: "Fixação", value: "Sistema modular estanque" },
    ],
    applications: [
      "Túneis de congelamento rápido (-35°C a -40°C)",
      "Câmaras de congelados pesados e sorvetes",
      "Indústrias farmacêuticas e vacinas",
      "Processamento de alimentos e laticínios",
    ],
    description:
      "Isolamento térmico superior com baixíssimo coeficiente de condutibilidade térmica. Ideal para operações industriais que operam com gradientes térmicos extremos, assegurando estabilidade térmica e consumo elétrico mínimo.",
  },
  {
    id: "porta-giratoria-industrial",
    name: "Porta Frigorífica Giratória",
    category: "portas",
    categoryLabel: "Portas Frigoríficas",
    badge: "Ferragens FERMOD Pesadas",
    tagline: "Robusta e com vedação perimétrica contínua para câmaras de 0°C a -30°C",
    image: "/images/products/porta-giratoria-industrial.jpg",
    thickness: "100mm, 150mm e 200mm",
    core: "PUR Rígido Injetado ou EPS Alta Densidade",
    specs: [
      { label: "Ferragens", value: "Ferro fundido padrão FERMOD" },
      { label: "Espessura 0°C", value: "100 mm (Resfriados)" },
      { label: "Espessura < 0°C", value: "150mm / 200mm (Congelados)" },
      { label: "Resistência", value: "Silicone embutido no marco para congelados" },
      { label: "Batentes", value: "Injetados com poliuretano rígido" },
      { label: "Acabamento", value: "Perfil Colorbond tipo U" },
    ],
    applications: [
      "Câmaras frigoríficas comerciais e industriais",
      "Supermercados, açougues e padarias industriais",
      "Salas climatizadas de preparo de carnes",
      "Armazenamento de gelo e polpas de frutas",
    ],
    description:
      "Construída com estrutura reforçada e ferragens de ferro fundido padrão industrial Fermod de alta resistência. Para temperaturas negativas, inclui resistência elétrica de silicone instalada no marco para impedir o congelamento e travamento da borracha de vedação.",
  },
  {
    id: "porta-frigorifica-correr",
    name: "Porta Frigorífica de Correr (Manual e Automática)",
    category: "portas",
    categoryLabel: "Portas Frigoríficas",
    badge: "Para Paletes e Empilhadeiras",
    tagline: "Trilho aéreo de deslizamento suave e vedação por queda gravitacional",
    image: "/images/products/porta-frigorifica-correr.jpg",
    thickness: "100mm a 200mm",
    core: "PUR Injetado ou EPS Classe F-1",
    specs: [
      { label: "Operação", value: "Manual ou Automatizada com controle/sensor" },
      { label: "Trilho Aéreo", value: "Alumínio estrutural extrudado" },
      { label: "Vedação", value: "Gaxeta elastomérica perimétrica" },
      { label: "Vão Livre", value: "Projetos sob medida (até 3,5m x 4,0m)" },
      { label: "Segurança", value: "Destravamento interno de emergência" },
      { label: "Resistência", value: "Anti-congelamento no marco" },
    ],
    applications: [
      "Centros de distribuição logística com fluxo de empilhadeiras",
      "Grandes galpões frigorificados e entrepostos",
      "Docas térmicas e áreas de expedição paletizada",
      "Armazéns gerais de congelados",
    ],
    description:
      "A solução definitiva para grandes vãos livres com alto tráfego de carga paletizada. Trilho de alumínio anodizado de alta durabilidade com roldanas de nylon autolubrificantes e vedação hermética.",
  },
  {
    id: "porta-sala-limpa",
    name: "Porta Giratória e Correr para Sala Limpa",
    category: "portas",
    categoryLabel: "Portas Frigoríficas",
    badge: "Padrão Sanitário Asséptico",
    tagline: "Superfície lisa sem retenção de partículas para controle de contaminação",
    image: "/images/products/porta-giratoria-sala-limpa.jpg",
    thickness: "50mm a 100mm",
    core: "Poliuretano Injetado ou EPS",
    specs: [
      { label: "Superfície", value: "Totalmente lisa e higienizável" },
      { label: "Visor", value: "Vidro duplo selado opcional" },
      { label: "Vedação", value: "Silicone sanitário antimicrobiano" },
      { label: "Normas", value: "Atende ANVISA e Boas Práticas (BPF)" },
      { label: "Puxadores", value: "Aço Inox 304 escovado" },
    ],
    applications: [
      "Indústrias farmacêuticas e cosméticas",
      "Salas cirúrgicas, hospitais e laboratórios",
      "Processamento de queijos e laticínios nobres",
      "Áreas assépticas alimentícias",
    ],
    description:
      "Desenvolvida com cantos arredondados e superfícies perfeitamente niveladas que evitam o acúmulo de poeira e bactérias. Resistente a sanitizações químicas rigorosas diárias.",
  },
  {
    id: "porta-vai-e-vem",
    name: "Porta Vai-e-Vem e Portinholas de Inspeção",
    category: "portas",
    categoryLabel: "Portas Frigoríficas",
    badge: "Fluxo Contínuo de Pessoas",
    tagline: "Dobradiças gravitacionais em inox e parachoque para proteção contra carrinhos",
    image: "/images/products/porta-vai-e-vem.jpg",
    thickness: "40mm a 50mm",
    core: "EPS ou PUR de alta densidade",
    specs: [
      { label: "Dobradiça", value: "Gravitacional retorno automático inox" },
      { label: "Visor", value: "Policarbonato transparente cristal" },
      { label: "Proteção", value: "Bate-carrinho em polietileno (opcional)" },
      { label: "Folhas", value: "Folha simples ou folha dupla" },
    ],
    applications: [
      "Passagem entre cozinha e salão em restaurantes",
      "Supermercados e padarias de fluxo contínuo",
      "Interligação de antecâmaras e depósitos",
    ],
    description:
      "Facilita a passagem rápida de operadores com bandejas e carrinhos manuais, com fechamento automático suave e manutenção simples.",
  },
  {
    id: "telhas-termicas-eps",
    name: "Telhas Térmicas EPS (Telha Sanduíche)",
    category: "telhas",
    categoryLabel: "Telhas Térmicas",
    badge: "Isolamento Termoacústico Superior",
    tagline: "Redução de até 70% do calor radiante e até 40dB no ruído de chuva",
    image: "/images/products/telhas-termicas-eps-sanduiche.jpg",
    thickness: "30mm a 100mm de núcleo EPS",
    core: "EPS F-1 Autoextinguível Ignífugo",
    specs: [
      { label: "Modelos", value: "Telha + EPS + Telha ou Telha + EPS + Filme" },
      { label: "Chapa Externa", value: "Aço Galvalume AZ150 / Pré-pintada" },
      { label: "Perfil", value: "Trapezoidal estrutural alta resistência" },
      { label: "Largura Útil", value: "Padrão 1.000 mm" },
      { label: "Comprimento", value: "Contínuo até 12 metros" },
      { label: "Conforto Térmico", value: "Economia de até 50% em ar-condicionado" },
    ],
    applications: [
      "Galpões industriais e centros logísticos",
      "Coberturas de supermercados e lojas atacadistas",
      "Indústrias alimentícias, metalúrgicas e têxteis",
      "Residências e escritórios de alto padrão",
    ],
    description:
      "Proporciona uma barreira térmica insuperável contra a radiação solar, reduzindo drasticamente a temperatura interna do galpão e garantindo ambiente de trabalho saudável e sem gotejamento por condensação.",
  },
  {
    id: "placas-eps-piso",
    name: "Placas Isolantes de EPS para Pisos de Câmaras",
    category: "placas",
    categoryLabel: "Placas Isolantes",
    badge: "Proteção Estrutural de Pisos",
    tagline: "Impede o congelamento do subleito e a ruptura do concreto da câmara fria",
    image: "/images/products/placas-eps-isolamento-piso.jpg",
    thickness: "50mm a 200mm",
    core: "Poliestireno Expandido de Alta Densidade (12 a 16 kg/m³)",
    specs: [
      { label: "Dimensões Padrão", value: "2.000 x 1.200 mm ou 4.000 x 1.200 mm" },
      { label: "Densidades", value: "12 a 16 kg/m³ (Tipo P1 a P4)" },
      { label: "Comportamento", value: "Classe F-1 (não propaga fogo)" },
      { label: "Compressão", value: "Alta resistência mecânica para cargas pesadas" },
      { label: "Aplicação", value: "Sob o piso de concreto armado" },
    ],
    applications: [
      "Isolamento de fundo de câmaras frias de congelamento",
      "Isolamento térmico de lajes de galpões e edifícios",
      "Juntas de dilatação em pontes e viadutos",
      "Câmaras frigoríficas para batatas, carnes e pescados",
    ],
    description:
      "O isolamento de piso com placas de EPS é obrigatório em câmaras frigoríficas de congelados para evitar o fenômeno de frost heave (congelamento e expansão da umidade do solo que rompe a laje de piso).",
  },
];

// ==========================================
// OBRAS REAIS EXECUTADAS
// ==========================================
interface ObraItem {
  id: string;
  title: string;
  category: "camaras" | "frigorificos" | "logistica" | "industria";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  scope: string;
}

const OBRAS_DATA: ObraItem[] = [
  {
    id: "centro-distribuicao",
    title: "Centro de Distribuição & Logística Refrigerada",
    category: "logistica",
    categoryLabel: "Logística & CD",
    image: "/images/obras/obra-centro-distribuicao-logistica.jpg",
    location: "Minas Gerais",
    description:
      "Grande complexo de armazenamento com pé-direito livre de 9 metros, fechamentos perimetrais em isopainéis de 150mm e portas de correr para docas paletizadas.",
    scope: "Fechamento térmico completo, divisórias modulares e docas isotérmicas.",
  },
  {
    id: "camara-batatas",
    title: "Câmara Frigorífica de Batatas & Hortifrúti",
    category: "camaras",
    categoryLabel: "Câmaras Especiais",
    image: "/images/obras/obra-camara-frigorifica-batatas.jpg",
    location: "Polo Agrícola / MG",
    description:
      "Instalação climatizada de grande capacidade com controle estrito de umidade e temperatura (+4°C a +8°C) para conservação de sementes e hortifrúti em grande escala.",
    scope: "Painéis EPS 100mm, isolamento de piso reforçado e portas giratórias com vedação hermética.",
  },
  {
    id: "frigorifico-suino",
    title: "Frigorífico Suíno & Túnel de Congelamento",
    category: "frigorificos",
    categoryLabel: "Frigoríficos S.I.F.",
    image: "/images/obras/obra-frigorifico-suino-sala-cortes.jpg",
    location: "Região Central / MG",
    description:
      "Estrutura completa para abate, desossa e estocagem refrigerada conforme exigências sanitárias do Ministério da Agricultura (S.I.F.).",
    scope: "Isopainéis PUR e EPS, portas com passagem de trilho aéreo e portas seccionais.",
  },
  {
    id: "frigorifico-peixes",
    title: "Frigorífico de Pescados & Frutos do Mar",
    category: "frigorificos",
    categoryLabel: "Frigoríficos S.I.F.",
    image: "/images/obras/obra-frigorifico-peixes-processamento.jpg",
    location: "Minas Gerais",
    description:
      "Salas climatizadas para evisceração, filetagem e câmaras de estocagem negativa a -22°C com chapas resistentes à salinidade e corrosão.",
    scope: "Isopainéis de alta estanqueidade e portas automáticas de fluxo rápido.",
  },
  {
    id: "fabrica-gelo",
    title: "Fábrica de Gelo & Silos de Armazenamento",
    category: "industria",
    categoryLabel: "Indústria & Gelo",
    image: "/images/obras/obra-fabrica-de-gelo-armazenamento.jpg",
    location: "Ribeirão das Neves / MG",
    description:
      "Silos e câmaras de estocagem para gelo em cubos e escamas com isolamento contínuo em EPS 150mm e portas reforçadas padrão Fermod.",
    scope: "Estrutura modular térmica e controle térmico contínuo.",
  },
  {
    id: "galpao-industrial",
    title: "Galpão Industrial & Cobertura Térmica",
    category: "industria",
    categoryLabel: "Indústria & Galpões",
    image: "/images/obras/obra-galpao-industrial-isopainel.jpg",
    location: "Distrito Industrial / MG",
    description:
      "Fechamento lateral e cobertura com telhas térmicas sanduíche EPS para redução radical de calor e ruído em linha de montagem industrial.",
    scope: "Telhas térmicas trapezoidais EPS e fechamento perimétrico estrutural.",
  },
  {
    id: "faculdade-unopar",
    title: "Edificação Institucional e Fachada Térmica",
    category: "industria",
    categoryLabel: "Fachadas & Obras Comerciais",
    image: "/images/obras/obra-fachada-termica-institucional.jpg",
    location: "Sete Lagoas / MG",
    description:
      "Fechamento externo termoacústico para campus universitário, otimizando o conforto térmico das salas de aula e reduzindo consumo elétrico de climatização.",
    scope: "Painéis arquitetônicos termoisolantes com acabamento de alta durabilidade.",
  },
  {
    id: "shopping-center",
    title: "Shopping Center & Grandes Varejistas",
    category: "logistica",
    categoryLabel: "Varejo & Shoppings",
    image: "/images/obras/obra-shopping-center-fechamento.jpg",
    location: "Belo Horizonte / MG",
    description:
      "Câmaras frias para praça de alimentação e entrepostos de hipermercados com atendimento a rigorosas normas de vigilância sanitária.",
    scope: "Câmaras modulares de lixo refrigerado, estoques e salas de desossa.",
  },
];

// ==========================================
// GOOGLE REVIEWS REAIS FORNECIDOS
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
    author: "Jeronimo Campos",
    badge: "Local Guide · 18 avaliações · 14 fotos",
    text: "Fui bem atendido pela vendedora Andreia. O carregamento e liberação do material foi muito rápida.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Eudes Geraldo",
    badge: "Local Guide · 40 avaliações · 13 fotos",
    text: "Super gente fina o Celio Jardins e sua esposa Alaíde! Atendimento humano, direto com os donos e produto de extrema qualidade.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Ricardo Carlos Simão",
    badge: "9 avaliações",
    text: "Sensacional o atendimento e a qualidade do serviço. Os isopainéis e as portas vieram sob medida exata para minha câmara frigorífica.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Cassio Carvalho",
    badge: "Local Guide · 232 avaliações · 37 fotos",
    text: "Atendimento excelente! Empresa séria, estrutura fabril de respeito e materiais de primeira linha para refrigeração.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Fernando Hugo",
    badge: "Local Guide · 276 avaliações · 2.676 fotos",
    text: "Excelente estrutura, ótimos produtos. Fácil acesso no Distrito Industrial de Ribeirão das Neves para carregar carretas.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Deivison Ferreira",
    badge: "Local Guide · 16 avaliações",
    text: "Qualidade sem igual nos isopainéis e no acabamento das portas. Vale cada centavo pela durabilidade e isolamento térmico.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Sebastião Dutra",
    badge: "10 avaliações",
    text: "Excelente e também receptividade nota mil. Pessoal capacitado que entende de refrigeração industrial e cálculo térmico.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "GUI Hellison",
    badge: "6 avaliações",
    text: "Uma boa empresa. Cumprem rigorosamente os prazos de fabricação e fornecem materiais com acabamento impecável.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Alexandre Xande",
    badge: "3 avaliações",
    text: "Muito obrigado pelo carinho e atenção de toda a equipe Isominas! Parceria de anos nas nossas montagens.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
  {
    author: "Matheus Bernardes",
    badge: "4 avaliações",
    text: "Muito bom! Excelente atendimento comercial e suporte técnico para definir as espessuras corretas do projeto.",
    rating: 5,
    timeAgo: "Avaliação Verificada",
  },
];

// ==========================================
// PERGUNTAS FREQUENTES (FAQ)
// ==========================================
const FAQS = [
  {
    question: "Qual a diferença entre o Isopainel de EPS e o Isopainel de PUR?",
    answer:
      "O EPS (Poliestireno Expandido) é a solução mais econômica e amplamente utilizada para câmaras de resfriados (+0°C a +10°C) e fechamentos de galpões, com núcleo retardante de chamas Classe F-1. Já o PUR (Poliuretano Injetado) possui densidade superior (~40 kg/m³) e menor condutibilidade térmica (0,018 Kcal/h.m.°C), sendo ideal para túneis de congelamento rápido e câmaras de ultracongelados (-20°C a -40°C), permitindo espessuras menores com o mesmo poder isolante.",
  },
  {
    question: "Como calcular a espessura necessária para minha câmara frigorífica?",
    answer:
      "A espessura depende da temperatura interna desejada e da temperatura ambiente externa: para salas climatizadas (+10°C a +18°C), utiliza-se 50mm a 75mm; para câmaras de resfriados (0°C a +5°C), recomenda-se 100mm; para câmaras de congelados (-15°C a -25°C), recomenda-se 150mm a 200mm com isolamento de piso em placas de EPS. Nossa equipe técnica auxilia gratuitamente no dimensionamento térmico do seu projeto.",
  },
  {
    question: "As portas frigoríficas acompanham os batentes e ferragens?",
    answer:
      "Sim! As portas frigoríficas ISOMINAS são entregues completas, prontas para instalação: incluem marco/batente com núcleo isolante, gaxetas elastoméricas de vedação perimétrica, dobradiças e fechadura industrial de ferro fundido padrão FERMOD, sistema de destravamento interno de segurança e, no caso de portas para congelados, resistência elétrica de silicone instalada de fábrica no marco.",
  },
  {
    question: "A ISOMINAS entrega fora de Minas Gerais?",
    answer:
      "Sim. Atendemos e despachamos materiais para todo o Brasil. Nossa fábrica no Distrito Industrial João de Almeida (Ribeirão das Neves / BH) possui pátio pavimentado de 10.000 m² preparado para carregamento rápido de frotas próprias de clientes, caminhões truck, carretas e transportadoras parceiras.",
  },
  {
    question: "Os isopainéis atendem às exigências sanitárias do Ministério da Agricultura (S.I.F.) e ANVISA?",
    answer:
      "Totalmente. Nossos isopainéis e portas contam com revestimento em chapa de aço galvanizada pré-pintada na cor branca brilhante lavável, totalmente lisa e impermeável, com juntas macho-fêmea estanques que impedem acúmulo de sujidades e proliferação de bactérias, atendendo 100% às normas do S.I.F. e vigilância sanitária.",
  },
  {
    question: "Como funciona a garantia e durabilidade das telhas térmicas EPS (sanduíche)?",
    answer:
      "Nossas telhas térmicas são fabricadas com aço Galvalume de alta resistência à corrosão atmosférica e núcleo em EPS Classe F-1. Proporcionam vida útil superior a 25 anos com redução de até 70% na carga térmica solar incidente e até 40dB no ruído gerado por chuvas e ventos, sem risco de condensação interna.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeProductTab, setActiveProductTab] = useState<
    "todos" | "isopaineis" | "portas" | "telhas" | "placas"
  >("todos");
  const [activeObraFilter, setActiveObraFilter] = useState<
    "todos" | "camaras" | "frigorificos" | "logistica" | "industria"
  >("todos");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Troca automática de slides do hero (a cada 6 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Estados do Simulador de Câmaras & Isopainéis
  const [simProject, setSimProject] = useState<"resfriados" | "congelados" | "galpao" | "salalimpa">("resfriados");
  const [simLength, setSimLength] = useState<number>(4);
  const [simWidth, setSimWidth] = useState<number>(3);
  const [simHeight, setSimHeight] = useState<number>(2.8);
  const [simDoor, setSimDoor] = useState<"giratoria" | "correr" | "automatica" | "nenhuma">("giratoria");
  const [simCore, setSimCore] = useState<"eps" | "pur">("eps");

  // Cálculos do Simulador
  const simResults = useMemo(() => {
    const areaFloor = simLength * simWidth;
    const perimeter = 2 * (simLength + simWidth);
    const areaWalls = perimeter * simHeight;
    const areaCeiling = areaFloor;
    const totalPanelArea = Math.round(areaWalls + areaCeiling);
    const internalVolume = (simLength * simWidth * simHeight).toFixed(1);

    let recommendedThickness = "100mm";
    if (simProject === "resfriados") recommendedThickness = simCore === "pur" ? "75mm" : "100mm";
    if (simProject === "congelados") recommendedThickness = simCore === "pur" ? "120mm" : "150mm a 200mm";
    if (simProject === "galpao") recommendedThickness = "50mm a 75mm";
    if (simProject === "salalimpa") recommendedThickness = "50mm a 100mm";

    return {
      totalPanelArea,
      areaFloor: Math.round(areaFloor),
      internalVolume,
      recommendedThickness,
    };
  }, [simLength, simWidth, simHeight, simProject, simCore]);

  // Mensagem customizada para o WhatsApp do Simulador
  const simWhatsAppUrl = useMemo(() => {
    const projectLabels = {
      resfriados: "Câmara de Resfriados (0°C a +5°C)",
      congelados: "Câmara de Congelados (-18°C a -25°C)",
      galpao: "Fechamento de Galpão / Telhas",
      salalimpa: "Sala Limpa / Climatizada",
    };
    const doorLabels = {
      giratoria: "Porta Frigorífica Giratória",
      correr: "Porta Frigorífica de Correr",
      automatica: "Porta Automática de Fluxo Rápido",
      nenhuma: "Sem Porta (Apenas Painéis)",
    };
    const msg = `Olá, equipe técnica da ISOMINAS!
Gostaria de um orçamento para o seguinte projeto simulado no site:

- Tipo: ${projectLabels[simProject]}
- Dimensões: ${simLength}m comp. x ${simWidth}m larg. x ${simHeight}m alt.
- Área Estimada de Painéis: ~${simResults.totalPanelArea} m²
- Volume Útil: ~${simResults.internalVolume} m³
- Núcleo Desejado: ${simCore.toUpperCase()} (Espessura recomendada: ${simResults.recommendedThickness})
- Porta: ${doorLabels[simDoor]}

Poderiam calcular o melhor valor direto da fábrica para mim?`;

    return getWhatsAppUrl(msg);
  }, [simProject, simLength, simWidth, simHeight, simDoor, simCore, simResults]);

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
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A1C38] flex flex-col font-sans selection:bg-[#0088E0] selection:text-white">
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT BAR — INDÚSTRIA & ATENDIMENTO DIRETO       */}
      {/* ============================================================== */}
      <div className="bg-[#051329] text-white border-b border-sky-900/40 text-xs py-2 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0088E0] text-white font-bold text-[11px] tracking-wide uppercase shadow-xs">
              <Factory className="w-3 h-3" />
              Fábrica Própria com 10.000m²
            </span>
            <span className="hidden sm:inline text-sky-200/80">
              Distrito Industrial de Ribeirão das Neves / BH · Atendimento Brasil
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A3FF]" />
              <span className="font-semibold">{PHONE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com o time comercial da ISOMINAS.")}
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
              <span>4,7★ ({GOOGLE_REVIEW_COUNT} Google Reviews)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. HEADER PRINCIPAL & NAVEGAÇÃO                                */}
      {/* ============================================================== */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-[37px] z-40 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Logo da Marca Oficial Isominas */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-11 w-44 sm:h-13 sm:w-52 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src={LOGO_TRANSPARENT_SRC}
                alt={COMPANY_NAME}
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold text-slate-700">
            <a href="#produtos" className="hover:text-[#0088E0] transition-colors">
              Produtos & Linhas
            </a>
            <a href="#simulador" className="hover:text-[#0088E0] transition-colors flex items-center gap-1 text-[#0088E0] font-bold">
              <Calculator className="w-4 h-4 text-[#0088E0]" />
              Simulador
            </a>
            <a href="#obras" className="hover:text-[#0088E0] transition-colors">
              Obras Realizadas
            </a>
            <a href="#fabrica" className="hover:text-[#0088E0] transition-colors">
              Nossa Fábrica
            </a>
            <a href="#avaliacoes" className="hover:text-[#0088E0] transition-colors">
              Depoimentos (4,7★)
            </a>
            <a href="#faq" className="hover:text-[#0088E0] transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-[#0088E0] transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Header Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de uma cotação rápida direto da fábrica da ISOMINAS.")}
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
            className="lg:hidden p-2 text-slate-700 hover:text-[#0088E0] hover:bg-slate-100 rounded-lg focus:outline-hidden"
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
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0088E0]"
              >
                Isopainéis & Portas Frigoríficas
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-bold text-[#0088E0]"
              >
                Simulador de Câmaras & Medidas
              </a>
              <a
                href="#obras"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0088E0]"
              >
                Obras & Projetos Executados
              </a>
              <a
                href="#fabrica"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0088E0]"
              >
                Estrutura Fabril (10.000 m²)
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0088E0]"
              >
                Depoimentos do Google (4,7★)
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0088E0]"
              >
                Endereço & Telefones da Fábrica
              </a>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de um orçamento via WhatsApp.")}
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
                  <Phone className="w-4 h-4 text-[#0088E0]" />
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
      <section className="relative bg-gradient-to-br from-[#051329] via-[#0A1C38] to-[#041021] text-white pt-12 pb-20 overflow-hidden border-b border-sky-950">
        {/* Elementos Visuais Glaciais de Fundo */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0088E0] rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#00A3FF] rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Coluna de Texto Hero */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge de Destaque */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-900/60 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-semibold backdrop-blur-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#00A3FF] animate-ping" />
                <Snowflake className="w-3.5 h-3.5 text-[#00A3FF]" />
                <span>Indústria Líder em Isolamento Térmico & Refrigeração em MG</span>
              </div>

              {/* H1 Principal */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                Isopainéis Térmicos,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#38BDF8] to-white">
                  Portas Frigoríficas
                </span>{" "}
                e Telhas Sanduíche Direto da Fábrica
              </h1>

              {/* Proposta de Valor / Subtítulo */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Mais de 15 anos de tradição industrial. Parque fabril com 10.000 m² no Distrito Industrial de Ribeirão das Neves / BH. Fabricamos isopainéis em EPS Classe F-1 e PUR injetado, telhas termoacústicas e portas pesadas com resistência e máxima eficiência energética.
              </p>

              {/* Pilares Rápidos de Confiança */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Norma ABNT NBR 11949
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    EPS F-1 Autoextinguível
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs col-span-2 sm:col-span-1">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    4,7★ Google (33 Avaliações)
                  </span>
                </div>
              </div>

              {/* Botões de Ação Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar preços de isopainéis e solicitar um orçamento técnico com a vendedora Andreia da ISOMINAS."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="shadow-lg shadow-green-950/40 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar com Vendedor no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#simulador"
                  variant="cyan"
                  size="lg"
                  className="text-base"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Simular Medidas & Projeto</span>
                </GlowingButton>
              </div>

              {/* Atendimento e Carregamento Rápido */}
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-4 h-4 text-[#00A3FF]" />
                  Carregamento imediato no Distrito Industrial
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#00A3FF]" />
                  Segunda a Sexta: 08:00 às 17:30
                </span>
              </div>
            </div>

            {/* Coluna Visual do Hero — Vitrine de Destaques Sem Cortes */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="rounded-2xl overflow-hidden border border-sky-400/30 bg-[#0A1C38] shadow-2xl shadow-sky-950/70 flex flex-col">
                {/* Barra de Status Superior */}
                <div className="px-4 py-2.5 bg-[#051329] border-b border-sky-900/60 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0088E0] text-white font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <Factory className="w-3 h-3" />
                    Destaques da Fábrica
                  </span>
                  <span className="text-xs text-sky-300 font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    4,7★ ({GOOGLE_REVIEW_COUNT} Reviews)
                  </span>
                </div>

                {/* Imagem do Hero 100% visível sem NENHUM corte — Aspect ratio natural 940/370 */}
                <div className="relative w-full aspect-[940/370] bg-white overflow-hidden flex items-center justify-center group">
                  <Image
                    src={HERO_SLIDES[currentHeroSlide].image}
                    alt={HERO_SLIDES[currentHeroSlide].title}
                    fill
                    className="object-contain"
                    priority
                  />

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
                            ? "bg-[#0088E0] w-5"
                            : "bg-white/60 w-1.5 hover:bg-white"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Conteúdo Informativo ABAIXO da Imagem — 0% de corte ou sobreposição */}
                <div className="p-4 sm:p-5 space-y-2.5 bg-[#0A1C38] text-white border-t border-sky-900/60">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">
                      {HERO_SLIDES[currentHeroSlide].title}
                    </h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-900/80 text-sky-200 border border-sky-400/30 shrink-0">
                      {HERO_SLIDES[currentHeroSlide].badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {HERO_SLIDES[currentHeroSlide].description}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-sky-300 border-t border-sky-900/40">
                    <span className="flex items-center gap-1.5">
                      <ThermometerSnowflake className="w-3.5 h-3.5 text-[#00A3FF]" />
                      {HERO_SLIDES[currentHeroSlide].range}
                    </span>
                    <a
                      href="#produtos"
                      className="font-bold underline hover:text-white flex items-center gap-1 transition-colors"
                    >
                      Ver catálogo completo <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Informativo Fabril Limpo Abaixo */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0088E0] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                      Parque Fabril com 10.000 m²
                    </div>
                    <div className="text-xs font-semibold text-white">
                      Distrito Industrial João de Almeida · Neves / BH
                    </div>
                  </div>
                </div>
                <a
                  href="#fabrica"
                  className="hidden sm:inline-flex text-xs font-bold text-sky-300 hover:text-white underline"
                >
                  Conhecer fábrica
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
              <div className="text-3xl sm:text-4xl font-black text-[#0088E0]">15+ Anos</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                De atuação na refrigeração industrial e construção civil
              </div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0A1C38]">10.000 m²</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Área fabril total no Distrito Industrial (Ribeirão das Neves)
              </div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#0088E0]">4,7 ★</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Nota no Google Reviews com 33 avaliações autênticas
              </div>
            </div>
            <div className="pt-3 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-[#16A34A]">100% S.I.F.</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Conforme exigências sanitárias e normas ABNT-NBR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SIMULADOR INTERATIVO DE CÂMARAS & ISOPAINEIS                */}
      {/* ============================================================== */}
      <section id="simulador" className="py-16 sm:py-20 bg-gradient-to-b from-[#F0F8FF] to-white border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-[#EBF5FE] text-[#0088E0] text-xs font-bold uppercase tracking-wider border border-[#BAE0FD]">
              Ferramenta Exclusiva
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1C38]">
              Simulador de Câmaras Frias & Isopainéis
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Informe as dimensões do seu ambiente e descubra a área estimada de painéis, espessura recomendada e envie a cotação pronta para nossa equipe comercial.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-sky-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Controles do Simulador */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              {/* 1. Tipo de Projeto */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Finalidade do Projeto
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "resfriados", label: "Resfriados (0°C a 10°C)" },
                    { id: "congelados", label: "Congelados (-18°C)" },
                    { id: "galpao", label: "Galpão / Telhas" },
                    { id: "salalimpa", label: "Sala Limpa" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSimProject(p.id as "resfriados" | "congelados" | "galpao" | "salalimpa")}
                      className={`px-3 py-2.5 rounded-lg text-xs font-bold border transition-all text-center ${
                        simProject === p.id
                          ? "bg-[#0088E0] text-white border-[#0088E0] shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Dimensões em Metros */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Dimensões Estimadas (Comprimento x Largura x Altura)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Comprimento:</span>
                      <span className="font-bold text-[#0088E0]">{simLength} metros</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="0.5"
                      value={simLength}
                      onChange={(e) => setSimLength(parseFloat(e.target.value))}
                      className="w-full accent-[#0088E0] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Largura:</span>
                      <span className="font-bold text-[#0088E0]">{simWidth} metros</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="15"
                      step="0.5"
                      value={simWidth}
                      onChange={(e) => setSimWidth(parseFloat(e.target.value))}
                      className="w-full accent-[#0088E0] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Altura (Pé-direito):</span>
                      <span className="font-bold text-[#0088E0]">{simHeight} metros</span>
                    </div>
                    <input
                      type="range"
                      min="2.2"
                      max="8"
                      step="0.2"
                      value={simHeight}
                      onChange={(e) => setSimHeight(parseFloat(e.target.value))}
                      className="w-full accent-[#0088E0] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Núcleo Isolante e Porta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    3. Núcleo Térmico
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSimCore("eps")}
                      className={`p-2.5 rounded-lg text-xs font-bold border transition-all text-center ${
                        simCore === "eps"
                          ? "bg-[#0088E0] text-white border-[#0088E0]"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      EPS Autoextinguível
                    </button>
                    <button
                      type="button"
                      onClick={() => setSimCore("pur")}
                      className={`p-2.5 rounded-lg text-xs font-bold border transition-all text-center ${
                        simCore === "pur"
                          ? "bg-[#0088E0] text-white border-[#0088E0]"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      PUR Injetado (Alta Dens.)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    4. Modelo de Porta
                  </label>
                  <select
                    value={simDoor}
                    onChange={(e) => setSimDoor(e.target.value as "giratoria" | "correr" | "automatica" | "nenhuma")}
                    className="w-full p-2.5 rounded-lg text-xs font-bold border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:border-[#0088E0]"
                  >
                    <option value="giratoria">Porta Frigorífica Giratória (Fermod)</option>
                    <option value="correr">Porta de Correr (Para Paletes)</option>
                    <option value="automatica">Porta Automática Rápida</option>
                    <option value="nenhuma">Não incluir porta no cálculo</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Painel de Resultados do Simulador */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0A1C38] to-[#051329] text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-sky-950">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-sky-900/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Resumo do Dimensionamento
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-200 border border-sky-400/30">
                    Cálculo Automático
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400">Área de Painéis:</div>
                    <div className="text-2xl font-black text-white">
                      ~{simResults.totalPanelArea} m²
                    </div>
                    <div className="text-[11px] text-slate-400">Paredes + Teto</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400">Volume Interno:</div>
                    <div className="text-2xl font-black text-[#38BDF8]">
                      {simResults.internalVolume} m³
                    </div>
                    <div className="text-[11px] text-slate-400">Capacidade de estocagem</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Espessura Recomendada:</span>
                    <span className="font-bold text-amber-300">
                      {simResults.recommendedThickness}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Área de Piso Isolante:</span>
                    <span className="font-bold text-white">~{simResults.areaFloor} m²</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Largura Útil dos Painéis:</span>
                    <span className="font-bold text-sky-300">1.160 mm padrão</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 leading-relaxed bg-black/20 p-2.5 rounded-lg">
                  💡 Os valores de área são aproximados para estimativa rápida. Nossos engenheiros calculam o plano de corte exato para minimizar sobras na sua obra.
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
                  <span>Enviar Medidas para Vendedora Andreia</span>
                </GlowingButton>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Resposta rápida com valores direto da fábrica
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
            <span className="px-3 py-1 rounded-full bg-[#EBF5FE] text-[#0088E0] text-xs font-bold uppercase tracking-wider border border-[#BAE0FD]">
              Catálogo Industrial
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1C38]">
              Soluções Completas em Isolamento Térmico
            </h2>
            <p className="text-base text-slate-600">
              Produtos fabricados rigorosamente sob as normas técnicas ABNT, com controle de densidade, encaixes precisos e acabamento sanitário lavável.
            </p>

            {/* Filtros de Categorias */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "todos", label: "Todos os Produtos" },
                { id: "isopaineis", label: "Isopainéis EPS & PUR" },
                { id: "portas", label: "Portas Frigoríficas" },
                { id: "telhas", label: "Telhas Sanduíche" },
                { id: "placas", label: "Placas Isolantes" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveProductTab(tab.id as "todos" | "isopaineis" | "portas" | "telhas" | "placas")}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeProductTab === tab.id
                      ? "bg-[#0088E0] text-white shadow-md shadow-sky-500/25"
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
                className="rounded-2xl border border-slate-200 bg-white hover:border-[#0088E0] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden group"
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
                      <span className="px-2.5 py-1 rounded-md bg-[#0088E0] text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold">
                        {product.thickness}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-[#0088E0] uppercase tracking-wider">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-xl font-black text-[#0A1C38] leading-snug group-hover:text-[#0088E0] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {product.tagline}
                    </p>

                    {/* Ficha Rápida */}
                    <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-200/80 space-y-1.5 text-xs text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Núcleo Térmico:</span>
                        <span className="font-semibold text-slate-900 truncate max-w-[160px]">
                          {product.core}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Espessuras:</span>
                        <span className="font-semibold text-[#0088E0]">{product.thickness}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões do Card */}
                <div className="p-6 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#0088E0]" />
                    <span>Ver Ficha Técnica</span>
                  </button>

                  <GlowingButton
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de uma cotação para o produto: ${product.name} (${product.thickness}).`
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
      {/* 7. MODAL DE FICHA TÉCNICA DETALHADA                            */}
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
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded bg-[#0088E0] text-white text-[11px] font-bold uppercase tracking-wider">
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
                    Descrição Técnica
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Especificações em Tabela */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Especificações Construtivas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProduct.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center"
                      >
                        <span className="text-slate-500 font-medium">{s.label}:</span>
                        <span className="font-bold text-[#0A1C38]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aplicações Típicas */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Aplicações Recomendadas
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
                    Consulte disponibilidade e prazo de fabricação.
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      `Olá! Gostaria de encomendar / cotar o produto: ${selectedProduct.name}.`
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
      {/* 8. OBRAS & PORTFÓLIO REAL ISOMINAS                             */}
      {/* ============================================================== */}
      <section id="obras" className="py-16 sm:py-24 bg-[#051329] text-white border-b border-sky-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-sky-900/60 text-[#38BDF8] text-xs font-bold uppercase tracking-wider border border-sky-400/30">
              Casos Reais & Experiência
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Obras Executadas com Padrão ISOMINAS
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Conheça grandes instalações industriais, centros de distribuição e câmaras frigoríficas que confiam na qualidade e durabilidade das nossas soluções.
            </p>

            {/* Filtros de Obras */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "todos", label: "Todas as Obras" },
                { id: "logistica", label: "Logística & CDs" },
                { id: "camaras", label: "Câmaras Especiais" },
                { id: "frigorificos", label: "Frigoríficos S.I.F." },
                { id: "industria", label: "Galpões & Indústria" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveObraFilter(f.id as "todos" | "camaras" | "frigorificos" | "logistica" | "industria")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeObraFilter === f.id
                      ? "bg-[#0088E0] text-white shadow-md"
                      : "bg-white/10 text-slate-300 hover:bg-white/20"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Obras */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredObras.map((obra) => (
              <div
                key={obra.id}
                className="rounded-xl overflow-hidden border border-sky-900/40 bg-slate-900/70 hover:border-[#0088E0] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <Image
                      src={obra.image}
                      alt={obra.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-bold text-sky-300 uppercase">
                        {obra.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-[#00A3FF]" />
                      <span>{obra.location}</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00A3FF] transition-colors leading-tight">
                      {obra.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {obra.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-2 border-t border-sky-900/40 text-[11px] text-sky-200/80">
                    <span className="font-semibold text-white">Escopo:</span> {obra.scope}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chamada para Projetos Sob Medida */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950 via-[#0A1C38] to-[#0088E0]/40 border border-sky-700/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Tem um projeto ou galpão em fase de planejamento?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Nossos consultores analisam sua planta e geram a lista exata de materiais com economia industrial.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Tenho uma planta/projeto para minha obra e gostaria de suporte técnico da ISOMINAS.")}
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
      {/* 9. SOBRE A EMPRESA & INFRAESTRUTURA FABRIL                     */}
      {/* ============================================================== */}
      <section id="fabrica" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Texto Institucional */}
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#EBF5FE] text-[#0088E0] text-xs font-bold uppercase tracking-wider border border-[#BAE0FD]">
                15+ Anos de Tradição e Confiança
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0A1C38] leading-tight">
                A Força da Nossa Indústria em Minas Gerais
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                A <strong>ISOMINAS Indústria e Comércio de Isopainéis e Refrigeração</strong> consolidou-se como referência no mercado nacional através de constante inovação tecnológica, maquinário industrial moderno e atendimento focado nas necessidades reais de instaladores, engenheiros e empresários.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Fundada e liderada com dedicação por <strong>Célio Jardins e sua esposa Alaíde</strong>, a empresa preserva uma relação próxima, transparente e ética com cada cliente, garantindo desde o dimensionamento térmico até o carregamento ágil no Distrito Industrial.
              </p>

              {/* Destaques da Fábrica */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0088E0]">
                    <Factory className="w-5 h-5" />
                    <span>10.000 m² de Parque</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Com 5.000 m² de área construída projetada para fabricação seriada de painéis e portas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0088E0]">
                    <Truck className="w-5 h-5" />
                    <span>Carregamento Ágil</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Acesso facilitado para carretas e transportadoras via BR-040 no polo industrial de Neves.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0088E0]">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Rigor Normativo ABNT</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Poliestireno expandido autoextinguível e poliuretano testados para conformidade térmica.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#0088E0]">
                    <Sparkles className="w-5 h-5" />
                    <span>Vendedora Andreia & Equipe</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Equipe comercial elogiada no Google pela agilidade na emissão de propostas e liberação.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Imagens da Fábrica / Estrutura */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/products/isopainel-estoque-fabrica.jpg"
                  alt="Estoque e Fabricação de Isopainéis ISOMINAS"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                    Capacidade Produtiva
                  </div>
                  <div className="text-base font-bold">
                    Linha Contínua de Laminação e Corte Automatizado
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/products/isopainel-eps-encaixe-macho-femea.jpg"
                    alt="Encaixe Macho Fêmea Hermético"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 text-white text-[11px] font-bold">
                    Encaixe Estanque
                  </div>
                </div>

                <div className="relative h-36 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="/images/products/porta-giratoria-acabamento.jpg"
                    alt="Acabamento Industrial de Portas"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 text-white text-[11px] font-bold">
                    Ferragens Fermod
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. DEPOIMENTOS DO GOOGLE REVIEWS (4,7★ REAIS)                 */}
      {/* ============================================================== */}
      <section id="avaliacoes" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header de Avaliações */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Avaliações Reais no Google</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1C38]">
              O que Dizem os Nossos Clientes
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Mais de 33 avaliações públicas e nota 4,7 estrelas no Google. A satisfação de quem compra direto da nossa fábrica.
            </p>

            {/* Selo Google Oficial */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xl font-black text-[#0A1C38]">4,7 / 5.0</span>
              <span className="text-slate-400">|</span>
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0088E0] hover:underline flex items-center gap-1"
              >
                Ver todas no Google <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Grid de Depoimentos */}
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
                  <div className="w-9 h-9 rounded-full bg-[#EBF5FE] text-[#0088E0] font-black text-sm flex items-center justify-center shrink-0">
                    {review.author[0]}
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm font-bold text-[#0A1C38] truncate">
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
      {/* 11. TABELA COMPARATIVA — ISOMINAS VS CONCORRÊNCIA COMUM        */}
      {/* ============================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-[#EBF5FE] text-[#0088E0] text-xs font-bold uppercase tracking-wider border border-[#BAE0FD]">
              Diferenciais de Fábrica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1C38]">
              Por que a ISOMINAS é a Escolha Certa?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Veja a diferença entre comprar direto de uma indústria estruturada versus intermediários ou oficinas improvisadas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0A1C38] text-white">
                    <th className="py-4 px-6 font-bold">Critério Técnico</th>
                    <th className="py-4 px-6 font-black text-[#38BDF8] bg-[#051329]">
                      ISOMINAS Indústria
                    </th>
                    <th className="py-4 px-6 font-semibold text-slate-400">
                      Concorrência / Revenda Comum
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Origem do Produto
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0088E0] bg-sky-50/50">
                      Direto da Fábrica com 10.000m²
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Revendedores intermediários com sobrepreço
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Segurança contra Fogo
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0088E0] bg-sky-50/50">
                      EPS Classe F-1 Autoextinguível
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Frequentemente EPS tipo P sem retardante
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Ferragens de Portas
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0088E0] bg-sky-50/50">
                      Ferro fundido padrão FERMOD pesado
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Dobradiças plásticas ou chapas finas
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Resistência no Marco (Congelados)
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0088E0] bg-sky-50/50">
                      Silicone elétrico integrado de fábrica
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Muitas vezes cobrado à parte ou ausente
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Atendimento & Carregamento
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0088E0] bg-sky-50/50">
                      Comercial ágil e pátio para carretas
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Demora de semanas e locais sem doca
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-semibold text-slate-900">
                      Avaliação no Google
                    </td>
                    <td className="py-3.5 px-6 font-bold text-[#0088E0] bg-sky-50/50">
                      Nota 4,7 ★ com 33+ reviews
                    </td>
                    <td className="py-3.5 px-6 text-slate-500">
                      Avaliações baixas ou perfis sem histórico
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
            <span className="px-3 py-1 rounded-full bg-[#EBF5FE] text-[#0088E0] text-xs font-bold uppercase tracking-wider border border-[#BAE0FD]">
              Tire suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1C38]">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Esclareça os principais pontos sobre nossos materiais, dimensionamento e prazos de entrega.
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
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0088E0] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0088E0] shrink-0 transition-transform duration-200 ${
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
              Ficou com alguma dúvida técnica sobre o seu projeto?
            </p>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre especificações técnicas dos isopainéis.")}
              target="_blank"
              variant="outline"
              size="md"
            >
              <HelpCircle className="w-4 h-4 text-[#0088E0]" />
              <span>Falar com o Suporte Técnico</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 13. LOCALIZAÇÃO & VISITE A FÁBRICA                             */}
      {/* ============================================================== */}
      <section id="contato" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Informações de Contato e Endereço */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 rounded-full bg-[#EBF5FE] text-[#0088E0] text-xs font-bold uppercase tracking-wider border border-[#BAE0FD]">
                Visite Nossa Sede Fabril
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0A1C38] leading-tight">
                Distrito Industrial João de Almeida
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Nossa indústria está estrategicamente localizada em <strong>Ribeirão das Neves - MG</strong> (Região Metropolitana de Belo Horizonte), com acesso desimpedido para carretas, sem restrições de tráfego pesado e ligação direta com a BR-040.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#0088E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Endereço da Fábrica:</strong>
                    <span>{PRIMARY_FACTORY_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-[#0088E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Telefones Oficiais:</strong>
                    <span>PABX: {PHONE_DISPLAY} · Suporte: {PHONE_SECONDARY}</span>
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
                  <Clock className="w-5 h-5 text-[#0088E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Horário de Funcionamento:</strong>
                    <span>Segunda a Sexta: 08:00 às 17:30</span>
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
                  href={getWhatsAppUrl("Olá! Gostaria de agendar uma visita à fábrica da ISOMINAS.")}
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
              <div className="rounded-2xl overflow-hidden border-2 border-sky-100 shadow-xl bg-slate-100 h-96 sm:h-[420px] relative">
                <iframe
                  title="Localização ISOMINAS"
                  src="https://maps.google.com/maps?q=ISOMINAS+Ind%C3%BAstria+e+Com%C3%A9rcio+de+Isopain%C3%A9is+e+Refrigera%C3%A7%C3%A3o+Rua+Alzira+Menezes+Nogueira+151+Ribeirao+das+Neves+MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
      <footer className="bg-[#051329] text-white border-t border-sky-950 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coluna 1: Marca & Síntese */}
            <div className="space-y-4">
              <div className="relative h-12 w-48">
                <Image
                  src={LOGO_TRANSPARENT_SRC}
                  alt="ISOMINAS Isopainéis e Refrigeração"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Indústria e comércio especializado em isopainéis térmicos EPS e PUR, telhas termoacústicas e portas frigoríficas. Qualidade comprovada e tradição fabril em Minas Gerais.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0088E0] flex items-center justify-center transition-colors text-white"
                  aria-label="Instagram"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0088E0] flex items-center justify-center transition-colors text-white"
                  aria-label="Facebook"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors text-white"
                  aria-label="Google Reviews"
                >
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Coluna 2: Linha de Produtos */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Linhas de Fabricação
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Isopainéis Térmicos EPS (50mm a 200mm)
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Isopainéis PUR (Poliuretano Injetado)
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Portas Frigoríficas Giratórias (Fermod)
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Portas de Correr Manuais & Automáticas
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Portas para Sala Limpa & Hospitalar
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Telhas Térmicas EPS (Sanduíche)
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Placas de EPS para Isolamento de Piso
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Navegação Rápida */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Acesso Rápido
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#simulador" className="hover:text-white transition-colors">
                    Simulador de Câmaras & Medidas
                  </a>
                </li>
                <li>
                  <a href="#obras" className="hover:text-white transition-colors">
                    Obras e Projetos Realizados
                  </a>
                </li>
                <li>
                  <a href="#fabrica" className="hover:text-white transition-colors">
                    Estrutura Fabril (10.000m²)
                  </a>
                </li>
                <li>
                  <a href="#avaliacoes" className="hover:text-white transition-colors">
                    Depoimentos no Google (4,7★)
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Portal Institucional
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Sede */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Fale com a Indústria
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00A3FF]" />
                  <span>{PHONE_DISPLAY} · {PHONE_SECONDARY}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00A3FF]" />
                  <span>{EMAIL_CONTACT}</span>
                </p>
                <p className="flex items-start gap-2 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00A3FF] shrink-0 mt-0.5" />
                  <span>Rua Alzira Menezes Nogueira, 151 - Distrito Industrial João de Almeida, Ribeirão das Neves - MG</span>
                </p>
              </div>
            </div>
          </div>

          {/* Linha Inferior com Copyright e CNPJ */}
          <div className="pt-8 border-t border-sky-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 {COMPANY_LEGAL_NAME}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-3">
              <span>Sede Própria: Ribeirão das Neves - MG</span>
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
          href={getWhatsAppUrl("Olá! Gostaria de consultar preços de isopainéis com a equipe técnica da ISOMINAS.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 group font-bold text-sm border-2 border-white/20"
          aria-label="Atendimento WhatsApp"
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
          className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 bg-slate-50 text-[#0A1C38] text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#0088E0]" />
          <span>Ligar Fábrica</span>
        </a>

        <a
          href={getWhatsAppUrl("Olá! Gostaria de um orçamento rápido pelo WhatsApp.")}
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
