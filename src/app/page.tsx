import dynamic from "next/dynamic";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizli Özellik Aktivasyonu ve Araç Kodlama | BMW, Audi, Mercedes, VAG",
  description:
    "Türkiye'nin lider gizli özellik aktivasyon merkezi. BMW F30, G20, Audi, Mercedes ve VAG grubu araçlar için profesyonel coding ve gizli özellik aktivasyonu. 10 yıllık tecrübe, garantili hizmet.",
  keywords:
    "gizli özellik, bmw gizli özellik, audi gizli özellik, mercedes gizli özellik, f30 gizli özellik, g20 gizli özellik, vag gizli özellik, araç kodlama, bmw coding, audi coding, mercedes coding, volkswagen gizli özellik, seat gizli özellik, skoda gizli özellik, cupra gizli özellik, coding istanbul, gizli özellik aktivasyonu, araç yazılım, obd coding",
  robots: "index, follow",
  openGraph: {
    title:
      "Gizli Özellik Aktivasyonu ve Araç Kodlama | BMW, Audi, Mercedes, VAG",
    description:
      "Türkiye'nin lider gizli özellik aktivasyon merkezi. BMW F30, G20, Audi, Mercedes ve VAG grubu araçlar için profesyonel coding ve gizli özellik aktivasyonu. 10 yıllık tecrübe, garantili hizmet.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/cars/yellowdrl1.webp",
        width: 1200,
        height: 630,
        alt: "Gizli Özellik Aktivasyonu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.gizliozellik.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "TR",
    "geo.placename": "İstanbul",
    "geo.position": "41.0082;28.9784",
    ICBM: "41.0082, 28.9784",
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
