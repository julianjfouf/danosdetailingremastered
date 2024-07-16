import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SlidingBanner from "@/components/subcomponents/Banner/SlidingBanner";

export const metadata = {
  title: "Dano's Detailing | Car Detailing in Mountain House, CA",
  description:
    "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Mountain House, CA.",
  applicationName: "Dano's Detailing | Car Detailing in Tracy, CA",
  keywords: ["Car Detailing in Mountain House", "Car Cleaning in Mountain House"],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Dano's Detailing | Car Detailing in Mountain House, CA",
    description:
      "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Mountain House, CA.",
    url: "https://danosdetailing.com/mountain-house",
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
    title: "Dano's Detailing | Car Detailing in Mountain House, CA",
    description:
      "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Mountain House, CA.",
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
          "/mountain-house/ceramic-coating",
          "/mountain-house/paint-correction",
          "/mountain-house/exterior-detailing",
          "/mountain-house/interior-detailing",
        ]}
        location="Mountain House"
      />
    </>
  );
}
