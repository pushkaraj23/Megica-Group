import { ContactTrustBanner } from "@/components/sanitaryware/contact/ContactTrustBanner";
import { ContactHeroSection } from "@/components/sanitaryware/contact/HeroSectionContact";
import ContactEnquirySection from "@/components/sanitaryware/home/ContactEnquirySection";

export default function ContactUsPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactTrustBanner />
      <ContactEnquirySection />
    </div>
  );
}
