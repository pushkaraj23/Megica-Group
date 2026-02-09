export default function BlogHero() {
  return (
    <section className="relative w-full bg-bg-dark pt-10 overflow-hidden">
      {/* Soft glow accent */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-soft/15 blur-3xl" />

      {/* Subtle bottom fade for separation */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-bg-dark to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        {/* Eyebrow / Accent */}
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-brand-muted">
          Blog & Insights
        </p>

        {/* Heading */}
        <h1 className="mx-auto max-w-3xl font-(--font-heading) text-4xl md:text-5xl lg:text-6xl uppercase leading-tight text-text-inverse">
          Insights, Ideas &
          <span className="text-brand-accent"> Digital Thinking</span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-6 h-0.5 w-16 bg-brand-accent" />

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-text-inverse/70">
          Deep dives into product thinking, software architecture, business
          growth, and the systems that power modern companies.
        </p>

        {/* Breadcrumb */}
        <div className="mt-10 flex justify-center items-center gap-3 text-sm text-text-inverse/60">
          <span className="hover:text-text-inverse transition-colors">
            Home
          </span>
          <span className="opacity-40">/</span>
          <span className="text-brand-muted tracking-wide">Blog</span>
        </div>
      </div>
    </section>
  );
}
