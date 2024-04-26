import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "8 Serisi",
  description: "8 Serisi gizli özellik",
};

const Series8 = () => {
  const images = [
    {
      src: "/images/cars/g15.webp",
      alt: "G14 - G15 - G16",
      description: "G14 - G15 - G16 (2018 - )",
      href: "/bmw/8-serisi/g15",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="8 Serisi"
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

export default Series8;
