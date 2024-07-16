import Paragraph from "./subcomponents/Text/Paragraph";
import Title from "./subcomponents/Text/Title";
import Image from "next/image";

export default function Service({ information, service }) {
  return (
    <section className="max-w-3xl mx-auto xl:max-w-7xl xl:p-12 xl:flex xl:w-full xl:justify-between xl:gap-12">
      <div className="flex p-6 xl:p-0 xl:items-start xl:w-1/2">
        <div className="pl-2 flex flex-col gap-2 border-l-8 border-l-[#621f23]">
          <Title text={information[service]?.title} />
          <Paragraph text={information[service]?.description} />
          <Paragraph
            text={information[service]?.benefitsTitle}
            args="font-medium"
          />
          <ul className="list-disc pl-8">
            {information[service]?.benefits.map((benefit, id) => (
              <li key={id}>
                <Paragraph text={benefit} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 xl:w-1/2">
        {information[service]?.packages.map((service, id) => (
          <div key={id} className="flex flex-col text-white px-6 xl:px-0">
            <div className="aspect-[1.5] w-full h-auto bg-black relative">
              <Image
                src={service.picture}
                alt={service.pictureAlt}
                className="object-cover aspect-auto"
                fill
              />
              <div className="bg-black/10 absolute top-0 left-0 right-0 bottom-0" />
            </div>
            <div className="flex flex-col bg-[#621F23] p-6">
              <div className="flex w-full">
                <div className="font-bold w-1/2">
                  <Paragraph text="Package" />
                </div>
                <div className="w-1/2">
                  <Paragraph text={service.package} />
                </div>
              </div>
              <div className="bg-white/10 w-full h-[1px] my-6"></div>
              <div className="flex w-full">
                <div className="font-bold w-1/2">
                  <Paragraph text="Price Range" />
                </div>
                <div className="w-1/2">
                  <Paragraph text={service.pricing} />
                </div>
              </div>
              <div className="bg-white/10 w-full h-[1px] my-6"></div>
              <div className="flex w-full">
                <div className="font-bold w-1/2">
                  <Paragraph text="Package Includes" />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  {service.includes.map((item, id) => (
                    <div key={id} className="flex gap-1 items-start">
                      <div className="bg-white min-h-[1px] min-w-[4px] mt-[10px]" />
                      <Paragraph text={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 flex gap-2 xl:p-0 xl:items-start xl:hidden">
        <div className="border-l-8 border-l-[#621f23] pl-2">
          <Paragraph
            text={information[service]?.benefitsTitle}
            args="font-medium"
          />
          <ul className="list-disc pl-8">
            {information[service]?.benefits.map((benefit, id) => (
              <li key={id}>
                <Paragraph text={benefit} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
