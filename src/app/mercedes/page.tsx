import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Büyükçekmece Gizli Özellik",
  description: "Büyükçekmece Gizli Özellik",
};

const mercedes = () => {
  return (
    <>
      <Breadcrumb
        pageName="Mercedes"
        description="Mercedes gizli özellikleri için lütfen şase numaranız ile birlikte Whatsapp üzerinden iletişime geçiniz."
      />
      <div className="flex items-center justify-center text-center">
        <Image src="/images/cars/sl.jpeg" width={700} height={600} alt="Sl63" />
      </div>
    </>
  );
};

export default mercedes;
