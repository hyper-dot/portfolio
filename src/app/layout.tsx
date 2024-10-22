import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToasterWithLimit } from "@/components/ToasterWithLimits";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

// const font = Josefin_Slab({ subsets: ["latin"] });
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rosanpaudel.com.np"),
  title: "Roshan Paudel - Fullstack Developer & Software Solutions Expert",
  description:
    "I'm Roshan Paudel, a Fullstack Developer proficient in TypeScript, React, Next.js, and NestJS. With a background in creating dynamic web applications and scalable solutions, I have worked on projects ranging from complex web applications to smooth animated landing pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(font.className, "flex min-h-screen flex-col")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <ToasterWithLimit />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
