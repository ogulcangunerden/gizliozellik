import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "BMW F30 Gizli Özellik ve Coding | En Kapsamlı F30 Yazılım Merkezi",
  description:
    "BMW F30 3 Serisi gizli özellik aktivasyonu ve coding hizmeti. Angel eyes parlaklık artırma, spor gösterge, M Performance logo, NBT video oynatma, launch control ve 20+ özel fonksiyon. Profesyonel ekip, garantili hizmet.",
  keywords:
    "f30 gizli özellik, bmw f30 coding, 3 serisi gizli özellik, f30 coding, bmw coding, f30 angel eyes, f30 m performance, f30 spor gösterge, f30 amerikan park, bmw gizli özellik, f30 launch control, f30 nbt video, f30 sport plus, f30 yazılım",
  openGraph: {
    title: "BMW F30 Gizli Özellik ve Coding | En Kapsamlı F30 Yazılım Merkezi",
    description:
      "BMW F30 3 Serisi gizli özellik aktivasyonu ve coding hizmeti. Angel eyes parlaklık artırma, spor gösterge, M Performance logo, NBT video oynatma, launch control ve 20+ özel fonksiyon. Profesyonel ekip, garantili hizmet.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "/images/carousel/amerikan.webp",
        width: 1200,
        height: 630,
        alt: "BMW F30 Gizli Özellik Aktivasyonu",
      },
    ],
  },
  other: {
    "article:published_time": "2024-01-01",
    "article:modified_time": "2024-03-20",
  },
};

const f30 = () => {
  const images = ["/images/carousel/amerikan.webp"];
  const items = [
    "Amerikan parkların aktif edilmesi. (İstenirse yalnızca ayna veya yalnızca farlar olarak ayarlanabilir)",
    "Angel parlaklıklarının arttırılması",
    "Gelişmiş gösterge paneli olan araçlar da M performance logosu",
    "Gösterge paneline ilave hız göstergesinin eklenmesi",
    "Kadrandaki hız sapmasının düzeltilmesi (Aracın gerçek hızını gösterir)",
    "NBT ekranda M performance açılış logosu",
    "Lastik basınç göstergesinin yanında lastik sıcaklıklarının da gözükmesi",
    "Sislerin welcome light olarak ayarlanması",
    "Sislerin dönüş farı olarak ayarlanması",
    "Sport+ modunun kodlanması",
    "Kapı açılınca cam açma yada kapamanın durmasının iptali",
    "Emniyet kemeri ikazlarının devre dışı bırakılması",
    "Start-Stop sisteminin hafızalı olarak kodlanması (Son ayarınızı hatırlar)",
    "Auto start-stop'un hafızalı olarak ayarlanabilmesi bir önceki seçiminizi hatırlar",
    "Spor göstergelerin aktif edilmesi (Anlık beygir ve torkunuzu gösterir)",
    "Selektör attığınızda sislerle beraber selektör atması",
    "Aracı ilk çalıştırdığınızdaki sürüş modunun isteğe bağlı olarak eco modda başlaması",
    "Elektrikli ayna olan araçlarda kilit tuşuna basıldığında tek tuşla aynaların da kapanması",
    "Hafızalı klima (Son durumu hatırlar)",
    "NBT olan araçlarda hareket halinde video oynatma",
    "Led sis ampulleri var ise tanımlama (Tanımlanmadığı halde arıza ışığı yakabilir)",
    "Spor şanzıman yazılımı (Ek ücretlidir)",
    "2.0 motor ve üstü motor hacmi olan araçlarda launch control özelliğinin aktif edilmesi",
  ];
  return (
    <>
      <Breadcrumb
        pageName="BMW F30 3 Serisi Gizli Özellik"
        description="F30 için 20+ Özel Gizli Özellik ve Coding Hizmeti"
      />
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-3xl font-bold">
          BMW F30 Gizli Özellik ve Coding Hizmetleri
        </h1>
        <p className="mb-8 text-lg">
          BMW F30 3 Serisi araçlar için profesyonel gizli özellik aktivasyonu ve
          coding hizmetleri sunuyoruz. Angel eyes parlaklık artırma, spor
          gösterge aktivasyonu, M Performance logo gibi popüler özelliklerin
          yanı sıra, 20'den fazla özel fonksiyon ile aracınızı
          kişiselleştirebilirsiniz.
        </p>
        <div className="mb-20 flex">
          <Gallery images={images} />
        </div>
        <h2 className="mb-4 text-2xl font-semibold">
          F30 Gizli Özellik Listesi
        </h2>
        <List items={items} />
      </div>
    </>
  );
};

export default f30;
