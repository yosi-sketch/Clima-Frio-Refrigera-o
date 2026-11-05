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
  themeColor: "#070D24",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://modelopiscinas.com.br"),
  title:
    "Modelo Piscinas — Produtos, Equipamentos & Aquecimento em Belo Horizonte | 4,9★",
  description:
    "Sua piscina em boas mãos: do tratamento ao aquecimento. Loja completa de cloro Clorofort, filtros, motobombas, crepinas Sibrape, aquecimento solar e assistência técnica na Região Leste de BH. Av. Itaituba, 173 - Boa Vista. WhatsApp: (31) 98396-1882.",
  keywords: [
    "Modelo Piscinas",
    "Modelo Piscinas BH",
    "Loja de piscinas Belo Horizonte",
    "Produtos para piscina Boa Vista BH",
    "Cloro Clorofort BH",
    "Crepina Sibrape BH",
    "Filtros e bombas de piscina BH",
    "Aquecimento solar piscina BH",
    "Limpeza e manutenção de piscina BH",
    "Loja de piscinas Região Leste BH",
    "Equipamentos de piscina Belo Horizonte",
    "Peças para filtro de piscina BH",
  ],
  authors: [{ name: "Modelo Piscinas — Belo Horizonte - MG" }],
  creator: "Modelo Piscinas",
  publisher: "Modelo Piscinas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=modelo1", sizes: "any" },
      { url: "/icon-32x32.png?v=modelo1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=modelo1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=modelo1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=modelo1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=modelo1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=modelo1",
    apple: [{ url: "/apple-icon.png?v=modelo1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://modelopiscinas.com.br",
    title:
      "Modelo Piscinas — Do Tratamento ao Aquecimento em Belo Horizonte",
    description:
      "Loja completa de produtos químicos, cloro Clorofort, bombas, filtros, crepinas Sibrape e aquecimento solar com nota 4,9★ no Google. Av. Itaituba, 173 - Boa Vista.",
    siteName: "Modelo Piscinas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modelo Piscinas — Belo Horizonte - MG",
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
    "@type": "Store",
    name: "Modelo Piscinas",
    alternateName: "Modelo Piscinas BH • Do Tratamento ao Aquecimento",
    description:
      "Loja de produtos para piscinas, cloro Clorofort, motobombas, filtros, crepinas Sibrape, aquecimento solar, peças de reposição e assistência técnica em Belo Horizonte - MG.",
    telephone: "+5531983961882",
    url: "https://modelopiscinas.com.br",
    image: "https://modelopiscinas.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Itaituba, 173",
      addressLocality: "Boa Vista, Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31060-427",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "23",
    },
    areaServed: [
      "Belo Horizonte",
      "Boa Vista",
      "Santa Inês",
      "Sagrada Família",
      "Horto",
      "Nova Floresta",
      "Floresta",
      "Pampulha",
      "Nova Lima",
      "Sabará",
      "Contagem",
      "Betim",
      "Grande BH",
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
        <link rel="icon" href="/favicon.ico?v=modelo-tab3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png?v=modelo-tab3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png?v=modelo-tab3" />
        <link rel="shortcut icon" href="/favicon.ico?v=modelo-tab3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=modelo-tab3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8FAFC] text-[#070F26] font-sans antialiased selection:bg-[#00B4F5] selection:text-[#070D24]"
      >
        {children}
      </body>
    </html>
  );
}
