"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed Al Rashid",
    role: "Distributor – Middle East",
    company: "Al Noor Trading LLC",
    quote:
      "Megica Group has consistently delivered export-grade sanitaryware that meets our regional standards. Their reliability and documentation accuracy make them a preferred sourcing partner.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    name: "Rajiv Mehta",
    role: "Procurement Head",
    company: "Urban Infra Projects",
    quote:
      "Across multiple large-scale projects, Megica’s bathroom fittings have shown excellent consistency, finish, and post-delivery support.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    name: "Michael Turner",
    role: "Import Manager – Europe",
    company: "BuildPro Supplies",
    quote:
      "From private labeling to bulk shipments, Megica Group operates with transparency and professionalism. They understand international trade expectations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-bg-section overflow-hidden">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-130 w-130 rounded-full bg-bg-light blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-24">
        {/* =====================
            HEADER
        ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-accent">
            GLOBAL TRUST
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-brand-deep leading-tight">
            Trusted by Distributors,
            <br />
            Importers & Project Partners
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Long-term partnerships built on quality consistency, transparent
            communication, and export-ready processes across global markets.
          </p>
        </motion.div>

        {/* =====================
            TESTIMONIAL GRID
        ===================== */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="
                group relative
                rounded-3xl bg-bg-main
                border border-light
                shadow-soft
                p-7 sm:p-8
                transition
                hover:-translate-y-2
                hover:shadow-card overflow-hidden
              "
            >
              {/* Floating quote mark */}
              <div className="absolute -bottom-20 right-6 text-[25vh] leading-none text-brand-accent/20 font-serif">
                “
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-brand-deep leading-relaxed">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-border-light" />

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden border border-light">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold text-brand-deep">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                  <p className="text-xs text-muted">{item.company}</p>
                </div>
              </div>

              {/* Accent bar */}
              <div
                className="
                absolute left-0 top-0 h-full w-1
                bg-brand-accent
                scale-y-0 origin-top
                transition-transform duration-500
                group-hover:scale-y-100
              "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
