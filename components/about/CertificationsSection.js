"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "ISO 9001:2015 – Quality Management",
    logo: "/certificates/1.png",
  },
  {
    title: "ISO 14001 – Environmental Management",
    logo: "/certificates/2.png",
  },
  {
    title: "Product Performance & Safety",
    logo: "/certificates/3.png",
  },
  {
    title: "Global Trade & Export Compliance",
    logo: "/certificates/4.png",
  },
  {
    title: "MQA Certification",
    logo: "/certificates/mqa.jpeg",
  },
  {
    title: "UKAF Certification",
    logo: "/certificates/ukaf.jpeg",
  },
  {
    title: "ECGC Registration",
    logo: "/certificates/ecgc.jpeg",
  },
  {
    title: "KAB Accreditation",
    logo: "/certificates/kab_logo.jpg",
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-inverse">
      {/* BACKGROUND DEPTH */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-130 w-130 rounded-full bg-brand-accent/20 blur-[160px]" />
        <div className="absolute -bottom-30 -left-30 h-105 w-105 rounded-full bg-brand-primary/30 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-accent">
            CERTIFICATIONS & COMPLIANCE
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight text-white">
            Certified for Quality, Safety &{" "}
            <span className="text-brand-accent">Global Trade</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-bg-light leading-relaxed">
            Megica Group of Companies follows internationally recognized
            quality, manufacturing, and compliance standards to ensure
            dependable performance and professional operations across global
            markets.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-20 grid gap-14 lg:grid-cols-12 items-start">
          {/* LEFT – COMPLIANCE PILLARS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-8"
          >
            <ComplianceBlock
              index="01"
              title="Commitment to International Standards"
              points={[
                "Quality management systems",
                "Manufacturing process control",
                "Product safety & performance",
                "Environmental responsibility",
                "Export & trade compliance",
              ]}
            />

            <ComplianceBlock
              index="02"
              title="Quality-Driven Manufacturing Framework"
              points={[
                "Consistent production quality",
                "Traceable manufacturing processes",
                "Controlled raw material usage",
                "Structured inspection & testing",
              ]}
            />

            <ComplianceBlock
              index="03"
              title="Trusted by Global Buyers"
              points={[
                "Meets international regulatory requirements",
                "Reduces procurement & approval risks",
                "Ensures long-term product reliability",
                "Builds confidence with end customers",
              ]}
            />
          </motion.div>

          {/* RIGHT – CERTIFICATION WALL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-card p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-8">
                Certification Highlights
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="group flex items-center justify-center rounded-2xl bg-bg-main/5 border border-white/15 p-6 transition hover:bg-bg-main/10"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      className="h-14 opacity-70 transition duration-300 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-bg-light text-center leading-relaxed">
                Specific certificates, test reports, and compliance documents
                are shared upon request based on market or project requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 rounded-3xl bg-bg-main/5 backdrop-blur-xl border border-white/15 shadow-card p-8 sm:p-10"
        >
          <h3 className="font-heading text-2xl sm:text-3xl uppercase text-white">
            Need Certification or Compliance Documents?
          </h3>

          <p className="mt-3 max-w-2xl text-bg-light text-sm sm:text-base">
            Our compliance team can share relevant certificates, audit records,
            and test documentation based on your market or project needs.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90"
            >
              Send Enquiry
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10"
            >
              Request Compliance Details
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   SUB COMPONENT
========================= */

function ComplianceBlock({ index, title, points }) {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-soft p-6">
      <span className="absolute -top-4 -left-4 h-10 w-10 rounded-xl bg-brand-accent text-brand-deep font-bold grid place-items-center shadow-lg">
        {index}
      </span>

      <h3 className="font-heading text-lg font-bold text-white mt-2">
        {title}
      </h3>

      <ul className="mt-4 space-y-2 text-sm sm:text-base text-bg-light">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-brand-accent">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
