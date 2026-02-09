"use client";

import { motion } from "framer-motion";

/* =========================
   IMPACT DATA – BATHROOM FITTINGS
========================= */

const impactStats = [
  {
    metric: "25%",
    value: "Lower Water Consumption",
    label: "Water-Efficient Flow Control",
    description:
      "Optimized aerators, cartridges, and flow regulators help reduce water usage without compromising pressure or comfort.",
    audience: "End Users",
  },
  {
    metric: "40%",
    value: "Reduced Cleaning Effort",
    label: "Premium Surface Finishes",
    description:
      "Advanced coatings resist stains, fingerprints, and water marks, reducing cleaning frequency and chemical use.",
    audience: "End Users",
  },
  {
    metric: "45%",
    value: "Extended Product Life",
    label: "Durable Internal Components",
    description:
      "High-grade metal bodies and precision-engineered cartridges significantly increase operational lifespan.",
    audience: "End Users",
  },
  {
    metric: "22%",
    value: "Improved Dealer Margins",
    label: "Higher Sell-Through Rates",
    description:
      "Consistent quality, finish options, and repeat demand help dealers improve conversions and profitability.",
    audience: "Dealers",
  },
  {
    metric: "35%",
    value: "Fewer Service Complaints",
    label: "Reliable Performance",
    description:
      "Rigorous functional testing reduces leakage issues, callbacks, and after-sales support requirements.",
    audience: "Dealers",
  },
  {
    metric: "Project-Ready",
    value: "Scalable Supply Capability",
    label: "Bulk & Project Execution",
    description:
      "Standardized designs and production capacity ensure timely delivery for large projects and phased rollouts.",
    audience: "Dealers & Projects",
  },
];

/* =========================
   SECTION
========================= */

export default function BathroomFittingsImpactSection() {
  return (
    <section className="relative bg-bg-main py-28 overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand-soft/40 blur-3xl" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-6 mb-20"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
          What You Gain
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl uppercase tracking-tight text-text-secondary">
          Real-World Impact of Using Megica Bathroom Fittings
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-muted">
          Tangible performance benefits that matter to homeowners, dealers, and
          large-scale project partners.
        </p>
      </motion.div>

      {/* IMPACT CARDS */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.06,
              }}
              className="
                relative
                rounded-2xl
                bg-bg-light
                p-8
                border border-border-light
                shadow-soft
                hover:shadow-card
                transition-shadow
              "
            >
              {/* Audience tag */}
              <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-brand-soft text-brand-muted">
                {item.audience}
              </span>

              {/* METRIC */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl uppercase text-text-secondary">
                  {item.metric}
                </span>
              </div>

              {/* DIVIDER */}
              <div className="mt-4 h-0.5 w-16 bg-brand-accent" />

              {/* VALUE */}
              <h3 className="mt-4 text-lg font-semibold text-text-secondary">
                {item.value}
              </h3>

              {/* LABEL */}
              <p className="mt-2 text-sm font-medium text-text-muted">
                {item.label}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
