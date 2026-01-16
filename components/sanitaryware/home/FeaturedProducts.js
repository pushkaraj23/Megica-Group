"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* =========================
   FEATURED PRODUCTS DATA
========================= */

const featuredProducts = [
  {
    id: 1,
    name: "Wall Hung Basin",
    image:
      "https://www.inart.co.in/cdn/shop/files/01_-_Copy_bb7bc87b-20a2-458d-ace0-97e5ff9c0418.jpg?v=1725008039&width=1946",
    link: "/sanitaryware/products/wall-hung-basin",
  },
  {
    id: 2,
    name: "One Piece Closet",
    image:
      "https://www.inart.co.in/cdn/shop/products/CVZX-Copy.png?v=1665231221",
    link: "/sanitaryware/products/one-piece-closet",
  },
  {
    id: 3,
    name: "Table Top Basin",
    image:
      "https://ruheindia.com/cdn/shop/files/02_4b186c57-691c-4144-9aa0-e637126e966f.png?v=1753091717&width=1214",
    link: "/sanitaryware/products/table-top-basin",
  },
  {
    id: 4,
    name: "Concealed Cistern",
    image:
      "https://www.jiomart.com/images/product/original/rvzdb04ilr/plantex-concealed-flush-tank-for-toilet-flushing-cistern-with-full-frame-slim-and-stylish-tank-with-flush-plate-concealed-cistern-pack-of-1-product-images-orvzdb04ilr-p610029347-1-202409260858.jpg?im=Resize=(420,420)",
    link: "/sanitaryware/products/concealed-cistern",
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

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text-secondary)]">
            Signature Sanitaryware
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[var(--color-text-muted)]">
            A curated selection of Megica’s most trusted and export-ready
            sanitaryware designs — engineered for performance and refined
            aesthetics.
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group relative overflow-hidden rounded-sm bg-white shadow-card"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden">
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
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-sm font-semibold uppercase tracking-wider text-white">
                  {product.name}
                </p>

                <Link
                  href={product.link}
                  className="
                    mt-2 inline-block
                    text-xs uppercase tracking-widest
                    text-[var(--color-brand-accent)]
                    opacity-0 transition-opacity duration-500
                    group-hover:opacity-100
                  "
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            href="/sanitaryware/products"
            className="
              inline-flex items-center justify-center
              rounded-[var(--radius-lg)]
              bg-[var(--color-brand-accent)]
              px-10 py-4
              text-sm font-semibold uppercase tracking-wider
              text-black
              shadow-card
              transition-transform duration-300
              hover:scale-[1.04]
            "
          >
            View Full Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
