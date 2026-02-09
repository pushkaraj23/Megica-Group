"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutBathroomFittings() {
  return (
    <section className="relative bg-[var(--color-bg-main)] overflow-hidden">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--color-brand-soft)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Label */}
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-muted)]">
            About Megica
          </p>

          {/* Heading */}
          <h2 className="mt-5 text-3xl sm:text-4xl uppercase tracking-tight text-[var(--color-text-secondary)]">
            Precision You Can Feel.
            <br className="hidden sm:block" />
            Performance You Can Trust.
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-xl">
            Megica Bathroom Fittings are engineered for smooth operation,
            long-lasting performance, and modern bathroom environments. Every
            fitting is designed with attention to material quality, internal
            mechanisms, and finish consistency to perform reliably in
            residential, commercial, and high-usage project applications.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/about"
              className="
                inline-flex items-center
                text-sm font-semibold uppercase tracking-wider
                text-[var(--color-brand-accent)]
                transition-colors
                hover:text-[var(--color-brand-muted)]
              "
            >
              Learn More About Us →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT VISUAL / STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { label: "Years of Engineering Expertise", value: "15+" },
            { label: "Fitting Designs & Variants", value: "140+" },
            { label: "International Markets Served", value: "25+" },
            { label: "Performance Tested Components", value: "100%" },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[var(--radius-lg)]
                bg-[var(--color-bg-light)]
                p-6
                shadow-soft
              "
            >
              <p className="text-2xl uppercase text-[var(--color-text-secondary)]">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
