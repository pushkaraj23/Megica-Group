"use client";

import dynamic from "next/dynamic";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const InfinityLoader = dynamic(
  () => import("@/components/common/InfinityLoader"),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("@/components/common/CustomPointer"),
  { ssr: false }
);
const SiteSwitcher = dynamic(
  () => import("@/components/common/SiteSwitcher"),
  { ssr: false }
);

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

