import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/3 justify-center px-4 py-4 sm:w-1/4 md:w-1/5 md:px-8 md:py-8 lg:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-24 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100 md:h-32"
      >
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden dark:block"
          layout="fill"
          objectFit="contain"
        />
        <Image
          src={image}
          alt={name}
          fill
          className="block dark:hidden"
          layout="fill"
          objectFit="contain"
        />
      </a>
    </div>
  );
};
