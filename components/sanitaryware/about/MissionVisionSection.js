"use client";

import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="relative bg-[var(--color-bg-main)] overflow-hidden">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-32 right-1/3 h-72 w-72 rounded-full bg-[var(--color-brand-soft)]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-muted)]">
            Our Purpose
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl uppercase tracking-tight text-[var(--color-text-secondary)]">
            Mission & Vision
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Our mission and vision guide every decision — from material
            selection and manufacturing processes to long-term partnerships and
            global expansion.
          </p>
        </motion.div>

        {/* =========================
            MISSION & VISION CARDS
        ========================== */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative
              rounded-[var(--radius-xl)]
              bg-[var(--color-brand-primary)]
              p-10
              shadow-card
              border border-white/5
              text-[var(--color-text-inverse)]
            "
          >
            {/* Label */}
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-soft)]">
              Our Mission
            </p>

            {/* Accent line */}
            <div className="mt-4 h-[2px] w-16 bg-[var(--color-brand-accent)]" />

            {/* Content */}
            <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
              To manufacture high-quality sanitaryware that consistently meets
              global standards of hygiene, durability, and design — while
              supporting customers with dependable supply, transparent
              processes, and long-term value.
            </p>

            {/* Sub-points */}
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li>• Focus on material integrity and process control</li>
              <li>• Commitment to quality-driven manufacturing</li>
              <li>• Reliable support for projects and bulk requirements</li>
            </ul>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="
              relative
              rounded-[var(--radius-xl)]
              bg-[var(--color-bg-light)]
              p-10
              shadow-card
              border border-[var(--color-border-light)]
            "
          >
            {/* Label */}
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-muted)]">
              Our Vision
            </p>

            {/* Accent line */}
            <div className="mt-4 h-[2px] w-16 bg-[var(--color-brand-accent)]" />

            {/* Content */}
            <p className="mt-8 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
              To become a globally trusted sanitaryware manufacturing brand,
              recognised for consistent quality, responsible production, and
              strong partnerships across domestic and international markets.
            </p>

            {/* Sub-points */}
            <ul className="mt-8 space-y-3 text-sm text-[var(--color-text-muted)]">
              <li>• Expand presence across global markets</li>
              <li>• Invest in modern manufacturing and innovation</li>
              <li>• Build long-term relationships with partners and clients</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
