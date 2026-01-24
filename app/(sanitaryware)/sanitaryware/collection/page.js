import SanitarywareBenefitsSection from "@/components/sanitaryware/collection/BenefitsSection";
import MegicaBusinessHeadSection from "@/components/sanitaryware/collection/BusinessheadSection";
import SanitarywareCollectionHero from "@/components/sanitaryware/collection/CollectionHeroSection";
import CollectionIntroSection from "@/components/sanitaryware/collection/CollectionIntro";
import SanitarywareImpactSection from "@/components/sanitaryware/collection/ImpactSection";
import SanitarywareCategoryParallax from "@/components/sanitaryware/collection/SanitarywareCategoryParallax";
import SanitarywareUsesSection from "@/components/sanitaryware/collection/UsesSection";
import ContactEnquirySection from "@/components/sanitaryware/home/ContactEnquirySection";
import WhyChooseMegica from "@/components/sanitaryware/home/WhyChooseMegica";

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
