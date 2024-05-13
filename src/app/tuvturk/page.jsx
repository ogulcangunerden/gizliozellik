import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Gizli Özellik Kapatma",
  description: "Gizli Özellik Kapatma",
};

const skoda = () => {
  return (
    <div style={{ marginBottom: 32 }}>
      <Breadcrumb
        pageName="Gizli Özellik Kapatma"
        description="Gizli Özellik Kapatma"
      />
      <div className="ml-10 flex items-center justify-center text-center">
        <Image
          src="/images/tuvturk.png"
          width={700}
          height={600}
          alt="Gizli Özellik Kapatma"
        />
        <p className="mx-10 mb-10 list-none p-0 pl-4 sm:flex sm:flex-col">
          Amerikan Park, çapraz sinyal tarzı kodlamalar Tüvtürk muayenesinden
          geçmez. Muayene öncesi bu tür kodlamaları orjinale döndürmeniz
          gerekmektedir. Detaylı bilgi için whatsapptan iletişime
          geçebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default skoda;
