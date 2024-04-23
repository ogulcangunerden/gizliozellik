import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A7",
  description: "A7",
};

const a7 = () => {
  const items = [
    "Kadran selamlama",
    "Kadran ekranı başlangıç ekranını değiştirme",
    "Multimedya ekranında gündüz farı ayarlarının aktifleştirilmesi ",
    "Korna ikazlı araç kilidi açma ve kapatma (donanım desteği varsa) ",
    "Hareket halinde video izleme engellemesini kaldırma (duruyorken video izlenebiliyorsa) (MirrorLink dahil)",
    "Soundaktör (kabinde sanal motor sesi) (donanım desteği varsa)",
    "Kadran ekranında tur zamanlayıcısı göstergesi",
    "Multimedya ekranında yeşil mühendislik menüsünü açabilme",
    "Amerikan far lambaları (bazı modellerde çalışmayabilir)",
    "Follow Me aydınlatması olarak kısa hızmeli farları veya gündüz ledlerini kullanma",
    "Hareket halindeyken ayak bölmesi ışıklarının sürekli yanması",
    "Direksiyon açısına göre yanan sis lambaları (viraj aydınlatması)",
    "Stopların gündüz farlarıyla beraber sürekli yanması",
    "Dinamik acil durum ışıkları",
    "Sürücü kapısı açıldığında motorun durması",
    "Silecek temizlemesi sonrasında akan damlaları otomatik silme fonksiyonu",
    "Korna ikazlı araç kilidi açma ve kapatma (donanım desteği varsa) ",
    "Geri viteste sağ aynanın sağ arka tekere yönelmesi",
    "Kumanda ile Sunroof açıp kapatabilme",
    "Emniyet kemeri ikaz sesi açma veya kapatma",
    "Start-Stop'un otomatik devreye girmesini kapatma",
    "Drive Select'e Efficiency, AllRoad sürüş modlarının eklenmesi",
  ];
  return (
    <>
      <Breadcrumb pageName="A7" description="A7 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a7.jpeg"
          alt="a7"
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

export default a7;
