"use client";

import { useEffect, useState } from "react";
import GalleryPhoto from "./GalleryPhoto";

function handleMouseDown(
  event,
  previousMouseX,
  setPreviousMouseX,
  galleryX,
  setGalleryX,
  setMouseDown,
  width,
  setWidth,
  items_length
) {
  console.log("hi");
  if (event.buttons === 1 || event.pointerType === "touch") {
    if (previousMouseX == -100) {
      setPreviousMouseX(event.pageX);
    }
    setGalleryX((prev) =>
      handleGallerySlideMouse(
        prev,
        event,
        previousMouseX,
        width,
        setWidth,
        items_length
      )
    );
  }
  setPreviousMouseX(event.pageX);
  return;
}

function handleTouchMove(
  event,
  previousMouseX,
  setPreviousMouseX,
  galleryX,
  setGalleryX,
  setMouseDown,
  width,
  setWidth,
  items_length
) {
  console.log(event);
  if (previousMouseX == -100) {
    setPreviousMouseX(event.changedTouches[0].pageX);
  }
  setGalleryX((prev) =>
    handleGallerySlideTouch(
      prev,
      event,
      previousMouseX,
      width,
      setWidth,
      items_length
    )
  );
  setPreviousMouseX(event.changedTouches[0].pageX);
}

function handleGallerySlideMouse(
  prev,
  event,
  previousMouseX,
  width,
  setWidth,
  items_length
) {
  if (prev - (event.pageX - previousMouseX) < 0) {
    return 0;
  } else if (
    prev - (event.pageX - previousMouseX) >
    width + 24 + 17 - (event.view.innerWidth - 24)
  ) {
    return width + 24 + 17 - (event.view.innerWidth - 24);
  } else {
    return prev - (event.pageX - previousMouseX);
  }
}

function handleGallerySlideTouch(
  prev,
  event,
  previousMouseX,
  width,
  setWidth,
  items_length
) {
  if (prev - (event.changedTouches[0].pageX - previousMouseX) < 0) {
    return 0;
  } else if (
    prev - (event.changedTouches[0].pageX - previousMouseX) >
    width + 24 + 17 - (event.view.innerWidth - 24)
  ) {
    return width + 24 + 17 - (event.view.innerWidth - 24);
  } else {
    return prev - (event.changedTouches[0].pageX - previousMouseX);
  }
}

export default function Gallery({ items }) {
  const [mouseDown, setMouseDown] = useState(true);
  const [previousMouseX, setPreviousMouseX] = useState(-100);
  const [galleryX, setGalleryX] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const window = document.querySelector(
      "." +
        items[0].props.className.split(" ")[
          items[0].props.className.split(" ").length - 1
        ]
    );
    setWidth(
      (prev) =>
        window.children[0]?.getBoundingClientRect().width * items.length +
        8 * (items.length - 1)
    );
  }, [width]);

  return (
    <div
      onMouseMove={(event) =>
        handleMouseDown(
          event,
          previousMouseX,
          setPreviousMouseX,
          galleryX,
          setGalleryX,
          setMouseDown,
          width,
          setWidth,
          items.length
        )
      }
      onTouchStart={(event) => setPreviousMouseX(event.changedTouches[0].pageX)}
      onTouchMove={(event) =>
        handleTouchMove(
          event,
          previousMouseX,
          setPreviousMouseX,
          galleryX,
          setGalleryX,
          setMouseDown,
          width,
          setWidth,
          items.length
        )
      }
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      className={`${
        mouseDown ? `cursor-grabbing` : `cursor-grab`
      } gallery-window relative overflow-x-hidden`}
    >
      <div className="bg-[#621F23] h-[100px] -left-6 w-screen absolute top-1/2 -translate-y-1/2"></div>
      <div
        style={{ transform: `translateX(${-galleryX}px)` }}
        className="flex gap-2 pointer-events-none select-none items"
      >
        {items?.map((item) => item)}
      </div>
    </div>
  );
}
