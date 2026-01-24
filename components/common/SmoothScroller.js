"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      // 1. DURATION & EASING: This controls the "slide"
      duration: 1.8, // Increase this for a longer glide/momentum
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      // 2. STRENGTH: This makes the scroll feel more responsive to the wheel
      wheelMultiplier: 1.5, // Higher = moves further per "click" of the wheel
      touchMultiplier: 1.5,

      // 3. MOMENTUM BEHAVIOR
      smoothWheel: true,
      infinite: false,
      // Remove 'lerp' entirely to let 'duration' handle the physics
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
