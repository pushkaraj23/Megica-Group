import AboutHeroSection from "@/components/about/AboutHeroSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import CSRSection from "@/components/about/CSRSection";
import MakeInIndiaSection from "@/components/about/MakeInIndiaSection";
import MegicaWorkshopSection from "@/components/about/WorkShopSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyMegicaSection from "@/components/home/WhyMegicaSection";
import FullEnquirySection from "@/components/home/FullEnquirySection";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <section id="about-megica">
        <AboutHeroSection />
      </section>

      <section id="why-megica">
        <WhyMegicaSection />
      </section>

      <section id="workshop">
        <MegicaWorkshopSection />
      </section>

      <section id="certifications">
        <CertificationsSection />
      </section>

      <section id="make-in-india">
        <MakeInIndiaSection />
      </section>

      <section id="csr">
        <CSRSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="enquiry">
        <FullEnquirySection />
      </section>
    </main>
  );
}
