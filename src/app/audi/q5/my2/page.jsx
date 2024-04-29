import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Q5",
  description: "Q5 gizli özellik",
};

const q5 = () => {
  const items = [
    "USB Bellek üzerinden seyir halinde video seyretme (Telefondaki videoyu yansıtmaz. USB Flash diske attığınız videoları izlersiniz)",
    "Android telefonlardan seyir halinde YouTube ve Tarayıcı kullanma (1- Audi Phone Apps açık olmalı / 2-Apple ve Huawei marka telefonlarda olmaz)",
    "Kontak ilk açıldığında ibrelerin sona vurması (Kadran selamlama)",
    "Sanal Kokpitte ara hızların da görünmesi",
    "Sanal Kokpite Audi Sport karşılama animasyonu",
    "Sanal Kokpitte sadece “D”veya “S” yerine mevcuttaki vitesin görünmesi (Örnek: D1,D2,D3 ya da S1,S2,S3)",
    "Sanal Kokpite Tur Sayacı (Laptimer)",
    "Sanal Kokpite İvme Ölçer (0-100 / 0-200 / 0-400 Metre / 0-801 Metre)",
    "Sanal Kokpitteki araç görüntüsünün RS Modele çevrilmesi",
    "Multimedya ekranına RS Monitörü (Motorun en çok ısınan bileşenlerini takip etmenize olanak sağlar)",
    "Araca bindiğinizde karşılama sesi (Audi Welcome Sound)",
    "Emniyet kemeri ikazının iptal edilmesi",
    "MMI Sistemine aynı anda iki telefonun bağlanabilmesi",
    "Orijinal alarm olan araçlarda DWA ile kapı kilit onay sesi",
    "Konfor sinyal sayısının 4 ya da 5 yapılması",
    "Araç çalışırken kumandadan kapıların kilitlenebilmesi",
    "MMI Üzerinden gündüz farı aç-kapat menüsü",
    "Motoru stop edince park freninin otomatik çekmesi",
    "Ani frenlerde fren lambalarının flaşör olarak yanması",
    "Selektöre farın içindeki Yağmur Farının da eşlik etmesi",
    "Otoban Farı aktivasyonu (130 KM/H üstündeki hızlarda 80 metreye kadar ekstra aydınlatma menzili sağlar)",
    "Kumandadan sunroofun eğimli açılması yerine tam açılması",
    "Park freni çekilince gündüz farının sönmesi",
    "Hafızalı koltuk olan araçlarda “Easy Entry” özelliği",
    "Arka park lambalarının gündüz de yanması",
    "Start-Stop iptali",
  ];
  return (
    <>
      <Breadcrumb pageName="Q5" description="Q5 Gizli özellik listesi" />
      <div className="mb-20  flex justify-center">
        <Image
          src="/images/cars/audi/q5my2.webp"
          alt="q5 gizli özellik"
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

export default q5;
