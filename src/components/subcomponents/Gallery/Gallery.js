"use client";

import { useEffect, useState } from "react";

function handleMouseUp(event, initialX, setCurrentItem, items_length) {
  console.log("hi");
  console.log(initialX, event.pageX);
  if (event.pageX - initialX < 0) {
    setCurrentItem((prev) => {
      if (prev < items_length - 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  } else if (event.pageX - initialX > 0) {
    setCurrentItem((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }
}

function handleTouchEnd(event, initialX, setCurrentItem, items_length) {
  if (event.changedTouches[0].pageX - initialX < -15) {
    setCurrentItem((prev) => {
      if (prev < items_length - 1) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  } else if (event.changedTouches[0].pageX - initialX > 15) {
    setCurrentItem((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  }
}

export default function Gallery({ items }) {
  const [itemWidth, setItemWidth] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const [translateInterval, setTranslateInterval] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [pointerDown, setPointerDown] = useState(false);
  const [timerId, setTimerId] = useState();
  useEffect(() => {
    const window = document.querySelector(
      "." +
        items[0].props.className.split(" ")[
          items[0].props.className.split(" ").length - 1
        ]
    );
    setItemWidth(window.getBoundingClientRect().width / 2);
    setTranslateInterval(itemWidth * 2 + 8);
  }, [itemWidth]);

  useEffect(() => {
    clearTimeout(timerId);
    setTimerId(
      setTimeout(() => {
        setCurrentItem((prev) => (prev + 1) % items.length);
      }, 5000)
    );
  }, [currentItem]);

  return (
    <div
      className={`flex flex-col items-center w-full overflow-hidden relative ${
        pointerDown ? `cursor-grabbing` : `cursor-grab`
      }`}
      onMouseDown={(event) => {
        setInitialX(event.pageX);
        setPointerDown(true);
      }}
      onMouseUp={(event) => {
        handleMouseUp(event, initialX, setCurrentItem, items.length);
        setPointerDown(false);
      }}
      onTouchStart={(event) => {
        setInitialX(event.changedTouches[0].pageX);
        setPointerDown(true);
      }}
      onTouchEnd={(event) => {
        handleTouchEnd(event, initialX, setCurrentItem, items.length);
        setPointerDown(false);
      }}
    >
      <div className="flex w-full relative">
        <div className="bg-[#621F23] w-full h-[100px] absolute top-1/2 left-0 -translate-y-1/2" />
        <div className="w-1/2 h-full" />
        <div
          className="flex w-1/2 gap-2 duration-300"
          style={{
            transform: `translateX(-${
              itemWidth + currentItem * translateInterval
            }px)`,
          }}
        >
          {items}
        </div>
      </div>
      <div className="flex gap-4 mt-4 cursor-pointer">
        {items.map((item, id) => (
          <div
            key={id}
            className={`w-4 h-4 rounded-full border border-[#621F23] duration-300 ${
              currentItem == id ? `bg-[#621F23]` : `bg-white`
            }`}
            onClick={() => setCurrentItem(id)}
          />
        ))}
      </div>
    </div>
  );
}
