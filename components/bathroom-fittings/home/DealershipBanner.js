"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DealershipBannerBathroomFittings() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-1/3 h-[420px] w-[420px] rounded-full bg-[var(--color-brand-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            grid gap-10 lg:grid-cols-2
            items-center
            rounded-[var(--radius-xl)]
            bg-[var(--color-brand-primary)]
            px-10 py-14
            shadow-card
            border border-white/5
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div>
            {/* Label */}
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-muted)]">
              Dealership Opportunity
            </p>

            {/* Heading */}
            <h2 className="mt-5 text-3xl text-text-inverse sm:text-4xl font-extrabold tracking-tight">
              Partner with Megica
            </h2>

            {/* Accent line */}
            <div className="mt-5 h-[2px] w-16 bg-[var(--color-brand-accent)]" />

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
              Become an authorised dealer for Megica Bathroom Fittings and
              represent a brand known for precision engineering, premium
              finishes, and consistent product performance. Grow your business
              with a range designed for residential, commercial, and high-usage
              project environments.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Attractive dealer margins",
                "Reliable supply & batch consistency",
                "Marketing & brand support",
                "Project & bulk order enablement",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-brand-accent)]" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT CTA PANEL
          ========================== */}
          <div className="relative rounded-[var(--radius-lg)] bg-black/40 border border-white/10 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-soft)]">
              Become a Dealer
            </p>

            <h3 className="mt-4 text-text-inverse text-xl font-semibold">
              Expand Your Reach with a Performance-Driven Brand
            </h3>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              We are onboarding distributors and dealers to represent Megica’s
              bathroom fittings range — engineered for durability, smooth
              operation, and modern bathroom aesthetics.
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
                href="/bathroom-fittings/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-[var(--radius-lg)]
                  border border-white/30
                  px-8 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-white
                  transition-all duration-300
                  hover:border-[var(--color-brand-accent)]
                  hover:text-[var(--color-brand-accent)]
                "
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
