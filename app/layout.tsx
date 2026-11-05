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
  themeColor: "#044296",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://piscinasnahorabh.com.br"),
  title:
    "Piscinas Na Hora BH — Piscinas de Armação, Infláveis & Lazer em Belo Horizonte (5,0★)",
  description:
    "Piscinas Na Hora BH: especialistas em diversão para toda a família! Piscinas estruturadas de armação e infláveis à pronta entrega em Belo Horizonte, boias, bombas filtrantes, capas, químicos, artigos de camping e lazer. Retirada rápida no Caiçaras ou entrega expressa em BH. WhatsApp: (31) 92000-6722.",
  keywords: [
    "Piscinas Na Hora BH",
    "Piscinas em Belo Horizonte",
    "Piscinas Caiçaras BH",
    "Piscina de armação pronta entrega BH",
    "Piscina inflável Belo Horizonte",
    "Loja de piscinas BH",
    "Boias e infláveis BH",
    "Filtros e bombas de piscina BH",
    "Cloro e químicos de piscina BH",
    "Artigos para esportes ao ar livre BH",
    "Camping e pesca Belo Horizonte",
    "Piscinas Na Hora Shopee",
    "Entrega rápida de piscinas BH",
  ],
  authors: [{ name: "Piscinas Na Hora BH" }],
  creator: "Piscinas Na Hora BH",
  publisher: "Piscinas Na Hora BH",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=pnh2", sizes: "any" },
      { url: "/icon-32x32.png?v=pnh2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=pnh2", type: "image/png", sizes: "16x16" },
      { url: "/icon-192x192.png?v=pnh2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=pnh2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=pnh2",
    apple: [{ url: "/apple-icon.png?v=pnh2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://piscinasnahorabh.com.br",
    title:
      "Piscinas Na Hora BH — Piscinas de Armação, Infláveis & Lazer em Belo Horizonte (5,0★)",
    description:
      "Especialistas em diversão! Piscinas de armação, infláveis, boias, filtros e artigos de lazer à pronta entrega em BH. Retirada imediata no Caiçaras ou entrega rápida. Nota 5,0★ no Google.",
    siteName: "Piscinas Na Hora BH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piscinas Na Hora BH — Especialistas em Diversão",
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
    "@type": "SportingGoodsStore",
    name: "Piscinas Na Hora BH",
    alternateName: "Piscinas Na Hora • Artigos de Lazer, Piscinas, Camping e Pesca",
    description:
      "Loja especializada em piscinas de armação, piscinas infláveis, boias, bombas, filtros, químicos e lazer em Belo Horizonte - MG. Pronta entrega e retirada imediata no Bairro Caiçaras.",
    telephone: "+5531920006722",
    url: "https://piscinasnahorabh.com.br",
    image: "https://piscinasnahorabh.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Portão preto de Garagem - R. Bangu, 90",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "30750-410",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.9042,
      longitude: -43.9687,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
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
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/piscinas_na_hora/",
      "http://shopee.com.br/piscinasnahorabh",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=pnh2" sizes="any" />
        <link rel="icon" href="/icon-32x32.png?v=pnh2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-16x16.png?v=pnh2" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=pnh2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#031838] selection:bg-[#044296] selection:text-white">
        {children}
      </body>
    </html>
  );
}
