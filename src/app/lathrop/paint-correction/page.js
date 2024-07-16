import FAQs from "@/components/FAQs";
import Service from "@/components/Service";
import Serviceinformation from "@/components/subcomponents/Information/LathropInformation/ServiceInformation";
import FAQinformation from "@/components/subcomponents/Information/LathropInformation/FAQInformation";

export const metadata = {
  title: "Paint Correction | Car Detailing in Lathrop, CA",
  description:
    "The official page for all the information you need about paint correction services and packages offered in Lathrop, CA.",
  applicationName: "Paint Correction | Car Detailing in Tracy, CA",
  keywords: ["Paint Correction in Lathrop"],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Paint Correction | Car Detailing in Lathrop, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Lathrop, CA.",
    url: "https://danosdetailing.com/lathrop/paint-correction",
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
    title: "Paint Correction | Car Detailing in Lathropo, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Lathropo, CA.",
    images: {
      url: "https://danosdetailing.com/icons/danosdetailingicon.png",
    },
  },
};

export default function Home() {
  return (
    <>
      <Service information={Serviceinformation} service="paint correction" />
      <FAQs information={FAQinformation} service="paint correction" />
    </>
  );
}
