"use client";

import { motion } from "framer-motion";

export default function MegicaBusinessHeadSection() {
  return (
    <section className="relative bg-bg-dark text-text-inverse py-32 overflow-hidden mb-10">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[80px_80px]" />

      {/* Accent glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">
        {/* =========================
            LEFT – IMAGE
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900&q=80"
              alt="Megica Global Business Head"
              className="rounded-2xl object-cover shadow-card"
            />

            {/* Soft edge fade */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* =========================
            RIGHT – CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            Let’s Talk
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-bg-main">
            Connect with Our
            <br className="hidden sm:block" />
            Global Business Head
          </h2>

          <div className="mt-6 h-0.5 w-16 bg-brand-accent" />

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/75">
            At Megica Sanitaryware, our global business leadership focuses on
            building long-term partnerships with dealers, distributors, and
            project stakeholders worldwide. With deep manufacturing insight and
            export experience, we help partners achieve consistent growth,
            reliable supply, and market confidence.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            Whether you are expanding your retail network, executing large
            projects, or sourcing dependable sanitaryware products — our team is
            here to support you at every stage.
          </p>

          {/* =========================
              CTA BUTTONS
          ========================== */}
          <div className="mt-10 flex flex-wrap gap-6">
            {/* LinkedIn */}
            <a
              href="#"
              className="
                inline-flex items-center gap-3
                rounded-xl
                border border-white/20
                px-7 py-4
                text-sm font-semibold uppercase tracking-wider
                text-white
                transition-all duration-300
                hover:border-brand-accent
                hover:text-brand-accent
              "
            >
              <span className="text-lg">in</span>
              LinkedIn
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="
                inline-flex items-center gap-3
                rounded-xl
                bg-brand-accent
                px-7 py-4
                text-sm font-semibold uppercase tracking-wider
                text-black
                transition-all duration-300
                hover:brightness-110
              "
            >
              <span className="text-lg">💬</span>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
