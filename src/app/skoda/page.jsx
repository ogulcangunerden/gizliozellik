import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Büyükçekmece Gizli Özellik",
  description: "Büyükçekmece Gizli Özellik",
};

const skoda = () => {
  return (
    <div style={{ marginBottom: 32 }}>
      <Breadcrumb
        pageName="Skoda"
        description="Skoda gizli özellikleri için lütfen Whatsapp üzerinden iletişime geçiniz."
      />
      <div className="flex items-center justify-center text-center">
        <Image
          src="/images/cars/superb.webp"
          width={700}
          height={600}
          alt="Skoda Superb"
        />
      </div>
    </div>
  );
};

export default skoda;
