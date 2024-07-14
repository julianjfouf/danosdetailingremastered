import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export const metadata = {
  title: "Exterior Detailing | Car Detailing in Tracy, CA",
  description:
    "The official page for all the information you need about exterior detailing services and packages offered in Tracy, CA.",
  applicationName: "Exterior Detailing | Car Detailing in Tracy, CA",
  keywords: [
    "Car Detailing",
    "Ceramic Coating",
    "Paint Correction",
    "Wash & Wax",
    "Car Exterior Detailing",
    "Car Interior Detailing",
  ],
  manifest: "https://danosdetailing.vercel.app/manifest.json",
  openGraph: {
    title: "Exterior Detailing | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about exterior detailing services and packages offered in Tracy, CA.",
    url: "https://danosdetailing.vercel.app",
    siteName: "Dano's Detailing | Car Detailing in Tracy, CA",
    images: [
      {
        url: "https://danosdetailing.vercel.app/icons/danosdetailingicon.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Detailing | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about exterior detailing services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailing.vercel.app/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
        <Service service="exterior detailing" />
        <FAQs service="exterior detailing" />
    </>
  );
}