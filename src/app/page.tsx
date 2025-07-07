import dynamic from "next/dynamic";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gizli Özellik Aktivasyonu ve Araç Kodlama | BMW G20 G22 G23 G26 F44 F40 Coding İstanbul",
  description:
    "Türkiye'nin lider gizli özellik aktivasyon merkezi. BMW G20, G22, G23, G26, F44, F40, Audi, Mercedes ve VAG grubu araçlar için profesyonel coding ve gizli özellik aktivasyonu. Sport Plus, Comfort Plus, M menü. 10 yıllık tecrübe, garantili hizmet, ücretsiz danışmanlık.",
  keywords:
    "gizli özellik, bmw gizli özellik, bmw g20 gizli özellik, bmw g22 gizli özellik, bmw g23 gizli özellik, bmw g26 gizli özellik, bmw f44 gizli özellik, bmw f40 gizli özellik, audi gizli özellik, mercedes gizli özellik, f30 gizli özellik, vag gizli özellik, araç kodlama, bmw coding, audi coding, mercedes coding, volkswagen gizli özellik, seat gizli özellik, skoda gizli özellik, cupra gizli özellik, coding istanbul, gizli özellik aktivasyonu, araç yazılım, obd coding, sport plus modu, comfort plus modu, m menü aktivasyonu, alpina kadran, video izleme aktivasyonu, bmw g20 sport plus, bmw g22 sport plus, bmw g23 coding, bmw g26 coding, bmw f44 sport plus, bmw f40 sport plus, bmw 3 serisi gizli özellik, bmw 4 serisi gizli özellik, bmw 2 serisi gizli özellik, bmw 1 serisi gizli özellik",
  robots: "index, follow",
  openGraph: {
    title:
      "Gizli Özellik Aktivasyonu | BMW G20 G22 G23 G26 F44 F40 Coding İstanbul",
    description:
      "BMW G20, G22, G23, G26, F44, F40 ve tüm modeller için profesyonel gizli özellik aktivasyonu. Sport Plus, Comfort Plus, M menü, video izleme ve 50+ özellik. Garantili hizmet.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.gizliozellik.com",
    siteName: "Gizli Özellik",
    images: [
      {
        url: "https://www.gizliozellik.com/images/cars/yellowdrl1.webp",
        width: 1200,
        height: 630,
        alt: "BMW Gizli Özellik Aktivasyonu G20 G22 G23 G26 F44 F40",
      },
      {
        url: "https://www.gizliozellik.com/images/cars/g20.webp",
        width: 1200,
        height: 630,
        alt: "BMW G20 3 Serisi Gizli Özellik Aktivasyonu",
      },
      {
        url: "https://www.gizliozellik.com/images/cars/g22.webp",
        width: 1200,
        height: 630,
        alt: "BMW G22 4 Serisi Gizli Özellik Aktivasyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gizliozellik",
    creator: "@gizliozellik",
    title: "BMW Gizli Özellik Aktivasyonu | G20 G22 G23 G26 F44 F40 Coding",
    description:
      "BMW modelleri için profesyonel gizli özellik aktivasyonu. Sport Plus, Comfort Plus, M menü ve 50+ özellik. Garantili hizmet.",
    images: ["https://www.gizliozellik.com/images/cars/yellowdrl1.webp"],
  },
  alternates: {
    canonical: "https://www.gizliozellik.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
    "geo.position": "41.0082;28.9784",
    ICBM: "41.0082, 28.9784",
    "article:section": "Gizli Özellik",
    "article:tag": "BMW Gizli Özellik, G20, G22, G23, G26, F44, F40, Coding",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />

      <Video
        title="Yellow DRL"
        paragraph="F ve G Kasalar İçin stoklarımız mevcuttur. Detaylı bilgi için whatsapp veya instagram adresimizden bizlere ulaşabilirsiniz."
        imageUrl="/images/cars/yellowdrl1.webp"
        videoId="Zdjzrf2OwpM"
      />
      <Video
        title="Gizli Özellik Aktivasyonu"
        paragraph="G20 Gizli Özellik Aktivasyonu"
        imageUrl="/images/cars/m340i.webp"
        videoId="MmfewytOljI"
      />

      <Video
        title=""
        paragraph="F44 Gizli Özellik Aktivasyonu"
        imageUrl="/images/cars/f44.webp"
        videoId="w3_H0MwHPFg"
      />
      <Video
        title=""
        paragraph="G20 Stage 1 280 Hp Tune ve Kadran Limitörü Kaldırma"
        imageUrl="/images/cars/g20.webp"
        videoId="ouRRS_t-h8w"
      />
    </>
  );
}
