"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { Briefcase, UserRound, Mail, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { jetBrains } from "@/lib/typography";

const menus = [
  {
    title: "Home",
    icon: <Home size={16} />,
    href: "/",
  },
  {
    title: "About",
    icon: <UserRound size={16} />,
    href: "/about",
  },

  {
    title: "Portfolio",
    icon: <Briefcase size={16} />,
    href: "/portfolio",
  },

  {
    title: "Contact",
    icon: <Mail size={16} />,
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className={`p-4 hidden md:block ${jetBrains.className}`}>
        <div className="max-w-3xl gap-8 mx-auto flex justify-center items-center">
          {menus.map((m, idx) => (
            <Link
              key={idx}
              href={m.href}
              className={cn(
                "link text-sm font-medium relative text-muted-foreground hover:text-foreground transition inline-flex gap-1 items-center duration-300",
                pathname === m.href && "text-foreground",
              )}
            >
              {m.icon}
              {m.title}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>
      </nav>

      <nav className="md:hidden w-full h-16 bottom-0 fixed z-10">
        <div className="w-full justify-around backdrop-blur-xl px-4 h-full items-center flex bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]">
          {menus.map((m, idx) => (
            <div
              key={idx}
              className={`w-12 flex items-center justify-center h-12 rounded-full  ${pathname === m.href && "bg-primary-foreground"}`}
            >
              <Link href={m.href}>{m.icon}</Link>
            </div>
          ))}
          <ThemeSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
