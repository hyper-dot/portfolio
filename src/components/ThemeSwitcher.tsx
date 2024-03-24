"use client";

import * as React from "react";
import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <button className="bg-none outline-none ring-transparent fixed top-2 right-3">
      <SunIcon
        onClick={() => setTheme("light")}
        size={20}
        strokeWidth={1}
        className="hidden dark:inline"
      />
      <Moon
        onClick={() => setTheme("dark")}
        size={20}
        strokeWidth={1}
        className="inline dark:hidden"
      />
    </button>
  );
}
