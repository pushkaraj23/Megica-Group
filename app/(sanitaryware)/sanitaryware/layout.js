import CustomCursor from "@/components/common/CustomPointer";
import Header from "@/components/sanitaryware/common/Header";
import Footer from "@/components/sanitaryware/common/Footer";
import InfinityLoader from "@/components/common/InfinityLoader";
import SiteSwitcher from "@/components/common/SiteSwitcher";

export default function SanitarywareLayout({ children }) {
  return (
    <>
      <InfinityLoader />
      <CustomCursor />
      <Header />
      <main className="min-h-screen bg-bg-main overflow-x-hidden">
        {children}
        <SiteSwitcher currentSite="sanitaryware" />
      </main>
      <Footer />
    </>
  );
}
