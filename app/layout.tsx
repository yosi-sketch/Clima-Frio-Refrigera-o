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
  themeColor: "#0088E0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.isominas.ind.br"),
  title:
    "ISOMINAS | Indústria de Isopainéis EPS & PUR, Câmaras Frigoríficas & Telhas Térmicas (4,7★)",
  description:
    "ISOMINAS Indústria e Comércio de Isopainéis e Refrigeração: fábrica própria com 10.000m² em Ribeirão das Neves / BH. Isopainéis EPS e PUR de 50mm a 200mm, portas frigoríficas giratórias e de correr, telhas térmicas sanduíche e isolamento para câmaras frigoríficas. Orçamento direto da fábrica! Fone: (31) 3631-1500 · WhatsApp: (31) 98418-3835.",
  keywords: [
    "ISOMINAS",
    "Isominas Isopainéis",
    "Isopainéis BH",
    "Isopainel EPS Minas Gerais",
    "Isopainel PUR",
    "Portas frigoríficas MG",
    "Porta frigorífica giratória",
    "Porta frigorífica de correr",
    "Telha térmica EPS",
    "Telha sanduíche BH",
    "Câmara frigorífica Belo Horizonte",
    "Placas de EPS isolamento térmico",
    "Fábrica de isopainel Ribeirão das Neves",
    "Isolamento térmico industrial",
  ],
  authors: [{ name: "ISOMINAS Indústria e Comércio de Isopainéis e Refrigeração" }],
  creator: "ISOMINAS Indústria e Comércio",
  publisher: "ISOMINAS Indústria e Comércio de Isopainéis e Refrigeração Ltda",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=iso1", sizes: "any" },
      { url: "/icon-32x32.png?v=iso1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=iso1", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png?v=iso1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png?v=iso1", type: "image/png", sizes: "512x512" },
      { url: "/icon.png?v=iso1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=iso1",
    apple: [{ url: "/apple-icon.png?v=iso1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.isominas.ind.br",
    title:
      "ISOMINAS | Indústria de Isopainéis, Portas Frigoríficas & Telhas Térmicas (4,7★)",
    description:
      "Soluções completas em isolamento térmico e refrigeração industrial! Parque fabril de 10.000m² em Ribeirão das Neves / BH. Isopainéis EPS/PUR, portas frigoríficas, telhas sanduíche e câmaras frias com nota 4,7★ no Google.",
    siteName: "ISOMINAS Isopainéis e Refrigeração",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISOMINAS Indústria e Comércio de Isopainéis e Refrigeração",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISOMINAS | Indústria de Isopainéis & Refrigeração (4,7★)",
    description:
      "Fábrica própria de isopainéis EPS/PUR, portas frigoríficas e telhas térmicas sanduíche em MG. Orçamento direto da fábrica!",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ManufacturingBusiness", "HVACBusiness", "LocalBusiness"],
    name: "ISOMINAS Indústria e Comércio de Isopainéis e Refrigeração",
    legalName: "ISOMINAS INDÚSTRIA E COMÉRCIO DE ISOPAINES E REFRIGERAÇÃO LTDA",
    alternateName: "ISOMINAS Isopainéis",
    description:
      "Indústria fabricante de isopainéis termoisolantes em EPS e PUR, portas frigoríficas giratórias e de correr, telhas térmicas sanduíche e placas isolantes para câmaras frigoríficas industriais e comerciais.",
    telephone: "+553136311500",
    url: "https://www.isominas.ind.br",
    image: "https://www.isominas.ind.br/og-image.jpg",
    logo: "https://www.isominas.ind.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Alzira Menezes Nogueira, 151",
      addressLocality: "Ribeirão das Neves",
      addressRegion: "MG",
      postalCode: "33880-300",
      addressCountry: "BR",
      neighborhood: "Distrito Industrial João de Almeida",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.7684,
      longitude: -44.0865,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "33",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Produtos e Soluções Térmicas",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Isopainéis Termoisolantes EPS 50mm a 200mm",
            description: "Isopainéis em EPS autoextinguível Classe F-1 para câmaras frias e galpões.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Portas Frigoríficas Giratórias e de Correr",
            description: "Portas industriais pesadas com ferragens Fermod e resistência térmica.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Telhas Térmicas EPS (Sanduíche)",
            description: "Coberturas termoacústicas para redução de calor e isolamento sonoro.",
          },
        },
      ],
    },
  };

  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=iso1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=iso1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=iso1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=iso1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
