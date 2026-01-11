import AboutMegicaSection from "@/components/home/AboutMegicaSection";
import CategoryWiseProductsSection from "@/components/home/CategoryWiseProductSection";
import FullEnquirySection from "@/components/home/FullEnquirySection";
import HeroBanner from "@/components/home/HeroBanner";
import ProductUSPSection from "@/components/home/ProductUSPSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyMegicaSection from "@/components/home/WhyMegicaSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroBanner />
      <AboutMegicaSection />
      <WhyMegicaSection />
      <CategoryWiseProductsSection />
      <ProductUSPSection />
      <TestimonialsSection />
      <FullEnquirySection />
    </main>
  );
}
