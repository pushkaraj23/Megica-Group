import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "v7xet0xgo8");
          `}
        </Script>
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EGN22E922R"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EGN22E922R');
          `}
        </Script>
      </head>
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
        {children}
      </body>
    </html>
  );
}
