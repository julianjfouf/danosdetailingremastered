import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export const metadata = {
  title: "Paint Correction | Car Detailing in Tracy, CA",
  description:
    "The official page for all the information you need about paint correction services and packages offered in Tracy, CA.",
  applicationName: "Paint Correction | Car Detailing in Tracy, CA",
  keywords: [
    "Paint Correction in Tracy",
  ],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Paint Correction | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Tracy, CA.",
    url: "https://danosdetailing.com",
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
    title: "Paint Correction | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailing.com/icons/danosdetailingicon.png",
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
