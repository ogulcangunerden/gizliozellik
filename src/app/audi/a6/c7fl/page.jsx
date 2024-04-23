import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A6",
  description: "A6",
};

const a6 = () => {
  const items = [
    "Kadran selamlama",
    "Kadran ekranı başlangıç ekranı değiştirme",
    "Multimedya ekranı başlangıç logosunu değiştirme",
    "Araca ikinci telefonun bağlanabilmesi özelliği ",
    "Kadranda vites göstergesi",
    "Hareket halinde video izleme engellemesini kaldırma (duruyorken video izlenebiliyorsa)",
    "Multimedya ekranında gündüz farı ayar menüsünün açılması",
    "Kadran ekranı başlangıç ekranı değiştirme",
    "MirrorLink'te hareket halinde video izleme engellemesini kaldırma (duruyorken video izlenebiliyorsa)",
    "Multimedya ekranında yeşil mühendislik menüsünü açma",
    "Soundaktör (kabinde sanal motor sesi) (donanım desteği varsa)",
    "Kadranda tur zamanlayıcısı göstergesi",
    "Amerikan park lambaları",
    "Dinamik acil durum ışıkları",
    "Sinyal esnasında gündüz farının sinyal tarafından sönüp sinyal sonrası yanması (göz kırpma)",
    "Stopların gündüz farlarıyla beraber sürekli yanması",
    "Kontak açıkken veya motor çalışıyorken araç içinden anahtar ile merkezi kilit sistemini kullanabilme",
    "Açık kapı ikaz sesini kapatma",
    "Sürücü kapısı açılınca motorun durması",
    "Kumanda ile sunroof açıp kapatma",
    "Kumanda ile camları açıp kapatma",
    "Sürücü kapısı açılınca motorun durması",
    "Korna ikazlı araç kilidi açma ve kapatma (donanım desteği varsa) ",
    "Kontak açıkken veya motor çalışıyorken araç içinden anahtar ile merkezi kilit sistemini kullanabilme",
    "Geri viteste sağ aynanın sağ arka tekere doğru yönelmesi",
    "Kumanda ile sunroof açıp kapatma",
    "Kumanda ile camları açıp kapatma",
    "Emniyet kemeri ikaz sesi açma veya kapatma",
    "Motor ön ısıtması (donanım desteği varsa)",
    "Drive Select'e ''Efficiency, Off Road ve Race'' sürüş modlarının eklenmesi",
    "Start-Stop'un otomatik devreye girmesini kapatma",
  ];
  return (
    <>
      <Breadcrumb pageName="A6" description="A6 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a6.jpeg"
          alt="a6"
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

export default a6;
