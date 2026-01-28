"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

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
          <img src="/megica-logo1.png" alt="Megica Group" className="h-8" />
          <span className="text-brand-accent text-xl leading-none">•</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavPill href="/">Home</NavPill>

          <HoverDropdown label="About" href="/about">
            {aboutLinks.map((l) => (
              <DropdownLink key={l.href} href={l.href} label={l.label} />
            ))}
          </HoverDropdown>

          <HoverDropdown label="Product Portfolio" href="/products">
            {productLinks.map((l) => (
              <DropdownLink key={l.href} href={l.href} label={l.label} />
            ))}
          </HoverDropdown>

          <NavPill href="/global-presence">Global Presence</NavPill>
          <NavPill href="/e-catalogue">E-Catalogue</NavPill>

          <NavPill href="/contact" accent>
            Contact
          </NavPill>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-full border border-black/10 px-4 py-2 text-sm"
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
            <MobileLink href="/">Home</MobileLink>

            <MobileAccordion
              title="About"
              open={openSub === "about"}
              onClick={() => setOpenSub(openSub === "about" ? null : "about")}
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
            >
              {productLinks.map((l) => (
                <MobileSubLink key={l.href} href={l.href} label={l.label} />
              ))}
            </MobileAccordion>

            <MobileLink href="/global-presence">Global Presence</MobileLink>
            <MobileLink href="/e-catalogue">E-Catalogue</MobileLink>
            <MobileLink href="/contact">Contact</MobileLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =====================
   DESKTOP COMPONENTS
===================== */

function NavPill({ href, children, accent }) {
  return (
    <Link
      href={href}
      className={`
        px-4 py-2 text-sm tracking-wide rounded-full transition-all duration-200
        ${
          accent
            ? "bg-brand-accent text-black shadow-sm hover:brightness-110"
            : `
              text-text-primary
              hover:bg-bg-section hover
              hover:text-brand-primary
            `
        }
      `}
    >
      {children}
    </Link>
  );
}

function HoverDropdown({ label, href, children }) {
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
        className="
          px-4 py-2 text-sm tracking-wide
          text-text-primary
          rounded-full
          flex items-center gap-1
          transition-all duration-200
          hover:text-brand-primary
          hover:bg-brand-accent/30
        "
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

function MobileLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-3 py-2 tracking-wide hover:bg-bg-section"
    >
      {children}
    </Link>
  );
}

function MobileAccordion({ title, open, onClick, children }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex w-full justify-between px-3 py-2 rounded-xl tracking-wide hover:bg-bg-section"
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
