"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 400px dan pastga tushganda ko'rinadi
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Tepaga qaytish"
      className={`fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-400 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-zinc-800 hover:text-white active:scale-95 touch-manipulation sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
