import ExportHeroSection from "@/components/sanitaryware/export/ExportHeroSection";
import GlobalExportMap from "@/components/sanitaryware/export/GlobalExportMap";
import KeepInTouchBanner from "@/components/sanitaryware/export/KeepInTouch";
import ContactEnquirySection from "@/components/sanitaryware/home/ContactEnquirySection";
import TestimonialsSection from "@/components/sanitaryware/home/TestimonialSection";

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
