import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Büyükçekmece Gizli Özellik",
  description: "Büyükçekmece Gizli Özellik",
};

const volkswagen = () => {
  return (
    <>
      <Breadcrumb
        pageName="Volkswagen"
        description="Volkswagen gizli özellikleri için lütfen Whatsapp üzerinden iletişime geçiniz."
      />
      <div className="flex items-center justify-center text-center">
        <Image
          src="/images/cars/golf.webp"
          width={700}
          height={600}
          alt="Volkswagen Golf"
        />
      </div>
    </>
  );
};

export default volkswagen;
