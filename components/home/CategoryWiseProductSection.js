"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    title: "Sanitaryware",
    subtitle: "Sanitaryware Solutions for Global Markets",
    desc: "Engineered for durability, hygiene, and modern aesthetics—ideal for residential, commercial, and infrastructure projects worldwide.",
    highlights: [
      "High-quality raw materials",
      "Smooth finish & long life",
      "Easy installation & maintenance",
    ],
    products: [
      "Water Closets (WC)",
      "Wash Basins",
      "Pedestal Basins",
      "Urinals",
      "Squatting Pans",
    ],
    image:
      "https://images.unsplash.com/photo-1604478578618-57d582bfb230?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmF0aCUyMHR1YnN8ZW58MHx8MHx8fDA%3D",
    link: "/products/sanitaryware",
  },
  {
    title: "Bathroom Fittings",
    subtitle: "Modern Bathroom Fittings Built to Last",
    desc: "Precision-engineered fittings delivering reliability, water efficiency, and refined visual appeal across diverse markets.",
    highlights: [
      "Corrosion-resistant materials",
      "Smooth operation",
      "International plumbing compatibility",
    ],
    products: [
      "Faucets & Taps",
      "Showers & Systems",
      "Health Faucets",
      "Accessories & Mountings",
      "Concealed Fittings",
    ],
    image:
      "https://images.unsplash.com/photo-1719431942674-3583b3e908ba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FzaCUyMGJhc2luc3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/products/bathroom-fittings",
  },
];

export default function CategoryWiseProductsSection() {
  return (
    <section className="relative bg-bg-dark overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-wide text-brand-accent">
            CATEGORY WISE PRODUCTS
          </p>

          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Explore Our Product Categories
          </h2>

          <p className="mt-5 text-base sm:text-lg text-bg-light leading-relaxed">
            Megica Group offers a curated range of export-ready sanitaryware and
            bathroom fittings designed to meet international quality standards
            and long-term performance expectations.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="!overflow-visible"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative h-[520px] rounded-3xl overflow-hidden shadow-card"
                >
                  {/* IMAGE */}
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      {cat.title}
                    </h3>

                    <p className="mt-1 text-sm text-brand-accent font-semibold">
                      {cat.subtitle}
                    </p>

                    <p className="mt-3 text-sm text-bg-light leading-relaxed">
                      {cat.desc}
                    </p>

                    {/* HIGHLIGHTS */}
                    <ul className="mt-4 space-y-1 text-sm text-bg-light">
                      {cat.highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>

                    {/* PRODUCTS */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.products.map((p) => (
                        <span
                          key={p}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={cat.link}
                      className="mt-6 w-fit rounded-lg bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90"
                    >
                      View {cat.title} Products
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-3xl bg-brand-deep/80 backdrop-blur p-8 sm:p-10 text-center shadow-card"
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Looking for Bulk Sourcing or Private Labeling?
          </h3>

          <p className="mt-3 text-bg-light text-sm sm:text-base">
            Explore detailed specifications or connect with our export team to
            discuss your requirements.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/e-catalogue"
              className="rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-deep transition hover:opacity-90"
            >
              Download Catalogue
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Send Enquiry
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
