"use client";

import { motion } from "framer-motion";

export default function FullEnquirySection() {
  return (
    <section className="relative bg-bg-main">
      {/* Soft transition glow before dark footer */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-section to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2 items-start">
          {/* =====================
              LEFT CONTENT
          ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold tracking-wide text-brand-primary">
              ENQUIRY FORM
            </p>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep leading-tight">
              Let’s Discuss Your
              <br />
              Product Requirements
            </h2>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              Whether you are looking for bulk sourcing, project supply, or
              private labeling, our team is ready to understand your
              requirements and guide you with the right solutions.
            </p>

            {/* Trust points */}
            <div className="mt-8 space-y-3 text-sm text-brand-deep">
              <p>✔ Export-ready products & documentation</p>
              <p>✔ OEM & private label support</p>
              <p>✔ Dedicated business communication</p>
            </div>
          </motion.div>

          {/* =====================
              FORM
          ===================== */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative rounded-3xl bg-brand-deep border border-white/10 shadow-card p-6 sm:p-8 overflow-hidden "
          >
            {/* Soft Accent Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-text-inverse">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder:text-white/50 backdrop-blur transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-text-inverse">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder:text-white/50 backdrop-blur transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-text-inverse">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder:text-white/50 backdrop-blur transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-text-inverse">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 / Country Code"
                  className=" mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder:text-white/50 backdrop-blur transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 "
                />
              </div>

              {/* Product Interest */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-text-inverse">
                  Product Interest
                </label>
                <select className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse backdrop-blur transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 ">
                  <option className="text-brand-deep">Sanitaryware</option>
                  <option className="text-brand-deep">Bathroom Fittings</option>
                  <option className="text-brand-deep">Both</option>
                  <option className="text-brand-deep">
                    OEM / Private Label
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-text-inverse">
                  Your Requirements
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about quantity, market, customization, or project details..."
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder:text-white/50 backdrop-blur transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 "
                />
              </div>
            </div>

            {/* Submit */}
            <div className="relative mt-7">
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-accent px-6 py-3 text-sm sm:text-base font-semibold text-brand-deep shadow-soft transition hover:scale-[1.02] active:scale-[0.98] "
              >
                Send Enquiry
              </button>
            </div>

            {/* Note */}
            <p className="mt-4 text-xs text-bg-light text-center">
              Our export team typically responds within 24 business hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
