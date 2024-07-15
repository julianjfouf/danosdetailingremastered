import Image from "next/image";
import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";
import Picture from "../../public/aboutpicture.png";

export default function About() {
  return (
    <section className="p-6 xl:p-12 flex flex-col xl:flex-row items-center xl:justify-between xl:gap-12 xl:max-w-7xl xl:mx-auto">
      <div className="flex flex-col w-full items-center pb-4 text-center max-w-3xl font-medium xl:text-left xl:items-start">
        <Title text="About" />
        <Paragraph text="Founded by Fernando at the age of 17 in Tracy, CA, Dano's Detailing began as a mobile car detailing service in Tracy born out of a deep love for automobiles and a commitment to excellence. Driven by a desire to provide top-notch service right to your doorstep, Fernando saw an opportunity to bring convenience and quality together. What started as a local venture has grown into a trusted name in the community for meticulous detailing that goes beyond the surface. At Dano's Detailing, we believe in treating every vehicle as if it were our own. Beginning as the local car wash in Tracy, we use only the finest products and techniques, we restore, protect, and enhance your car's appearance, ensuring every detail shines. Whether it's a regular car wash or a complete interior and exterior detail, our goal remains the same: to exceed expectations with every service." />
      </div>
      <div className="bg-[#621F23] w-full h-auto max-w-3xl aspect-[1.6] relative">
        <Image src={Picture} alt="About Picture" fill />
      </div>
    </section>
  );
}
