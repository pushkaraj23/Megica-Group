"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const bullets = [
  {
    title: "From Domestic Strength to Global Expansion",
    desc: "Built on a strong Indian foundation, we align with international regulations, compliance, and export-ready standards.",
  },
  {
    title: "Manufacturing Excellence at the Core",
    desc: "Advanced machinery, skilled teams, and multi-check quality assurance to deliver consistent output at scale.",
  },
  {
    title: "A Brand Built on Partnerships",
    desc: "Transparent processes, reliable supply, custom branding, and dedicated account management for long-term growth.",
  },
];

const pillars = [
  { k: "Consistent Quality", v: "Strict checks at every stage" },
  { k: "Innovation", v: "New designs & product development" },
  { k: "Customer First", v: "Fast response & clear commitments" },
  { k: "Responsible Practices", v: "Ethical & sustainable operations" },
];

const stats = [
  { value: "Export-Ready", label: "Quality & Compliance" },
  { value: "Bulk + Custom", label: "Flexible Production" },
  { value: "B2B Focused", label: "Dealers & Distributors" },
];

export default function AboutMegicaSection() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const softScale = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-bg-section">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-bg-light blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-brand-accent blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,189,232,0.22),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(189,216,233,0.45),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-14 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 items-center">
          {/* left side */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="col-span-1"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3"
            >
              <span className="h-9 w-9 rounded-xl bg-brand-accent/25 ring-1 ring-brand-accent/40 grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
              </span>
              <p className="text-sm font-semibold tracking-wide text-brand-primary">
                About Megica Group of Companies
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-brand-deep"
            >
              Built in India.{" "}
              <span className="text-brand-primary">Trusted Worldwide.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg text-muted leading-relaxed"
            >
              Megica Group of Companies is a professionally managed
              manufacturing and export group specializing in{" "}
              <span className="text-brand-primary font-semibold">
                sanitaryware and bathroom fittings
              </span>
              . We combine durability, modern design, and reliable supply—built
              for distributors, developers, and global partners.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="/products"
                className="group relative overflow-hidden w-fit rounded-lg bg-brand-accent px-5 py-3 text-sm sm:text-base font-semibold text-brand-deep shadow-card transition hover:scale-[1.02] active:scale-[0.99]"
              >
                <span className="relative z-10">Explore Product Portfolio</span>
                <span className="absolute inset-0 translate-y-full bg-white/25 transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <Link
                href="/contact"
                className="rounded-lg w-fit border border-light bg-bg-main/60 backdrop-blur px-5 py-3 text-sm sm:text-base font-semibold text-brand-primary transition hover:bg-bg-main"
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.div>
          {/* right side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="col-span-1 relative flex justify-center"
          >
            <div className="relative w-[80vw] sm:h-[35vw] h-[130vw] sm:w-[50vw]">
              {/* IMAGE 1 – BACK */}
              <motion.div
                initial={{ rotate: -6, opacity: 0, y: 20 }}
                whileInView={{ rotate: -6, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-[85%] h-[65%] rounded-2xl overflow-hidden shadow-card border border-light bg-bg-main"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Manufacturing Excellence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/40 to-transparent" />
              </motion.div>

              {/* IMAGE 2 – FRONT */}
              <motion.div
                initial={{ rotate: 6, opacity: 0, y: 40 }}
                whileInView={{ rotate: 6, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="absolute bottom-0 right-0 w-[90%] h-[70%] rounded-2xl overflow-hidden shadow-card border border-light bg-bg-main"
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1676320514136-5a15d9f97dfa"
                  alt="Export Quality Assurance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
              </motion.div>

              {/* DECORATIVE ACCENT DOT */}
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-brand-accent/30 blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Content grid */}
        <div className="mt-12 lg:mt-16 grid gap-6 lg:grid-cols-12 pt-8">
          {/* Left: Feature cards + timeline */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="lg:col-span-7"
          >
            <div className="grid gap-4 sm:gap-5">
              {bullets.map((b) => (
                <motion.div
                  key={b.title}
                  variants={softScale}
                  className="relative overflow-hidden rounded-2xl bg-bg-main/70 backdrop-blur border border-light shadow-soft"
                >
                  {/* Accent rail */}
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand-accent via-bg-light to-transparent opacity-90" />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 h-10 w-10 rounded-xl bg-brand-accent/20 ring-1 ring-brand-accent/35 grid place-items-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-brand-deep">
                          {b.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* subtle corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-accent/15 blur-2xl" />
                </motion.div>
              ))}
            </div>

            {/* Mini “process” strip */}
            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-2xl border border-light bg-bg-main/70 backdrop-blur shadow-soft p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-brand-primary">
                    How we deliver at export standard
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Simple, transparent, dependable.
                  </p>
                </div>
                <span className="hidden sm:inline-flex rounded-full bg-bg-section px-3 py-1 text-xs font-semibold text-brand-primary border border-light">
                  Quality • Compliance • Logistics
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-bg-section border border-light p-4 text-center"
                  >
                    <p className="font-heading text-base sm:text-lg font-extrabold text-brand-deep">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-muted">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Pillars panel */}
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="lg:col-span-5"
          >
            <motion.div
              variants={softScale}
              className="relative overflow-hidden rounded-2xl bg-brand-deep text-inverse shadow-card"
            >
              {/* Top glow */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-accent/25 blur-3xl" />
              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold tracking-wider text-bg-light">
                  OUR COMMITMENT
                </p>
                <h3 className="mt-2 font-heading text-2xl text-white sm:text-3xl font-extrabold">
                  Reliable manufacturing.
                  <br />
                  Premium bathroom solutions.
                </h3>

                <p className="mt-4 text-sm sm:text-base text-bg-light leading-relaxed">
                  We don’t just manufacture products—we build trust with
                  consistent quality, modern design, and responsive service for
                  global partners.
                </p>

                <div className="mt-6 grid gap-3">
                  {pillars.map((p) => (
                    <div
                      key={p.k}
                      className="rounded-xl bg-white/10 border border-white/15 p-4 backdrop-blur"
                    >
                      <p className="font-semibold">{p.k}</p>
                      <p className="mt-1 text-sm text-bg-light">{p.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/about/why-megica"
                    className="rounded-lg bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90"
                  >
                    Why Megica Group
                  </Link>

                  <Link
                    href="/e-catalogue"
                    className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10"
                  >
                    Download E-Catalogue
                  </Link>
                </div>
              </div>

              {/* Animated accent line (subtle) */}
              {!prefersReduced && (
                <motion.div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-full bg-brand-accent/70"
                  initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
                />
              )}
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
