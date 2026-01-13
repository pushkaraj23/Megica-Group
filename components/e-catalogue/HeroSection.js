"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function ECatalogueHeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-bg-dark text-text-inverse">
      {/* =====================
         BACKGROUND IMAGE
      ====================== */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1763485956366-8cca552c85c6" // 👉 Best products banner
          alt="Megica Product Catalogue"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* =====================
         CONTENT
      ====================== */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* EYEBROW */}
          <p className="text-sm tracking-widest uppercase text-brand-accent">
            E-Catalogue
          </p>

          {/* HEADING */}
          <h1 className="mt-5 font-heading uppercase text-bg-main text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Complete Product Catalogue
            <br />
            <span className="text-brand-accent">
              Sanitaryware & Bathroom Fittings
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-text-inverse/80 text-base sm:text-lg leading-relaxed">
            Download Megica Group’s latest product catalogue and company profile
            showcasing our complete range of sanitaryware and bathroom fittings
            manufactured in India for global markets.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Catalogue */}
            <Link
              href="/downloads/megica-product-catalogue.pdf"
              target="_blank"
              className="
                inline-flex items-center justify-center
                rounded-xl
                bg-brand-accent
                px-6 py-3
                text-sm sm:text-base
                font-semibold
                text-brand-deep
                shadow-card
                transition
                hover:opacity-90
              "
            >
              Download Product Catalogue
            </Link>

            {/* Company Profile */}
            <Link
              href="/downloads/megica-company-profile.pdf"
              target="_blank"
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-white/30
                px-6 py-3
                text-sm sm:text-base
                font-semibold
                text-text-inverse
                transition
                hover:bg-white/10
              "
            >
              Download Company Profile
            </Link>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
