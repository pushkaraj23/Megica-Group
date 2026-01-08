import Link from "next/link";
// import Header from "@/components/common/Header";
// import Footer from "@/components/common/Footer";

export default function SanitarywareLayout({ children }) {
  return (
    <>
      {/* Global Megica Header */}
      {/* <Header /> */}

      {/* =========================
          SECTION HERO
      ========================== */}
      <section className="relative bg-bg-dark text-inverse overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold tracking-wide text-brand-accent">
            PRODUCT CATEGORY
          </p>

          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-inverse">
            Sanitaryware
          </h1>

          <p className="mt-4 max-w-3xl text-bg-light text-base sm:text-lg leading-relaxed">
            Export-ready sanitaryware engineered for hygiene, durability, and
            modern design. Trusted for residential, commercial, and
            infrastructure projects worldwide.
          </p>
        </div>
      </section>

      {/* =========================
          SECTION TABS
      ========================== */}
      <div className="sticky top-16 z-40 bg-bg-main/90 backdrop-blur border-b border-light">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-6 overflow-x-auto py-3 text-sm font-semibold text-text-secondary">
            <SectionTab href="/sanitaryware">Overview</SectionTab>
            <SectionTab href="/sanitaryware/products">Products</SectionTab>
            <SectionTab href="/sanitaryware/about">About</SectionTab>
            <SectionTab href="/sanitaryware/contact">Enquiry</SectionTab>
          </nav>
        </div>
      </div>

      {/* =========================
          SECTION CONTENT
      ========================== */}
      <main className="min-h-screen bg-bg-main overflow-x-hidden">
        {children}
      </main>

      {/* Global Footer */}
      {/* <Footer /> */}
    </>
  );
}

/* =========================
   TAB COMPONENT
========================= */

function SectionTab({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative whitespace-nowrap px-1 py-2
        transition
        hover:text-brand-primary
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:bg-brand-accent
        after:transition-all
        hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}
