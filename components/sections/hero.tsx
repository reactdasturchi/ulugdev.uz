"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(useGSAP);

// Pre-generated particle positions to avoid Math.random in render
const PARTICLE_POSITIONS = [
  { left: 15, top: 25, delay: 0.5, duration: 8 },
  { left: 85, top: 15, delay: 1.2, duration: 12 },
  { left: 45, top: 80, delay: 2.1, duration: 9 },
  { left: 70, top: 45, delay: 0.8, duration: 11 },
  { left: 25, top: 65, delay: 3.2, duration: 7 },
  { left: 90, top: 75, delay: 1.5, duration: 10 },
  { left: 10, top: 90, delay: 2.8, duration: 8 },
  { left: 55, top: 20, delay: 0.3, duration: 13 },
  { left: 35, top: 55, delay: 4.1, duration: 9 },
  { left: 80, top: 35, delay: 1.9, duration: 11 },
  { left: 20, top: 40, delay: 2.5, duration: 8 },
  { left: 65, top: 85, delay: 0.7, duration: 12 },
  { left: 50, top: 10, delay: 3.5, duration: 10 },
  { left: 95, top: 55, delay: 1.1, duration: 9 },
  { left: 5, top: 70, delay: 2.3, duration: 11 },
  { left: 40, top: 30, delay: 4.5, duration: 7 },
  { left: 75, top: 60, delay: 0.9, duration: 13 },
  { left: 30, top: 95, delay: 3.8, duration: 8 },
  { left: 60, top: 50, delay: 1.7, duration: 10 },
  { left: 12, top: 5, delay: 2.9, duration: 12 },
];

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLE_POSITIONS.map((particle, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/20 animate-float"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient ring
function GradientRing() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="relative h-150 w-150 sm:h-200 sm:w-200 lg:h-250 lg:w-250">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
        <div
          className="absolute inset-8 rounded-full border border-white/5 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        />
        <div className="absolute inset-16 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: "30s" }} />

        {/* Gradient glow */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-violet-500/10 via-transparent to-cyan-500/10 blur-3xl animate-pulse" />
      </div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Spotlight effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${x}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge animation
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { y: -20, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 }
        );
      }

      // Title animation
      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars && titleChars.length > 0) {
        tl.from(
          titleChars,
          {
            y: 100,
            opacity: 0,
            rotateX: -90,
            stagger: 0.02,
            duration: 0.8,
          },
          "-=0.4"
        );
      }

      // Subtitle animation
      const subtitleWords = subtitleRef.current?.querySelectorAll(".word");
      if (subtitleWords && subtitleWords.length > 0) {
        tl.from(
          subtitleWords,
          {
            y: 30,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
          },
          "-=0.4"
        );
      }

      // CTA animation
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  const renderSplitText = (text: string) => (
    <span aria-label={text} className="inline-block">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block transition-all duration-300 hover:text-violet-400 hover:-translate-y-1"
          aria-hidden="true"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );

  const renderSplitWords = (text: string) => (
    <span aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="word inline-block mr-2" aria-hidden="true">
          {word}
        </span>
      ))}
    </span>
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 selection:bg-violet-500/30"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-black to-black" />

      {/* Gradient orbs */}
      <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-violet-600/20 blur-[150px] animate-pulse" />
      <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-cyan-600/20 blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-75 rounded-full bg-fuchsia-600/10 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Gradient ring */}
      <GradientRing />

      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139,92,246,0.08), transparent 40%)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Horizontal lines */}
      <div className="absolute left-0 right-0 top-1/4 h-px bg-linear-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute left-0 right-0 bottom-1/4 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-300">
            Full-Stack Developer
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            textShadow: "0 0 80px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.2)",
          }}
        >
          <span className="block">{renderSplitText("ULUGBEK")}</span>
          <span className="block mt-2 bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {renderSplitText("ESHNAZAROV")}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:mt-8 sm:text-lg md:text-xl"
        >
          {renderSplitWords("Zamonaviy va tezkor web ilovalar yarataman")}
        </p>

        {/* Stats */}
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">3+</span>
            <span>yillik tajriba</span>
          </div>
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">50+</span>
            <span>loyihalar</span>
          </div>
          <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-2xl font-bold text-white">100%</span>
            <span>mamnunlik</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="group relative w-full sm:w-auto min-w-50 overflow-hidden rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Loyihalarni ko&apos;rish
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-violet-700 to-fuchsia-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group w-full sm:w-auto min-w-50 rounded-full border-zinc-700 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10"
          >
            <span className="flex items-center justify-center gap-2">
              Bog&apos;lanish
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          Scroll
        </span>
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-zinc-800 bg-zinc-900/50 p-2 backdrop-blur-sm">
          <div className="h-2 w-1 animate-bounce rounded-full bg-linear-to-b from-violet-400 to-fuchsia-400" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute left-8 top-8 h-20 w-20 border-l border-t border-zinc-800/50 hidden sm:block" />
      <div className="absolute right-8 top-8 h-20 w-20 border-r border-t border-zinc-800/50 hidden sm:block" />
      <div className="absolute bottom-8 left-8 h-20 w-20 border-b border-l border-zinc-800/50 hidden sm:block" />
      <div className="absolute bottom-8 right-8 h-20 w-20 border-b border-r border-zinc-800/50 hidden sm:block" />
    </section>
  );
}
