"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchBlogById, formatBlogDate } from "@/data/blogsFirebase";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const data = await fetchBlogById(slug);
        if (!cancelled) setBlog(data);
      } catch (err) {
        console.error("Fetch blog error", err);
        if (!cancelled) setError("Unable to load this blog.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-main pt-32 flex items-center justify-center">
        <p className="text-text-muted">Loading…</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="pt-32 text-center text-lg text-text-muted">
        {error || "Blog not found"}
        <div className="mt-4">
          <Link
            href="/bathroom-fittings/blogs"
            className="text-brand-accent hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const dateLabel = formatBlogDate(blog.createdAt);

  return (
    <article className="bg-bg-main">
      <section className="relative bg-bg-dark overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-28 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            Blog
          </p>
          <h1 className="mt-6 font-(--font-heading) text-4xl md:text-5xl leading-tight text-(--color-text-inverse)">
            {blog.title}
          </h1>
          {blog.subtitle && (
            <p className="mt-3 text-lg text-(--color-text-inverse)/80 font-thin italic">
              {blog.subtitle}
            </p>
          )}
          <div className="mt-6 flex justify-center gap-4 text-sm text-(--color-text-inverse)/70 flex-wrap">
            <span>{dateLabel}</span>
            {blog.author && (
              <>
                <span>•</span>
                <span>{blog.author}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {blog.mainImageUrl && (
        <section className="relative -mt-18">
          <div className="mx-auto max-w-5xl px-6">
            <img
              src={blog.mainImageUrl}
              alt={blog.title}
              className="w-full rounded-2xl shadow-card"
            />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div
          className="blog-content max-w-none space-y-4 text-[var(--color-text-muted)] leading-relaxed
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[var(--color-text-secondary)]
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[var(--color-text-secondary)]
            [&_p]:leading-relaxed [&_a]:text-brand-accent [&_a]:underline [&_img]:rounded-lg [&_img]:max-w-full [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>

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
