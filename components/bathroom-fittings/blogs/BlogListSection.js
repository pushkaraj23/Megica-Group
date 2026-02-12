"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fetchBlogsByWebsite } from "@/data/blogsFirebase";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";

export default function BlogListSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const list = await fetchBlogsByWebsite("bathroom-fittings");
        if (!cancelled) setBlogs(list);
      } catch (err) {
        console.error("Fetch blogs error", err);
        if (!cancelled) setError("Unable to load blogs.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-(--color-bg-main)">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-soft/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-brand-muted">
            Insights & Updates
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl uppercase tracking-tight text-(--color-text-secondary)">
            Latest from Our Blog
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-muted">
            Industry insights, product knowledge, and expert perspectives on
            bathroom fittings manufacturing, design, and global market trends.
          </p>
        </motion.div>

        {error && (
          <p className="mt-8 text-sm text-red-600">{error}</p>
        )}

        {loading ? (
          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-bg-light border border-border-light shadow-soft h-80 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {blogs.length === 0 ? (
              <p className="col-span-full text-center text-text-muted py-12">
                No blog posts yet.
              </p>
            ) : (
              blogs.map((blog) => (
                <motion.article
                  key={blog.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="
                    group relative
                    overflow-hidden
                    rounded-2xl
                    bg-bg-light
                    border border-border-light
                    shadow-soft
                    transition-all duration-300
                    hover:shadow-card
                  "
                >
                  <Link
                    href={`/bathroom-fittings/blogs/${blog.slug}`}
                    className="flex h-full flex-col"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.listingImage || PLACEHOLDER_IMAGE}
                        alt={blog.title}
                        loading="lazy"
                        className="
                          w-full h-56 object-cover
                          transition-transform duration-700 ease-out
                          group-hover:scale-110
                        "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                    </div>
                    <div className="flex flex-col p-8 grow">
                      <div className="mb-5 h-0.5 w-10 bg-brand-accent" />
                      <h3 className="text-lg font-semibold leading-snug text-(--color-text-secondary) transition-colors group-hover:text-brand-accent">
                        {blog.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-text-muted line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex-grow" />
                      <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted transition-all group-hover:text-brand-accent">
                        Read Article
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
