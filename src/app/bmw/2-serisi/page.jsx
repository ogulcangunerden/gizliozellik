import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "2 Serisi",
  description: "2 Serisi gizli özellik",
};

const Series2 = () => {
  const images = [
    {
      src: "/images/cars/f22.webp",
      alt: "F22 - F23",
      description: "F22 - F23  (2014 - 2018)",
      href: "/bmw/2-serisi/f22",
    },
    {
      src: "/images/cars/f44.webp",
      alt: "F44",
      description: "F44 (2019 - )",
      href: "/bmw/2-serisi/f44",
    },
    {
      src: "/images/tuvturk.png",
      alt: "Tuvturk",
      description: "Gizli Özellik kapatma",
      href: "/tuvturk",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="2 Serisi"
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

export default Series2;
