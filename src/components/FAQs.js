import FAQ from "./subcomponents/FAQ";
import information from "./subcomponents/Information/FAQInformation";
import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";

export default function FAQs({ service }) {
  return (
    <div className="p-6 xl:p-12 max-w-3xl mx-auto xl:max-w-7xl">
      <div className="flex flex-col w-full items-center pb-4 text-center font-medium">
        <Title text="FAQ" />
        <Paragraph text="The questions we commonly get from customers." />
      </div>
      <div className="flex flex-col">
        {information[service]?.map((faq, id) => (
          <FAQ
            question={faq.question}
            answer={faq.answer}
            key={id}
            service={service.split(" ").join("_")}
            id={id}
            first={id == 0}
            last={id == information[service].length - 1}
          />
        ))}
      </div>
    </div>
  );
}
