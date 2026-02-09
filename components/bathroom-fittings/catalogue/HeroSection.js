"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ECatalogueHero() {
  return (
    <section className="relative min-h-screen bg-bg-dark text-text-inverse overflow-hidden">
      {/* =========================
          BACKGROUND VISUALS
      ========================== */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=80)",
        }}
      />

      {/* Gradient veil */}
      <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/75 to-black/90" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 right-1/3 h-105 w-105 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-25%] left-[-15%] h-90 w-90 rounded-full bg-brand-soft/10 blur-3xl" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 flex items-center">
        <div>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.4em] text-brand-muted"
          >
            E-Catalogue & Business Resources
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-bg-main"
          >
            Everything You Need to
            <br className="hidden sm:block" />
            <span className="text-brand-accent">
              Evaluate, Specify & Partner
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl"
          >
            Access Megica’s complete product catalogue and company profile —
            built to support dealers, distributors, architects, consultants, and
            project decision-makers.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl"
          >
            From detailed specifications and model ranges to manufacturing
            capabilities and export readiness, our resources are structured to
            enable confident sourcing and long-term collaboration.
          </motion.p>

          {/* =========================
              CTA STRIP
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="/downloads/Megica_Group_Profile.pdf"
              download
              className="
                inline-flex items-center justify-center
                rounded-lg
                bg-brand-accent
                px-5 py-4
                text-sm font-semibold uppercase tracking-wider
                text-black
                shadow-card
                transition-all duration-300
                hover:brightness-110
              "
            >
              Download Megica Group Profile
            </a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="mt-5 text-sm text-white/65 italic max-w-2xl"
          >
            Trusted by trade partners and project stakeholders across domestic
            and international markets.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
