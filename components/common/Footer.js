import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-inverse">
      {/* =======================
          TOP FOOTER
      ======================= */}
      <div className="mx-auto px-6 py-16">
        <div className="grid gap-20 max-sm:gap-10 md:grid-cols-5">
          {/* BRAND */}
          <div className="col-span-1 md:col-span-2">
            <div className="p-3 bg-bg-section w-3/4 rounded-3xl mb-5">
              <img src="/megica-logo1.png" alt="Megica Group" width={180} height={48} className="max-w-full h-auto" />
            </div>

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
            <h4 className="font-heading text-lg text-brand-muted font-semibold mb-4">
              About Us
            </h4>
            <ul className="space-y-2 text-sm text-bg-light">
              <FooterLink href="/about#about-megica">
                About Megica Group
              </FooterLink>
              <FooterLink href="/about#why-megica">Why Megica Group</FooterLink>
              <FooterLink href="/about#workshop">
                Workshop & Manufacturing
              </FooterLink>
              <FooterLink href="/about#certifications">
                Certifications & Compliance
              </FooterLink>
              <FooterLink href="/about#make-in-india">Make In India</FooterLink>
              <FooterLink href="/about#csr">CSR Activities</FooterLink>
              <FooterLink href="/about#testimonials">
                Client Testimonials
              </FooterLink>
              <FooterLink href="/about#enquiry">Enquiry Form</FooterLink>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-heading text-brand-muted text-lg font-semibold mb-4">
              Product Portfolio
            </h4>
            <ul className="space-y-2 text-sm text-bg-light">
              <FooterLink href="/products#products-hero">
                Product Overview
              </FooterLink>
              <FooterLink href="/products#product-categories">
                Product Categories
              </FooterLink>
              <FooterLink href="/products#featured-products">
                Featured Products
              </FooterLink>
              <FooterLink href="/products#dealership">
                Dealership Opportunity
              </FooterLink>
              <FooterLink href="/products#why-megica">Why Megica</FooterLink>
              <FooterLink href="/products#enquiry">Send Enquiry</FooterLink>
            </ul>
          </div>

          {/* CONTACT & CTA */}
          <div>
            <h4 className="font-heading text-lg text-brand-muted font-semibold mb-4">
              Contact
            </h4>

            <p className="text-sm text-bg-light leading-relaxed">
              Megica Group of Companies
              <br />
              Shop No. 505, Fifth Floor,
              <br />
              Shivam Plaza, Morbi–Halvad Rd,
              <br />
              Opp. WTC, Near ITI,
              <br />
              Mahendranagar, Morbi,
              <br />
              Gujarat – 363642, India
            </p>

            <p className="mt-3 text-sm text-bg-light">
              <a
                href="tel:+919560690006"
                className="hover:underline hover:text-brand-accent transition"
              >
                📞 +91 95606 90006
              </a>
              <br />
              <a
                href="tel:+918080500515"
                className="hover:underline hover:text-brand-accent transition"
              >
                📞 +91 80805 00515
              </a>
              <br />
              <a
                href="mailto:samar@megicagroup.com"
                className="hover:underline hover:text-brand-accent transition"
              >
                ✉️ samar@megicagroup.com
              </a>
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/about#enquiry"
                className="inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-deep transition hover:opacity-90"
              >
                Send Enquiry
              </Link>

              <Link
                href="/products#dealership"
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
