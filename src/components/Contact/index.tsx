import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <form className="flex flex-col items-center">
                <div className="mb-6 w-full max-w-[700px]">
                  {/* Form içeriği buraya gelecek */}
                </div>
                <div className="mt-10 flex flex-col items-center justify-center">
                  <div className="mb-6">
                    <a
                      href="https://api.whatsapp.com/send?phone=905306002800"
                      target="_blank"
                    >
                      <Image
                        src="/images/logo/WhatsAppButtonGreenLarge.png"
                        alt="Wp Button"
                        width={400}
                        height={400}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/buyukcekmecegizliozellik/"
                      target="_blank"
                    >
                      <Image
                        src="/images/logo/instagram1.webp"
                        alt="insta logo"
                        width={400}
                        height={300}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
