import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Q7",
  description: "Q7 gizli özellik",
};

const q7 = () => {
  const images = [
    {
      src: "/images/cars/audi/q74m.webp",
      alt: "Q7 gizli özellik",
      description: "Q7  (2015 - 2019)",
      href: "/audi/q7/4m",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Q7"
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

export default q7;
