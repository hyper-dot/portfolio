import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { jetBrains } from "@/lib/typography";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/react";

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Roshan Paudel",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`custom-scrollbar relative transition-colors duration-100 pb-20 md:pb-0 min-h-screen ${jetBrains.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute right-3 top-3">
            <ThemeSwitcher />
          </div>
          <ProgressBar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-PVJCEKSNN8" />
        <Analytics />
      </body>
    </html>
  );
}
