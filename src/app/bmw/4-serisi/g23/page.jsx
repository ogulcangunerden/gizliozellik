import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "BMW G23 4 Serisi Gizli Özellik Aktivasyonu | Coding Büyükçekmece",
  description:
    "BMW G23 4 Serisi (2020-2024) için profesyonel gizli özellik aktivasyonu. Sport Plus, Comfort Plus, M menü, Alpina kadran ve 50+ gizli özellik. Garantili hizmet, ücretsiz danışmanlık.",
  keywords:
    "bmw g23 gizli özellik, g23 coding, bmw g23 sport plus, g23 comfort plus, bmw g23 m menü, g23 alpina kadran, bmw 4 serisi g23, g23 hidden features, bmw g23 özellikleri, g23 aktivasyon",
  robots: "index, follow",
  openGraph: {
    title: "BMW G23 4 Serisi Gizli Özellik Aktivasyonu | 50+ Özellik",
    description:
      "BMW G23 4 Serisi için profesyonel gizli özellik aktivasyonu. Sport Plus modu, M kadran teması, video izleme ve daha fazlası. Garantili hizmet.",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: "/images/cars/g22.webp",
        width: 1200,
        height: 630,
        alt: "BMW G23 4 Serisi Gizli Özellik Aktivasyonu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.buyukcekmecegizliozellik.com/bmw/4-serisi/g23",
  },
  other: {
    "article:section": "BMW Gizli Özellik",
    "article:tag": "BMW G23, 4 Serisi, Gizli Özellik, Coding",
  },
};

const G23 = () => {
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
    "G23 4 Serisi özel Convertible menü seçenekleri",
    "Üst açma/kapama süre optimizasyonu",
    "Rüzgar perdesi otomatik aktivasyonu",
    "Çift egzoz ses optimizasyonu (M Performance)",
    "Adaptive LED far gelişmiş ayarları",
    "Park asistanı hassasiyet ayarları",
    "Harman Kardon özel ses profilleri",
    "Kablosuz şarj optimizasyonu",
    "BMW ConnectedDrive gelişmiş özellikler",
  ];

  // Schema markup for G23
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BMW G23 4 Serisi Gizli Özellik Aktivasyonu",
    description:
      "BMW G23 4 Serisi Convertible için profesyonel gizli özellik aktivasyonu ve coding hizmeti. Sport Plus, Comfort Plus ve 25+ özellik.",
    provider: {
      "@type": "Organization",
      name: "Gizli Özellik",
      url: "https://www.gizliozellik.com",
    },
    serviceType: "Automotive Coding Service",
    areaServed: "İstanbul, Türkiye",
    offers: {
      "@type": "Offer",
      description: "BMW G23 Gizli Özellik Aktivasyonu",
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
        pageName="4 Serisi - G23 Convertible"
        description="BMW G23 4 Serisi Convertible (2020-2024) gizli özellik aktivasyon listesi"
      />
      <div className="mb-20 flex">
        <Gallery images={images} />
      </div>
      <div className="container mx-auto mb-8 px-4">
        <h1 className="mb-4 text-3xl font-bold">
          BMW G23 4 Serisi Convertible Gizli Özellik Aktivasyonu
        </h1>
        <p className="mb-6 text-lg">
          BMW G23 4 Serisi Convertible modeli için özel olarak geliştirilmiş
          gizli özellik aktivasyonu. Convertible özelliklerine özel
          optimizasyonlar ve standart G serisi özelliklerinin tamamı.
        </p>
      </div>
      <List items={items} />
    </>
  );
};

export default G23;
