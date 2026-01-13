"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductCategoriesSection() {
  return (
    <section className="relative bg-bg-section overflow-hidden">
      {/* subtle background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] -left-40 h-[520px] w-[520px] rounded-full bg-bg-light blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-primary">
            OUR PRODUCT CATEGORIES
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep leading-tight">
            Manufactured for Performance.{" "}
            <span className="text-brand-primary">
              Designed for Modern Applications.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Megica Group of Companies offers a carefully structured portfolio
            across two primary categories — engineered for durability,
            consistency, and global market readiness.
          </p>
        </motion.div>

        {/* ======================
            CATEGORY: SANITARYWARE
        ====================== */}
        <CategoryRow
          image="https://images.unsplash.com/photo-1664227430687-9299c593e3da"
          title="Sanitaryware"
          desc="Designed for residential, commercial, and institutional projects, Megica sanitaryware combines durability, ease of maintenance, and functional design."
          highlights={[
            "Export-quality manufacturing",
            "Uniform finish & durability",
            "Project & bulk supply ready",
            "Multiple designs & specifications",
          ]}
          link="/products/sanitaryware"
          align="left"
        />

        {/* ======================
            CATEGORY: BATHROOM FITTINGS
        ====================== */}
        <CategoryRow
          image="https://images.unsplash.com/photo-1708424230529-7933b11425fc"
          title="Bathroom Fittings"
          desc="Precision-engineered fittings designed for long-lasting performance, smooth operation, and contemporary aesthetics across global markets."
          highlights={[
            "Robust construction",
            "Modern design language",
            "High-usage & project ready",
            "Batch-level quality consistency",
          ]}
          link="/products/bathroom-fittings"
          align="right"
        />
      </div>
    </section>
  );
}

/* =========================
   CATEGORY ROW (PARALLAX)
========================= */

function CategoryRow({ image, title, desc, highlights, link, align }) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      className="mt-28 grid gap-14 lg:grid-cols-2 items-center"
    >
      {/* IMAGE */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`group relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-card ${
          isLeft ? "" : "lg:order-2"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="max-w-xl"
      >
        <motion.h3
          variants={fadeUpSoft}
          className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-deep"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={fadeUpSoft}
          className="mt-4 text-muted leading-relaxed"
        >
          {desc}
        </motion.p>

        <motion.ul
          variants={fadeUpSoft}
          className="mt-6 space-y-2 text-sm sm:text-base text-muted"
        >
          {highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-brand-accent">•</span>
              <span>{h}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUpSoft}>
          <Link
            href={link}
            className="
              inline-block mt-8
              rounded-xl
              bg-brand-primary
              px-6 py-3
              text-sm sm:text-base
              font-semibold
              text-inverse
              shadow-soft
              transition
              hover:-translate-y-0.5 hover:shadow-card
            "
          >
            Explore {title}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const fadeUpSoft = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
