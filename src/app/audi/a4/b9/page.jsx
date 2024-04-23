import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A4",
  description: "A4",
};

const a4 = () => {
  const items = [
    "Kadran selamlama (ekran versiyonunun desteklemesi gerekir)",
    "S4 Sport Tema (ekran versiyonunun desteklemesi gerekir)",
    "RS4 Sport Tema (ekran versiyonunun desteklemesi gerekir)",
    "Detaylı hız kadranı (ara hızları içerir) (hayalet ekran gerektirir)",
    "Fabrikasyon navigasyon olan araçlarda navigasyonun hayalet ekrana yansıtılması",
    "Multimedya ekranı açılış sesi",
    "Multimedya ekran açılış logosu (A4, S4, RS4 vb.)",
    "Kadran başlangıç logosu (A4, S4, RS4 vb.)",
    "Lap timer (tur zamanlayıcısı göstergesi)",
    "G-Meter göstergesi",
    "Stopların gündüz farlarıyla beraber sürekli yanması (gündüz dahil)",
    "Uzun far asistanı aktivasyonu (donanım desteği varsa)",
    "Araç içinden kumanda ile merkezi kilit sistemini kullanabilme (motor çalışıyorken dahil)",
    "Kapının açıldığı camın hafif aralık bırakıp kapı kapandığında tekrar eski konumuna geri dönmesi",
    "Kumanda ile camların uzaktan açılıp kapatılabilmesi",
    "Geri viteste sağ aynanın sağ arka tekere yönelmesi (donanım desteği varsa)",
    "Emniyet kemer ikaz sesini iptal etme veya 6 kez uyarı verip kapanmasını sağlama",
    "Şerit asistanı aktivasyonu (donanım desteği varsa)",
    "Adaptif şerit kılavuzu (donanım desteği ve şerit asistanı varsa)",
    "Yokuş kalkış desteği güçlendirme",
    "Start Stop iptali",
  ];
  return (
    <>
      <Breadcrumb pageName="A4" description="A4 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a4b99.jpeg"
          alt="a4"
          width={500}
          height={500}
        />
      </div>
      <div className="ml-10">
        Açılacak özellikler aracınızın donanımına göre değişiklik gösterebilir.
      </div>
      <List items={items} />
    </>
  );
};

export default a4;
