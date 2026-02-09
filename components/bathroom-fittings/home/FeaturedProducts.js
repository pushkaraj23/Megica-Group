"use client";

import { motion } from "framer-motion";

/* =========================
   FEATURED PRODUCTS DATA
========================= */

const featuredProducts = [
  {
    id: 1,
    name: "Overhead Shower",
    description:
      "Rain-style overhead shower designed for immersive, spa-like bathing.",
    image:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3d?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Single Lever Basin Mixer",
    description:
      "Smooth single-lever mixer with refined finish and precise flow control.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Wall Mixer with L-Bend",
    description:
      "Versatile wall mixer with L-bend for coordinated bath and shower areas.",
    image:
      "https://images.unsplash.com/photo-1600566752734-2a0e1a0af9d6?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Health Faucet Set",
    description:
      "Durable health faucet set engineered for daily heavy-duty performance.",
    image:
      "https://images.unsplash.com/photo-1600566752547-33b4181b61f8?w=1400&auto=format&fit=crop&q=60",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative bg-[var(--color-bg-section)] overflow-hidden">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-muted)]">
            Featured Collection
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl uppercase tracking-tight text-[var(--color-text-secondary)]">
            Signature Bathroom Fittings
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)]">
            A curated selection of Megica’s premium bathroom fittings — crafted
            for smooth operation, refined finishes, and export-ready
            consistency.
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl
                bg-gradient-to-b from-white via-white to-bg-section
                border border-border-light/80
                shadow-card
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl hover:border-[var(--color-brand-accent)]/60
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                  loading="lazy"
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/35 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* TOP BADGE */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="
                      rounded-full bg-black/70 text-white text-[10px]
                      px-2 py-1 uppercase tracking-[0.15em]
                    "
                  >
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="
                      hidden sm:inline-flex
                      rounded-full bg-white/80 text-[10px] text-[var(--color-brand-muted)]
                      px-2 py-1 uppercase tracking-[0.15em]
                    "
                  >
                    Bath Fittings
                  </span>
                </div>
                {/* CONTENT OVERLAY (DESCRIPTION ONLY, inside image) */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <p
                    className="
                      text-xs sm:text-sm text-white/90 leading-relaxed
                      opacity-0 translate-y-2
                      transition-all duration-500
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                  >
                    {product.description}
                  </p>
                </div>
              </div>

              {/* TITLE BELOW CARD */}
              <div className="relative px-4 py-4 bg-white rounded-b-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)] text-center sm:text-left">
                  {product.name}
                </p>
                <div className="mt-2 h-[2px] w-10 mx-auto sm:mx-0 bg-[var(--color-brand-accent)] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
