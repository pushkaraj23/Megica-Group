"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DealershipCTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-muted/15">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand-accent/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Heading */}
          <p className="tracking-widest text-brand-accent font-body font-semibold">
            MEGICA DEALERSHIP
          </p>

          <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl uppercase text-brand-deep">
            Partner With a Manufacturing-Led Brand
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Join a structured dealership network backed by strong manufacturing,
            export-ready products, transparent policies, and long-term business
            support.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/dealership"
              className="
                inline-flex items-center justify-center
                rounded-xl
                bg-brand-primary
                px-8 py-3
                text-sm sm:text-base
                text-inverse
                transition
                hover:opacity-90
                shadow-soft
              "
            >
              Explore Dealership Opportunity
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
