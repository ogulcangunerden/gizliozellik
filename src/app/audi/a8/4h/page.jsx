import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A8",
  description: "A8",
};

const a8 = () => {
  const items = [
    "Kadran selamlama",
    "Kadran ekranı başlangıç ekranını değiştirme",
    "Multimedya ekranında gündüz farı ayarlarının aktifleştirilmesi ",
    "Korna ikazlı araç kilidi açma ve kapatma (donanım desteği varsa) ",
    "Hareket halinde video izleme engellemesini kaldırma (duruyorken video izlenebiliyorsa) (MirrorLink dahil)",
    "Hayalet ekranda tur zamanlayıcısı ekranı",
    "Soundaktör (kabinde sanal motor sesi) (donanım desteği varsa)",
    "Kadran ekranında tur zamanlayıcısı göstergesi",
    "Multimedya ekranında yeşil mühendislik menüsünü açabilme",
    "Amerikan far lambaları (bazı modellerde çalışmayabilir)",
    "Stopların gündüz farlarıyla beraber sürekli yanması",
    "Sürücü kapısı açıldığında motorun durması",
    "Korna ikazlı araç kilidi açma ve kapatma (donanım desteği varsa) ",
    "Geri viteste sağ aynanın sağ arka tekere yönelmesi",
    "Emniyet kemeri ikaz sesi açma veya kapatma",
    "Start-Stop'un otomatik devreye girmesini kapatma",
    "Drive Select'e Efficiency, AllRoad sürüş modlarının eklenmesi",
  ];
  return (
    <>
      <Breadcrumb pageName="A8" description="A8 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a8fl.jpeg"
          alt="a8"
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

export default a8;
