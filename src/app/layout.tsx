import type { Metadata } from "next";
import { Josefin_Slab } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const font = Josefin_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshan Paudel",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(font.className, "flex h-full min-h-screen flex-col")}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
