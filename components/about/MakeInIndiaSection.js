"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MakeInIndiaSection() {
  return (
    <section className="relative overflow-hidden bg-bg-main">
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-130 w-130 rounded-full bg-orange-400 blur-[160px]" />
        <div className="absolute -bottom-40 -left-40 h-130 w-130 rounded-full bg-green-600 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT – CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-9 w-9 rounded-xl bg-brand-accent/25 ring-1 ring-brand-accent/40 grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
              </span>
              <p className="text-sm font-semibold tracking-wide text-brand-primary">
                🇮🇳 MAKE IN INDIA
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep leading-tight">
              Rooted in Indian Craftsmanship.
              <br />
              <span className="text-brand-primary">
                Built for Global Standards.
              </span>
            </h2>

            {/* Short Description */}
            <p className="mt-6 max-w-xl text-muted text-base sm:text-lg leading-relaxed">
              Megica Group combines India’s manufacturing strength with global
              quality benchmarks, modern technology, and export-ready processes
              to deliver products trusted worldwide.
            </p>

            {/* KEY POINT STRIP */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Manufactured in India",
                "Global Quality Standards",
                "Export-Ready Processes",
                "Long-Term Reliability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl text-center bg-bg-section border border-light px-4 py-3 text-sm font-semibold text-brand-deep shadow-soft"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – VISUAL STACK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-105 sm:h-130 rounded-3xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82"
                alt="Manufactured in India"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-deep/70 via-transparent to-transparent" />

              {/* FLOATING BADGE */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-bg-main/90 backdrop-blur px-5 py-3 shadow-soft">
                <p className="text-sm font-semibold text-brand-deep">
                  Made in India
                </p>
                <p className="text-xs text-muted">Trusted by Global Markets</p>
              </div>
            </div>

            {/* SECONDARY IMAGE */}
            <div className="absolute -bottom-10 -right-10 hidden sm:block">
              <div className="relative h-44 w-64 rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1601897690942-bcacbad33e55"
                  alt="Global exports"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-deep/40" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CLOSING LINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="font-heading text-lg sm:text-xl font-bold text-brand-deep">
            Made in India.{" "}
            <span className="text-brand-primary">Trusted by the World.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
