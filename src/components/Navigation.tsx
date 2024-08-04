"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { IoIosChatbubbles } from "react-icons/io";
import MenuIcon from "./MenuIcon";
import ThemeSwitcher from "./ThemeSwitcher";

const menus = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Blogs", to: "/blogs" },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Say Hi", to: "/contact", icon: <IoIosChatbubbles size={52} /> },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="z-50 flex items-center justify-between px-8 py-4">
      <Logo />

      <h1 className="flex-1 -translate-x-[20px] text-center">
        {menus.find((m) => m.to == pathname)?.title}
      </h1>

      <ThemeSwitcher />

      <MenuIcon open={open} setOpen={setOpen} />

      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500",
          open ? "clip-path-circle-open" : "clip-path-circle-close",
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-12 bg-primary text-5xl font-thin text-primary-foreground">
          {menus.map((item, idx) => (
            <li key={idx} className="relative">
              <Link
                className={cn(
                  "link relative flex gap-2 tracking-wide",
                  "before:absolute before:-bottom-1 before:h-[1px] before:w-0 before:bg-primary-foreground before:transition-width before:duration-500 hover:before:w-full",
                  pathname === item.to ? "active" : "",
                )}
                href={item.to}
                onClick={() => setOpen(false)}
              >
                {item.title} {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
