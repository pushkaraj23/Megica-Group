"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/data/firebase";
import { COUNTRY_CODES } from "@/data/countryCodes";
import SuccessPopup from "../common/SuccessPopup";

export default function FullEnquirySection() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    interest: "Sanitaryware",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
        source: "Website Enquiry",
      });

      setShowPopup(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        interest: "Sanitaryware",
        message: "",
      });
    } catch (error) {
      console.error("Enquiry submit error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative bg-bg-main">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-section to-transparent" />
      <SuccessPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        duration={4000}
        message="Thank you for your Enquiry. Our team will respond within 24 hrs."
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-14 lg:grid-cols-2 items-start"
        >
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-primary">
              ENQUIRY FORM
            </p>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl uppercase text-brand-deep leading-tight">
              Let’s Discuss Your
              <br />
              Product Requirements
            </h2>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              Whether you are looking for bulk sourcing, project supply, or
              private labeling, our team is ready to guide you.
            </p>

            <div className="mt-8 space-y-3 text-sm text-brand-deep">
              <p>✔ Export-ready products & documentation</p>
              <p>✔ OEM & private label support</p>
              <p>✔ Dedicated business communication</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl bg-brand-deep border border-white/10 shadow-card p-6 sm:p-8 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
              />
              <Input
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company name"
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
              <div>
                <label className="block text-sm font-semibold text-text-inverse mb-2">
                  Product Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                >
                  <option>Sanitaryware</option>
                  <option>Bathroom Fittings</option>
                  <option>Both</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-text-inverse mb-2">
                  Contact Number
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full sm:w-44 shrink-0 rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
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
                    required
                    placeholder="Phone number"
                    className="flex-1 min-w-0 rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder-white/40 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-text-inverse mb-2">
                  Your Requirements
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your product requirements, quantities, or questions"
                  className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder-white/40 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20 resize-y min-h-[100px]"
                />
              </div>
            </div>

            <div className="mt-7">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-brand-accent px-6 py-3 text-sm uppercase font-medium text-brand-deep transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable input */
function Input({ label, type = "text", name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-text-inverse mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-sm text-text-inverse placeholder-white/40 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
      />
    </div>
  );
}
