export default function BlogHero() {
  return (
    <section className="relative w-full bg-bg-dark pt-10 overflow-hidden">
      {/* Soft glow accent */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-soft/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        {/* Accent line */}
        <div className="mx-auto mb-6 h-0.5 w-16 bg-brand-accent" />

        {/* Heading */}
        <h1 className="mx-auto max-w-3xl font-(--font-heading) text-4xl leading-tight text-text-inverse md:text-5xl">
          Insights, Ideas &
          <span className="text-brand-accent"> Digital Thinking</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-inverse/70">
          Deep dives into product thinking, software architecture, business
          growth, and the systems that power modern companies.
        </p>

        {/* Breadcrumb */}
        <div className="mt-8 flex justify-center gap-3 text-sm text-text-inverse/60">
          <span>Home</span>
          <span>•</span>
          <span className="text-brand-muted">Blog</span>
        </div>
      </div>
    </section>
  );
}
