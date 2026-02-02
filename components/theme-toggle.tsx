"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-400 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-zinc-800 hover:text-white sm:top-6 sm:right-6 md:hidden"
      aria-label="Tema almashtirish"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
