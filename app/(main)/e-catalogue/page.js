import DealershipCTASection from "@/components/common/Dealership";
import ECatalogueHeroSection from "@/components/e-catalogue/HeroSection";
import LetsConnectSection from "@/components/e-catalogue/LetsConnectSection";
import FullEnquirySection from "@/components/home/FullEnquirySection";

export default function ECatalogue() {
  return (
    <div>
      <ECatalogueHeroSection />
      <LetsConnectSection />
      <DealershipCTASection />
      <FullEnquirySection />
    </div>
  );
}
