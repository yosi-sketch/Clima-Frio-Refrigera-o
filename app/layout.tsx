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
  themeColor: "#0047FF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.friomax.com.br"),
  title:
    "Friomax Refrigeração | Fábrica de Freezers, Expositores & Câmaras Frigoríficas (4,4★)",
  description:
    "Friomax Refrigeração: mais de 30 anos de tradição em Vespasiano - MG fabricando equipamentos de refrigeração comercial e industrial. Freezers expositores, vitrines refrigeradas, balcões térmicos, geladeiras em aço inox e câmaras frigoríficas. Orçamento direto da fábrica: (31) 3503-2400.",
  keywords: [
    "Friomax Refrigeração",
    "Friomax Vespasiano",
    "Fábrica de freezers MG",
    "Equipamentos de refrigeração comercial",
    "Freezer expositor bebidas",
    "Freezer horizontal comercial",
    "Balcão refrigerado açougue",
    "Vitrine expositora padaria",
    "Geladeira industrial aço inox",
    "Câmara frigorífica Belo Horizonte",
    "Ilha de congelados supermercado",
    "Refrigeração comercial Minas Gerais",
    "Vespasiano refrigeração",
  ],
  authors: [{ name: "Friomax Indústria e Comércio de Refrigeração" }],
  creator: "Friomax Refrigeração",
  publisher: "Friomax Indústria e Comércio de Refrigeração Ltda",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=fm1", sizes: "any" },
      { url: "/icon-32x32.png?v=fm1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=fm1", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png?v=fm1", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png?v=fm1", type: "image/png", sizes: "512x512" },
      { url: "/icon.png?v=fm1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=fm1",
    apple: [{ url: "/apple-icon.png?v=fm1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.friomax.com.br",
    title:
      "Friomax Refrigeração | Equipamentos de Refrigeração Comercial & Industrial (4,4★)",
  description:
    "Mais de 30 anos fabricando produtos com qualidade e eficiência na refrigeração comercial! Fábrica própria em Vespasiano - MG. Freezers, vitrines, balcões e câmaras com nota 4,4★ no Google.",
    siteName: "Friomax Refrigeração",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Friomax Refrigeração Comercial & Industrial - A diferença está na qualidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Friomax Refrigeração | Fábrica de Freezers & Refrigeração (4,4★)",
    description:
      "Fábrica própria de equipamentos de refrigeração comercial e industrial em Vespasiano - MG. Orçamento direto da fábrica!",
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
    name: "Friomax Refrigeração Comercial & Industrial",
    legalName: "Friomax Indústria e Comércio de Refrigeração Ltda",
    alternateName: "Friomax Refrigeração",
    description:
      "Indústria fabricante de equipamentos de refrigeração comercial e industrial: freezers expositores verticais e horizontais, vitrines refrigeradas, balcões térmicos, geladeiras em aço inox e câmaras frigoríficas sob medida.",
    telephone: "+553135032400",
    url: "https://www.friomax.com.br",
    image: "https://www.friomax.com.br/og-image.jpg",
    logo: "https://www.friomax.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. São Paulo, 1500",
      addressLocality: "Vespasiano",
      addressRegion: "MG",
      postalCode: "33200-000",
      addressCountry: "BR",
      neighborhood: "Nova Pampulha",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.7042,
      longitude: -43.9189,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "41",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Equipamentos de Refrigeração Comercial",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Freezers Comerciais Expositores Verticais e Horizontais",
            description: "Freezers para conservação de gelo, sorvetes e bebidas com portas antiembaçantes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Balcões e Vitrines Refrigeradas",
            description: "Expositores para açougues, padarias, empórios e laticínios com iluminação LED.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Geladeiras e Refrigeradores Industriais em Aço Inox",
            description: "Refrigeradores pesados de 2, 4 e 6 portas para cozinhas industriais e restaurantes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Câmaras Frigoríficas Modulares & Walk-in Coolers",
            description: "Projetos sob medida com painéis térmicos herméticos e economia de energia.",
          },
        },
      ],
    },
  };

  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=fm1" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=fm1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=fm1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=fm1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
