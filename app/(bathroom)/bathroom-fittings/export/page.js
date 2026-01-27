import ExportHeroSection from "@/components/bathroom-fittings/export/ExportHeroSection";
import GlobalExportMap from "@/components/bathroom-fittings/export/GlobalExportMap";
import KeepInTouchBanner from "@/components/bathroom-fittings/export/KeepInTouch";
import ContactEnquirySection from "@/components/bathroom-fittings/home/ContactEnquirySection";
import TestimonialsSection from "@/components/bathroom-fittings/home/TestimonialSection";

export default function ExportsPage() {
  return (
    <div className="overflow-hidden">
      <ExportHeroSection />
      <GlobalExportMap />
      <TestimonialsSection />
      <KeepInTouchBanner />
      <ContactEnquirySection />
    </div>
  );
}
