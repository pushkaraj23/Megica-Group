"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const handleChange = (e) => setIsPointerFine(e.matches);
    setIsPointerFine(mq.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed top-0 left-0 z-9999
          h-5 w-5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          backdrop-blur-sm border-white/50 border
          transition-transform duration-300 ease-out bg-brand-deep/75
        "
        aria-hidden
      />
    </>
  );
}
