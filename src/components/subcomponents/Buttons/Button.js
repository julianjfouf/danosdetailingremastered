"use client";

import { useState } from "react";
import Paragraph from "../Text/Paragraph";

export default function Button({ text = "See More" }) {
  const [dashOffset, setDashOffset] = useState(70);
  return (
    <div
      onMouseEnter={() => setDashOffset(() => 0)}
      onMouseLeave={() => setDashOffset(() => 70)}
      className="uppercase flex items-center justify-start group"
    >
      <Paragraph text={text} args="font-bold" />
      <div className="w-12 h-12 relative before:absolute before:h-[46px] before:w-[46px] before:rounded-full before:border-2 before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 rounded-full scale-50">
        <svg
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            height: "100%",
            width: "100%",
            top: "50%",
            left: "50%",
            appearance: "none",
            WebkitTapHighlightColor: "transparent",
            color: "unset",
          }}
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="1"
            style={{
              strokeDasharray: "70",
              strokeDashoffset: dashOffset,
              strokeWidth: "1px",
              fill: "none",
              stroke: "#621F23",
              position: "absolute",
              zIndex: "100",
              transformOrigin: "0px 0px",
              color: "unset",
            }}
            className={`button duration-500`}
          ></circle>
        </svg>
        <svg
          viewBox="0 0 8 16"
          width="8"
          height="16"
          xlmns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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
  );
}
