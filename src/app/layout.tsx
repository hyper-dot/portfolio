import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { nunito } from "@/lib/typography";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Roshan Paudel",
  description: "Full Stack Developer | Roshan Paudel",
  keywords: "Roshan Paudel, developer, fullstack, self-taught",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`custom-scrollbar relative transition-colors duration-100 pb-20 md:pb-0 min-h-screen ${nunito.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          <main className="min-h-screen flex flex-col">
            <Navigation />
            {children}
            <Toaster />
            <Footer />
          </main>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-PVJCEKSNN8" />
        <Analytics />
      </body>
    </html>
  );
}
