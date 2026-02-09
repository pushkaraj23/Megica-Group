"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import InfinityLoader from "@/components/common/InfinityLoader";
import CustomCursor from "@/components/common/CustomPointer";
import SiteSwitcher from "@/components/common/SiteSwitcher";

export default function MainLayout({ children }) {
  return (
    <>
      <InfinityLoader />
      <Header />
      <main className="min-h-[calc(100svh-64px)] overflow-x-hidden">
        <CustomCursor />
        {children}
        <SiteSwitcher currentSite="main" />
      </main>
      <Footer />
    </>
  );
}

