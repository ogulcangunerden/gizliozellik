import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "4 Serisi",
  description: "4 Serisi gizli özellik",
};

const Series4 = () => {
  const images = [
    {
      src: "/images/cars/f32.webp",
      alt: "F32 - F33 - F36",
      description: "F32 - F33 - F36  (2013 - 2019)",
      href: "/bmw/4-serisi/f32",
    },
    {
      src: "/images/cars/g22.webp",
      alt: "G22 - G23 - G26",
      description: "G22 - G23 - G26 (2020 - )",
      href: "/bmw/4-serisi/g22",
    },
    {
      src: "/images/tuvturk.webp",
      alt: "Tuvturk",
      description: "Gizli Özellik kapatma",
      href: "/tuvturk",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="4 Serisi"
        description="Gizli özellik listesini görmek için lütfen aracınızın yılını seçiniz."
      />
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
