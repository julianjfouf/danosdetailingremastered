import FAQs from "@/components/FAQs";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Service service="paint correction" />
      <FAQs service="paint correction" />
    </>
  );
}
