"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalPresenceHero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark text-inverse">
      {/* =====================
         BACKGROUND ATMOSPHERE
      ====================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-brand-primary/90 to-black" />

        {/* Gold glow accents */}
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/20 blur-[200px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[520px] w-[520px] rounded-full bg-brand-muted/20 blur-[220px]" />
      </div>

      {/* =====================
         CONTENT
      ====================== */}
      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT – BRAND MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <p className="text-sm tracking-widest uppercase text-brand-accent">
              Global Presence
            </p>

            <h1 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Indian Manufacturing
              <br />
              <span className="text-brand-accent">
                Trusted Across the World
              </span>
            </h1>

            {/* Visual tagline */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Tag>Made in India</Tag>
              <Tag>Export Ready</Tag>
              <Tag>Global Compliance</Tag>
              <Tag>Reliable Supply</Tag>
            </div>
            {/* IMAGE STRIP */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <MiniImage
                src="https://plus.unsplash.com/premium_photo-1661843542816-5de48cbc9ee3"
                label="Manufactured in India"
              />
              <MiniImage
                src="https://plus.unsplash.com/premium_photo-1661879449050-069f67e200bd"
                label="Exported Worldwide"
              />
            </div>
          </motion.div>

          {/* RIGHT – VISUAL STORY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            {/* WORLD MAP */}
            <div className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-card">
              <Image
                src="https://plus.unsplash.com/premium_photo-1712328581716-49b75fdc1faf"
                alt="Global Presence Map"
                fill
                className="object-cover opacity-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 backdrop-blur px-4 py-3 text-sm text-white border border-white/10">
                Indian Products. Global Acceptance.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

/* =====================
   SMALL UI ELEMENTS
===================== */

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur">
      {children}
    </span>
  );
}

function MiniImage({ src, label }) {
  return (
    <div className="relative h-32 rounded-2xl overflow-hidden border border-white/10">
      <Image src={src} alt={label} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-2 left-2 text-xs text-white uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
