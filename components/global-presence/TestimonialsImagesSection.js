"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ============================
   DUMMY TESTIMONIAL IMAGES
   (Replace with real clients)
============================ */
const testimonials = [
  {
    name: "International Distributor",
    location: "Germany",
    image: "https://images.unsplash.com/photo-1713946598186-8e28275719b9",
  },
  {
    name: "Project Partner",
    location: "Nigeria",
    image: "https://images.unsplash.com/photo-1612014206380-b282e27ebb7b",
  },
  {
    name: "Retail Chain Buyer",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
  },
  {
    name: "Import Partner",
    location: "Sudan",
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95",
  },
  {
    name: "Domestic Distributor",
    location: "India",
    image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a",
  },
];

export default function TestimonialsImagesSection() {
  return (
    <section className="relative bg-bg-dark py-32 overflow-hidden">
      {/* =====================
         BACKGROUND GLOWS
      ====================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[520px] w-[520px] rounded-full bg-brand-muted/10 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =====================
           HEADER
        ====================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-sm tracking-widest uppercase text-brand-accent">
            Trusted Worldwide
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl text-text-inverse">
            Partners Who Trust
            <br />
            <span className="text-brand-accent">Megica Group</span>
          </h2>

          <p className="mt-6 text-text-inverse/70 text-base sm:text-lg">
            From international distributors to large project partners, Megica
            Group is trusted across global markets for quality, consistency, and
            professional manufacturing.
          </p>
        </motion.div>

        {/* =====================
           IMAGE GRID
        ====================== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="
                group relative
                h-[360px]
                rounded-3xl
                overflow-hidden
                shadow-card
                bg-brand-primary
              "
            >
              {/* IMAGE */}
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="
                  object-cover object-top
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold text-text-inverse">
                  {t.name}
                </p>
                <p className="mt-1 text-xs tracking-wide uppercase text-brand-accent">
                  {t.location}
                </p>
              </div>

              {/* GOLD ACCENT LINE */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-accent scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        {/* =====================
           FOOT NOTE
        ====================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-text-inverse/60">
            Trusted by distributors, importers, and project partners across
            multiple international markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
