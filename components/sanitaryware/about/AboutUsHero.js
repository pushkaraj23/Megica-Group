"use client";

import { motion } from "framer-motion";

export default function AboutUsHeroExtended() {
  return (
    <section className="relative bg-bg-dark text-text-inverse overflow-hidden">
      {/* =========================
          BACKGROUND IMAGE (HERO)
      ========================== */}
      <div
        className="absolute inset-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80)",
        }}
      />
      <div className="absolute inset-0 h-screen bg-black/65" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-105 w-105 rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[70vh] -left-40 h-90 w-90 rounded-full bg-brand-soft/10 blur-3xl" />

      {/* =========================
          HERO CONTENT (100vh)
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            About Megica Sanitaryware
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl text-bg-main lg:text-6xl uppercase tracking-tight leading-tight">
            Manufacturing Excellence <br className="hidden sm:block" />
            Built for Global Markets
          </h1>

          <div className="mt-6 h-0.5 w-20 bg-brand-accent" />

          <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
            Megica Sanitaryware is a quality-driven manufacturer of premium
            sanitaryware products. Our focus lies in hygiene, durability,
            functional design, and export-ready consistency — supporting
            residential, commercial, and infrastructure projects worldwide.
          </p>
        </motion.div>
      </div>

      {/* =========================
          EXTENDED ABOUT CONTENT
          (OVERFLOW BELOW FOLD)
      ========================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        {/* STATISTICS STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            -mt-24
            grid gap-6
            sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {[
            { value: "15+", label: "Years of Manufacturing" },
            { value: "120+", label: "Sanitaryware Models" },
            { value: "25+", label: "Export Countries" },
            { value: "100%", label: "Quality Inspected Output" },
          ].map((stat, i) => (
            <div
              key={i}
              className="
                rounded-xl
                bg-brand-primary
                p-8
                text-center
                shadow-card
                border border-white/5
              "
            >
              <p className="text-3xl uppercase text-brand-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ABOUT DETAILS */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 items-center">
          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl text-bg-main sm:text-3xl uppercase tracking-tight">
              A Process-Driven Manufacturing Approach
            </h2>

            <div className="mt-5 h-0.5 w-16 bg-brand-accent" />

            <p className="mt-6 text-base leading-relaxed text-white/75">
              Our manufacturing process is built on controlled raw material
              selection, precision moulding, advanced glazing techniques, and
              multi-stage quality inspection. Each product is developed to
              ensure structural strength, surface finish retention, and long
              service life.
            </p>

            <p className="mt-5 text-base leading-relaxed text-white/75">
              With scalable production capacity and export-compliant packaging,
              Megica supports bulk orders, project timelines, and long-term
              supply partnerships across domestic and international markets.
            </p>
          </motion.div>

          {/* SUPPORTING IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="
              relative
              overflow-hidden
              rounded-xl
              shadow-card
              border border-white/5
            "
          >
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12"
              alt="Megica manufacturing facility"
              className="h-105 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
