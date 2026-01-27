"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* =========================
   CATEGORY DATA – BATHROOM FITTINGS
========================= */

const categories = [
  {
    title: "Faucets & Mixers",
    subtitle: "Single-lever • Wall-mounted • Deck-mounted",
    description:
      "Precision-engineered faucets and mixers designed for smooth control, durable finishes, and consistent water flow across residential and commercial applications.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
        caption: "Single-lever basin mixer with premium chrome finish",
      },
      {
        image:
          "https://images.unsplash.com/photo-1636004482498-7b96b604a2ce?w=900&q=80",
        caption: "Wall-mounted faucet for clean, modern aesthetics",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
        caption: "Deck-mounted mixer engineered for smooth operation",
      },
      {
        image:
          "https://images.unsplash.com/photo-1595526114035-45c7c93e8a2a?w=900&q=80",
        caption: "Designer faucet with corrosion-resistant finish",
      },
    ],
  },

  {
    title: "Shower Systems",
    subtitle: "Overhead • Hand showers • Thermostatic",
    description:
      "Complete shower solutions engineered for pressure balance, water efficiency, and a refined bathing experience.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",
        caption: "Rain shower system with wide spray coverage",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=80",
        caption: "Hand shower with ergonomic grip and flow control",
      },
      {
        image:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80",
        caption: "Thermostatic shower for consistent temperature",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80",
        caption: "Premium shower set with durable surface coating",
      },
    ],
  },

  {
    title: "Concealed & Exposed Valves",
    subtitle: "Flush plates • Diverters • Control units",
    description:
      "Reliable valve systems designed for seamless integration, smooth switching, and long-term operational stability.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&q=80",
        caption: "Concealed valve system for minimal wall aesthetics",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
        caption: "Dual-outlet diverter for shower and hand shower",
      },
      {
        image:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
        caption: "Flush plate with durable tactile controls",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=80",
        caption: "Exposed valve designed for easy maintenance",
      },
    ],
  },

  {
    title: "Bathroom Accessories",
    subtitle: "Towel rails • Soap dispensers • Holders",
    description:
      "Functional bathroom accessories crafted to match finishes, enhance usability, and complement modern interiors.",
    image:
      "https://images.unsplash.com/photo-1518618750560-8f07abde4e4e?w=1800&q=80",
    products: [
      {
        image:
          "https://images.unsplash.com/photo-1621976498727-9a3e45c3a2fa?w=900&q=80",
        caption: "Minimal towel rail with corrosion-resistant coating",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=900&q=80",
        caption: "Wall-mounted soap dispenser for daily use",
      },
      {
        image:
          "https://images.unsplash.com/photo-1595526114035-45c7c93e8a2a?w=900&q=80",
        caption: "Toilet paper holder with premium metal finish",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80",
        caption: "Accessory set designed for coordinated bathrooms",
      },
    ],
  },
];

/* =========================
   SECTION
========================= */

export default function BathroomFittingsCategoryParallax() {
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

          <h2 className="mt-3 text-4xl w-3/4 sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-bg-main">
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
