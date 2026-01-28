"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/data/firebase";
import SuccessPopup from "./SuccessPopup";

export default function DealershipEnquirySection() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    location: "",
    interest: "Sanitaryware Dealership",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "dealershipEnquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
        source: "Dealership Enquiry",
      });

      setShowPopup(true);

      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        location: "",
        interest: "Sanitaryware Dealership",
      });
    } catch (error) {
      console.error("Dealership enquiry error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative bg-bg-section py-24 overflow-hidden">
      {/* Soft accent */}
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />

      {/* SUCCESS POPUP */}
      <SuccessPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        duration={4000}
        message="Thank you for your interest in Megica Dealership. Our team will contact you within 24–48 hours."
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-muted">
            Dealership Opportunity
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-heading text-text-secondary leading-tight">
            Partner with Megica
          </h2>

          <p className="mt-5 text-base sm:text-lg text-text-muted leading-relaxed">
            We are expanding our dealer and distributor network across domestic
            and international markets. Share your details and our team will
            connect with you to explore partnership opportunities.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            relative
            rounded-3xl
            bg-white/80
            backdrop-blur-xl
            border border-border-light
            shadow-soft
            p-6 sm:p-8
          "
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
            />

            {/* Business */}
            <Input
              label="Business / Firm Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Your business name"
            />

            {/* Email */}
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />

            {/* Phone + Country Code */}
            <div>
              <label className="block text-sm font-semibold text-text-secondary">
                Contact Number
              </label>

              <div className="mt-2 flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="
                    w-24
                    rounded-lg
                    bg-bg-light
                    border border-border-light
                    px-2 py-3
                    text-sm
                    text-text-primary
                    focus:border-brand-accent
                    focus:outline-none
                    focus:ring-1 focus:ring-brand-accent/30
                  "
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                  <option value="+61">+61</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="
                    flex-1
                    rounded-lg
                    bg-bg-light
                    border border-border-light
                    px-4 py-3
                    text-sm
                    text-text-primary
                    transition
                    focus:border-brand-accent
                    focus:outline-none
                    focus:ring-1 focus:ring-brand-accent/30
                  "
                />
              </div>
            </div>

            {/* Interest */}
            <div className="sm:col-span-2 grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Location */}
              <Input
                label="City / Region"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State, Country"
              />
              <div>
                <label className="block text-sm font-semibold text-text-secondary">
                  Interested In
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg bg-bg-light border border-border-light px-4 py-3 text-sm text-text-primary transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30"
                >
                  <option>Sanitaryware Dealership</option>
                  <option>Bathroom Fittings Dealership</option>
                  <option>Both Categories</option>
                </select>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs text-text-muted">
              Our dealership team will contact you within 24–48 business hours.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex items-center justify-center
                rounded-lg
                bg-brand-accent
                px-8 py-3
                text-sm font-semibold uppercase tracking-wide
                text-brand-deep
                shadow-soft
                transition
                hover:brightness-110
                active:scale-[0.98]
                disabled:opacity-60
              "
            >
              {loading ? "Submitting..." : "Submit Interest"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* =====================
   REUSABLE INPUT
===================== */

function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-text-secondary">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-bg-light border border-border-light px-4 py-3 text-sm text-text-primary transition focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30"
      />
    </div>
  );
}
