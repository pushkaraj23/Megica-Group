"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCategoriesSection() {
  return (
    <section className="relative bg-bg-section overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand-accent/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] -left-32 h-[520px] w-[520px] rounded-full bg-bg-light blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 mb-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-brand-accent">
            Product Categories
          </p>

          <h2 className="mt-6 font-heading text-3xl sm:text-4xl uppercase text-brand-deep leading-tight">
            Manufactured for Performance <br />
            <span className="text-brand-primary">
              Designed for Modern Applications
            </span>
          </h2>

          <p className="mt-6 text-muted text-base sm:text-lg">
            A focused portfolio engineered for durability, consistency, and
            global market readiness — built for projects, distribution, and
            long-term supply.
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <div className="mt-20 space-y-16">
          <CategoryRow
            image="https://images.unsplash.com/photo-1664227430687-9299c593e3da"
            title="Sanitaryware"
            desc="Designed for residential, commercial, and institutional projects with emphasis on durability, hygiene, and ease of maintenance."
            highlights={[
              "Export-quality manufacturing",
              "Uniform finish & durability",
              "Project & bulk supply ready",
              "Multiple designs & specifications",
            ]}
            link="/sanitaryware"
            align="left"
          />

          <CategoryRow
            image="https://images.unsplash.com/photo-1708424230529-7933b11425fc"
            title="Bathroom Fittings"
            desc="Precision-engineered fittings delivering long-lasting performance, smooth operation, and contemporary aesthetics."
            highlights={[
              "Robust construction",
              "Modern design language",
              "High-usage & project ready",
              "Batch-level quality consistency",
            ]}
            link="/bathroom-fittings"
            align="right"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   CATEGORY ROW
========================= */

function CategoryRow({ image, title, desc, highlights, link, align }) {
  const isLeft = align === "left";

  return (
    <motion.section
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-140px" }}
      transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
      className="relative grid lg:grid-cols-12 gap-20 items-center"
    >
      {/* ================= IMAGE STAGE ================= */}
      <motion.div
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`relative lg:col-span-7 ${isLeft ? "" : "lg:order-2"}`}
      >
        {/* Image frame */}
        <div className="relative h-[460px] rounded-[32px] overflow-hidden shadow-card">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />

          {/* floating identity badge */}
          <div className="absolute top-6 left-6 rounded-full bg-white/90 px-6 py-2 text-[11px] tracking-[0.25em] text-brand-deep shadow-md">
            CATEGORY
          </div>
        </div>

        {/* depth accent */}
        <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[36px] border border-brand-accent/20 pointer-events-none" />
      </motion.div>

      {/* ================= CONTENT STAGE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative lg:col-span-5"
      >
        {/* Content container */}
        <div className="relative rounded-[32px] bg-brand-primary p-10 overflow-hidden shadow-soft border border-light">
          {/* Accent spine */}
          <span className="absolute -left-0 top-0 h-full w-[4px] bg-brand-accent rounded-full hidden lg:block" />
          <h3 className="font-heading text-3xl uppercase text-bg-light tracking-tight">
            {title}
          </h3>

          <p className="mt-5 leading-relaxed text-bg-main/60 font-thin text-base sm:text-lg">
            {desc}
          </p>

          {/* Highlights */}
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 font-thin text-bg-main/60 text-sm sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={link}
            className="
              group inline-flex items-center gap-3
              mt-10
              text-sm sm:text-base
              uppercase tracking-wide
              text-bg-light
              transition
              hover:text-brand-accent
            "
          >
            Explore Category
            <span className="text-lg transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
