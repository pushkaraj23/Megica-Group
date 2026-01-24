"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DealershipSection() {
  return (
    <section className="relative bg-[var(--color-bg-section)] overflow-hidden">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-[var(--color-brand-soft)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid gap-20 lg:grid-cols-2 items-center">
        {/* =========================
            LEFT: CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-muted)]">
            Dealership Opportunity
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text-secondary)]">
            Grow with a Trusted Manufacturing Brand
          </h2>

          <div className="mt-6 h-[2px] w-20 bg-[var(--color-brand-accent)]" />

          <p className="mt-8 text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)]">
            Megica Sanitaryware partners with dealers and distributors who value
            product consistency, transparent support, and long-term business
            growth. Our dealership program is structured to support retail,
            project, and bulk supply opportunities.
          </p>

          {/* Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Attractive dealer margins",
              "Consistent product availability",
              "Project & bulk order support",
              "Marketing & branding assistance",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                <span className="text-sm text-[var(--color-text-muted)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================
            RIGHT: CTA PANEL
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="
            rounded-[var(--radius-xl)]
            bg-white
            p-10
            shadow-card
            border border-[var(--color-border-light)]
          "
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-muted)]">
            Become a Dealer
          </p>

          <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-secondary)]">
            Expand Your Market Presence
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            We invite regional dealers and distributors to represent Megica’s
            sanitaryware range and build long-term value through consistent
            supply and professional support.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dealership"
              className="
                inline-flex items-center justify-center
                rounded-[var(--radius-lg)]
                bg-[var(--color-brand-accent)]
                px-8 py-4
                text-sm font-semibold uppercase tracking-wider
                text-black
                shadow-card
                transition-transform duration-300
                hover:scale-[1.05]
              "
            >
              Apply for Dealership
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                rounded-[var(--radius-lg)]
                border border-[var(--color-border-light)]
                bg-white
                px-8 py-4
                text-sm font-semibold uppercase tracking-wider
                text-[var(--color-text-secondary)]
                transition-all duration-300
                hover:border-[var(--color-brand-accent)]
                hover:text-[var(--color-brand-accent)]
              "
            >
              Speak with Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
