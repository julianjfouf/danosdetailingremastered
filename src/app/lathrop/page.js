import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SlidingBanner from "@/components/subcomponents/Banner/SlidingBanner";

export const metadata = {
  title: "Dano's Detailing | Car Detailing in Lathrop, CA",
  description:
    "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Lathrop, CA.",
  applicationName: "Dano's Detailing | Car Detailing in Tracy, CA",
  keywords: ["Car Detailing in Lathrop", "Car Cleaning in Lathrop"],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Dano's Detailing | Car Detailing in Lathrop, CA",
    description:
      "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Lathrop, CA.",
    url: "https://danosdetailing.com/lathrop",
    siteName: "Dano's Detailing | Car Detailing in Tracy, CA",
    images: [
      {
        url: "https://danosdetailing.com/icons/danosdetailingicon.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dano's Detailing | Car Detailing in Lathrop, CA",
    description:
      "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Lathrop, CA.",
    images: {
      url: "https://danosdetailing.com/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SlidingBanner />
      <Services
        hrefs={[
          "/lathrop/ceramic-coating",
          "/lathrop/paint-correction",
          "/lathrop/exterior-detailing",
          "/lathrop/interior-detailing",
        ]}
        location="Lathrop"
      />
    </>
  );
}
