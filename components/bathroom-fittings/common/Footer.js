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
            <span>Home</span>
            <span>CSR Activities</span>
            <span>About Us</span>
            <span>Certificates</span>
            <span>Testimonials</span>
            <span>E-Catalogue</span>
            <span>Blogs</span>
            <span>Contact</span>
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
            <span>f</span>
            <span>in</span>
            <span>▶</span>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xl text-brand-accent mb-6">Contact</h4>
          <p className="text-sm text-white/80 leading-6">
            Corporate Office
            <br />
            Megica Sanitaryware
            <br />
            India
          </p>

          <p className="text-sm mt-4 text-white/80">
            P: +91 XXXXXXXXXX
            <br />
            E: export@megica.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <span>© 2026 Megica Sanitaryware. All rights reserved.</span>
          <span>
            Powered by <strong>Techno Bytes IT Solutions LLP</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
