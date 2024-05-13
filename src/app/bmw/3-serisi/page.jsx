import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "3 Serisi",
  description: "3 Serisi gizli özellik",
};

const Series3 = () => {
  const images = [
    {
      src: "/images/cars/f30.webp",
      alt: "F30 - F31",
      description: "F30 - F31  (2012 - 2018)",
      href: "/bmw/3-serisi/f30",
    },
    {
      src: "/images/cars/g20.webp",
      alt: "G20 - G21",
      description: "G20 - G21 (2019 - )",
      href: "/bmw/3-serisi/g20",
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
        pageName="3 Serisi"
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

export default Series3;
