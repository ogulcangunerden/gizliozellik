import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "İletişim",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="İletişim"
        description="Aşağıdaki linklere tıklayarak bizlere ulaşabilirsiniz."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
