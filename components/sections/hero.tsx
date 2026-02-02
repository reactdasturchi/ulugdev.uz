"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Rocket,
  Zap,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

gsap.registerPlugin(useGSAP);

// Floating Tech Icons
const floatingIcons = [
  { Icon: SiReact, color: "#61DAFB", delay: 0 },
  { Icon: SiNextdotjs, color: "#ffffff", delay: 0.5 },
  { Icon: SiTypescript, color: "#3178C6", delay: 1 },
  { Icon: SiNodedotjs, color: "#339933", delay: 1.5 },
  { Icon: SiTailwindcss, color: "#06B6D4", delay: 2 },
  { Icon: SiPostgresql, color: "#4169E1", delay: 2.5 },
];

// Background Grid
function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_70%)]" />
    </div>
  );
}

// Animated Gradient Orbs
function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[128px] animate-pulse" />
      {/* Secondary orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-pulse delay-1000" />
      {/* Accent orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px]" />
    </div>
  );
}

// Floating Icons Component
function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const icons = containerRef.current?.querySelectorAll(".floating-icon");
    if (!icons) return;

    icons.forEach((icon, i) => {
      gsap.to(icon, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, { scope: containerRef });

  const positions = [
    { top: "15%", left: "8%" },
    { top: "20%", right: "10%" },
    { top: "60%", left: "5%" },
    { top: "70%", right: "8%" },
    { bottom: "25%", left: "12%" },
    { bottom: "20%", right: "15%" },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {floatingIcons.map(({ Icon, color, delay }, i) => (
        <div
          key={i}
          className="floating-icon absolute opacity-0"
          style={{
            ...positions[i],
            animation: `fadeIn 0.5s ease-out ${delay}s forwards`,
          }}
        >
          <div
            className="p-3 rounded-xl backdrop-blur-sm border border-white/5 bg-white/5"
            style={{ boxShadow: `0 0 30px ${color}20` }}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color }} />
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          to { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

// Main Hero Component
export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      gsap.to(".parallax-slow", {
        x: xPercent * 20,
        y: yPercent * 20,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".parallax-fast", {
        x: xPercent * 40,
        y: yPercent * 40,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Badge
    tl.from(".hero-badge", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Title lines
    tl.from(".title-line", {
      y: 100,
      opacity: 0,
      rotationX: -45,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    }, "-=0.4");

    // Subtitle
    tl.from(".hero-subtitle", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");

    // Buttons
    tl.from(".hero-btn", {
      y: 20,
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Stats
    tl.from(".hero-stat", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3");

    // Scroll indicator
    tl.from(".scroll-indicator", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Layers */}
      <GridPattern />
      <GradientOrbs />
      <FloatingIcons />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-20 pb-32 sm:pt-0 sm:pb-20">
        
        {/* Badge */}
        <div className="hero-badge mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-sm">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="w-4 h-4 text-violet-400 opacity-50" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-medium text-white/80">
              Yangi loyihalarga ochiqman
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <h1 ref={titleRef} className="relative mb-6 sm:mb-8">
          {/* First line */}
          <div className="title-line overflow-hidden">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.9]">
              ULUG&apos;BEK
            </span>
          </div>
          
          {/* Second line - Gradient */}
          <div className="title-line overflow-hidden">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              ESHNAZAROV
            </span>
          </div>

          {/* Decorative line */}
          <div className="title-line mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-violet-500" />
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
            <span className="text-sm sm:text-base font-mono text-white/50">Full-Stack Developer</span>
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle max-w-xl sm:max-w-2xl text-sm sm:text-lg md:text-xl text-white/50 leading-relaxed mb-8 sm:mb-10 px-4">
          <span className="text-white/70">3+ yillik tajriba</span> bilan zamonaviy web va mobil ilovalar yarataman. 
          <span className="text-violet-400"> React</span>,
          <span className="text-cyan-400"> Next.js</span>,
          <span className="text-emerald-400"> Node.js</span> mutaxassisi.
        </p>

        {/* CTA Buttons */}
        <div className="hero-btn flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 mb-16 sm:mb-20">
          <a
            href="#projects"
            className="group relative h-12 sm:h-14 w-full sm:w-auto flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 px-6 sm:px-8 text-sm sm:text-base font-bold overflow-hidden transition-all active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Loyihalarimni ko&apos;rish
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </a>

          <a
            href="#contact"
            className="group h-12 sm:h-14 w-full sm:w-auto flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 px-6 sm:px-8 text-sm sm:text-base font-medium text-white backdrop-blur-sm transition-all active:scale-95"
          >
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Bog&apos;lanish
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl px-4 sm:px-0">
          {/* Stat 1 - Violet */}
          <div className="hero-stat group relative p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-violet-500/10 blur-xl" />
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-violet-400 mb-1">3+</div>
              <div className="text-xs sm:text-sm text-white/50 font-medium">Yil tajriba</div>
            </div>
          </div>

          {/* Stat 2 - Cyan */}
          <div className="hero-stat group relative p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-500/10 blur-xl" />
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">50+</div>
              <div className="text-xs sm:text-sm text-white/50 font-medium">Loyihalar</div>
            </div>
          </div>

          {/* Stat 3 - Emerald */}
          <div className="hero-stat group relative p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-500/10 blur-xl" />
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">30+</div>
              <div className="text-xs sm:text-sm text-white/50 font-medium">Mijozlar</div>
            </div>
          </div>

          {/* Stat 4 - Amber */}
          <div className="hero-stat group relative p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500/10 blur-xl" />
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">99%</div>
              <div className="text-xs sm:text-sm text-white/50 font-medium">Mamnunlik</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="relative w-6 h-10 rounded-full border-2 border-white/20">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Gradient animation keyframes */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient {
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
