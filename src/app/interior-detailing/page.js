import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export const metadata = {
  title: "Interior Detailing | Car Detailing in Tracy, CA",
  description:
    "The official page for all the information you need about interior detailing services and packages offered in Tracy, CA.",
  applicationName: "Interior Detailing | Car Detailing in Tracy, CA",
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
    title: "Interior Detailing | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about interior detailing services and packages offered in Tracy, CA.",
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
    title: "Interior Detailing | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about interior detailing services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailing.vercel.app/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
      <Service service="interior detailing" />
      <FAQs service="interior detailing" />
    </>
  );
}
