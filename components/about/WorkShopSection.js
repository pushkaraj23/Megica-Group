"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const capabilities = [
  "Modern manufacturing & finishing equipment",
  "Precision tooling & testing systems",
  "Dedicated quality inspection zones",
  "Efficient material handling & packaging units",
];

const capacities = [
  "Bulk export consignments",
  "Continuous distributor supply",
  "Large infrastructure & commercial projects",
  "Custom & OEM production requirements",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1623652554515-91c833e3080e",
  "https://images.unsplash.com/photo-1598520106830-8c45c2035460",
  "https://images.unsplash.com/photo-1426927308491-6380b6a9936f",
  "https://images.unsplash.com/photo-1558008258-3256797b43f3",
  "https://images.unsplash.com/photo-1598302936625-6075fbd98dd7",
  "https://images.unsplash.com/photo-1564182842834-681b7be6de4b",
];

export default function MegicaWorkshopSection() {
  return (
    <section className="relative overflow-hidden bg-bg-section">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-primary">
            MEGICA WORKSHOP & MANUFACTURING FACILITY
          </p>

          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-brand-deep leading-tight">
            Advanced Manufacturing Infrastructure{" "}
            <span className="text-brand-primary">Built for Scale</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            Megica Group operates a modern manufacturing setup equipped with
            advanced machinery, streamlined production lines, and strict quality
            control processes designed to serve both domestic and international
            markets.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT – TEXT BLOCKS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            {/* Capabilities */}
            <InfoBlock
              title="Advanced Equipment & Production Capabilities"
              items={capabilities}
              desc="Our workshop infrastructure ensures consistent quality, precision, and durability across high-volume production without compromise."
            />

            {/* Capacity */}
            <InfoBlock
              title="Capacity to Fulfil Large & Repeat Orders"
              items={capacities}
              desc="Optimized production planning and inventory systems ensure on-time delivery even for high-quantity or recurring orders."
            />

            {/* Lifecycle */}
            <div className="rounded-2xl bg-bg-main border border-light shadow-soft p-6">
              <h3 className="font-heading text-lg font-bold text-brand-deep">
                From Manufacturing to Market
              </h3>

              <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
                <li>• Factory production with standardized processes</li>
                <li>• Domestic supply for Indian distributors & projects</li>
                <li>• Export packaging, documentation & logistics</li>
                <li>
                  • Installed applications across residential & commercial sites
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT – GALLERY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-2xl shadow-card ${
                  idx === 0 ? "col-span-2 h-56" : "h-40"
                }`}
              >
                <Image
                  src={src}
                  alt="Megica Manufacturing Facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 rounded-3xl bg-brand-deep text-inverse shadow-card overflow-hidden"
        >
          <div className="relative p-8 sm:p-10">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-accent/25 blur-3xl" />

            <h3 className="font-heading text-2xl sm:text-3xl uppercase text-white">
              Explore Our Manufacturing Capabilities
            </h3>

            <p className="mt-3 max-w-2xl text-bg-light text-sm sm:text-base">
              Download our catalogue or connect with our team to discuss bulk
              supply, private labeling, or custom manufacturing requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/downloads/Megica_Group_Profile.pdf"
                download
                className="rounded-lg bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90 inline-block"
              >
                Download Megica Group Profile
              </a>

              <a
                href="/downloads/Megica Sanitaryware 1.pdf"
                download
                className="rounded-lg bg-bg-main/10 backdrop-blur border border-white/30 px-5 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10 inline-block"
              >
                Download Sanitaryware Catalogue
              </a>

              <a
                href="/downloads/Megica Bath Fittings.pdf"
                download
                className="rounded-lg bg-bg-main/10 backdrop-blur border border-white/30 px-5 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10 inline-block"
              >
                Download Bath Fittings Catalogue
              </a>

              <Link
                href="/contact"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-inverse transition hover:bg-white/10"
              >
                Send Enquiry
              </Link>
            </div>
          </div>

          <div className="h-1 bg-brand-accent" />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   SUB COMPONENT
========================= */

function InfoBlock({ title, desc, items }) {
  return (
    <div className="rounded-2xl bg-bg-main border border-light shadow-soft p-6">
      <h3 className="font-heading text-lg font-bold text-brand-deep">
        {title}
      </h3>

      {desc && (
        <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
          {desc}
        </p>
      )}

      <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-brand-accent">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
