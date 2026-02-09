"use client";

import { motion } from "framer-motion";

/* =========================
   CERTIFICATE DATA
========================= */

const certificates = [
  { name: "ISO 9001:2015", image: "/certificates/1.png" },
  { name: "ISO 14001", image: "/certificates/2.png" },
  { name: "MQA Certified", image: "/certificates/mqa.jpeg" },
  { name: "UKAF Certified", image: "/certificates/ukaf.jpeg" },
  { name: "ECGC Registered", image: "/certificates/ecgc.jpeg" },
];

/* Duplicate list for seamless loop */
const loopItems = [...certificates, ...certificates];

export default function CertificatesStrip() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px- pt-10">
        {/* LABEL */}
        <p className="mb-6 text-center text-xs uppercase tracking-[0.35em] text-brand-muted">
          Certifications & Compliance
        </p>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-14 max-sm:gap-5 pb-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopItems.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  min-w-[160px]
                  h-20
                  rounded-[var(--radius-lg)]
                  bg-[var(--color-bg-light)]
                  border border-[var(--color-border-light)]
                  shadow-soft
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-auto opacity-80"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
