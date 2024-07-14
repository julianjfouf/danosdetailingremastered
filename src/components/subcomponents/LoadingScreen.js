"use client";
import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../../public/logos/danosdetailinglogo.png";

export default function LoadingScreen() {
  useEffect(() => {
    document.querySelector(".loading-screen").classList.add("opacity-0");
    document.querySelector(".loading-logo").classList.remove("opacity-0");
    setTimeout(() => {
      document.querySelector(".loading-screen").classList.add("hidden");
    }, 600);
  }, []);
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-black z-50 delay-300 duration-300 loading-screen flex justify-center items-center">
      <Image
        src={Logo}
        alt="Loading Screen Logo"
        className="loading-logo opacity-0 duration-300 w-[100px] h-auto"
        width={100}
        height={61}
        priority
      />
    </div>
  );
}
