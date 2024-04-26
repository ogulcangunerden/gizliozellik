import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A8",
  description: "A8 gizli özellik",
};

const a8 = () => {
  const images = [
    {
      src: "/images/cars/audi/a8d4.webp",
      alt: "A8 D4, 4H GİZLİ ÖZELLİK",
      description: "A8  (2010 - 2013)",
      href: "/audi/a8/d4",
    },
    {
      src: "/images/cars/audi/a8fl.webp",
      alt: "A8 D4, 4H MAKYAJLI GİZLİ ÖZELLİK",
      description: "A8  (2013 - 2018)",
      href: "/audi/a8/4h",
    },
    {
      src: "/images/cars/audi/a8d5.webp",
      alt: "A8 D5 GİZLİ ÖZELLİK",
      description: "A8  (2017-2022)",
      href: "/audi/a8/d5",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="A8"
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

export default a8;
