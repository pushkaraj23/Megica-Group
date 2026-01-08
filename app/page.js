import AboutMegicaSection from "@/components/home/AboutMegicaSection";
import CategoryWiseProductsSection from "@/components/home/CategoryWiseProductSection";
import HeroBanner from "@/components/home/HeroBanner";
import WhyMegicaSection from "@/components/home/WhyMegicaSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroBanner />
      <AboutMegicaSection />
      <WhyMegicaSection />
      <CategoryWiseProductsSection />
    </main>
  );
}
