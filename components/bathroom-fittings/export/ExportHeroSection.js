"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ExportHeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const bgSlow = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-bg-dark text-text-inverse overflow-hidden"
    >
      {/* =========================
          PARALLAX BACKGROUNDS
      ========================== */}

      {/* Far background – slow */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          y: bgSlow,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa)",
        }}
      />

      {/* Gradient veil for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 right-1/3 h-105 w-105 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-90 w-90 rounded-full bg-brand-soft/10 blur-3xl" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs uppercase tracking-[0.35em] text-brand-muted"
        >
          Export Division
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl text-bg-main tracking-wider leading-tight"
        >
          Megica Bathroom Fittings
          <br className="hidden sm:block" />
          <span className="text-brand-accent">Export-Ready Solutions</span> for
          Global Markets
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl"
        >
          Precision-engineered bathroom fittings manufactured in India, designed
          for durability, performance, and modern architectural requirements —
          trusted by global distributors, project developers, and trade
          partners.
        </motion.p>

        {/* Authority paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-6 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl"
        >
          Megica Bathroom Fittings is a manufacturing-driven brand delivering
          export-quality faucets, showers, and fitting systems for residential,
          commercial, hospitality, and infrastructure projects. Backed by
          structured processes, strict quality control, and scalable production,
          we support long-term sourcing partnerships across global markets.
        </motion.p>

        {/* =========================
            EXPORT CONFIDENCE BANNER
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="
            mt-14 w-full rounded-3xl
            border border-white/10
            bg-linear-to-r from-bg-main/30 to-brand-primary/10
            px-8 py-10 backdrop-blur-sm
          "
        >
          <div className="grid gap-10 lg:grid-cols-3 items-center">
            {/* LEFT: EXPORT STRENGTH */}
            <div className="col-span-2">
              <h2 className="text-4xl mb-8 tracking-widest text-text-inverse">
                Indian Engineering. Global Supply Confidence.
              </h2>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Export-compliant finishes & protective packaging",
                  "Consistent performance across production batches",
                  "Bulk & project-ready manufacturing capacity",
                  "Compatibility with international plumbing standards",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" />
                    <span className="text-sm text-white/75 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust line */}
              <p className="mt-6 text-sm text-white/65 italic max-w-xl">
                Built for partners who value reliability, consistency, and
                long-term business continuity — not just one-time supply.
              </p>
            </div>

            {/* RIGHT: CTAs */}
            <div className="flex flex-wrap gap-4 lg:col-span-1 col-span-2 lg:justify-end">
              <Link
                href="/bathroom-fittings"
                className="
                  inline-flex items-center justify-center text-center
                  rounded-lg bg-brand-accent
                  px-8 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-black shadow-card
                  transition-transform duration-300
                  hover:scale-[1.03]
                "
              >
                Explore Bathroom Fittings
              </Link>

              <Link
                href="/e-catalogue"
                className="
                  inline-flex items-center justify-center
                  rounded-lg border border-white/30
                  px-8 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-white backdrop-blur
                  transition-all duration-300
                  hover:border-brand-accent hover:text-brand-accent
                "
              >
                Request Export Catalogue
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
