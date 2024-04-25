import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Q3",
  description: "Q3 gizli özellik",
};

const q3 = () => {
  const items = [
    "Kadran selamlama",
    "Kadrana ve MMI sistemine 'S' veya 'RS' açılış logosu",
    "Yol bilgisayarında 'Tur Zamanlayıcı' (Laptimer)",
    "Yol bilgisayarında 'Yağ Sıcaklık' göstergesinin eklenmesi",
    "MMI Sisteminden gündüz farı açıp kapama",
    "Emniyet kemeri ikazının iptal edilmesi ",
    "“Driving School” özelliği ile multimedya üzerinden anlık hızı ve verilen sinyal yönünü görme.",
    "MMI Sistemine aynı anda iki telefonun bağlanabilmesi",
    "(Opsiyonel) USB Bellek üzerinden seyir halinde video izleme",
    "(Opsiyonel) Apple CarPlay'i aktif olup sadece kablo aracılığı ile bağlanan araçlarda kablosuz Apple CarPlay ve Kablosuz Android Auto aktivasyonu",
    "(Opsiyonel) Audi Phone Apps sistemi aktif olan araçlarda Android telefon üzerinden YouTube ve Tarayıcı aktivasyonu (Apple ve Huawei marka telefonlarda olmaz)",
    "Arka sinyallerin amerikan park olarak ayarlanması (Muayeneden geçmez).",
    "Sinyal verince sis farlarının da yanıp sönmesi (Muayeneden geçmez)",
    "Selektörde farın içindeki yağmur farının da yanması",
    "Park frenini çekince gündüz farlarının sönmesi",
    "Sinyal verince arka park lambalarının da sinyalde yanıp sönmesi (Muayeneden geçmez)",
    "Kapısı açılan tarafın sinyallerinin açılması (Örnek: Sağ kapı açılınca sağ sinyalin açılması - Arkadan gelen araçlara daha görünür olmanızı sağlar)",
    "Far kolu 0 veya Auto konumundayken, Arka Park Lambalarının sürekli yanması",
    "Coming-Home ve Leaving Home özelliğine; sis farı, 3.stop lambası, viraj farı, arka sis farı gibi istediğiniz aydınlatmanın eklenmesi",
    "Dokunmatik konfor sinyal sayısının 3’ten 4 veya 5’e çıkarılması",
    "Ani fren yapınca fren lambalarının flaşör olması ve dörtlülerin yanması (Emergency Brake Lights)",
    "Yağmur farı (yağmur yağdığında otomatik yanan farlar) ve otoban farı (140 km/h üstünde otomatik yanan farlar) aktivasyonu",
    "Ayak aydınlatmasının parlaklığını arttırma",
    "Korna ile kapı kilit onay sesi (Fabrikasyon alarm olan araçlarda buzzerdan öter.)",
    "Hırsızlık önleyici alarm kodlaması",
    "Aracı park ettikten sonra yağmur yağarsa camların ve sunroofun otomatik kapanması (Nem sensörü olan araçlarda çalışır.)",
    "Kumandadan, açılır cam tavanın tam açılıp kapanması (Araç desteklerse)",
    "Hafızalı koltuk olan araçlarda “Easy Entry” özelliğinin açılması (Araç iniş binişlerinde koltuk geriye çekilir)",
    "Katlanır aynaların kumandadan tek basış yerine basılı tutunca katlanması",
    "Gaz pedalı tepkisi hızlandırma",
    "TSC sistemini aktif etme",
    "Yokuş kalkış desteği güçlendirme",
    "Start-Stop iptali",
  ];
  return (
    <>
      <Breadcrumb pageName="Q3" description="Q3 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/q3f3.jpeg"
          alt="q2 gizli özellik"
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

export default q3;
