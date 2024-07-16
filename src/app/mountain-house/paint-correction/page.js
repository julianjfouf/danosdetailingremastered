import FAQs from "@/components/FAQs";
import Service from "@/components/Service";
import Serviceinformation from "@/components/subcomponents/Information/LathropInformation/ServiceInformation";
import FAQinformation from "@/components/subcomponents/Information/LathropInformation/FAQInformation";

export const metadata = {
  title: "Paint Correction | Car Detailing in Mountain House, CA",
  description:
    "The official page for all the information you need about paint correction services and packages offered in Mountain House, CA.",
  applicationName: "Paint Correction | Car Detailing in Tracy, CA",
  keywords: ["Paint Correction in Mountain House"],
  manifest: "https://danosdetailing.com/manifest.json",
  openGraph: {
    title: "Paint Correction | Car Detailing in Mountain House, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Mountain House, CA.",
    url: "https://danosdetailing.com/mountain-house/paint-correction",
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
    title: "Paint Correction | Car Detailing in Mountain House, CA",
    description:
      "The official page for all the information you need about paint correction services and packages offered in Mountain House, CA.",
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
