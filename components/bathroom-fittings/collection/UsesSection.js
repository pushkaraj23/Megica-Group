"use client";

import { motion } from "framer-motion";

/* =========================
   USE CASE DATA – BATHROOM FITTINGS
========================= */

const uses = [
  {
    title: "Residential Spaces",
    subtitle: "Homes • Apartments • Villas",
    description:
      "Bathroom fittings engineered for smooth control, refined finishes, and everyday comfort in modern living spaces.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
  },
  {
    title: "Commercial Buildings",
    subtitle: "Offices • IT Parks • Malls",
    description:
      "Durable fittings designed to perform reliably under frequent usage while maintaining finish quality and water efficiency.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80",
  },
  {
    title: "Hospitality Projects",
    subtitle: "Hotels • Resorts • Premium Stays",
    description:
      "Premium bathroom fittings that enhance guest experience through precision engineering, aesthetics, and long-term reliability.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1600&q=80",
  },
  {
    title: "Public Infrastructure",
    subtitle: "Airports • Hospitals • Institutions",
    description:
      "Heavy-duty fittings built for high-footfall environments where performance, durability, and ease of maintenance are critical.",
    image:
      "https://images.unsplash.com/photo-1518618750560-8f07abde4e4e?w=1600&q=80",
  },
];

/* =========================
   SECTION
========================= */

export default function BathroomFittingsUsesSection() {
  return (
    <section className="relative bg-bg-section py-24 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 mb-16"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
          Applications
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-text-secondary">
          Where Megica Bathroom Fittings Perform Best
        </h2>

        <p className="mt-5 max-w-2xl text-base sm:text-lg text-text-muted">
          Bathroom fittings engineered to deliver reliable performance across
          residential, commercial, hospitality, and public environments.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mx-auto max-w-7xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {uses.map((item, index) => (
          <UseCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

/* =========================
   USE CARD
========================= */

function UseCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      className="
        relative h-105
        rounded-2xl overflow-hidden
        shadow-card
        border border-border-light
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-white via-white/50 to-white/0" />

      {/* CONTENT */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-end">
        {/* Badge */}
        <span className="inline-block w-fit text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-brand-soft text-brand-muted">
          {item.subtitle}
        </span>

        <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-text-secondary">
          {item.title}
        </h3>

        <div className="mt-2 h-0.5 w-12 bg-brand-accent" />

        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
