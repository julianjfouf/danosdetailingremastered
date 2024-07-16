import FAQs from "@/components/FAQs";
import Service from "@/components/Service";
import Serviceinformation from "../../components/subcomponents/Information/ServiceInformation";
import FAQinformation from "../../components/subcomponents/Information/FAQInformation";

export const metadata = {
  title: "Ceramic Coating | Car Detailing in Tracy, CA",
  description:
    "The official page for all the information you need about ceramic coating services and packages offered in Tracy, CA.",
  applicationName: "Ceramic Coating | Car Detailing in Tracy, CA",
  keywords: [
    "Ceramic Coating in Tracy",
  ],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Ceramic Coating | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about ceramic coating services and packages offered in Tracy, CA.",
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
    title: "Ceramic Coating | Car Detailing in Tracy, CA",
    description:
      "The official page for all the information you need about ceramic coating services and packages offered in Tracy, CA.",
    images: {
      url: "https://danosdetailing.com/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
        <Service information={Serviceinformation} service="ceramic coating" />
        <FAQs information={FAQinformation} service="ceramic coating" />
    </>
  );
}