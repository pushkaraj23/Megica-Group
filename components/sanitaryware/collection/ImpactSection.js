"use client";

import { motion } from "framer-motion";

/* =========================
   IMPACT DATA
========================= */

const impactStats = [
  {
    metric: "30%",
    value: "Lower Water Usage",
    label: "Water-Efficient Performance",
    description:
      "Optimized flushing systems help households and facilities reduce water consumption by up to 30% without compromising performance.",
    audience: "End Users",
  },
  {
    metric: "50%",
    value: "Less Cleaning Effort",
    label: "Easy Maintenance Surfaces",
    description:
      "High-gloss, non-porous finishes significantly reduce dirt buildup, cutting daily cleaning time and chemical usage.",
    audience: "End Users",
  },
  {
    metric: "40%",
    value: "Longer Product Life",
    label: "Durability That Lasts",
    description:
      "Strong ceramic composition and controlled glazing extend product lifespan, reducing frequent replacements.",
    audience: "End Users",
  },
  {
    metric: "20%",
    value: "Higher Dealer Margins",
    label: "Better Sell-Through",
    description:
      "Reliable quality and repeat-ready models help dealers improve conversion rates and profit margins.",
    audience: "Dealers",
  },
  {
    metric: "35%",
    value: "Fewer After-Sales Issues",
    label: "Consistent Quality Output",
    description:
      "Strict quality checks result in fewer complaints, returns, and service calls for dealers and projects.",
    audience: "Dealers",
  },
  {
    metric: "Bulk Ready",
    value: "Project-Friendly Supply",
    label: "Scalable for Large Orders",
    description:
      "Standardized designs and production capacity ensure timely delivery for bulk and project requirements.",
    audience: "Dealers & Projects",
  },
];

/* =========================
   SECTION
========================= */

export default function SanitarywareImpactSection() {
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

        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-secondary">
          Real-World Impact of Using Megica Sanitaryware
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-muted">
          Practical benefits that matter — for everyday users, dealers, and
          project partners.
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
                <span className="text-4xl sm:text-5xl font-extrabold text-text-secondary">
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
