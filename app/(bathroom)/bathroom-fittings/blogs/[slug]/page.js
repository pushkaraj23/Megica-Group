"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import blogs from "@/data/blogs.json";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-32 text-center text-lg text-text-muted">
        Blog not found
      </div>
    );
  }

  return (
    <article className="bg-bg-main">
      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative bg-bg-dark overflow-hidden">
        {/* Soft glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-28 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            Blog
          </p>

          <h1 className="mt-6 font-(--font-heading) text-4xl md:text-5xl leading-tight text-(--color-text-inverse)">
            {blog.title}
          </h1>

          <div className="mt-6 flex justify-center gap-4 text-sm text-(--color-text-inverse)/70">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* =========================
          COVER IMAGE
      ========================== */}
      {blog.coverImage && (
        <section className="relative -mt-18">
          <div className="mx-auto max-w-5xl px-6">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full rounded-2xl shadow-card"
            />
          </div>
        </section>
      )}

      {/* =========================
          ARTICLE CONTENT
      ========================== */}
      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="space-y-10">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="mt-14 text-2xl font-semibold tracking-tight text-[var(--color-text-secondary)]"
                  >
                    {block.text}
                  </h2>
                );

              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-[var(--color-text-muted)]"
                  >
                    {block.text}
                  </p>
                );

              case "list":
                return (
                  <ul
                    key={index}
                    className="list-disc space-y-2 pl-6 text-[var(--color-text-muted)]"
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </div>
      </section>

      {/* =========================
          FOOTER NAV
      ========================== */}
      <section className="pb-28 text-center">
        <Link
          href="/bathroom-fittings/blogs"
          className="
            inline-flex items-center gap-2
            text-xs uppercase tracking-widest
            text-[var(--color-brand-muted)]
            transition-colors
            hover:text-[var(--color-brand-accent)]
          "
        >
          ← Back to Blogs
        </Link>
      </section>
    </article>
  );
}
