"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* --------------------------------
   DATA
--------------------------------- */
const banners = [
  {
    title: "Global Exporters of Sanitaryware",
    subtitle:
      "Premium sanitaryware manufactured in India and trusted by global distributors, builders, and developers.",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2400&auto=format&fit=crop",
    primary: "/sanitaryware",
  },
  {
    title: "Modern Bathroom Fittings",
    subtitle:
      "Precision-crafted bathroom fittings engineered for durability, aesthetics, and international standards.",
    image:
      "https://images.unsplash.com/photo-1599513486453-39bfc7335d0f?w=2400&auto=format&fit=crop&q=60",
    primary: "/bathroom-fittings",
  },
  {
    title: "Made in India. Trusted Worldwide.",
    subtitle:
      "Megica Group delivers export-ready products with consistency, scale, and global compliance.",
    image:
      "https://plus.unsplash.com/premium_photo-1683120743705-73ad19a0b00d?w=2400&auto=format&fit=crop&q=60",
    primary: "/product-portfolio",
  },
];

const INTERVAL = 6000;

/* --------------------------------
   ANIMATIONS
--------------------------------- */
const bgVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 0.61, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: { duration: 0.8 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* --------------------------------
   COMPONENT
--------------------------------- */
export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % banners.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  const current = banners[active];

  return (
    <section className="relative h-svh overflow-hidden bg-bg-dark text-text-inverse">
      {/* ================= BACKGROUND SLIDES ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority
            className="object-cover"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            key={current.title}
            variants={contentVariants}
            initial="hidden"
            animate="show"
          >
            {/* Accent */}
            <div className="mx-auto mb-6 h-[2px] w-20 bg-brand-accent" />

            {/* TITLE */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight uppercase">
              <span className="bg-gradient-to-r from-brand-accent via-brand-soft to-white bg-clip-text text-transparent">
                {current.title}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-bg-light/90 leading-relaxed">
              {current.subtitle}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={current.primary}
                className="
                  relative overflow-hidden
                  rounded-md
                  bg-brand-accent
                  px-8 py-3
                  font-semibold
                  text-brand-deep
                  shadow-card
                  transition
                  hover:scale-[1.04]
                "
              >
                Explore Products
              </Link>

              <Link
                href="/enquiry-now"
                className="
                  rounded-md
                  border border-white/40
                  px-8 py-3
                  font-semibold
                  text-text-inverse
                  backdrop-blur
                  transition
                  hover:bg-white/10
                "
              >
                Enquiry Now
              </Link>
            </div>

            {/* TRUST METRICS */}
            <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {[
                ["30+", "Countries"],
                ["ISO", "Certified"],
                ["OEM", "Support"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="
                    rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    p-4
                    shadow-soft
                  "
                >
                  <p className="text-2xl font-bold text-text-inverse">{v}</p>
                  <p className="mt-1 text-sm text-bg-light">{l}</p>
                </div>
              ))}
            </div>

            {/* INDICATORS */}
            <div className="mt-12 flex justify-center gap-3">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? "w-10 bg-brand-accent" : "w-6 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bg-light text-xs tracking-widest animate-bounce">
        SCROLL
      </div>
    </section>
  );
}
