import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-inverse)]">
      {/* NEWSLETTER */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl mb-2 text-brand-accent">Subscribe to our newsletter</h3>
            <p className="text-sm text-white/70">
              Get Early Access to New Collections and Specials!
            </p>
          </div>

          <form className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-transparent border border-white/30 px-4 py-3 text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent border border-white/30 px-4 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black uppercase text-sm px-6 py-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-12">
        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl text-brand-accent mb-6">Quick Links</h4>
          <div className="grid grid-cols-2 gap-y-3 text-sm text-white/80">
            <Link href="/sanitaryware/" className="hover:text-brand-accent transition">
              Home
            </Link>
            <Link href="/about#csr" className="hover:text-brand-accent transition">
              CSR Activities
            </Link>
            <Link href="/sanitaryware/about" className="hover:text-brand-accent transition">
              About Us
            </Link>
            <Link href="/about#certifications" className="hover:text-brand-accent transition">
              Certificates
            </Link>
            <Link href="/about#testimonials" className="hover:text-brand-accent transition">
              Testimonials
            </Link>
            <Link
              href="/sanitaryware/e-catalogue"
              className="hover:text-brand-accent transition"
            >
              E-Catalogue
            </Link>
            <Link href="/sanitaryware/blogs" className="hover:text-brand-accent transition">
              Blogs
            </Link>
            <Link href="/sanitaryware/contact" className="hover:text-brand-accent transition">
              Contact
            </Link>
          </div>
        </div>

        {/* BRAND INFO */}
        <div className="text-center">
          <p className="text-sm text-white/80 mb-6">
            Megica Sanitaryware is a premium manufacturer and exporter of
            high-quality sanitaryware products, committed to design, durability
            and global standards.
          </p>

          <div className="text-xl tracking-wide">
            MEGICA
            <span className="text-[var(--color-brand-accent)] ml-1">
              SANITARYWARE
            </span>
          </div>

          <div className="flex justify-center gap-5 mt-6 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit Megica on Facebook"
              className="hover:text-brand-accent transition"
            >
              f
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit Megica on LinkedIn"
              className="hover:text-brand-accent transition"
            >
              in
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit Megica on YouTube"
              className="hover:text-brand-accent transition"
            >
              ▶
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xl text-brand-accent mb-6">Contact</h4>
          <p className="text-sm text-white/80 leading-6">
            Megica Sanitaryware
            <br />
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

          <p className="text-sm mt-4 text-white/80">
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
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>© 2026 Megica Sanitaryware. All rights reserved.</span>
          <span>
            Powered by{" "}
            <a
              href="https://fibonce.com"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold hover:text-brand-accent transition"
            >
              Fibonce Tech Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
