"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    title: "Global Export Expertise",
    desc: "Export-ready processes, accurate documentation, and reliable logistics for smooth global shipments.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Assured Quality & Compliance",
    desc: "Strict quality control and adherence to international standards for consistent performance.",
    img: "https://plus.unsplash.com/premium_photo-1682974359785-a2acd35d6123?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVhbGl0eSUyMGFuZCUyMGNvbXBsaWFuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Wide & Versatile Product Range",
    desc: "Comprehensive sanitaryware and bathroom fittings portfolio from a single trusted source.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Scalable Production Capacity",
    desc: "Built for bulk exports, repeat supply, and long-term manufacturing commitments.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    title: "Custom Branding & Private Label",
    desc: "OEM manufacturing, private labeling, custom packaging, and market-specific customization.",
    img: "https://images.unsplash.com/photo-1593747176945-ef77e62547eb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dealer & Distribution Support",
    desc: "Marketing support, product training, exclusive territories, and growth-focused strategies.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
];

export default function WhyMegicaSection() {
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-linear-to-b from-white to-bg-light overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="flex gap-3 items-center">
            <span className="h-9 w-9 rounded-xl bg-brand-accent/25 ring-1 ring-brand-accent/40 grid place-items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
            </span>
            <p className="text-sm font-semibold tracking-wide text-brand-primary">
              WHY MEGICA GROUP
            </p>
          </div>

          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-brand-deep">
            A Trusted Global Manufacturing Partner
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Megica Group of Companies delivers globally competitive sanitaryware
            and bathroom fittings with transparency, reliability, and
            partnership-driven growth.
          </p>
        </motion.div>

        {/* IMAGE FEATURE GRID */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-bg-main border border-light shadow-soft
             transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
            >
              {/* IMAGE BLOCK */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/70 via-brand-deep/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 rounded-full bg-bg-main/90 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-primary shadow-soft">
                  Export Ready
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-6">
                <h3 className="font-heading text-lg font-medium text-brand-deep leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* LEFT ACCENT BAR */}
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-accent scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100" />

              {/* SUBTLE GLOW */}
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-brand-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* IMMERSIVE CTA PANEL */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mt-20 overflow-hidden rounded-3xl bg-brand-deep text-inverse shadow-card"
        >
          <div className="absolute inset-0">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683121188328-b1910d5e6713?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmF0aHR1YnN8ZW58MHx8MHx8fDA%3D"
              alt="Global export"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <h3 className="font-heading text-2xl text-white sm:text-3xl">
              Looking for a Reliable Export Partner?
            </h3>

            <p className="mt-3 max-w-2xl text-bg-light/75 text-sm sm:text-base">
              Connect with Megica Group to explore long-term sourcing,
              dealership, or private-label manufacturing opportunities.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/e-catalogue"
                className="rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90"
              >
                Download Catalogue
              </Link>

              <Link
                href="/about/dealership"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10"
              >
                Become a Dealer
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>

          {!prefersReduced && (
            <motion.div
              className="h-1 bg-brand-accent"
              initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
