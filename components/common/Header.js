"use client";

import Link from "next/link";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 bg-bg-main/90 backdrop-blur-md border-b border-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-1">
            <span className="font-heading text-xl font-extrabold text-brand-deep tracking-tight">
              Megica
            </span>
            <span className="font-heading text-xl font-semibold text-brand-primary">
              Group
            </span>
            <span className="text-brand-accent text-2xl leading-none">•</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink href="/">Home</NavLink>

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

            <NavLink href="/global-presence">Global Presence</NavLink>
            <NavLink href="/e-catalogue">E-Catalogue</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-md border border-light px-3 py-2 text-brand-deep"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-light bg-bg-main">
          <div className="px-5 py-4 space-y-3">
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
        </div>
      )}
    </header>
  );
}

/* =====================
   DESKTOP COMPONENTS
   ===================== */

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative font-medium text-text-primary transition hover:text-brand-primary
        after:absolute after:left-0 after:-bottom-1 after:h-[2px]
        after:w-0 after:bg-brand-accent after:transition-all
        hover:after:w-full"
    >
      {children}
    </Link>
  );
}

/* ✅ FIXED HOVER DROPDOWN */
function HoverDropdown({ label, children }) {
  return (
    <div className="group relative">
      {/* Trigger */}
      <span className="cursor-pointer font-medium text-text-primary transition group-hover:text-brand-primary">
        {label}
      </span>

      {/* Hover Buffer + Dropdown */}
      <div
        className="absolute left-0 top-full pt-3 w-64 opacity-0 translate-y-2
        pointer-events-none transition-all duration-200
        group-hover:opacity-100 group-hover:translate-y-0
        group-hover:pointer-events-auto"
      >
        <div className="rounded-xl bg-bg-main border border-light shadow-card">
          <div className="p-4 space-y-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function DropdownLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 text-sm text-text-secondary
        transition hover:bg-bg-section hover:text-brand-primary"
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
      className="block rounded-md px-3 py-2 font-medium text-text-primary hover:bg-bg-section"
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
        className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-text-primary hover:bg-bg-section"
      >
        {title}
        <span className="text-sm">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="ml-3 mt-2 space-y-1 border-l border-light pl-3">
          {children}
        </div>
      )}
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
