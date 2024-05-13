import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "5 Serisi",
  description: "5 Serisi",
};

const Series5 = () => {
  const images = [
    {
      src: "/images/cars/f10.webp",
      alt: "F10 - F11",
      description: "F10 - F11 (2010 - 2016)",
      href: "/bmw/5-serisi/f10",
    },
    {
      src: "/images/cars/g30.webp",
      alt: "G30 - G31",
      description: "G30 - G31 (2017 - 2024)",
      href: "/bmw/5-serisi/g30",
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
        pageName="5 Serisi"
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

export default Series5;
