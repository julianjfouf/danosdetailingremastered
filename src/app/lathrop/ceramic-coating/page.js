import FAQs from "@/components/FAQs";
import Service from "@/components/Service";
import Serviceinformation from "@/components/subcomponents/Information/LathropInformation/ServiceInformation";
import FAQinformation from "@/components/subcomponents/Information/LathropInformation/FAQInformation";

export const metadata = {
  title: "Ceramic Coating | Car Detailing in Lathrop, CA",
  description:
    "The official page for all the information you need about ceramic coating services and packages offered in Lathrop, CA.",
  applicationName: "Ceramic Coating | Car Detailing in Tracy, CA",
  keywords: ["Ceramic Coating in Lathrop"],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Ceramic Coating | Car Detailing in Lathrop, CA",
    description:
      "The official page for all the information you need about ceramic coating services and packages offered in Lathrop, CA.",
    url: "https://danosdetailing.com/lathrop/ceramic-coating",
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
    title: "Ceramic Coating | Car Detailing in Lathrop, CA",
    description:
      "The official page for all the information you need about ceramic coating services and packages offered in Lathrop, CA.",
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
