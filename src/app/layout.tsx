import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import FixedLogo from "@/components/FixedLogo/FixedLogo";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buyukcekmecegizliozellik.com"),
  title: "Gizli Özellik - BMW, Audi, Mercedes Araç Coding",
  description:
    "BMW, Audi, Mercedes ve VAG grubu araçlar için profesyonel gizli özellik aktivasyonu ve coding hizmeti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Gizli Özellik - Araç Yazılım ve Coding Merkezi",
    image: [
      "https://www.buyukcekmecegizliozellik.com/images/logo.webp",
      "https://www.buyukcekmecegizliozellik.com/images/cars/g20.webp",
      "https://www.buyukcekmecegizliozellik.com/images/cars/g22.webp",
    ],
    description:
      "BMW, Audi, Mercedes ve VAG grubu araçlar için profesyonel gizli özellik aktivasyonu ve coding hizmeti. G20, G22, G23, G26, F44, F40 modelleri uzmanı.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Büyükçekmece",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.0082",
      longitude: "28.5862",
    },
    url: "https://www.buyukcekmecegizliozellik.com",
    telephone: "+905306002800",
    email: "info@buyukcekmecegizliozellik.com",
    priceRange: "₺₺",
    openingHours: ["Mo-Sa 09:00-18:00"],
    serviceType: [
      "Araç Yazılım",
      "Gizli Özellik Aktivasyonu",
      "BMW Coding",
      "Audi Coding",
      "Mercedes Coding",
    ],
    areaServed: {
      "@type": "Place",
      name: "Büyükçekmece, İstanbul, Türkiye",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gizli Özellik Aktivasyon Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BMW G20 Gizli Özellik Aktivasyonu",
            description:
              "BMW G20 3 Serisi için Sport Plus, Comfort Plus ve M menü aktivasyonu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BMW G22 Gizli Özellik Aktivasyonu",
            description:
              "BMW G22 4 Serisi Coupe için Sport Plus, Comfort Plus ve M menü aktivasyonu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BMW F44 Gizli Özellik Aktivasyonu",
            description:
              "BMW F44 2 Serisi Gran Coupe için Sport Plus, Comfort Plus ve M menü aktivasyonu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BMW F40 Gizli Özellik Aktivasyonu",
            description:
              "BMW F40 1 Serisi için Sport Plus, Comfort Plus ve M menü aktivasyonu",
          },
        },
      ],
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "BMW Müşterisi",
      },
      reviewBody:
        "Profesyonel gizli özellik aktivasyonu hizmeti. G20 aracım için tüm özellikler başarıyla açıldı.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "BMW G20 gizli özellik aktivasyonu ne kadar sürer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMW G20 gizli özellik aktivasyonu genellikle 30-45 dakika sürer. Sport Plus, Comfort Plus ve M menü aktivasyonu dahildir.",
        },
      },
      {
        "@type": "Question",
        name: "G22, G23, G26 modelleri için hangi özellikler açılabilir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "G22, G23, G26 modelleri için Sport Plus modu, Comfort Plus, M kadran teması, video izleme, X menü ve 20+ gizli özellik açılabilir.",
        },
      },
      {
        "@type": "Question",
        name: "F44 ve F40 modellerinde coding garantisi var mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, F44 ve F40 modellerinde tüm gizli özellik aktivasyonları için tam garanti sunuyoruz.",
        },
      },
    ],
  };

  return (
    <html suppressHydrationWarning lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Gizli Özellik" />
        <meta name="generator" content="Next.js" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />

        {/* Geo tags */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Büyükçekmece, İstanbul" />
        <meta name="geo.position" content="41.0082;28.5862" />
        <meta name="ICBM" content="41.0082, 28.5862" />

        {/* Open Graph tags */}
        <meta property="og:site_name" content="Gizli Özellik" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gizliozellik" />
        <meta name="twitter:creator" content="@gizliozellik" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.buyukcekmecegizliozellik.com" />

        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Analytics />
          <SpeedInsights />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <FixedLogo />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
