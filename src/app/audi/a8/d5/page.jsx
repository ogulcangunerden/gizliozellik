import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A8",
  description: "A8 D5 GİZLİ ÖZELLİK",
};

const a8 = () => {
  const items = [
    "Kadran selamlama",
    "Multimedya ekranında gündüz farı ayarlarının aktifleştirilmesi ",
    "Korna ikazlı araç kilidi açma ve kapatma (donanım desteği varsa) ",
    "Hareket halinde video izleme engellemesini kaldırma (duruyorken video izlenebiliyorsa) (MirrorLink dahil)",
    "Soundaktör (kabinde sanal motor sesi) (donanım desteği varsa)",
    "Multimedya başlangıç ekranını değiştirme",
    "Multimedya ekranında yeşil mühendislik menüsünü açabilme",
    "Amerikan far lambaları (bazı modellerde çalışmayabilir)",
    "Hayalet ekranda tur zamanlayıcısı ekranı",
    "Stopların gündüz farlarıyla beraber sürekli yanması",
    "Sinyal esnasında gündüz farının sinyal tarafından sönüp sinyal sonrası yanması (göz kırpma)",
    "Sürücü kapısı açıldığında motorun durması",
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
          src="/images/cars/audi/a8d5.jpeg"
          alt="Audi A8"
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
