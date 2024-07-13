import Image from "next/image";
import HeroPic from "../../public/heropic.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="bg-black w-full h-auto aspect-[2.735] relative" />
      <Image
        src={HeroPic}
        className="w-full h-auto aspect-auto"
        alt="Hero Section Image Of Car"
        quality={100}
        fill
        priority
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scale-[125%]">
        <div className="animate-bounce">
          <svg
            viewBox="0 0 8 16"
            width="8"
            height="16"
            xlmns="http://www.w3.org/2000/svg"
            className="rotate-90"
            style={{
              height: "16px",
              width: "8px",
              overflowClipMargin: "content-box",
              overflow: "hidden",
            }}
          >
            <path
              d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
