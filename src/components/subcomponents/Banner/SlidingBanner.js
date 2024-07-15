import Logo from "./Logo";
import information from "../Information/BannerLogosInformation";

export default function SlidingBanner() {
  return (
    <div className="bg-black py-6 border border-l-0 border-r-0 border-t-2 border-b-2 border-white h-16">
      <div className="overflow-hidden">
        <div className="flex gap-16 sliding-banner">
          {information?.map((image, id) => (
            <Logo key={id} image={image} />
          ))}
          {information?.map((image, id) => (
            <Logo key={id} image={image} />
          ))}
          {information?.map((image, id) => (
            <Logo key={id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
