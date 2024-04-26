import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Q5",
  description: "Q5 gizli özellik",
};

const q5 = () => {
  const images = [
    {
      src: "/images/cars/audi/q5.webp",
      alt: "Q5 gizli özellik",
      description: "Q5  (2007 - 2016)",
      href: "/audi/q5/my1",
    },
    {
      src: "/images/cars/audi/q5my2.webp",
      alt: "Q5 gizli özellik",
      description: "Q5  (2021 - 2024)",
      href: "/audi/q5/my2",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Q5"
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

export default q5;
