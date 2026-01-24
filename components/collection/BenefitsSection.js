"use client";

import { motion } from "framer-motion";

/* =========================
   BENEFITS DATA
========================= */

const benefits = [
  {
    title: "Superior Hygiene Standards",
    description:
      "Non-porous ceramic surfaces with high-gloss glazing reduce bacterial retention and simplify daily cleaning.",
  },
  {
    title: "Built for Long-Term Durability",
    description:
      "Manufactured using high-density ceramic compounds to withstand continuous usage in residential and commercial environments.",
  },
  {
    title: "Water-Efficient Performance",
    description:
      "Optimized flushing systems engineered to reduce water consumption without compromising effectiveness.",
  },
  {
    title: "Design Consistency Across Ranges",
    description:
      "Unified design language across models ensures visual harmony for projects, hotels, and large-scale developments.",
  },
  {
    title: "Export-Ready Quality Control",
    description:
      "Every unit undergoes multi-stage inspection to meet international quality benchmarks and export standards.",
  },
  {
    title: "Low Maintenance Lifecycle Cost",
    description:
      "Durable finishes and reliable components reduce long-term maintenance and replacement expenses.",
  },
];

/* =========================
   SECTION
========================= */

export default function SanitarywareBenefitsSection() {
  return (
    <section className="relative bg-bg-dark py-28 overflow-hidden">
      {/* Ambient accents */}
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-soft/10 blur-3xl" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-6 mb-20"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
          Advantages
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-inverse">
          Benefits Using our Products
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70">
          Our sanitaryware solutions are engineered to deliver lasting value,
          operational reliability, and consistent performance across diverse
          applications.
        </p>
      </motion.div>

      {/* BENEFITS */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="
                relative
                rounded-2xl
                p-8
                bg-brand-primary
                border border-white/10
                shadow-card
              "
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 w-16 bg-brand-accent rounded-br-lg" />

              {/* Index marker */}
              <span className="text-xs font-semibold tracking-widest text-brand-muted">
                BENEFIT {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-extrabold text-text-inverse">
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
