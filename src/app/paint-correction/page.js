import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export const metadata = {
  title: "Paint Correction | Car Detailing in Tracy, CA",
  description:
    "The official page for all the information you need about paint correction services and packages offered in Tracy, CA.",
  applicationName: "Paint Correction | Car Detailing in Tracy, CA",
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
    title: "Paint Correction | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Tracy, CA.",
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
    title: "Paint Correction | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailingremastered.vercel.app/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
      <Service service="paint correction" />
      <FAQs service="paint correction" />
    </>
  );
}
