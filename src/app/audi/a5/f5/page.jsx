import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A5",
  description: "A5",
};

const a5 = () => {
  const items = [
    "Geniş ekranlı Harman Navigation Plus MMI sistemi olan araçlarda USB Bellek,SD Kart veya DVD üzerinden seyir halinde video seyretme (Not: Telefondaki videoyu yansıtmaz)",
    "Android Auto ve CarPlay'i açık olan araçlarda Android telefonlardan seyir halinde YouTube ve Tarayıcı kullanma (1- Audi Smartphone Interface açık olmalı / 2-Apple ve Huawei marka telefonlarda olmaz)",
    "Kontak ilk açıldığında ibrelerin sona vurması (Kadran selamlama)",
    "Sanal Kokpitte sadece “D”veya “S” yerine mevcuttaki vitesin görünmesi (Örnek: D1,D2,D3 ya da S1,S2,S3)",
    "Kadranda 'Tur Sayacı' (Laptimer)",
    "Kadran karşılama logosunun değiştirilmesi (S5,RS5 ve A5 Quattro seçeneklerinden biri)",
    "Multimedya ekranını açılış logosu değiştirme (S5,RS5 ve A5 Quattro seçeneklerinden biri)",
    "Araca bindiğinizde kalp ritmi sesiyle karşılaması (Audi HeartBeat Welcome Sound - Sadece Harman Audi Navigation Plus ünitelerde açılır)",
    "Emniyet kemeri ikazının iptal edilmesi",
    "MMI Sistemine aynı anda iki telefonun bağlanabilmesi",
    "Orijinal alarm olan araçlarda DWA ile kapı kilit onay sesi",
    "Konfor sinyal sayısının 4 ya da 5 yapılması",
    "Araç çalışırken kumandadan kapıların kilitlenebilmesi",
    "MMI Üzerinden gündüz farı aç-kapat menüsü",
    "Motoru stop edince park freninin otomatik çekmesi",
    "Ani frenlerde fren lambalarının flaşör olarak yanması",
    "Farlar kapalıyken selektör yapınca kısa farların da eşlik etmesi",
    "Selektöre farın içindeki Yağmur Farının da eşlik etmesi",
    "Arka park lambalarının gündüz de yanması",
    "Otoban Farı aktivasyonu (130 KM/H üstündeki hızlarda 80 metreye kadar ekstra aydınlatma menzili sağlar)",
    "Yağmur Farı aktivasyonu (Yağmur yağınca otomatik devreye giren farlar)",
    "Park freni çekilince gündüz farının sönmesi",
    "Kumandadan sunroofun eğimli açılması yerine tam açılması",
    "Hafızalı koltuk olan araçlarda “Easy Entry” özelliği",
    "Start-Stop iptali",
  ];
  return (
    <>
      <Breadcrumb pageName="A5" description="A5 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a5.jpeg"
          alt="a5"
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

export default a5;
