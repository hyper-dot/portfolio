"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const menus = [
  // { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Blogs", to: "/blogs" },
  { title: "Projects", to: "/portfolio" },
  // { title: "Say Hi", to: "/contact", icon: <IoIosChatbubbles size={52} /> },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="z-50 flex items-center justify-between p-4">
      <Logo />

      <ul className="flex gap-4">
        {menus.map((item) => (
          <li className="relative">
            <Link href={item.to}>{item.title}</Link>
            {pathname === item.to && (
              <span className="absolute -bottom-[1px] right-1/2 h-1 w-1 translate-y-1/2 rounded-full bg-green-500"></span>
            )}
          </li>
        ))}
      </ul>

      <button className="rounded-full border border-primary px-4 py-3">
        Create an appontment
      </button>
    </nav>
  );
};

export default Navigation;
