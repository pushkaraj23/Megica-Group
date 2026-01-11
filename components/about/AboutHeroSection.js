"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const coreValues = [
  {
    title: "Quality First",
    desc: "From raw material selection to final inspection, quality is never compromised.",
  },
  {
    title: "Integrity & Transparency",
    desc: "Ethical business practices and honest communication build lasting trust.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Every product and process is designed for our partners’ long-term success.",
  },
  {
    title: "Continuous Improvement",
    desc: "We invest in innovation, learning, and process optimization to stay global-ready.",
  },
  {
    title: "Responsible Growth",
    desc: "Sustainable growth that benefits partners, workforce, and communities alike.",
  },
];

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-inverse">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff" // replace with factory / corporate image
          alt="Megica Group Manufacturing"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand-deep/75 to-brand-deep/40" />
      </div>

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-accent/20 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[420px] w-[420px] rounded-full bg-brand-primary/30 blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        {/* TOP GRID */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-9 w-9 rounded-xl bg-brand-accent/25 ring-1 ring-brand-accent/40 grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-accent" />
              </span>
              <p className="text-sm font-semibold tracking-wide text-brand-accent">
                ABOUT MEGICA GROUP OF COMPANIES
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Building Trust in India.
              <br />
              <span className="text-brand-accent">
                Delivering Value to the World.
              </span>
            </h1>

            {/* Intro */}
            <p className="mt-6 max-w-xl text-bg-light text-base sm:text-lg leading-relaxed">
              Megica Group of Companies has built a strong reputation in the
              Indian market by delivering quality-driven products and reliable
              business partnerships. With manufacturing excellence and ethical
              practices at its core, the Group has confidently expanded into
              global markets.
            </p>

            <p className="mt-4 max-w-xl text-bg-light text-base leading-relaxed">
              Backed by a team trained in international regulations, export
              compliance, and global quality standards, Megica Group operates
              with a clear focus on scalability, consistency, and long-term
              collaboration.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="group relative w-fit overflow-hidden rounded-xl bg-brand-accent px-6 py-3 text-sm sm:text-base font-semibold text-brand-deep shadow-card transition hover:scale-[1.03]"
              >
                <span className="relative z-10">Explore Our Products</span>
                <span className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <Link
                href="/contact"
                className="w-fit rounded-xl border border-white/30 px-6 py-3 text-sm sm:text-base font-semibold text-inverse transition hover:bg-white/10"
              >
                Connect With Our Team
              </Link>
            </div>
          </motion.div>

          {/* RIGHT – PROMISE / VISION / MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="grid gap-6"
          >
            <InfoCard
              title="Our Promise"
              text="To deliver export-ready products that meet global expectations in quality, performance, and reliability — every time."
            />

            <InfoCard
              title="Our Vision"
              text="To become a globally trusted manufacturing and export group, recognized for quality, innovation, and long-term partnerships."
            />

            <InfoCard
              title="Our Mission"
              list={[
                "Manufacture products aligned with international standards",
                "Continuously upgrade processes, technology, and skills",
                "Support partners with dependable supply & responsive service",
                "Expand global presence while preserving Indian excellence",
              ]}
            />
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-8">
            Our Core Values
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-lg p-6 shadow-soft transition hover:bg-white/10"
              >
                <h3 className="font-heading text-lg font-bold text-brand-accent">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-bg-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-brand-deep to-transparent" />
    </section>
  );
}

/* ================================
   SUB COMPONENT
================================ */

function InfoCard({ title, text, list }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-lg p-6 shadow-soft">
      <h3 className="font-heading text-lg font-bold text-white">{title}</h3>

      {text && (
        <p className="mt-3 text-sm sm:text-base text-bg-light leading-relaxed">
          {text}
        </p>
      )}

      {list && (
        <ul className="mt-3 space-y-2 text-sm sm:text-base text-bg-light">
          {list.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-brand-accent">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
