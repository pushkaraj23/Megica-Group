"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const categorySites = [
  {
    label: "Sanitaryware",
    href: "/sanitaryware",
    image: "/catalogues/sanitaryware-p1.jpg",
  },
  {
    label: "Bathroom Fittings",
    href: "/bathroom-fittings",
    image: "/catalogues/export-p1.jpg",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const pathname = usePathname();

  const aboutLinks = [
    { label: "About Megica Group", href: "/about#about-megica" },
    { label: "Why Megica Group", href: "/about#why-megica" },
    { label: "Workshop & Manufacturing", href: "/about#workshop" },
    { label: "Certifications & Compliance", href: "/about#certifications" },
    { label: "Make In India", href: "/about#make-in-india" },
    { label: "CSR Activities", href: "/about#csr" },
    { label: "Client Testimonials", href: "/about#testimonials" },
    { label: "Enquiry Form", href: "/about#enquiry" },
  ];

  const productLinks = [
    { label: "Product Overview", href: "/products#products-hero" },
    { label: "Product Categories", href: "/products#product-categories" },
    { label: "Featured Products", href: "/products#featured-products" },
    { label: "Dealership Opportunity", href: "/products#dealership" },
    { label: "Why Megica", href: "/products#why-megica" },
    { label: "Send Enquiry", href: "/products#enquiry" },
  ];

  return (
    <header className="fixed top-6 z-50 w-full flex justify-center px-4">
      {/* =========================
          FLOATING GLASS NAVBAR
      ========================== */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          relative
          flex items-center justify-between
          max-w-7xl w-full
          px-6 py-3
          rounded-full
          bg-bg-light
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          border border-white/40
        "
      >
        {/* Gold glare */}
        <div className="pointer-events-none absolute -top-10 left-1/3 h-32 w-32 rounded-full bg-brand-accent/20 blur-3xl" />

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/megica-logo1.png"
            alt="Megica Group"
            className="h-8 w-auto"
          />
          <span className="text-brand-accent text-xl leading-none">•</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavPill href="/" isActive={pathname === "/"}>Home</NavPill>

          <HoverDropdown
            label="About"
            href="/about"
            isActive={pathname.startsWith("/about")}
          >
            {aboutLinks.map((l) => (
              <DropdownLink key={l.href} href={l.href} label={l.label} />
            ))}
          </HoverDropdown>

          <HoverDropdown
            label="Product Portfolio"
            href="/products"
            isActive={pathname.startsWith("/products")}
          >
            <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-border-light">
              {categorySites.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group block rounded-xl overflow-hidden border border-border-light hover:border-brand-accent/50 transition shadow-sm hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-bg-section">
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="140px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow-sm">
                      {cat.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {productLinks.map((l) => (
              <DropdownLink key={l.href} href={l.href} label={l.label} />
            ))}
          </HoverDropdown>
          <NavPill
            href="/dealership"
            isActive={pathname.startsWith("/dealership")}
          >
            Dealership
          </NavPill>
          <NavPill
            href="/global-presence"
            isActive={pathname.startsWith("/global-presence")}
          >
            Global Presence
          </NavPill>
          <NavPill
            href="/e-catalogue"
            isActive={pathname.startsWith("/e-catalogue")}
          >
            E-Catalogue
          </NavPill>
          <NavPill href="/gallery" isActive={pathname.startsWith("/gallery")}>
            Gallery
          </NavPill>

          <NavPill href="/contact" accent isActive={pathname.startsWith("/contact")}>
            Contact
          </NavPill>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-full border border-black/10 px-4 py-2 text-sm"
          aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={mobileOpen}
          aria-controls="main-mobile-nav"
        >
          ☰
        </button>
      </motion.div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
            {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            id="main-mobile-nav"
            className="
              absolute top-20
              w-[92%]
              rounded-3xl
              bg-white/60
              shadow-card backdrop-blur-md
              border border-border-light
              p-6
              lg:hidden
            "
          >
            <MobileLink href="/" isActive={pathname === "/"}>
              Home
            </MobileLink>
            <MobileAccordion
              title="About"
              open={openSub === "about"}
              onClick={() => setOpenSub(openSub === "about" ? null : "about")}
              isActive={pathname.startsWith("/about")}
            >
              {aboutLinks.map((l) => (
                <div key={l.href} onClick={() => setMobileOpen(!mobileOpen)}>
                  <MobileSubLink href={l.href} label={l.label} />
                </div>
              ))}
            </MobileAccordion>

            <MobileAccordion
              title="Product Portfolio"
              open={openSub === "products"}
              onClick={() =>
                setOpenSub(openSub === "products" ? null : "products")
              }
              isActive={pathname.startsWith("/products")}
            >
              <div className="grid grid-cols-2 gap-2 mb-3">
                {categorySites.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setMobileOpen(false)}
                    className="group block rounded-xl overflow-hidden border border-border-light"
                  >
                    <div className="relative aspect-[4/3] bg-bg-section">
                      <Image
                        src={cat.image}
                        alt={cat.label}
                        fill
                        className="object-cover"
                        sizes="140px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow-sm">
                        {cat.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              {productLinks.map((l) => (
                <MobileSubLink key={l.href} href={l.href} label={l.label} />
              ))}
            </MobileAccordion>

            <MobileLink
              href="/dealership"
              isActive={pathname.startsWith("/dealership")}
            >
              Dealership
            </MobileLink>
            <MobileLink
              href="/global-presence"
              isActive={pathname.startsWith("/global-presence")}
            >
              Global Presence
            </MobileLink>
            <MobileLink
              href="/e-catalogue"
              isActive={pathname.startsWith("/e-catalogue")}
            >
              E-Catalogue
            </MobileLink>
            <MobileLink
              href="/gallery"
              isActive={pathname.startsWith("/gallery")}
            >
              Gallery
            </MobileLink>
            <MobileLink
              href="/contact"
              isActive={pathname.startsWith("/contact")}
            >
              Contact
            </MobileLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =====================
   DESKTOP COMPONENTS
===================== */

function NavPill({ href, children, accent, isActive }) {
  return (
    <Link
      href={href}
      className={`
        px-4 py-2 text-sm tracking-wide rounded-full transition-all duration-200 border
        ${
          accent
            ? "bg-brand-accent text-black shadow-sm hover:brightness-110 border-brand-accent"
            : isActive
              ? "bg-bg-section text-brand-primary border-brand-accent/60 shadow-soft"
              : "text-text-primary border-transparent hover:bg-bg-section hover:text-brand-primary"
        }
      `}
    >
      {children}
    </Link>
  );
}

function HoverDropdown({ label, href, children, isActive }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <Link
        href={href}
        className={`
          px-4 py-2 text-sm tracking-wide
          rounded-full
          flex items-center gap-1 border
          transition-all duration-200
          ${
            isActive
              ? "bg-bg-section text-brand-primary border-brand-accent/60 shadow-soft hover:text-brand-primary hover:bg-bg-section"
              : "text-text-primary border-transparent hover:text-brand-primary hover:bg-brand-accent/30"
          }
        `}
      >
        {label}
        <span className="text-xs opacity-70">▾</span>
      </Link>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 mt-4 w-72 z-50"
          >
            <div
              className="
              rounded-2xl
              bg-brand-primary/75
              backdrop-blur-sm
              border border-border-light
              shadow-card
              p-3"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm text-text-inverse hover:text-brand-primary hover:bg-bg-section"
    >
      {label}
    </Link>
  );
}

/* =====================
   MOBILE COMPONENTS
===================== */

function MobileLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`
        block rounded-xl px-3 py-2 tracking-wide
        ${isActive ? "bg-bg-section text-brand-primary font-semibold" : "hover:bg-bg-section"}
      `}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({ title, open, onClick, children, isActive }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`
          flex w-full justify-between px-3 py-2 rounded-xl tracking-wide hover:bg-bg-section
          ${isActive ? "bg-bg-section text-brand-primary font-semibold" : ""}
        `}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-4 mt-2 space-y-1 border-l pl-3"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSubLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block px-2 py-1 text-sm tracking-wide hover:text-brand-primary"
    >
      {label}
    </Link>
  );
}
