import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export const metadata = {
  title: "Paint Correction | Car Detailing in Tracy, CA",
  description:
    "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Tracy, CA.",
};

export default function Home() {
  return (
    <>
        <Service service="exterior detailing" />
        <FAQs service="exterior detailing" />
    </>
  );
}