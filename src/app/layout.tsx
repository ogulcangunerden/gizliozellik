"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import FixedLogo from "@/components/FixedLogo/FixedLogo";
import { Inter } from "next/font/google";
import { PreloadResources } from "./preload-resources";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

PreloadResources();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Gizli Özellik - Araç Yazılım ve Coding Merkezi",
    image: "https://www.gizliozellik.com/images/logo.webp",
    description:
      "BMW, Audi, Mercedes ve VAG grubu araçlar için profesyonel gizli özellik aktivasyonu ve coding hizmeti.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.0082",
      longitude: "28.9784",
    },
    url: "https://www.gizliozellik.com",
    telephone: "+905555555555",
    priceRange: "₺₺",
    openingHours: "Mo-Sa 09:00-18:00",
    serviceType: ["Araç Yazılım", "Gizli Özellik Aktivasyonu", "Coding"],
    areaServed: "İstanbul",
  };

  return (
    <html suppressHydrationWarning lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
