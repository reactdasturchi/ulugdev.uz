"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 to-zinc-700 select-none">
            404
          </h1>
          {/* Glitch effect */}
          <div className="absolute inset-0 text-[120px] sm:text-[180px] md:text-[220px] font-extrabold leading-none text-indigo-500/20 blur-xl animate-pulse">
            404
          </div>
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50">
          <Search className="h-7 w-7 text-zinc-400" />
        </div>

        {/* Text */}
        <h2 className="mb-3 text-2xl sm:text-3xl font-bold text-white">
          Sahifa topilmadi
        </h2>
        <p className="mb-8 max-w-md text-sm sm:text-base text-zinc-400">
          Kechirasiz, siz izlayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            asChild
            className="h-12 rounded-full bg-white text-black hover:bg-zinc-200 px-6 font-semibold"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Bosh sahifaga
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-zinc-800 bg-zinc-900/50 px-6 font-medium text-white hover:bg-zinc-800"
          >
            <Link href="#" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Orqaga qaytish
            </Link>
          </Button>
        </div>

        {/* Fun message */}
        <p className="mt-12 text-xs text-zinc-600">
          Yo'qolgan sahifani topishda yordam kerakmi?{" "}
          <a href="https://t.me/ulugdev" className="text-indigo-400 hover:underline">
            Telegram orqali yozing
          </a>
        </p>
      </div>
    </main>
  );
}
