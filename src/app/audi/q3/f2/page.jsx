import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Q3",
  description: "Q3 gizli özellik",
};

const q3 = () => {
  const items = [
    "Kadran selamlama",
    "Hareket halinde video izleme kısıtlamasının kaldırılması (normalde video izleyebiliyor, araç hareket edince kapanıyorsa kısıtlamayı kapatır)",
    "Kadranda yıkama sıvısı göstergesi",
    "Multimedya ekranında yeşil mühendislik-geliştirici menüsünün açılması",
    "Multimedya ekranında gündüz farı ayarlarının aktifleştirilmesi",
    "Kadranda fren balataları aşınma göstergesi",
    "Multimedya ekranında görsel optik park sistemini aktif etme",
    "CH/LH aydınlatmasının çalışma süresini ayarlama (10-90 sn arası)",
    "Yağmur farları (yağmur yağınca farların açılması)",
    "Sinyal verirken gündüz farının kapanması, sinyalden sonra açılması",
    "Acil durum fren lambaları (70 km/s hız ile giderken yapılan ani frenlerde stopların arka arkasına yanıp sönmesi)",
    "Ayak bölmesi ışıklarının açılması veya kapatılması",
    "Sis farlarının uzun farlarla beraber aynı anda çalışması (selektör dahil)",
    "Gündüz ledlerinin farlar açıkken kısılmadan aynı anda çalışması",
    "Geri viteste sis farlarının yanması",
    "El freni çekildiğinde gündüz farlarının sönmesi",
    "Sis farlarının direksiyon açısına göre yanması (viraj aydınlatması)",
    "Kısa sinyallerin yanma sayısını ayarlama (2 ile 5 arası)",
    "Led plaka lambası arıza kodunu silme",
    "Korna ikazlı araç kilidi açma ve kapatma",
    "Otomatik ayna katlama modu",
    "Kumandadan bagaj kapatma özelliği (elektrikli bagajlarda)",
    "Araç içinde araç çalışıyorken veya kontak açıkken kumanda ile merkezi kilit sistemini kullanabilme",
    "Uzaktan anahtar ile camları açıp kapatma modu",
    "Emniyet kemeri ikaz sesi açma veya kapatma",
    "Yağmurlu havalarda geri viteste arka sileceğin otomatik çalışması",
    "Geri viteste sağ aynanın sağ arka tekere doğru yönelmesi",
    "Yokuş kalkış desteğinin güçlendirilmesi",
    "Dinamik direksiyon modu (araç hızına bağlı olarak direksyon konforunun değişmesi)",
    "TSC - Tork telafi sisteminin aktif edilmesi (Sert kalkışlarda direksiyondaki titremeyi engeller)",
  ];
  return (
    <>
      <Breadcrumb pageName="Q3" description="Q3 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/q3f2.jpeg"
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

export default q3;
