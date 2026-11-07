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
  themeColor: "#001A78",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.friobel.com.br"),
  title:
    "Grupo Frio Bel | Refrigeração — Peças para Geladeiras, Lavadoras & Ar-Condicionado em BH (4,6★)",
  description:
    "Grupo Frio Bel Refrigeração: maior estoque de peças originais para geladeiras, freezers, lavadoras e ar-condicionado em Belo Horizonte e Minas Gerais. Loja física com estacionamento próprio na Av. Dom Pedro I, 2233 (São João Batista / Pampulha). Atendimento técnico qualificado e pronta entrega imediata. WhatsApp: (31) 3024-9261.",
  keywords: [
    "Frio Bel Refrigeração",
    "Grupo Frio Bel",
    "Peças para geladeira BH",
    "Peças para máquina de lavar Belo Horizonte",
    "Peças refrigeração Pampulha BH",
    "Frio Bel Dom Pedro I",
    "Compressor Embraco BH",
    "Gás refrigerante R134a BH",
    "Ferramentas para refrigeração BH",
    "Peças lava e seca BH",
    "Frio Bel São João Batista",
    "Loja de refrigeração Minas Gerais",
  ],
  authors: [{ name: "Grupo Frio Bel Refrigeração" }],
  creator: "Grupo Frio Bel Refrigeração",
  publisher: "Frio Bel Refrigeração Ltda",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=fb2", sizes: "any" },
      { url: "/icon-32x32.png?v=fb2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=fb2", type: "image/png", sizes: "16x16" },
      { url: "/icon-192x192.png?v=fb2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=fb2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=fb2",
    apple: [{ url: "/apple-icon.png?v=fb2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.friobel.com.br",
    title:
      "Grupo Frio Bel | Refrigeração — Peças Originais & Ferramentas em BH (4,6★)",
    description:
      "Soluções completas em refrigeração! O maior mix de peças para geladeiras, lavadoras, freezers e climatização em Minas Gerais. Estacionamento exclusivo na Av. Dom Pedro I, 2233. Nota 4,6★ no Google com 250+ avaliações.",
    siteName: "Grupo Frio Bel Refrigeração",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo Frio Bel Refrigeração — Soluções Completas em Refrigeração",
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
    "@type": "HVACBusiness",
    name: "Grupo Frio Bel | Refrigeração",
    legalName: "Frio Bel Refrigeração Ltda",
    alternateName: "Frio Bel Refrigeração",
    description:
      "Soluções completas em peças originais para geladeiras, máquinas de lavar, freezers, ar-condicionado e ferramentas para refrigeração em Belo Horizonte e Minas Gerais. Loja de referência para técnicos e clientes.",
    telephone: "+553130249261",
    url: "https://www.friobel.com.br",
    image: "https://www.friobel.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Dom Pedro I, 2233",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31515-300",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.8277,
      longitude: -43.9669,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "250",
      bestRating: "5",
      worstRating: "1",
    },
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
        closes: "12:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/friobel/",
      "https://www.friobel.com.br",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=fb2" sizes="any" />
        <link rel="icon" href="/icon-32x32.png?v=fb2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-16x16.png?v=fb2" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=fb2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#00124D] selection:bg-[#001A78] selection:text-white">
        {children}
      </body>
    </html>
  );
}
