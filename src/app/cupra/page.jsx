import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Cupra Serisi",
  description: "Cupra gizli özellik",
};

const Cupra = () => {
  const images = [
    {
      src: "/images/cars/cupraleon.webp",
      alt: "Cupra Leon Gizli Özellik",
      description: "Cupra Leon  (2020 - )",
      href: "/cupra/leon",
    },
    {
      src: "/images/cars/formentor.webp",
      alt: "Cupra Formentor",
      description: "Cupra Formentor (2020 - )",
      href: "/cupra/formentor",
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
        pageName="Cupra"
        description="Gizli özellik listesini görmek için lütfen aracınızın modelini seçiniz."
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

export default Cupra;
