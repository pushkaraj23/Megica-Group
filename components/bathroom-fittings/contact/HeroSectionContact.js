"use client";

import { motion } from "framer-motion";

export function ContactHeroSection() {
  return (
    <section className="relative bg-bg-dark text-text-inverse overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:26px_26px] opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <p className="text-xs tracking-[0.35em] uppercase text-brand-accent">
            Contact Megica Group
          </p>

          {/* Heading */}
          <h1 className="mt-8 font-heading text-text-inverse text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Let’s Build
            <br />
            <span className="text-brand-accent">
              Reliable Business Partnerships
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-text-inverse/70 text-base sm:text-lg leading-relaxed max-w-2xl">
            Whether you are enquiring about products, exports, dealership
            opportunities, or long-term sourcing — our team is ready to respond
            with clarity, speed, and professionalism.
          </p>

          {/* Divider */}
          <div className="mt-10 h-px w-24 bg-brand-accent/50" />

          {/* Quick contact highlights */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <ContactHighlight label="Phone" value="+91 XXXXX XXXXX" />
            <ContactHighlight label="Email" value="info@megicagroup.com" />
            <ContactHighlight label="Office" value="India (Exports & Mfg.)" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

/* ======================
   SUB COMPONENT
====================== */

function ContactHighlight({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        rounded-2xl
        bg-white/5
        backdrop-blur
        border border-white/10
        p-5
        shadow-card
      "
    >
      <p className="text-xs tracking-widest uppercase text-brand-soft">
        {label}
      </p>
      <p className="mt-2 text-sm sm:text-base text-text-inverse font-medium">
        {value}
      </p>
    </motion.div>
  );
}
