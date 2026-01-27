import SanitarywareBenefitsSection from "@/components/bathroom-fittings/collection/BenefitsSection";
import MegicaBusinessHeadSection from "@/components/bathroom-fittings/collection/BusinessheadSection";
import SanitarywareCollectionHero from "@/components/bathroom-fittings/collection/CollectionHeroSection";
import CollectionIntroSection from "@/components/bathroom-fittings/collection/CollectionIntro";
import SanitarywareImpactSection from "@/components/bathroom-fittings/collection/ImpactSection";
import SanitarywareCategoryParallax from "@/components/bathroom-fittings/collection/SanitarywareCategoryParallax";
import SanitarywareUsesSection from "@/components/bathroom-fittings/collection/UsesSection";
import ContactEnquirySection from "@/components/bathroom-fittings/home/ContactEnquirySection";
import WhyChooseMegica from "@/components/bathroom-fittings/home/WhyChooseMegica";

export default function CollectionsPage() {
  return (
    <div>
      <SanitarywareCollectionHero />
      <CollectionIntroSection />
      <SanitarywareCategoryParallax />
      <WhyChooseMegica />
      <SanitarywareUsesSection />
      <SanitarywareBenefitsSection />
      <SanitarywareImpactSection />
      <MegicaBusinessHeadSection />
      <ContactEnquirySection />
    </div>
  );
}
