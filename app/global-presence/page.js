import DealershipCTASection from "@/components/common/Dealership";
import GlobalDemandMap from "@/components/global-presence/GlobalDemandMap";
import GlobalPresenceHero from "@/components/global-presence/GlobalHeroSection";
import TestimonialsImagesSection from "@/components/global-presence/TestimonialsImagesSection";
import FullEnquirySection from "@/components/home/FullEnquirySection";

export default function GlobalPresence() {
  return (
    <div>
      <GlobalPresenceHero />
      <GlobalDemandMap />
      <TestimonialsImagesSection />
      <DealershipCTASection />
      <FullEnquirySection />
    </div>
  );
}
