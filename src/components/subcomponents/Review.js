import Image from "next/image";
import Paragraph from "./Text/Paragraph";

export default function Review({
  name,
  review,
  avatar,
  avatarAlt,
  picture,
  pictureAlt,
}) {
  return (
    <div className={`bg-black/90 text-white flex flex-col justify-between min-w-[360px] w-full relative select-none pointer-events-none review-card`}>
      <div className="flex flex-col gap-4 p-6 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <Image
            className="h-8 w-8 rounded-full bg-white"
            src={avatar}
            alt={avatarAlt}
            height={32}
            width={32}
            quality={100}
            loading="eager"
          />
          <div className="flex flex-col gap-1">
            <Paragraph text={name} args="font-bold" />
            <div className="flex">
              <Image src="/icons/goldstar.svg" alt="Star Icon For Review" width={12} height={12} />
              <Image src="/icons/goldstar.svg" alt="Star Icon For Review" width={12} height={12} />
              <Image src="/icons/goldstar.svg" alt="Star Icon For Review" width={12} height={12} />
              <Image src="/icons/goldstar.svg" alt="Star Icon For Review" width={12} height={12} />
              <Image src="/icons/goldstar.svg" alt="Star Icon For Review" width={12} height={12} />
            </div>
          </div>
        </div>
        <Paragraph text={review} />
      </div>
      <div className="relative">
        <div className="bg-black/10 w-full h-full absolute"></div>
        <Image
          className="bg-[#621F23] aspect-[1.33333] w-full h-auto select-none pointer-events-none"
          src={picture}
          alt={pictureAlt}
          width={480}
          height={360}
          quality={100}
          loading="lazy"
        />
      </div>
      <Image
        src="/logos/googlelogo.svg"
        alt="Google Logo"
        width={16}
        height={16}
        quality={100}
        loading="lazy"
        className="absolute top-6 right-6"
      />
    </div>
  );
}
