"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const csrItems = [
  {
    title: "Education & Skill Development",
    desc: "Supporting access to education, vocational training, and skill-building initiatives that empower long-term growth.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  },
  {
    title: "Skilled Workforce Support",
    desc: "Strengthening manufacturing ecosystems through workforce readiness and industry-aligned training.",
    image: "https://images.unsplash.com/photo-1609149401064-58b8e21e0e77",
  },
  {
    title: "Environmental Responsibility",
    desc: "Encouraging efficient resource usage, waste reduction, and eco-conscious manufacturing practices.",
    image: "https://plus.unsplash.com/premium_photo-1681965550198-c1c039421905",
  },
  {
    title: "Community Engagement",
    desc: "Participating in social welfare and community-driven initiatives with responsible business intent.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
];

export default function CSRSection() {
  return (
    <section className="relative overflow-hidden bg-bg-section">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-130 w-130 rounded-full bg-brand-accent/15 blur-[160px]" />
        <div className="absolute -bottom-35 -right-35 h-130 w-130 rounded-full bg-bg-light blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-primary">
            CORPORATE SOCIAL RESPONSIBILITY
          </p>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-brand-deep leading-tight">
            Responsible Growth{" "}
            <span className="text-brand-primary">Beyond Business</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            At Megica Group of Companies, we believe sustainable growth must
            create value beyond business — for people, communities, and the
            environment we operate in.
          </p>
        </motion.div>

        {/* IMAGE-INTENSIVE CSR GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {csrItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className="group relative h-105 rounded-3xl overflow-hidden shadow-card"
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-deep/85 via-brand-deep/40 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="font-heading text-lg sm:text-xl uppercase text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-bg-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* ACCENT STRIP */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-accent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* CSR IN ACTION – VISUAL STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12 rounded-3xl bg-bg-main border border-light shadow-soft overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT – TEXT */}
            <div className="p-8 sm:p-12">
              <h3 className="font-heading text-2xl uppercase text-brand-deep">
                CSR in Action
              </h3>

              <p className="mt-4 max-w-xl text-muted text-sm sm:text-base leading-relaxed">
                Our CSR initiatives include education and training support,
                community engagement programs, and environmentally responsible
                practices. These efforts reflect our belief that businesses
                should contribute positively to society.
              </p>

              <p className="mt-4 text-xs text-muted">
                Visual documentation and CSR activity reports can be shared upon
                request.
              </p>
            </div>

            {/* RIGHT – PLACEHOLDER VISUAL */}
            <div className="relative h-65 sm:h-80 lg:h-auto">
              <Image
                src="https://plus.unsplash.com/premium_photo-1726866193491-5a3c34a0d80e"
                alt="Megica CSR Initiatives"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-bg-main/80 to-transparent lg:from-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
