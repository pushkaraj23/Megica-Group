"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonialImages = [
  { src: "/testimonials/Group 1.png", alt: "Client testimonial" },
  { src: "/testimonials/Group 2.png", alt: "Client testimonial" },
  { src: "/testimonials/Group 3.png", alt: "Client testimonial" },
];

export default function TestimonialsImagesSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="relative bg-bg-dark py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/10 blur-[180px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[520px] w-[520px] rounded-full bg-brand-muted/10 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialImages.map((t, index) => (
            <motion.div
              key={t.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="
                group relative cursor-pointer
                h-[360px]
                rounded-3xl
                overflow-hidden
                shadow-card
                bg-brand-primary
              "
              onClick={() => setActiveImage(t)}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="
                  object-cover object-center
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-accent scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" />
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
