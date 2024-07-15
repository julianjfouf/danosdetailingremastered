import Image from "next/image";

export default function Logo({ image }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={100}
      loading="eager"
      className={`aspect-auto object-contain w-full min-h-3`}
    ></Image>
  );
}
