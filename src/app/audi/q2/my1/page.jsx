import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Q2",
  description: "Q2 gizli özellik",
};

const q2 = () => {
  const items = [
    "Kadran selamlama",
    "Kadrana ve MMI sistemine 'S' veya 'RS' açılış logosu",
    "Yol bilgisayarında 'Tur Zamanlayıcı' (Laptimer)",
    "Yol bilgisayarında 'Yağ Sıcaklık' göstergesinin eklenmesi",
    "MMI Sisteminden gündüz farı açıp kapama",
    "Emniyet kemeri ikazının iptal edilmesi ",
    "“Driving School” özelliği ile multimedya üzerinden anlık hızı ve verilen sinyal yönünü görme.",
    "Multimedya sistemine “Off-Road” menüsü ekleme (Lastik açısı,yağ sıcaklığı - 2021 öncesinde açılır)",
    "MMI Navigation Plus olan araçlarda Seyir Halinde Video izleme özelliği (Ek ücretlidir.)",
    "Arka sinyallerin amerikan park olarak ayarlanması (Muayeneden geçmez).",
    "Selektör atınca sis farlarının da eşlik etmesi (Çakarlı Selektör).",
    "Sinyal verince sis farlarının da yanıp sönmesi (Muayeneden geçmez)",
    "Sis farlarının viraj lambası olarak ayarlanması (Dönüşe duyarlı sis farı)",
    "Sinyal verince arka park lambalarının da sinyalde yanıp sönmesi (Muayeneden geçmez)",
    "Far kolu 0 veya Auto konumundayken, Arka Park Lambalarının sürekli yanması",
    "Park frenini çekince gündüz farlarının sönmesi",
    "Coming-Home ve Leaving Home özelliğine; sis farı, 3.stop lambası, viraj farı, arka sis farı gibi istediğiniz aydınlatmanın eklenmesi",
    "Dokunmatik konfor sinyal sayısının 3’ten 4 veya 5’e çıkarılması",
    "Ani fren yapınca fren lambalarının flaşör olması ve dörtlülerin yanması (Emergency Brake Lights)",
    "Yağmur farı (yağmur yağdığında otomatik yanan farlar) ve otoban farı (140 km/h üstünde otomatik yanan farlar) aktivasyonu",
    "Ayak aydınlatmasının parlaklığını arttırma",
    "Korna ile kapı kilit onay sesi (Fabrikasyon alarm olan araçlarda buzzerdan öter.)",
    "Hırsızlık önleyici alarm kodlaması",
    "Aracı park ettikten sonra yağmur yağarsa camların ve sunroofun otomatik kapanması (Nem sensörü olan araçlarda çalışır.)",
    "Geri viteste sağ aynanın aşağıyı göstermesi",
    "Koltuk ısıtmanın son bıraktığınız ayarı hatırlaması",
    "Kumandadan, açılır cam tavanın tam açılıp kapanması (Araç desteklerse)",
    "Anahtarsız çalıştırma sistemine sahip araçlarda, araç çalışır durumdayken uzaktan kumanda ile kapıların kilitlenmesi",
    "Anahtarsız çalıştırma olan araçlarda, Start-Stop buton ışıklarının kalp ritmi gibi yanıp sönmesi",
    "Hafızalı koltuk olan araçlarda “Easy Entry” özelliğinin açılması (Araç iniş binişlerinde koltuk geriye çekilir)",
    "Katlanır aynaların kumandadan tek basış yerine basılı tutunca katlanması",
    "Gaz pedalı tepkisi hızlandırma",
    "Otomatik direksiyon algoritması ile sürüşe duyarlı direksiyon (Sürüş mod seçimi olmayan araçlarda)",
    "TSC sistemini aktif etme",
    "Yokuş kalkış desteği güçlendirme",
    "Start-Stop iptali",
    "Sürüş mod seçimi olan araçlarda mod değişiminin kadranda da gözükmesi",
  ];
  return (
    <>
      <Breadcrumb pageName="Q2" description="Q2 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/q2.webp"
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

export default q2;
