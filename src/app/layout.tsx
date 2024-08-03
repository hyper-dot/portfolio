import type { Metadata } from "next";
import { Josefin_Slab } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const font = Josefin_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshan Paudel - Fullstack Developer & Software Solutions Expert",
  description:
    "I'm Roshan Paudel, a Fullstack Developer proficient in TypeScript, React, Next.js, and NestJS. With a background in creating dynamic web applications and scalable solutions, I have worked on projects ranging from complex web applications to smooth animated landing pages. View my portfolio to see how I can help bring your web ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "flex min-h-screen flex-col")}>
        <Navigation />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
