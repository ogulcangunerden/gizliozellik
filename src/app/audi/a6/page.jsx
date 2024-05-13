import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A6",
  description: "A6 gizli özellik",
};

const a6 = () => {
  const images = [
    {
      src: "/images/cars/audi/a6c7.webp",
      alt: "A6",
      description: "A6  (2011 - 2014)",
      href: "/audi/a6/c7",
    },
    {
      src: "/images/cars/audi/a6.webp",
      alt: "A6",
      description: "A6  (2015 - 2018)",
      href: "/audi/a6/c7fl",
    },
    {
      src: "/images/cars/audi/a6c8.webp",
      alt: "A6",
      description: "A6  (2018+)",
      href: "/audi/a6/c8",
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
        pageName="A6"
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

export default a6;
