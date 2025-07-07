import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata = {
  title:
    "BMW G26 4 Serisi Gran Coupe Gizli Özellik Aktivasyonu | Coding Büyükçekmece",
  description:
    "BMW G26 4 Serisi Gran Coupe (2020-2024) için profesyonel gizli özellik aktivasyonu. Sport Plus, Comfort Plus, M menü, Alpina kadran ve 50+ gizli özellik. Garantili hizmet.",
  keywords:
    "bmw g26 gizli özellik, g26 coding, bmw g26 sport plus, g26 comfort plus, bmw g26 m menü, g26 alpina kadran, bmw 4 serisi g26, g26 hidden features, bmw g26 özellikleri, g26 gran coupe",
  robots: "index, follow",
  openGraph: {
    title:
      "BMW G26 4 Serisi Gran Coupe Gizli Özellik Aktivasyonu | 50+ Özellik",
    description:
      "BMW G26 4 Serisi Gran Coupe için profesyonel gizli özellik aktivasyonu. Sport Plus modu, M kadran teması, video izleme ve daha fazlası. Garantili hizmet.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "/images/cars/g22.webp",
        width: 1200,
        height: 630,
        alt: "BMW G26 4 Serisi Gran Coupe Gizli Özellik Aktivasyonu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.buyukcekmecegizliozellik.com/bmw/4-serisi/g26",
  },
  other: {
    "article:section": "BMW Gizli Özellik",
    "article:tag": "BMW G26, 4 Serisi Gran Coupe, Gizli Özellik, Coding",
  },
};

const G26 = () => {
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
    "G26 Gran Coupe özel rear spoiler otomatik aktivasyonu",
    "Panoramik cam tavan özel aydınlatma seçenekleri",
    "Gran Coupe özel ambient lighting paketleri",
    "Gelişmiş park mesafe sensörü ayarları",
    "BMW Gesture Control genişletilmiş fonksiyonlar",
    "Individual ses sistemi özel profilleri",
    "Gran Coupe aerodinamik paket görsel efektleri",
    "ConnectedDrive Gran Coupe özel servisleri",
    "Sürücü profili Gran Coupe optimizasyonları",
  ];

  // Schema markup for G26
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BMW G26 4 Serisi Gran Coupe Gizli Özellik Aktivasyonu",
    description:
      "BMW G26 4 Serisi Gran Coupe için profesyonel gizli özellik aktivasyonu ve coding hizmeti. Sport Plus, Comfort Plus ve 25+ özellik.",
    provider: {
      "@type": "Organization",
      name: "Gizli Özellik",
      url: "https://www.gizliozellik.com",
    },
    serviceType: "Automotive Coding Service",
    areaServed: "İstanbul, Türkiye",
    offers: {
      "@type": "Offer",
      description: "BMW G26 Gizli Özellik Aktivasyonu",
      areaServed: "İstanbul",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Breadcrumb
        pageName="4 Serisi - G26 Gran Coupe"
        description="BMW G26 4 Serisi Gran Coupe (2020-2024) gizli özellik aktivasyon listesi"
      />
      <div className="mb-20 flex">
        <Gallery images={images} />
      </div>
      <div className="container mx-auto mb-8 px-4">
        <h1 className="mb-4 text-3xl font-bold">
          BMW G26 4 Serisi Gran Coupe Gizli Özellik Aktivasyonu
        </h1>
        <p className="mb-6 text-lg">
          BMW G26 4 Serisi Gran Coupe modeli için özel olarak geliştirilmiş
          gizli özellik aktivasyonu. Gran Coupe&apos;nin lüks özelliklerine özel
          optimizasyonlar ve standart G serisi özelliklerinin tamamı.
        </p>
      </div>
      <List items={items} />
    </>
  );
};

export default G26;
