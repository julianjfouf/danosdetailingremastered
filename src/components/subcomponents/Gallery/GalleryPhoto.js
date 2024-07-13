import Image from "next/image";

export default function GalleryPhoto({ picture, pictureAlt }) {
  return (
    <div className={`select-none pointer-events-none relative max-w-[240px] min-w-[240px] aspect-[0.6666667] gallery-photo`}>
      <div className="bg-black/10 w-full h-full absolute"></div>
      <Image
        className="select-none pointer-events-none"
        src={picture}
        alt={pictureAlt}
        fill
        quality={100}
        sizes="(max-width: 768px) 240px"
        loading="lazy"
      />
    </div>
  );
}
