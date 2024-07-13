import information from "./subcomponents/Information/ServiceCardInformation";
import ServiceCard from "./subcomponents/ServiceCard";
import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";

export default function Services() {
  return (
    <section className="p-6">
      <div className="flex flex-col w-full items-center text-center pb-4 font-medium">
        <Title text="Our Services"  />
        <Paragraph text="Serving hundreds of car owners in the Tracy area, below are our core services." />
      </div>
      <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 gap-1">
        {information?.map((card, id) => <ServiceCard title={card.title} description={card.description} picture={card.picture} pictureAlt={card.pictureAlt} href={card.href} key={id} />)}
      </div>
    </section>
  );
}
