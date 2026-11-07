"use client";

import { useState } from "react";
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
  Sparkles,
  Wrench,
  Navigation,
  Check,
  ExternalLink,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Truck,
  Car,
  Snowflake,
  Flame,
  Gauge,
  ThermometerSnowflake,
  Building2,
  Layers,
  Store,
  type LucideIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Grupo Frio Bel | Refrigeração
const COMPANY_NAME = "Grupo Frio Bel | Refrigeração";
const COMPANY_FULL_NAME =
  "Grupo Frio Bel Refrigeração — Soluções Completas em Peças para Geladeiras, Lavadoras & Ar-Condicionado";
const COMPANY_TAGLINE =
  "O Maior Mix de Peças Originais para Refrigeração, Lavadoras e Ar-Condicionado em BH e Minas Gerais";
const BRAND_SUBTITLE =
  "Mais de 10.000 itens a pronta entrega para técnicos e clientes. Peças originais para geladeiras, lavadoras, freezers e climatização. Estacionamento próprio gratuito na Av. Dom Pedro I, atendimento técnico de excelência e entrega rápida para todo o Brasil.";

const WHATSAPP_NUMBER = "553130249261";
const PHONE_DISPLAY = "(31) 3024-9261";
const PHONE_MATRIZ = "(31) 3239-2880";
const EMAIL_CONTACT = "contato@friobel.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/friobel/";
const INSTAGRAM_HANDLE = "@friobel";
const WEBSITE_URL = "https://www.friobel.com.br";
const CNPJ_DISPLAY = "00.416.906/0001-91";

const PRIMARY_STORE_ADDRESS =
  "Av. Dom Pedro I, 2233 - São João Batista / Pampulha, Belo Horizonte - MG, CEP 31515-300";
const MATRIZ_ADDRESS =
  "Rua dos Tupis, 963 - Centro, Belo Horizonte - MG, CEP 30190-060";

const GOOGLE_REVIEW_COUNT = "250+";
const GOOGLE_RATING = "4.6";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Frio+Bel+Refrigera%C3%A7%C3%A3o+(Unidade+Dom+Pedro+I)+Belo+Horizonte";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frio+Bel+Refrigera%C3%A7%C3%A3o+Av.+Dom+Pedro+I%2C+2233+-+S%C3%A3o+Jo%C3%A3o+Batista%2C+Belo+Horizonte+-+MG%2C+31515-300";

// Assets Oficiais
const LOGO_SRC = "/logo.png";
const FB_MARK_SRC = "/fb-mark.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de consultar a disponibilidade e valor de peças com a equipe da Frio Bel Refrigeração.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

// 6 Categorias Principais de Produtos e Soluções Frio Bel
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: LucideIcon;
  image: string;
  fullDesc: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "pecas-geladeiras-freezers",
    title: "Peças para Geladeiras, Freezers e Balcões Comerciais",
    shortDesc:
      "Compressores Embraco e Tecumseh, fluidos e gases refrigerantes (R134a, R600a, R404a, Chemours Freon), sensores de temperatura 2.7k, termostatos, relés, protetores e gaxetas.",
    badge: "Maior Estoque em BH",
    icon: Snowflake,
    image: "/images/gas-r404a.webp",
    fullDesc:
      "A Frio Bel é a principal fornecedora de peças originais para refrigeração doméstica e comercial em Belo Horizonte. Trabalhamos diretamente com as maiores fabricantes (Brastemp, Consul, Electrolux, Embraco, Chemours, Coel, Ageon), garantindo que técnicos e consumidores encontrem a peça exata a pronta entrega sem atrasos.",
    benefits: [
      "Compressores herméticos 110V e 220V em todas as capacidades de HP",
      "Fluidos refrigerantes certificados: R134a, R600a, R404a e Chemours Freon",
      "Kits de sensores de degelo, termostatos digitais e placas eletrônicas",
      "Borrachas de vedação (gaxetas), prateleiras e gavetas originais",
    ],
    ctaText: "Consultar Peças de Geladeira",
    whatsappMessage:
      "Olá! Gostaria de consultar disponibilidade e preços de peças para Geladeira / Freezer na Frio Bel Refrigeração.",
  },
  {
    id: "pecas-lavadoras-lava-seca",
    title: "Peças para Máquinas de Lavar, Tanquinhos e Lava & Seca",
    shortDesc:
      "Agitadores 8 blades, mecanismos e transmissões completos, placas de potência e interface, eletrobombas de drenagem, correias reforçadas, válvulas de água e retentores.",
    badge: "Linha Completa",
    icon: Sparkles,
    image: "/images/agitador-lavadora.jpg",
    fullDesc:
      "Mantenha lavadoras e tanquinhos funcionando com peças 100% confiáveis. Atendemos todas as linhas Brastemp, Consul, Electrolux, Colormaq, Suggar e marcas importadas de lava e seca com mecanismos montados, placas originais testadas de fábrica e componentes de acionamento de primeira linha.",
    benefits: [
      "Agitadores originais e paralelos de altíssima durabilidade",
      "Mecanismos de transmissão completos prontos para instalação",
      "Placas eletrônicas de interface e potência com garantia",
      "Correias dentadas e estriadas (3PJE, 3L250 e multicanais)",
    ],
    ctaText: "Ver Peças para Lavadoras",
    whatsappMessage:
      "Olá! Preciso de peças para Máquina de Lavar / Lava e Seca. Podem me ajudar a encontrar o modelo correto?",
  },
  {
    id: "ferramentas-refrigeristas",
    title: "Ferramentas & Instrumentos Profissionais para Técnicos",
    shortDesc:
      "Manifolds analógicos e digitais Ebel, mangueiras de alta pressão, alicates amperímetros, cortadores de tubos de cobre e capilar, bombas de vácuo, maçaricos e foscoper.",
    badge: "Para Técnicos & Especialistas",
    icon: Wrench,
    image: "/images/manifold-kit.png",
    fullDesc:
      "Todo técnico e profissional refrigerista encontra na Frio Bel sua parceira de bancada e campo. Temos ferramentas profissionais de precisão para instalação, diagnóstico e manutenção em campo: manifolds com visor de líquido, bombas de vácuo com vacuômetro, cortadores precisos e equipamentos de brasagem.",
    benefits: [
      "Kits de Manifold com mangueiras reforçadas para R12, R22, R134a e R404a",
      "Alicates amperímetros digitais com precisão True RMS",
      "Cortadores de tubo de cobre reforçados e cortadores de capilar",
      "Maçaricos portáteis, varetas de solda foscoper e fluxo para brasagem",
    ],
    ctaText: "Consultar Catálogo de Ferramentas",
    whatsappMessage:
      "Olá! Gostaria de consultar o catálogo e valores de ferramentas profissionais para técnicos na Frio Bel.",
  },
  {
    id: "ar-condicionado-climatizacao",
    title: "Ar-Condicionado & Climatização Residencial e Comercial",
    shortDesc:
      "Tubos de cobre em panqueca e barra, isolamentos térmicos blindados, suportes reforçados para condensadoras, fluidos R410A e R32, capacitores, turbinas e placas universais.",
    badge: "Alta Eficiência",
    icon: ThermometerSnowflake,
    image: "/images/cortador-tubos.png",
    fullDesc:
      "Linha completa de materiais e insumos para instalação e manutenção de sistemas de ar-condicionado Split, Hi-Wall e Inverter. Produtos que atendem às normas técnicas das principais fabricantes do mercado como Springer Midea, Daikin, LG, Gree e Samsung.",
    benefits: [
      "Tubulações de cobre sem costura em diversas bitolas (1/4\", 3/8\", 1/2\", 5/8\")",
      "Isolamentos elastoméricos térmicos de alta densidade",
      "Suportes de condensadora em aço carbono com pintura eletrostática",
      "Capacitores duplos e simples, placas universais e controles remotos",
    ],
    ctaText: "Ver Linha de Ar-Condicionado",
    whatsappMessage:
      "Olá! Gostaria de fazer uma cotação de materiais para Ar-Condicionado e Climatização com a Frio Bel.",
  },
  {
    id: "bebedouros-purificadores",
    title: "Bebedouros, Purificadores & Controladores Digitais",
    shortDesc:
      "Refis de filtro e elementos filtrantes (Zufer, Consul, IBBL), torneiras de metal industriais e escolares para jato/copo, controladores digitais Ageon e Full Gauge.",
    badge: "Água Pura & Controle",
    icon: Gauge,
    image: "/images/controlador-ageon.webp",
    fullDesc:
      "Fornecemos componentes essenciais para bebedouros de pressão industriais, escolares e residenciais, além de controladores de temperatura digitais para resfriadores de leite, câmaras frias, ilhas congeladas e cervejeiras comerciais.",
    benefits: [
      "Refis de filtros bacteriostáticos e retenção de cloro para bebedouros",
      "Torneiras e válvulas de metal reforçadas para uso pesado escolar e fabril",
      "Controladores digitais de temperatura Ageon, Coel e Full Gauge",
      "Termostatos de bulbo e termômetros digitais com sonda",
    ],
    ctaText: "Consultar Linha Comercial & Bebedouros",
    whatsappMessage:
      "Olá! Preciso de peças para bebedouro ou controlador digital de temperatura. Vocês têm a pronta entrega?",
  },
  {
    id: "atendimento-tecnico-balcao",
    title: "Identificação Técnica da Peça & Atendimento Especializado",
    shortDesc:
      "Não tem certeza de qual peça precisa? Traga o modelo ou foto da etiqueta do seu aparelho. Nossos vendedores especialistas identificam o código compatível na hora!",
    badge: "Suporte Especialista",
    icon: CheckCircle2,
    image: "/images/monitor-auto-teste.webp",
    fullDesc:
      "Diferente de marketplaces genéricos onde você corre o risco de comprar a versão errada, na Frio Bel você conta com vendedores experientes e qualificados como o Junio, Ribeiro, Lázaro, Felipe e toda a equipe, prontos para consultar códigos de vistas explodidas e garantir a peça exata do seu equipamento.",
    benefits: [
      "Consulta instantânea de códigos por modelo (PNC, código comercial, número de série)",
      "Atendimento humanizado e ágil no balcão e pelo WhatsApp oficial",
      "Estacionamento amplo e gratuito em frente à loja na Av. Dom Pedro I",
      "Facilidade e agilidade de troca sem burocracia para profissionais",
    ],
    ctaText: "Falar com Vendedor Técnico",
    whatsappMessage:
      "Olá! Tenho uma foto da etiqueta do meu aparelho e preciso de ajuda para identificar a peça correta.",
  },
];

// Rede Oficial com as 7 Lojas Físicas em Minas Gerais
interface StoreLocation {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  address: string;
  phone: string;
  whatsapp: string;
  isMatriz?: boolean;
  isHeadquarter?: boolean;
  image: string;
  mapsUrl: string;
}

const STORES: StoreLocation[] = [
  {
    id: "matriz-centro-bh",
    name: "MATRIZ - BELO HORIZONTE",
    city: "Belo Horizonte",
    neighborhood: "Centro",
    address: "Rua dos Tupis, 963 - Centro, Belo Horizonte - MG, CEP 30190-060",
    phone: "(31) 3239-2880",
    whatsapp: "553132392880",
    isMatriz: true,
    image: "/images/lojas/loja-centro-bh.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+dos+Tupis%2C+963+-+Centro%2C+Belo+Horizonte+-+MG",
  },
  {
    id: "sao-joao-batista",
    name: "BELO HORIZONTE - SÃO JOÃO BATISTA",
    city: "Belo Horizonte",
    neighborhood: "São João Batista / Pampulha",
    address: "Av. Dom Pedro I, 2233 - São João Batista, Belo Horizonte - MG, CEP 31515-300",
    phone: "(31) 3024-9261",
    whatsapp: "553130249261",
    isHeadquarter: true,
    image: "/images/lojas/loja-sao-joao-batista.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Dom+Pedro+I%2C+2233+-+S%C3%A3o+Jo%C3%A3o+Batista%2C+Belo+Horizonte+-+MG",
  },
  {
    id: "contagem",
    name: "CONTAGEM - ELDORADO",
    city: "Contagem",
    neighborhood: "Eldorado",
    address: "Av. José Faria da Rocha, 5566 - Eldorado, Contagem - MG",
    phone: "(31) 3911-2214",
    whatsapp: "553139112214",
    image: "/images/lojas/loja-contagem.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Jos%C3%A9+Faria+da+Rocha%2C+5566+-+Eldorado%2C+Contagem+-+MG",
  },
  {
    id: "sete-lagoas",
    name: "SETE LAGOAS - BOA VISTA",
    city: "Sete Lagoas",
    neighborhood: "Boa Vista",
    address: "Rua Coronel Randolfo Simões, 443 - Boa Vista, Sete Lagoas - MG",
    phone: "(31) 3772-1727",
    whatsapp: "553137721727",
    image: "/images/lojas/loja-sete-lagoas.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Coronel+Randolfo+Sim%C3%B5es%2C+443+-+Boa+Vista%2C+Sete+Lagoas+-+MG",
  },
  {
    id: "juiz-de-fora",
    name: "JUIZ DE FORA - COSTA CARVALHO",
    city: "Juiz de Fora",
    neighborhood: "Costa Carvalho",
    address: "Av. Sete de Setembro, 730 - Costa Carvalho, Juiz de Fora - MG",
    phone: "(32) 3512-7985",
    whatsapp: "553235127985",
    image: "/images/lojas/loja-juiz-de-fora.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Sete+de+Setembro%2C+730+-+Costa+Carvalho%2C+Juiz+de+Fora+-+MG",
  },
  {
    id: "uberlandia",
    name: "UBERLÂNDIA - NOSSA SENHORA APARECIDA",
    city: "Uberlândia",
    neighborhood: "Nossa Senhora Aparecida",
    address: "Av. Brasil, 2057 - N. Sra. Aparecida, Uberlândia - MG",
    phone: "(34) 3484-0861",
    whatsapp: "553434840861",
    image: "/images/lojas/loja-uberlandia.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Brasil%2C+2057+-+Uberl%C3%A2ndia+-+MG",
  },
  {
    id: "montes-claros",
    name: "MONTES CLAROS - SANTO EXPEDITO",
    city: "Montes Claros",
    neighborhood: "Santo Expedito",
    address: "Av. Cula Mangabeira, 687 - Santo Expedito, Montes Claros - MG",
    phone: "(38) 3321-0446",
    whatsapp: "553833210446",
    image: "/images/lojas/loja-montes-claros.jpg",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Cula+Mangabeira%2C+687+-+Montes+Claros+-+MG",
  },
];

// Depoimentos Reais do Google Maps (4,6★ · Frio Bel Refrigeração)
interface CustomerReview {
  name: string;
  tag: string;
  rating: number;
  highlight: string;
  comment: string;
}

const REVIEWS: CustomerReview[] = [
  {
    name: "Estevao Felipe",
    tag: "Técnico Profissional · 4 avaliações no Google",
    rating: 5,
    highlight: "Peças originais, muita variedade e vendedores qualificados!",
    comment:
      "Peças originais muita variedade vendedores educados e qualificados. Em geral todas as lojas da Frio Bel que eu fui, fui muito bem atendido comprei peças que ajudaram muito nos meus trabalhos, é uma loja referência... até mesmo quando raramente precisa trocar peças eles trocam sem nenhum problema e são espetaculares. Super indico a qualquer técnico. O gerente da loja do São João Batista é muito gente boa, um abraço Ribeiro!",
  },
  {
    name: "Rosilene Freitas dos Santos Borges",
    tag: "5 avaliações · Cliente Verificada no Google",
    rating: 5,
    highlight: "Excelente atendimento e atendimento rápido",
    comment:
      "Excelente atendimento por parte de todos funcionários. Possui grande variedade de produtos e atendimento rápido.",
  },
  {
    name: "Médelen Médelen",
    tag: "Cliente há anos no Google",
    rating: 5,
    highlight: "Só compro na Frio Bel por anos. Melhor equipe!",
    comment:
      "Excelente, ótimo. Só compro na Frio Bel por anos. Sou muito bem atendido principalmente pelo vendedor Lázaro e gerente Monteiro. Incluindo gerente geral José Carlos o qual é meu amigo há quase 30 anos.",
  },
  {
    name: "Andre Rodrigues",
    tag: "4 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Profissionais capacitados, nota 1000!",
    comment:
      "Bom dia a todos atendimento excelente muitos profissionais capacitados super indico a Frio Bel Refrigeração vendedor Junio que me atende muito profissional nota 1000 que Deus continue abençoando vocês sempre!",
  },
  {
    name: "Max Oliveira",
    tag: "Cliente há 10 anos · Avaliação 5 Estrelas",
    rating: 5,
    highlight: "Melhor atendimento de BH há 10 anos",
    comment:
      "Muito boa. Sou cliente há dez anos. Sempre compro peças com os vendedores Junio, Felipe e João Vitor. Melhor atendimento de BH.",
  },
  {
    name: "Fagno Medeiros",
    tag: "12 avaliações no Google",
    rating: 5,
    highlight: "Trabalham com peças de qualidade e originais",
    comment:
      "Super indico. Trabalham com peças de qualidade e originais. Excelente recepção e vendedores com total responsabilidade e profissionalismo nota 10!",
  },
  {
    name: "Jose Carlos Silva",
    tag: "10 avaliações no Google",
    rating: 5,
    highlight: "Fácil acesso com estacionamento próprio!",
    comment:
      "Ótimo atendimento com vendedores carismáticos e atenciosos. Ótimos preços. Tinha tudo que procurei. Entrega rápida. Com fácil acesso com estacionamento.",
  },
  {
    name: "Davidson Rocha",
    tag: "Local Guide · 423 avaliações · 1.350 fotos",
    rating: 5,
    highlight: "Espaço com estacionamento e comodidade para compras",
    comment:
      "Uma equipe extraordinária e dedicada a prestar um serviço de qualidade oferecendo a melhor experiência possível ao cliente! Ótima localização e espaço com estacionamento e comodidade para efetuar suas compras! Uma variedade de produtos de grandes marcas com ótimos preços! Facilidade de atendimento pelos canais digitais! Vale a pena conferir!",
  },
];

// Perguntas Frequentes (FAQ)
const FAQS = [
  {
    question: "Onde fica a loja da Frio Bel em Belo Horizonte e possui estacionamento?",
    answer:
      "Nossa principal unidade em Belo Horizonte fica na Av. Dom Pedro I, 2233 - Bairro São João Batista / Pampulha (CEP 31515-300). Contamos com estacionamento privativo e gratuito no próprio local, com vagas amplas para você estacionar seu veículo ou furgão com tranquilidade e carregar suas peças e ferramentas com total conforto. Também temos nossa Matriz no Centro de BH (Rua dos Tupis, 963), em Contagem no Eldorado e mais 4 cidades em MG.",
  },
  {
    question: "Como saber se a peça é compatível com a minha geladeira ou máquina de lavar?",
    answer:
      "É muito simples! Basta tirar uma foto da etiqueta com o modelo (que fica na parte traseira ou interna do eletrodoméstico) e enviar para o nosso WhatsApp (31) 3024-9261. Nossa equipe técnica experiente consulta os catálogos oficiais dos fabricantes (Brastemp, Consul, Electrolux, etc.) e localiza o código exato da peça compatível.",
  },
  {
    question: "A Frio Bel vende apenas para técnicos credenciados ou também para o consumidor final?",
    answer:
      "Atendemos a ambos com a mesma dedicação! Somos a principal referência para técnicos refrigeristas autônomos e empresas de assistência técnica em Minas Gerais, mas também atendemos diretamente donas de casa, síndicos e consumidores que desejam adquirir peças de reposição originais e de alta qualidade pelo melhor preço.",
  },
  {
    question: "As peças vendidas são 100% originais e possuem garantia?",
    answer:
      "Sim! Trabalhamos com peças originais e itens homologados com procedência rigorosa de fabricantes como Embraco, Brastemp, Consul, Electrolux, Chemours Freon, Ebel, Coel e Ageon. Todas as nossas peças contam com garantia legal e política de troca facilitada e sem burocracia.",
  },
  {
    question: "Vocês realizam entregas ou somente retirada no balcão?",
    answer:
      "Oferecemos as duas opções! Você pode retirar imediatamente no balcão da unidade de sua preferência com estacionamento fácil, ou solicitar envio expresso para Belo Horizonte e região metropolitana via motoboy/frete local. Além disso, despachamos pedidos para qualquer município de Minas Gerais e de todo o Brasil.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos Pix com desconto imediato, dinheiro, cartões de crédito e débito com parcelamento, além de faturamento especial para clientes corporativos, empresas e técnicos cadastrados no Grupo Frio Bel.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. TOP BAR INSTITUCIONAL — BELO HORIZONTE, MINAS GERAIS */}
      <div className="bg-[#000D36] text-white text-[12px] py-2 px-4 border-b border-[#001A78]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Lado Esquerdo: Endereço & Estacionamento */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 text-slate-200">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#FDEB01] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FDEB01] shrink-0" />
              <span>Av. Dom Pedro I, 2233 - São João Batista / Pampulha, BH</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Car className="w-3.5 h-3.5 text-[#FDEB01] shrink-0" />
              <span className="text-[#FDEB01] font-semibold">Estacionamento Próprio no Local</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Seg a Sex: 8h às 18h | Sáb: 8h às 12h30</span>
            </div>
          </div>

          {/* Lado Direito: Avaliação Google 4,6★ & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-200">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#001A78] px-3 py-1 rounded-full text-slate-100 border border-[#00229E] hover:border-[#FDEB01] transition-colors text-[11px] whitespace-nowrap"
            >
              <div className="flex text-[#FDEB01]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-extrabold text-[#FDEB01]">{GOOGLE_RATING}</span>
              <span className="text-slate-300">({GOOGLE_REVIEW_COUNT} no Google)</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>{INSTAGRAM_HANDLE}</span>
            </a>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de consultar peças na Frio Bel Refrigeração.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] font-bold hover:text-white transition-colors text-[12px] whitespace-nowrap"
            >
              <WhatsAppIcon size={14} className="fill-current" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVBAR — LOGO OFICIAL & CTAS */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Principal Frio Bel */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#001A78] rounded-lg"
          >
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform group-hover:scale-[1.02]">
              <Image
                src={LOGO_SRC}
                alt="Grupo Frio Bel Refrigeração"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-[#00124D]">
            <a
              href="#catalogo"
              className="hover:text-[#001A78] transition-colors py-2"
            >
              Catálogo de Peças
            </a>
            <a
              href="#lojas"
              className="hover:text-[#001A78] transition-colors py-2 text-[#001A78] font-bold"
            >
              Nossas 7 Lojas em MG
            </a>
            <a
              href="#diferenciais"
              className="hover:text-[#001A78] transition-colors py-2"
            >
              Por Que a Frio Bel
            </a>
            <a
              href="#sobre"
              className="hover:text-[#001A78] transition-colors py-2"
            >
              Sobre a Empresa
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#001A78] transition-colors py-2"
            >
              Depoimentos (4,6★)
            </a>
            <a
              href="#faq"
              className="hover:text-[#001A78] transition-colors py-2"
            >
              Dúvidas
            </a>
          </nav>

          {/* Ações Rápidas no Header */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}
              className="hidden xl:inline-flex items-center gap-2 text-[13px] font-bold text-[#001A78] px-3 py-2 rounded-lg hover:bg-[#F0F4FF] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#001A78]" />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de consultar uma peça para meu equipamento na Frio Bel."
              )}
              target="_blank"
              variant="yellow"
              size="md"
              className="shadow-sm"
            >
              <WhatsAppIcon size={18} />
              <span>Pedir Peça no WhatsApp</span>
            </GlowingButton>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#00124D] hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#001A78]"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 flex flex-col gap-3 shadow-xl"
            >
              <a
                href="#catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-[15px] font-bold text-[#00124D] hover:bg-[#F0F4FF] hover:text-[#001A78]"
              >
                Catálogo de Peças
              </a>
              <a
                href="#lojas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-[15px] font-bold text-[#001A78] bg-[#F0F4FF]"
              >
                Nossas 7 Lojas Físicas em MG
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-[15px] font-bold text-[#00124D] hover:bg-[#F0F4FF] hover:text-[#001A78]"
              >
                Por Que a Frio Bel
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-[15px] font-bold text-[#00124D] hover:bg-[#F0F4FF] hover:text-[#001A78]"
              >
                Sobre a Empresa
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-[15px] font-bold text-[#00124D] hover:bg-[#F0F4FF] hover:text-[#001A78]"
              >
                Avaliações Google (4,6★)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-[15px] font-bold text-[#00124D] hover:bg-[#F0F4FF] hover:text-[#001A78]"
              >
                Perguntas Frequentes
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar uma peça na Frio Bel pelo WhatsApp."
                  )}
                  target="_blank"
                  variant="yellow"
                  size="md"
                  className="w-full text-center"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chamar no WhatsApp ({PHONE_DISPLAY})</span>
                </GlowingButton>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 text-[14px] font-bold text-[#001A78] bg-[#F0F4FF] rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-[#001A78]" />
                  <span>Ver Endereço na Av. Dom Pedro I</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION — SOFISTICAÇÃO, AUTORIDADE & CONVERSÃO */}
      <section className="relative bg-gradient-to-b from-[#000D36] via-[#001A78] to-[#00124D] text-white py-16 sm:py-24 overflow-hidden">
        {/* Elementos Gráficos de Fundo & Luz */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FDEB01_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FDEB01]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Texto (Lado Esquerdo) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              {/* Badge de Confiança Oficial */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-[#FDEB01]/40 px-3.5 py-1.5 rounded-full text-[12px] sm:text-[13px] font-bold text-white mx-auto lg:mx-0 w-fit">
                <span className="flex text-[#FDEB01]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span className="text-[#FDEB01] font-black">{GOOGLE_RATING}★ no Google</span>
                <span className="text-slate-300">|</span>
                <span className="text-white">Mais de {GOOGLE_REVIEW_COUNT} Avaliações</span>
              </div>

              {/* H1 Principal com Paleta Coesa */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight leading-[1.12]">
                O Maior Mix de Peças para{" "}
                <span className="text-[#FDEB01] underline decoration-[#FDEB01]/40 underline-offset-4">
                  Refrigeração, Lavadoras
                </span>{" "}
                e Ar-Condicionado em BH
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-[16px] sm:text-[18px] text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                Mais de <strong className="text-white font-bold">10.000 itens a pronta entrega</strong> para técnicos e consumidores. Compressores, gases refrigerantes, placas, ferramentas de precisão e peças originais Brastemp, Consul, Electrolux e Embraco.
              </p>

              {/* Destaque Estacionamento & Localização */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[13px] sm:text-[14px] text-slate-200">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg">
                  <Car className="w-4 h-4 text-[#FDEB01] shrink-0" />
                  <span>Estacionamento exclusivo na <strong>Av. Dom Pedro I, 2233</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Rede com <strong>7 Lojas Físicas</strong> em Minas Gerais</span>
                </div>
              </div>

              {/* CTAs de Alta Conversão */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar uma peça à pronta entrega na Frio Bel Refrigeração."
                  )}
                  target="_blank"
                  variant="yellow"
                  size="lg"
                  className="w-full sm:w-auto shadow-xl"
                >
                  <WhatsAppIcon size={20} />
                  <span>Consultar Peça no WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#lojas"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <MapPin className="w-4 h-4 text-[#001A78]" />
                  <span>Ver Nossas 7 Lojas em MG</span>
                </GlowingButton>
              </div>

              {/* Trust Markers em Linha */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDEB01] shrink-0" />
                  <span className="text-[12px] font-semibold text-slate-200">Peças 100% Originais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDEB01] shrink-0" />
                  <span className="text-[12px] font-semibold text-slate-200">Atendimento Técnico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDEB01] shrink-0" />
                  <span className="text-[12px] font-semibold text-slate-200">Retirada Imediata</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDEB01] shrink-0" />
                  <span className="text-[12px] font-semibold text-slate-200">Facilidade de Troca</span>
                </div>
              </div>
            </div>

            {/* Coluna Visual (Lado Direito: Card em Destaque & Vitrine) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Card Principal de Destaque */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-2xl text-[#00124D] border-2 border-[#FDEB01]/60">
                  {/* Badge de Destaque */}
                  <div className="absolute -top-3.5 right-6 bg-[#001A78] text-[#FDEB01] text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md border border-[#FDEB01]">
                    Pronta Entrega em BH
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F4FF] border border-[#C7D7FE] flex items-center justify-center text-[#001A78]">
                      <Snowflake className="w-6 h-6 text-[#001A78]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#00124D] leading-tight">
                        Frio Bel Refrigeração
                      </h3>
                      <p className="text-[12px] text-slate-500 font-medium">
                        Unidade Dom Pedro I · Quase 30 anos de tradição
                      </p>
                    </div>
                  </div>

                  <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
                    Trabalhamos com todo o mix de compressores, motores, fluidos Chemours Freon, placas originais, mecanismos de lavadora e ferramentas Ebel para profissionais.
                  </p>

                  {/* Grid de Mini Destaques */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-[#F8FAFC] border border-slate-200 p-3 rounded-xl flex items-start gap-2.5">
                      <Snowflake className="w-4 h-4 text-[#001A78] mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-[12px] font-bold text-[#00124D]">Geladeiras & Freezers</span>
                        <span className="text-[11px] text-slate-500">Motores, gases e placas</span>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-200 p-3 rounded-xl flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#001A78] mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-[12px] font-bold text-[#00124D]">Lavadoras & Seca</span>
                        <span className="text-[11px] text-slate-500">Agitadores, placas, correias</span>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-200 p-3 rounded-xl flex items-start gap-2.5">
                      <Wrench className="w-4 h-4 text-[#001A78] mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-[12px] font-bold text-[#00124D]">Ferramentas Ebel</span>
                        <span className="text-[11px] text-slate-500">Manifolds, alicates, vácuo</span>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-200 p-3 rounded-xl flex items-start gap-2.5">
                      <Car className="w-4 h-4 text-[#001A78] mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-[12px] font-bold text-[#00124D]">Estacionamento</span>
                        <span className="text-[11px] text-slate-500">Fácil parada e carga</span>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Cotação Rápida */}
                  <a
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar uma peça para meu equipamento na Frio Bel."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#001A78] hover:bg-[#00124D] text-[#FDEB01] font-bold py-3 px-4 rounded-xl shadow-md transition-all text-[14px]"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Chamar Especialista no WhatsApp</span>
                  </a>
                </div>

                {/* Floating Tag Prova Social */}
                <div className="absolute -bottom-8 sm:-bottom-10 -left-6 sm:-left-10 lg:-left-12 bg-white border border-slate-200 shadow-2xl rounded-xl py-2.5 px-4 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-full bg-[#FEFCE8] border border-[#FDE047] flex items-center justify-center text-[#001A78] font-black text-sm">
                    4,6★
                  </div>
                  <div>
                    <div className="flex text-[#FDEB01]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#00124D]">
                      Mais de 250 avaliações no Google
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE NÚMEROS E AUTORIDADE (STATS BAR) */}
      <section className="bg-white border-y border-slate-200 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#001A78] tracking-tight">
                4,6 ★
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold text-slate-600 mt-1">
                +250 Avaliações no Google
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#001A78] tracking-tight">
                +10.000
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold text-slate-600 mt-1">
                Itens a Pronta Entrega
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#001A78] tracking-tight">
                7 Lojas
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold text-slate-600 mt-1">
                Unidades Físicas em MG
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-[#001A78] tracking-tight">
                +28 Anos
              </span>
              <span className="text-[13px] sm:text-[14px] font-semibold text-slate-600 mt-1">
                Tradição & Confiança
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE SERVIÇOS & PILARES DE ATUAÇÃO (CATÁLOGO OFICIAL DE LINHAS) */}
      <section id="catalogo" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#F0F4FF] border border-[#C7D7FE] px-3.5 py-1 rounded-full text-[12px] font-bold text-[#001A78] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Linhas & Categorias Oficiais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00124D] tracking-tight">
              Soluções Completas em Peças para Refrigeração e Lavadoras
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600">
              Trabalhamos com o mix mais completo do mercado. Clique em qualquer categoria para ver os detalhes técnicos e consultar a peça pelo WhatsApp.
            </p>
          </div>

          {/* Grid de 6 Categorias Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:border-[#001A78]"
                >
                  {/* Imagem do Produto/Categoria */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#001A78] text-[#FDEB01] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {service.badge}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] flex items-center justify-center text-[#001A78] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-[#00124D] leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[13px] text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Benefícios Rápidos */}
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[12px] text-slate-700"
                        >
                          <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Botões de Ação */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="flex-1 py-2 px-3 text-[13px] font-bold text-[#001A78] bg-[#F0F4FF] hover:bg-[#E0E7FF] rounded-lg transition-colors cursor-pointer text-center"
                      >
                        Ver Detalhes
                      </button>

                      <a
                        href={getWhatsAppUrl(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 text-[13px] font-bold text-[#001A78] bg-[#FDEB01] hover:bg-[#E5D300] rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                      >
                        <WhatsAppIcon size={16} />
                        <span>Consultar</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LOCALIZAÇÕES OFICIAIS — NOSSAS 7 LOJAS FÍSICAS EM MINAS GERAIS (EM DESTAQUE) */}
      <section id="lojas" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da Seção com Identidade Visual Oficial Frio Bel */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F0F4FF] border border-[#C7D7FE] px-4 py-1.5 rounded-full text-[13px] font-bold text-[#001A78] mb-3.5">
              <Store className="w-4 h-4 text-[#001A78]" />
              <span className="uppercase tracking-wider">Presença Física Oficial em Minas Gerais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00124D] tracking-tight">
              Nossas 7 Lojas Físicas
            </h2>
            <p className="mt-3 text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
              Contamos com 7 lojas físicas estrategicamente localizadas em Minas Gerais para melhor atender nossos clientes, com estoque amplo, retirada no balcão e suporte especializado.
            </p>
          </div>

          {/* Card de Destaque Superior: Matriz Centro & Horários de Funcionamento */}
          <div className="bg-[#F8FAFC] border-2 border-[#001A78]/20 rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Foto Fachada da Matriz (Rua dos Tupis) */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <Image
                    src="/images/lojas/loja-centro-bh.jpg"
                    alt="Fachada Matriz Frio Bel Centro Belo Horizonte"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                  <div className="absolute top-3 left-3 bg-[#001A78] text-[#FDEB01] text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                    ★ Sede Matriz · Belo Horizonte
                  </div>
                </div>
              </div>

              {/* Informações Institucionais da Matriz & Rede */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-black uppercase tracking-wider text-[#001A78] bg-[#F0F4FF] px-3 py-1 rounded-md border border-[#C7D7FE]">
                    Matriz Central
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#00124D]">
                  MATRIZ — BELO HORIZONTE
                </h3>

                <div className="text-[14px] text-slate-600 space-y-1.5">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#001A78] shrink-0" />
                    <span><strong>Endereço:</strong> Rua dos Tupis, 963 - Centro, Belo Horizonte - MG</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#001A78] shrink-0" />
                    <span><strong>Telefone:</strong> {PHONE_MATRIZ}</span>
                  </p>
                </div>

                <p className="text-[14px] text-slate-600 leading-relaxed">
                  Todas as nossas 7 unidades oferecem <strong>atendimento presencial, retirada de produtos e suporte técnico qualificado</strong>. Além disso, realizamos entregas para todo o Brasil, garantindo que nossos produtos cheguem com segurança e rapidez a qualquer região.
                </p>

                {/* Box de Horário de Funcionamento */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#001A78] shrink-0" />
                    <div>
                      <span className="block text-[13px] font-bold text-[#00124D]">
                        Horário de Funcionamento:
                      </span>
                      <span className="text-[12px] text-slate-600">
                        Segunda a sexta: <strong>8h às 18h</strong> | Sábado: <strong>8h às 12h30</strong>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Tupis%2C+963+-+Centro%2C+Belo+Horizonte+-+MG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2 px-3 text-[12px] font-bold text-[#001A78] bg-[#F0F4FF] hover:bg-[#E0E7FF] rounded-lg transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Como Chegar</span>
                    </a>
                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de falar com a Matriz da Frio Bel no Centro de BH.", "553132392880")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2 px-3 text-[12px] font-bold text-[#001A78] bg-[#FDEB01] hover:bg-[#E5D300] rounded-lg transition-colors shadow-2xs"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid com as Demais 6 Lojas Oficiais (com as fotos reais do site oficial) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STORES.filter((s) => !s.isMatriz).map((store) => (
              <div
                key={store.id}
                className={`rounded-2xl border overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 ${
                  store.isHeadquarter
                    ? "bg-white border-2 border-[#001A78] ring-4 ring-[#001A78]/10"
                    : "bg-white border-slate-200 hover:border-[#001A78]"
                }`}
              >
                {/* Foto Real da Fachada */}
                <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {store.isHeadquarter && (
                    <div className="absolute top-3 left-3 bg-[#FDEB01] text-[#001A78] text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                      ★ Unidade Destaque BH
                    </div>
                  )}
                </div>

                {/* Dados da Loja */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#001A78] mb-1">
                    {store.city} — {store.neighborhood}
                  </span>

                  <h3 className="text-lg font-bold text-[#00124D] mb-3 leading-snug">
                    {store.name}
                  </h3>

                  <div className="space-y-2 mb-6 flex-1 text-[13px] text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#001A78] shrink-0 mt-0.5" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#001A78] shrink-0" />
                      <span className="font-semibold text-[#00124D]">{store.phone}</span>
                    </div>
                    {store.isHeadquarter && (
                      <div className="flex items-center gap-1.5 text-[#16A34A] font-bold text-[12px] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        <Car className="w-4 h-4 shrink-0 text-[#16A34A]" />
                        <span>Estacionamento exclusivo gratuito no local</span>
                      </div>
                    )}
                  </div>

                  {/* Botões de Rota & WhatsApp */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 text-[13px] font-bold text-[#001A78] bg-[#F0F4FF] hover:bg-[#E0E7FF] rounded-lg transition-colors text-center flex items-center justify-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Rotas / Mapa</span>
                    </a>

                    <a
                      href={getWhatsAppUrl(
                        `Olá! Gostaria de consultar peças na loja da Frio Bel: ${store.name}`,
                        store.whatsapp
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 text-[13px] font-bold text-[#001A78] bg-[#FDEB01] hover:bg-[#E5D300] rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <WhatsAppIcon size={16} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIFERENCIAIS COMPETITIVOS — POR QUE A FRIO BEL É A Nº 1 */}
      <section id="diferenciais" className="py-16 sm:py-20 bg-[#000D36] text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FDEB01]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Por que a Frio Bel é a Maior Referência em Refrigeração?
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-300">
              Mais de duas décadas apoiando os técnicos refrigeristas e garantindo soluções rápidas para lares e empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-black mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Estacionamento Próprio e Exclusivo
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Pare com total facilidade em frente à loja da Av. Dom Pedro I, 2233. Espaço amplo para você carregar compressores, ferramentas e tubos sem estresse de vaga.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-black mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Peças 100% Originais com Garantia
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Trabalhamos diretamente com as maiores marcas (Brastemp, Consul, Electrolux, Embraco, Chemours Freon), assegurando procedência e durabilidade máxima.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-black mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Vendedores Especialistas Qualificados
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Equipe altamente treinada que entende de refrigeração e lavadoras. Ajudamos você a identificar o código correto da peça mesmo que você não seja técnico.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-black mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                7 Lojas Físicas em Minas Gerais
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Belo Horizonte (Dom Pedro I e Centro), Contagem (Eldorado), Sete Lagoas, Juiz de Fora, Uberlândia e Montes Claros para melhor atender todo o estado.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-black mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Pronta Entrega Imediata & Despacho
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Estoque real na loja para você retirar na hora no balcão ou receber via entrega expressa em Belo Horizonte e região no mesmo dia.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-black mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Troca Fácil Sem Burocracia
              </h3>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Reconhecida nas avaliações do Google por nosso compromisso com o cliente: suporte pós-venda ágil e resolução rápida para que seu trabalho não fique parado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOBRE A FRIO BEL & HISTÓRIA */}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto Real da Loja */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/lojas/loja-sao-joao-batista.jpg"
                    alt="Fachada Loja Frio Bel São João Batista Dom Pedro I"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#000D36] via-[#000D36]/80 to-transparent p-6 text-white">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FDEB01]">
                    Unidade Destaque BH
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Av. Dom Pedro I, 2233 · São João Batista
                  </h4>
                  <p className="text-[12px] text-slate-300">
                    Estoque amplo, balcão especializado e estacionamento próprio
                  </p>
                </div>
              </div>
            </div>

            {/* Texto Institucional */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 bg-[#F0F4FF] border border-[#C7D7FE] px-3.5 py-1 rounded-full text-[12px] font-bold text-[#001A78] w-fit">
                <Building2 className="w-3.5 h-3.5" />
                <span>Tradição, Excelência & Confiança</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#00124D] tracking-tight">
                Quase 30 Anos Movimentando a Refrigeração em Minas Gerais
              </h2>

              <p className="text-[15px] text-slate-600 leading-relaxed">
                Fundada como <strong>Frio Bel Refrigeração Ltda (CNPJ: {CNPJ_DISPLAY})</strong>, consolidamo-nos como o principal ponto de apoio para o refrigerista mineiro e para milhares de famílias que buscam consertar seus aparelhos com peças confiáveis e preço justo.
              </p>

              <p className="text-[15px] text-slate-600 leading-relaxed">
                Nosso propósito é simples: <strong>oferecer o maior mix, a pronta entrega, com o melhor atendimento técnico de Minas Gerais</strong>. Não medimos esforços para que cada cliente encontre a peça certa com agilidade, honestidade e suporte humanizado de verdade.
              </p>

              {/* Destaques com Ícones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#001A78] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[14px] text-[#00124D]">Relação de Confiança</h5>
                    <p className="text-[12px] text-slate-500">Parceria de décadas com técnicos, assistências e clientes fiéis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#001A78] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[14px] text-[#00124D]">Estoque Sempre Cheio</h5>
                    <p className="text-[12px] text-slate-500">Peças a pronta entrega sem semanas de espera de frete interestadual.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe da Frio Bel.")}
                  target="_blank"
                  variant="navy"
                  size="md"
                >
                  <WhatsAppIcon size={18} />
                  <span>Falar com Nossa Equipe</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL — AVALIAÇÕES GOOGLE (4,6★ COM 250+ REVIEWS) */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FEFCE8] border border-[#FDE047] px-3.5 py-1 rounded-full text-[12px] font-bold text-[#001A78] mb-3">
              <Star className="w-3.5 h-3.5 fill-current text-[#FDEB01]" />
              <span>Avaliação 4,6★ no Google Maps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00124D] tracking-tight">
              O Que Nossos Clientes e Técnicos Dizem
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600">
              Mais de 250 avaliações públicas e reais reconhecendo nosso atendimento, variedade de peças e respeito aos profissionais.
            </p>
          </div>

          {/* Grid de Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Estrelas */}
                  <div className="flex text-[#FDEB01] mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <h4 className="font-bold text-[14px] text-[#00124D] mb-2 leading-snug">
                    "{rev.highlight}"
                  </h4>

                  <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                    {rev.comment}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <span className="block font-bold text-[13px] text-[#00124D]">
                    {rev.name}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {rev.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Link para Avaliações no Google */}
          <div className="mt-12 text-center">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#001A78] hover:text-[#00124D] hover:underline"
            >
              <span>Ver todas as mais de 250 avaliações públicas no Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FAQ — PERGUNTAS FREQUENTES (ACORDEÃO INTERATIVO) */}
      <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F0F4FF] border border-[#C7D7FE] px-3.5 py-1 rounded-full text-[12px] font-bold text-[#001A78] mb-3">
              <span>Tire Suas Dúvidas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00124D] tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Respostas rápidas sobre retirada, compatibilidade de peças e entrega.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#001A78]"
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#00124D]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#001A78] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 text-[14px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BANNER FINAL CTA DE ALTO IMPACTO */}
      <section className="bg-gradient-to-r from-[#000D36] via-[#001A78] to-[#00124D] text-white py-16 sm:py-20 relative overflow-hidden border-t border-[#001A78]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-5 items-center">
            <div className="inline-flex items-center gap-2 bg-[#FDEB01] text-[#001A78] text-[12px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Atendimento Imediato no Balcão ou WhatsApp
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Precisa de Uma Peça Agora para Seu Equipamento?
            </h2>

            <p className="text-[16px] sm:text-[18px] text-slate-200 leading-relaxed font-normal">
              Fale agora com nosso time técnico pelo WhatsApp ou visite nossa unidade principal com estacionamento gratuito na <strong>Av. Dom Pedro I, 2233</strong>!
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Gostaria de consultar uma peça à pronta entrega na Frio Bel."
                )}
                target="_blank"
                variant="yellow"
                size="lg"
                className="w-full sm:w-auto shadow-2xl"
              >
                <WhatsAppIcon size={20} />
                <span>Consultar Peça no WhatsApp ({PHONE_DISPLAY})</span>
              </GlowingButton>

              <GlowingButton
                href={GOOGLE_MAPS_URL}
                target="_blank"
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MapPin className="w-4 h-4 text-[#001A78]" />
                <span>Como Chegar na Loja</span>
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="bg-[#000D36] text-white pt-16 pb-10 border-t border-[#001A78]/60 text-[13px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Coluna 1: Logo e Resumo da Empresa (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative h-12 w-48 bg-white/95 p-1.5 rounded-lg">
                <Image
                  src={LOGO_SRC}
                  alt="Grupo Frio Bel Refrigeração"
                  fill
                  className="object-contain"
                  sizes="192px"
                />
              </div>

              <p className="text-slate-300 leading-relaxed max-w-sm mt-2">
                O maior mix de peças para geladeiras, lavadoras, freezers e ar-condicionado em Minas Gerais. Atendimento de excelência para técnicos refrigeristas e consumidores finais.
              </p>

              <div className="text-slate-400 text-[12px] space-y-1">
                <p><strong>Razão Social:</strong> Frio Bel Refrigeração Ltda</p>
                <p><strong>CNPJ:</strong> {CNPJ_DISPLAY}</p>
                <p><strong>Sede:</strong> Av. Dom Pedro I, 2233 - São João Batista, Belo Horizonte - MG</p>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#FDEB01] hover:text-[#001A78] text-white px-3.5 py-1.5 rounded-lg transition-colors font-semibold text-[12px]"
                >
                  <span>Instagram {INSTAGRAM_HANDLE}</span>
                </a>
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#001A78] text-white px-3.5 py-1.5 rounded-lg transition-colors font-semibold text-[12px]"
                >
                  <span>friobel.com.br</span>
                </a>
              </div>
            </div>

            {/* Coluna 2: Unidades em Destaque (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#FDEB01]">
                Nossas Lojas em Minas Gerais
              </h4>
              <ul className="space-y-2 text-slate-300 text-[12px]">
                <li>
                  <strong className="text-white">BH São João Batista:</strong> Av. Dom Pedro I, 2233 · (31) 3024-9261 (com estacionamento)
                </li>
                <li>
                  <strong className="text-white">BH Centro (Matriz):</strong> Rua dos Tupis, 963 · (31) 3239-2880
                </li>
                <li>
                  <strong className="text-white">Contagem:</strong> Av. José Faria da Rocha, 5566 · (31) 3911-2214
                </li>
                <li>
                  <strong className="text-white">Sete Lagoas:</strong> Rua Cel. Randolfo Simões, 443 · (31) 3772-1727
                </li>
                <li>
                  <strong className="text-white">Juiz de Fora:</strong> Av. Sete de Setembro, 730 · (32) 3512-7985
                </li>
                <li>
                  <strong className="text-white">Uberlândia:</strong> Av. Brasil, 2057 · (34) 3484-0861
                </li>
                <li>
                  <strong className="text-white">Montes Claros:</strong> Av. Cula Mangabeira, 687 · (38) 3321-0446
                </li>
              </ul>
            </div>

            {/* Coluna 3: Horários & Contato Direto (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#FDEB01]">
                Atendimento & Horários
              </h4>
              <div className="text-slate-300 text-[12px] space-y-2">
                <p>
                  <strong className="text-white">Segunda a Sexta:</strong>
                  <br />08:00 às 18:00
                </p>
                <p>
                  <strong className="text-white">Sábado:</strong>
                  <br />08:00 às 12:30
                </p>
                <p>
                  <strong className="text-white">WhatsApp & Televendas:</strong>
                  <br />
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-bold hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-slate-400">
            <p>
              © {new Date().getFullYear()} Grupo Frio Bel | Refrigeração. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              <span>Desenvolvido com excelência para máxima conversão</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 13. BOTÃO FLUTUANTE WHATSAPP (CANTO INFERIOR DIREITO) */}
      <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
        <div className="hidden md:flex bg-white text-[#00124D] px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 text-[13px] font-bold items-center gap-2 opacity-95 group-hover:opacity-100 transition-opacity">
          <span>Precisa de uma peça? Fale conosco!</span>
        </div>
        <a
          href={getWhatsAppUrl(
            "Olá! Gostaria de consultar uma peça para meu equipamento com a Frio Bel Refrigeração."
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar equipe da Frio Bel no WhatsApp"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#001A78]"
        >
          <WhatsAppIcon size={30} className="fill-current" />
        </a>
      </aside>

      {/* 14. MODAL INTERATIVO DE DETALHES DO SERVIÇO / PEÇA */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]"
            >
              {/* Header do Modal */}
              <div className="bg-[#001A78] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FDEB01] text-[#001A78] flex items-center justify-center font-bold">
                    <selectedService.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#FDEB01] uppercase tracking-wider">
                      {selectedService.badge}
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-[14px] leading-relaxed">
                <p>{selectedService.fullDesc}</p>

                <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-[13px] text-[#00124D] uppercase tracking-wider">
                    Principais Destaques & Itens:
                  </h4>
                  <ul className="space-y-1.5 text-[13px]">
                    {selectedService.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-[12px] text-slate-500 bg-[#F0F4FF] p-3 rounded-lg border border-[#C7D7FE]">
                  <Car className="w-4 h-4 text-[#001A78] shrink-0" />
                  <span>
                    Disponível para retirada imediata com estacionamento gratuito na <strong>Av. Dom Pedro I, 2233</strong> ou entrega rápida em BH.
                  </span>
                </div>
              </div>

              {/* Footer do Modal */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-2.5 px-4 text-[13px] font-bold text-slate-600 hover:text-slate-800 bg-white border border-slate-300 rounded-xl"
                >
                  Fechar
                </button>
                <GlowingButton
                  href={getWhatsAppUrl(selectedService.whatsappMessage)}
                  target="_blank"
                  variant="yellow"
                  size="md"
                  className="flex-1 text-center"
                >
                  <WhatsAppIcon size={18} />
                  <span>Pedir no WhatsApp</span>
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
