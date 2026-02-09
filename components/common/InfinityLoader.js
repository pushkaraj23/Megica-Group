"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Lemniscate of Bernoulli: proper ∞ shape
 * Parametric: x = a·cos(t)/(1+sin²(t)), y = a·sin(t)·cos(t)/(1+sin²(t)), t ∈ [0, 2π]
 * Coordinates rounded to 2 decimals so server and client produce identical path (avoids hydration mismatch).
 */
function buildLemniscatePath(samples, width, height, scale) {
  const cx = width / 2;
  const cy = height / 2;
  const a = scale;
  const points = [];

  for (let i = 0; i <= samples; i++) {
    const t = (i / samples) * Math.PI * 2;
    const denom = 1 + Math.pow(Math.sin(t), 2);
    const x = cx + (a * Math.cos(t)) / denom;
    const y = cy + (a * Math.sin(t) * Math.cos(t)) / denom;
    points.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
  }

  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

const VIEWBOX = { width: 120, height: 60 };
const LEMNISCATE_PATH = buildLemniscatePath(
  128,
  VIEWBOX.width,
  VIEWBOX.height,
  24
);

export default function InfinityLoader() {
  const [visible, setVisible] = useState(true);
  const [pathLength, setPathLength] = useState(260);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const strokeSegment = pathLength * 0.22;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="infinity-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="
            fixed inset-0 z-9999
            flex items-center justify-center
            bg-bg-dark/50 backdrop-blur-xl
            pointer-events-auto
          "
        >
          <div className="flex flex-col items-center gap-8">
            <svg
              width="240"
              height="120"
              viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              {/* Full infinity stroke (faint track) */}
              <path
                d={LEMNISCATE_PATH}
                stroke="var(--color-brand-accent)"
                strokeOpacity="0.25"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Animated segment that travels along the path */}
              <motion.path
                ref={pathRef}
                d={LEMNISCATE_PATH}
                stroke="var(--color-brand-accent)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                style={{
                  strokeDasharray: `${strokeSegment} ${pathLength}`,
                }}
                animate={{
                  strokeDashoffset: [0, -pathLength],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            <p className="text-base font-semibold tracking-wide text-bg-main">
              Megica Group of Companies
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
