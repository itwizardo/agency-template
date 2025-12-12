import "./css/style.css";

import { Inter } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "YourBrand | Professional Website & Webshop Development",
  description: "We build professional websites and webshops for ambitious entrepreneurs. From business websites to e-commerce solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to iframe domain for faster loading */}
        <link rel="preconnect" href="https://aiwebgen.io" />
        <link rel="dns-prefetch" href="https://aiwebgen.io" />
      </head>
      <body
        className={`${inter.variable} bg-gray-900 font-inter tracking-tight text-gray-100 antialiased`}
      >
        <LanguageProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </LanguageProvider>

        {/* Botpress Chat Widget - Replace YOUR_BOT_ID with your actual Botpress bot ID */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
          strategy="lazyOnload"
        />
        <Script id="botpress-config" strategy="lazyOnload">
          {`
            window.botpress = window.botpress || {};
            window.botpress.config = {
              botId: "YOUR_BOT_ID",
              clientId: "YOUR_CLIENT_ID",
              hostUrl: "https://cdn.botpress.cloud/webchat/v2.2",
              messagingUrl: "https://messaging.botpress.cloud",
              botName: "YourBrand Assistant",
              avatarUrl: "",
              stylesheet: "",
              showPoweredBy: false,
              theme: "prism",
              themeColor: "#2563EB",
              useSessionStorage: true,
              enableConversationDeletion: true,
              showCloseButton: true,
              closeOnEscape: true,
              containerWidth: "100%25",
              layoutWidth: "100%25"
            };
          `}
        </Script>
      </body>
    </html>
  );
}
