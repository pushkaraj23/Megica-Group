"use client";

import { motion } from "framer-motion";

export default function ContactEnquirySection() {
  return (
    <section className="relative bg-(--color-bg-main) overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Badge */}
          <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">
            Get in Touch
          </p>

          {/* Heading */}
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-(--color-text-secondary)">
            Let’s Discuss Your Requirement
          </h2>

          {/* Accent Divider */}
          <div className="mt-5 h-0.5 w-16 bg-brand-accent" />

          {/* Copy */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-muted">
            Whether you are sourcing sanitaryware for residential projects,
            commercial developments, or export distribution, our team is ready
            to assist with product details, pricing, and logistics.
          </p>
          <div
            className="
      relative overflow-hidden
      rounded-xl
      shadow-card
      border border-border-light
      bg-bg-light mt-10 max-sm:mt-6
    "
          >
            {/* Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Megica Sanitaryware support & export enquiry"
              className="h-90 w-full object-cover sm:h-105"
              loading="lazy"
              initial={{ scale: 1.04 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />

            {/* Premium overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

            {/* Floating label */}
            <div className="absolute bottom-5 left-5 right-5">
              <div
                className="
          rounded-lg
          bg-white/10 backdrop-blur-md
          border border-white/15
          p-5
        "
              >
                <p className="text-xs uppercase tracking-[0.3em] text-brand-soft">
                  Premium Support
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Project enquiries, export orders & bulk supply
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Get accurate guidance on products, packing, and dispatch
                  timelines.
                </p>
              </div>
            </div>
          </div>

          {/* Subtle accent glow behind image */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand-accent/10 blur-3xl" />
        </motion.div>

        {/* =========================
            FORM CARD (DARK)
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="
            relative
            rounded-xl
            bg-(--color-brand-primary)
            p-10
            shadow-card
          "
        >
          <form className="grid gap-6">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-accent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-accent"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-accent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Requirement Details
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your requirement"
                className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand-accent"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                mt-4
                inline-flex items-center justify-center
                rounded-lg
                bg-brand-accent
                px-8 py-4
                text-sm font-semibold uppercase tracking-wider
                text-black
                shadow-card
                transition-transform duration-300
                hover:scale-[1.04]
              "
            >
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
