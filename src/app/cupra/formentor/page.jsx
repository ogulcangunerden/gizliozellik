import Breadcrumb from "@/components/Common/Breadcrumb";
import List from "@/components/List";
import { Metadata } from "next";
import Image from "next/image";

export const metadata = {
  title: "Cupra Formentor",
  description: "Cupra Formentor Gizli Özellik",
};

const Cupra = () => {
  const items = [
    "Şerit takip sistemine hafıza.",
    "Araca yaklaşınca otomatik kapı kilidinin açılması uzaklaşınca otomatik kilitlenmesi.(Menüden açılıp kapatılabilir.)",
    "Gündüz vakti renkli iç ambiyans ışığının yanık kalması.",
    "Ek yakıt.",
    "Sağ koltuk ısıtma hafızası.",
    "Offroad ekran",
    "Easy entry, iniş binişte koltuğun geri gelerek kolaylık sağlaması.",
    "Aracı çalışır halde bırakıp kumandadan kilitleyebilme.",
    "Gündüz farı açıp kapatma.",
    "0 dayken gündüz ledi yanması.",
    "Otomatik kapı kilitleme.",
    "Kaza anında otomatik dörtlü yanması.",
    "Gündüz vakti arka LED’lerin yanması.(iç ambians ışıklarıda gündüz yanar.)",
    "Ayna katlandığında da ayna altı ışıkların yanık kalması.",
    "İç ambiyansın yavaşça kısılıp açılması.",
    "ACC Adaptif Cruise Controlün hızını +1 -1 km şeklinde artırıp azaltabilme.",
    "AirCare Climanın zamanlayıcı hafızası yerine daimi hafızaya alınarak açık bırakınca açık, kapalı bırakıldığında kapalı gelmesi.",
    "Ayna altı Cupra logosunun ayna açılırken direkt aktif gelmesi",
    "Uzun far asistanının açık kapalı konumunun hafızaya alınması. ( Açık bıraktıysanız kontağı kapatıp açtığınızda tekrar açmanız gerekmez.)",
    "Şerit takip asistanın şeridin ortasında tutması. Standart halde şeritten çıkarken şeridin içine sokar, kodlama sonrası, otomatik olarak hep şeridin içinde kalır.(Ek Ücretli)",
    "Hareket halinde video izleme.(Ek Ücretli)",
  ];
  return (
    <>
      <Breadcrumb
        pageName="Formentor"
        description="Formentor Gizli özellik listesi"
      />
      <div className="mb-20  flex justify-center">
        <Image
          src="/images/cars/formentor.webp"
          alt="Cupra Formentor Gizli Özellik"
          width={700}
          height={700}
        />
      </div>
      <List items={items} />
    </>
  );
};

export default Cupra;
