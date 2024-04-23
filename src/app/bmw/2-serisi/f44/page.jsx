import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "F44",
  description: "F44",
};

const f44 = () => {
  const images = [
    "/images/cars/x3/x311.jpg",
    "/images/cars/x3/x31.jpg",
    "/images/cars/x3/x32.jpg",
    "/images/cars/x3/x33.jpg",
    "/images/cars/x3/x34.jpg",
    "/images/cars/x3/x35.jpg",
    "/images/cars/x3/x36.jpg",
    "/images/cars/x3/x37.jpg",
    "/images/cars/x3/x38.jpg",
    "/images/cars/x3/x39.jpg",
    "/images/cars/x3/x310.jpg",
  ];
  const items = [
    "Sport plus modunun aktif edilmesi. (Gaz tepkisinde ciddi iyileştirme yapar.)",
    "Comfort plus modunun aktif edilmesi. (Şanzıman ve Süspansiyon konforunda ciddi iyileştirme yapar.)",
    "X menüsünün etkinleştirilmesi (Pusula, eğim ve rakımı gösterir.)",
    "Sürüş esnasında video izleme (HU_MGU gerekli)",
    "Kadran temasının isteğe bağlı M2, M235i veya Alpina olarak değiştirilmesi",
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
        pageName="2 Serisi -  F44"
        description="F44 Gizli özellik listesi"
      />
      <div className="mb-20  flex">
        <Gallery images={images} />
      </div>
      <List items={items} />
    </>
  );
};

export default f44;
