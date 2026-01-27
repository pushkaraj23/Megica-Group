"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import blogs from "@/data/blogs.json";

/* =========================
   MOTION VARIANTS
========================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function BlogsSection() {
  return (
    <section className="relative bg-(--color-bg-main) overflow-hidden">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
            Insights & Updates
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-(--color-text-secondary)">
            Latest from Our Blog
          </h2>

          <p className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed">
            Expert insights, product guides, and design perspectives on bathroom
            fittings, water control systems, finishes, and modern bathroom
            solutions.
          </p>
        </motion.div>

        {/* =========================
            BLOG GRID (JSON DRIVEN)
        ========================== */}
        <motion.div
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              className="
                group overflow-hidden
                rounded-xl
                bg-white
                shadow-card
                border border-border-light
                will-change-opacity
              "
            >
              <Link
                href={`/bathroom-fittings/blogs/${blog.slug}`}
                className="block h-full"
              >
                {/* IMAGE */}
                <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                  <img
                    src={blog.listingImage}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-lg font-semibold leading-snug text-[var(--color-text-secondary)]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {blog.excerpt}
                  </p>

                  <span
                    className="
                      mt-6 inline-flex items-center
                      text-xs uppercase tracking-widest
                      text-[var(--color-brand-accent)]
                      transition-colors
                      group-hover:text-[var(--color-brand-muted)]
                    "
                  >
                    Read Article →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* =========================
            VIEW ALL CTA
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <Link
            href="/bathroom-fittings/blogs"
            className="
              inline-flex items-center justify-center
              rounded-[var(--radius-lg)]
              border border-[var(--color-border-light)]
              bg-white
              px-10 py-4
              text-sm font-semibold uppercase tracking-wider
              text-[var(--color-text-secondary)]
              shadow-soft
              transition-all duration-300
              hover:border-[var(--color-brand-accent)]
              hover:text-[var(--color-brand-accent)]
            "
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
