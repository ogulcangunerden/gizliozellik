import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "1 Serisi",
  description: "1 Serisi gizli özellik",
};

const Series1 = () => {
  const images = [
    {
      src: "/images/cars/f20.webp",
      alt: "F20 - F21",
      description: "F20 - F21  (2012 - 2019)",
      href: "/bmw/1-serisi/f20",
    },
    {
      src: "/images/cars/m135.webp",
      alt: "F40",
      description: "F40 (2019 - )",
      href: "/bmw/1-serisi/f40",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="1 Serisi"
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

export default Series1;
