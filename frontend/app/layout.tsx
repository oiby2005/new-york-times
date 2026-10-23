import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "The New York Times - Breaking News, US News, World News and Videos",
  description:
    "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate and more.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col font-nyt-sans bg-white text-[#121212]">
        {/* Hidden Google Translate container */}
        <div id="google_translate_element" className="hidden" aria-hidden="true" />
        
        {children}

        {/* Google Translate Init Script */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,es,zh-CN',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
