"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FullEnquirySection from "@/components/home/FullEnquirySection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function MegicaDealershipPage() {
  return (
    <main className="w-full overflow-x-hidden bg-bg-main">
      {/* =========================
          HERO (IMAGE + OVERLAY)
      ========================== */}
      <section className="relative min-h-[85vh] overflow-hidden text-inverse">
        <Image
          src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6"
          alt="Megica Dealership"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-deep/75" />

        {/* Glow */}
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/25 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <p className="text-sm font-semibold tracking-wide text-brand-accent">
              MEGICA GROUP DEALERSHIP
            </p>

            <h1 className="mt-4 font-heading text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Partner With a Manufacturing & Export Group
              <br />
              <span className="text-brand-accent">
                Built for Long-Term Growth
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-bg-light text-base sm:text-lg leading-relaxed">
              Join a structured, transparent dealership network for sanitaryware
              and bathroom fittings — designed for profitability, protection,
              and sustainable success.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-brand-accent px-6 py-3 font-semibold text-brand-deep shadow-card hover:opacity-90 transition"
              >
                Apply for Dealership
              </Link>
              <Link
                href="/products"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                View Product Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          BENEFITS (IMAGE CARDS)
      ========================== */}
      <section className="py-24 bg-bg-main">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-brand-deep">
              Why Megica Group Dealership?
            </h2>
            <p className="mt-4 text-muted text-lg">
              A partnership model built on protection, profitability, and
              professional support.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitImageCard
              title="Exclusive Territory Rights"
              desc="No internal competition. You own and grow your market."
              img="https://images.unsplash.com/photo-1677840519383-69190d32f30a"
            />
            <BenefitImageCard
              title="Profit-Driven Pricing"
              desc="Healthy margins with transparent commercial policies."
              img="https://images.unsplash.com/photo-1633158829875-e5316a358c6f"
            />
            <BenefitImageCard
              title="Branding & Marketing Support"
              desc="Catalogues, creatives & visibility support."
              img="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d"
            />
            <BenefitImageCard
              title="Dedicated Account Manager"
              desc="One point of contact. Clear communication."
              img="https://images.unsplash.com/photo-1590402494693-bd0499aefe00"
            />
            <BenefitImageCard
              title="Fast Order Fulfillment"
              desc="Manufacturing-backed dispatch reliability."
              img="https://images.unsplash.com/photo-1507235071172-438ca6950a8e"
            />
            <BenefitImageCard
              title="No Advance Deposit"
              desc="Simple onboarding without financial pressure."
              img="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf"
            />
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS (VISUAL STEPS)
      ========================== */}
      <section className="bg-bg-section py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-4xl font-extrabold text-brand-deep mb-16"
          >
            Simple & Transparent Application Process
          </motion.h2>

          <div className="relative">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Submit Dealership Enquiry",
                "Territory & Eligibility Review",
                "Commercial Discussion",
                "Onboarding & Business Launch",
              ].map((step, i) => (
                <div key={step} className="relative">
                  {/* STEP CARD */}
                  <VisualStep step={i + 1} title={step} />

                  {/* ARROW – DESKTOP */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-7 -translate-y-1/2 items-center">
                      <span className="h-[2px] w-8 bg-brand-accent/60" />
                      <span className="ml-1 text-brand-accent text-lg">➜</span>
                    </div>
                  )}

                  {/* ARROW – MOBILE */}
                  {i < 3 && (
                    <div className="flex lg:hidden justify-center mt-4">
                      <span className="text-brand-accent text-xl">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="relative bg-brand-deep text-inverse py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-heading text-white text-3xl lg:text-4xl font-extrabold"
          >
            Ready to Build a Long-Term Business?
          </motion.h2>

          <p className="mt-4 text-bg-light text-lg">
            Partner with a manufacturing-backed brand built for trust,
            consistency, and growth.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-xl bg-brand-accent px-6 py-3 font-semibold text-brand-deep hover:opacity-90 transition"
            >
              Send Dealership Enquiry
            </Link>
            <Link
              href="/products"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
      <FullEnquirySection />
    </main>
  );
}

/* =========================
   SUB COMPONENTS
========================= */

function BenefitImageCard({ title, desc, img }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl shadow-card"
    >
      <Image src={img} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-brand-deep/70 transition group-hover:bg-brand-deep/80" />

      <div className="relative p-6 h-full flex flex-col justify-end">
        <h3 className="font-heading text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-bg-light">{desc}</p>
      </div>
    </motion.div>
  );
}

function VisualStep({ step, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: step * 0.05 }}
      className="
        group relative
        rounded-3xl
        bg-bg-main
        border border-light
        shadow-soft
        p-6
        text-center
        transition
        hover:shadow-card
      "
    >
      {/* STEP CIRCLE */}
      <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-brand-accent text-brand-deep font-extrabold grid place-items-center shadow">
        {step}
      </div>

      <h3 className="font-heading text-base font-bold text-brand-deep">
        {title}
      </h3>
    </motion.div>
  );
}
