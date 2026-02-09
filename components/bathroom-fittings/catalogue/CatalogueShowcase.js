"use client";

import { motion } from "framer-motion";

const catalogues = [
  {
    title: "Bathrooom Fittings Catalogue",
    subtitle: "Complete Product Range",
    pdf: "/downloads/Megica Bath Fittings.pdf",
  },
  {
    title: "Flush Tanks & Seat Covers",
    subtitle: "Cisterns & Seat Covers Range",
    pdf: "/downloads/Megica Flush tanks and Seat Covers_1.pdf",
  },
];

export default function CatalogueShowcase() {
  return (
    <section className="relative w-full bg-bg-dark">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {catalogues.map((item, index) => (
          <motion.div
            key={index}
            className="group relative h-[85vh] overflow-hidden border-r border-white/10 last:border-r-0"
          >
            {/* PDF PREVIEW */}
            <div className="absolute inset-0 bg-bg-dark">
              <iframe
                src={`${item.pdf}#toolbar=0&view=FitH`}
                title={item.title}
                className="absolute inset-0 h-full w-full border-0"
              />
              {/* GRADIENT OVERLAY */}
              <div
                className="
                  absolute inset-0 pointer-events-none
                  bg-gradient-to-t from-black via-black/50 to-transparent
                "
              />
            </div>

            {/* CONTENT + DOWNLOAD */}
            <div className="relative z-10 h-full flex flex-col justify-end p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                PDF Preview
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-white leading-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-white/70">{item.subtitle}</p>

              {/* Divider */}
              <div className="mt-5 h-0.5 w-14 bg-brand-accent" />

              <a
                href={item.pdf}
                download
                className="
                  mt-4 inline-flex items-center justify-center self-start
                  rounded-lg bg-brand-accent px-4 py-2
                  text-sm font-semibold text-brand-deep
                  transition hover:opacity-90
                "
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
