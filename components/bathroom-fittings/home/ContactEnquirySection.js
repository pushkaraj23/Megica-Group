"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/data/firebase";
import { COUNTRY_CODES } from "@/data/countryCodes";
import SuccessPopup from "@/components/common/SuccessPopup";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  countryCode: "+91",
  phone: "",
  message: "",
};

export default function ContactEnquirySection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "bathroom-fittings"), {
        ...formData,
        createdAt: serverTimestamp(),
        source: "Bathroom Fittings Enquiry",
      });
      setShowPopup(true);
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("Bathroom fittings enquiry error:", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="relative bg-(--color-bg-main) overflow-hidden">
      <SuccessPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        duration={4000}
        message="Thank you for your enquiry. Our bathroom fittings team will get back to you within 24–48 hours."
      />
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
          <h2 className="mt-2 text-3xl sm:text-4xl uppercase tracking-tight text-(--color-text-secondary)">
            Let’s Discuss Your Fitting Requirements
          </h2>

          {/* Accent Divider */}
          <div className="mt-5 h-0.5 w-16 bg-brand-accent" />

          {/* Copy */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-muted">
            Whether you are selecting bathroom fittings for residential spaces,
            large-scale commercial projects, or export distribution, our team is
            here to assist with specifications, finishes, pricing, and delivery
            timelines.
          </p>

          {/* Image Card */}
          <div
            className="
              relative overflow-hidden
              rounded-xl
              shadow-card
              border border-border-light
              bg-bg-light mt-10 max-sm:mt-6
            "
          >
            <motion.img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="Megica Bathroom Fittings project consultation and support"
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
                  Expert Assistance
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Fittings selection, bulk orders & export enquiries
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Get guidance on finishes, compatibility, packaging, and
                  dispatch schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Subtle accent glow */}
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
          <form className="grid gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>

            {/* Phone + Country Code */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Contact Number
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full sm:w-44 shrink-0 rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 [&>option]:text-black"
                >
                  {COUNTRY_CODES.map(({ name, code }) => (
                    <option key={code + name} value={code}>
                      {name} ({code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="flex-1 min-w-0 rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/70 mb-2">
                Requirement Details
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your bathroom fittings requirement"
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 resize-y min-h-[100px]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full inline-flex items-center justify-center rounded-lg bg-brand-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black shadow-card transition hover:brightness-110 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
