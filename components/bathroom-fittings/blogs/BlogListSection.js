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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function BlogsSection() {
  return (
    <section className="relative overflow-hidden bg-(--color-bg-main)">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-soft/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            Insights & Updates
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-(--color-text-secondary)">
            Latest from Our Blog
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-muted">
            Industry insights, product knowledge, and expert perspectives on
            sanitaryware manufacturing, design, and global market trends.
          </p>
        </motion.div>

        {/* =========================
            BLOG GRID – JSON DRIVEN
        ========================== */}
        <motion.div
          className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="
                group relative overflow-hidden
                rounded-2xl bg-white
                border border-border-light
                shadow-soft hover:shadow-card
                transition-shadow duration-300
              "
            >
              <Link
                href={`/sanitaryware/blogs/${blog.slug}`}
                className="block h-full"
              >
                {/* IMAGE */}
                <div className="relative aspect-16/10 overflow-hidden">
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

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="flex h-full flex-col p-8">
                  {/* Gold divider */}
                  <div className="mb-5 h-0.5 w-10 bg-brand-accent" />

                  <h3 className="text-lg font-semibold leading-snug text-(--color-text-secondary) transition-colors group-hover:text-brand-accent">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-text-muted">
                    {blog.excerpt}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted transition-colors group-hover:text-brand-accent">
                    Read Article
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
