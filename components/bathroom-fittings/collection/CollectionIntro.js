"use client";

import { motion } from "framer-motion";

export default function CollectionIntroSection() {
  return (
    <section className="relative bg-bg-section overflow-hidden">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-soft/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* =========================
              IMAGE BLOCK
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-xl shadow-card">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=80"
                alt="Premium bathroom fittings collection by Megica"
                className="h-105 w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating detail image */}
            <div className="absolute -bottom-10 -right-10 hidden sm:block">
              <div className="overflow-hidden rounded-lg shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Bathroom fittings finish and surface detail"
                  className="h-48 w-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* =========================
              TEXT BLOCK
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
              Engineered to Perform
            </p>

            <h2 className="mt-6 text-2xl sm:text-3xl uppercase tracking-tight text-text-secondary">
              Where Precision Meets Everyday Comfort
            </h2>

            <div className="mt-5 h-0.5 w-16 bg-brand-accent" />

            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Our bathroom fittings collection is designed to balance precision
              engineering, refined aesthetics, and long-term reliability. Each
              product is crafted to deliver smooth control, consistent water
              flow, and lasting finish quality.
            </p>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              From residential bathrooms to large-scale commercial projects, the
              collection offers dependable solutions engineered for performance,
              durability, and modern living.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
