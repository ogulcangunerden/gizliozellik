import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title:
    "BMW Gizli Özellik Aktivasyonu | G20 G22 G23 G26 F44 F40 Tüm Seriler Coding Büyükçekmece",
  description:
    "BMW tüm serileri için profesyonel gizli özellik aktivasyonu. G20, G22, G23, G26, F44, F40 ve tüm F/G serisi modeller. Sport Plus, Comfort Plus, M menü, Alpina kadran. Garantili hizmet.",
  keywords:
    "bmw gizli özellik, bmw coding, bmw g20, bmw g22, bmw g23, bmw g26, bmw f44, bmw f40, bmw sport plus, bmw comfort plus, bmw m menü, bmw alpina kadran, bmw video izleme, bmw 1 serisi, bmw 2 serisi, bmw 3 serisi, bmw 4 serisi, bmw 5 serisi, bmw f serisi, bmw g serisi",
  robots: "index, follow",
  openGraph: {
    title:
      "BMW Gizli Özellik Aktivasyonu | Tüm Seriler G20 G22 G23 G26 F44 F40",
    description:
      "BMW tüm serileri için profesyonel gizli özellik aktivasyonu. 1, 2, 3, 4, 5 serisi ve tüm F/G modeller. Garantili hizmet.",
    type: "website",
    locale: "tr_TR",
  },
  alternates: {
    canonical: "https://www.buyukcekmecegizliozellik.com/bmw",
  },
};

const BMW = () => {
  const series = [
    {
      src: "/images/cars/m135.webp",
      alt: "BMW 1 Serisi F20 F40 Gizli Özellik",
      description: "1 Serisi - F20, F40",
      href: "/bmw/1-serisi",
    },
    {
      src: "/images/cars/f44.webp",
      alt: "BMW 2 Serisi F22 F44 Gizli Özellik",
      description: "2 Serisi - F22, F44",
      href: "/bmw/2-serisi",
    },
    {
      src: "/images/cars/g20.webp",
      alt: "BMW 3 Serisi F30 G20 Gizli Özellik",
      description: "3 Serisi - F30, G20",
      href: "/bmw/3-serisi",
    },
    {
      src: "/images/cars/g22.webp",
      alt: "BMW 4 Serisi F32 G22 G23 G26 Gizli Özellik",
      description: "4 Serisi - F32, G22, G23, G26",
      href: "/bmw/4-serisi",
    },
    {
      src: "/images/cars/g30.webp",
      alt: "BMW 5 Serisi F10 G30 Gizli Özellik",
      description: "5 Serisi - F10, G30",
      href: "/bmw/5-serisi",
    },
    {
      src: "/images/cars/f13.webp",
      alt: "BMW 6 Serisi F13 Gizli Özellik",
      description: "6 Serisi - F12, F13",
      href: "/bmw/6-serisi",
    },
    {
      src: "/images/cars/g11.webp",
      alt: "BMW 7 Serisi F01 G11 Gizli Özellik",
      description: "7 Serisi - F01, G11",
      href: "/bmw/7-serisi",
    },
    {
      src: "/images/cars/g15.webp",
      alt: "BMW 8 Serisi G15 Gizli Özellik",
      description: "8 Serisi - G14, G15, G16",
      href: "/bmw/8-serisi",
    },
    {
      src: "/images/cars/g29.webp",
      alt: "BMW Z Serisi G29 Z4 Gizli Özellik",
      description: "Z Serisi - G29 Z4",
      href: "/bmw/z-serisi",
    },
    {
      src: "/images/tuvturk.webp",
      alt: "Tuvturk Gizli Özellik Kapatma",
      description: "Gizli Özellik kapatma",
      href: "/tuvturk",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="BMW Gizli Özellik Aktivasyonu"
        description="BMW tüm serileri için gizli özellik aktivasyonu. Aracınızın serisini seçerek model kodunuzu bulun."
      />
      <div className="container mx-auto mb-8 px-4">
        <h1 className="mb-4 text-3xl font-bold">
          BMW Gizli Özellik Aktivasyonu - Tüm Seriler
        </h1>
        <p className="mb-6 text-lg">
          BMW&apos;nin tüm F ve G serisi modellerini destekliyoruz. G20, G22,
          G23, G26, F44, F40 öncelikli olmak üzere 1, 2, 3, 4, 5, 6, 7, 8 serisi
          ve Z modelleri için profesyonel gizli özellik aktivasyonu. Sport Plus
          modu, Comfort Plus, M menü, Alpina kadran teması ve 50+ gizli özellik.
        </p>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Popüler Modeller</h3>
            <ul className="space-y-2">
              <li>• BMW G20 3 Serisi (2019-2024)</li>
              <li>• BMW G22 4 Serisi Coupe (2020-2024)</li>
              <li>• BMW G23 4 Serisi Convertible (2020-2024)</li>
              <li>• BMW G26 4 Serisi Gran Coupe (2020-2024)</li>
              <li>• BMW F44 2 Serisi Gran Coupe (2019-2024)</li>
              <li>• BMW F40 1 Serisi (2019-2024)</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Başlıca Özellikler</h3>
            <ul className="space-y-2">
              <li>• Sport Plus modu aktivasyonu</li>
              <li>• Comfort Plus modu aktivasyonu</li>
              <li>• M kadran teması (M340i, M440i, M235i)</li>
              <li>• Alpina kadran teması</li>
              <li>• Sürüş esnasında video izleme</li>
              <li>• X menü (pusula, eğim, rakım)</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-xl font-semibold">Avantajlarımız</h3>
            <ul className="space-y-2">
              <li>• 10+ yıllık tecrübe</li>
              <li>• Garantili hizmet</li>
              <li>• Ücretsiz danışmanlık</li>
              <li>• Hızlı randevu sistemi</li>
              <li>• İstanbul merkez lokasyon</li>
              <li>• 150+ memnun müşteri</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-4 my-4 grid grid-cols-1 gap-4 md:mx-8 md:my-8 md:grid-cols-2 lg:mx-12 lg:my-12 lg:grid-cols-3">
        {series.map((serie, index) => (
          <Card
            key={index}
            description={serie.description}
            image={serie}
            href={serie.href}
          />
        ))}
      </div>
    </>
  );
};

export default BMW;
