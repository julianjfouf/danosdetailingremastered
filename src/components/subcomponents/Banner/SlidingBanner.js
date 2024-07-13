"use client";

import { useState } from "react";
import Logo from "./Logo";

function handleSlide(event, setTranslateX) {
  setTranslateX((prev) => prev + 1);
}

export default function SlidingBanner() {
  const [translateX, setTranslateX] = useState(0);
  const [logos, setLogos] = useState([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ]);
  return (
    <div
      onMouseMove={(event) => handleSlide(event, setTranslateX)}
      className="bg-black p-6 border border-l-0 border-r-0 border-t-2 border-b-2 border-[#888888]"
    >
      <div className="overflow-hidden">
        <div
          style={{ transform: `translateX(-${translateX}px)` }}
          className="flex gap-4"
        >
        </div>
      </div>
    </div>
  );
}
