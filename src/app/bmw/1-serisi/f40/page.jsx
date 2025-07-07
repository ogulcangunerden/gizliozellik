import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export const metadata = {
  title:
    "BMW F40 1 Serisi Gizli Özellik Aktivasyonu | Sport Plus, Comfort Plus Coding İstanbul",
  description:
    "BMW F40 1 Serisi (2019-2024) için profesyonel gizli özellik aktivasyonu. Sport Plus modu, Comfort Plus, M menü, Alpina kadran, video izleme ve 50+ gizli özellik. Garantili hizmet, ücretsiz danışmanlık.",
  keywords:
    "bmw f40 gizli özellik, f40 coding, bmw f40 sport plus, f40 comfort plus, bmw f40 m menü, f40 alpina kadran, bmw 1 serisi f40, f40 hidden features, bmw f40 özellikleri, f40 m135i, f40 118i coding",
  robots: "index, follow",
  openGraph: {
    title: "BMW F40 1 Serisi Gizli Özellik Aktivasyonu | 50+ Özellik",
    description:
      "BMW F40 1 Serisi için profesyonel gizli özellik aktivasyonu. Sport Plus modu, M kadran teması, video izleme, X menü ve daha fazlası. Garantili hizmet.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "/images/cars/m135.webp",
        width: 1200,
        height: 630,
        alt: "BMW F40 1 Serisi Gizli Özellik Aktivasyonu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.gizliozellik.com/bmw/1-serisi/f40",
  },
  other: {
    "article:section": "BMW Gizli Özellik",
    "article:tag": "BMW F40, 1 Serisi, Gizli Özellik, Coding, Sport Plus",
    "geo.region": "TR",
    "geo.placename": "İstanbul",
  },
};

const f40 = () => {
  const images = [
    "/images/carousel/m4.webp",
    "/images/carousel/alpina.webp",
    "/images/carousel/düzm.webp",
    "/images/carousel/x3m.webp",
    "/images/carousel/sportplus.webp",
    "/images/carousel/comfortplus.webp",
    "/images/carousel/mmenu.webp",
    "/images/carousel/sporgosterge.webp",
    "/images/carousel/xview.webp",
    "/images/carousel/bowers.webp",
    "/images/carousel/lastikbasinc.webp",
  ];
  const items = [
    "Sport plus modunun aktif edilmesi. (Gaz tepkisinde ciddi iyileştirme yapar.)",
    "Comfort plus modunun aktif edilmesi. (Şanzıman ve Süspansiyon konforunda ciddi iyileştirme yapar.)",
    "X menüsünün etkinleştirilmesi (Pusula, eğim ve rakımı gösterir.)",
    "Sürüş esnasında video izleme (HU_MGU gerekli)",
    "Kadran temasının isteğe bağlı M, M135i veya Alpina olarak değiştirilmesi",
    "Bowers & Wilkins ses ön ayarlarının aktif hale getirilmesi",
    "Lastik basınç göstergesinin yanında lastik sıcaklıklarının da gözükmesi",
    "M Setup menünün gösterilmesi (Tamamen görsel olarak gözükür işlevi yoktur.)",
    "Idrive M veya Alpina açılış animasyonu",
    "Idrive üzerinden gündüz farı aç-kapa menüsü",
    "Idrive sistemindeki dış aydınlatma ayarlarına 5 kez tek dokunuşla yön sinyali seçeneği eklenmesi",
    "Emniyet kemeri ikazlarının devre dışı bırakılması",
    "Start-Stop sisteminin hafızalı olarak kodlanması (Son ayarınızı hatırlar)",
    "Spor göstergenin, gelişmiş spor göstergeye dönüştürülmesi (G-metre, güç, tork, yağ sıcaklığı, turbo basıncı)",
    "Analog kadran (yarı hayalet) olan araçlarda dijital hız göstergesinin aktif edilmesi",
    "Analog kadran (yarı hayalet) olan araçlarda 135i veya 140i logosu aktivasyonu",
    "Aracı ilk çalıştırdığınızdaki sürüş modunun isteğe bağlı olarak ayarlanması (sport+ ,  comfort+, eco vs)",
    "İç ambiyans renklerinde bronz rengin kırmızı renk ile değiştirilmesi",
    "Elektrikli bagaj olan araçlarda kumandadan tek basışta kapanması",
    "Geri görüş kamerasına römork kamerasının aktifleştirilmesi.",
    "Hayalet ekranlarda lastik basınçlarının kadrana getirilmesi",
  ];
  return (
    <>
      <Breadcrumb
        pageName="1 Serisi - F40"
        description="BMW F40 1 Serisi gizli özellik aktivasyon listesi"
      />
      <div className="mb-20 flex">
        <Gallery images={images} />
      </div>
      <div className="container mx-auto mb-8 px-4">
        <h1 className="mb-4 text-3xl font-bold">
          BMW F40 1 Serisi Gizli Özellik Aktivasyonu
        </h1>
        <p className="mb-6 text-lg">
          BMW F40 1 Serisi (2019-2024) için en kapsamlı gizli özellik aktivasyon
          hizmeti. Sport Plus modu, Comfort Plus, M135i kadran teması, video
          izleme ve 20+ profesyonel özellik. Kompakt BMW&apos;nizin gizli
          performans potansiyelini keşfedin.
        </p>
      </div>
      <List items={items} />
    </>
  );
};

export default f40;
