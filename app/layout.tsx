import "./css/style.css";

import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { PHProvider, PostHogPageview } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "GWC | Professionele Website & Webshop Ontwikkeling",
  description: "GWC bouwt professionele websites en webshops voor ambitieuze ondernemers. Van bedrijfswebsites tot e-commerce oplossingen in Nederland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* Preconnect to iframe domain for faster loading */}
        <link rel="preconnect" href="https://aiwebgen.io" />
        <link rel="dns-prefetch" href="https://aiwebgen.io" />
      </head>
      <body
        className={`${inter.variable} bg-gray-900 font-inter tracking-tight text-gray-100 antialiased`}
      >
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageview />
          </Suspense>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              {children}
            </div>
          </LanguageProvider>
        </PHProvider>

        {/* Botpress Chat Widget */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/08/04/21/20250804214422-O7X7DHBH.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
