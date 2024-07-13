import Link from "next/link";
import Button from "./Buttons/Button";
import Paragraph from "./Text/Paragraph";
import Title from "./Text/Title";
import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  picture,
  pictureAlt,
  href = "/",
}) {
  return (
    <Link
      href={href}
      className={`aspect-[1] w-full h-full flex flex-col items-center justify-center text-white relative bg-cover`}
    >
      <Image
        src={picture}
        alt={pictureAlt}
        fill
        quality={100}
        priority
        className="z-[-1]"
      />
      <div className="bg-black/50 p-6 w-full h-full flex items-center justify-center">
        <div className="w-full flex flex-col justify-center items-start gap-4 pl-4 border-l-8 border-l-[#621F23]">
          <Title text={title} args="font-bold" />
          <Paragraph text={description} />
          <Button text="LEARN MORE" />
        </div>
      </div>
    </Link>
  );
}
