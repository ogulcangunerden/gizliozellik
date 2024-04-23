import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A7",
  description: "A7",
};

const a7 = () => {
  const images = [
    {
      src: "/images/cars/audi/a7.jpeg",
      alt: "A7",
      description: "A7  (2010 - 2018)",
      href: "/audi/a7/c7",
    },
    {
      src: "/images/cars/audi/a7c48.jpeg",
      alt: "A7",
      description: "A7  (2018 - 2024)",
      href: "/audi/a7/c8",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="A7"
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

export default a7;
