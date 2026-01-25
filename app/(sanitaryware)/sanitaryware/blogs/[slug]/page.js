import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";

/* =========================
   REQUIRED FOR DYNAMIC ROUTES
========================= */
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="bg-(--color-bg-main)">
      {/* DARK HERO */}
      <section className="relative bg-(--color-bg-dark) overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-brand-soft)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
            Blog
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-(--font-heading) leading-tight text-(--color-text-inverse)">
            {blog.title}
          </h1>

          <p className="mt-6 text-sm text-(--color-text-inverse)/70">
            {blog.date} • {blog.readTime}
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <section className="relative -mt-20">
        <div className="mx-auto max-w-5xl px-6">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full rounded-2xl shadow-card"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-24 space-y-10">
        {blog.content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="text-2xl font-semibold text-(--color-text-secondary)"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className="leading-relaxed text-text-muted"
              >
                {block.text}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul
                key={index}
                className="list-disc pl-6 space-y-2 text-text-muted"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </section>

      {/* BACK LINK */}
      <section className="pb-24 text-center">
        <a
          href="/sanitaryware/blogs"
          className="text-xs uppercase tracking-widest text-brand-muted hover:text-brand-accent"
        >
          ← Back to Blogs
        </a>
      </section>
    </article>
  );
}
