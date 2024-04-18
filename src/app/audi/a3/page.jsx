import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A3",
  description: "A3",
};

const a3 = () => {
  const images = [
    {
      src: "/images/cars/audi/a3.jpeg",
      alt: "A3",
      description: "A3  (2013 - 2020)",
      href: "/audi/a3/8v",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="A3"
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

export default a3;
