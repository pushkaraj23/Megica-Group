"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfinityLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader after page is fully loaded
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200); // adjust duration if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="infinity-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-bg-main
            pointer-events-auto
          "
        >
          <div className="flex flex-col items-center gap-6">
            {/* Infinity SVG */}
            <svg
              width="120"
              height="60"
              viewBox="0 0 120 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-infinity"
            >
              <path
                d="M20 30C20 16 36 16 50 30C64 44 80 44 100 30"
                stroke="var(--color-brand-accent)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M100 30C100 16 84 16 70 30C56 44 40 44 20 30"
                stroke="var(--color-brand-primary)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-sm font-semibold tracking-wide text-brand-primary">
              Megica Group of Companies
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
