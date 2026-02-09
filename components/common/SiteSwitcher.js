"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SITES = [
  { id: "main", label: "Megica Group", short: "MG", href: "/" },
  { id: "sanitaryware", label: "Sanitaryware", short: "SW", href: "/sanitaryware" },
  { id: "bathroom", label: "Bathroom Fittings", short: "BF", href: "/bathroom-fittings" },
];

export default function SiteSwitcher({ currentSite }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside (critical for mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-label="Switch Megica websites"
    >
      {/* Options panel: dark bg, white text for contrast on any page */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="sites"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="
              mb-2 flex flex-col items-stretch gap-1
              rounded-2xl
              bg-[#1a1a1a]
              px-2 py-2
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              border border-white/15
              ring-2 ring-[#fca235]/40
            "
          >
            {SITES.map((site) => {
              const isActive = site.id === currentSite;
              return (
                <Link
                  key={site.id}
                  href={site.href}
                  prefetch={false}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center gap-2.5
                    min-h-[44px] sm:min-h-0
                    rounded-xl px-3 py-2.5 sm:py-2
                    text-sm font-medium
                    transition-colors
                    touch-manipulation
                    ${isActive
                      ? "bg-[#fca235] text-[#000000]"
                      : "text-[#ffffff] hover:bg-white/15 active:bg-white/20"
                    }
                  `}
                >
                  <span
                    className={`
                      inline-flex h-7 w-7 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold
                      ${isActive ? "bg-[#000000]/20 text-[#000000]" : "bg-white/15 text-[#ffffff]"}
                    `}
                  >
                    {site.short}
                  </span>
                  <span className="whitespace-nowrap text-left">{site.label}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary pill: accent bg, black text — high contrast */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex min-h-[48px] min-w-[48px] sm:min-h-0 sm:min-w-0
          items-center justify-center
          rounded-2xl
          bg-[#fca235]
          px-5 py-3 sm:px-4 sm:py-2
          text-sm font-bold tracking-wide
          text-[#000000]
          shadow-[0_8px_24px_rgba(252,162,53,0.45)]
          border-2 border-[#000000]/10
          transition
          hover:brightness-110
          active:scale-[0.98]
          touch-manipulation
        "
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={open ? "Close site menu" : "Switch site"}
      >
        Switch Sites
      </button>
    </motion.div>
  );
}
