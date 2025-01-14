import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Joseph's Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body style={{ fontFamily: "Arial, sans-serif" }} className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P53E5HP93G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P53E5HP93G');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
