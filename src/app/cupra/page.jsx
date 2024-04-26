import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Büyükçekmece Gizli Özellik",
  description: "Büyükçekmece Gizli Özellik",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cupra"
        description="Cupra gizli özellikleri için lütfen Whatsapp üzerinden iletişime geçiniz."
      />
      <div className="flex items-center justify-center text-center">
        <Image
          src="/images/cars/formentor.webp"
          width={700}
          height={600}
          alt="Sl63"
        />
      </div>
    </>
  );
};

export default Blog;
