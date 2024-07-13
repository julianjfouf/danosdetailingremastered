import About from "@/components/About";
import Gallery from "@/components/Portfolio";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import SlidingBanner from "@/components/subcomponents/Banner/SlidingBanner";

export const metadata = {
  title: "Dano's Detailing | Car Detailing in Tracy, CA",
  description:
    "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Tracy, CA.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <SlidingBanner />
      <Services />
    </>
  );
}
