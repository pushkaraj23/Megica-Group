"use client";

import { motion } from "framer-motion";

export default function ContactMapSection() {
  return (
    <section className="relative bg-bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm tracking-widest uppercase text-brand-accent font-semibold">
            Our Location
          </p>

          <h2 className="mt-4 font-heading uppercase text-3xl sm:text-4xl text-text-secondary">
            Visit Our Office & Operations
          </h2>

          <p className="mt-4 text-text-muted text-base sm:text-lg">
            Our manufacturing and business operations are strategically located
            to serve domestic and international markets efficiently.
          </p>
        </motion.div>

        {/* MAP CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-border-light
            shadow-card
            bg-bg-light
          "
        >
          {/* MAP */}
          <div className="relative h-[420px] w-full">
            <iframe
              title="Megica Group Location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* OVERLAY STRIP */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur px-6 py-4 border-t border-border-light">
            <p className="text-sm font-medium text-text-secondary">
              Megica Group of Companies — India
            </p>
            <p className="text-xs text-text-muted mt-1">
              Manufacturing • Export • Distribution
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
