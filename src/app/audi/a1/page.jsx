import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A1",
  description: "A1 gizli özellik",
};

const a1 = () => {
  const images = [
    {
      src: "/images/cars/audi/a1.webp",
      alt: "A1",
      description: "A1  (2010 - 2018)",
      href: "/audi/a1/8x",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="A1"
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

export default a1;
