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
        <title>
          Megica Group | Sanitaryware &amp; Bathroom Fittings Manufacturer
        </title>
        <meta
          name="description"
          content="Megica Group is an export-focused manufacturer of sanitaryware and bathroom fittings from India, supplying distributors, developers and OEM partners worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.megicagroup.com" />

        {/* Meta Pixel Code - lazyOnload to avoid blocking FCP/LCP */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '673723048523292');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}

        <Script id="clarity" strategy="lazyOnload">
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
          strategy="lazyOnload"
        />
        <Script id="ga4" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EGN22E922R');
          `}
        </Script>

        {/* PageSense Analytics */}
        <Script
          src="https://cdn-in.pagesense.io/js/megicainternationalprivateli/2e28c48112ff4c7b93196f92786dd509.js"
          strategy="lazyOnload"
        />
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
