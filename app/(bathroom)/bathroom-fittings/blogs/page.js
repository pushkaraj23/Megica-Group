import BlogListSection from "@/components/sanitaryware/blogs/BlogListSection";
import BlogHero from "@/components/sanitaryware/blogs/HeroBanner";
import ContactEnquirySection from "@/components/sanitaryware/home/ContactEnquirySection";

export default function BlogsPage() {
  return (
    <div className="overflow-hidden h-fit">
      <BlogHero />
      <BlogListSection />
      <ContactEnquirySection />
    </div>
  );
}
