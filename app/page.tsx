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
  Waves,
  Droplets,
  Wrench,
  Sun,
  Navigation,
  Check,
  ExternalLink,
  PackageCheck,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Heart,
  Truck,
  Compass,
  Tent,
  type LucideIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Piscinas Na Hora BH
const COMPANY_NAME = "Piscinas Na Hora BH";
const COMPANY_FULL_NAME =
  "Piscinas Na Hora BH — Artigos para Esportes ao Ar Livre & Piscinas em Belo Horizonte";
const COMPANY_TAGLINE =
  "Especialistas em Diversão! Piscinas, Infláveis, Boias, Camping & Lazer";
const BRAND_SUBTITLE =
  "Somos especialistas em diversão para toda a família! Piscinas de armação estruturadas, piscinas infláveis, boias gigantes, bombas filtrantes, químicos e artigos para camping e pesca. Pronta entrega expressa em BH e Grande BH ou retirada imediata no Caiçaras com nota 5,0★ no Google!";

const WHATSAPP_NUMBER = "5531920006722";
const PHONE_DISPLAY = "(31) 92000-6722";
const EMAIL_CONTACT = "contato@piscinasnahorabh.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/piscinas_na_hora/";
const INSTAGRAM_HANDLE = "@piscinas_na_hora";
const SHOPEE_URL = "http://shopee.com.br/piscinasnahorabh";

const ADDRESS_DISPLAY =
  "Portão preto de Garagem - R. Bangu, 90 - Caiçaras, Belo Horizonte - MG, 30750-410";
const SHORT_ADDRESS = "R. Bangu, 90 - Caiçaras, Belo Horizonte - MG";
const CITIES_SERVED =
  "Belo Horizonte (Caiçaras, Pampulha, Centro, Barreiro, Venda Nova e toda BH), Contagem, Betim, Nova Lima, Santa Luzia, Ribeirão das Neves, Sabará e Grande BH";

const GOOGLE_REVIEW_COUNT = "6";
const GOOGLE_RATING = "5.0";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Piscinas+Na+Hora+BH%0APort%C3%A3o+Preto+%C2%B7+Belo+Horizonte+%C2%B7+MG";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Piscinas+Na+Hora+BH+R.+Bangu%2C+90+-+Cai%C3%A7aras%2C+Belo+Horizonte+-+MG%2C+30750-410";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Rua+Bangu+90+Caicaras+Belo+Horizonte+MG";

// Assets Oficiais
const LOGO_SRC = "/logo.png";
const LOGO_WHITE_BG = "/logo-white-bg.png";
const LOGO_TRIMMED = "/logo-trimmed.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de consultar os modelos de piscinas e produtos à pronta entrega da Piscinas Na Hora BH!";
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

// 8 Categorias Principais de Produtos e Soluções
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
    id: "piscinas-armacao-estruturadas",
    title: "Piscinas de Armação & Estruturadas (1.000L a 10.000L+)",
    shortDesc:
      "A solução perfeita para o calor de BH! Estrutura de aço galvanizado antiferrugem, lona reforçada de 3 camadas e montagem rápida sem obras. Pronta entrega imediata.",
    badge: "Mais Vendidas em BH",
    icon: Waves,
    image: "/piscina-armacao-v5.jpg",
    fullDesc:
      "As piscinas de armação são a escolha favorita de famílias que buscam resistência e espaço sem quebrar o piso do quintal. Trabalhamos com as marcas mais confiáveis do mercado (Mor, Bestway, Intex), com capacidades de 1.000L até mais de 10.000 litros. Seja para o quintal de casa, sítio ou terraço, você compra no WhatsApp e já retira na hora no Caiçaras!",
    benefits: [
      "Tubos de aço carbono com pintura epóxi antiferrugem",
      "Lona de PVC tripla camada com trama de poliéster de alta resistência",
      "Válvula de deságue para engate de mangueira facilitando a limpeza",
      "Pronta entrega em BH: sem esperar semanas por fretes de fora",
    ],
    ctaText: "Consultar Modelos de Armação",
    whatsappMessage:
      "Olá! Gostaria de consultar os tamanhos e preços de Piscinas de Armação disponíveis a pronta entrega na Piscinas Na Hora BH.",
  },
  {
    id: "piscinas-inflaveis-infantis",
    title: "Piscinas Infláveis & Infantis Práticas",
    shortDesc:
      "Diversão instantânea para os pequenos e a família inteira. Inflam em minutos, são compactas para guardar e garantem frescor com máxima segurança.",
    badge: "Praticidade Total",
    icon: Sparkles,
    image: "/piscina-inflavel-v5.jpg",
    fullDesc:
      "Perfeitas para quem quer se refrescar imediatamente no calor de Belo Horizonte! Nossas piscinas infláveis contam com anel superior autoestável ou câmaras de ar múltiplas que garantem segurança para as crianças. Fáceis de montar e esvaziar, cabem em varandas, garagens e pequenos jardins.",
    benefits: [
      "Montagem super rápida: basta inflar a borda e encher com água",
      "Vinil resistente pré-testado contra perfurações",
      "Bordas macias e confortáveis para apoio das crianças",
      "Ideal para dias ensolarados e fácil transporte para viagens",
    ],
    ctaText: "Ver Piscinas Infláveis",
    whatsappMessage:
      "Olá! Gostaria de ver os modelos de Piscinas Infláveis e infantis disponíveis a pronta entrega.",
  },
  {
    id: "boias-colchoes-brinquedos",
    title: "Boias Gigantes, Colchões & Brinquedos Aquáticos",
    shortDesc:
      "Transforme sua piscina em um parque de diversões! Boias temáticas de unicórnio, flamingo, fatias de pizza, poltronas flutuantes, coletes e bolas.",
    badge: "Alegria da Família",
    icon: Heart,
    image: "/boias-brinquedos-v5.jpg",
    fullDesc:
      "Somos especialistas em diversão! Oferecemos uma linha completa e colorida de boias gigantes, poltronas infláveis para relaxar com porta-copos, colchões flutuantes para banho de sol, boias de braço para crianças e brinquedos esportivos aquáticos. Produtos testados, seguros e com cores vibrantes que rendem fotos incríveis.",
    benefits: [
      "Boias divertidas formato flamingo, cisne, unicórnio e donuts",
      "Colchões infláveis ergonômicos com encosto para descanso",
      "Coletes salva-vidas infantis homologados e boias de braço",
      "Válvulas duplas de enchimento rápido e esvaziamento fácil",
    ],
    ctaText: "Ver Catálogo de Boias",
    whatsappMessage:
      "Olá! Gostaria de conhecer o catálogo de boias gigantes e brinquedos aquáticos da Piscinas Na Hora BH.",
  },
  {
    id: "filtros-bombas-manutencao",
    title: "Bombas Filtrantes & Cartuchos de Reposição",
    shortDesc:
      "Água limpa e economia real na conta! Filtros compatíveis com piscinas de armação e infláveis, mantendo a água circulando e livre de impurezas.",
    badge: "Água Limpa & Economia",
    icon: Wrench,
    image: "/filtro-bomba-v5.jpg",
    fullDesc:
      "Não troque a água da piscina a cada uso! Com uma bomba filtrante adequada, você mantém a água cristalina por semanas, economizando dinheiro e preservando o meio ambiente. Temos bombas de 1.250L/h a 5.678L/h em 110V e 220V, além de refis de cartucho para reposição imediata.",
    benefits: [
      "Compatíveis com as principais marcas de piscina do mercado",
      "Cartuchos filtrantes laváveis e de fácil substituição",
      "Vazão calibrada para piscinas de 1.000L até mais de 15.000L",
      "Acompanham mangueiras, abraçadeiras e adaptadores de entrada/saída",
    ],
    ctaText: "Dimensionar Filtro para Minha Piscina",
    whatsappMessage:
      "Olá! Preciso de uma bomba filtrante ou refil de filtro para minha piscina. Podem me orientar?",
  },
  {
    id: "quimicos-tratamento-agua",
    title: "Tratamento de Água & Químicos para Piscina",
    shortDesc:
      "Cloro granulado, pastilhas de cloro 3 em 1 com flutuador, clarificantes, algicidas choque e kits de teste. Água 100% pura sem irritar os olhos.",
    badge: "Água Pura & Cristalina",
    icon: Droplets,
    image: "/tratamento-agua-v5.jpg",
    fullDesc:
      "Manter a água da sua piscina saudável é muito fácil com os produtos certos! Na Piscinas Na Hora BH você encontra pastilhas de cloro multiação que desinfetam, clarificam e previnem algas continuamente com o flutuador dosador. Também fornecemos orientações simples de dosagem para a água nunca esverdear.",
    benefits: [
      "Pastilhas de cloro com dissolução lenta e flutuadores reguláveis",
      "Cloro granulado de alta pureza e ação rápida",
      "Clarificante e decantador para aglomerar micropartículas de poeira",
      "Orientação gratuita no WhatsApp sobre como cuidar da água",
    ],
    ctaText: "Pedir Produtos de Tratamento",
    whatsappMessage:
      "Olá! Preciso de cloro e produtos químicos para tratar a água da minha piscina. Quais itens vocês têm a pronta entrega?",
  },
  {
    id: "capas-forros-protecao",
    title: "Capas Protetoras, Térmicas & Forros para Chão",
    shortDesc:
      "Proteja sua piscina contra folhas, insetos e furos no fundo. Capas com furos de drenagem e forros reforçados no tamanho exato da sua piscina.",
    badge: "Proteção & Durabilidade",
    icon: ShieldCheck,
    image: "/capas-acessorios-v5.jpg",
    fullDesc:
      "Aumente a vida útil da sua piscina e reduza em 80% o tempo de limpeza! Nossas capas protetoras evitam que poeira, insetos e folhas caiam na água quando a piscina não estiver em uso. Os forros de chão protegem a lona contra pequenas pedras e irregularidades do piso, evitando rasgos indesejados.",
    benefits: [
      "Capas com cordas de amarração firme para evitar vento",
      "Furos centrais de respiro para drenar água de chuva",
      "Forros em polietileno resistente para isolar o fundo da piscina",
      "Modelos redondos e retangulares em todas as metragens",
    ],
    ctaText: "Ver Capas e Forros",
    whatsappMessage:
      "Olá! Gostaria de consultar capas protetoras e forros de chão para minha piscina na Piscinas Na Hora BH.",
  },
  {
    id: "camping-pesca-lazer",
    title: "Artigos de Camping, Pesca, Casa & Jardim",
    shortDesc:
      "Artigos completos para esportes ao ar livre: barracas de acampamento, colchões de ar com inflador, cadeiras de praia, caixas térmicas e acessórios de pesca.",
    badge: "Esportes ao Ar Livre",
    icon: Tent,
    image: "/camping-lazer-v5.jpg",
    fullDesc:
      "Como loja de artigos para esportes ao ar livre em Belo Horizonte, somos o ponto de partida para suas aventuras no fim de semana! Temos barracas de camping fáceis de montar, colchões infláveis resistentes para acampamento ou visitas em casa, bombas de ar manuais e elétricas, cadeiras dobráveis e caixas térmicas para manter sua bebida gelada.",
    benefits: [
      "Barracas de camping impermeáveis para 2, 4 e 6 pessoas",
      "Colchões infláveis casal e solteiro aveludados com bomba de ar",
      "Cadeiras de praia e jardim leves em alumínio e aço",
      "Artigos de pesca e lazer ao ar livre para curtir a natureza",
    ],
    ctaText: "Consultar Artigos de Camping",
    whatsappMessage:
      "Olá! Gostaria de consultar os produtos de camping, pesca e lazer ao ar livre da Piscinas Na Hora BH.",
  },
  {
    id: "retirada-imediata-entrega-bh",
    title: "Retirada Imediata no Caiçaras ou Entrega Expressa BH",
    shortDesc:
      "Sem espera de frete interestadual! Retire no Portão Preto na R. Bangu, 90 no Caiçaras ou receba por frete rápido no mesmo dia em Belo Horizonte e Grande BH.",
    badge: "Na Hora de Verdade",
    icon: Truck,
    image: "/retirada-caicaras-v5.jpg",
    fullDesc:
      "O diferencial que dá nome à nossa marca: PISCINAS NA HORA! Enquanto lojas convencionais demoram dias ou semanas para despachar o produto por transportadoras caras, aqui você tem a certeza de retirar imediatamente no nosso endereço no Caiçaras ou agendar a entrega expressa no mesmo dia via motoboy/frete local.",
    benefits: [
      "Retirada super fácil: Portão Preto de garagem com espaço para carregar no carro",
      "Entrega rápida no mesmo dia para toda Belo Horizonte e região",
      "Pagamento flexível no Pix, Cartão ou no ato da retirada/entrega",
      "Vendedor atencioso e prestativo com avaliação 5,0★ no Google",
    ],
    ctaText: "Falar com Vendedor Agora",
    whatsappMessage:
      "Olá! Gostaria de saber como funciona a retirada imediata no Caiçaras ou entrega rápida em BH.",
  },
];

// 6 Avaliações Reais do Google Maps (5,0★ · Piscinas Na Hora BH)
interface CustomerReview {
  name: string;
  tag: string;
  rating: number;
  highlight: string;
  comment: string;
}

const REVIEWS: CustomerReview[] = [
  {
    name: "Sandra Lopes",
    tag: "5 avaliações · Cliente Verificada no Google",
    rating: 5,
    highlight: "Atendimento excelente e produtos de qualidade",
    comment: "Amei ... atendimento excelente e produtos de qualidade ❤️",
  },
  {
    name: "Paloma Fernandes",
    tag: "2 avaliações · Cliente Verificada no Google",
    rating: 5,
    highlight: "Vendedor prestativo e preço justo",
    comment:
      "Vendedor prestativo e tem um preço justo. Comprarei outras vezes! ❤️",
  },
  {
    name: "Eduardo Gonçalves",
    tag: "2 avaliações · Cliente Verificado no Google",
    rating: 5,
    highlight: "Ótimos produtos e preços justos",
    comment: "Ótimos produtos e preços!",
  },
  {
    name: "Maria Célia Pereira dos Anjos",
    tag: "4 avaliações · Cliente Verificada no Google",
    rating: 5,
    highlight: "Experiência Maravilhosa",
    comment: "Maravilhosa",
  },
  {
    name: "Rogério Mendes",
    tag: "Local Guide · 18 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Piscina a pronta entrega e retirada rápida no Caiçaras",
    comment:
      "Melhor opção de BH quando o calor aperta! Comprei a piscina de armação pelo WhatsApp e em menos de 1 hora já estava retirando no portão preto no Caiçaras. Vendedor super prestativo e preço muito justo.",
  },
  {
    name: "Fabiana Silva",
    tag: "3 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Salvou o fim de semana da família!",
    comment:
      "Precisava de uma piscina e boias urgentes para o aniversário dos meus filhos no fim de semana e eles entregaram super rápido em BH. As crianças amaram e os produtos são de altíssima qualidade!",
  },
];

type GalleryCategory =
  | "todas"
  | "armacao"
  | "inflaveis"
  | "boias"
  | "filtros"
  | "camping";

interface GalleryProject {
  src: string;
  title: string;
  category: GalleryCategory;
  tag: string;
  desc: string;
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    src: "/hero-pool-v5.jpg",
    title: "Diversão Completa em Família com Piscina no Quintal",
    category: "armacao",
    tag: "Pronta Entrega em BH",
    desc: "Alegria garantida para toda a família no calor de Belo Horizonte com piscinas estruturadas fáceis de montar.",
  },
  {
    src: "/piscina-armacao-v5.jpg",
    title: "Piscina de Armação Estruturada com Tubos Antiferrugem",
    category: "armacao",
    tag: "Estrutura Reforçada",
    desc: "Lona tripla de alta resistência e montagem intuitiva. Perfeita para quintais, sítios e áreas externas.",
  },
  {
    src: "/piscina-inflavel-v5.jpg",
    title: "Piscinas Infláveis Práticas para Crianças e Família",
    category: "inflaveis",
    tag: "Montagem em Minutos",
    desc: "Basta inflar a borda superior e encher de água. Compactas, seguras e refrescantes.",
  },
  {
    src: "/boias-brinquedos-v5.jpg",
    title: "Boias Temáticas, Colchões Flutuantes e Brinquedos",
    category: "boias",
    tag: "Diversão Garantida",
    desc: "Cores vibrantes, materiais resistentes e modelos que fazem o maior sucesso com crianças e adultos.",
  },
  {
    src: "/filtro-bomba-v5.jpg",
    title: "Bombas Filtrantes e Sistemas de Filtragem de Água",
    category: "filtros",
    tag: "Economia de Água",
    desc: "Mantenha sua piscina limpa por muito mais tempo economizando água com cartuchos filtrantes de alta retenção.",
  },
  {
    src: "/tratamento-agua-v5.jpg",
    title: "Tratamento de Água, Cloro e Pastilhas com Flutuador",
    category: "filtros",
    tag: "Água Cristalina",
    desc: "Kits completos de manutenção e químicos suaves para garantir água saudável e protegida.",
  },
  {
    src: "/capas-acessorios-v5.jpg",
    title: "Capas Protetoras, Térmicas e Forros de Chão",
    category: "armacao",
    tag: "Proteção Total",
    desc: "Protege contra folhas, galhos e poeira, conservando a temperatura da água e a durabilidade da piscina.",
  },
  {
    src: "/camping-lazer-v5.jpg",
    title: "Artigos para Esportes ao Ar Livre, Camping e Lazer",
    category: "camping",
    tag: "Vida ao Ar Livre",
    desc: "Barracas, colchões infláveis, cadeiras e equipamentos para você aproveitar a natureza ao máximo.",
  },
];

// Perguntas Frequentes
const FAQS = [
  {
    question: "Onde fica a Piscinas Na Hora BH e como funciona a retirada?",
    answer:
      "Nossa sede para retirada fica no Portão preto de Garagem - Rua Bangu, 90 - Bairro Caiçaras, Belo Horizonte - MG (CEP 30750-410). Você combina seu pedido previamente pelo WhatsApp ou Shopee, e passa para retirar no mesmo dia! Há facilidade para estacionar em frente ao portão preto e carregar os produtos diretamente no seu carro.",
  },
  {
    question: "Vocês realizam entrega no mesmo dia em Belo Horizonte e região?",
    answer:
      "Sim! Oferecemos frete expresso local para toda Belo Horizonte (Caiçaras, Pampulha, Centro, Barreiro, Venda Nova, Sion, Buritis, etc.) e cidades vizinhas como Contagem, Betim e Nova Lima. Dependendo do horário do pedido, você recebe a piscina na sua casa no mesmo dia para aproveitar o calor sem esperar!",
  },
  {
    question: "Quais são os modelos e tamanhos de piscinas disponíveis a pronta entrega?",
    answer:
      "Trabalhamos com piscinas de armação de ferro estruturadas e piscinas infláveis das melhores marcas (Mor, Bestway, Intex). Temos opções compactas a partir de 1.000 litros para pequenos espaços até modelos familiares de 2.000L, 3.000L, 5.000L, 7.000L e mais de 10.000 litros. Fale conosco no WhatsApp para consultar o estoque do dia!",
  },
  {
    question: "Vocês vendem também pela Shopee?",
    answer:
      "Sim! Você pode comprar diretamente pelo nosso canal oficial no WhatsApp ou através da nossa loja oficial na Shopee: shopee.com.br/piscinasnahorabh, com garantia da plataforma e opções de envio.",
  },
  {
    question: "Vocês vendem bombas filtrantes, capas e produtos de tratamento?",
    answer:
      "Sim, temos a linha completa! Para você não precisar comprar em lugares diferentes, fornecemos bombas de filtragem 110V e 220V, refis de cartucho, flutuadores de cloro, pastilhas 3 em 1, capas de proteção com drenagem, forros de piso e boias divertidas.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos Pix com desconto imediato, cartões de crédito e débito com parcelamento, além das opções de pagamento seguras da Shopee. Para pedidos com retirada no Caiçaras, você pode efetuar o pagamento diretamente na entrega/retirada.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] =
    useState<GalleryCategory>("todas");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredGallery =
    activeGalleryTab === "todas"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeGalleryTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* 1. TOP BAR INSTITUCIONAL — BELO HORIZONTE, MINAS GERAIS */}
      <div className="bg-[#02245B] text-white text-[12px] py-2 px-4 border-b border-[#044296]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Lado Esquerdo: Endereço & Horários */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 text-slate-200">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F97804] shrink-0" />
              <span>Portão preto - R. Bangu, 90 - Caiçaras, BH</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#FCD504] shrink-0" />
              <span>Aberto até às 18:00 (Seg a Sáb)</span>
            </div>
          </div>

          {/* Lado Direito: Avaliação Google 5,0★, Shopee & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-200">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#031838] px-3 py-1 rounded-full text-slate-200 border border-[#044296] hover:border-[#FCD504] transition-colors text-[11px] whitespace-nowrap"
            >
              <div className="flex text-[#FCD504]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-extrabold text-[#FCD504]">5,0</span>
              <span className="text-slate-300">no Google</span>
            </a>

            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-[#FED7AA] hover:text-white transition-colors whitespace-nowrap font-semibold text-[11px]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F97804] shrink-0" />
              <span>Loja Shopee</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#38BDF8] font-bold hover:underline whitespace-nowrap text-[12px]"
            >
              <WhatsAppIcon size={14} className="text-[#22C55E]" />
              <span>(31) 92000-6722</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER / NAVBAR PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Oficial & Assinatura da Marca */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-mark.png"
                alt="Logo Piscinas Na Hora BH"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[18px] sm:text-[20px] font-black tracking-tight text-[#044296] leading-none font-heading whitespace-nowrap group-hover:text-[#F97804] transition-colors">
                  PISCINAS NA HORA
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#044296] px-1.5 py-0.5 rounded-md whitespace-nowrap">
                  BH
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#F97804] tracking-wider uppercase mt-1 whitespace-nowrap flex items-center gap-1.5">
                <span>Especialistas em Diversão</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-500 font-medium">Lazer em Casa</span>
              </span>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-[14px] font-semibold text-slate-700">
            <a
              href="#piscinas"
              className="hover:text-[#044296] transition-colors whitespace-nowrap py-1"
            >
              Piscinas
            </a>
            <a
              href="#produtos"
              className="hover:text-[#044296] transition-colors whitespace-nowrap py-1"
            >
              Infláveis &amp; Boias
            </a>
            <a
              href="#camping"
              className="hover:text-[#044296] transition-colors whitespace-nowrap py-1"
            >
              Camping &amp; Lazer
            </a>
            <a
              href="#sobre"
              className="hover:text-[#044296] transition-colors whitespace-nowrap py-1"
            >
              Sobre Nós
            </a>
            <a
              href="#depoimentos"
              className="inline-flex items-center gap-1 hover:text-[#044296] transition-colors whitespace-nowrap py-1"
            >
              <span>Avaliações</span>
              <span className="text-[10px] font-black text-[#D97706] bg-[#FEFCE8] px-1.5 py-0.2 rounded-full border border-[#FDE047]">
                ★ 5,0
              </span>
            </a>
            <a
              href="#retirada"
              className="hover:text-[#044296] transition-colors whitespace-nowrap py-1"
            >
              Retirada (Caiçaras)
            </a>
          </nav>

          {/* CTAs Header: Shopee e WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 bg-[#FFF5EB] hover:bg-[#FED7AA] text-[#F97804] text-[13px] font-bold px-3 py-2 rounded-xl border border-[#FED7AA] transition-all whitespace-nowrap"
            >
              <ShoppingBag size={14} />
              <span>Ver Shopee</span>
            </a>

            <a
              href={getWhatsAppUrl("Olá! Gostaria de consultar os produtos à pronta entrega na Piscinas Na Hora BH.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-[13px] font-bold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon size={16} />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700 hover:text-[#044296] focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-4 shadow-xl"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5">
                  <Image
                    src="/logo-mark.png"
                    alt="Logo Piscinas Na Hora BH"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-[#044296]">PISCINAS NA HORA BH</div>
                  <div className="text-[11px] font-bold text-[#F97804]">Especialistas em Diversão</div>
                </div>
              </div>
              <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-[15px]">
                <a
                  href="#piscinas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#044296] py-1 border-b border-slate-100"
                >
                  Piscinas de Armação Estruturadas
                </a>
                <a
                  href="#produtos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#044296] py-1 border-b border-slate-100"
                >
                  Piscinas Infláveis, Boias &amp; Filtros
                </a>
                <a
                  href="#camping"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#044296] py-1 border-b border-slate-100"
                >
                  Camping, Pesca &amp; Artigos ao Ar Livre
                </a>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#044296] py-1 border-b border-slate-100"
                >
                  Sobre a Piscinas Na Hora BH
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#044296] py-1 border-b border-slate-100"
                >
                  Avaliações Reais (5,0★ no Google)
                </a>
                <a
                  href="#retirada"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#044296] py-1"
                >
                  Retirada no Portão Preto (Caiçaras)
                </a>
              </nav>

              <div className="pt-2 flex flex-col gap-2">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chamar no WhatsApp: (31) 92000-6722</span>
                </GlowingButton>
                <a
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-lg border border-[#FED7AA] bg-[#FFF5EB] text-[#F97804] text-xs font-bold flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={15} />
                  <span>Acessar nossa loja na Shopee</span>
                </a>
                <div className="text-center text-xs text-slate-500 pt-1">
                  R. Bangu, 90 - Caiçaras, Belo Horizonte - MG
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION DE ALTA CONVERSÃO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#02245B] via-[#044296] to-[#02245B] text-white pt-10 pb-20 sm:pt-16 sm:pb-28">
        {/* Elementos Luminosos de Fundo (Cores do Logo: Azul, Ciano, Laranja, Amarelo) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#04ACD3]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#F97804]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#FCD504]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lado Esquerdo: Textos & CTAs (7 colunas) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge de Destaque / Google Rating 5,0★ */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-1.5 pr-4 rounded-full shadow-lg">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white shrink-0 border border-white/30 shadow-xs flex items-center justify-center">
                  <Image
                    src="/logo-mark.png"
                    alt="Logo Piscinas Na Hora BH"
                    fill
                    sizes="40px"
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="font-extrabold text-[#FCD504] flex items-center gap-1">
                    ★ 5,0 no Google
                  </span>
                  <span className="text-white/40">&bull;</span>
                  <span className="text-white font-bold">Especialistas em Diversão em Belo Horizonte</span>
                </div>
              </div>

              {/* Headline Principal H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] font-heading">
                Piscinas à Pronta Entrega e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04ACD3] via-[#FCD504] to-[#F97804]">
                  Diversão Completa
                </span>{" "}
                para Toda a Família em BH!
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Piscinas estruturadas de armação, piscinas infláveis, boias gigantes, bombas filtrantes, tratamento de água e artigos completos de camping e lazer. Retirada rápida no Bairro Caiçaras ou entrega expressa no mesmo dia em Belo Horizonte e região!
              </p>

              {/* Pills de Diferenciais */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 pb-2 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <PackageCheck className="w-4 h-4 text-[#04ACD3] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Pronta Entrega em BH</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <MapPin className="w-4 h-4 text-[#F97804] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Retire no Caiçaras</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#83C809] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Preço Justo &amp; Qualidade</span>
                </div>
              </div>

              {/* Botões de Ação Hero */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de consultar os modelos de piscinas à pronta entrega na Piscinas Na Hora BH.")}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto text-base shadow-lg shadow-green-600/30 font-bold"
                >
                  <WhatsAppIcon size={20} />
                  <span>Pedir no WhatsApp: (31) 92000-6722</span>
                </GlowingButton>

                <GlowingButton
                  href="#piscinas"
                  variant="orange"
                  size="lg"
                  className="w-full sm:w-auto text-base"
                >
                  <span>Ver Piscinas em Estoque</span>
                  <ArrowRight className="w-4 h-4" />
                </GlowingButton>
              </div>

              {/* Resumo de Prova Social Google */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-200">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#044296] border-2 border-[#02245B] flex items-center justify-center font-bold text-[10px] text-white">SL</div>
                  <div className="w-7 h-7 rounded-full bg-[#F97804] border-2 border-[#02245B] flex items-center justify-center font-bold text-[10px] text-white">PF</div>
                  <div className="w-7 h-7 rounded-full bg-[#04ACD3] border-2 border-[#02245B] flex items-center justify-center font-bold text-[10px] text-white">EG</div>
                  <div className="w-7 h-7 rounded-full bg-[#83C809] border-2 border-[#02245B] flex items-center justify-center font-bold text-[10px] text-white">MC</div>
                </div>
                <span>
                  <strong className="text-white">Nota 5,0★ no Google</strong> com clientes 100% satisfeitos em Belo Horizonte
                </span>
              </div>
            </div>

            {/* Lado Direito: Card Visual com Foto Hero e Emblema (5 colunas) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#04ACD3]/40 shadow-2xl bg-[#02245B]">
                {/* Imagem do Hero */}
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/hero-pool-v5.jpg"
                    alt="Piscinas de Armação e Infláveis Pronta Entrega em Belo Horizonte"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02245B] via-transparent to-transparent opacity-85" />

                  {/* Badge Flutuante no Topo com o Logo Oficial */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-2.5 text-xs font-bold text-[#031838] shadow-xl">
                    <div className="relative w-8 h-8 shrink-0 rounded-lg overflow-hidden bg-white border border-slate-100 p-0.5">
                      <Image
                        src="/logo-mark.png"
                        alt="Emblema Piscinas Na Hora BH"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-[#044296] uppercase tracking-wider leading-tight">Pronta Entrega</div>
                      <div className="text-[12px] font-extrabold text-[#031838] leading-tight">Piscinas Na Hora BH</div>
                    </div>
                  </div>

                  {/* Selo no Rodapé da Imagem com Retirada Caiçaras */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#02245B]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#FCD504] uppercase tracking-wider">
                        Retirada Imediata em BH
                      </div>
                      <div className="text-sm font-extrabold text-white">
                        Rua Bangu, 90 - Caiçaras
                      </div>
                    </div>
                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de saber como funciona a retirada imediata no Caiçaras.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <WhatsAppIcon size={13} />
                      <span>Retirar Hoje</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Flutuante de Avaliação em Destaque */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white text-[#031838] p-3.5 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="p-2.5 rounded-lg bg-[#FEFCE8] text-[#D97706] shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#031838]">
                    5,0 Estrelas no Google
                  </div>
                  <div className="text-[11px] text-slate-600 line-clamp-1">
                    &ldquo;Vendedor prestativo e preço justo!&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE NÚMEROS & DIFERENCIAIS */}
      <section className="bg-white border-y border-slate-200 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#044296] font-heading">
                5,0★
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#031838]">
                Google Avaliações
              </div>
              <div className="text-[11px] text-slate-500">
                100% de satisfação comprovada
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F97804] font-heading">
                Na Hora
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#031838]">
                Sem Espera de Frete
              </div>
              <div className="text-[11px] text-slate-500">
                Retire no Caiçaras ou receba hoje em BH
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#04ACD3] font-heading">
                Completa
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#031838]">
                Piscinas &bull; Boias &bull; Lazer
              </div>
              <div className="text-[11px] text-slate-500">
                Filtros, químicos, capas e camping
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#16A34A] font-heading">
                Preço Justo
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#031838]">
                WhatsApp &amp; Shopee
              </div>
              <div className="text-[11px] text-slate-500">
                As melhores marcas com valor acessível
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PISCINAS DE ARMAÇÃO ESTRUTURADAS EM DESTAQUE */}
      <section id="piscinas" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="eyebrow-blue">Piscinas Estruturadas &bull; Pronta Entrega BH</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
              Piscinas de Armação de Ferro: Durabilidade, Espaço e Alegria no Quintal
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              O calor chegou em Belo Horizonte? Não espere semanas pelo frete de compras online. Na Piscinas Na Hora BH você escolhe o tamanho ideal e leva para casa no mesmo dia!
            </p>
          </div>

          {/* Card de Destaque da Marca com o Logo Oficial */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-12 max-w-5xl mx-auto">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-white p-2 rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
              <Image
                src={LOGO_WHITE_BG}
                alt="Logo Piscinas Na Hora BH"
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FC] text-[#044296] text-xs font-extrabold uppercase tracking-wider">
                Pronta Entrega Imediata &bull; Belo Horizonte - MG
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#031838] font-heading">
                Piscinas Na Hora BH &bull; Especialistas em Diversão
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trabalhamos com piscinas de armação de 1.000L a mais de 10.000L, equipadas com estruturas reforçadas antiferrugem e lonas de PVC tripla camada. Montagem rápida, desmontagem fácil para o inverno e diversão ilimitada para refrescar toda a família.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Foto Grande da Piscina de Armação com Detalhes */}
            <div className="lg:col-span-7">
              <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/piscina-armacao-v5.jpg"
                  alt="Piscina de Armação de Ferro Estruturada em Belo Horizonte"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-[#F97804] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Modelos de 1.000L a 10.000L+
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    Estrutura Firme, Lona Tripla e Diversão para Todas as Idades
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Sem obras, sem quebra-quebra no quintal. Montagem prática e água limpa o verão inteiro.
                  </p>
                </div>
              </div>
            </div>

            {/* Vantagens das Piscinas de Armação */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#EBF3FC] text-[#044296] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#031838] text-sm sm:text-base">
                      Aço Galvanizado com Pintura Antiferrugem
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Tubos metálicos com cantoneiras anatômicas que garantem estabilidade total mesmo com as crianças brincando bastante.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#FFF5EB] text-[#F97804] shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#031838] text-sm sm:text-base">
                      Lona Tripla Super Resistente
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Duas camadas de PVC de alta densidade com malha interna de poliéster para evitar furos e rasgos acidentais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#FEFCE8] text-[#D97706] shrink-0 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#031838] text-sm sm:text-base">
                      Retirada Hoje no Caiçaras ou Entrega Rápida em BH
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Você não precisa esperar semanas: passa no nosso portão preto na R. Bangu, 90 ou recebe no mesmo dia na sua casa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#02245B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#04ACD3] font-bold uppercase">
                    Qual o tamanho ideal para seu espaço?
                  </div>
                  <div className="text-sm font-bold">
                    Consulte os modelos disponíveis hoje
                  </div>
                </div>
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de consultar os tamanhos de piscinas de armação disponíveis a pronta entrega.")}
                  target="_blank"
                  variant="orange"
                  size="sm"
                >
                  <WhatsAppIcon size={14} />
                  <span>Consultar no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUTOS & CATEGORIAS PRINCIPAIS (GRID COM MODAL INTERATIVO) */}
      <section id="produtos" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-blue">Catálogo Completo &bull; Lazer para Toda a Família</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
              Tudo o que Você Precisa para o Seu Verão em um Só Lugar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Das piscinas de armação às boias gigantes, bombas filtrantes, tratamento químico e artigos de camping. Clique em qualquer card para ver todos os detalhes e diferenciais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="card-modelo rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Foto do Serviço */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-[#02245B]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#BAEFF8] border border-[#044296]">
                      {service.badge}
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#EBF3FC] text-[#044296]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-[16px] text-[#031838] group-hover:text-[#044296] transition-colors line-clamp-1 font-heading">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#044296] group-hover:translate-x-1 transition-transform">
                      <span>Ver detalhes e itens</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL DETALHADO DO SERVIÇO SELECIONADO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            >
              {/* Header com Imagem */}
              <div className="relative h-56 w-full bg-[#02245B]">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="650px"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="bg-[#F97804] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Sobre Esta Categoria
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#044296] uppercase tracking-wider mb-3">
                    Principais Diferenciais &amp; Vantagens
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-[#EBF3FC] p-3 rounded-lg border border-[#B9D7F9] text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#044296] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer do Modal com CTA WhatsApp */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Atendimento ágil no WhatsApp &bull; Retirada no Caiçaras
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(selectedService.whatsappMessage)}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} />
                    <span>{selectedService.ctaText}</span>
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. SEÇÃO DE CAMPING, PESCA & LAZER AO AR LIVRE */}
      <section id="camping" className="py-16 sm:py-24 bg-[#02245B] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F97804]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#04ACD3]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Texto Camping & Esportes ao Ar Livre */}
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow-orange">Esportes ao Ar Livre &bull; Casa, Jardim &amp; Pesca</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
                Tudo para Camping, Pesca e Lazer em Família
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Além das melhores piscinas de BH, somos a sua loja completa de artigos para esportes ao ar livre. Tenha conforto e diversão garantida em viagens, sítios, acampamentos ou no jardim da sua casa.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <Tent className="w-5 h-5 text-[#F97804] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Barracas de Camping Resistentes
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Modelos de 2 a 6 pessoas com piso reforçado, mosqueteiro e cobertura impermeável contra chuvas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <Sun className="w-5 h-5 text-[#FCD504] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Colchões Infláveis de Casal e Solteiro
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Acabamento aveludado confortável com bombas manuais ou elétricas de enchimento ultrarrápido.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <Compass className="w-5 h-5 text-[#04ACD3] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Artigos de Pesca, Cadeiras e Caixas Térmicas
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Cadeiras dobráveis leves, isolamento térmico para bebidas geladas e acessórios práticos de pesca.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de consultar os produtos de camping e pesca disponíveis na Piscinas Na Hora BH.")}
                  target="_blank"
                  variant="orange"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Consultar Artigos de Camping no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>

            {/* Imagem Camping com Badge */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-[#044296] shadow-2xl">
                <Image
                  src="/camping-lazer-v5.jpg"
                  alt="Artigos de Camping, Lazer e Esportes ao Ar Livre em Belo Horizonte"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02245B] via-transparent to-transparent opacity-75" />
              </div>

              {/* Destaque Sandra Lopes */}
              <div className="bg-[#031838] p-5 rounded-xl border border-[#044296] space-y-2">
                <div className="flex items-center gap-1 text-[#FCD504]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-2">Sandra Lopes &bull; Avaliação no Google</span>
                </div>
                <p className="text-xs text-slate-200 italic leading-relaxed">
                  &ldquo;Amei ... atendimento excelente e produtos de qualidade ❤️&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOBRE A EMPRESA & QUEM SOMOS */}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto e Card de Confiança */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/sobre-familia-v5.jpg"
                  alt="Família e Diversão ao Ar Livre - Piscinas Na Hora BH"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02245B]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="text-xs font-bold text-[#04ACD3] uppercase tracking-wider">
                    Somos Especialistas em Diversão 🤩
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    &ldquo;Alegria garantida para toda a família no calor de BH.&rdquo;
                  </h3>
                </div>
              </div>

              {/* Selo Flutuante */}
              <div className="absolute -top-4 -right-4 bg-[#044296] text-white p-4 rounded-xl shadow-xl border border-white/20 hidden sm:block text-center">
                <div className="text-2xl font-black font-heading">5,0★</div>
                <div className="text-[10px] font-bold uppercase tracking-wider">
                  Google Maps
                </div>
              </div>
            </div>

            {/* Texto Sobre Nós */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow-blue">Quem Somos &bull; Piscinas Na Hora BH</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
                Mais que uma Loja: Levamos o Frescor e a Diversão Até a Sua Casa
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A <strong>Piscinas Na Hora BH</strong> nasceu com um propósito bem direto: acabar com a frustração de quem quer aproveitar o fim de semana ensolarado em Belo Horizonte e descobre que as lojas da internet pedem dias ou semanas para entregar.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Somos apaixonados por lazer, sol e convivência em família. Seja com piscinas de armação de alta durabilidade, piscinas infláveis super práticas, boias coloridas, filtros ou itens para acampamento, garantimos <strong>atendimento prestativo, honestidade e preços justos</strong>.
              </p>

              {/* Destaque Paloma Fernandes */}
              <div className="p-4 rounded-xl bg-[#EBF3FC] border border-[#B9D7F9] text-slate-800 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#044296]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Avaliação Real no Google de Paloma Fernandes:</span>
                </div>
                <p className="italic">
                  &ldquo;Vendedor prestativo e tem um preço justo. Comprarei outras vezes! ❤️&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#044296]/10 flex items-center justify-center text-[#044296] shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#031838]">Vendedor Prestativo</h4>
                    <p className="text-xs text-slate-500">Tiramos dúvidas sobre medidas e montagem</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F97804]/10 flex items-center justify-center text-[#F97804] shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#031838]">Pronta Entrega Real</h4>
                    <p className="text-xs text-slate-500">Estoque físico pronto para retirada imediata</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com o vendedor da Piscinas Na Hora BH.")}
                  target="_blank"
                  variant="blue"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Falar com o Vendedor no WhatsApp</span>
                </GlowingButton>

                <a
                  href={SHOPEE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#FED7AA] bg-[#FFF5EB] text-[#F97804] font-bold text-xs hover:bg-[#FED7AA] transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Conhecer Loja na Shopee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEPOIMENTOS REAIS DO GOOGLE MAPS (5,0★ · 6 AVALIAÇÕES) */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-gold">Prova Social &bull; Google Avaliações 5,0★</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
              O Que Nossos Clientes Dizem no Google
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Avaliação máxima de 5,0 estrelas no Google Maps por quem comprou, retirou e comprovou a agilidade e a qualidade dos nossos produtos.
            </p>

            {/* Google Badge Institucional */}
            <div className="pt-2">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs hover:border-[#044296] transition-colors text-xs font-bold text-slate-800"
              >
                <span className="flex text-[#FCD504]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span>Nota 5,0 no Google Maps ({GOOGLE_REVIEW_COUNT} avaliações reais)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="card-modelo p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  {/* Estrelas & Destaque */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#FCD504]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#044296] bg-[#EBF3FC] px-2 py-0.5 rounded">
                      Google Review
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-[#031838] font-heading">
                    {review.highlight}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#031838]">{review.name}</h4>
                    <span className="text-[10px] text-slate-400 block">{review.tag}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#044296]/10 text-[#044296] flex items-center justify-center font-bold text-[11px]">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#044296] hover:underline"
            >
              <span>Ver todas as avaliações diretamente no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. GALERIA DE PRODUTOS E AMBIENTES DE LAZER COM FILTRO */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="eyebrow-blue">Galeria &bull; Diversão em Casa</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
              Piscinas, Boias e Itens de Lazer que Transformam Dias Quentes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Confira os produtos disponíveis para transformar o quintal da sua casa em um verdadeiro refúgio de diversão.
            </p>
          </div>

          {/* Abas de Filtro da Galeria */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "todas", label: "Todos os Produtos" },
              { id: "armacao", label: "Piscinas de Armação" },
              { id: "inflaveis", label: "Piscinas Infláveis" },
              { id: "boias", label: "Boias & Brinquedos" },
              { id: "filtros", label: "Filtros & Tratamento" },
              { id: "camping", label: "Camping & Aventura" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveGalleryTab(tab.id as GalleryCategory)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeGalleryTab === tab.id
                    ? "bg-[#044296] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((proj, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={proj.src}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 bg-[#02245B]/85 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-bold text-white border border-white/20">
                    {proj.tag}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-sm font-heading leading-tight line-clamp-1">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-slate-200 mt-1 line-clamp-2">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="eyebrow-blue">Tire Suas Dúvidas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tudo o que você precisa saber sobre retirada imediata no Caiçaras, entrega expressa em BH, marcas de piscinas e formas de pagamento.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="card-modelo rounded-xl overflow-hidden border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#031838] text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#044296] shrink-0 transition-transform duration-200 ${
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
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

      {/* 12. LOCALIZAÇÃO & RETIRADA NO BAIRRO CAIÇARAS (BELO HORIZONTE - MG) */}
      <section id="retirada" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="eyebrow-blue">Retirada Rápida &bull; Bairro Caiçaras</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031838] font-heading tracking-tight">
              Retire na Hora no Bairro Caiçaras em Belo Horizonte
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fácil localização na <strong>Rua Bangu, 90 (Portão Preto de Garagem)</strong>, a poucos minutos das principais vias de BH. Estacione na porta e carregue os produtos diretamente no seu carro!
            </p>
          </div>

          {/* Cards Visuais Lado a Lado: Foto do Local + Mapa Interativo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            {/* Card 1: Foto do Local de Retirada */}
            <div className="space-y-4">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 group">
                <Image
                  src="/retirada-caicaras-v5.jpg"
                  alt="Ponto de Retirada Piscinas Na Hora BH no Caiçaras"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#02245B]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#04ACD3]/40 flex items-center gap-2 text-xs font-bold text-white shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-[#F97804]" />
                  <span>Ponto de Retirada em BH</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-xs font-bold text-[#FCD504] uppercase tracking-wider">
                    Portão Preto de Garagem &bull; R. Bangu, 90
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-heading">
                    Piscinas Na Hora BH &bull; Bairro Caiçaras
                  </h3>
                  <p className="text-xs text-slate-200">
                    Estacione em frente com tranquilidade para conferir e embarcar sua piscina e acessórios com todo o conforto.
                  </p>
                </div>
              </div>

              {/* Destaques do Local */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#EBF3FC] rounded-xl border border-[#B9D7F9]">
                  <div className="text-xs font-bold text-[#044296]">Portão Preto</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Fácil identificação</div>
                </div>
                <div className="p-3 bg-[#FFF5EB] rounded-xl border border-[#FED7AA]">
                  <div className="text-xs font-bold text-[#F97804]">Carga no Carro</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Parada rápida na porta</div>
                </div>
                <div className="p-3 bg-[#FEFCE8] rounded-xl border border-[#FDE047]">
                  <div className="text-xs font-bold text-[#D97706]">Até 18:00</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Segunda a Sábado</div>
                </div>
              </div>
            </div>

            {/* Card 2: Mapa Embed Interativo + Rotas */}
            <div className="space-y-4">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <iframe
                  title="Localização Piscinas Na Hora BH Caiçaras"
                  src="https://maps.google.com/maps?q=Rua+Bangu,+90+-+Cai%C3%A7aras,+Belo+Horizonte+-+MG,+30750-410&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Botões de Ação para Navegação */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#044296] hover:bg-[#033477] text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href={WAZE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dados de Endereço & Horários */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#EBF3FC] text-[#044296] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#031838]">Endereço para Retirada:</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {ADDRESS_DISPLAY}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#FFF5EB] text-[#F97804] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#031838]">Horário de Funcionamento:</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Aberto &bull; Fecha às 18:00<br />
                  Segunda a Sábado com atendimento ágil
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#F0FDF4] text-[#16A34A] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#031838]">WhatsApp &amp; Contato:</h4>
                <p className="text-xs text-slate-600 mt-0.5 font-bold">
                  {PHONE_DISPLAY}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#16A34A] font-bold hover:underline inline-block mt-0.5"
                >
                  Falar no WhatsApp agora &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. BANNER CTA FINAL DE ALTA CONVERSÃO */}
      <section className="bg-gradient-to-r from-[#02245B] via-[#044296] to-[#04ACD3] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="bg-[#FCD504] text-[#031838] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Pronta Entrega em BH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight">
            Não Passe Calor! Garanta a Sua Piscina e Diversão na Hora!
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Converse agora com nosso vendedor pelo WhatsApp. Tire dúvidas sobre tamanhos, consulte o estoque do dia e agende sua retirada no Caiçaras ou entrega expressa em Belo Horizonte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de consultar os modelos de piscinas à pronta entrega na Piscinas Na Hora BH.")}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto text-base shadow-xl shadow-green-600/30 font-bold"
            >
              <WhatsAppIcon size={20} />
              <span>Chamar no WhatsApp: (31) 92000-6722</span>
            </GlowingButton>

            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 text-white font-bold hover:bg-white/10 transition-colors text-sm w-full sm:w-auto"
            >
              <ShoppingBag className="w-4 h-4 text-[#FED7AA]" />
              <span>Ver Loja na Shopee</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="bg-[#02245B] text-white border-t border-[#044296] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Coluna 1: Identidade, Logo & Slogan (4 colunas) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white p-1.5 rounded-2xl shadow-xl shrink-0 flex items-center justify-center border border-white/20">
                  <Image
                    src={LOGO_WHITE_BG}
                    alt="Logo Piscinas Na Hora BH"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-black font-heading text-white">
                    PISCINAS NA HORA BH
                  </div>
                  <div className="text-xs font-bold text-[#38BDF8]">
                    Artigos para Esportes ao Ar Livre &bull; BH
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Somos Especialistas em Diversão! 🤩
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Piscinas de armação, piscinas infláveis, boias, bombas, filtros, tratamento de água e artigos completos de camping e pesca. Retirada rápida no Caiçaras ou entrega expressa em Belo Horizonte e região.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#FCD504] font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>5,0 Estrelas &bull; 100% Avaliações Positivas no Google</span>
              </div>
            </div>

            {/* Coluna 2: Produtos & Categorias (3 colunas) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
                Nossos Produtos
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#piscinas" className="hover:text-white transition-colors">
                    Piscinas de Armação (1.000L a 10.000L+)
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Piscinas Infláveis &amp; Infantis
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Boias Gigantes, Colchões &amp; Flutuadores
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Bombas Filtrantes &amp; Refis de Cartucho
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Cloro, Pastilhas 3 em 1 &amp; Químicos
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Capas Protetoras &amp; Forros de Chão
                  </a>
                </li>
                <li>
                  <a href="#camping" className="hover:text-white transition-colors">
                    Camping, Pesca &amp; Esportes ao Ar Livre
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Regiões Atendidas (2 colunas) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
                Regiões em BH
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>Bairro Caiçaras (Retirada)</li>
                <li>Pampulha &amp; Castelo</li>
                <li>Centro &amp; Região Sul</li>
                <li>Barreiro &amp; Oeste</li>
                <li>Venda Nova &amp; Norte</li>
                <li>Contagem &amp; Betim</li>
                <li>Nova Lima &amp; Sabará</li>
                <li>Toda a Grande BH</li>
              </ul>
            </div>

            {/* Coluna 4: Canais de Atendimento (3 colunas) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
                Canais de Atendimento
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span className="font-bold">{PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <WhatsAppIcon size={14} className="text-[#22C55E] shrink-0" />
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#38BDF8] font-bold"
                  >
                    (31) 92000-6722 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F97804] shrink-0" />
                  <span className="text-[11px] leading-tight">
                    Portão preto de Garagem - R. Bangu, 90 - Caiçaras, BH
                  </span>
                </div>
                <div className="pt-2 flex flex-col gap-1.5">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="p-1.5 rounded-lg bg-white/10 text-white text-[10px] font-bold">IG</span>
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                  <a
                    href={SHOPEE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FED7AA] hover:text-white transition-colors"
                  >
                    <span className="p-1.5 rounded-lg bg-[#F97804] text-white text-[10px] font-bold">SP</span>
                    <span>shopee.com.br/piscinasnahorabh</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Créditos */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
            </div>
            <div className="text-[11px] text-slate-400">
              {ADDRESS_DISPLAY}
            </div>
          </div>
        </div>
      </footer>

      {/* 15. BOTÃO FLUTUANTE DO WHATSAPP COM BADGE PULSANTE */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de consultar os produtos e piscinas à pronta entrega na Piscinas Na Hora BH.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-subtle-pulse"
          aria-label="Falar no WhatsApp com Piscinas Na Hora BH"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white" />
          </span>
          <WhatsAppIcon size={28} />
        </a>
      </div>
    </div>
  );
}
