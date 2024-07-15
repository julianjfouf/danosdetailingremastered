import Image from "next/image";

export default function Logo({ image }) {
    return (
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority>
        </Image>
    )
}