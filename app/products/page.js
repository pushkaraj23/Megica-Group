import DealershipCTASection from "@/components/common/Dealership";
import FullEnquirySection from "@/components/home/FullEnquirySection";
import WhyMegicaSection from "@/components/home/WhyMegicaSection";
import FeaturedProductsSection from "@/components/products/FeaturedProductsSection";
import ProductHeroSection from "@/components/products/HeroSection";
import ProductCategoriesSection from "@/components/products/ProductsCategoriesSection";

export default function ProductPage() {
  return (
    <div>
      {/* HERO */}
      <section id="products-hero">
        <ProductHeroSection />
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="product-categories">
        <ProductCategoriesSection />
      </section>

      {/* FEATURED / PREMIUM PRODUCTS */}
      <section id="featured-products">
        <FeaturedProductsSection />
      </section>

      {/* DEALERSHIP CTA */}
      <section id="dealership">
        <DealershipCTASection />
      </section>

      {/* WHY MEGICA */}
      <section id="why-megica">
        <WhyMegicaSection />
      </section>

      {/* ENQUIRY */}
      <section id="enquiry">
        <FullEnquirySection />
      </section>
    </div>
  );
}
