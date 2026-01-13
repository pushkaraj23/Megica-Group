"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const banners = [
  {
    title: "Global Exporters of Sanitaryware",
    subtitle:
      "Premium sanitaryware manufactured in India and trusted by global distributors, builders, and developers.",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2400&auto=format&fit=crop",
    primary: "/sanitaryware",
  },
  {
    title: "Modern Bathroom Fittings",
    subtitle:
      "Precision-crafted bathroom fittings engineered for durability, aesthetics, and international standards.",
    image:
      "https://images.unsplash.com/photo-1599513486453-39bfc7335d0f?w=2400&auto=format&fit=crop&q=60",
    primary: "/bathroom-fittings",
  },
  {
    title: "Made in India. Trusted Worldwide.",
    subtitle:
      "Megica Group delivers export-ready products with consistency, scale, and global compliance.",
    image:
      "https://plus.unsplash.com/premium_photo-1683120743705-73ad19a0b00d?w=2400&auto=format&fit=crop&q=60",
    primary: "/product-portfolio",
  },
];

const INTERVAL = 6000;

export default function HeroBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % banners.length),
      INTERVAL
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-svh overflow-hidden bg-bg-main">
      {/* ================= BACKGROUND SLIDES ================= */}
      {banners.map((b, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1400 ease-[cubic-bezier(.22,.61,.36,1)] ${
            i === active
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-110 blur-sm"
          }`}
        >
          <Image
            src={b.image}
            alt={b.title}
            fill
            priority={i === 0}
            className="object-cover"
          />

          {/* Brand cinematic overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-bg-dark to-brand-muted/40" />
        </div>
      ))}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
          <div className="max-w-3xl">
            {/* Animated Accent Line */}
            <div className="mb-5 h-1 w-16 rounded-full bg-brand-accent animate-pulse" />

            {/* Title */}
            <h1
              key={banners[active].title}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-inverse animate-[fadeSlideUp_0.7s_ease-out]"
            >
              <span className="bg-linear-to-r from-brand-accent to-white bg-clip-text text-transparent">
                {banners[active].title}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              key={banners[active].subtitle}
              className="mt-6 max-w-2xl text-base sm:text-lg text-bg-light animate-[fadeSlideUp_0.9s_ease-out]"
            >
              {banners[active].subtitle}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 animate-[fadeSlideUp_1.1s_ease-out]">
              <Link
                href={banners[active].primary}
                className="group relative overflow-hidden rounded-lg w-fit bg-brand-accent px-7 py-3 font-semibold text-brand-deep shadow-card transition-all hover:scale-[1.03]"
              >
                <span className="relative z-10">Explore Products</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/enquiry-now"
                className="rounded-lg border w-fit border-white/40 px-7 py-3 font-semibold text-inverse backdrop-blur transition hover:bg-white/10"
              >
                Enquiry Now
              </Link>
            </div>

            {/* TRUST METRICS */}
            <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ["30+", "Countries"],
                ["ISO", "Certified"],
                ["OEM", "Support"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-xl bg-white/15 backdrop-blur-md border border-white/20 p-4 text-center shadow-soft hover:scale-105 transition"
                >
                  <p className="text-2xl font-bold text-inverse">{v}</p>
                  <p className="mt-1 text-sm text-bg-light">{l}</p>
                </div>
              ))}
            </div>

            {/* SLIDE INDICATORS */}
            <div className="mt-12 flex gap-3">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? "w-10 bg-brand-accent" : "w-6 bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SCROLL CUE ================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
        Scroll
      </div>

      {/* ================= CUSTOM KEYFRAMES ================= */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
