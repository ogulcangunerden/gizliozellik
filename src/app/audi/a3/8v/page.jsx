import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A3",
  description: "A3 gizli özellik",
};

const a3 = () => {
  const items = [
    "Kadran selamlama",
    "Multimedya sistemine optik park sensörü görselinin eklenmesi",
    "Yol bilgisayarında “Tur Zamanlayıcı” (Laptimer)",
    "Yol bilgisayarında “Yağ Sıcaklık” göstergesi",
    "Teyp üzerinden gündüz farı açıp kapama",
    "Emniyet kemeri ikazının iptal edilmesi",
    "Yol bilgisayarı açılış logosunun “S3” yapılması",
    "Multimedya sistemi açılış logosu değiştirme (S3 Quattro, RS 3)",
    "“Driving School” özelliği ile multimedya üzerinden anlık hızı ve verilen sinyal yönünü görme.",
    "Amerikan parklar (Makyajlı full LED farlarda açılmaz – muayeneden geçmez)",
    "Makyaj öncesi Led Arka Stop olan araçlarda arka sinyal çubuklarının kendi içinde sıralı yanması(Yarı kayan sinyal – muayeneden geçmez)",
    "Arka sinyallerin amerikan park olarak ayarlanması (Muayeneden geçmez)",
    "Selektör atınca sislerinde eşlik etmesi",
    "Sinyal verince ön gündüz farlarının da sinyal lambası gibi yanıp sönmesi (Muayeneden geçmez)",
    "Sis farlarının viraj lambası olarak ayarlanması (Dönüşe duyarlı sis farı)",
    "Selektör yapınca gündüz farlarının sönmesi",
    "Farlar kapalıyken selektör yapınca kısa huzmeli farlarında selektör atması",
    "Bi-Xenon farlı araçlarda viraj farının selektöre eşlik etmesi",
    "Led gündüz farının parlaklıklarının arttırılması",
    "Sinyal verince gündüz ledlerinin kısılması",
    "Sinyal verince arka park lambalarının da sinyalde yanıp sönmesi (Muayeneden geçmez – istenirse turuncular iptal edilip tam Corvette tarzı arka sinyal yapılabilir)",
    "Park frenini çekince gündüz farlarının sönmesi",
    "Frene basınca arka lambaların tamamının fren lambası olarak yanması (Halojen stop lambalarında açılır – Orijinalinde sadece dış taraf yanar)",
    "Coming Home ve Leaving Home özelliğine; sis farı, 3.stop lambası, viraj farı, arka sis farı gibi istediğiniz aydınlatmanın eklenmesi",
    "Far sensörü olmayan araçlarda Coming-Home ve Leaving Home (Karşılama ve Uğurlama ışıkları) özelliğini açma",
    "Dokunmatik konfor sinyal sayısının 3’ten 4 veya 5’e çıkarılması",
    "Ani fren yapınca fren lambalarının flaşör olması ve dörtlülerin yanması",
    "Arka park lambalarının far kumandası “0” veya “Auto” konumundayken gündüz de yanması",
    "Yağmur farı (yağmur yağdığında otomatik yanan farlar) ve otoban farı (140 km/h üstünde otomatik yanan farlar) aktivasyonu",
    "Ayak aydınlatmasının parlaklığını arttırma",
    "Korna ile kapı kilit onay sesi",
    "Hırsızlık önleyici Alarm kodlaması",
    "Aracı park ettikten sonra yağmur yağarsa camların ve sunroofun otomatik kapanması (Yağmur sensörü RLHS ise açılır)",
    "Geri viteste sağ aynanın aşağı inmesi",
    "Geri viteste arka sileceklerin çalışması",
    "Kumandadan sunroofun tam açılıp kapanması (Normalde sadece arkası kalkar)",
    "Anahtarsız çalıştırma sistemine sahip araçlarda, araç çalışır durumdayken uzaktan kumanda ile kapıların kilitlenmesi",
    "Anahtarsız çalıştırma olan araçlarda, Start-Stop buton ışıklarının kalp ritmi gibi yanıp sönmesi",
    "Hafızalı koltuk olan araçlarda “Easy Entry” özelliğinin açılması (Araç iniş binişlerinde koltuk geriye çekilir)",
    "Katlanır aynaların kumandadan tek basış yerine basılı tutunca katlanması",
    "Gaz pedalı tepkisi hızlandırma",
    "Direksiyon sertleştirme (Audi Drive Select opsiyonu olmayan araçlar için)",
    "TSC (Tork Telafi) sistemini devreye alma",
    "Yokuş kalkış desteği güçlendirme",
    "Start-Stop iptali",
    "Sürüş mod seçimi olan araçlarda mod değişiminin kadranda da gözükmesi",
    "Kodlama hatası veya arızasının düzeltilmesi (Örnek: Farların mantıksız çalışması, göstergede “Aydınlatma hatası” arızasının çıkması vs. EK ÜCRETE TABİDİR)",
    "Akü tanıtımı (EK ÜCRETE TABİDİR)",
    "MMI Navigation Plus olan araçlar için seyir halinde video izleme  (EK ÜCRETE TABİDİR)",
    "Hata: Servis! Aracı sadece “P” konumunda terk edin. Uyarısının parça değiştirmeden yazılım ile kapatılması (EK ÜCRETE TABİDİR)",
  ];
  return (
    <>
      <Breadcrumb pageName="A3" description="A3 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a3.webp"
          alt="a3"
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

export default a3;
