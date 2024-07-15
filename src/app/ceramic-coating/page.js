import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export const metadata = {
  title: "Ceramic Coating | Car Detailing in Tracy, CA",
  description:
    "The official page for all the information you need about ceramic coating services and packages offered in Tracy, CA.",
  applicationName: "Ceramic Coating | Car Detailing in Tracy, CA",
  keywords: [
    "Ceramic Coating in Tracy",
  ],
  manifest: "https://danosdetailingremastered.vercel.app/manifest.json",
  openGraph: {
    title: "Ceramic Coating | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about ceramic coating services and packages offered in Tracy, CA.",
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
    title: "Ceramic Coating | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about ceramic coating services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailingremastered.vercel.app/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
        <Service service="ceramic coating" />
        <FAQs service="ceramic coating" />
    </>
  );
}