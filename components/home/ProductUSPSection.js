"use client";

import { motion } from "framer-motion";

const uspPoints = [
  {
    title: "Export-Ready Quality",
    desc: "Manufactured to meet international quality, safety, and compliance standards.",
  },
  {
    title: "Engineered for Long Life",
    desc: "High-grade materials, precision finishing, and durability tested for long-term use.",
  },
  {
    title: "Bulk & Project Supply",
    desc: "Scalable production capacity for large orders and long-term supply contracts.",
  },
  {
    title: "OEM & Private Label Support",
    desc: "Custom branding, packaging, and product customization for global partners.",
  },
  {
    title: "Reliable Global Delivery",
    desc: "Strong logistics planning ensuring timely and consistent international shipments.",
  },
];

export default function ProductUSPSection() {
  return (
    <section className="relative bg-bg-dark overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 top-28 h-130 w-130 rounded-full bg-brand-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-28 h-130 w-130 rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* =====================
              VIDEO / ANIMATION
          ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <p className="text-sm font-semibold tracking-wide text-brand-accent">
              PRODUCT USP
            </p>

            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-inverse leading-tight">
              Designed for Global Markets.
              <br />
              Built to Perform.
            </h2>

            <p className="mt-4 text-bg-light text-base sm:text-lg leading-relaxed max-w-xl">
              Every Megica product is designed with a clear focus on durability,
              aesthetics, and export-ready performance — delivering long-term
              value for distributors, dealers, and project partners.
            </p>
            {/* Replace video src with your actual product/factory video */}
            <div className="relative rounded-3xl overflow-hidden shadow-card mt-6 border border-white/10">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/videos/megica-product-showcase.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
            </div>
            {/* Floating Label */}
            <div className="absolute bottom-5 left-5 rounded-full bg-bg-main/90 backdrop-blur px-4 py-1.5 text-xs font-semibold text-brand-primary shadow-soft">
              Product & Manufacturing Excellence
            </div>
          </motion.div>

          {/* =====================
              USP CONTENT
          ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {/* USP LIST */}
            <div className="space-y-4">
              {uspPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 rounded-xl bg-white/5 backdrop-blur border items-center border-white/10 p-4"
                >
                  {/* Accent Dot */}
                  <div className="mt-1 h-3 w-3 rounded-full bg-brand-accent flex-shrink-0" />

                  <div>
                    <h4 className="font-semibold text-text-inverse">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-bg-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
