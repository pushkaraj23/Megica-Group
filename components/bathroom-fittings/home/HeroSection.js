"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

/* =========================
   SLIDE DATA
========================= */

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5",
    tagline: "Designed for Modern Living",
    title: "Sanitaryware",
    subtitle: "Built for hygiene, durability, and everyday performance",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1595515770358-b0047714ccb9",
    tagline: "Engineered with Precision",
    title: "Sanitaryware",
    subtitle: "Manufactured to meet global quality and export standards",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1722186382699-8a6aecee6c65",
    tagline: "Trusted Worldwide",
    title: "Sanitaryware",
    subtitle: "Chosen for residential, commercial, and infrastructure projects",
  },
];

const SLIDE_DURATION = 6000; // 6 seconds

export default function SanitarywareHero() {
  const [active, setActive] = useState(0);

  /* =========================
     AUTO SLIDE CHANGE
  ========================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* =========================
          BACKGROUND SLIDES
      ========================== */}
      <AnimatePresence>
        <motion.div
          key={slides[active].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[active].image})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Micro Tagline */}
            <p className="text-xs uppercase tracking-[0.35em] text-brand-accent">
              {slides[active].tagline}
            </p>

            {/* H1 */}
            <h1 className="mt-6 text-4xl sm:text-8xl uppercase text-text-inverse tracking-widest">
              {slides[active].title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base font-light sm:text-2xl text-white/80 leading-relaxed">
              {slides[active].subtitle}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/sanitaryware/products"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  bg-brand-accent
                  px-8 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-black
                  shadow-card
                  transition-transform duration-300
                  hover:scale-[1.04]
                "
              >
                Explore Products
              </Link>

              <Link
                href="/sanitaryware/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  border border-white/30
                  px-8 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-white
                  backdrop-blur
                  transition-all duration-300
                  hover:border-brand-accent
                  hover:text-brand-accent
                "
              >
                Enquiry Now
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================
          PROGRESS BAR
      ========================== */}
      <div className="absolute bottom-8 left-1/2 z-20 w-[80%] max-w-md -translate-x-1/2">
        <div className="h-0.5 bg-white/20 overflow-hidden rounded-full">
          <motion.div
            key={active}
            className="h-full bg-brand-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
