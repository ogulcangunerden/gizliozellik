import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Audi",
  description: "Audi",
};

const audi = () => {
  const images = [
    {
      src: "/images/cars/audi/a1.jpeg",
      alt: "A1",
      description: "A1",
      href: "/audi/a1",
    },
    {
      src: "/images/cars/audi/a3.jpeg",
      alt: "A3",
      description: "A3",
      href: "/audi/a3",
    },
    {
      src: "/images/cars/audi/a4.jpeg",
      alt: "A4",
      description: "A4",
      href: "/audi/a4",
    },
    {
      src: "/images/cars/audi/a5.jpeg",
      alt: "A5",
      description: "A5",
      href: "/audi/a5",
    },
    {
      src: "/images/cars/audi/a6.jpeg",
      alt: "A6",
      description: "A6",
      href: "/audi/a6",
    },
    {
      src: "/images/cars/audi/a7.jpeg",
      alt: "A7",
      description: "A7",
      href: "/audi/a7",
    },
    {
      src: "/images/cars/audi/a8.jpeg",
      alt: "A8",
      description: "A8",
      href: "/audi/a8",
    },
    {
      src: "/images/cars/audi/q2.jpeg",
      alt: "Q2",
      description: "Q2",
      href: "/audi/q2",
    },
    {
      src: "/images/cars/audi/q3.jpeg",
      alt: "Q3",
      description: "Q3",
      href: "/audi/q3",
    },
    {
      src: "/images/cars/audi/q55.jpeg",
      alt: "Q5",
      description: "Q5",
      href: "/audi/q5",
    },
    {
      src: "/images/cars/audi/q7.jpeg",
      alt: "Q7",
      description: "Q7",
      href: "/audi/q7",
    },
    {
      src: "/images/cars/audi/tt.jpeg",
      alt: "TT",
      description: "TT",
      href: "/audi/tt",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Audi"
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

export default audi;
