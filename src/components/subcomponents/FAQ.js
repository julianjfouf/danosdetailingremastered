"use client";

import { useEffect, useState } from "react";
import Paragraph from "./Text/Paragraph";

function handleClick(open, setOpen, questionHeight, answerHeight, setHeight) {
  let wasOpen = open;
  setOpen((prev) => !prev);
  if (!wasOpen) {
    setHeight(() => questionHeight + answerHeight);
  } else {
    setHeight(() => questionHeight);
  }
}

export default function FAQ({
  first = false,
  last = false,
  question,
  answer,
  service,
  id,
}) {
  const [open, setOpen] = useState(false);
  const [questionHeight, setQuestionHeight] = useState(0);
  const [answerHeight, setAnswerHeight] = useState(0);
  const [height, setHeight] = useState(72);

  useEffect(() => {
    const questionElement = document.querySelector(
      `.question_${service}_${id}`
    );
    const answerElement = document.querySelector(`.answer_${service}_${id}`);
    setQuestionHeight(questionElement?.getBoundingClientRect().height);
    setAnswerHeight(answerElement?.getBoundingClientRect().height);
    setHeight(questionHeight);
  }, [questionHeight]);
  return (
    <div
      style={{ height: `${height}px` }}
      className={`text-white bg-[#621F23] border border-white select-none overflow-hidden duration-300 ${
        first ? `!mt-0` : ``
      } ${last ? `!mb-0` : ``} ${open ? `my-4` : `my-0`}`}
    >
      <div
        onClick={() =>
          handleClick(open, setOpen, questionHeight, answerHeight, setHeight)
        }
        className={`question_${service}_${id} hello cursor-pointer flex justify-between items-center p-6 pr-16 font-bold relative`}
      >
        <Paragraph text={question} />
        <div
          className={`absolute top-[25px] right-6 h-3 w-3 ${
            open ? `rotate-[135deg]` : `rotate-0`
          } duration-300`}
        >
          <div className="w-[2px] h-[12px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
          <div className="w-[12px] h-[2px] bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      <div className={`answer_${service}_${id} pl-6 pb-6 pr-12`}>
        <Paragraph text={answer} />
      </div>
    </div>
  );
}
