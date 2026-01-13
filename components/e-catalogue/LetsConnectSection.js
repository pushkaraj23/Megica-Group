"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LetsConnectSection() {
  return (
    <section className="relative overflow-hidden bg-bg-dark text-text-inverse">
      {/* =====================
         ATMOSPHERIC BACKGROUND
      ====================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft gold aura */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-brand-accent/15 blur-[180px]" />
        {/* dark depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      <div className="relative mx-auto w-full px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-1 items-center">
          {/* =====================
             LEFT – STATEMENT
          ====================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest uppercase text-brand-accent">
              Let’s Connect
            </p>

            <h2 className="mt-5 font-heading text-white text-3xl leading-tight">
              Conversations Build
              <br />
              <span className="text-brand-accent lg:text-5xl">Strong Partnerships</span>
            </h2>

            <p className="mt-6 max-w-xl text-text-inverse/80 text-base sm:text-lg leading-relaxed">
              Whether you are exploring product sourcing, dealership
              opportunities, bulk supply, or long-term partnerships — our team
              is ready to engage, understand, and support your requirements.
            </p>

            {/* subtle divider */}
            <div className="mt-10 h-px w-32 bg-brand-accent/40" />
          </motion.div>

          {/* =====================
             RIGHT – ACTION BLOCKS
          ====================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-3 max-sm:grid-cols-1 gap-6"
          >
            {/* CARD 1 */}
            <ActionCard
              title="Business Enquiries"
              desc="Product sourcing, exports, projects, and bulk supply discussions."
              link="/contact"
              cta="Send Enquiry"
            />

            {/* CARD 2 */}
            <ActionCard
              title="Dealership & Distribution"
              desc="Explore exclusive territory rights and long-term dealership partnerships."
              link="/dealership"
              cta="Become a Dealer"
            />

            {/* CARD 3 */}
            <ActionCard
              title="Catalogues & Profiles"
              desc="Download product catalogues and company profile instantly."
              link="/e-catalogue"
              cta="View Downloads"
            />
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

/* =========================
   ACTION CARD
========================= */

function ActionCard({ title, desc, link, cta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        group relative
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6 sm:p-7
        shadow-card
        transition overflow-hidden
        hover:border-brand-accent/40
      "
    >
      {/* accent edge */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-brand-accent opacity-0 transition group-hover:opacity-100" />

      <h3 className="font-heading text-lg sm:text-xl text-text-inverse">
        {title}
      </h3>

      <p className="mt-3 text-sm sm:text-base text-text-inverse/70 leading-relaxed">
        {desc}
      </p>

      <Link
        href={link}
        className="
          inline-flex items-center gap-2
          mt-6
          text-sm sm:text-base
          font-semibold
          text-brand-accent
          transition
          group-hover:gap-3
        "
      >
        {cta}
        <span className="text-lg">→</span>
      </Link>
    </motion.div>
  );
}
