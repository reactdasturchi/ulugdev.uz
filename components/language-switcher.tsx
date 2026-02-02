"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";
import { Language } from "@/lib/i18n/translations";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-sm font-medium text-zinc-400 shadow-lg backdrop-blur-xl transition-all hover:border-white/20 hover:bg-zinc-800 hover:text-white"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLang?.flag}</span>
        <span className="text-xs">{currentLang?.code.toUpperCase()}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/95 shadow-xl backdrop-blur-xl">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-zinc-800 ${
                  language === lang.code
                    ? "text-white bg-zinc-800/50"
                    : "text-zinc-400"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </span>
                {language === lang.code && (
                  <Check className="h-4 w-4 text-emerald-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
