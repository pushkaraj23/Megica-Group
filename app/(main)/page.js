import dynamic from "next/dynamic";
import HeroBanner from "@/components/global-presence/HeroBanner";

const AboutMegicaSection = dynamic(
  () => import("@/components/home/AboutMegicaSection"),
  { ssr: true, loading: () => <section className="min-h-[40vh] bg-bg-section" aria-hidden="true" /> }
);
const WhyMegicaSection = dynamic(
  () => import("@/components/home/WhyMegicaSection"),
  { ssr: true, loading: () => <section className="min-h-[30vh] bg-bg-main" aria-hidden="true" /> }
);
const CategoryWiseProductsSection = dynamic(
  () => import("@/components/home/CategoryWiseProductSection"),
  { ssr: true }
);
const ProductUSPSection = dynamic(
  () => import("@/components/home/ProductUSPSection"),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection"),
  { ssr: true }
);
const FullEnquirySection = dynamic(
  () => import("@/components/home/FullEnquirySection"),
  { ssr: true }
);

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
