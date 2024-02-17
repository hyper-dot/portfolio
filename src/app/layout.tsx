import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { jetBrains } from "@/lib/typography";

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

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
        className={`custom-scrollbar pb-20 md:pb-0 min-h-screen ${jetBrains.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBar />
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-PVJCEKSNN8" />
      </body>
    </html>
  );
}
