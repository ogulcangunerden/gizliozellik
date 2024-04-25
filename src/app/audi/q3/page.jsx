import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Q3",
  description: "Q3 gizli özellik",
};

const q3 = () => {
  const images = [
    {
      src: "/images/cars/audi/q3f2.jpeg",
      alt: "Q3 gizli özellik",
      description: "Q3  (2015+)",
      href: "/audi/q3/f2",
    },
    {
      src: "/images/cars/audi/q3f3.jpeg",
      alt: "Q3 gizli özellik",
      description: "Q3  (2019+)",
      href: "/audi/q3/f3",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Q3"
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

export default q3;
