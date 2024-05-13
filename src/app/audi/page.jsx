import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";
import Card from "@/components/Card";
import { Metadata } from "next";

export const metadata = {
  title: "Audi",
  description: "Audi gizli özellik",
};

const audi = () => {
  const images = [
    {
      src: "/images/cars/audi/a1.webp",
      alt: "Audi A1 Gizli Özellik",
      description: "A1",
      href: "/audi/a1",
    },
    {
      src: "/images/cars/audi/a3.webp",
      alt: "A3",
      description: "A3",
      href: "/audi/a3",
    },
    {
      src: "/images/cars/audi/a4.webp",
      alt: "A4",
      description: "A4",
      href: "/audi/a4",
    },
    {
      src: "/images/cars/audi/a5.webp",
      alt: "A5",
      description: "A5",
      href: "/audi/a5",
    },
    {
      src: "/images/cars/audi/a6.webp",
      alt: "A6",
      description: "A6",
      href: "/audi/a6",
    },
    {
      src: "/images/cars/audi/a7.webp",
      alt: "A7",
      description: "A7",
      href: "/audi/a7",
    },
    {
      src: "/images/cars/audi/a8.webp",
      alt: "A8",
      description: "A8",
      href: "/audi/a8",
    },
    {
      src: "/images/cars/audi/q2.webp",
      alt: "Q2",
      description: "Q2",
      href: "/audi/q2",
    },
    {
      src: "/images/cars/audi/q3.webp",
      alt: "Q3",
      description: "Q3",
      href: "/audi/q3",
    },
    {
      src: "/images/cars/audi/q55.webp",
      alt: "Q5",
      description: "Q5",
      href: "/audi/q5",
    },
    {
      src: "/images/cars/audi/q74m.webp",
      alt: "Q7",
      description: "Q7",
      href: "/audi/q7",
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
