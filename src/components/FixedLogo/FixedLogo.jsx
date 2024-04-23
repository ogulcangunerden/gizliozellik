import Image from "next/image";
const FixedLogo = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        margin: "20px", // Opsiyonel: Logonun kenarlardan ne kadar uzakta olacağını ayarlar
        zIndex: 9999, // Eğer diğer elementler logonun üzerine çıkıyorsa, bu değeri artırabilirsiniz
      }}
    >
      <a
        href="https://api.whatsapp.com/send?phone=905306002800"
        target="_blank"
      >
        <img
          src="/images/logo/WhatsApp_icon.png"
          alt="WP-LOGO"
          className="h-16 w-16 md:h-24 md:w-24"
        />
      </a>
    </div>
  );
};

export default FixedLogo;
