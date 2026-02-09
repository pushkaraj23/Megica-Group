"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Manufacturing Expertise",
    description:
      "Years of focused manufacturing experience backed by controlled processes and consistent output quality.",
  },
  {
    title: "Export-Ready Quality",
    description:
      "Products engineered and tested to meet international hygiene, durability, and compliance standards.",
  },
  {
    title: "Design with Purpose",
    description:
      "Modern, functional designs that balance aesthetics, comfort, and long-term usability.",
  },
  {
    title: "Material Integrity",
    description:
      "High-grade raw materials and glazing techniques ensure strength, finish retention, and longevity.",
  },
  {
    title: "Scalable Supply",
    description:
      "Production capacity designed to support bulk orders, project timelines, and global distribution.",
  },
  {
    title: "Quality Assurance",
    description:
      "Multi-stage inspection and testing protocols to ensure reliability before dispatch.",
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

          <h2 className="mt-5 text-3xl text-text-inverse sm:text-4xl uppercase tracking-tight">
            Built on Quality.
            <br className="hidden sm:block" />
            Trusted by Markets Worldwide.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            Megica Sanitaryware is driven by precision manufacturing, material
            integrity, and a commitment to long-term performance across every
            product we deliver.
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
