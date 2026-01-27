import AboutUsHero from "@/components/bathroom-fittings/about/AboutUsHero";
import CertificatesStrip from "@/components/bathroom-fittings/about/CertificatesStrip";
import CSRSection from "@/components/bathroom-fittings/about/CSRSection";
import DealershipSection from "@/components/bathroom-fittings/about/DealershipSection";
import MissionVisionSection from "@/components/bathroom-fittings/about/MissionVisionSection";
import WhyMegicaSection from "@/components/bathroom-fittings/about/WhyMegicaSection";
import TestimonialsSection from "@/components/bathroom-fittings/home/TestimonialSection";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsHero />
      <CertificatesStrip />
      <MissionVisionSection />
      <WhyMegicaSection />
      <CSRSection />
      <DealershipSection />
      <TestimonialsSection />
    </div>
  );
}
