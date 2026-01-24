import AboutUsHero from "@/components/sanitaryware/about/AboutUsHero";
import CertificatesStrip from "@/components/sanitaryware/about/CertificatesStrip";
import CSRSection from "@/components/sanitaryware/about/CSRSection";
import DealershipSection from "@/components/sanitaryware/about/DealershipSection";
import MissionVisionSection from "@/components/sanitaryware/about/MissionVisionSection";
import WhyMegicaSection from "@/components/sanitaryware/about/WhyMegicaSection";
import TestimonialsSection from "@/components/sanitaryware/home/TestimonialSection";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsHero />
      <MissionVisionSection />
      <WhyMegicaSection />
      <CSRSection />
      <DealershipSection />
      <TestimonialsSection />
      <CertificatesStrip />
    </div>
  );
}
