import SanitarywareBenefitsSection from "@/components/collection/BenefitsSection";
import SanitarywareCollectionHero from "@/components/collection/CollectionHeroSection";
import CollectionIntroSection from "@/components/collection/CollectionIntro";
import SanitarywareImpactSection from "@/components/collection/ImpactSection";
import SanitarywareCategoryParallax from "@/components/collection/SanitarywareCategoryParallax";
import SanitarywareUsesSection from "@/components/collection/UsesSection";
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
    </div>
  );
}
