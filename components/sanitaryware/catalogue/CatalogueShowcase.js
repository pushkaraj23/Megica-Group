"use client";

import { motion } from "framer-motion";

const catalogues = [
  {
    title: "Sanitaryware Catalogue",
    subtitle: "Complete Product Range",
    pdf: "/downloads/sanitaryware-catalogue.pdf",
    page1: "/catalogues/sanitaryware-p1.jpg",
    page2: "/catalogues/sanitaryware-p2.jpg",
  },
  {
    title: "Export Catalogue",
    subtitle: "Global Supply Range",
    pdf: "/downloads/export-catalogue.pdf",
    page1: "/catalogues/export-p1.jpg",
    page2: "/catalogues/export-p2.jpg",
  },
  {
    title: "Company Profile",
    subtitle: "Manufacturing & Capabilities",
    pdf: "/downloads/company-profile.pdf",
    page1: "/catalogues/company-p1.jpg",
    page2: "/catalogues/company-p2.jpg",
  },
];

export default function CatalogueShowcase() {
  return (
    <section className="relative w-full bg-bg-dark">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {catalogues.map((item, index) => (
          <a
            key={index}
            href={item.pdf}
            download
            className="group relative h-[85vh] overflow-hidden border-r border-white/10 last:border-r-0"
          >
            {/* =========================
                IMAGE STACK
            ========================== */}
            <div className="absolute inset-0">
              {/* Page 1 */}
              <motion.img
                src={item.page1}
                alt={item.title}
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-all duration-500 ease-out
                  group-hover:brightness-50 group-hover:scale-[0.9]
                "
              />

              {/* Page 2 */}
              <motion.img
                src={item.page2}
                alt={`${item.title} preview`}
                className="
                  absolute inset-0 h-full w-full object-cover
                  opacity-100 scale-[1.05]
                  transition-all duration-500 ease-out
                  translate-x-[110%] group-hover:translate-x-0
                "
              />

              {/* GRADIENT OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black via-black/60 to-transparent
                "
              />
            </div>

            {/* =========================
                CONTENT
            ========================== */}
            <div className="relative z-10 h-full flex flex-col justify-end p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
                PDF Download
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-white leading-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-white/70">{item.subtitle}</p>

              {/* Divider */}
              <div className="mt-5 h-0.5 w-14 bg-brand-accent" />

              {/* Hover hint */}
              <p className="mt-4 text-xs uppercase tracking-widest text-white/60">
                Hover to Preview • Click to Download
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
