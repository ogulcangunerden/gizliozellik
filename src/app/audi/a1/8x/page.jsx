import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "A1",
  description: "A1",
};

const a1 = () => {
  const items = [
    "Hareket halinde kapıların otomatik olarak kilitlenmesi ayarının değiştirilmesi ( Kilitle / Kilitleme )",
    "Park edildiğinde araç anahtarı kontaktan çıkartılınca kapı kilidinin otomatik olarak açılması",
    "Uzaktan kumandayla kapıların kilidini açıp kapatırken dörtlü flaşörlerin yanma ayarının değiştirilmesi ( Dörtlü flaşörleri aç / Dörtlü flaşörleri kapat )",
    "Uzaktan kumandayla kapılar kilitlendikten ve açıldıktan sonra uyarı sesinin gelmesi ( DWA Onayı – Sesli Onay )",
    "Uzaktan kumandadan kilidi açma ve kapatma tuşlarına basılı tutarak ya da tek tuşla tüm pencere ve açılır tavanın açılıp kapatılması",
    "Anahtar kontak üzerindeyken de uzaktan kumanda tuşlarının kullanılması",
    "Kontak kapatıldığında pencere açma kapama tuşlarının çalışmaya devam etmesi",
    "Gösterge ibrelerinin selamlaması ( Welcome Mode )",
    "Konfor sinyal sayısının değiştirilmesi ( 2 – 3 – 4 – 5 )",
    "Park sensörü etkinleştirildiği zaman gelen uyarı sesinin kapatılması",
    "Gündüz sürüş farlarının istendiği zaman multimedya sistemi üzerinden açılıp kapatılabilmesi",
    "Gündüz sürüş farlarının hangi farlar üzerinden yanacağının değiştirilmesi ( Sis farları – Parklar – Gündüz farları )",
    "Sinyal verildiği zaman gündüz farlarının yanmaya devam etmesi ya da sönmesi",
    "Coming Home ve Leaving Home ayarlarının değiştirilmesi ",
    "Selektör yapıldığında sis farlarının sönmesi (Çakarlı Selektör)",
    "Virajlarda dönüş yapılırken sis farlarının yanması",
    "Panik fren yapıldığında stopların ve dörtlü flaşörlerin yanması",
    "Geri vitese takıldığı zaman sağ aynanın aşağı inmesi",
    "Dış Aynaların ve arka pencere rezistans süresinin değiştirilmesi",
  ];
  return (
    <>
      <Breadcrumb pageName="A1" description="A1 Gizli özellik listesi" />
      <div className="mb-20  flex">
        <Image
          src="/images/cars/audi/a1.jpeg"
          alt="a1"
          width={500}
          height={500}
        />
      </div>
      <List items={items} />
    </>
  );
};

export default a1;
