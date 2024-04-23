"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevButtonClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextButtonClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl">
        <div className="relative">
          <Image
            src={images[selectedImageIndex]}
            alt="Selected"
            width={600}
            height={600}
          />
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full px-4 py-10 sm:py-10"
            onClick={handlePrevButtonClick}
          >
            {"<"}
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full  px-4 py-10 sm:py-10"
            onClick={handleNextButtonClick}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="mb-2 mr-2 cursor-pointer">
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              layout="fixed"
              width={100}
              height={100}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
