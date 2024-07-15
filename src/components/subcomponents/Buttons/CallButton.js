import Paragraph from "../Text/Paragraph";

export default function CallButton() {
  return (
    <a href="tel:2092789098" className="fixed right-2 left-2 bottom-6 bg-[#621F23] text-white py-4 flex justify-center font-bold text-base hover:-translate-y-1 duration-300 active:-translate-y-[2px] z-[1] xl:max-w-7xl xl:left-1/2 xl:-translate-x-1/2 xl:w-full">
      <Paragraph text="CALL NOW" />
    </a>
  );
}