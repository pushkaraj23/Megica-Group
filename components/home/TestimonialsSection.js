"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonialImages = [
  { src: "/testimonials/Group 1.png", alt: "Client testimonial" },
  { src: "/testimonials/Group 2.png", alt: "Client testimonial" },
  { src: "/testimonials/Group 3.png", alt: "Client testimonial" },
];

export default function TestimonialsSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="relative bg-bg-section overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 h-130 w-130 rounded-full bg-bg-light blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-24">
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

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="
                group relative cursor-pointer
                rounded-3xl overflow-hidden
                bg-bg-main border border-light shadow-soft
                transition hover:-translate-y-2 hover:shadow-card
              "
              onClick={() => setActiveImage(item)}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-black text-sm font-bold shadow"
                aria-label="Close image"
              >
                ×
              </button>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
