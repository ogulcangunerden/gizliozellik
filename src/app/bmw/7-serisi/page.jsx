import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "7 Serisi",
  description: "7 Serisi gizli özellik",
};

const Series7 = () => {
  const images = [
    {
      src: "/images/cars/f01.webp",
      alt: "F01 - F02",
      description: "F01 - F02 (2008 - 2015)",
      href: "/bmw/7-serisi/f01",
    },
    {
      src: "/images/cars/g11.webp",
      alt: "G11",
      description: "G11 (2015 - 2022)",
      href: "/bmw/7-serisi/g11",
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
        pageName="7 Serisi"
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

export default Series7;
