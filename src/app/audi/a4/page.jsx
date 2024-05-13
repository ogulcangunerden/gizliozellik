import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A4",
  description: "A4 gizli özellik",
};

const a4 = () => {
  const images = [
    {
      src: "/images/cars/audi/a4.webp",
      alt: "A4",
      description: "A4  (2017 - 2016)",
      href: "/audi/a4/b8",
    },
    {
      src: "/images/cars/audi/a4b99.webp",
      alt: "A4",
      description: "A4  (2017 - 2019)",
      href: "/audi/a4/b9",
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
        pageName="A4"
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

export default a4;
