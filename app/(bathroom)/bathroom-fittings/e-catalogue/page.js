import CatalogueShowcase from "@/components/bathroom-fittings/catalogue/CatalogueShowcase";
import ECatalogueHero from "@/components/bathroom-fittings/catalogue/HeroSection";
import LetsConnectSection from "@/components/bathroom-fittings/catalogue/LetsConnectSanitaryware";
import ContactEnquirySection from "@/components/bathroom-fittings/home/ContactEnquirySection";

export default function CataloguesPage() {
  return (
    <div className="overflow-hidden h-fit">
      <ECatalogueHero />
      <CatalogueShowcase />
      <LetsConnectSection />
      <ContactEnquirySection />
    </div>
  );
}
