"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animatsiyasi
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Sahifa yuklangandan keyin
    const timer = setTimeout(() => {
      setProgress(100);
      
      // Exit animatsiya
      gsap.to(".preloader-content", {
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(".preloader", {
        yPercent: -100,
        duration: 0.8,
        delay: 0.3,
        ease: "power4.inOut",
        onComplete: () => setIsLoading(false),
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      <div className="preloader-content flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-3xl sm:text-4xl font-bold text-white">
            ulugdev<span className="text-zinc-500">.uz</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Progress text */}
        <div className="mt-4 text-sm text-zinc-500 font-mono">
          {Math.min(Math.round(progress), 100)}%
        </div>

        {/* Loading dots */}
        <div className="mt-6 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-indigo-500 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
