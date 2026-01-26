import CatalogueShowcase from "@/components/sanitaryware/catalogue/CatalogueShowcase";
import ECatalogueHero from "@/components/sanitaryware/catalogue/HeroSection";
import LetsConnectSection from "@/components/sanitaryware/catalogue/LetsConnectSanitaryware";
import ContactEnquirySection from "@/components/sanitaryware/home/ContactEnquirySection";

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
