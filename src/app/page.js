import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SlidingBanner from "@/components/subcomponents/Banner/SlidingBanner";

export const metadata = {
  title: "Dano's Detailing | Car Detailing in Tracy, CA",
  description:
    "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Tracy, CA.",
  applicationName: "Dano's Detailing | Car Detailing in Tracy, CA",
  keywords: [
    "Car Detailing",
    "Ceramic Coating",
    "Paint Correction",
    "Wash & Wax",
    "Car Exterior Detailing",
    "Car Interior Detailing",
  ],
  manifest: "https://danosdetailingremastered.vercel.app/manifest.json",
  openGraph: {
    title: "Dano's Detailing | Car Detailing in Tracy, CA",
    description:
      "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Tracy, CA.",
    url: "https://danosdetailingremastered.vercel.app",
    siteName: "Dano's Detailing | Car Detailing in Tracy, CA",
    images: [
      {
        url: "https://danosdetailingremastered.vercel.app/icons/danosdetailingicon.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dano's Detailing | Car Detailing in Tracy, CA",
    description:
      "The official Dano's Detailing website for all the information you need about car detailing services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailingremastered.vercel.app/icons/danosdetailingicon.png",
    },
  },
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
