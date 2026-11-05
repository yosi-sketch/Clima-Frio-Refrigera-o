"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ArrowRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Waves,
  Flame,
  Droplets,
  Wrench,
  Bath,
  Sun,
  Navigation,
  Check,
  ExternalLink,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Zap,
  Tag,
  Fish,
  HeartHandshake,
  ThumbsUp,
  Store,
  type LucideIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Quatro Estações Piscinas | Aguazul Sete Lagoas
const COMPANY_NAME = "Quatro Estações Piscinas";
const COMPANY_FULL_NAME =
  "Quatro Estações Piscinas | Revendedora Oficial Aguazul Sete Lagoas";
const COMPANY_TAGLINE =
  "Piscinas, Saunas, Aquecimento Solar & Lagos Ornamentais";
const BRAND_SUBTITLE =
  "Valorizamos áreas de lazer e realizamos sonhos tornando cada vez mais aconchegante o seu lar! Do projeto e escavação à instalação completa, aquecimento e manutenção técnica. Atendimento próximo e consultivo com Leonardo, Daniela e equipe, com nota 4,9★ e mais de 67 avaliações reais no Google.";

const WHATSAPP_NUMBER = "553137736264";
const PHONE_DISPLAY = "(31) 3773-6264";
const EMAIL_CONTACT = "contato@quatroestacoespiscinas.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/quatroestacoespiscinas/";
const INSTAGRAM_HANDLE = "@quatroestacoespiscinas";
const WHATSAPP_DIRECT_LINK = "https://wa.me/message/2CWT44DM5H5FJ1";

const ADDRESS_DISPLAY =
  "Av. Marechal Castelo Branco, 2111 (esq. com Rua Melo Figueiredo) - Santo Antonio, Sete Lagoas - MG, 35701-240";
const SHORT_ADDRESS = "Av. Marechal Castelo Branco, 2111 - Sete Lagoas - MG";
const CITIES_SERVED =
  "Sete Lagoas, Prudente de Morais, Inhaúma, Matozinhos, Capim Branco, Pedro Leopoldo, Funilândia, Baldim, Paraopeba, Cordisburgo, Caetanópolis e região";

const GOOGLE_REVIEW_COUNT = "67";
const GOOGLE_RATING = "4.9";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Quatro+Esta%C3%A7%C3%B5es+Piscinas+Sete+Lagoas+MG";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Marechal+Castelo+Branco%2C+2111+-+Santo+Antonio%2C+Sete+Lagoas+-+MG%2C+35701-240";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Av+Marechal+Castelo+Branco+2111+Sete+Lagoas+MG";

// Assets Oficiais
const LOGO_SRC = "/logo.jpg";
const LOGO_TRIMMED = "/logo-trimmed.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de falar com a Quatro Estações Piscinas sobre piscinas de fibra Aguazul, saunas ou aquecimento.";
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

// 8 Pilares de Serviços e Linhas de Soluções
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
    id: "piscinas-fibra-aguazul",
    title: "Piscinas de Fibra Aguazul (Linha Completa)",
    shortDesc:
      "Revenda exclusiva Aguazul em Sete Lagoas. Modelos compactos aos amplos (como a clássica linha Leblon de 5m até modelos de 10m+), acabamento impecável em gel coat, prainha infantil e hidromassagem.",
    badge: "Revenda Oficial Aguazul",
    icon: Waves,
    image: "/piscina-fibra.jpg",
    fullDesc:
      "As piscinas de fibra de vidro Aguazul são consagradas pelo acabamento de altíssima durabilidade, toque suave e visual espetacular. Com instalação ágil, estruturação reforçada e curvas ergonômicas, valorizam imediatamente a sua residência ou chácara. Conte com a consultoria do Leonardo e da Daniela para encontrar o tamanho, profundidade e modelo ideais para o seu espaço.",
    benefits: [
      "Fibra de vidro de alta resistência estrutural com garantia de fábrica",
      "Modelos modernos com prainha infantil, banco de descanso e escada ergonômica",
      "Instalação profissional e rápida sem dor de cabeça de obras demoradas",
      "Modelos consagrados como Leblon, Ipanema, Copacabana e linhas especiais",
    ],
    ctaText: "Ver Catálogo de Piscinas Aguazul",
    whatsappMessage:
      "Olá! Gostaria de conhecer os modelos e tamanhos das Piscinas de Fibra Aguazul disponíveis na Quatro Estações.",
  },
  {
    id: "aquecimento-solar-piscina-banho",
    title: "Aquecimento Solar & Bombas de Calor",
    shortDesc:
      "Aproveite a sua piscina nos 365 dias do ano! Sistemas com placas solares de polipropileno de alta absorção, bombas de calor inverter silenciosas e aquecimento solar para banho residencial.",
    badge: "Piscina Quente o Ano Todo",
    icon: Flame,
    image: "/aquecimento-solar.jpg",
    fullDesc:
      "Não deixe sua piscina parada nos meses amenos! A Quatro Estações Piscinas é referência técnica absoluta em aquecimento solar e trocadores de calor em Sete Lagoas. Como destacou Silmara Duque no Google: 'Desde a visita técnica do Leo, conversas e instalação, fui muito bem atendida sanando dúvidas e cumprindo o combinado'. Dimensionamos a potência exata para sua piscina e também para os chuveiros e banho da sua casa.",
    benefits: [
      "Coletores solares de polipropileno de altíssima eficiência térmica",
      "Bombas de calor inverter elétricas para dias nublados e noites frias",
      "Sistemas de aquecimento solar para banho residencial (chuveiros e torneiras)",
      "Controladores eletrônicos digitais com automação e capas térmicas sob medida",
    ],
    ctaText: "Dimensionar Aquecedor com Especialista",
    whatsappMessage:
      "Olá! Gostaria de dimensionar um sistema de aquecimento solar ou trocador de calor para minha piscina com a Quatro Estações.",
  },
  {
    id: "saunas-vapor-secas",
    title: "Saunas a Vapor & Secas",
    shortDesc:
      "Transforme sua casa em um refúgio de bem-estar: geradores de vapor compactos em inox, saunas secas sob medida, portas panorâmicas e termostatos digitais.",
    badge: "Saúde & Relaxamento",
    icon: Bath,
    image: "/sauna-spa.jpg",
    fullDesc:
      "Tenha todos os benefícios da sauna para a circulação, alívio do estresse e relaxamento muscular no conforto da sua área de lazer. Fornecemos geradores de vapor a gás e elétricos de alta durabilidade, revestimentos térmicos, iluminação própria para ambientes úmidos e acessórios como termômetros, essências e grades de proteção.",
    benefits: [
      "Geradores de vapor com acendimento automático e proteção térmica",
      "Saunas secas e a vapor com acabamento impecável e portas herméticas",
      "Quadros de comando digital externos com controle preciso de temperatura",
      "Orientação técnica para montagem da tubulação e isolamento térmico",
    ],
    ctaText: "Consultar Projetos de Sauna",
    whatsappMessage:
      "Olá! Gostaria de informações e valores sobre geradores e equipamentos para sauna na Quatro Estações Piscinas.",
  },
  {
    id: "lagos-ornamentais-paisagismo",
    title: "Lagos Ornamentais & Filtragem Biológica",
    shortDesc:
      "Especialistas em projetos e recuperação de lagos ornamentais para carpas e peixes, com filtragem biológica, ozônio/UV e água 100% cristalina e equilibrada.",
    badge: "Solução Técnica Especializada",
    icon: Fish,
    image: "/lago-ornamental.jpg",
    fullDesc:
      "Lagos ornamentais exigem profundo conhecimento biológico e hidráulico. Conforme relatou a cliente Ana Paula Carvalho: 'É um profissional que realmente entende do assunto... resolveu o problema do lago ornamental que outros não conseguiram. Hoje o lago está com a água cristalina e equilibrado pra qualidade de vida dos peixes!'. Criamos ou revitalizamos seu lago com bombas submersas de baixo consumo, filtros biológicos e sistemas UV.",
    benefits: [
      "Eliminação definitiva de água verde e proliferação de algas",
      "Filtros biológicos de alta densidade e esterilizadores ultravioleta/ozônio",
      "Balanço perfeito de oxigenação e parâmetros para carpas e peixes",
      "Paisagismo integrado com cascatas de pedra e iluminação aquática",
    ],
    ctaText: "Falar sobre Lago Ornamental",
    whatsappMessage:
      "Olá! Gostaria de atendimento técnico para projeto ou recuperação da água de lago ornamental com o Leonardo.",
  },
  {
    id: "filtros-bombas-equipamentos",
    title: "Filtros, Bombas & Casa de Máquinas",
    shortDesc:
      "Conjuntos motobomba e filtros de areia de alta vazão, quadros de comando elétrico com timer e compromisso total no pós-venda com troca expressa na garantia.",
    badge: "Garantia & Pós-Venda Premiado",
    icon: Wrench,
    image: "/filtro-bomba.jpg",
    fullDesc:
      "O coração da sua piscina é a casa de máquinas. Trabalhamos exclusivamente com bombas silenciosas e econômicas e tanques de filtro rotomoldados de alta resistência. Nosso pós-venda é lendário em Sete Lagoas — como elogiou Carlos Henrique no Google: 'Tive um pequeno problema na minha bomba, nem sequer quiseram verificar, já me deram uma nova na caixa, recomendo sempre!'.",
    benefits: [
      "Motobombas autoescorvantes de alta eficiência com pré-filtro transparente",
      "Tanques de filtro com areia especial de quartzo para retenção micrométrica",
      "Instalação hidráulica organizada com registros de fácil acesso e identificação",
      "Substituição ágil de equipamentos e suporte técnico imediato",
    ],
    ctaText: "Ver Bombas e Filtros",
    whatsappMessage:
      "Olá! Preciso de orçamento de bomba, filtro ou reforma de casa de máquinas com a Quatro Estações Piscinas.",
  },
  {
    id: "iluminacao-led-cascatas",
    title: "Iluminação em LED & Cascatas em Inox",
    shortDesc:
      "Crie cenários cinematográficos à noite: refletores subaquáticos em LED SMD/RGB em 12V com controle remoto e elegantes cascatas em aço inoxidável escovado.",
    badge: "Visual & Efeitos Noturnos",
    icon: Sun,
    image: "/cascata-led.jpg",
    fullDesc:
      "A iluminação transforma completamente a experiência noturna do seu quintal. Instalamos refletores LED subaquáticos em 12V com proteção total contra choques, troca de cores e modos dinâmicos por controle remoto. Complementamos com cascatas de inox (de piso, embutir ou parede) que mantêm a oxigenação contínua da água com o som relaxante de queda d'água.",
    benefits: [
      "Refletores LED de altíssimo brilho com segurança total em 12V",
      "Controle remoto touch screen para controle de cores, brilho e ritmos",
      "Cascatas duráveis em aço inox 304 e 316 resistentes ao sol e ao cloro",
      "Instalação com caixas de passagem e comandos elétricos protegidos",
    ],
    ctaText: "Conhecer Cascatas e Refletores",
    whatsappMessage:
      "Olá! Gostaria de conhecer os modelos de cascatas em inox e refletores LED para piscina na Quatro Estações.",
  },
  {
    id: "spas-banheiras-hidromassagem",
    title: "Spas de Hidromassagem & Banheiras",
    shortDesc:
      "Spas ergonômicos com jatos de hidroterapia direcionais, aquecedor elétrico integrado, cromoterapia e produtos químicos suaves especiais.",
    badge: "Hidroterapia & Conforto",
    icon: Sparkles,
    image: "/sauna-spa.jpg",
    fullDesc:
      "Para quem busca alívio muscular e momentos relaxantes a dois ou com a família, nossos spas e banheiras contam com assentos anatômicos, bicos de massagem pulsante, filtragem própria e aquecimento rápido. Também orientamos sobre os produtos químicos específicos que não espumam e preservam os motores e jatos.",
    benefits: [
      "Jatos direcionais reguláveis de alta pressão para massagem corporal",
      "Aquecimento incorporado com acionamento digital rápido",
      "Iluminação com cromoterapia em LED para alívio do estresse",
      "Químicos adequados para spas que mantêm a água cristalina sem espuma",
    ],
    ctaText: "Consultar Spas de Hidromassagem",
    whatsappMessage:
      "Olá! Gostaria de consultar modelos de spas de hidromassagem e banheiras na Quatro Estações Piscinas.",
  },
  {
    id: "produtos-quimicos-manutencao",
    title: "Produtos de Tratamento & Acessórios",
    shortDesc:
      "Linha completa de químicos para deixar sua piscina cristalina: cloro, clarificantes, algicidas, elevadores/redutores de pH, aspiradores, cabos e mangueiras.",
    badge: "Água Pura & Cristalina",
    icon: Droplets,
    image: "/tratamento-agua.jpg",
    fullDesc:
      "Cuidar da água é simples quando você tem a orientação correta. Na Quatro Estações Piscinas, além de encontrar os melhores produtos de manutenção, você recebe instruções precisas de dosagem para manter a água saudável e transparente, evitando olhos vermelhos e manchas na fibra. Temos tudo a pronta entrega em nossa loja na Av. Marechal Castelo Branco, 2111.",
    benefits: [
      "Cloro granulado estabilizado e pastilhas de dissolução lenta",
      "Clarificantes, decantadores, algicida choque e manutenção",
      "Acessórios completos: mangueiras flutuantes, ponteiras, escovas e peneiras",
      "Orientação técnica gratuita sobre equilíbrio de pH e alcalinidade",
    ],
    ctaText: "Pedir Produtos de Piscina",
    whatsappMessage:
      "Olá! Gostaria de comprar produtos de limpeza e químicos para minha piscina na Quatro Estações Piscinas.",
  },
];

// 16 Depoimentos Reais e Autênticos do Google Maps (4,9★ · 67 Avaliações)
interface CustomerReview {
  name: string;
  tag: string;
  rating: number;
  highlight: string;
  comment: string;
  ownerReply?: string;
}

const REVIEWS: CustomerReview[] = [
  {
    name: "Ana Paula Carvalho",
    tag: "4 avaliações · 13 fotos · Cliente Verificada",
    rating: 5,
    highlight: "Resolveu o Lago Ornamental e Aqueceu a Piscina",
    comment:
      "Gostaria de agradecer pelo excelente serviço prestado! É um profissional que realmente entende do assunto, sabe identificar as necessidades e oferecer a solução certa. No meu caso, resolveu o problema do lago ornamental, que outros não conseguiram. Fiquei muito satisfeita com o atendimento, a competência e a qualidade do trabalho. Recomendo de olhos fechados para quem busca um profissional sério e que realmente resolve. Hoje o lago está com a água cristalina e equilibrado pra qualidade de vida dos peixes!",
    ownerReply:
      "Obrigado Ana Paula pela oportunidade e confiança. Fico feliz por ter acertado seu lago ornamental e aquecido sua piscina ao mesmo tempo.",
  },
  {
    name: "Carlos Henrique",
    tag: "Cliente Verificado · 2 fotos",
    rating: 5,
    highlight: "Troca Imediata de Bomba na Caixa sem Burocracia",
    comment:
      "Ótimo atendimento, profissionais de alta qualidade, foram bem responsáveis em questão do tempo combinado, tive um pequeno problema na minha bomba nem se quer quiseram verificar ela já me deu uma nova na caixa, recomendo sempre!",
    ownerReply: "Carlos, agradecemos a preferência!",
  },
  {
    name: "Rafael Santos",
    tag: "Cliente Verificado",
    rating: 5,
    highlight: "Equipe Especializada da Venda até o Pós-Venda",
    comment:
      "A Quatro Estações me surpreendeu, desde o atendimento inicial, até o final da obra. Com equipe especializada de vendas até a instalação do produto! Um pós venda de atendimento rápido, onde precisei de uma orientação e verificação e fui rapidamente atendido pelo responsável técnico.",
    ownerReply: "Rafael, agradecemos a preferência!",
  },
  {
    name: "Silmara Duque",
    tag: "4 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Visita Técnica do Leo e Cuidado com a Estrutura",
    comment:
      "Passando para deixar registrado o profissionalismo da instalação e venda do aquecimento da minha piscina. Desde a visita técnica do Leo, conversas e instalação do pessoal, fui muito bem atendida, sanando as minhas dúvidas, tendo cuidado com minha estrutura e cumprindo o combinado. Super indico a empresa.",
    ownerReply:
      "Agradecemos a avaliação e nos colocamos à disposição sempre! Obrigada pela preferência!",
  },
  {
    name: "Januzia Alacoque",
    tag: "3 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Quase 3 Anos de Sonho Realizado com Dani e Leo",
    comment:
      "Comprei minha piscina com a Dani e com o Leonardo, era meu sonho, além de ter ficado linda, eles foram muito técnicos e nos dão auxílio até hoje, já fazem quase 3 anos e tudo certo, nunca tive problemas.",
    ownerReply: "Agradecemos a preferência! Sempre às ordens quando precisar!!",
  },
  {
    name: "Danilo Antonio Braga",
    tag: "Cliente Verificado · 3 fotos",
    rating: 5,
    highlight: "Melhor Natal da Família com a Piscina Nova",
    comment:
      "Tô muito satisfeito só tenho a agradecer a seriedade e o compromisso que vocês tiveram comigo, uma equipe responsável que me proporcionou o melhor Natal que já tive, obrigado a todos da equipe aprovo e recomendo que Deus abençoe cada um de vocês!",
    ownerReply: "Agradecemos a preferência!",
  },
  {
    name: "Hudson Evaristo",
    tag: "5 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Rapidez, Agilidade e Aquecimento para Banho",
    comment:
      "Ótimo atendimento, rapidez, agilidade. Instalação sem problemas e equipamento de excelente qualidade. Recomendo Quatro Estações Piscinas.",
    ownerReply:
      "Obrigado pela oportunidade Hudson. Aproveite seu novo equipamento de aquecimento para banho!",
  },
  {
    name: "Lisley Figueiredo",
    tag: "Local Guide · 12 avaliações",
    rating: 5,
    highlight: "Atendimento Especial Antes e Depois da Aquisição",
    comment:
      "Profissionais maravilhosos, atendimento especial antes e depois da aquisição. Recomendo demais!",
    ownerReply: "Agradecemos a preferência, sempre à disposição!",
  },
  {
    name: "Telles Fantini",
    tag: "Local Guide · 3 avaliações",
    rating: 5,
    highlight: "Técnico Muito Bom, Atencioso e Pontual",
    comment:
      "Ótimo lugar, excelente atendimento. Muito profissional. Técnico de instalação muito bom, atencioso, pontual.",
    ownerReply: "Obrigada pela preferência! Sempre às ordens.",
  },
  {
    name: "Edelcio Rabetti",
    tag: "3 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Piscina Leblon de 5 Metros com Acabamento Nota 10",
    comment:
      "Dentre todas as lojas que eu fui esta foi a que melhor me atendeu. Pessoal muito atencioso, tirou várias vezes as minhas dúvidas. O material da piscina Leblon de 5 metros é de boa qualidade acabamento muito bom.",
    ownerReply: "Sempre às ordens Sr. Edelcio!",
  },
  {
    name: "Tatiane Pereira",
    tag: "3 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Daniela Muito Paciente e Suporte Completo",
    comment:
      "Fui muito bem atendida pela Daniela e pelo Leonardo. Daniela muito paciente, tirou todas as dúvidas e deu todo o suporte. Fiquei satisfeita com a aquisição e com o atendimento.",
    ownerReply: "Gratos pela preferência e sempre à disposição!",
  },
  {
    name: "Warly Fraguas",
    tag: "6 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Aquecimento Solar e Piscina Maravilhosa",
    comment:
      "Conheci a empresa comprando produtos de piscina... depois coloquei aquecimento... melhor custo e benefício... e estou aproveitando bastante... Empresa que confiei e não me arrependo... A piscina está MARAVILHOSA!!!!!!",
    ownerReply: "Agradecemos a preferência, sempre à disposição.",
  },
  {
    name: "Thais Fonseca",
    tag: "2 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Assistência e Presteza Únicas",
    comment:
      "Tudo perfeito!!! Um atendimento excelente, que vai além da venda dos produtos, com uma assistência, presteza e atenção únicas! Recomendo e agradeço por toda assistência.",
    ownerReply: "Nós é que agradecemos, estamos à disposição sempre!",
  },
  {
    name: "Vanessa Silva",
    tag: "6 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Hiper Feliz com a Piscina e Aquecedor Solar",
    comment:
      "Satisfação, produtos de qualidade, estou hiper feliz com a aquisição da piscina e aquecedor solar. Vocês são um espetáculo!!!",
    ownerReply: "Obrigado, sempre à disposição!",
  },
  {
    name: "Helio Junio Campolina Ramos",
    tag: "Cliente Verificado",
    rating: 5,
    highlight: "Leo e Daniela São Especiais e Honestos",
    comment:
      "Ótimo atendimento e honestidade. Leo e Daniela são especiais. Super recomendo a todos!",
  },
  {
    name: "Wagner Arlan Almeida",
    tag: "4 avaliações · 1 foto",
    rating: 5,
    highlight: "Comprometimento e Melhor Loja da Cidade",
    comment:
      "Empresa com um grande comprometimento com os clientes. Aqui eu indico a todas as pessoas. Pra mim é a melhor loja da cidade.",
    ownerReply:
      "Agradecemos a preferência e as indicações! Sempre à disposição.",
  },
];

type GalleryCategory =
  | "todas"
  | "piscinas"
  | "aquecimento"
  | "saunas"
  | "lagos"
  | "iluminacao";

interface GalleryProject {
  src: string;
  title: string;
  category: GalleryCategory;
  tag: string;
  desc: string;
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    src: "/hero-pool.jpg",
    title: "Área de Lazer Completa com Piscina de Fibra Aguazul",
    category: "piscinas",
    tag: "Piscina com Prainha",
    desc: "Projeto residencial com deck amplo, prainha infantil, hidromassagem e paisagismo impecável em Sete Lagoas.",
  },
  {
    src: "/piscina-fibra.jpg",
    title: "Piscina de Fibra Instalada com Banco Hidro",
    category: "piscinas",
    tag: "Fibra de Alta Resistência",
    desc: "Acabamento de alto brilho, curvas suaves e escada integrada para total conforto da família.",
  },
  {
    src: "/aquecimento-solar.jpg",
    title: "Aquecimento Solar com Coletores de Alta Eficiência",
    category: "aquecimento",
    tag: "Piscina Aquecida",
    desc: "Placas solares de polipropileno no telhado garantindo água morna e relaxante nos 365 dias do ano.",
  },
  {
    src: "/sauna-spa.jpg",
    title: "Sauna a Vapor e Spa de Hidromassagem Aquecido",
    category: "saunas",
    tag: "Bem-Estar & Saúde",
    desc: "Ambiente privativo para relaxamento completo com gerador de vapor silencioso e spa terapêutico.",
  },
  {
    src: "/lago-ornamental.jpg",
    title: "Lago Ornamental com Água Cristalina e Carpas",
    category: "lagos",
    tag: "Balanço Biológico",
    desc: "Case de sucesso em Sete Lagoas: filtragem biológica e ozônio que mantém a água 100% transparente e saudável para os peixes.",
  },
  {
    src: "/cascata-led.jpg",
    title: "Cascata em Inox com Iluminação Subaquática LED 12V",
    category: "iluminacao",
    tag: "Cenário Noturno",
    desc: "Efeito relaxante do som de água corrente com refletores RGB controlados por controle remoto sem fio.",
  },
  {
    src: "/filtro-bomba.jpg",
    title: "Casa de Máquinas Montada com Bomba e Filtro",
    category: "piscinas",
    tag: "Equipamentos de Ponta",
    desc: "Tubulação setorizada com registros de alta qualidade, motobomba silenciosa e troca expressa na garantia.",
  },
  {
    src: "/loja-showroom-real.jpg",
    title: "Showroom Quatro Estações Piscinas na Av. Marechal Castelo Branco, 2111",
    category: "todas",
    tag: "Showroom Real em Sete Lagoas",
    desc: "Pátio com modelos de piscinas de fibra Aguazul em exposição, aquecedor solar e loja completa para sua área de lazer.",
  },
];

// Perguntas Frequentes
const FAQS = [
  {
    question: "Onde fica a Quatro Estações Piscinas e qual o horário de funcionamento?",
    answer:
      "Nossa loja e sede oficial está situada na Av. Marechal Castelo Branco, 2111 (esquina com a Rua Melo Figueiredo) - Bairro Santo Antonio, Sete Lagoas - MG (CEP 35701-240). Nosso horário de funcionamento é de segunda a sexta-feira, das 08:00 às 18:00, e aos sábados, das 08:00 às 12:00. Temos amplo espaço e facilidade de estacionamento.",
  },
  {
    question: "Quais são os modelos e tamanhos das Piscinas de Fibra Aguazul?",
    answer:
      "A Quatro Estações Piscinas é a revendedora oficial e autorizada da Aguazul Piscinas em Sete Lagoas. Contamos com a linha completa de piscinas de fibra: desde modelos compactos para pequenos quintais até piscinas amplas para sítios e chácaras (como a consagrada linha Leblon de 5 metros até piscinas de 10 metros ou mais), equipadas com prainha para crianças, bancos de hidromassagem e acabamento nobre em gel coat.",
  },
  {
    question: "Vocês trabalham com aquecimento solar para piscinas e também para banho?",
    answer:
      "Sim! Oferecemos soluções completas de aquecimento térmico: placas coletoras solares de polipropileno de alta absorção, bombas de calor trocadores inverter para piscinas, e também sistemas de aquecimento solar para banho residencial (chuveiros e pias). Como elogiou o cliente Hudson Evaristo no Google, instalamos com rapidez, agilidade e máxima qualidade.",
  },
  {
    question: "Como funciona o atendimento técnico para lagos ornamentais?",
    answer:
      "Somos especialistas reconhecidos em lagos ornamentais com carpas e peixes. Se o seu lago está com água verde, turva ou com problemas biológicos, fazemos o diagnóstico correto e a instalação de filtros biológicos, ozônio e esterilizadores UV. A cliente Ana Paula Carvalho registrou no Google: 'resolveu o problema do lago ornamental que outros não conseguiram, hoje o lago está com a água cristalina e equilibrado pra qualidade de vida dos peixes!'.",
  },
  {
    question: "Como funciona a garantia e assistência técnica de bombas e filtros?",
    answer:
      "Temos um compromisso inegociável com a tranquilidade do cliente. Nosso pós-venda é comprovado: como relatou Carlos Henrique, quando a bomba teve problema, fizemos a substituição imediata por uma nova na caixa. Trabalhamos com bombas e filtros das melhores marcas e oferecemos suporte contínuo antes, durante e após a instalação.",
  },
  {
    question: "Como agendar uma visita técnica ou solicitar um orçamento?",
    answer:
      "É muito rápido! Basta clicar em qualquer botão de WhatsApp nesta página ou entrar em contato pelo número (31) 3773-6264. O Leonardo ou a Daniela irão tirar todas as suas dúvidas com paciência, enviar o catálogo de modelos e agendar uma visita técnica sem compromisso.",
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
      {/* 1. TOP BAR INSTITUCIONAL — SETE LAGOAS, MINAS GERAIS */}
      <div className="bg-[#07172C] text-white text-[12px] py-2 px-4 border-b border-[#0F3260]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Lado Esquerdo: Endereço & Horários */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 text-slate-300">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#0A6DB0] shrink-0" />
              <span>Av. Marechal Castelo Branco, 2111 - Santo Antonio, Sete Lagoas - MG</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
            </div>
          </div>

          {/* Lado Direito: Avaliação Google, Telefone & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0B2344] px-2.5 py-0.5 rounded-full text-slate-200 border border-[#1E4E8C] hover:border-[#38BDF8] transition-colors text-[11px] whitespace-nowrap"
            >
              <div className="flex text-[#F7D511]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#F7D511]">{GOOGLE_RATING}★</span>
              <span className="text-slate-300 hidden xl:inline">({GOOGLE_REVIEW_COUNT} avaliações reais)</span>
            </a>

            <a
              href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#38BDF8]" />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#38BDF8] font-semibold hover:underline whitespace-nowrap"
            >
              <WhatsAppIcon size={14} className="text-[#22C55E]" />
              <span>WhatsApp Oficial</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER / NAVBAR PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 lg:gap-6">
          {/* Logo Oficial & Assinatura da Marca */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={LOGO_SRC}
                alt="Logo Aguazul Sete Lagoas - Quatro Estações Piscinas"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-[17px] sm:text-[19px] lg:text-[20px] font-black tracking-tight text-[#07172C] leading-none font-heading whitespace-nowrap group-hover:text-[#0A6DB0] transition-colors">
                  QUATRO ESTAÇÕES
                </span>
                <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#EE8220] bg-[#FFF7ED] px-2 py-0.5 rounded-full border border-[#FDBA74]/40 whitespace-nowrap">
                  Sete Lagoas
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#0A6DB0] tracking-wider uppercase mt-1 whitespace-nowrap">
                Piscinas &bull; Saunas &bull; Aquecimento
              </span>
            </div>
          </a>

          {/* Menu Desktop — 1 Linha Perfeita sem Quebras */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-[13px] xl:text-[14px] font-semibold text-slate-700">
            <a
              href="#piscinas"
              className="hover:text-[#0A6DB0] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:transition-all"
            >
              Piscinas
            </a>
            <a
              href="#aquecimento"
              className="hover:text-[#0A6DB0] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:transition-all"
            >
              Aquecimento
            </a>
            <a
              href="#servicos"
              className="hover:text-[#0A6DB0] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:transition-all"
            >
              Saunas &amp; Lagos
            </a>
            <a
              href="#sobre"
              className="hover:text-[#0A6DB0] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:transition-all"
            >
              Sobre Nós
            </a>
            <a
              href="#depoimentos"
              className="inline-flex items-center gap-1 hover:text-[#0A6DB0] transition-colors whitespace-nowrap py-1"
            >
              <span>Avaliações</span>
              <span className="text-[11px] font-extrabold text-[#D97706] bg-[#FEF9C3] px-1.5 py-0.2 rounded-full border border-[#FDE047]/60">
                ★ 4,9
              </span>
            </a>
            <a
              href="#contato"
              className="hover:text-[#0A6DB0] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:transition-all"
            >
              Loja Física
            </a>
          </nav>

          {/* CTA Header WhatsApp */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da Quatro Estações Piscinas.")}
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
            className="lg:hidden p-2 text-slate-700 hover:text-[#0A6DB0] focus:outline-none"
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
                    src={LOGO_SRC}
                    alt="Logo Aguazul Sete Lagoas"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-[#07172C]">QUATRO ESTAÇÕES</div>
                  <div className="text-[11px] font-bold text-[#0A6DB0]">Aguazul Sete Lagoas</div>
                </div>
              </div>
              <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-[15px]">
                <a
                  href="#piscinas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0A6DB0] py-1 border-b border-slate-100"
                >
                  Piscinas de Fibra Aguazul
                </a>
                <a
                  href="#aquecimento"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0A6DB0] py-1 border-b border-slate-100"
                >
                  Aquecimento Solar para Piscina &amp; Banho
                </a>
                <a
                  href="#servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0A6DB0] py-1 border-b border-slate-100"
                >
                  Saunas, Lagos &amp; Equipamentos
                </a>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0A6DB0] py-1 border-b border-slate-100"
                >
                  Sobre Nós (Leo &amp; Dani)
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0A6DB0] py-1 border-b border-slate-100"
                >
                  Depoimentos Reais (4,9★ Google)
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#0A6DB0] py-1"
                >
                  Localização da Loja Física
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
                  <span>Falar no WhatsApp: (31) 3773-6264</span>
                </GlowingButton>
                <div className="text-center text-xs text-slate-500 pt-1">
                  Av. Marechal Castelo Branco, 2111 - Sete Lagoas
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION DE ALTA CONVERSÃO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#07172C] via-[#0B2344] to-[#07172C] text-white pt-10 pb-20 sm:pt-16 sm:pb-28">
        {/* Elementos Gráficos de Fundo Luminoso / Ondas & Sol */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A6DB0]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#EE8220]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#F7D511]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lado Esquerdo: Textos & CTAs (7 colunas) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge de Destaque / Google Rating com Logo Oficial */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-1.5 pr-4 rounded-full shadow-lg">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white shrink-0 border border-white/30 shadow-xs flex items-center justify-center">
                  <Image
                    src={LOGO_SRC}
                    alt="Logo Aguazul Sete Lagoas"
                    fill
                    sizes="40px"
                    className="object-contain p-0.5"
                    priority
                  />
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="font-extrabold text-[#F7D511] flex items-center gap-1">
                    ★ 4,9 no Google
                  </span>
                  <span className="text-white/40">&bull;</span>
                  <span className="text-white font-bold">Revendedora Oficial Aguazul Sete Lagoas</span>
                </div>
              </div>

              {/* Headline Principal H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] font-heading">
                A sua área de lazer dos sonhos com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00A3E0] to-[#F7D511]">
                  Piscinas Aguazul, Saunas &amp; Aquecimento
                </span>{" "}
                o ano inteiro.
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Valorizamos áreas de lazer e realizamos sonhos tornando cada vez mais aconchegante o seu lar! Do projeto e escavação à instalação completa, aquecimento solar e assistência pós-venda premiada com Leonardo e Daniela.
              </p>

              {/* Pills de Diferenciais */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 pb-2 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Piscinas de Fibra 1ª Linha</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EE8220] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Aquecimento para Piscina &amp; Banho</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#F7D511] shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">Suporte Técnico Nota 10</span>
                </div>
              </div>

              {/* Botões de Ação Hero */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá Leonardo e Daniela! Gostaria de solicitar um orçamento para a minha piscina/área de lazer.")}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto text-base shadow-lg shadow-green-600/30 font-bold"
                >
                  <WhatsAppIcon size={20} />
                  <span>Solicitar Orçamento sem Compromisso</span>
                </GlowingButton>

                <GlowingButton
                  href="#piscinas"
                  variant="sunset"
                  size="lg"
                  className="w-full sm:w-auto text-base"
                >
                  <span>Conhecer Modelos de Piscinas</span>
                  <ArrowRight className="w-4 h-4" />
                </GlowingButton>
              </div>

              {/* Resumo de Prova Social Google */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#0A6DB0] border-2 border-[#07172C] flex items-center justify-center font-bold text-[10px] text-white">AP</div>
                  <div className="w-7 h-7 rounded-full bg-[#EE8220] border-2 border-[#07172C] flex items-center justify-center font-bold text-[10px] text-white">CH</div>
                  <div className="w-7 h-7 rounded-full bg-[#16A34A] border-2 border-[#07172C] flex items-center justify-center font-bold text-[10px] text-white">RS</div>
                  <div className="w-7 h-7 rounded-full bg-[#4C3C78] border-2 border-[#07172C] flex items-center justify-center font-bold text-[10px] text-white">SD</div>
                </div>
                <span>
                  <strong className="text-white">Mais de 67 famílias atendidas</strong> e satisfeitas em Sete Lagoas e região
                </span>
              </div>
            </div>

            {/* Lado Direito: Card Visual com Foto Hero e Emblema (5 colunas) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#1E4E8C] shadow-2xl bg-[#0B2344]">
                {/* Imagem do Hero */}
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/hero-pool.jpg"
                    alt="Piscina de Fibra Aguazul com Prainha e Deck em Sete Lagoas"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07172C] via-transparent to-transparent opacity-80" />

                  {/* Badge Flutuante no Topo com o Logo Oficial */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-2.5 text-xs font-bold text-[#07172C] shadow-xl">
                    <div className="relative w-8 h-8 shrink-0 rounded-lg overflow-hidden bg-white border border-slate-100 p-0.5">
                      <Image
                        src={LOGO_SRC}
                        alt="Emblema Aguazul"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-[#0A6DB0] uppercase tracking-wider leading-tight">Revenda Oficial</div>
                      <div className="text-[12px] font-extrabold text-[#07172C] leading-tight">Aguazul Sete Lagoas</div>
                    </div>
                  </div>

                  {/* Selo no Rodapé da Imagem */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#07172C]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#38BDF8] uppercase tracking-wider">
                        Atendimento com os Proprietários
                      </div>
                      <div className="text-sm font-extrabold text-white">
                        Leonardo &amp; Daniela
                      </div>
                    </div>
                    <a
                      href={getWhatsAppUrl("Olá Leo e Dani! Vi o site e gostaria de tirar uma dúvida.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <WhatsAppIcon size={13} />
                      <span>Falar Agora</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Flutuante de Avaliação em Destaque */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white text-[#07172C] p-3.5 rounded-xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="p-2.5 rounded-lg bg-[#FEF9C3] text-[#D97706] shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#07172C]">
                    4,9 Estrelas no Google
                  </div>
                  <div className="text-[11px] text-slate-600 line-clamp-1">
                    &ldquo;Equipe responsável, atendimento nota 10!&rdquo;
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
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0A6DB0] font-heading">
                4,9★
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#07172C]">
                Google Avaliações
              </div>
              <div className="text-[11px] text-slate-500">
                67 avaliações públicas reais
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#EE8220] font-heading">
                4 Estações
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#07172C]">
                Lazer o Ano Inteiro
              </div>
              <div className="text-[11px] text-slate-500">
                Aquecimento solar e bombas de calor
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0A6DB0] font-heading">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#07172C]">
                Pós-Venda &amp; Suporte
              </div>
              <div className="text-[11px] text-slate-500">
                Auxílio permanente até anos após a obra
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#16A34A] font-heading">
                Aguazul
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#07172C]">
                Revenda Autorizada
              </div>
              <div className="text-[11px] text-slate-500">
                Piscinas de fibra com garantia de fábrica
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PISCINAS DE FIBRA AGUAZUL EM DESTAQUE */}
      <section id="piscinas" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="eyebrow-blue">Revenda Autorizada Aguazul Sete Lagoas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
              Piscinas de Fibra com Durabilidade e Beleza Incomparáveis
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Realize o sonho da piscina própria com a marca sinônimo de segurança estrutural em todo o Brasil. Modelos com prainha, escada e hidromassagem que transformam o seu quintal.
            </p>
          </div>

          {/* Card de Destaque da Marca com o Logo Oficial */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-12 max-w-5xl mx-auto">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 bg-white p-2 rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
              <Image
                src={LOGO_SRC}
                alt="Logo Aguazul Sete Lagoas"
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F8FF] text-[#0A6DB0] text-xs font-extrabold uppercase tracking-wider">
                Concessionária Exclusiva em Sete Lagoas
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#07172C] font-heading">
                Quatro Estações Piscinas &bull; Aguazul Sete Lagoas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A Aguazul é referência nacional em piscinas de fibra de vidro de alta tecnologia. Cada piscina conta com acabamento reforçado com gel coat naval, proteção contra osmose, garantia estrutural e os formatos mais modernos com prainha, escada e hidromassagem.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Foto Grande da Piscina de Fibra com Detalhes */}
            <div className="lg:col-span-7">
              <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/piscina-fibra.jpg"
                  alt="Instalação de Piscina de Fibra Aguazul em Sete Lagoas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-[#EE8220] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Destaque da Linha Aguazul
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading">
                    Modelos Clássicos &amp; Modernos (Linha Leblon e Muito Mais)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Acabamento com gel coat de alta densidade, resistente aos raios UV e de toque acetinado.
                  </p>
                </div>
              </div>
            </div>

            {/* Vantagens das Piscinas Aguazul */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#F0F8FF] text-[#0A6DB0] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#07172C] text-sm sm:text-base">
                      Garantia de Fábrica &amp; Estrutura Reforçada
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Construção em fibra de vidro multicamadas com reforços nas bordas e cantos para evitar trincas e deformações.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#FFF7ED] text-[#EE8220] shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#07172C] text-sm sm:text-base">
                      Prainha Integrada para Crianças e Banhos de Sol
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Área rasa com degraus suaves ideal para instalar espreguiçadeiras molhadas, descansar e garantir diversão segura para os pequenos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#FEF9C3] text-[#D97706] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#07172C] text-sm sm:text-base">
                      Instalação Rápida e com Pouca Sujeira
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Diferente da alvenaria que leva meses, a piscina de fibra é instalada com precisão em poucos dias, pronta para ser aproveitada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#07172C] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#38BDF8] font-bold uppercase">
                    Quer ver os tamanhos disponíveis?
                  </div>
                  <div className="text-sm font-bold">
                    Peça o catálogo digital completo
                  </div>
                </div>
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de receber o catálogo completo com medidas e fotos das Piscinas de Fibra Aguazul.")}
                  target="_blank"
                  variant="blue"
                  size="sm"
                >
                  <WhatsAppIcon size={14} />
                  <span>Pedir Catálogo no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUTOS & SERVIÇOS PRINCIPAIS (GRID COM MODAL INTERATIVO) */}
      <section id="servicos" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-blue">Soluções Completas para Área de Lazer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
              Tudo o que Você Precisa em um Único Lugar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Da piscina ao aquecimento, saunas, lagos ornamentais, produtos químicos e assistência técnica. Clique em qualquer card para ver todos os detalhes e diferenciais.
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

                    <div className="absolute top-3 left-3 bg-[#07172C]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#BAE6FD] border border-[#0A6DB0]/40">
                      {service.badge}
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#F0F8FF] text-[#0A6DB0]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-[16px] text-[#07172C] group-hover:text-[#0A6DB0] transition-colors line-clamp-1 font-heading">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0A6DB0] group-hover:translate-x-1 transition-transform">
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
              <div className="relative h-56 w-full bg-[#07172C]">
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
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors z-10"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="bg-[#EE8220] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
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
                    Sobre Esta Solução
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0A6DB0] uppercase tracking-wider mb-3">
                    Principais Benefícios &amp; Diferenciais
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 bg-[#F0F8FF] p-3 rounded-lg border border-[#BAE6FD]/40 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0A6DB0] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer do Modal com CTA WhatsApp */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Atendimento técnico com Leo e Dani em Sete Lagoas
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

      {/* 7. SEÇÃO DE AQUECIMENTO SOLAR PARA PISCINA & BANHO */}
      <section id="aquecimento" className="py-16 sm:py-24 bg-[#07172C] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EE8220]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#0A6DB0]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Texto Aquecimento */}
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow-orange">Água Quente nos 365 Dias do Ano</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
                Piscina Quente no Inverno e Verão: Aquecimento Solar &amp; Bombas de Calor
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Você investe na área de lazer e só usa a piscina 3 meses por ano? Com o sistema de aquecimento correto dimensionado pelo Leonardo, sua piscina fica sempre em temperatura agradável com baixíssimo consumo de energia.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <Flame className="w-5 h-5 text-[#EE8220] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Coletores Solares de Polipropileno
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Absorvem a radiação solar mesmo em dias frescos, com vazão otimizada e resistência aos químicos da piscina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <Zap className="w-5 h-5 text-[#F7D511] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Aquecimento Solar para Banho Residencial
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Também instalamos sistemas para chuveiros e torneiras com alta economia na conta de energia da sua família.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">
                      Capas Térmicas &amp; Controladores Digitais
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Retêm o calor durante a noite e acionam a bomba de recirculação automaticamente apenas quando há ganho térmico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá Leonardo! Gostaria de fazer uma visita técnica para dimensionar o aquecedor da minha piscina.")}
                  target="_blank"
                  variant="sunset"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Solicitar Visita Técnica para Aquecimento</span>
                </GlowingButton>
              </div>
            </div>

            {/* Imagem Aquecimento com Depoimento da Silmara Duque */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border-2 border-[#1E4E8C] shadow-2xl">
                <Image
                  src="/aquecimento-solar.jpg"
                  alt="Sistema de Aquecimento Solar de Piscina Instalado pela Quatro Estações"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172C] via-transparent to-transparent opacity-75" />
              </div>

              {/* Depoimento em Destaque */}
              <div className="bg-[#0B2344] p-5 rounded-xl border border-[#1E4E8C] space-y-2">
                <div className="flex items-center gap-1 text-[#F7D511]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-2">Silmara Duque &bull; Avaliação no Google</span>
                </div>
                <p className="text-xs text-slate-200 italic leading-relaxed">
                  &ldquo;Passando para deixar registrado o profissionalismo da instalação e venda do aquecimento da minha piscina. Desde a visita técnica do Leo, conversas e instalação do pessoal, fui muito bem atendida, sanando as minhas dúvidas, tendo cuidado com minha estrutura e cumprindo o combinado. Super indico a empresa.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOBRE A EMPRESA & EQUIPE (LEONARDO & DANIELA) */}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto e Card de Confiança */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/sobre-lazer-pool.jpg"
                  alt="Área de Lazer e Família - Quatro Estações Piscinas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
                    Compromisso &amp; Família
                  </div>
                  <h3 className="text-xl font-bold font-heading">
                    &ldquo;Realizamos sonhos tornando cada vez mais aconchegante o seu lar.&rdquo;
                  </h3>
                </div>
              </div>

              {/* Selo Flutuante */}
              <div className="absolute -top-4 -right-4 bg-[#0A6DB0] text-white p-4 rounded-xl shadow-xl border border-white/20 hidden sm:block text-center">
                <div className="text-2xl font-black font-heading">4,9★</div>
                <div className="text-[10px] font-bold uppercase tracking-wider">
                  67 Avaliações
                </div>
              </div>
            </div>

            {/* Texto Sobre Nós */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow-blue">Quem Somos &bull; Quatro Estações Piscinas</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
                Mais que Vender Piscinas: Acompanhamos Você Antes, Durante e Depois da Obra
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Sob a liderança dedicada do <strong>Leonardo (Leo)</strong> e da <strong>Daniela (Dani)</strong>, a Quatro Estações Piscinas construiu uma reputação de seriedade e carinho em Sete Lagoas e em todos os municípios vizinhos.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Enquanto muitas lojas no mercado simplesmente entregam a piscina e esquecem o cliente, nosso modelo é fundamentado na responsabilidade técnica: visitamos o seu local, auxiliamos no projeto hidráulico, orientamos a escavação, instalamos o sistema de aquecimento e prestamos assistência contínua por anos.
              </p>

              {/* Destaque Januzia Alacoque */}
              <div className="p-4 rounded-xl bg-[#F0F8FF] border border-[#BAE6FD] text-slate-800 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#0A6DB0]">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Depoimento Real de Januzia Alacoque:</span>
                </div>
                <p className="italic">
                  &ldquo;Comprei minha piscina com a Dani e com o Leonardo, era meu sonho, além de ter ficado linda, eles foram muito técnicos e nos dão auxílio até hoje, já fazem quase 3 anos e tudo certo, nunca tive problemas.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A6DB0]/10 flex items-center justify-center text-[#0A6DB0] shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#07172C]">Atendimento Paciente</h4>
                    <p className="text-xs text-slate-500">Tiramos todas as dúvidas antes da compra</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EE8220]/10 flex items-center justify-center text-[#EE8220] shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#07172C]">Pós-Venda que Resolve</h4>
                    <p className="text-xs text-slate-500">Substituição rápida e suporte permanente</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá Dani e Leo! Gostaria de conversar sobre um projeto para o meu espaço de lazer.")}
                  target="_blank"
                  variant="blue"
                  size="md"
                >
                  <WhatsAppIcon size={16} />
                  <span>Falar Diretamente com Leo &amp; Dani</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEPOIMENTOS REAIS DO GOOGLE MAPS (4,9★ · 67 AVALIAÇÕES) */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-gold">Prova Social &bull; Google Avaliações</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
              O Que Nossos Clientes Dizem Sobre Nosso Trabalho
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Comprovado no Google com nota 4,9★ e mais de 67 avaliações públicas espontâneas de quem confiou sua área de lazer à Quatro Estações Piscinas.
            </p>

            {/* Google Badge Institucional */}
            <div className="pt-2">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-xs hover:border-[#0A6DB0] transition-colors text-xs font-bold text-slate-800"
              >
                <span className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span>Nota 4,9 no Google Maps (67 avaliações)</span>
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
                    <div className="flex text-[#F59E0B]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#0A6DB0] bg-[#F0F8FF] px-2 py-0.5 rounded">
                      Google Review
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-[#07172C] font-heading">
                    {review.highlight}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>

                  {review.ownerReply && (
                    <div className="p-3 bg-slate-50 border-l-2 border-[#0A6DB0] rounded-r-lg text-[11px] text-slate-500">
                      <strong className="text-[#07172C] block not-italic">
                        Resposta do proprietário:
                      </strong>
                      <span className="italic">{review.ownerReply}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-[#07172C]">{review.name}</h4>
                    <span className="text-[10px] text-slate-400 block">{review.tag}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#0A6DB0]/10 text-[#0A6DB0] flex items-center justify-center font-bold text-[11px]">
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
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A6DB0] hover:underline"
            >
              <span>Ver todas as 67 avaliações diretamente no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. GALERIA DE PROJETOS E FOTOS REAIS COM FILTRO */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="eyebrow-blue">Galeria de Instalações &amp; Ambientes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
              Projetos Realizados em Sete Lagoas e Região
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Veja fotos de piscinas de fibra, sistemas de aquecimento solar, saunas, lagos ornamentais e iluminação entregues com o padrão de qualidade Quatro Estações.
            </p>
          </div>

          {/* Abas de Filtro da Galeria */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "todas", label: "Todos os Projetos" },
              { id: "piscinas", label: "Piscinas de Fibra" },
              { id: "aquecimento", label: "Aquecimento Solar" },
              { id: "saunas", label: "Saunas & Spas" },
              { id: "lagos", label: "Lagos Ornamentais" },
              { id: "iluminacao", label: "Iluminação & Cascatas" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveGalleryTab(tab.id as GalleryCategory)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeGalleryTab === tab.id
                    ? "bg-[#0A6DB0] text-white shadow-sm"
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

                  <div className="absolute top-3 left-3 bg-[#07172C]/85 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-bold text-white border border-white/20">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tudo o que você precisa saber sobre prazos de instalação, modelos Aguazul, garantia e funcionamento dos sistemas de aquecimento.
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
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#07172C] text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0A6DB0] shrink-0 transition-transform duration-200 ${
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

      {/* 12. LOCALIZAÇÃO & VISITA À LOJA FÍSICA (SETE LAGOAS - MG) */}
      <section id="contato" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="eyebrow-blue">Visite Nossa Sede Própria</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07172C] font-heading tracking-tight">
              Loja Física &amp; Showroom em Sete Lagoas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Venha ver pessoalmente os modelos de piscinas de fibra Aguazul em exposição, os sistemas de aquecimento solar e tirar todas as suas dúvidas com o Leonardo e a Daniela.
            </p>
          </div>

          {/* Cards Visuais Lado a Lado: Foto Real da Loja + Mapa Interativo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            {/* Card 1: Foto Real do Showroom */}
            <div className="space-y-4">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 group">
                <Image
                  src="/loja-showroom-real.jpg"
                  alt="Fachada e Pátio do Showroom Quatro Estações Piscinas em Sete Lagoas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#07172C]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#38BDF8]/40 flex items-center gap-2 text-xs font-bold text-white shadow-md">
                  <Store className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Foto Real da Loja &amp; Showroom</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="text-xs font-bold text-[#F7D511] uppercase tracking-wider">
                    Pátio de Piscinas &bull; Av. Marechal Castelo Branco, 2111
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-heading">
                    4 Estações Piscina &amp; Conforto &bull; Aguazul
                  </h3>
                  <p className="text-xs text-slate-200">
                    Piscinas de fibra em exposição vertical, aquecedores solares para banho e piscina e showroom completo.
                  </p>
                </div>
              </div>

              {/* Destaques do Showroom */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#F0F8FF] rounded-xl border border-[#BAE6FD]/40">
                  <div className="text-xs font-bold text-[#0A6DB0]">Pátio com Piscinas</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Modelos expostos</div>
                </div>
                <div className="p-3 bg-[#FFF7ED] rounded-xl border border-[#FDBA74]/40">
                  <div className="text-xs font-bold text-[#EE8220]">Aquecedor Solar</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Sistemas funcionais</div>
                </div>
                <div className="p-3 bg-[#FEF9C3] rounded-xl border border-[#FDE047]/50">
                  <div className="text-xs font-bold text-[#D97706]">Fácil Acesso</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Estacionamento fácil</div>
                </div>
              </div>
            </div>

            {/* Card 2: Mapa Embed Interativo + Rotas */}
            <div className="space-y-4">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <iframe
                  title="Localização Quatro Estações Piscinas Sete Lagoas"
                  src="https://maps.google.com/maps?q=Av.+Marechal+Castelo+Branco,+2111+-+Santo+Antonio,+Sete+Lagoas+-+MG,+35701-240&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A6DB0] hover:bg-[#085990] text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-xs"
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

          {/* Dados Cadastrais & Horários em Linha */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#F0F8FF] text-[#0A6DB0] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#07172C]">Endereço Completo:</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {ADDRESS_DISPLAY}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#FFF7ED] text-[#EE8220] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#07172C]">Horário de Funcionamento:</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Segunda a Sexta: 08:00 às 18:00<br />
                  Sábado: 08:00 às 12:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-[#F0FDF4] text-[#16A34A] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#07172C]">Contato Direto:</h4>
                <p className="text-xs text-slate-600 mt-0.5 font-bold">
                  {PHONE_DISPLAY}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#16A34A] font-bold hover:underline inline-block mt-0.5"
                >
                  Chamar no WhatsApp agora &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. BANNER CTA FINAL DE ALTA CONVERSÃO */}
      <section className="bg-gradient-to-r from-[#07172C] via-[#0B2344] to-[#0A6DB0] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="bg-[#F7D511] text-[#07172C] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Atendimento Personalizado
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight">
            Pronto para Transformar Seu Quintal na Área de Lazer Perfeita?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Converse agora com o Leonardo e a Daniela pelo WhatsApp. Peça um orçamento sem compromisso, tire dúvidas técnicas e conheça as melhores condições de Sete Lagoas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <GlowingButton
              href={getWhatsAppUrl("Olá Leonardo e Daniela! Gostaria de um orçamento para a minha piscina/área de lazer.")}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto text-base shadow-xl shadow-green-600/30 font-bold"
            >
              <WhatsAppIcon size={20} />
              <span>Chamar no WhatsApp: (31) 3773-6264</span>
            </GlowingButton>

            <a
              href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/30 text-white font-bold hover:bg-white/10 transition-colors text-sm w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-[#38BDF8]" />
              <span>Ligar: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. FOOTER INSTITUCIONAL COMPLETO */}
      <footer className="bg-[#07172C] text-white border-t border-[#0F3260] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Coluna 1: Identidade, Logo & Slogan (4 colunas) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white p-1.5 rounded-2xl shadow-xl shrink-0 flex items-center justify-center border border-white/20">
                  <Image
                    src={LOGO_SRC}
                    alt="Logo Aguazul Sete Lagoas - Quatro Estações Piscinas"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-black font-heading text-white">
                    QUATRO ESTAÇÕES
                  </div>
                  <div className="text-xs font-bold text-[#38BDF8]">
                    Piscinas &bull; Aguazul Sete Lagoas
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Revendedora Oficial Aguazul
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Valorizamos áreas de lazer e realizamos sonhos tornando cada vez mais aconchegante o seu lar! Revenda exclusiva Aguazul em Sete Lagoas com piscinas de fibra, aquecimento solar, saunas e lagos ornamentais.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#F7D511] font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>4,9 Estrelas &bull; 67 Avaliações no Google Maps</span>
              </div>
            </div>

            {/* Coluna 2: Soluções & Produtos (3 colunas) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
                Nossas Soluções
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a href="#piscinas" className="hover:text-white transition-colors">
                    Piscinas de Fibra Aguazul (Linha Leblon)
                  </a>
                </li>
                <li>
                  <a href="#aquecimento" className="hover:text-white transition-colors">
                    Aquecimento Solar para Piscinas
                  </a>
                </li>
                <li>
                  <a href="#aquecimento" className="hover:text-white transition-colors">
                    Aquecimento Solar para Banho
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Saunas a Vapor &amp; Secas
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Lagos Ornamentais &amp; Filtragem Biológica
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Filtros, Bombas &amp; Assistência Técnica
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Iluminação LED 12V &amp; Cascatas em Inox
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Regiões Atendidas (2 colunas) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#38BDF8]">
                Cidades Atendidas
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>Sete Lagoas - MG</li>
                <li>Prudente de Morais</li>
                <li>Inhaúma</li>
                <li>Matozinhos</li>
                <li>Capim Branco</li>
                <li>Pedro Leopoldo</li>
                <li>Paraopeba</li>
                <li>Funilândia e Baldim</li>
              </ul>
            </div>

            {/* Coluna 4: Contatos Oficiais (3 colunas) */}
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
                    (31) 3773-6264 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#EE8220] shrink-0" />
                  <span className="text-[11px] leading-tight">
                    Av. Marechal Castelo Branco, 2111 (esq. Melo Figueiredo) - Sete Lagoas
                  </span>
                </div>
                <div className="pt-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="p-1.5 rounded-lg bg-white/10 text-white">IG</span>
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Créditos */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} Quatro Estações Piscinas &bull; Revendedora Oficial Aguazul Sete Lagoas. Todos os direitos reservados.
            </div>
            <div className="text-[11px] text-slate-500">
              Esquina com Rua Melo Figueiredo, Av. Marechal Castelo Branco, 2111 - Santo Antonio, Sete Lagoas - MG
            </div>
          </div>
        </div>
      </footer>

      {/* 15. BOTÃO FLUTUANTE DO WHATSAPP COM BADGE PULSANTE */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={getWhatsAppUrl("Olá Leonardo e Daniela! Gostaria de um orçamento para a minha piscina ou área de lazer.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-subtle-pulse"
          aria-label="Falar no WhatsApp com Quatro Estações Piscinas"
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
