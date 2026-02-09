"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonialImages = [
  { src: "/testimonials/Group 1.png", alt: "Client testimonial" },
  { src: "/testimonials/Group 2.png", alt: "Client testimonial" },
  { src: "/testimonials/Group 3.png", alt: "Client testimonial" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-bg-dark text-text-inverse overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[var(--color-brand-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
            Testimonials
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl text-bg-main font-extrabold tracking-tight">
            Trusted by Partners & Clients
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            Our products and processes are trusted by consultants, dealers, and
            international buyers across markets.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonialImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="
                group relative
                rounded-xl overflow-hidden
                bg-brand-primary shadow-card border border-white/5
                transition hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
