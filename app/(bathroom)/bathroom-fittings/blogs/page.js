import BlogListSection from "@/components/bathroom-fittings/blogs/BlogListSection";
import BlogHero from "@/components/bathroom-fittings/blogs/HeroBanner";
import ContactEnquirySection from "@/components/bathroom-fittings/home/ContactEnquirySection";

export default function BlogsPage() {
  return (
    <div className="overflow-hidden h-fit">
      <BlogHero />
      <BlogListSection />
      <ContactEnquirySection />
    </div>
  );
}
