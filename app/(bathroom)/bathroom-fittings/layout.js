import Header from "@/components/bathroom-fittings/common/Header";
import Footer from "@/components/bathroom-fittings/common/Footer";
import InfinityLoader from "@/components/common/InfinityLoader";
import CustomCursor from "@/components/common/CustomPointer";

export default function SanitarywareLayout({ children }) {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="min-h-screen bg-bg-main overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}
