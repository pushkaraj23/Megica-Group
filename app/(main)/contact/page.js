import ContactMapSection from "@/components/contact/ContactsMap";
import ContactHeroSection from "@/components/contact/HeroSection";
import LetsConnectSection from "@/components/e-catalogue/LetsConnectSection";
import FullEnquirySection from "@/components/home/FullEnquirySection";

export default function ContactUsPage() {
  return (
    <div>
      <ContactHeroSection />
      <LetsConnectSection />
      <ContactMapSection />
      <FullEnquirySection />
    </div>
  );
}
