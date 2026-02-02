import DealershipCTASection from "@/components/common/Dealership";
import ECatalogueHeroSection from "@/components/e-catalogue/HeroSection";
import AllCataloguesSection from "@/components/e-catalogue/AllCataloguesSection";
import LetsConnectSection from "@/components/e-catalogue/LetsConnectSection";
import FullEnquirySection from "@/components/home/FullEnquirySection";

export default function ECatalogue() {
  return (
    <div>
      <ECatalogueHeroSection />
      <AllCataloguesSection />
      <LetsConnectSection />
      <DealershipCTASection />
      <FullEnquirySection />
    </div>
  );
}
