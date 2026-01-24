"use client";

import { motion } from "framer-motion";

const csrStories = [
  {
    title: "Sustainable Manufacturing",
    description:
      "Optimized production processes, responsible sourcing, and reduced environmental footprint across operations.",
    image:
      "https://images.unsplash.com/photo-1695712551762-4788429015f1",
  },
  {
    title: "Water Conservation",
    description:
      "Water-efficient systems and recycling practices integrated into manufacturing workflows.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  },
  {
    title: "Employee Well-being",
    description:
      "Safe work environments, skill development, and long-term growth opportunities for our people.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    title: "Community Engagement",
    description:
      "Supporting local communities through awareness programs and social development initiatives.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
  },
];

export default function CSRSection() {
  const newLocal = "pointer-events-none absolute inset-0 bg-linear-to-br from-black/10 via-transparent to-white/20";
  return (
    <section className="relative bg-linear-to-b from-brand-accent/80 to-brand-accent/0 overflow-hidden">
      {/* Visual depth layers */}
      <div className={newLocal} />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-105 w-105 rounded-full bg-black/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        {/* =========================
            HEADER
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-black/70">
            Corporate Social Responsibility
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            Responsibility in Action
          </h2>

          <div className="mt-6 h-0.5 w-20 bg-black" />

          <p className="mt-8 text-base sm:text-lg leading-relaxed text-black/80">
            At Megica Sanitaryware, responsibility is embedded into how we
            manufacture, how we support our people, and how we engage with the
            communities around us.
          </p>
        </motion.div>

        {/* =========================
            IMAGE STORY GRID
        ========================== */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          {csrStories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={`
                relative
                flex flex-col
                ${index % 2 !== 0 ? "lg:mt-24" : ""}
              `}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl shadow-card">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-80 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              {/* Floating content card */}
              <div
                className="
                  relative
                  -mt-16
                  mx-6
                  rounded-xl
                  bg-white
                  p-8
                  shadow-card
                  border border-black/10
                "
              >
                <h3 className="text-lg font-semibold text-text-secondary)">
                  {item.title}
                </h3>

                <div className="mt-4 h-0.5 w-10 bg-brand-accent" />

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            CLOSING STATEMENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-32 max-w-4xl"
        >
          <p className="text-sm sm:text-base leading-relaxed text-black/80">
            Our CSR initiatives are not separate programs — they are part of how
            we think, plan, and grow. Responsible manufacturing today ensures a
            stronger, more sustainable future for tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
