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
  Camera,
  Navigation,
  Check,
  ExternalLink,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Zap,
  Tag,
  Store,
  type LucideIcon,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Modelo Piscinas (Belo Horizonte - MG)
const COMPANY_NAME = "Modelo Piscinas";
const COMPANY_FULL_NAME =
  "Modelo Piscinas BH • Produtos, Equipamentos & Aquecimento";
const BRAND_SUBTITLE =
  "Sua piscina em boas mãos: do tratamento ao aquecimento. A loja mais recomendada da Região Leste e de Belo Horizonte. Cloro Clorofort a pronta entrega, crepinas Sibrape, filtros, bombas, aquecedores e manutenção especializada com nota 4,9★ no Google.";

const WHATSAPP_NUMBER = "5531983961882";
const PHONE_DISPLAY = "(31) 98396-1882";
const LANDLINE_DISPLAY = "(31) 3786-4004";
const EMAIL_CONTACT = "contato@modelopiscinas.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/modelopiscinas/";
const INSTAGRAM_HANDLE = "@modelopiscinas";

const ADDRESS_DISPLAY =
  "Av. Itaituba, 173 - Boa Vista, Belo Horizonte - MG, 31060-427";
const CITIES_SERVED =
  "Belo Horizonte (Região Leste, Boa Vista, Santa Inês, Sagrada Família, Horto, Nova Floresta, Floresta, Pampulha, Centro-Sul), Sabará, Santa Luzia, Contagem, Betim e toda Grande BH";

const GOOGLE_REVIEW_COUNT = "23";
const GOOGLE_RATING = "4.9";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Modelo+Piscinas+Boa+Vista+Belo+Horizonte+MG";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Itaituba%2C+173+-+Boa+Vista%2C+Belo+Horizonte+-+MG%2C+31060-427";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Av+Itaituba+173+Boa+Vista+Belo+Horizonte+MG";

// Assets Oficiais da Modelo Piscinas
const LOGO_SRC = "/logo-trimmed.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de falar com a Modelo Piscinas sobre produtos, peças ou assistência técnica para a minha piscina.";
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

function InstagramIcon({
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

// Interface dos Serviços e Linhas de Produtos da Modelo Piscinas
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
    id: "produtos-quimicos-clorofort",
    title: "Produtos Químicos & Cloro Clorofort",
    shortDesc:
      "Linha completa de tratamento químico com Cloro Clorofort sempre disponível, algicidas, clarificantes, elevadores/redutores de pH e kits de teste com orientação técnica especializada.",
    badge: "Cloro Clorofort em Estoque",
    icon: Droplets,
    image: "/tratamento-agua.jpg",
    fullDesc:
      "Na Modelo Piscinas você sempre encontra cloro de alta pureza e ação prolongada. Como destacam nossos clientes no Google, 'sempre tem cloro da Clorofort disponível'. Trabalhamos com produtos certificados para manter a sua piscina limpa, cristalina e protegida de bactérias, algas e turbidez, com consultoria personalizada para a dosagem exata do seu volume de água.",
    benefits: [
      "Cloro Clorofort granulado e em pastilhas sempre à pronta entrega",
      "Clarificantes de ação rápida e algicidas de choque e manutenção",
      "Kits de medição de pH, alcalinidade e cloro livre para controle perfeito",
      "Consultoria técnica gratuita na loja para recuperar água verde ou turva",
    ],
    ctaText: "Consultar Produtos Químicos no WhatsApp",
    whatsappMessage:
      "Olá! Gostaria de consultar os preços e disponibilidade de cloro Clorofort e produtos químicos na Modelo Piscinas.",
  },
  {
    id: "pecas-sibrape-reposicao",
    title: "Peças de Reposição & Linha Sibrape Rara",
    shortDesc:
      "O endereço em BH para encontrar crepinas de filtro Sibrape, uniões, tampas de acrílico, borrachas de vedação e conexões específicas que você não acha em lugar nenhum.",
    badge: "Especialista em Peças Raras",
    icon: Wrench,
    image: "/filtro-bomba.jpg",
    fullDesc:
      "Quantas vezes você procurou uma peça específica de filtro ou bomba e não encontrou em loja nenhuma de Belo Horizonte? Na Modelo Piscinas, clientes como Romero Fernandes comemoram: 'Achei crepina do filtro Sibrape que não achava em lugar nenhum!'. Temos um estoque abrangente de peças originais, crepinas, manômetros, cestos de pré-filtro e uniões para resolver o seu problema no mesmo dia.",
    benefits: [
      "Crepinas originais Sibrape e multimarcas para todos os modelos de filtro",
      "Manômetros de pressão em inox e válvulas multivias completas",
      "Tampas transparentes de pré-filtro, anéis O-ring e juntas de vedação",
      "Atendimento técnico que ajuda a identificar o modelo exato da sua peça",
    ],
    ctaText: "Verificar Disponibilidade de Peça",
    whatsappMessage:
      "Olá! Estou procurando uma peça de reposição / crepina Sibrape e gostaria de checar se vocês têm na Modelo Piscinas.",
  },
  {
    id: "filtros-bombas-equipamentos",
    title: "Filtros & Motobombas de Alta Eficiência",
    shortDesc:
      "Motobombas silenciosas autoescorvantes e filtros de areia de alta retenção para piscinas residenciais, sítios e condomínios com o melhor preço da região.",
    badge: "Equipamentos com Garantia",
    icon: Waves,
    image: "/piscina-obra-6.jpg",
    fullDesc:
      "O coração da sua piscina precisa de equipamentos confiáveis e duráveis. A Modelo Piscinas trabalha com as marcas líderes do mercado nacional em motobombas e tanques de filtro rotomoldados e soprados. Nossos consultores calculam a vazão exata necessária para a litragem da sua piscina, evitando desperdício de energia e garantindo uma recirculação perfeita.",
    benefits: [
      "Filtros de areia de alto rendimento que reduzem o uso de químicos",
      "Motobombas autoescorvantes com pré-filtro transparente e motor silencioso",
      "Areia especial tratada e lavada para recarga periódica de filtros",
      "Preços justos e condições facilitadas com pronta entrega em BH",
    ],
    ctaText: "Pedir Cotação de Filtro ou Bomba",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para filtro, bomba ou troca de areia com a Modelo Piscinas.",
  },
  {
    id: "aquecimento-solar-bombas-calor",
    title: "Aquecimento Solar & Bombas de Calor",
    shortDesc:
      "Piscina aquecida os 365 dias do ano. Sistemas econômicos com placas solares de polipropileno de alta absorção e trocadores de calor inverter silenciosos.",
    badge: "Piscina Quente o Ano Todo",
    icon: Flame,
    image: "/aquecedores.jpg",
    fullDesc:
      "Aproveite ao máximo a sua área de lazer em qualquer estação! A Modelo Piscinas oferece sistemas completos de aquecimento solar e bombas de calor modernas. Dimensionamos a quantidade ideal de placas solares ou a potência do trocador de calor de acordo com a área do espelho d'água, exposição solar e temperatura desejada, acompanhados de capa térmica e controladores digitais automáticos.",
    benefits: [
      "Coletores solares de alta absorção resistentes ao sol e ao cloro",
      "Bombas de calor tipo trocador de calor elétrico com economia de energia",
      "Capas térmicas sob medida para reter o calor durante a noite",
      "Controladores eletrônicos digitais com acionamento programado da bomba",
    ],
    ctaText: "Dimensionar Aquecedor para Minha Piscina",
    whatsappMessage:
      "Olá! Tenho interesse em aquecimento solar ou bomba de calor para minha piscina com a Modelo Piscinas.",
  },
  {
    id: "limpeza-manutencao-assistencia",
    title: "Limpeza, Manutenção & Assistência Técnica",
    shortDesc:
      "Serviços pontuais e profissionais de tratamento de choque, conserto de vazamentos, troca de areia, revisão de casa de máquinas e manutenção preventiva.",
    badge: "Serviço Entregue no Prazo",
    icon: ShieldCheck,
    image: "/sobre-lazer-pool.jpg",
    fullDesc:
      "Sua piscina está verde, turva ou com perda de nível de água? A Modelo Piscinas possui equipe experiente e dedicada para prestar assistência técnica de qualidade. Como avaliou Wilson Hermogenes no Google: 'PERFEITO, FUI BEM ATENDIDO, ENTREGOU O SERVIÇO NA DATA'. Cuidamos da sua piscina com pontualidade, honestidade e excelência técnica comprovada.",
    benefits: [
      "Recuperação rápida de água verde com produtos de choque profissionais",
      "Troca periódica de areia de filtro com desinfecção interna do tanque",
      "Diagnóstico e reparo de vazamentos hidráulicos em casas de máquinas",
      "Equipe confiável, pontual e respeitosa com a sua residência ou clube",
    ],
    ctaText: "Agendar Manutenção ou Assistência",
    whatsappMessage:
      "Olá! Preciso de assistência técnica / manutenção ou recuperação de água para a minha piscina com a Modelo Piscinas.",
  },
  {
    id: "iluminacao-led-cascatas",
    title: "Iluminação em LED & Cascatas em Inox",
    shortDesc:
      "Transforme sua piscina à noite: refletores subaquáticos em LED SMD/RGB em 12V com controle remoto e lindas cascatas em aço inox escovado 304 e 316.",
    badge: "Visual & Sofisticação",
    icon: Sun,
    image: "/cascata-real.jpg",
    fullDesc:
      "Dê vida nova à sua piscina e desfrute de banhos noturnos espetaculares. Instalamos e fornecemos refletores em LED subaquáticos em 12V seguros, de baixíssimo consumo, com troca de cores RGB via controle remoto ou comando manual. Complementamos o cenário com cascatas em inox de embutir ou de piso, garantindo oxigenação constante da água e um som relaxante.",
    benefits: [
      "Refletores LED de alta potência com segurança total em 12V",
      "Cascatas duráveis em aço inox resistentes aos raios UV e intempéries",
      "Central de comando com controle remoto wireless para múltiplos efeitos",
      "Peças de reposição e nichos compatíveis com instalações antigas",
    ],
    ctaText: "Ver Cascatas e Refletores LED",
    whatsappMessage:
      "Olá! Gostaria de conhecer os modelos de cascatas e refletores LED disponíveis na Modelo Piscinas.",
  },
  {
    id: "spas-banheiras-hidro",
    title: "Spas, Banheiras & Acessórios de Relaxamento",
    shortDesc:
      "Produtos químicos suaves especiais para spas, aquecedores compactos, jatos de hidromassagem direcionais e saunas para seu bem-estar completo.",
    badge: "Hidroterapia & Conforto",
    icon: Bath,
    image: "/spa-relax.jpg",
    fullDesc:
      "Seja um spa de hidromassagem acoplado à sua piscina ou uma banheira independente, a Modelo Piscinas tem a linha completa de químicos específicos que não formam espuma indesejada nem agridem a pele. Também fornecemos motobombas de hidromassagem, jatos de ar e água e geradores de vapor para saunas.",
    benefits: [
      "Produtos formulados especialmente para altas temperaturas de spas",
      "Bicos direcionais reguláveis para massagem terapêutica profunda",
      "Bombas compactas de hidromassagem de alta vazão e baixo ruído",
      "Consultoria completa para manutenção da pureza da água aquecida",
    ],
    ctaText: "Consultar Produtos para Spas",
    whatsappMessage:
      "Olá! Gostaria de informações sobre produtos e equipamentos para spas e banheiras com a Modelo Piscinas.",
  },
  {
    id: "acessorios-aspiracao-limpeza",
    title: "Acessórios de Aspiração & Limpeza Prática",
    shortDesc:
      "Mangueiras flutuantes, cabos telescópicos, peneiras, escovas curvas, aspiradores com cerdas e robôs automáticos para facilitar o seu dia a dia.",
    badge: "Linha Completa de Acessórios",
    icon: PackageCheck,
    image: "/loja-showroom-pool.jpg",
    fullDesc:
      "Limpar a sua piscina não precisa ser uma tarefa pesada. Na Modelo Piscinas, temos tudo que você precisa para uma aspiração eficiente: aspiradores com esferas para piscina de alvenaria e vinil, escovas de cerdas macias e de aço, mangueiras corrugadas resistentes e adaptadores universais. A loja mais completa da Região Leste de Belo Horizonte!",
    benefits: [
      "Aspiradores com pesos balanceados que não riscam nem danificam o fundo",
      "Mangueiras flutuantes de alta durabilidade com ponteiras giratórias",
      "Peneiras cata-folha com tela de nylon reforçada e armação anatômica",
      "Preços justos e atendimento cordial para tirar qualquer dúvida",
    ],
    ctaText: "Falar sobre Acessórios de Piscina",
    whatsappMessage:
      "Olá! Gostaria de consultar os acessórios de limpeza (aspirador, mangueira, peneira) na Modelo Piscinas.",
  },
];

// 13 Depoimentos Reais do Google Maps da Modelo Piscinas (4,9 Estrelas · 23 Avaliações)
const REVIEWS = [
  {
    name: "Mery Inez",
    tag: "2 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Equipe de Confiança & Profissionalismo",
    comment:
      "Atendimento de qualidade, equipe de confiança e sempre disposta a ajudar. A loja está de parabéns pelo profissionalismo!",
  },
  {
    name: "Karine Ferreira",
    tag: "8 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Melhor Preço da Região",
    comment:
      "Melhor atendimento! Produtos com o melhor preço da região.",
  },
  {
    name: "Romero Fernandes",
    tag: "1 avaliação · Cliente Verificado",
    rating: 5,
    highlight: "Crepina do Filtro Sibrape Encontrada",
    comment:
      "Melhor atendimento, tem de tudo e um preço justo. Achei crepina do filtro sibrape não achava em lugar nenhum!",
  },
  {
    name: "Mateus Henrique",
    tag: "Local Guide · 211 avaliações · 18 fotos",
    rating: 5,
    highlight: "Loja Completa & Cloro Clorofort",
    comment:
      "Loja bem completa, sempre tem cloro da clorofort disponível. Atendimento nota 10",
  },
  {
    name: "Beatriz Souza",
    tag: "9 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Melhor Lugar da Região Leste",
    comment:
      "Na região leste o melhor lugar de se encontrar produtos. Fácil acesso, excelente prévias e aqui se encontra todos os produtos necessários. Excelente atendimento.",
  },
  {
    name: "Erika Souza",
    tag: "Local Guide · 5 avaliações · 35 fotos",
    rating: 5,
    highlight: "Empresa Séria & Serviço de Qualidade",
    comment:
      "Excelente atendimento, empresa seria, melhores preços do mercado, e além de tudo um serviço bem executado feito com muita qualidade PARABÉNS...",
  },
  {
    name: "Wilson Hermogenes",
    tag: "2 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Serviço Entregue Rigorosamente na Data",
    comment:
      "PERFEITO, FUI BEM ATENDIDO, ENTREGOU O SERVIÇO NA DATA. RECOMENDEI A EMPRESA PARA MEUS AMIGOS ELES ADORÃO.",
  },
  {
    name: "Leonardo Rafael",
    tag: "Local Guide · 16 avaliações · 2 fotos",
    rating: 5,
    highlight: "Atendimento Excelente & Bons Produtos",
    comment:
      "Atendimento excelente! Bons produtos",
  },
  {
    name: "Alisson Costa",
    tag: "1 avaliação · Cliente Verificado",
    rating: 5,
    highlight: "Ótimo Preço & Serviço de Qualidade",
    comment:
      "Excelente Atendimento ótimo Preço Serviço de qualidade..",
  },
  {
    name: "Gustavo Araujo",
    tag: "1 avaliação · Cliente Verificado",
    rating: 5,
    highlight: "Total Satisfação dos Clientes",
    comment:
      "RECOMENDO, serviço prestado com total satisfação de seus clientes...",
  },
  {
    name: "Vera Lucia",
    tag: "2 avaliações · Cliente Verificada",
    rating: 5,
    highlight: "Loja Linda & Atendimento Toppp",
    comment:
      "Loja linda. Atendimento toppp",
  },
  {
    name: "Cláudia Daniella Alves",
    tag: "Local Guide · 77 avaliações · 29 fotos",
    rating: 5,
    highlight: "Perto de Casa com Preço Justo",
    comment:
      "Perto de casa, excelente atendimento e o preço justo.",
  },
  {
    name: "Eliezer Ribeiro",
    tag: "4 avaliações · Cliente Verificado",
    rating: 5,
    highlight: "Melhor Preço e Serviço da Região, Nota 10",
    comment:
      "Melhor preço e serviço da região, Nota 10",
  },
];

type GalleryCategory =
  | "todas"
  | "produtos"
  | "filtros"
  | "aquecimento"
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
    src: "/tratamento-agua.jpg",
    title: "Linha Completa de Químicos e Cloro Clorofort",
    category: "produtos",
    tag: "Tratamento de Água",
    desc: "Produtos de alto rendimento para deixar sua piscina cristalina e segura para o banho.",
  },
  {
    src: "/filtro-bomba.jpg",
    title: "Casa de Máquinas Montada com Filtro e Motobomba",
    category: "filtros",
    tag: "Filtros & Bombas Silenciosas",
    desc: "Dimensionamento e reposição com registros organizados, fácil manuseio e alta durabilidade.",
  },
  {
    src: "/aquecedores.jpg",
    title: "Sistema de Aquecimento Solar de Alta Absorção",
    category: "aquecimento",
    tag: "Aquecimento Solar",
    desc: "Placas solares projetadas para aquecer sua piscina de maneira ecológica com excelente rendimento térmico.",
  },
  {
    src: "/cascata-real.jpg",
    title: "Cascata em Aço Inox Escovado com Queda Suave",
    category: "iluminacao",
    tag: "Cascatas em Inox",
    desc: "Elegância e som terapêutico de água caindo, produzida com inox resistente ao sol e ao cloro.",
  },
  {
    src: "/iluminacao-real.jpg",
    title: "Refletores LED Subaquáticos RGB Noturnos",
    category: "iluminacao",
    tag: "Iluminação em LED 12V",
    desc: "Efeitos cênicos coloridos com controle remoto sem fio e total segurança elétrica.",
  },
  {
    src: "/spa-relax.jpg",
    title: "Spa de Hidromassagem Aquecido e Relaxante",
    category: "aquecimento",
    tag: "Spas & Hidroterapia",
    desc: "Jatos direcionais terapêuticos e químicos próprios que preservam o equipamento.",
  },
  {
    src: "/piscina-obra-1.jpg",
    title: "Piscina Cristalina com Manutenção Periódica",
    category: "produtos",
    tag: "Água Impecável",
    desc: "Equilíbrio químico perfeito de cloro, pH e alcalinidade orientado pelos técnicos da loja.",
  },
  {
    src: "/loja-showroom-pool.jpg",
    title: "Loja Ampla com Pronta Entrega na Região Leste",
    category: "produtos",
    tag: "Sede Av. Itaituba, 173",
    desc: "Estrutura completa com estacionamento fácil e consultores prontos para tirar suas dúvidas.",
  },
];

// Perguntas Frequentes Reais sobre a Modelo Piscinas
const FAQS = [
  {
    question: "Onde fica a Modelo Piscinas e qual o horário de funcionamento?",
    answer:
      "A nossa loja está situada na Av. Itaituba, 173 - Bairro Boa Vista, Belo Horizonte - MG (CEP 31060-427), na Região Leste da capital. Nosso horário de funcionamento é de segunda a sexta-feira, das 08:00 às 18:00, e aos sábados, das 08:00 às 12:00. Temos fácil acesso e facilidade para estacionar e retirar seus produtos.",
  },
  {
    question: "Vocês realmente têm crepinas e peças para filtro Sibrape?",
    answer:
      "Sim! Essa é uma das peças mais difíceis de encontrar em BH e um dos pontos mais elogiados pelos nossos clientes. Mantemos em estoque crepinas originais Sibrape para diversos modelos de filtro, manômetros, tampas de pré-filtro, borrachas de vedação, rotores e uniões.",
  },
  {
    question: "Vocês têm cloro da marca Clorofort a pronta entrega?",
    answer:
      "Com certeza! Como destacam vários clientes no Google, 'sempre tem cloro da Clorofort disponível'. Trabalhamos com estoques sempre abastecidos para que você nunca fique sem cloro para sua piscina, além de clarificantes, algicidas, barrilha e sulfato.",
  },
  {
    question: "A Modelo Piscinas realiza serviços de manutenção e troca de areia?",
    answer:
      "Sim! Além da venda de produtos e peças na loja física, realizamos serviços técnicos especializados como recuperação de água verde, troca de areia do filtro, conserto de vazamentos hidráulicos em casas de máquinas e revisões gerais, sempre com pontualidade comprovada e serviço entregue na data.",
  },
  {
    question: "Vocês trabalham com aquecimento solar e bombas de calor?",
    answer:
      "Sim! Dimensionamos o sistema ideal para o tamanho da sua piscina, fornecendo coletores solares de alta absorção térmica, bombas de calor (trocadores de calor com tecnologia inverter), capas térmicas sob medida e termostatos digitais para sua piscina ficar aquecida os 365 dias do ano.",
  },
  {
    question: "Como posso pedir um orçamento ou tirar dúvidas pelo WhatsApp?",
    answer:
      "É muito simples! Basta clicar nos botões de WhatsApp espalhados por esta página ou chamar no número (31) 98396-1882. Nossa equipe está sempre disposta a ajudar, responder perguntas técnicas, enviar fotos de peças e montar orçamentos sem compromisso.",
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
      {/* 1. TOP BAR INSTITUCIONAL — BOA VISTA, BELO HORIZONTE */}
      <div className="bg-[#070D24] text-white text-[12px] py-2 px-4 border-b border-[#121F54]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Lado Esquerdo: Endereço & Horários */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-5 text-slate-300">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#00B4F5] transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00B4F5] shrink-0" />
              <span>Av. Itaituba, 173 - Boa Vista, Belo Horizonte - MG</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#00B4F5] shrink-0" />
              <span>Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
            </div>
          </div>

          {/* Lado Direito: Avaliação Google, Telefone Fixo & WhatsApp */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0D163B] px-2.5 py-0.5 rounded-full text-slate-200 border border-[#1E3485] hover:border-[#00B4F5] transition-colors text-[11px] whitespace-nowrap"
            >
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#F59E0B]">{GOOGLE_RATING}★</span>
              <span className="text-slate-400 hidden xl:inline">({GOOGLE_REVIEW_COUNT} avaliações)</span>
            </a>

            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#00B4F5]" />
              <span>{LANDLINE_DISPLAY}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#00D0FF] font-semibold hover:underline whitespace-nowrap"
            >
              <WhatsAppIcon size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo Oficial Modelo Piscinas — limpo, sem texto duplicado */}
            <a href="#" className="flex items-center shrink-0 group py-1" aria-label="Modelo Piscinas - Início">
              <div className="relative h-12 sm:h-14 w-24 sm:w-28 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={LOGO_SRC}
                  alt="Modelo Piscinas Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            {/* Desktop Navigation Links — com whitespace-nowrap para nunca quebrar palavras */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-[13px] xl:text-[14px] font-semibold text-slate-700">
              <a
                href="#produtos"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors"
              >
                Produtos &amp; Serviços
              </a>
              <a
                href="#diferenciais"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#sobre"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="#galeria"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors"
              >
                Galeria
              </a>
              <a
                href="#depoimentos"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <span>Avaliações</span>
                <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#FDE68A]">
                  4,9★
                </span>
              </a>
              <a
                href="#faq"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors"
              >
                Dúvidas
              </a>
              <a
                href="#localizacao"
                className="whitespace-nowrap px-2 py-1 rounded-md hover:text-[#00B4F5] hover:bg-slate-50 transition-colors"
              >
                Como Chegar
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Modelo Piscinas"
                className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#00B4F5] hover:border-[#00B4F5] transition-colors"
              >
                <InstagramIcon size={18} />
              </a>

              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Encontrei o site da Modelo Piscinas e gostaria de atendimento sobre produtos e equipamentos."
                )}
                target="_blank"
                variant="whatsapp"
                size="sm"
                className="shadow-sm"
              >
                <WhatsAppIcon size={16} />
                <span className="whitespace-nowrap font-bold">Pedir no WhatsApp</span>
              </GlowingButton>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                variant="whatsapp"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                <WhatsAppIcon size={14} />
                <span className="whitespace-nowrap">WhatsApp</span>
              </GlowingButton>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#00B4F5] hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Alternar menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3"
            >
              <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
                <a
                  href="#produtos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50"
                >
                  Produtos &amp; Serviços
                </a>
                <a
                  href="#diferenciais"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50"
                >
                  Diferenciais Modelo Piscinas
                </a>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50"
                >
                  Sobre a Loja
                </a>
                <a
                  href="#galeria"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50"
                >
                  Galeria de Fotos
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Avaliações no Google</span>
                  <span className="bg-[#FEF3C7] text-[#D97706] text-xs px-2 py-0.5 rounded-full font-bold">
                    4,9★ (23)
                  </span>
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50"
                >
                  Perguntas Frequentes
                </a>
                <a
                  href="#localizacao"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded hover:bg-slate-50"
                >
                  Endereço &amp; Rotas (Av. Itaituba, 173)
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chamar no WhatsApp ({PHONE_DISPLAY})</span>
                </GlowingButton>
                <a
                  href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
                  className="text-center py-2 text-xs font-bold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Ligar para a Loja: {LANDLINE_DISPLAY}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION — ALTA CONVERSÃO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#070D24] via-[#0D163B] to-[#121F54] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Elementos Gráficos de Fundo */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#00B4F5_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#00B4F5]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#2524A8]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Texto / Copywriting */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge de Credibilidade */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3.5 py-1.5 rounded-full bg-[#00B4F5]/15 text-[#BAE6FD] text-xs font-bold border border-[#00B4F5]/30">
                <Sparkles className="w-4 h-4 text-[#00B4F5]" />
                <span>Loja de Piscinas em Belo Horizonte · Região Leste</span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span className="inline-flex items-center text-[#F59E0B]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="ml-1 font-bold">4,9★ no Google</span>
                </span>
              </div>

              {/* H1 Principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black italic tracking-tight font-heading leading-[1.12]">
                Sua Piscina em Boas Mãos:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D0FF] via-[#00B4F5] to-[#70E5FF]">
                  Do Tratamento ao Aquecimento
                </span>
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A loja e assistência técnica mais completa da Região Leste e de BH. Cloro Clorofort sempre disponível, filtros, bombas, aquecedores, manutenção especializada e as peças Sibrape que você não acha em lugar nenhum.
              </p>

              {/* Badges de Diferenciais Rápidos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0D163B]/70 border border-[#1E3485] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0" />
                  <span>Cloro Clorofort em estoque</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0D163B]/70 border border-[#1E3485] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0" />
                  <span>Crepina Sibrape original</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0D163B]/70 border border-[#1E3485] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0" />
                  <span>Aquecimento solar &amp; bomba</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0D163B]/70 border border-[#1E3485] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0" />
                  <span>Melhor preço da região</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0D163B]/70 border border-[#1E3485] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0" />
                  <span>Serviço entregue na data</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0D163B]/70 border border-[#1E3485] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0" />
                  <span>Atendimento nota 10</span>
                </div>
              </div>

              {/* Botões de Conversão */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar preços de produtos e equipamentos na Modelo Piscinas."
                  )}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto text-base"
                >
                  <WhatsAppIcon size={20} />
                  <span>Falar no WhatsApp ({PHONE_DISPLAY})</span>
                </GlowingButton>

                <GlowingButton
                  href="#produtos"
                  variant="outlineCyan"
                  size="lg"
                  className="w-full sm:w-auto text-white border-[#00B4F5]/60 hover:bg-[#00B4F5]/10"
                >
                  <span>Ver Linha de Produtos</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </GlowingButton>
              </div>

              {/* Prova Social Rápida no Hero */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4,9 de 5</span>
                  <span className="text-slate-400">no Google Maps</span>
                </div>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="text-slate-300">Av. Itaituba, 173 - Boa Vista</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento Aberto
                </span>
              </div>
            </div>

            {/* Coluna Visual do Hero */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow de Fundo */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00B4F5] via-[#2524A8] to-[#00D0FF] opacity-35 blur-xl animate-subtle-pulse" />

                {/* Card com Foto Real da Piscina e Equipamentos */}
                <div className="relative rounded-2xl overflow-hidden bg-[#0D163B] border border-[#1E3485] shadow-2xl">
                  <div className="relative h-80 sm:h-96 w-full">
                    <Image
                      src="/hero-pool.jpg"
                      alt="Piscina cristalina com equipamentos e tratamento Modelo Piscinas"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D24] via-transparent to-black/20" />

                    {/* Badge Superior: Selo Oficial */}
                    <div className="absolute top-4 left-4 bg-[#070D24]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#00B4F5]/40 text-xs text-white font-bold flex items-center gap-1.5 shadow-lg">
                      <Store className="w-3.5 h-3.5 text-[#00B4F5]" />
                      <span>Loja Física &amp; Assistência Técnica</span>
                    </div>

                    {/* Card Flutuante 1: Avaliação Google */}
                    <div className="absolute bottom-4 left-4 right-4 bg-[#070D24]/95 backdrop-blur-md p-4 rounded-xl border border-[#1E3485] shadow-xl">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-[#00B4F5]/20 flex items-center justify-center text-[#00B4F5] font-black text-xs">
                            M
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-tight">
                              Modelo Piscinas BH
                            </p>
                            <p className="text-[10px] text-slate-400">
                              Av. Itaituba, 173 - Boa Vista
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#0D163B] px-2 py-1 rounded text-xs font-bold text-[#F59E0B] border border-[#1E3485]">
                          <Star className="w-3 h-3 fill-current" />
                          <span>4,9★</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-200 italic line-clamp-2">
                        &ldquo;Achei crepina do filtro Sibrape que não achava em lugar nenhum! Loja bem completa, sempre tem cloro Clorofort e atendimento nota 10.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Extra */}
                <div className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 bg-[#16A34A] text-white px-3.5 py-2 rounded-xl shadow-xl font-bold text-xs border border-emerald-400/40">
                  <WhatsAppIcon size={16} />
                  <span>Pronta Entrega em BH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE NÚMEROS E AUTORIDADE */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#121F54] font-heading flex items-center justify-center gap-1">
                <span>{GOOGLE_RATING}</span>
                <Star className="w-6 h-6 text-[#F59E0B] fill-current inline-block" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Avaliação no Google
              </p>
              <p className="text-[11px] text-slate-500">
                23 reviews públicas reais
              </p>
            </div>

            <div className="space-y-1 border-l border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-[#00B4F5] font-heading">
                100%
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Produtos Originais
              </p>
              <p className="text-[11px] text-slate-500">
                Clorofort, Sibrape e líderes
              </p>
            </div>

            <div className="space-y-1 border-l border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-[#2524A8] font-heading">
                +10 Anos
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Tradição &amp; Confiança
              </p>
              <p className="text-[11px] text-slate-500">
                Sede própria no Boa Vista
              </p>
            </div>

            <div className="space-y-1 border-l border-slate-200">
              <div className="text-3xl sm:text-4xl font-black text-[#16A34A] font-heading">
                Pontual
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Entrega &amp; Manutenção
              </p>
              <p className="text-[11px] text-slate-500">
                Serviço entregue na data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DESTAQUE ESPECIAL: OS DIFERENCIAIS DA MODELO PISCINAS */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-royal">Por Que Escolher a Modelo Piscinas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
              O Diferencial Que os Clientes Comprovam no Google
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Mais do que vender produtos, nós resolvemos o problema da sua água e dos seus equipamentos com transparência, estoque garantido e o melhor preço de Belo Horizonte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Peças Sibrape */}
            <div className="card-modelo p-6 rounded-2xl flex flex-col justify-between space-y-4 border-t-4 border-t-[#00B4F5]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#00B4F5]">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#070D24] font-heading">
                  Peças Sibrape &amp; Reposição Difícil
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Romero Fernandes avaliou: <em className="text-slate-800 font-medium">&ldquo;Achei crepina do filtro sibrape não achava em lugar nenhum!&rdquo;</em> Nós mantemos estoque de peças e conexões raras.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#00B4F5] uppercase tracking-wider block">
                  Estoque Especializado
                </span>
              </div>
            </div>

            {/* Card 2: Cloro Clorofort */}
            <div className="card-modelo p-6 rounded-2xl flex flex-col justify-between space-y-4 border-t-4 border-t-[#2524A8]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#2524A8]">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#070D24] font-heading">
                  Cloro Clorofort Sempre em Estoque
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mateus Henrique (Local Guide) destacou: <em className="text-slate-800 font-medium">&ldquo;Loja bem completa, sempre tem cloro da clorofort disponível. Atendimento nota 10.&rdquo;</em>
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#2524A8] uppercase tracking-wider block">
                  Pronta Entrega Garantida
                </span>
              </div>
            </div>

            {/* Card 3: Preço Justo e Atendimento */}
            <div className="card-modelo p-6 rounded-2xl flex flex-col justify-between space-y-4 border-t-4 border-t-[#121F54]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#121F54]">
                  <Tag className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#070D24] font-heading">
                  Melhor Preço da Região Leste
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Karine e Eliezer atestam: <em className="text-slate-800 font-medium">&ldquo;Melhor atendimento! Produtos com o melhor preço da região, Nota 10.&rdquo;</em> Você compra qualidade pelo valor mais justo.
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#121F54] uppercase tracking-wider block">
                  Economia Real Comprovada
                </span>
              </div>
            </div>

            {/* Card 4: Pontualidade Rigorosa */}
            <div className="card-modelo p-6 rounded-2xl flex flex-col justify-between space-y-4 border-t-4 border-t-[#16A34A]">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#16A34A]">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#070D24] font-heading">
                  Serviço Entregue Rigorosamente na Data
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Wilson Hermogenes comentou: <em className="text-slate-800 font-medium">&ldquo;PERFEITO, FUI BEM ATENDIDO, ENTREGOU O SERVIÇO NA DATA. RECOMENDEI PARA MEUS AMIGOS.&rdquo;</em>
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#16A34A] uppercase tracking-wider block">
                  Compromisso &amp; Respeito
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUTOS & SERVIÇOS PRINCIPAIS */}
      <section id="produtos" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-cyan">Nossas Linhas &amp; Soluções</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
              Produtos &amp; Serviços Especializados para Sua Piscina
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Do tratamento da água com cloro de alta performance aos filtros, motobombas, peças raras, aquecimento e manutenção preventiva. Clique em qualquer card para ver todos os detalhes.
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

                    <div className="absolute top-3 left-3 bg-[#070D24]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#BAE6FD] border border-[#00B4F5]/30">
                      {service.badge}
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-[#F0F9FF] text-[#00B4F5]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-[16px] text-[#070D24] group-hover:text-[#00B4F5] transition-colors line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00B4F5] group-hover:translate-x-1 transition-transform">
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

      {/* 7. MODAL DETALHADO DO SERVIÇO / PRODUTO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            >
              {/* Header do Modal com Imagem */}
              <div className="relative h-56 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D24] via-black/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#00B4F5] text-[#070D24] text-[11px] font-black uppercase tracking-wider mb-1">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6 space-y-5">
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#070D24] uppercase tracking-wider">
                    Principais Vantagens &amp; Itens Disponíveis:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00B4F5] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedService.whatsappMessage)}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                    className="w-full sm:flex-1"
                  >
                    <WhatsAppIcon size={18} />
                    <span>{selectedService.ctaText}</span>
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 text-sm"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 8. SOBRE A MODELO PISCINAS — HISTÓRIA E COMPROMISSO */}
      <section id="sobre" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Imagem Institucional */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <Image
                  src="/sobre-lazer-pool.jpg"
                  alt="Área de lazer tratada pela Modelo Piscinas em Belo Horizonte"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D24]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-[#070D24]/90 backdrop-blur-md border border-[#1E3485]">
                  <p className="text-xs font-bold flex items-center gap-1.5 text-[#00B4F5]">
                    <MapPin className="w-3.5 h-3.5 text-[#00B4F5]" />
                    <span>Av. Itaituba, 173 - Boa Vista, Belo Horizonte</span>
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Fácil estacionamento e atendimento técnico de confiança na Região Leste.
                  </p>
                </div>
              </div>
            </div>

            {/* Texto Institucional */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="eyebrow">Sobre a Modelo Piscinas</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
                  Tradição, Atendimento Humano e Qualidade Técnica em Belo Horizonte
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Localizada estrategicamente na Av. Itaituba, 173, no bairro Boa Vista, a <strong>Modelo Piscinas</strong> consolidou-se como a principal referência para donos de piscinas, síndicos, clubes e profissionais de manutenção em Belo Horizonte.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nossa missão é simples e direta: <strong>manter a sua piscina sempre limpa, aquecida e pronta para o lazer</strong>, sem dores de cabeça e sem gastos desnecessários. Combinamos um catálogo completo com marcas renomadas como <em>Clorofort, Sibrape, Sodramar e Jacuzzi</em> com um atendimento técnico de verdade, que orienta você sobre a quantidade exata de cada produto químico e a peça correta para a sua bomba ou filtro.
              </p>

              {/* 3 Pilares da Empresa */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#00B4F5] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confiança Total</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Equipe honesta e disposta a orientar você a gastar apenas o necessário.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#2524A8] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Estoque Raro</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Crepinas Sibrape, conexões específicas e peças que você não acha em BH.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#16A34A] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Pontualidade</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Serviços e revisões entregues rigorosamente no dia e na hora combinados.
                  </p>
                </div>
              </div>

              {/* Botão de Contato */}
              <div className="pt-2">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a equipe da Modelo Piscinas."
                  )}
                  target="_blank"
                  variant="primary"
                  size="md"
                >
                  <WhatsAppIcon size={18} />
                  <span>Falar com Nossos Especialistas</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GALERIA DE PROJETOS E PRODUTOS */}
      <section id="galeria" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="eyebrow-cyan">Galeria Visual</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
              Piscinas Impecáveis, Equipamentos &amp; Estrutura
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Confira a qualidade visual da água, sistemas de aquecimento, iluminação e equipamentos fornecidos e mantidos pela Modelo Piscinas.
            </p>

            {/* Abas de Filtro da Galeria */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { key: "todas", label: "Todas as Fotos" },
                { key: "produtos", label: "Químicos & Água" },
                { key: "filtros", label: "Filtros & Bombas" },
                { key: "aquecimento", label: "Aquecimento Solar" },
                { key: "iluminacao", label: "Iluminação & Cascatas" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveGalleryTab(tab.key as GalleryCategory)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeGalleryTab === tab.key
                      ? "bg-[#121F54] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#00B4F5]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Fotos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((proj, idx) => (
              <div
                key={idx}
                className="card-modelo rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={proj.src}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#070D24]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-[#BAE6FD] border border-[#00B4F5]/30">
                    {proj.tag}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-bold text-sm leading-tight">
                      {proj.title}
                    </h4>
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

      {/* 10. DEPOIMENTOS REAIS DO GOOGLE MAPS — 4,9 ESTRELAS */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-gold">Prova Social &amp; Avaliações Reais</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
              O Que Dizem Quem Compra na Modelo Piscinas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nossa melhor propaganda é a satisfação real dos nossos clientes no Google Maps. São 23 avaliações públicas com média de <strong>4,9 estrelas</strong>.
            </p>

            <div className="pt-2 inline-flex items-center gap-2 bg-[#FEF3C7] border border-[#FDE68A] px-4 py-2 rounded-full text-xs font-bold text-[#D97706]">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>4,9 de 5 Estrelas no Google</span>
              <span className="text-slate-400">•</span>
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black flex items-center gap-1"
              >
                <span>Ver no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="card-modelo p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#00B4F5] transition-all"
              >
                <div className="space-y-3">
                  {/* Estrelas e Tag de Destaque */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#F59E0B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-[#00B4F5] bg-[#F0F9FF] px-2 py-0.5 rounded border border-[#BAE6FD]">
                      {rev.highlight}
                    </span>
                  </div>

                  {/* Depoimento Real */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Autor do Depoimento */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#121F54] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#070D24]">{rev.name}</p>
                    <p className="text-[10px] text-slate-500">{rev.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link para Avaliar no Google */}
          <div className="text-center pt-10">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#121F54] hover:text-[#00B4F5] transition-colors"
            >
              <span>Ver todas as 23 avaliações e comentários no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 11. PERGUNTAS FREQUENTES (FAQ) */}
      <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="eyebrow-cyan">Tire Suas Dúvidas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
              Perguntas Frequentes sobre a Modelo Piscinas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Reunimos as respostas para as principais dúvidas de quem visita nossa loja ou solicita produtos e serviços em Belo Horizonte.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="card-modelo rounded-xl overflow-hidden border border-slate-200 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#070D24] hover:text-[#00B4F5] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00B4F5] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. LOCALIZAÇÃO, SEDE & COMO CHEGAR */}
      <section id="localizacao" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Informações de Contato & Endereço */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="eyebrow">Onde Estamos</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#070D24] font-heading tracking-tight">
                  Venha Nos Conhecer no Bairro Boa Vista
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Localização estratégica na Região Leste de Belo Horizonte, de fácil acesso para bairros vizinhos e toda a capital.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#00B4F5] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs text-[#070D24]">Endereço da Loja</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {ADDRESS_DISPLAY}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      (Bairro Boa Vista · Belo Horizonte - MG)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <Clock className="w-5 h-5 text-[#00B4F5] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs text-[#070D24]">Horário de Atendimento</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Segunda a Sexta: <strong>08:00 às 18:00</strong>
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Sábado: <strong>08:00 às 12:00</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <Phone className="w-5 h-5 text-[#00B4F5] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs text-[#070D24]">Telefones de Contato</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Telefone da Loja: <strong>{LANDLINE_DISPLAY}</strong>
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      WhatsApp Comercial: <strong>{PHONE_DISPLAY}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Botões de Rotas */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#121F54] hover:bg-[#0D163B] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#00B4F5]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href={WAZE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-slate-300 hover:border-[#00B4F5] text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors hover:bg-slate-50"
                >
                  <ExternalLink className="w-4 h-4 text-[#00B4F5]" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>

            {/* Mapa Interativo / Embed do Google Maps */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl h-96 relative bg-slate-100">
                <iframe
                  title="Localização Modelo Piscinas no Google Maps"
                  src="https://maps.google.com/maps?q=Av.+Itaituba,+173+-+Boa+Vista,+Belo+Horizonte+-+MG,+31060-427&t=&z=16&ie=UTF8&iwloc=&output=embed"
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

      {/* 13. CTA FINAL DE ALTA CONVERSÃO */}
      <section className="py-16 bg-gradient-to-r from-[#070D24] via-[#0D163B] to-[#121F54] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00B4F5]/20 text-[#BAE6FD] text-xs font-bold">
            <Sparkles className="w-4 h-4 text-[#00B4F5]" />
            <span>Sua Piscina Sempre Pronta para o Lazer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading italic">
            Pronto para Deixar Sua Piscina em Boas Mãos?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Converse diretamente com a equipe da Modelo Piscinas. Garantimos atendimento atencioso, estoque completo de produtos e peças Sibrape, e os melhores preços de Belo Horizonte.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Quero solicitar produtos ou tirar dúvidas com a Modelo Piscinas."
              )}
              target="_blank"
              variant="whatsapp"
              size="lg"
            >
              <WhatsAppIcon size={20} />
              <span>Falar no WhatsApp Agora</span>
            </GlowingButton>

            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="px-6 py-3.5 rounded-lg border border-[#00B4F5]/40 text-white font-bold hover:bg-[#00B4F5]/10 transition-colors flex items-center gap-2 text-[15px]"
            >
              <Phone className="w-4 h-4 text-[#00B4F5]" />
              <span>Ligar: {LANDLINE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. FOOTER COMPLETO */}
      <footer className="bg-[#070D24] text-slate-400 text-xs border-t border-[#121F54] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Coluna 1: Logo & Resumo */}
            <div className="space-y-4">
              <a href="#" className="inline-block group" aria-label="Modelo Piscinas">
                <div className="relative h-14 sm:h-16 w-28 sm:w-32 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={LOGO_SRC}
                    alt="Modelo Piscinas Logo"
                    fill
                    sizes="140px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Referência em produtos para piscinas, cloro Clorofort, filtros, bombas, crepinas Sibrape e aquecimento solar em Belo Horizonte e Região Metropolitana.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Modelo Piscinas"
                  className="p-2 rounded-lg bg-[#0D163B] hover:bg-[#00B4F5] hover:text-[#070D24] text-slate-300 transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Modelo Piscinas"
                  className="p-2 rounded-lg bg-[#0D163B] hover:bg-emerald-600 hover:text-white text-slate-300 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps"
                  className="p-2 rounded-lg bg-[#0D163B] hover:bg-[#F59E0B] hover:text-black text-slate-300 transition-colors font-bold text-[11px]"
                >
                  4,9★ Google
                </a>
              </div>
            </div>

            {/* Coluna 2: Serviços & Produtos Principais */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Linhas de Produtos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Cloro Clorofort &amp; Químicos
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Filtros de Areia &amp; Motobombas
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Peças &amp; Crepinas Sibrape
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Aquecimento Solar &amp; Bombas de Calor
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Iluminação LED Subaquática &amp; Cascatas
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-white transition-colors">
                    Manutenção &amp; Tratamento de Choque
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Regiões Atendidas */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Regiões Atendidas
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {CITIES_SERVED}.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#00B4F5] block mb-1">
                  Atendimento na Loja Física:
                </span>
                <p className="text-slate-400 text-xs">
                  Estacionamento fácil e consultores prontos para ajudar com a medição e os produtos ideais.
                </p>
              </div>
            </div>

            {/* Coluna 4: Contato & Sede */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Sede Boa Vista
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {ADDRESS_DISPLAY}
              </p>
              <p className="text-slate-300 font-semibold text-xs pt-1">
                Telefone Loja: {LANDLINE_DISPLAY}
              </p>
              <p className="text-slate-300 font-semibold text-xs">
                WhatsApp: {PHONE_DISPLAY}
              </p>
              <p className="text-slate-400 text-xs">
                E-mail: {EMAIL_CONTACT}
              </p>
            </div>
          </div>

          <div className="pt-10 mt-10 border-t border-[#121F54] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
            </p>
            <p className="text-[11px]">
              {COMPANY_FULL_NAME} · Belo Horizonte - MG
            </p>
          </div>
        </div>
      </footer>

      {/* 15. BOTÃO FLUTUANTE DO WHATSAPP COM EFEITO PULSE */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl("Olá! Gostaria de falar com a equipe da Modelo Piscinas.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp com a Modelo Piscinas"
          className="group relative flex items-center gap-3 bg-[#16A34A] hover:bg-[#15803D] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
          <WhatsAppIcon size={24} className="relative z-10" />
          <span className="hidden sm:inline-block font-bold text-xs tracking-wide relative z-10 pr-1">
            WhatsApp Modelo Piscinas
          </span>
        </a>
      </div>
    </div>
  );
}
