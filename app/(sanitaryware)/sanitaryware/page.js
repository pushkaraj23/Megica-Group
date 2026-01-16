import AboutSanitaryware from "@/components/sanitaryware/home/AboutSanitaryware";
import BlogsSection from "@/components/sanitaryware/home/BlogsSection";
import ContactEnquirySection from "@/components/sanitaryware/home/ContactEnquirySection";
import DealershipBanner from "@/components/sanitaryware/home/DealershipBanner";
import FeaturedProducts from "@/components/sanitaryware/home/FeaturedProducts";
import SanitarywareHero from "@/components/sanitaryware/home/HeroSection";
import WhyChooseMegica from "@/components/sanitaryware/home/WhyChooseMegica";

export default function SanitaryWare() {
  return (
    <div>
      <SanitarywareHero />
      <AboutSanitaryware />
      <DealershipBanner />
      <FeaturedProducts />
      <WhyChooseMegica />
      <BlogsSection />
      <ContactEnquirySection />
    </div>
  );
}
