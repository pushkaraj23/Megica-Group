"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import DealershipEnquirySection from "@/components/common/DealershipEnquirySection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const PROPOSAL_PDF = "/downloads/Dealership%20Proposal.pdf";

function DownloadProposalButton({ className = "", variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ";
  const styles =
    variant === "primary"
      ? "bg-brand-accent text-brand-deep shadow-soft hover:opacity-90"
      : "border border-white/30 text-inverse hover:bg-white/10";
  return (
    <a
      href={PROPOSAL_PDF}
      target="_blank"
      rel="noopener noreferrer"
      className={base + styles + " " + className}
    >
      Download Dealership Proposal
    </a>
  );
}

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

            <h1 className="mt-4 font-heading text-white text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight">
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
              <DownloadProposalButton variant="outline" className="rounded-xl px-6 py-3 border-white/30" />
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
            <h2 className="font-heading text-3xl lg:text-4xl uppercase text-brand-deep">
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
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <DownloadProposalButton />
          </motion.div>
        </div>
      </section>

      {/* =========================
          DEALERSHIP PROPOSAL CARD
      ========================== */}
      <section className="py-24 bg-bg-section">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              rounded-3xl
              bg-gradient-to-br from-brand-deep via-brand-deep to-brand-primary
              border border-white/10
              shadow-card
              flex flex-col lg:flex-row lg:items-center lg:justify-between
              gap-10 lg:gap-16
              p-8 sm:p-10 lg:p-14
            "
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-accent/20 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-60 rounded-full bg-brand-accent/10 blur-[60px]" />

            <div className="relative flex-1 max-w-xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/20 text-brand-accent mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625a2.25 2.25 0 00-2.25 2.25v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V4.875A2.25 2.25 0 0018.375 2.5H15.75M12 4.5v12m0 0l-3-3m3 3l3-3" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase text-white tracking-tight">
                Dealership Proposal
              </h2>
              <p className="mt-4 text-bg-light/90 text-base sm:text-lg leading-relaxed">
                Our full proposal outlines territory rights, commercial terms, support structure, and the application process. Download the document to review at your convenience.
              </p>
              <div className="mt-8">
                <a
                  href={PROPOSAL_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-xl bg-brand-accent px-6 py-3.5
                    text-sm font-semibold text-brand-deep
                    shadow-soft
                    hover:opacity-90 transition
                  "
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Dealership Proposal
                </a>
              </div>
            </div>

            {/* Right-side visual: stacked document mockup */}
            <div className="relative hidden lg:flex items-center justify-center flex-shrink-0">
              <div className="relative">
                <div className="h-48 w-36 rounded-lg bg-white/10 backdrop-blur border border-white/20 shadow-xl transform rotate-[-6deg] translate-x-2" />
                <div className="absolute inset-0 h-48 w-36 rounded-lg bg-white/15 backdrop-blur border border-white/25 shadow-2xl transform rotate-[4deg] translate-x-1" />
                <div className="absolute inset-0 h-48 w-36 rounded-lg bg-white/5 border border-white/15 transform rotate-0 flex items-center justify-center">
                  <svg className="h-16 w-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="font-heading text-3xl lg:text-4xl text-center uppercase text-brand-deep mb-16"
          >
            Simple & Transparent Application Process
            <div className="relative mt-20">
              {/* DESKTOP TIMELINE */}
              <div className="hidden lg:block">
                {/* CENTER LINE */}
                <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-brand-accent/30" />

                <div className="relative grid grid-cols-4 gap-8">
                  {[
                    "Submit Dealership Enquiry",
                    "Territory & Eligibility Review",
                    "Commercial Discussion",
                    "Onboarding & Business Launch",
                  ].map((title, i) => (
                    <TimelineStep key={title} index={i} title={title} />
                  ))}
                </div>
              </div>

              {/* MOBILE TIMELINE */}
              <div className="lg:hidden relative pl-10 space-y-10">
                {/* VERTICAL LINE */}
                <div className="absolute left-4 top-0 h-full bottom-0 w-[2px] bg-brand-accent/30" />

                {[
                  "Submit Dealership Enquiry",
                  "Territory & Eligibility Review",
                  "Commercial Discussion",
                  "Onboarding & Business Launch",
                ].map((title, i) => (
                  <MobileTimelineStep key={title} step={i + 1} title={title} />
                ))}
              </div>
            </div>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <DownloadProposalButton />
          </motion.div>
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
            className="font-heading text-white text-3xl lg:text-4xl uppercase"
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
            <DownloadProposalButton variant="outline" className="rounded-xl px-6 py-3" />
            <Link
              href="/products"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
      <DealershipEnquirySection />
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

function TimelineStep({ index, title }) {
  const isTop = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -40 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`relative flex flex-col items-center ${
        isTop ? "pb-20" : "pt-20"
      }`}
    >
      {/* CONTENT CARD */}
      <div className="rounded-2xl bg-bg-main border border-light shadow-soft px-6 py-4 text-center w-full max-w-[220px] hover:shadow-card transition">
        <h3 className="font-heading text-sm font-bold text-brand-deep">
          {title}
        </h3>
      </div>

      {/* NODE */}
      <div className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-brand-accent ring-4 ring-brand-accent/20" />
    </motion.div>
  );
}

function MobileTimelineStep({ step, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: step * 0.05 }}
      className="relative flex gap-6 items-start"
    >
      {/* NODE */}
      <div className="relative z-10 mt-1 flex justify-center text-xl items-center w-9 h-9 rounded-xl bg-brand-accent text-brand-deep font-bold shadow">
        {step}
      </div>

      {/* CONTENT */}
      <div className="rounded-2xl bg-bg-main border border-light shadow-soft px-5 py-4">
        <h3 className="font-heading text-sm font-bold text-brand-deep">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
