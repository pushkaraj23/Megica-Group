"use client";

import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section className="relative bg-bg-dark overflow-hidden">
      {/* =====================
         BACKGROUND IMAGE
      ====================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1638262052640-82e94d64664a?w=1600&auto=format&fit=crop&q=60')",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Decorative grid texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT – MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-brand-accent">
              Contact Megica Group
            </p>

            <h1 className="mt-8 font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-text-inverse">
              Conversations That
              <br />
              <span className="text-brand-accent">
                Build Long-Term Partnerships
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-text-inverse/70 text-base sm:text-lg leading-relaxed">
              From product enquiries and export discussions to dealership and
              strategic collaborations — Megica Group believes meaningful
              conversations are the foundation of successful partnerships.
            </p>

            {/* Divider */}
            <div className="mt-10 h-px w-24 bg-brand-accent/40" />
          </motion.div>

          {/* RIGHT – CONTACT PANELS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 grid gap-6"
          >
            <ContactBlock
              title="Corporate Office"
              value="Megica Group of Companies"
              sub="Shop No. 505, Fifth Floor, Shivam Plaza, Morbi–Halvad Rd, Opp. WTC, Near ITI, Mahendranagar, Morbi, Gujarat – 363642, India"
            />

            <ContactBlock
              title="Phone"
              value="+91 95606 90006 · +91 80805 00515"
              sub="Monday – Saturday | IST Business Hours"
            />

            <ContactBlock
              title="Email"
              value="samar@megicagroup.com"
              sub="Product • Export • Partnership Enquiries"
            />
          </motion.div>
        </div>
      </div>

      {/* Gold accent edge */}
      <div className="absolute right-0 top-0 h-full w-[6px] bg-brand-accent" />
    </section>
  );
}

/* =========================
   CONTACT BLOCK
========================= */

function ContactBlock({ title, value, sub }) {
  return (
    <div
      className="
        relative
        rounded-2xl
        bg-brand-primary/90
        backdrop-blur
        p-6
        border border-white/10
        shadow-card
        transition
        hover:-translate-y-1
      "
    >
      <p className="text-xs tracking-widest uppercase text-brand-soft">
        {title}
      </p>

      <p className="mt-3 text-lg text-text-inverse font-medium">{value}</p>

      {sub && <p className="mt-1 text-sm text-text-inverse/60">{sub}</p>}

      {/* Accent dot */}
      <span className="absolute top-6 right-6 h-2 w-2 rounded-full bg-brand-accent" />
    </div>
  );
}
