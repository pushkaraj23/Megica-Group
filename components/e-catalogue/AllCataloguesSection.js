"use client";

import { motion } from "framer-motion";

const ALL_CATALOGUES = [
  {
    title: "Megica Bath Fittings",
    subtitle: "Bathroom Fittings Catalogue",
    pdf: "/downloads/Megica Bath Fittings.pdf",
  },
  {
    title: "Megica Sanitaryware – Volume 1",
    subtitle: "Core Sanitaryware Range",
    pdf: "/downloads/Megica Sanitaryware 1.pdf",
  },
  {
    title: "Megica Sanitaryware – Volume 2",
    subtitle: "Extended Sanitaryware Range",
    pdf: "/downloads/Megica Sanitaryware 2.pdf",
  },
  {
    title: "Flush Tanks & Seat Covers",
    subtitle: "Cisterns & Seat Covers",
    pdf: "/downloads/Megica Flush tanks and Seat Covers_1.pdf",
  },
  {
    title: "Closet & Table Top Basin",
    subtitle: "Closets & Table Top Basin Series",
    pdf: "/downloads/Closet & Table Top Basin.pdf",
  },
  {
    title: "Pedestal & Wall Hung Basin",
    subtitle: "Pedestal & Wall Hung Basin Series",
    pdf: "/downloads/Pedestial & Wall Hung Basin.pdf",
  },
  {
    title: "Dealership Proposal",
    subtitle: "Partnership & Business Overview",
    pdf: "/downloads/Dealership Proposal.pdf",
  },
];

export default function AllCataloguesSection() {
  return (
    <section className="relative bg-bg-section py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            Download Catalogues
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-heading text-text-secondary leading-tight">
            All Product Catalogues & Resources
          </h2>
          <p className="mt-5 text-base text-text-muted leading-relaxed">
            Click any catalogue below to download instantly. No new tabs — files
            download directly to your device.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ALL_CATALOGUES.map((item, index) => (
            <motion.a
              key={index}
              href={item.pdf}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="
                group
                block
                rounded-2xl
                bg-white
                border border-border-light
                shadow-soft
                p-6
                transition-all duration-300
                hover:shadow-card
                hover:border-brand-accent/30
                hover:-translate-y-1
              "
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-text-secondary group-hover:text-brand-primary transition">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{item.subtitle}</p>
                </div>
                <span
                  className="
                    shrink-0 w-10 h-10 rounded-full
                    bg-brand-accent/10
                    flex items-center justify-center
                    text-brand-accent
                    group-hover:bg-brand-accent group-hover:text-brand-deep
                    transition-colors
                  "
                  aria-hidden
                >
                  ↓
                </span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-brand-muted">
                Click to download
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
