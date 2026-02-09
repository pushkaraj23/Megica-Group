"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
/* =========================
   CATEGORY DATA
========================= */

const categories = [
  {
    title: "Water Closets",
    subtitle: "One-piece • Two-piece • Wall-hung",
    description:
      "Ergonomically designed water closets engineered for hygiene, comfort, and long-term performance across residential and commercial environments.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=80",
    products: [
      {
        image: "https://m.media-amazon.com/images/I/71fU6mFzO8L.jpg",
        caption: "Rimless wall-hung WC with high-gloss hygienic finish",
      },
      {
        image:
          "https://www.inart.co.in/cdn/shop/files/LOGO-01_f77c3140-e05a-4247-9a28-d7e7012f0044.jpg?v=1723290511&width=1100",
        caption: "One-piece floor-mounted water closet for modern homes",
      },
      {
        image: "https://www.makankidukan.com/uploads/products/1747990675_0.jpg",
        caption: "Compact WC designed for space-efficient bathrooms",
      },
      {
        image: "https://cdn.moglix.com/p/9XaIw42ClcAfU.jpg",
        caption: "Premium designer WC with durability-grade glazing",
      },
    ],
  },

  {
    title: "Wash Basins",
    subtitle: "Countertop • Wall-hung • Pedestal",
    description:
      "Modern wash basins crafted to complement contemporary interiors while ensuring easy maintenance and daily durability.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
        caption: "Minimal countertop basin with smooth ceramic contours",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",
        caption: "Wall-hung basin designed for compact modern spaces",
      },
      {
        image:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80",
        caption: "Pedestal basin with classic proportions and finish",
      },
      {
        image:
          "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=80",
        caption: "Designer wash basin for premium residential interiors",
      },
    ],
  },

  {
    title: "Urinals",
    subtitle: "Commercial • High-traffic solutions",
    description:
      "Designed for heavy usage, our urinals focus on water efficiency, easy cleaning, and long-term operational reliability.",
    image:
      "https://images.unsplash.com/photo-1518618750560-8f07abde4e4e?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1621976498727-9a3e45c3a2fa?w=900&q=80",
        caption: "Wall-mounted urinal optimized for commercial restrooms",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=80",
        caption: "Water-efficient urinal for high-footfall environments",
      },
      {
        image:
          "https://images.unsplash.com/photo-1595526114035-45c7c93e8a2a?w=900&q=80",
        caption: "Contemporary urinal with easy-clean ceramic surface",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80",
        caption: "Durable urinal designed for institutional use",
      },
    ],
  },

  {
    title: "Cisterns & Flush Systems",
    subtitle: "Concealed • Exposed • Smart flush",
    description:
      "Reliable flushing systems built for performance, compatibility, and seamless integration with modern sanitaryware.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&q=80",
        caption: "Concealed cistern system for clean wall aesthetics",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
        caption: "Dual-flush cistern optimized for water efficiency",
      },
      {
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
        caption: "Flush system compatible with multiple WC formats",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=80",
        caption: "Modern exposed cistern with reliable flushing mechanism",
      },
    ],
  },
];

/* =========================
   SECTION
========================= */

export default function SanitarywareCategoryParallax() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <section className="relative bg-bg-dark text-text-inverse">
        {categories.map((item, index) => (
          <ParallaxCategoryCard
            key={index}
            item={item}
            index={index}
            onExplore={() => setActiveCategory(item)}
          />
        ))}
      </section>

      {/* FULLSCREEN PRODUCT MODAL */}
      {activeCategory && (
        <ProductGalleryModal
          category={activeCategory}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </>
  );
}

/* =========================
   PARALLAX CARD
========================= */

function ParallaxCategoryCard({ item, index, onExplore }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Stronger parallax layers */
  const bgY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const productY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center"
    >
      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          backgroundImage: `url(${item.image})`,
        }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

      {/* =========================
          PRODUCT IMAGES (MID LAYER)
      ========================== */}
      <motion.div
        style={{ y: productY }}
        className="absolute right-20 hidden lg:block z-10"
      >
        <div className="relative w-130 h-105">
          {item.products.slice(0, 3).map((prod, i) => {
            const positions = [
              "top-0 left-5 z-30",
              "top-20 right-0 z-10",
              "-bottom-5 left-36 z-20",
            ];

            return (
              <div
                key={i}
                className={`
            absolute
            ${positions[i]}
            w-52 h-72
            overflow-hidden
            rounded-xl
            shadow-card
            border border-white/10
          `}
              >
                <img
                  src={prod.image}
                  alt={`${item.title} product ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* =========================
          CONTENT
      ========================== */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 mx-auto max-w-7xl px-6 w-full"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-muted">
            Category {index + 1}
          </p>

          <h2 className="mt-3 text-4xl w-3/4 sm:text-5xl lg:text-6xl uppercase tracking-tight text-bg-main">
            {item.title}
          </h2>

          <div className="mt-6 h-0.5 w-20 bg-brand-accent" />

          <p className="mt-6 text-lg sm:text-xl text-white/85">
            {item.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {item.description}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={onExplore}
              className="
    inline-flex items-center justify-center
    rounded-lg
    border border-white/20
    px-8 py-4
    text-sm font-semibold uppercase tracking-wider
    text-white
    backdrop-blur
    transition-all duration-300
    hover:border-brand-accent
    hover:text-brand-accent
  "
            >
              Explore {item.title}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProductGalleryModal({ category, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 bg-black text-white"
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/60 hover:text-brand-accent text-sm uppercase tracking-widest"
      >
        Close ✕
      </button>

      {/* TITLE */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-muted">
          {category.title}
        </p>
      </div>

      {/* SLIDER */}
      <div className="h-full flex items-center">
        <Swiper
          modules={[Navigation, Autoplay, Keyboard]}
          slidesPerView={1.2}
          centeredSlides
          loop
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full px-10 lg:px-24"
        >
          {category.products.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`
                    transition-all duration-500 ease-out
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"}
                  `}
                >
                  {/* IMAGE */}
                  <div className="relative h-[70vh] overflow-hidden rounded-xl shadow-card border border-white/10">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CAPTION */}
                  <p
                    className={`
                      mt-6 text-center text-sm leading-relaxed
                      transition-opacity duration-500
                      ${isActive ? "text-white" : "text-white/40"}
                    `}
                  >
                    {item.caption}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
