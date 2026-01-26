"use client";

import { motion } from "framer-motion";

export function ContactTrustBanner() {
  const items = [
    { value: "30+", label: "Countries Served" },
    { value: "Export", label: "Ready Products" },
    { value: "ISO", label: "Quality Standards" },
    { value: "Bulk", label: "Project Supply" },
  ];

  return (
    <section className="relative bg-bg-main pb-14 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          mx-auto
          max-w-6xl
          -mt-20
          rounded-3xl
          bg-bg-section
          border border-border-light
          shadow-card
          px-8 py-10
        "
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-heading text-brand-deep">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-text-muted uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
