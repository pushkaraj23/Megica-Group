"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* =========================
   BLOG DATA
========================= */

const blogs = [
  {
    id: 1,
    title: "Choosing the Right Sanitaryware for Modern Projects",
    excerpt:
      "Key considerations for hygiene, durability, and design when selecting sanitaryware for residential and commercial developments.",
    image:
      "https://images.unsplash.com/photo-1625801882109-032ad88edeb3?w=1200&q=80",
    link: "/blogs/choosing-right-sanitaryware",
  },
  {
    id: 2,
    title: "Export-Grade Sanitaryware: What Global Buyers Look For",
    excerpt:
      "Understanding international quality benchmarks, certifications, and packaging expectations in sanitaryware exports.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
    link: "/blogs/export-grade-sanitaryware",
  },
  {
    id: 3,
    title: "Design Trends Shaping the Future of Sanitaryware",
    excerpt:
      "From minimal aesthetics to functional innovation, explore trends influencing modern sanitaryware design.",
    image:
      "https://images.unsplash.com/photo-1596180744691-d19a1b90b53c?w=1200&q=80",
    link: "/blogs/sanitaryware-design-trends",
  },
];

/* =========================
   MOTION VARIANTS (OPTIMISED)
========================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
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
    <section className="relative bg-[var(--color-bg-main)] overflow-hidden">
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
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-muted)]">
            Insights & Updates
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--color-text-secondary)]">
            Latest from Our Blog
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Industry insights, product knowledge, and expert perspectives on
            sanitaryware manufacturing, design, and global market trends.
          </p>
        </motion.div>

        {/* =========================
            BLOG GRID (STABLE)
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
                group
                overflow-hidden
                rounded-[var(--radius-xl)]
                bg-white
                shadow-card
                border border-[var(--color-border-light)]
                will-change-opacity
              "
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
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

                <Link
                  href={blog.link}
                  className="
                    mt-6 inline-flex items-center
                    text-xs uppercase tracking-widest
                    text-[var(--color-brand-accent)]
                    transition-colors
                    hover:text-[var(--color-brand-muted)]
                  "
                >
                  Read Article →
                </Link>
              </div>
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
            href="/blogs"
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
