import dynamic from "next/dynamic";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Video from "@/components/Video";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Büyükçekmece Gizli Özellik",
  description: "Büyükçekmece Gizli Özellik",
  keywords:
    "gizli özellik, f30 gizli özellik, vag gizli özellik, g20 gizli özellik, bmw gizli özellik, gizli özellik aktivasyonu, g22 gizli özellik, g30 gizli özellik ",
  robots: "index, follow",
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
