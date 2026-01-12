import AboutHeroSection from "@/components/about/AboutHeroSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import MegicaWorkshopSection from "@/components/about/WorkShopSection";
import WhyMegicaSection from "@/components/home/WhyMegicaSection";

export default function AboutUsPage() {
  return (
    <div>
      <AboutHeroSection />
      <WhyMegicaSection />
      <MegicaWorkshopSection />
      <CertificationsSection />
    </div>
  );
}
