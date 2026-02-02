"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  BookOpen,
  Trophy,
  Target,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header
      gsap.from(".edu-badge", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      gsap.from(".edu-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Main card
      gsap.from(".main-card", {
        scrollTrigger: {
          trigger: ".main-card",
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Skill categories
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });

      // Achievement cards
      gsap.from(".achievement-card", {
        scrollTrigger: {
          trigger: ".achievements-grid",
          start: "top 90%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="edu-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-6">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">Ta'lim yo'lim</span>
            <Sparkles className="w-3 h-3 text-amber-400" />
          </div>
          <h2 className="edu-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
            Bilim — kuch
          </h2>
          <p className="edu-title max-w-xl mx-auto text-sm sm:text-base text-white/50 px-4">
            Professional dasturchi bo'lish yo'lidagi ta'lim va ko'nikmalarim
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Main Education Card - Large */}
          <div className="main-card lg:col-span-7 xl:col-span-8">
            <div className="group relative h-full rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
              {/* Hover glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative h-full">
                {/* Image Header */}
                <div className="relative h-44 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src="/najot-talim.jpg"
                    alt="Najot Ta'lim"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500 text-black text-xs font-bold shadow-lg shadow-amber-500/25">
                    <Award className="w-3.5 h-3.5" />
                    Sertifikatlangan
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-medium">
                    2023 — 2024
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-amber-400 text-xs sm:text-sm font-medium mb-1 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Frontend Development
                        </p>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                          Najot Ta'lim
                        </h3>
                      </div>
                      <a
                        href="https://najottalim.uz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-1 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        Tashrif
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Meta tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/70 text-xs sm:text-sm">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      8 oy intensiv
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/70 text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Toshkent
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-white/70 text-xs sm:text-sm">
                      <Target className="w-3.5 h-3.5 text-emerald-400" />
                      Muvaffaqiyatli tugatgan
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                    O'zbekistondagi eng yirik IT o'quv markazida zamonaviy web dasturlash 
                    texnologiyalarini chuqur o'rgandim. Real loyihalar ustida ishlash, 
                    tajribali mentorlar rahbarligida amaliy ko'nikmalar hosil qildim.
                  </p>

                  {/* Key points */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/10">
                        <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white text-xs sm:text-sm font-medium">Amaliy loyihalar</p>
                        <p className="text-white/40 text-[10px] sm:text-xs mt-0.5">10+ real projects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-violet-500/5 border border-violet-500/10">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-500/10">
                        <Trophy className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-white text-xs sm:text-sm font-medium">Top bitiruvchi</p>
                        <p className="text-white/40 text-[10px] sm:text-xs mt-0.5">A'lo baholar</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile link */}
                  <a
                    href="https://najottalim.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium"
                  >
                    Kurs haqida
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Right Side */}
          <div className="skills-section lg:col-span-5 xl:col-span-4 space-y-4 sm:space-y-6">
            
            {/* Frontend Skills */}
            <div className="skill-category rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <SiReact className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Frontend</h4>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiReact className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">React</span>
                </div>
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">Next.js</span>
                </div>
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">TypeScript</span>
                </div>
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Styling Skills */}
            <div className="skill-category rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                  <SiTailwindcss className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Styling & Tools</h4>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">Tailwind</span>
                </div>
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">HTML5</span>
                </div>
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">CSS3</span>
                </div>
                <div className="group flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiFigma className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  <span className="text-[10px] sm:text-xs text-white/60 group-hover:text-white transition-colors">Figma</span>
                </div>
              </div>
            </div>

            {/* Backend & Tools */}
            <div className="skill-category rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <SiNodedotjs className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Backend & DevOps</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiNodedotjs className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  <span className="text-xs sm:text-sm text-white/60 group-hover:text-white transition-colors">Node.js</span>
                </div>
                <div className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <SiGit className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  <span className="text-xs sm:text-sm text-white/60 group-hover:text-white transition-colors">Git & GitHub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats - Bottom Full Width */}
          <div className="achievements-grid lg:col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Stat 1 */}
            <div className="achievement-card group relative p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  8
                </div>
                <p className="text-xs sm:text-sm text-white/50 mt-1">oy o'qish</p>
                <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="achievement-card group relative p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  10+
                </div>
                <p className="text-xs sm:text-sm text-white/50 mt-1">loyihalar</p>
                <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="achievement-card group relative p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  10+
                </div>
                <p className="text-xs sm:text-sm text-white/50 mt-1">texnologiya</p>
                <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="achievement-card group relative p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  A+
                </div>
                <p className="text-xs sm:text-sm text-white/50 mt-1">yakuniy baho</p>
                <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
