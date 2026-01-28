"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* --------------------------------
   DATA
--------------------------------- */
const slides = [
  {
    eyebrow: "Global Manufacturing",
    title: "Export-Grade Sanitaryware",
    subtitle:
      "Precision-engineered sanitaryware manufactured in India and supplied to global distributors, developers, and OEM partners.",
    primary: "/sanitaryware",
  },
  {
    eyebrow: "Design & Engineering",
    title: "Modern Bathroom Fittings",
    subtitle:
      "High-performance fittings built to international standards with durability, elegance, and scale in mind.",
    primary: "/bathroom-fittings",
  },
  {
    eyebrow: "Trusted Worldwide",
    title: "Made in India. Delivered Globally.",
    subtitle:
      "Consistent quality, compliance-ready production, and long-term export partnerships across 30+ countries.",
    primary: "/product-portfolio",
  },
];

const INTERVAL = 7000;

/* --------------------------------
   ANIMATION
--------------------------------- */
const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/* --------------------------------
   COMPONENT
--------------------------------- */
export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % slides.length),
      INTERVAL,
    );
    return () => clearInterval(t);
  }, []);

  const current = slides[active];

  return (
    <section className="relative h-svh overflow-hidden bg-bg-dark text-text-inverse">
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://www.pexels.com/download/video/8403602/"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ================= DEPTH OVERLAYS ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

      {/* ================= GOLD GLOW ================= */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-accent/20 blur-[160px]" />
      <div className="pointer-events-none absolute left-40 bottom-24 h-[260px] w-[260px] rounded-full bg-brand-soft/20 blur-[140px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex mt-5 h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              variants={contentVariants}
              initial="hidden"
              animate="show"
              className=""
            >
              {/* Eyebrow */}
              <p className="mb-4 text-sm tracking-[0.3em] uppercase text-brand-soft">
                {current.eyebrow}
              </p>

              {/* Title */}
              <h1 className="font-heading text-5xl leading-[1.1] text-brand-accent uppercase">
                {current.title}
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl tracking-wide font-thin text-base sm:text-lg text-bg-light/85 leading-relaxed">
                {current.subtitle}
              </p>

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/products#product-categories"
                  className="
                    relative inline-flex items-center justify-center
                    rounded-md
                    bg-brand-accent
                    px-8 py-3
                    tracking-wide
                    text-brand-deep
                    shadow-card
                    transition
                    hover:scale-[1.04]
                  "
                >
                  Explore Products
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-md
                    border border-white/25
                    bg-white/10
                    px-8 py-3
                    tracking-wide
                    text-text-inverse
                    backdrop-blur-md
                    transition
                    hover:bg-white/15
                  "
                >
                  Enquiry Now
                </Link>
              </div>

              {/* Floating Metrics */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
                {[
                  ["30+", "Countries"],
                  ["ISO", "Certified"],
                  ["OEM", "Partnerships"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="
                      relative overflow-hidden
                      rounded-xl
                      border border-white/20
                      bg-white/10
                      backdrop-blur-md
                      p-5
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 hover:opacity-100 transition" />
                    <p className="text-2xl font-semibold">{v}</p>
                    <p className="mt-1 text-sm text-bg-light">{l}</p>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="mt-14 flex gap-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-[3px] transition-all ${
                      i === active ? "w-14 bg-brand-accent" : "w-8 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-10 text-bg-light text-xs tracking-[0.35em] animate-bounce">
        SCROLL
      </div>
    </section>
  );
}
