import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "BMW 4 Serisi Gizli Özellik Aktivasyonu | F32, G22, G23, G26 Coding",
  description:
    "BMW 4 Serisi tüm modeller için gizli özellik aktivasyonu. F32-F33-F36 (2013-2019) ve G22-G23-G26 (2020+) coupe, convertible, gran coupe modelleri. Profesyonel coding hizmeti.",
  keywords:
    "bmw 4 serisi gizli özellik, f32 f33 f36 coding, g22 g23 g26 gizli özellik, bmw 4 serisi coding, 4 serisi coupe convertible gran coupe",
  robots: "index, follow",
  openGraph: {
    title: "BMW 4 Serisi Gizli Özellik Aktivasyonu | Tüm Modeller",
    description:
      "BMW 4 Serisi F32, F33, F36, G22, G23, G26 modelleri için profesyonel gizli özellik aktivasyonu ve coding hizmeti.",
    type: "website",
    locale: "tr_TR",
  },
  alternates: {
    canonical: "https://www.buyukcekmecegizliozellik.com/bmw/4-serisi",
  },
};

const Series4 = () => {
  const images = [
    {
      src: "/images/cars/f32.webp",
      alt: "BMW F32 F33 F36 4 Serisi Gizli Özellik",
      description: "F32 - F33 - F36 (2013 - 2019)",
      href: "/bmw/4-serisi/f32",
    },
    {
      src: "/images/cars/g22.webp",
      alt: "BMW G22 4 Serisi Coupe Gizli Özellik",
      description: "G22 Coupe (2020 - )",
      href: "/bmw/4-serisi/g22",
    },
    {
      src: "/images/cars/g22.webp",
      alt: "BMW G23 4 Serisi Convertible Gizli Özellik",
      description: "G23 Convertible (2020 - )",
      href: "/bmw/4-serisi/g23",
    },
    {
      src: "/images/cars/g22.webp",
      alt: "BMW G26 4 Serisi Gran Coupe Gizli Özellik",
      description: "G26 Gran Coupe (2020 - )",
      href: "/bmw/4-serisi/g26",
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
        pageName="BMW 4 Serisi"
        description="BMW 4 Serisi gizli özellik listesini görmek için lütfen aracınızın model kodunu seçiniz. F32/F33/F36 veya G22/G23/G26 modelleri."
      />
      <div className="container mx-auto mb-8 px-4">
        <h1 className="mb-4 text-3xl font-bold">
          BMW 4 Serisi Gizli Özellik Aktivasyonu
        </h1>
        <p className="mb-6 text-lg">
          BMW 4 Serisi ailesinin tüm modellerini destekliyoruz: Coupe (G22),
          Convertible (G23), Gran Coupe (G26) ve önceki nesil F32/F33/F36
          modelleri. Aracınızın model kodunu seçerek gizli özellik listesini
          görüntüleyin.
        </p>
      </div>
      <div className="mx-4 my-4 grid grid-cols-1 gap-4 md:mx-8 md:my-8 md:grid-cols-2 lg:mx-12 lg:my-12 lg:grid-cols-3">
        {images.map((image, index) => (
          <Card
            key={index}
            description={image.description}
            image={image}
            href={image.href}
          />
        ))}
      </div>
    </>
  );
};

export default Series4;
