"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================
   BACKGROUND IMAGES
========================= */
const images = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
  "https://images.unsplash.com/photo-1636004482498-7b96b604a2ce",
];

export default function BathroomFittingsCollectionHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-bg-dark text-text-inverse">
      {/* =========================
          BACKGROUND IMAGE LOOP
      ========================== */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      {/* Gradient overlay (more premium depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />

      {/* Ambient accents */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-30%] -left-40 h-80 w-80 rounded-full bg-brand-soft/10 blur-3xl" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.4em] text-brand-muted">
            Megica Bathroom Fittings
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-bg-main">
            Bathroom Fittings Collection
          </h1>

          {/* Accent divider */}
          <div className="mx-auto mt-6 h-0.5 w-20 bg-brand-accent" />

          {/* Subline */}
          <p className="mt-6 text-lg sm:text-xl text-white/80">
            Precision-engineered faucets, showers, and fittings for modern
            spaces.
          </p>

          {/* Highlights */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 max-w-2xl mx-auto">
            {[
              "Precision-engineered designs",
              "Durable premium finishes",
              "Smooth control & water efficiency",
              "Project & export-ready range",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-4
                  rounded-lg
                  bg-brand-primary/65
                  px-5 py-3
                  backdrop-blur
                  border border-white/5
                "
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-black text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
