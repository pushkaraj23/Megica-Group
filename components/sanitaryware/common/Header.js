"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div
          className="
            bg-white/50 border border-white/60 text-black
            shadow-card
            rounded-full
            backdrop-blur-lg
          "
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* LOGO */}
            <Link href="/sanitaryware/" className="flex relative px-3 py-1 rounded-full items-center gap-3">
              <img src="/megica-logo1.png" className="h-12" alt="logo" />
              <span className="text-brand-primary font-semibold text-sm uppercase tracking-widest">
                Sanitaryware
              </span>
              {/* <div className="bg-white/75 h-full rounded-full -z-10 blur-2xl -left-3 w-full absolute "></div> */}
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex gap-8 text-sm font-semibold px-5 tracking-wider">
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/"
              >
                Home
              </Link>
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/about"
              >
                About
              </Link>
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/collection"
              >
                Collection
              </Link>
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/export"
              >
                Export
              </Link>
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/e-catalogue"
              >
                E-Catalogue
              </Link>
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/blogs"
              >
                Blogs
              </Link>
              <Link
                className="hover:text-brand-primary"
                href="/sanitaryware/contact"
              >
                Contact
              </Link>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* MOBILE NAV */}
          {open && (
            <div className="lg:hidden border-t border-white/10">
              <nav className="flex flex-col px-6 py-5 gap-4 text-xs uppercase tracking-wider">
                <Link href="/sanitaryware/">Home</Link>
                <Link href="/sanitaryware/about">About</Link>
                <Link href="/sanitaryware/collection">Collection</Link>
                <Link href="/sanitaryware/export">Export</Link>
                <Link href="/sanitaryware/e-catalogue">E-Catalogue</Link>
                <Link href="/sanitaryware/blogs">Blogs</Link>
                <Link href="/sanitaryware/contact">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
