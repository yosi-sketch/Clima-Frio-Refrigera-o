import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07172C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quatroestacoespiscinas.com.br"),
  title:
    "Quatro Estações Piscinas | Aguazul Sete Lagoas — Piscinas, Saunas & Aquecimento Solar (4,9★)",
  description:
    "Valorizamos áreas de lazer e realizamos sonhos! Revenda oficial Aguazul Piscinas de fibra, saunas a vapor/secas, aquecimento solar e para banho, lagos ornamentais e manutenção técnica em Sete Lagoas - MG. Av. Marechal Castelo Branco, 2111. WhatsApp: (31) 3773-6264.",
  keywords: [
    "Quatro Estações Piscinas",
    "Aguazul Sete Lagoas",
    "Piscinas em Sete Lagoas",
    "Loja de piscinas Sete Lagoas",
    "Piscina de fibra Sete Lagoas",
    "Aquecimento solar piscina Sete Lagoas",
    "Aquecimento para banho Sete Lagoas",
    "Saunas em Sete Lagoas",
    "Lagos ornamentais Sete Lagoas",
    "Manutenção de piscinas Sete Lagoas",
    "Bombas e filtros de piscina Sete Lagoas",
    "Piscina de fibra Aguazul",
    "Piscina Leblon Sete Lagoas",
    "Quatro Estações Piscinas Saunas Aquecimento Solar",
  ],
  authors: [{ name: "Quatro Estações Piscinas | Aguazul Sete Lagoas" }],
  creator: "Quatro Estações Piscinas",
  publisher: "Quatro Estações Piscinas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=aguazul1", sizes: "any" },
      { url: "/icon-32x32.png?v=aguazul1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=aguazul1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=aguazul1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=aguazul1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=aguazul1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=aguazul1",
    apple: [{ url: "/apple-icon.png?v=aguazul1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://quatroestacoespiscinas.com.br",
    title:
      "Quatro Estações Piscinas | Aguazul Sete Lagoas — Piscinas, Saunas & Aquecimento Solar",
    description:
      "Piscinas de fibra de alta qualidade, saunas, aquecimento solar, lagos ornamentais e pós-venda premiado com nota 4,9★ no Google. Av. Marechal Castelo Branco, 2111 - Santo Antonio, Sete Lagoas - MG.",
    siteName: "Quatro Estações Piscinas | Aguazul Sete Lagoas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quatro Estações Piscinas | Aguazul Sete Lagoas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: "Quatro Estações Piscinas",
    alternateName: "Aguazul Sete Lagoas • Quatro Estações Piscinas, Saunas & Aquecimento Solar",
    description:
      "Revenda exclusiva de Piscinas de Fibra Aguazul, aquecimento solar para piscinas e banho, saunas, lagos ornamentais, bombas, filtros, produtos químicos e assistência técnica em Sete Lagoas e região.",
    telephone: "+553137736264",
    url: "https://quatroestacoespiscinas.com.br",
    image: "https://quatroestacoespiscinas.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Marechal Castelo Branco, 2111 (esq. com Rua Melo Figueiredo)",
      addressLocality: "Santo Antonio, Sete Lagoas",
      addressRegion: "MG",
      postalCode: "35701-240",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "67",
    },
    areaServed: [
      "Sete Lagoas",
      "Prudente de Morais",
      "Inhaúma",
      "Matozinhos",
      "Capim Branco",
      "Pedro Leopoldo",
      "Funilândia",
      "Baldim",
      "Paraopeba",
      "Cordisburgo",
      "Caetanópolis",
      "Santana de Pirapama",
      "Jequitibá",
      "Minas Gerais",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=aguazul-tab" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=aguazul-tab" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=aguazul-tab" />
        <link rel="shortcut icon" href="/favicon.ico?v=aguazul-tab" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=aguazul-tab" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8FAFC] text-[#07172C] font-sans antialiased selection:bg-[#0A6DB0] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
