"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* OUTER CIRCLE */}
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
      />
    </>
  );
}
