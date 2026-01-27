import AboutSanitaryware from "@/components/bathroom-fittings/home/AboutBathroomFittings";
import BlogsSection from "@/components/bathroom-fittings/home/BlogsSection";
import ContactEnquirySection from "@/components/bathroom-fittings/home/ContactEnquirySection";
import DealershipBanner from "@/components/bathroom-fittings/home/DealershipBanner";
import FeaturedProducts from "@/components/bathroom-fittings/home/FeaturedProducts";
import SanitarywareHero from "@/components/bathroom-fittings/home/HeroSection";
import TestimonialsSection from "@/components/bathroom-fittings/home/TestimonialSection";
import WhyChooseMegica from "@/components/bathroom-fittings/home/WhyChooseMegica";

export default function BathroomFittings() {
  return (
    <div>
      <SanitarywareHero />
      <AboutSanitaryware />
      <DealershipBanner />
      <FeaturedProducts />
      <WhyChooseMegica />
      <BlogsSection />
      <ContactEnquirySection />
      <TestimonialsSection />
    </div>
  );
}
