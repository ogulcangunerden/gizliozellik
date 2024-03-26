import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="py-4 md:py-20 lg:py-28">
        <div className="container">
          {/* <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          /> */}
          <img src="/images/cars/m4-g.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Features;
