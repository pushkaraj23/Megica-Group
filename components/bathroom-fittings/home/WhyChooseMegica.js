"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Precision Engineering",
    description:
      "Advanced manufacturing processes focused on accuracy, smooth operation, and long-lasting mechanical performance.",
  },
  {
    title: "Global Quality Standards",
    description:
      "Bathroom fittings designed and tested to comply with international durability, pressure, and safety benchmarks.",
  },
  {
    title: "Design That Performs",
    description:
      "Thoughtfully engineered designs that blend visual elegance with ergonomic control and water efficiency.",
  },
  {
    title: "Premium Material Finish",
    description:
      "High-grade metals, coatings, and surface treatments that resist corrosion, wear, and finish degradation.",
  },
  {
    title: "Project-Scale Supply",
    description:
      "Production capacity built to support large-scale developments, retail distribution, and export timelines.",
  },
  {
    title: "Reliability Assured",
    description:
      "Rigorous inspection and functional testing ensure consistent performance before every dispatch.",
  },
];

export default function WhyChooseMegica() {
  return (
    <section className="relative bg-bg-dark text-text-inverse overflow-hidden">
      {/* Ambient Gold Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[var(--color-brand-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
            Why Choose Megica
          </p>

          <h2 className="mt-5 text-3xl text-text-inverse sm:text-4xl font-extrabold tracking-tight">
            Engineered for Precision.
            <br className="hidden sm:block" />
            Designed for Everyday Performance.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            Megica Bathroom Fittings are crafted with engineering accuracy,
            premium materials, and a commitment to dependable performance in
            modern living spaces.
          </p>
        </motion.div>

        {/* REASONS GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="
                relative
                rounded-lg
                bg-brand-primary
                p-8
                shadow-card
                border border-white/5
              "
            >
              {/* Accent Line */}
              <div className="mb-5 h-0.5 w-12 bg-brand-accent" />

              <h3 className="text-lg text-text-inverse font-semibold tracking-wide">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
