"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const pathname = usePathname();

  /* =========================
     SCROLL HIDE / SHOW
  ========================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* =========================
     CLOSE ON OUTSIDE CLICK
  ========================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { name: "Home", href: "/sanitaryware/" },
    { name: "About", href: "/sanitaryware/about" },
    { name: "Collection", href: "/sanitaryware/collection" },
    { name: "Export", href: "/sanitaryware/export" },
    { name: "E-Catalogue", href: "/sanitaryware/e-catalogue" },
    { name: "Blogs", href: "/sanitaryware/blogs" },
    { name: "Contact", href: "/sanitaryware/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div
          ref={headerRef}
          className="
            rounded-4xl
            bg-white/60
            backdrop-blur-xl
            border border-white/50
            shadow-card
          "
        >
          {/* =========================
              TOP BAR
          ========================== */}
          <div className="flex items-center justify-between h-16 px-6">
            {/* LOGO */}
            <Link
              href="/sanitaryware/"
              className="flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <img src="/megica-logo1.png" className="h-10" alt="Megica" />
              <span className="text-brand-primary text-xs uppercase tracking-widest font-semibold">
                Sanitaryware
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative
                      transition-colors
                      ${
                        isActive
                          ? "text-brand-primary"
                          : "text-black/70 hover:text-brand-primary"
                      }
                    `}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-brand-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-xl"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* =========================
              MOBILE MENU
          ========================== */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="lg:hidden overflow-hidden border-t border-white/30"
              >
                <nav className="flex flex-col px-6 py-6 gap-4 text-xs uppercase tracking-widest">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          ${
                            isActive
                              ? "text-brand-primary font-semibold"
                              : "text-black/70"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
