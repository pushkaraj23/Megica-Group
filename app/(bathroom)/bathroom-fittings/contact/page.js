import { ContactTrustBanner } from "@/components/bathroom-fittings/contact/ContactTrustBanner";
import { ContactHeroSection } from "@/components/bathroom-fittings/contact/HeroSectionContact";
import ContactEnquirySection from "@/components/bathroom-fittings/home/ContactEnquirySection";

export default function ContactUsPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactTrustBanner />
      <ContactEnquirySection />
    </div>
  );
}
