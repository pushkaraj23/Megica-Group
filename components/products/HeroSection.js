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

export default function ProductHeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-inverse">
      {/* =====================
         BACKGROUND LAYERS
      ====================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-primary/90 to-brand-deep" />

        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/25 blur-[160px]" />
        <div className="absolute bottom-[-160px] left-[-160px] h-[520px] w-[520px] rounded-full bg-brand-secondary/25 blur-[160px]" />
      </div>

      {/* =====================
         CONTENT
      ====================== */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-9 w-9 rounded-xl bg-brand-accent/25 ring-1 ring-brand-accent/40 grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
              </span>
              <p className="text-sm font-semibold tracking-wide text-brand-accent">
                PRODUCT PORTFOLIO
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Complete Range of{" "}
              <span className="text-brand-accent">Sanitaryware</span> &{" "}
              <span className="text-brand-accent">Bathroom Fittings</span>
              <br />
              <span className="text-bg-light text-xl sm:text-2xl font-semibold block mt-2">
                for Global Markets
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-bg-light text-base sm:text-lg leading-relaxed">
              Megica Group of Companies offers a comprehensive portfolio of
              sanitaryware and bathroom fittings manufactured in India and
              supplied to domestic and international markets.
            </p>

            <p className="mt-4 text-bg-light/90 text-sm sm:text-base leading-relaxed">
              Designed for residential, commercial, hospitality, and
              infrastructure projects — combining durability, functionality, and
              export-ready quality standards.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products/categories"
                className="group relative overflow-hidden rounded-xl bg-brand-accent px-6 py-3 text-sm sm:text-base font-semibold text-brand-deep shadow-card transition hover:scale-[1.03]"
              >
                <span className="relative z-10">Browse Product Categories</span>
                <span className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm sm:text-base font-semibold text-inverse transition hover:bg-white/10"
              >
                Request Catalogue
              </Link>
            </div>
          </motion.div>

          {/* =====================
             RIGHT – IMAGE COMPOSITION
          ====================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[380px] sm:h-[440px]">
              {/* IMAGE 1 – SANITARYWARE */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-[72%] h-[68%] rounded-3xl overflow-hidden shadow-card border border-white/20"
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1684445034864-5a9c6756d099"
                  alt="Sanitaryware Products"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* IMAGE 2 – BATHROOM FITTINGS */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="absolute bottom-0 right-0 w-[78%] h-[72%] rounded-3xl overflow-hidden shadow-card border border-white/20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1651442897558-47cff0f64bd9"
                  alt="Bathroom Fittings"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-brand-deep to-transparent" />
    </section>
  );
}
