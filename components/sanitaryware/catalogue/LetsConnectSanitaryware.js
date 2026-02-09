"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LetsConnectSection() {
  return (
    <section className="relative bg-brand-accent overflow-hidden">
      {/* Decorative soft shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-30%] right-[-10%] h-96 w-96 rounded-full bg-white/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-2 items-center"
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand-primary">
              Let’s Connect
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-deep">
              Start a Conversation with Megica
            </h2>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-brand-secondary leading-relaxed">
              Whether you’re looking to source sanitaryware, explore dealership
              opportunities, or discuss project requirements — our team is ready
              to assist you with clarity, speed, and commitment.
            </p>

            <p className="mt-4 text-sm text-brand-secondary/80 max-w-lg">
              From domestic partnerships to export enquiries, we believe strong
              collaborations begin with the right conversation.
            </p>
          </div>

          {/* =========================
              CTA PANEL
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="
              relative
              rounded-2xl
              bg-black
              p-10
              shadow-card
            "
          >
            <h3 className="text-xl font-semibold text-white">
              How would you like to connect?
            </h3>

            <p className="mt-3 text-sm text-white/70">
              Choose an option below and our team will reach out accordingly.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/sanitaryware/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  bg-brand-accent
                  px-6 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-black
                  transition-transform duration-300
                  hover:scale-[1.03]
                "
              >
                General Enquiry
              </Link>

              <Link
                href="/sanitaryware/export"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  border border-white/30
                  px-6 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-white
                  transition-all duration-300
                  hover:border-brand-accent
                  hover:text-brand-accent
                "
              >
                Export Enquiry
              </Link>

              <Link
                href="/dealership"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  border border-white/30
                  px-6 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-white
                  transition-all duration-300
                  hover:border-brand-accent
                  hover:text-brand-accent
                "
              >
                Apply for Dealership
              </Link>

              <Link
                href="/sanitaryware/e-catalogue"
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  bg-white
                  px-6 py-4
                  text-sm font-semibold uppercase tracking-wider
                  text-brand-deep
                  transition-transform duration-300
                  hover:scale-[1.03]
                "
              >
                View E-Catalogue
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
