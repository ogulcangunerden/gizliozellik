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
    "Kadran selamlama",
    "Tur zamanlayıcı ve yağ sıcaklığı (laptimer)",
    "Multimedya sistemine optik park görseli (Faceliftlerde açılmaz)",
    "Teyp üzerinden gündüz farı açıp kapama",
    "Emniyet kemeri ikazı iptali",
    "MMI üzerinden akü durumunun görüntülenmesi",
    "MMI üzerinden gündüz farı aç-kapa menüsü",
    "Multimedya sistemi açılış logosu değiştirme (SQ5, S Line - Facelift Q5’lerde logo seçeneği bulunmamaktadır)",
    "Multimedya sistemine dijital hız göstergesi (Driving School - Faceliftlerde açılmaz)",
    "Seyir halinde video izleme (Bu özellik aracınıza video izleme özelliği kazandırmaz, video izlenebilen ünitelerde hareket halinde video izlemeyi aktif eder)",
    "Kadran karşılama logosu değiştirme (5Q5,RSQ5)",
    "Amerikan parklar",
    "Selektör yapınca sis farlarının da yanması",
    "Ayak aydınlatmasının sürüş esnasında açık kalması",
    "Dönüşe duyarlı sis farı",
    "Gündüz ledlerinin parlaklığının arttırılması",
    "İç aydınlatmanın teyp üzerinden parlaklığının ayarlanması",
    "Sinyal verince ledlerin kısılması",
    "Far kolu 0 veya Auto konumundayken arka park lambalarının gündüz de yanması",
    "Park frenini çekince gündüz farlarının sönmesi",
    "Yağmur farı (Yağmur yağınca farları açar, ışık huzmesini genişletir, dolayısıyla daha net görüş açısı sağlar – Bi-Xenon farlı araçlarda açılır)",
    "Otoyol farı (110 km/h hızını geçince ışık huzmesini genişlik olarak daraltır, dolayısıyla daha uzağı aydınlatır – Bi-Xenon farlı araçlarda açılır)",
    "DWA ile kapı kilit onay sesi (sadece orijinal alarm olan araçlarda çalışır)",
    "Gaza dokununca park freninin otomatik inmesi (Emniyet kemeri takılı olmasa bile)",
    "Frene basmaya gerek kalmadan park freninin indirilmesi",
    "Ani frenlerde, fren lambalarının flaşör olması ve dörtlü ikaz lambalarının otomatik devreye girmesi",
    "Geri viteste sağ aynanın aşağı inmesi",
    "Geri viteste arka sileceklerin çalışması",
    "Katlanır ayna olan araçlarda kumandadan ayna katlama",
    "Gaz pedalı tepkisi hızlandırma",
    "Hafızalı start stop (Son tercihinizi hatırlar)",
    "Lastik basınç izleme sisteminin aktif edilmesi (Multimedya sisteminizde Green Engineering Menu olması gerekiyor)",
    "Audi Drive Select (Multimedya sisteminizde Green Engineering Menu olması gerekiyor)",
  ];
  return (
    <>
      <Breadcrumb pageName="Q5" description="Q5 Gizli özellik listesi" />
      <div className="mb-20  flex justify-center">
        <Image
          src="/images/cars/audi/q5.webp"
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
