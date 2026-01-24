"use client";

import { motion } from "framer-motion";

/* =========================
   TESTIMONIAL DATA (SAMPLE)
========================= */

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Project Consultant",
    company: "Commercial Developments, India",
    quote:
      "Megica’s sanitaryware consistently meets project requirements for quality, finish, and delivery timelines. Their manufacturing reliability makes coordination smooth.",
  },
  {
    name: "Ahmed Al Farsi",
    role: "Import Manager",
    company: "Building Supplies, UAE",
    quote:
      "What stands out is their export-ready packaging and consistent product standards. Megica understands international market expectations very well.",
  },
  {
    name: "Sanjay Kulkarni",
    role: "Dealer Partner",
    company: "Western India",
    quote:
      "Strong product range, dependable supply, and responsive support. Megica has been a reliable brand for both retail and project-based requirements.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-bg-dark text-text-inverse overflow-hidden">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[var(--color-brand-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
            Testimonials
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl text-bg-main font-extrabold tracking-tight">
            Trusted by Partners & Clients
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            Our products and processes are trusted by consultants, dealers, and
            international buyers across markets.
          </p>
        </motion.div>

        {/* =========================
            TESTIMONIAL GRID
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                relative
                rounded-xl
                bg-brand-primary
                p-8
                shadow-card
                border border-white/5
              "
            >
              {/* Quote mark */}
              <div className="text-9xl text-brand-accent">
                “
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="my-6 h-[1px] w-full bg-white/10" />

              {/* Author */}
              <div>
                <p className="text-sm font-semibold tracking-wide">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {item.role}, {item.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
