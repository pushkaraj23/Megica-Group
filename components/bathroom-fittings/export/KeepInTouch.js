"use client";

import { motion } from "framer-motion";

export default function KeepInTouchBanner() {
  return (
    <section className="bg-bg-section py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          relative mx-auto max-w-6xl overflow-hidden rounded-4xl
          bg-linear-to-b from-(--color-brand-primary) to-(--color-brand-deep)
          px-8 py-16 text-center shadow-(--shadow-card)
        "
      >
        {/* LEFT GLOW */}
        <div
          className="
            pointer-events-none absolute -top-32 -left-32 h-105 w-105
            rounded-full blur-[120px] opacity-40
            bg-[radial-gradient(circle,var(--color-brand-accent)_0%,transparent_70%)]
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            pointer-events-none absolute -bottom-32 -right-32 h-105 w-105
            rounded-full blur-[120px] opacity-30
            bg-[radial-gradient(circle,#6b5cff_0%,transparent_70%)]
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-brand-muted">
            Need more help?
          </p>

          <h3
            className="
              mt-4 font-heading
              text-3xl md:text-4xl
              text-text-inverse
            "
          >
            Get in touch with us today!
          </h3>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="
                rounded-full bg-brand-accent
                px-7 py-3 text-sm font-semibold
                text-brand-deep
                transition hover:opacity-90 hover:-translate-y-0.5
              "
            >
              Contact Us
            </a>

            <a
              href="/products"
              className="
                rounded-full border border-white/25
                px-7 py-3 text-sm font-medium
                text-text-inverse
                transition hover:bg-white/10
              "
            >
              View Products
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
