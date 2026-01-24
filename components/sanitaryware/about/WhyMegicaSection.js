"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Manufacturing Discipline",
    description:
      "Process-driven production with controlled raw materials, precision moulding, and consistent glazing standards.",
  },
  {
    title: "Export-Ready Consistency",
    description:
      "Products engineered, inspected, and packed to meet international quality, compliance, and logistics requirements.",
  },
  {
    title: "Design with Purpose",
    description:
      "Functional, modern designs that balance aesthetics, hygiene, and long-term usability across project types.",
  },
  {
    title: "Scalable Supply Capability",
    description:
      "Infrastructure and capacity designed to support bulk orders, multi-location projects, and long-term partnerships.",
  },
  {
    title: "Quality Accountability",
    description:
      "Multi-stage inspection ensures structural strength, surface finish retention, and reliable performance.",
  },
];

export default function WhyMegicaSection() {
  return (
    <section className="relative bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]">
      {/* Ambient depth (can overflow safely) */}
      <div className="pointer-events-none absolute -top-32 right-1/3 h-80 w-80 rounded-full bg-[var(--color-brand-accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-[var(--color-brand-soft)]/10 blur-3xl" />

      <div className="relative mx-auto sticky top-10 max-w-7xl px-6 py-32 grid gap-20 lg:grid-cols-2">
        {/* =========================
            LEFT: STICKY BRAND NARRATIVE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            max-w-xl
            self-start
            sticky
            top-32
          "
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-muted)]">
            Why Megica
          </p>

          <h2 className="mt-6 text-bg-main text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Built for Reliability. <br className="hidden sm:block" />
            Chosen for Long-Term Value.
          </h2>

          {/* Accent divider (now sticks visually) */}
          <div className="mt-6 h-[2px] w-20 bg-[var(--color-brand-accent)]" />

          <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
            Megica Sanitaryware is built around one core principle —
            consistency. From manufacturing processes and material quality to
            supply commitments and support, every decision is designed to reduce
            risk for our partners and deliver dependable outcomes.
          </p>

          <p className="mt-5 text-base leading-relaxed text-white/70">
            This approach has made Megica a preferred choice for consultants,
            dealers, and export buyers who value predictability, accountability,
            and long-term collaboration over short-term gains.
          </p>

          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" className="w-full mt-7 rounded-2xl h-auto" alt="" />
        </motion.div>

        {/* =========================
            RIGHT: SCROLLING CAPABILITY STACK
        ========================== */}
        <div className="relative">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={`
                relative
                rounded-[var(--radius-xl)]
                bg-[var(--color-brand-primary)]
                p-8
                shadow-card
                border border-white/5
                ${index !== 0 ? "mt-6" : ""}
              `}
            >
              {/* Index indicator */}
              <div className="absolute -left-4 top-8 hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-accent)] text-black text-xs font-bold">
                {index + 1}
              </div>

              <h3 className="text-lg text-brand-accent font-semibold tracking-wide">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
