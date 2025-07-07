import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata = {
  title:
    "BMW G22 4 Serisi Coupe Gizli Özellik Aktivasyonu | Sport Plus, M Menü Coding Büyükçekmece",
  description:
    "BMW G22 4 Serisi Coupe (2020-2024) için profesyonel gizli özellik aktivasyonu. Sport Plus modu, Comfort Plus, M menü, Alpina kadran, video izleme ve 50+ gizli özellik. Garantili hizmet.",
  keywords:
    "bmw g22 gizli özellik, g22 coding, bmw g22 sport plus, g22 comfort plus, bmw g22 m menü, g22 alpina kadran, bmw 4 serisi g22, g22 hidden features, bmw g22 özellikleri, g22 m440i, g22 420i coding",
  robots: "index, follow",
  openGraph: {
    title: "BMW G22 4 Serisi Coupe Gizli Özellik Aktivasyonu | 50+ Özellik",
    description:
      "BMW G22 4 Serisi Coupe için profesyonel gizli özellik aktivasyonu. Sport Plus modu, M kadran teması, video izleme, X menü ve daha fazlası. Garantili hizmet.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "/images/cars/g22.webp",
        width: 1200,
        height: 630,
        alt: "BMW G22 4 Serisi Coupe Gizli Özellik Aktivasyonu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.buyukcekmecegizliozellik.com/bmw/4-serisi/g22",
  },
  other: {
    "article:section": "BMW Gizli Özellik",
    "article:tag": "BMW G22, 4 Serisi Coupe, Gizli Özellik, Coding, Sport Plus",
    "geo.region": "TR",
    "geo.placename": "Büyükçekmece",
  },
};

const G22 = () => {
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
    "Kadran temasının isteğe bağlı M4, M440i veya Alpina olarak değiştirilmesi",
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
    "Aracı ilk çalıştırdığınızdaki sürüş modunun isteğe bağlı olarak ayarlanması (sport+ ,  comfort+, eco vs)",
    "İç ambiyans renklerinde bronz rengin kırmızı renk ile değiştirilmesi",
    "Elektrikli bagaj olan araçlarda kumandadan tek basışta kapanması",
    "Geri görüş kamerasına römork kamerasının aktifleştirilmesi.",
    "Hayalet ekranlarda lastik basınçlarının kadrana getirilmesi",
  ];
  return (
    <>
      <Breadcrumb
        pageName="4 Serisi - G22 Coupe"
        description="BMW G22 4 Serisi Coupe gizli özellik aktivasyon listesi"
      />
      <div className="mb-20 flex">
        <Gallery images={images} />
      </div>
      <div className="container mx-auto mb-8 px-4">
        <h1 className="mb-4 text-3xl font-bold">
          BMW G22 4 Serisi Coupe Gizli Özellik Aktivasyonu
        </h1>
        <p className="mb-6 text-lg">
          BMW G22 4 Serisi Coupe (2020-2024) için en kapsamlı gizli özellik
          aktivasyon hizmeti. Sport Plus modu, Comfort Plus, M440i kadran
          teması, video izleme ve 20+ profesyonel özellik. Coupe&apos;nizin
          sportif karakterini maksimize edin.
        </p>
      </div>
      <List items={items} />
    </>
  );
};

export default G22;
