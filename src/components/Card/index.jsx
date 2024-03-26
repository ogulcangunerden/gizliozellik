import Link from "next/link";
import Image from "next/image";
import React from "react";

const Card = ({ description, image, href }) => {
  return (
    <Link
      href={href}
      className="mb-4 flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-[#CFD7F8] p-4 text-center opacity-90 transition hover:opacity-100 dark:bg-[#141929] dark:opacity-60 dark:opacity-90 dark:hover:opacity-100 md:max-w-[400px] lg:max-w-[500px]"
    >
      <div className="relative h-56 w-full md:h-auto">
        <Image
          src={image.src}
          alt={image.alt}
          className="h-full w-full rounded-lg object-cover"
          width={400}
          height={300}
        />
      </div>
      <p className="text-xl text-black dark:text-white">{description}</p>
    </Link>
  );
};

export default Card;
