"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const aboutLinks = [
    { label: "About Megica Group", href: "/about/megica-group" },
    { label: "Why Megica Group", href: "/about/why-megica" },
    { label: "Megica Workshop", href: "/about/workshop" },
    { label: "Why Megica Dealership", href: "/about/dealership" },
    { label: "CSR Activities", href: "/about/csr" },
    { label: "Client Testimonials", href: "/about/testimonials" },
    { label: "Certifications", href: "/about/certifications" },
  ];

  const productLinks = [
    { label: "Category Wise Products", href: "/products/categories" },
    { label: "All Products", href: "/products" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* GLASS BAR */}
      <div className="bg-bg-main/75 backdrop-blur-xl border-b border-light shadow-soft">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-bg-section"
            >
              <img
                src="/megica-logo1.png"
                className="h-8 transition-transform duration-300 group-hover:scale-105"
                alt="Megica Group"
              />
              <div className="leading-tight">
                <div className="font-heading text-lg font-extrabold text-brand-deep">
                  Megica
                </div>
                <div className="text-xs font-semibold text-brand-primary tracking-wide">
                  Group of Companies
                </div>
              </div>
              <span className="text-brand-accent text-2xl leading-none">•</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-3">
              <NavPill href="/">Home</NavPill>

              <HoverDropdown label="About">
                {aboutLinks.map((item) => (
                  <DropdownLink key={item.href} {...item} />
                ))}
              </HoverDropdown>

              <HoverDropdown label="Product Portfolio">
                {productLinks.map((item) => (
                  <DropdownLink key={item.href} {...item} />
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
              className="lg:hidden rounded-xl border border-light px-3 py-2 text-brand-deep hover:bg-bg-section"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden bg-bg-main border-b border-light shadow-soft"
          >
            <div className="px-5 py-5 space-y-3">
              <MobileLink href="/">Home</MobileLink>

              <MobileAccordion
                title="About"
                open={openSub === "about"}
                onClick={() => setOpenSub(openSub === "about" ? null : "about")}
              >
                {aboutLinks.map((l) => (
                  <MobileSubLink key={l.href} {...l} />
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
                  <MobileSubLink key={l.href} {...l} />
                ))}
              </MobileAccordion>

              <MobileLink href="/global-presence">Global Presence</MobileLink>
              <MobileLink href="/e-catalogue">E-Catalogue</MobileLink>
              <MobileLink href="/contact">Contact</MobileLink>
            </div>
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
        relative rounded-xl px-4 py-2 text-sm font-semibold transition
        ${
          accent
            ? "bg-brand-accent text-brand-deep hover:opacity-90"
            : "text-text-primary hover:bg-bg-section hover:text-brand-primary"
        }
      `}
    >
      {children}
    </Link>
  );
}

function HoverDropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-bg-section hover:text-brand-primary">
        {label}
      </span>

      <div className="absolute left-0 top-full h-3 w-full" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-full mt-4 w-72 z-50"
          >
            <div className="rounded-2xl bg-bg-main/95 backdrop-blur-xl border border-light shadow-card">
              <div className="p-4 space-y-1">{children}</div>
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
      className="block rounded-lg px-3 py-2 text-sm text-text-secondary transition hover:bg-bg-section hover:text-brand-primary"
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
      className="block rounded-xl px-3 py-2 font-semibold text-text-primary hover:bg-bg-section"
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
        className="flex w-full items-center justify-between rounded-xl px-3 py-2 font-semibold text-text-primary hover:bg-bg-section"
      >
        {title}
        <span className="text-sm">{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-3 mt-2 space-y-1 border-l border-light pl-3"
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
      className="block px-2 py-1 text-sm text-text-secondary hover:text-brand-primary"
    >
      {label}
    </Link>
  );
}
