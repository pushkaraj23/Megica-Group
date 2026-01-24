import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/common/SmoothScroller";

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
   ROOT LAYOUT (GLOBAL)
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
