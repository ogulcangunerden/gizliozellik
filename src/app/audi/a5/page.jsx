import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "A5",
  description: "A5 gizli özellik",
};

const a5 = () => {
  const images = [
    {
      src: "/images/cars/audi/a58t.webp",
      alt: "A5",
      description: "A5  (2007 - 2016)",
      href: "/audi/a5/8t",
    },
    {
      src: "/images/cars/audi/a5.webp",
      alt: "A5",
      description: "A5  (2016 - 2019)",
      href: "/audi/a5/f5",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="A5"
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

export default a5;
