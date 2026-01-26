"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * ✅ NEXT.JS (JS) GALLERY PAGE
 * - Dark themed, premium UI
 * - Albums + sticky sidebar navigation
 * - Photos + Videos
 * - Framer Motion animations
 * - Horizontal parallax rows (vertical scroll → horizontal motion)
 * - Lightbox modal with image/video preview
 *
 * NOTE:
 * - Use local assets for best performance:
 *   /public/gallery/<album>/<file>.jpg
 *   /public/gallery/<album>/<file>.mp4
 * - If you use remote URLs, use <img> and <video> OR add domains in next.config.js for next/image
 */

/* ----------------------------
   DUMMY DATA (REPLACE LATER)
---------------------------- */
const ALBUMS = [
  {
    id: "factory",
    label: "Factory & Production",
    subtitle: "Workshop floors • machinery • day-to-day operations",
    items: [
      {
        type: "image",
        src: "/gallery/factory/1.jpg",
        title: "Production Line",
      },
      { type: "image", src: "/gallery/factory/2.jpg", title: "Assembly Zone" },
      {
        type: "video",
        src: "/gallery/factory/3.mp4",
        title: "Facility Walkthrough",
      },
      {
        type: "image",
        src: "/gallery/factory/4.jpg",
        title: "Finishing Station",
      },
      { type: "image", src: "/gallery/factory/5.jpg", title: "Packaging Area" },
      { type: "image", src: "/gallery/factory/6.jpg", title: "Quality Check" },
      {
        type: "video",
        src: "/gallery/factory/7.mp4",
        title: "Machine Operation",
      },
      {
        type: "image",
        src: "/gallery/factory/8.jpg",
        title: "Material Handling",
      },
    ],
  },
  {
    id: "quality",
    label: "Quality & Testing",
    subtitle: "Inspection • tests • compliance readiness",
    items: [
      {
        type: "image",
        src: "/gallery/quality/1.jpg",
        title: "Inspection Desk",
      },
      {
        type: "video",
        src: "/gallery/quality/2.mp4",
        title: "Testing Process",
      },
      {
        type: "image",
        src: "/gallery/quality/3.jpg",
        title: "Finish Uniformity",
      },
      {
        type: "image",
        src: "/gallery/quality/4.jpg",
        title: "Dimensional Checks",
      },
      {
        type: "image",
        src: "/gallery/quality/5.jpg",
        title: "Batch Verification",
      },
      { type: "video", src: "/gallery/quality/6.mp4", title: "QC Tour" },
    ],
  },
  {
    id: "export",
    label: "Export Packing & Dispatch",
    subtitle: "Packaging • container loading • logistics",
    items: [
      {
        type: "image",
        src: "/gallery/export/1.jpg",
        title: "Export Packaging",
      },
      { type: "image", src: "/gallery/export/2.jpg", title: "Labeling & Docs" },
      {
        type: "video",
        src: "/gallery/export/3.mp4",
        title: "Container Loading",
      },
      { type: "image", src: "/gallery/export/4.jpg", title: "Dispatch Bay" },
      { type: "image", src: "/gallery/export/5.jpg", title: "Shipment Prep" },
      {
        type: "video",
        src: "/gallery/export/6.mp4",
        title: "Logistics Handling",
      },
    ],
  },
  {
    id: "applications",
    label: "Installed Applications",
    subtitle: "Residential • commercial • hospitality projects",
    items: [
      {
        type: "image",
        src: "/gallery/applications/1.jpg",
        title: "Modern Bathroom",
      },
      {
        type: "image",
        src: "/gallery/applications/2.jpg",
        title: "Hotel Fit-Out",
      },
      {
        type: "image",
        src: "/gallery/applications/3.jpg",
        title: "Project Supply",
      },
      {
        type: "video",
        src: "/gallery/applications/4.mp4",
        title: "Site Showcase",
      },
      {
        type: "image",
        src: "/gallery/applications/5.jpg",
        title: "Retail Display",
      },
      {
        type: "image",
        src: "/gallery/applications/6.jpg",
        title: "Premium Setup",
      },
    ],
  },
  {
    id: "team",
    label: "Teams & Operations",
    subtitle: "People • planning • coordination",
    items: [
      { type: "image", src: "/gallery/team/1.jpg", title: "Operations Team" },
      { type: "image", src: "/gallery/team/2.jpg", title: "Planning Board" },
      { type: "video", src: "/gallery/team/3.mp4", title: "Team Walkthrough" },
      {
        type: "image",
        src: "/gallery/team/4.jpg",
        title: "Dispatch Coordination",
      },
      { type: "image", src: "/gallery/team/5.jpg", title: "Meeting Room" },
    ],
  },
];

/* ----------------------------
   MOTION PRESETS
---------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState(ALBUMS[0].id);
  const [filter, setFilter] = useState("all"); // all | image | video
  const [lightbox, setLightbox] = useState(null);

  const albumRefs = useRef({});

  // Track which album is in view (simple + reliable)
  useEffect(() => {
    const sections = Object.values(albumRefs.current).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          )[0];
        if (visible?.target?.dataset?.album)
          setActiveAlbum(visible.target.dataset.album);
      },
      { root: null, threshold: [0.2, 0.35, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const filteredAlbums = useMemo(() => {
    if (filter === "all") return ALBUMS;
    return ALBUMS.map((a) => ({
      ...a,
      items: a.items.filter((it) => it.type === filter),
    })).filter((a) => a.items.length > 0);
  }, [filter]);

  const scrollToAlbum = (id) => {
    const node = albumRefs.current[id];
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-bg-dark text-text-inverse">
      {/* BACKGROUND TEXTURE + GLOWS */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:28px_28px]" />
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-brand-accent/12 blur-[140px]" />
        <div className="absolute -bottom-56 -left-56 h-[620px] w-[620px] rounded-full bg-brand-muted/10 blur-[160px]" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-primary/60 to-black opacity-90" /> */}
      </div>

      {/* HEADER HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-brand-accent">
              Gallery
            </p>

            <h1 className="mt-6 font-heading text-text-inverse text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              A Visual Story of <span className="text-brand-accent">Scale</span>
              , <span className="text-brand-accent">Quality</span> &{" "}
              <span className="text-brand-accent">Trust</span>
            </h1>

            <p className="mt-6 text-text-inverse/70 text-base sm:text-lg leading-relaxed">
              Explore Megica’s manufacturing strength, quality systems, export
              readiness, and real-world applications — presented in curated
              albums.
            </p>
          </motion.div>

          {/* FILTERS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <FilterPill
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterPill>
            <FilterPill
              active={filter === "image"}
              onClick={() => setFilter("image")}
            >
              Photos
            </FilterPill>
            <FilterPill
              active={filter === "video"}
              onClick={() => setFilter("video")}
            >
              Videos
            </FilterPill>
          </motion.div>
        </div>
      </section>

      {/* BODY GRID: TOPBAR + CONTENT */}
      <section className="relative px-5">
        <nav className="sticky top-5 mb-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-card p-5">
            <p className="text-xs tracking-[0.35em] uppercase text-brand-soft">
              Albums
            </p>

            <div className="mt-4 space-y-1 grid grid-cols-5 max-sm:grid-cols-2 gap-3">
              {filteredAlbums.map((a) => (
                <button
                  key={a.id}
                  onClick={() => scrollToAlbum(a.id)}
                  className={[
                    "w-full text-left rounded-2xl px-4 py-3 transition",
                    activeAlbum === a.id
                      ? "bg-brand-accent text-brand-deep shadow-soft"
                      : "hover:bg-white/10 text-text-inverse",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="uppercase tracking-wider text-sm">
                      {a.label}
                    </span>
                    <span
                      className={[
                        "text-[11px] rounded-full px-2 py-1 border",
                        activeAlbum === a.id
                          ? "border-black/20 bg-black/10"
                          : "border-white/10 bg-white/5",
                      ].join(" ")}
                    >
                      {a.items.length}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </nav>
        <div className="px-5 pb-24">
          <div className="gap-10">
            {/* MAIN CONTENT */}
            <div className="space-y-16">
              {filteredAlbums.map((album, idx) => (
                <AlbumSection
                  key={album.id}
                  album={album}
                  index={idx}
                  registerRef={(node) => (albumRefs.current[album.id] = node)}
                  onOpen={(item) =>
                    setLightbox({ ...item, album: album.label })
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        open={!!lightbox}
        item={lightbox}
        onClose={() => setLightbox(null)}
      />
    </main>
  );
}

/* ----------------------------
   ALBUM SECTION
   - Two horizontal parallax rows
---------------------------- */
function AlbumSection({ album, index, registerRef, onOpen }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Horizontal parallax (vertical scroll => x translate)
  const x1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  // Split into two rows for a richer look
  const rowA = album.items.filter((_, i) => i % 2 === 0);
  const rowB = album.items.filter((_, i) => i % 2 === 1);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        registerRef(node);
      }}
      data-album={album.id}
      className="scroll-mt-28"
    >
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        custom={0}
        variants={fadeUp}
        className="mb-6"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-brand-accent">
              Album {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 text-text-inverse font-heading text-2xl sm:text-3xl uppercase">
              {album.label}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-text-inverse/65 max-w-2xl">
              {album.subtitle}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Rows */}
      <div className="space-y-7">
        <ParallaxRow x={x1} items={rowA} onOpen={onOpen} />
        <ParallaxRow x={x2} items={rowB} onOpen={onOpen} />
      </div>

      {/* Divider */}
      <div className="mt-12 h-px w-full bg-white/10" />
    </section>
  );
}

/* ----------------------------
   PARALLAX ROW
---------------------------- */
function ParallaxRow({ x, items, onOpen }) {
  return (
    <motion.div style={{ x }} className="relative w-[100vw] scrollbar-hide overflow-x-scroll">
      <div className="flex gap-5">
        {items.map((it, i) => (
          <GalleryCard
            key={`${it.src}-${i}`}
            item={it}
            onOpen={() => onOpen(it)}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ----------------------------
   CARD
---------------------------- */
function GalleryCard({ item, onOpen }) {
  const isVideo = item.type === "video";

  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className="
        group relative
        min-w-[260px] sm:min-w-[320px] lg:min-w-[360px]
        h-[230px] sm:h-[260px] lg:h-[280px]
        rounded-3xl overflow-hidden
        border border-white/10
        bg-white/5
        shadow-card
        outline-none
      "
      aria-label={item.title || "Open media"}
    >
      {/* Media */}
      {isVideo ? (
        <video
          src={item.src}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <img
          src={item.src}
          alt={item.title || "Gallery image"}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
      )}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(252,162,53,0.18),transparent_55%)]" />

      {/* Video badge */}
      {isVideo && (
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
          VIDEO
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute left-0 right-0 bottom-0 p-5">
        <div className="flex items-end justify-between gap-3">
          <div className="text-left">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/55">
              Preview
            </p>
            <p className="mt-2 text-base sm:text-lg uppercase text-white">
              {item.title || (isVideo ? "Video" : "Photo")}
            </p>
          </div>

          <div className="relative h-11 w-11 rounded-2xl bg-brand-accent text-brand-deep grid place-items-center shadow-soft transition group-hover:scale-105">
            {isVideo ? "▶" : "⤢"}
          </div>
        </div>
      </div>

      {/* Edge accent */}
      <div className="absolute right-0 top-0 h-full w-[3px] bg-brand-accent/70 opacity-0 transition group-hover:opacity-100" />
    </motion.button>
  );
}

/* ----------------------------
   LIGHTBOX MODAL
---------------------------- */
function Lightbox({ open, item, onClose }) {
  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            aria-label="Close preview"
            onClick={onClose}
            className="absolute inset-0 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative
              w-full max-w-5xl
              rounded-3xl
              border border-white/10
              bg-brand-primary
              shadow-card
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-brand-soft">
                  {item.album || "Album"}
                </p>
                <p className="mt-2 uppercase text-white">
                  {item.title || "Preview"}
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-black/40
                  px-4 py-2
                  text-xs uppercase tracking-[0.35em]
                  text-white/80
                  transition
                  hover:bg-black/55
                "
              >
                Close
              </button>
            </div>

            {/* Content */}
            <div className="relative bg-black">
              <div className="relative aspect-[16/9] w-full">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    autoPlay
                    playsInline
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title || "Preview"}
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                )}
              </div>

              {/* Bottom meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-white/10 bg-brand-secondary/40">
                <div className="text-sm text-white/70">
                  {item.type === "video"
                    ? "Video preview • tap play controls"
                    : "Image preview • zoom with browser"}
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-accent" />
                  <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                    Megica Gallery
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------------------------
   UI: FILTER PILL
---------------------------- */
function FilterPill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-5 py-2 text-xs uppercase tracking-[0.35em] transition border",
        active
          ? "bg-brand-accent text-brand-deep border-black/15 shadow-soft"
          : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
