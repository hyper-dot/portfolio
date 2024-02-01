"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { Briefcase, UserRound, Mail, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import path from "node:path/win32";

const menus = [
  {
    title: "Home",
    icon: <Home size={20} strokeWidth={1} />,
    href: "/",
  },
  {
    title: "About",
    icon: <UserRound size={20} strokeWidth={1} />,
    href: "/about",
  },

  {
    title: "Portfolio",
    icon: <Briefcase size={20} strokeWidth={1} />,
    href: "/portfolio",
  },

  {
    title: "Contact",
    icon: <Mail size={20} strokeWidth={1} />,
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="p-4 hidden md:block">
        <div className="max-w-3xl gap-8 mx-auto flex justify-center items-center">
          {menus.map(
            (m, idx) =>
              m.href !== "/" && (
                <Link
                  href={m.href}
                  className="hover:text-muted-foreground transition inline-flex gap-1 items-center  duration-300"
                >
                  {m.icon}
                  {m.title}
                </Link>
              ),
          )}
          <ThemeSwitcher />
        </div>
      </nav>

      <nav className="md:hidden w-full h-16 bottom-0 fixed z-10">
        <div className="w-full justify-around backdrop-blur-xl px-4 h-full items-center flex">
          {menus.map((m) => (
            <div
              className={`w-12 flex items-center justify-center h-12 rounded-full  ${pathname === m.href && "bg-primary-foreground"}`}
            >
              <Link href={m.href}>{m.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
