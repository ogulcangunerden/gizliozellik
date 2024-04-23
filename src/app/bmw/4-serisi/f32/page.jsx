import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "F32",
  description: "F32",
};

const f32 = () => {
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
        pageName="4 Serisi -  F32"
        description="F32 Gizli özellik listesi"
      />
      <div className="mb-20  flex">
        <Gallery images={images} />
      </div>
      <List items={items} />
    </>
  );
};

export default f32;
