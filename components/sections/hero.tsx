"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Code2, Globe, Sparkles } from "lucide-react";

gsap.registerPlugin(useGSAP);

// -----------------------------------------------------------------------------
// COMPONENTS
// -----------------------------------------------------------------------------

// Harakatlanuvchi orqa fon "Aurora" effekti
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen animate-blob" />
      <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/20 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
    </div>
  );
}

// Yulduzlar va "Oqayotgan yulduz" effekti
function StarField() {
  // Random yulduzlar
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 8 + 1,
    duration: Math.random() * 8 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// -----------------------------------------------------------------------------
// MAIN HERO COMPONENT
// -----------------------------------------------------------------------------

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Sichqoncha harakati uchun Spotlight effekti
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Asosiy sarlavha (Harflar pastdan chiqadi)
      const chars = titleRef.current?.querySelectorAll(".char");
      if (chars) {
        tl.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: -45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.03,
            duration: 1.2,
          }
        );
      }

      // 2. Subtitle (So'zlar sekin chiqadi)
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        );
      }

      // 3. Buttons (Elastik effekt)
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { scale: 0.8, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );
      }

      // 4. Stats cards (Glasscards)
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    },
    { scope: containerRef }
  );

  // Matnni harflarga ajratish funksiyasi
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ minWidth: char === " " ? "0.3em" : "0" }}>
        {char}
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white selection:bg-indigo-500/30"
    >
      {/* BACKGROUND LAYERS */}
      <AuroraBackground />
      <StarField />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Spotlight Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.07), transparent 40%)`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <div className="mb-6 mt-25 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md transition-transform hover:scale-105 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-indigo-200">
            OPEN TO WORK
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="max-w-6xl text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <div className="overflow-hidden leading-[1.1]">
            {splitText("ULUGBEK")}
          </div>
          <div className="overflow-hidden leading-[1.1] bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent pb-4">
            {splitText("ESHNAZAROV")}
          </div>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl md:text-2xl leading-relaxed"
        >
          Zamonaviy va yuqori samarali web ilovalar orqali <br className="hidden sm:block" />
          biznesingizni <span className="text-white font-medium">yangi bosqichga</span> olib chiqing.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Button
            asChild
            size="lg"
            className="group relative h-14 w-full sm:w-auto overflow-hidden rounded-full bg-white text-black hover:bg-zinc-200 px-8 text-base font-semibold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            <a href="#projects">
              <span className="relative z-10 flex items-center gap-2">
                Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-14 w-full sm:w-auto rounded-full border-white/10 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
          >
            <a href="#contact">
              <span className="flex items-center gap-2">
                Bog&apos;lanish
                <Terminal className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-white" />
              </span>
            </a>
          </Button>
        </div>

        {/* Stats Grid (Glass Cards) */}
        <div
          ref={statsRef}
          className="mt-20 mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 w-full max-w-4xl"
        >
          {[
            { label: "Tajriba", value: "3+", icon: Terminal, color: "text-indigo-400" },
            { label: "Loyihalar", value: "50+", icon: Code2, color: "text-violet-400" },
            { label: "Mijozlar", value: "100%", icon: Globe, color: "text-cyan-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/[0.05] hover:-translate-y-1"
            >
              <div className={`mb-3 rounded-full bg-white/5 p-3 ${stat.color} ring-1 ring-white/10 group-hover:scale-110 transition-transform`}>
                <stat.icon size={20} />
              </div>
              <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</span>
              
              {/* Card Hover Glow */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}