"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Wall Hung Water Closet",
    category: "Sanitaryware",
    image:
      "https://images.unsplash.com/photo-1644916930530-0e4e5afdd20d",
  },
  {
    name: "One Piece Toilet",
    category: "Sanitaryware",
    image: "https://images.unsplash.com/photo-1587527901949-ab0341697c1e",
  },
  {
    name: "Premium Basin Mixer",
    category: "Bathroom Fittings",
    image: "https://plus.unsplash.com/premium_photo-1684349306485-c2a1fd67002c",
  },
  {
    name: "Overhead Shower Set",
    category: "Bathroom Fittings",
    image: "https://images.unsplash.com/photo-1654805678230-f0e33c7c903c",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturedProductsSection() {
  return (
    <section className="relative bg-bg-main">
      {/* PRODUCT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <motion.div
            key={product.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
      group relative
      h-[55vh] md:h-[60vh]
      overflow-hidden
      border border-light
      shadow-soft
      transition
      hover:shadow-card
    "
          >
            {/* FULL BACKGROUND IMAGE */}
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="
        object-cover
        transition-transform duration-700
        group-hover:scale-105
      "
            />

            {/* GRADIENT OVERLAY */}
            <div
              className="
      absolute inset-0
      bg-gradient-to-t
      from-black/75
      via-black/35
      to-transparent
    "
            />

            {/* CONTENT – BOTTOM */}
            <div className="absolute inset-x-0 bottom-0 p-6 z-10">
              <p className="text-xs font-semibold tracking-wide max-sm:text-lg text-brand-accent">
                {product.category}
              </p>

              <h3 className="mt-1 font-heading text-xl max-sm:text-3xl uppercase text-white">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
