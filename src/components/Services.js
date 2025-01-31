import information from "./subcomponents/Information/ServiceCardInformation";
import ServiceCard from "./subcomponents/ServiceCard";
import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";

export default function Services({
  hrefs = [
    "/ceramic-coating",
    "/paint-correction",
    "/exterior-detailing",
    "/interior-detailing",
  ],
  location = "Tracy",
}) {
  return (
    <section className="p-6 xl:p-12">
      <div className="flex flex-col w-full items-center text-center pb-4 font-medium">
        <Title text="Our Services" />
        <Paragraph
          text={`Serving hundreds of car owners in the ${location} area, below are our core services.`}
        />
      </div>
      <div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 2xl:grid-rows-1 2xl:grid-cols-4 gap-1">
        {information?.map((card, id) => (
          <ServiceCard
            title={card.title}
            description={card.description}
            picture={card.picture}
            pictureAlt={card.pictureAlt}
            href={hrefs[id]}
            key={id}
          />
        ))}
      </div>
    </section>
  );
}
