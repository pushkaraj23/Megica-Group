import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-inverse">
      {/* =======================
          TOP FOOTER
      ======================= */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="font-heading text-2xl text-white font-extrabold">
              Megica Group
              <span className="text-brand-accent">.</span>
            </h3>

            <p className="mt-4 text-sm text-bg-light leading-relaxed">
              Megica Group of Companies is a globally focused manufacturer and
              exporter of premium sanitaryware and bathroom fittings. Built in
              India, trusted across international markets for quality,
              durability, and innovation.
            </p>

            <p className="mt-4 text-xs text-bg-light">
              Made in India • Trusted Worldwide
            </p>
          </div>

          {/* ABOUT LINKS */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              About Us
            </h4>
            <ul className="space-y-2 text-sm text-bg-light">
              <FooterLink href="/about/megica-group">
                About Megica Group
              </FooterLink>
              <FooterLink href="/about/why-megica">Why Megica Group</FooterLink>
              <FooterLink href="/about/workshop">Megica Workshop</FooterLink>
              <FooterLink href="/about/dealership">Why Dealership</FooterLink>
              <FooterLink href="/about/csr">CSR Activities</FooterLink>
              <FooterLink href="/about/certifications">
                Certifications
              </FooterLink>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Product Portfolio
            </h4>
            <ul className="space-y-2 text-sm text-bg-light">
              <FooterLink href="/products/categories">
                Category Wise Products
              </FooterLink>
              <FooterLink href="/products">All Products</FooterLink>
              <FooterLink href="/e-catalogue">Download E-Catalogue</FooterLink>
              <FooterLink href="/global-presence">Global Presence</FooterLink>
            </ul>
          </div>

          {/* CONTACT & CTA */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>

            <p className="text-sm text-bg-light leading-relaxed">
              Megica Group of Companies
              <br />
              Manufacturing & Export Division
              <br />
              India
            </p>

            <p className="mt-3 text-sm text-bg-light">
              📞 +91 XXXXX XXXXX
              <br />
              ✉️ info@megicagroup.com
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-deep transition hover:opacity-90"
              >
                Send Enquiry
              </Link>

              <Link
                href="/about/dealership"
                className="inline-flex items-center justify-center rounded-md border border-brand-accent px-4 py-2 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-brand-deep"
              >
                Become a Dealer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          BOTTOM FOOTER
      ======================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-bg-light">
          <p>
            © {new Date().getFullYear()} Megica Group of Companies. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =======================
   HELPERS
======================= */

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-brand-accent">
        {children}
      </Link>
    </li>
  );
}
