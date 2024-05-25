"use client";

import * as React from "react";
import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <button className="bg-none outline-none">
      <SunIcon
        onClick={() => setTheme("light")}
        size={22}
        strokeWidth={2}
        className="hidden dark:inline"
      />
      <Moon
        onClick={() => setTheme("dark")}
        size={22}
        strokeWidth={2}
        className="inline dark:hidden"
      />
    </button>
  );
}
