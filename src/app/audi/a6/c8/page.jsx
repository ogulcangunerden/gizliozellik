import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A6",
  description: "A6 gizli özellik",
};

const a6 = () => {
  const items = [
    "Seyir halinde video seyretme (USB Bellek üzerinden)",
    "Kadran selamlama Sanal Kokpit’te (hayalet kadran) ara hızların da görünmesi",
    "Araca binince ses efekti ile sizi karşılar (Welcome Sound aktivasyonu)",
    "Sanal Kokpit’te sadece “D”veya “S” yerine mevcuttaki vitesin görünmesi (Örnek: D1,D2,D3 ya da S1,S2,S3)",
    "Sanal Kokpite Tur Sayacı (Laptimer)",
    "Sanal Kokpite İvme Ölçer (0 - 100 / 0- 200 / Yarım mil ve çeyrek mil)",
    "Sanal Kokpite Audi Sport karşılama animasyonu",
    "Sanal Kokpite Lastik Basınç İzleme menüsü",
    "Emniyet kemeri ikazının kapatılması",
    "MMI Sistemine aynı anda iki telefonun bağlanabilmesi",
    "Multimedya sistemine RS Monitörü aktivasyonu (Motorun en çok ısınan bileşenlerini takip etmenize olanak sağlar / Lastik basınçlarını takip etmenize olanak sağlar)",
    "Orijinal alarm olan araçlarda DWA ile kapı kilit onay sesi",
    "Konfor sinyal sayısının 4 ya da 5 yapılması",
    "Araç çalışırken kumandadan kapıların kilitlenebilmesi",
    "MMI Üzerinden gündüz farı aç-kapat menüsü",
    "Motoru stop edince park freninin otomatik devreye girmesi",
    "Ani frenlerde fren lambalarının flaşör olarak yanması",
    "Uzun farlara kısa farların da eşlik etmesi (daha etkili selektör)",
    "Otoban Farı aktivasyonu (Hızınız 140 KM/h'yi geçince ekstra 70 metre uzağı aydınlatır)",
    "Yağmur Farı aktivasyonu (Yağmurda daha geniş açılı aydınlatma performansı sağlar)",
    "Arka stop karşılama animasyonunun RS Modellerdeki gibi yapılması (Bu özellik için arka stoplarda mevcutta basit animasyon olması gerekir)",
    "Kumandadan sunroofun eğimli açılması yerine tam açılması",
    "Park freni çekilince gündüz farının sönmesi",
    "Hafızalı koltuk olan araçlarda “Easy Entry” özelliği",
    "Arka park lambalarının gündüz de yanması",
    "Start-Stop iptali",
  ];
  return (
    <>
      <Breadcrumb pageName="A6" description="A6 Gizli özellik listesi" />
      <div className="mb-20  flex justify-center">
        <Image
          src="/images/cars/audi/a6c8.webp"
          alt="a6"
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

export default a6;
