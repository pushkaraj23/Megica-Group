import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

/* ------------------------------
   FONT SETUP
-------------------------------- */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/* ------------------------------
   ROOT LAYOUT
-------------------------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          ${manrope.variable}
          font-body
          bg-bg-main
          text-text-primary
          antialiased
        `}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-[calc(100svh-64px)] overflow-x-hidden">
          {children}
        </main>

        {/* Optional: Footer later */}
        <Footer />
      </body>
    </html>
  );
}
