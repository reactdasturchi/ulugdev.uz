"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Zap, Package, RefreshCw, ArrowUpRight, Activity, TrendingUp, Heart, Play } from "lucide-react";
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiFirebase,
  SiSupabase,
  SiRedux,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const technologies = [
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "#000020" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
];

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Bitta kod bazasi bilan iOS va Android uchun ilovalar",
  },
  {
    icon: Zap,
    title: "Tezkor Rivojlantirish",
    description: "Hot reload va Expo bilan tez iteratsiya",
  },
  {
    icon: Package,
    title: "Native Modullar",
    description: "Kamera, GPS, push-notification va boshqalar",
  },
  {
    icon: RefreshCw,
    title: "OTA Yangilanishlar",
    description: "App Store'siz ilovani yangilash imkoniyati",
  },
];

const projects = [
  {
    title: "FitTracker Pro",
    description: "Fitnes va salomatlikni kuzatish ilovasi. Step counter, workout tracker va nutrition log.",
    platforms: ["iOS", "Android"],
    downloads: "50K+",
  },
  {
    title: "QuickChat",
    description: "Real-time chat ilova. End-to-end encryption va media sharing.",
    platforms: ["iOS", "Android"],
    downloads: "25K+",
  },
  {
    title: "BudgetWise",
    description: "Shaxsiy moliyani boshqarish. Xarajatlar tahlili va budjet rejalashtirish.",
    platforms: ["iOS", "Android"],
    downloads: "15K+",
  },
];

export function MobileDev() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      const h2Element = titleRef.current?.querySelector("h2");
      const pElement = titleRef.current?.querySelector("p");

      if (h2Element) {
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        });

        titleTl.from(h2Element, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        if (pElement) {
          titleTl.from(
            pElement,
            {
              y: 40,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
      }

      // Phone mockup animation
      if (phoneRef.current) {
        gsap.from(phoneRef.current, {
          scrollTrigger: {
            trigger: phoneRef.current,
            start: "top 80%",
          },
          y: 100,
          opacity: 0,
          rotation: -10,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Content cards animation
      if (contentRef.current?.children) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="mobile" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            <Smartphone className="h-4 w-4" />
            Mobile Development
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            React Native & Expo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Bitta kod bazasi bilan iOS va Android uchun zamonaviy, tezkor va
            chiroyli mobil ilovalar yarataman.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Phone Mockup */}
          <div ref={phoneRef} className="relative flex items-center justify-center py-8 lg:py-0">
            {/* Multiple glow effects */}
            <div className="absolute h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px]" />
            <div className="absolute h-60 w-60 rounded-full bg-blue-500/20 blur-[80px] translate-x-10 translate-y-10" />

            {/* Phone frame container */}
            <div className="relative z-10">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-8 border-zinc-800 bg-zinc-900 p-1.5 sm:p-2 shadow-2xl shadow-black/50">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-3 sm:top-4 h-6 sm:h-7 w-24 sm:w-28 -translate-x-1/2 rounded-full bg-black z-20 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Screen container */}
                <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-linear-to-b from-zinc-900 via-zinc-950 to-black w-64 h-130 sm:w-72 sm:h-145 md:w-80 md:h-160 lg:w-85 lg:h-170">
                  {/* App content */}
                  <div className="flex h-full flex-col p-4 pt-12 sm:p-5 sm:pt-14">
                    {/* Status bar */}
                    <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/70 mb-4">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                          <div className="h-2.5 w-0.5 rounded-full bg-white/70" />
                          <div className="h-2.5 w-0.5 rounded-full bg-white/70" />
                          <div className="h-2.5 w-0.5 rounded-full bg-white/50" />
                          <div className="h-2.5 w-0.5 rounded-full bg-white/30" />
                        </div>
                        <div className="ml-1 h-2.5 w-5 rounded-sm border border-white/70 flex items-center justify-end pr-0.5">
                          <div className="h-1.5 w-3 rounded-sm bg-emerald-500" />
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="mb-5 sm:mb-6">
                      <p className="text-white/50 text-xs sm:text-sm">Xush kelibsiz</p>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">Ulug&apos;bek</h3>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 p-3 sm:p-4">
                        <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-white">12.5K</div>
                        <div className="text-[10px] sm:text-xs text-white/50">Qadamlar</div>
                      </div>
                      <div className="rounded-2xl bg-linear-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 p-3 sm:p-4">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-white">72</div>
                        <div className="text-[10px] sm:text-xs text-white/50">BPM</div>
                      </div>
                    </div>

                    {/* Progress card */}
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-emerald-400" />
                          <span className="text-xs sm:text-sm text-white font-medium">Kunlik maqsad</span>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-emerald-400">78%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[78%] rounded-full bg-linear-to-r from-emerald-400 to-cyan-400" />
                      </div>
                    </div>

                    {/* Workout card */}
                    <div className="rounded-2xl bg-linear-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 p-3 sm:p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-white">Ertalabki mashq</p>
                        <p className="text-[10px] sm:text-xs text-white/50 mt-0.5">30 daqiqa • Kardio</p>
                      </div>
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="mt-auto flex items-center justify-around rounded-2xl bg-white/5 border border-white/10 p-2 sm:p-3">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-cyan-500/20">
                        <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                      </div>
                      <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white/20" />
                      <div className="h-4 w-4 sm:h-5 sm:w-5 rounded bg-white/20" />
                      <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 sm:w-32 rounded-full bg-white/30" />
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -right-4 sm:-right-6 top-16 sm:top-20 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-bounce" style={{ animationDuration: "3s" }}>
                <SiReact className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="absolute -left-4 sm:-left-6 bottom-24 sm:bottom-32 h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <SiExpo className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="absolute -right-2 sm:-right-4 bottom-40 sm:bottom-48 h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
                <SiFirebase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            {/* Technologies */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Texnologiyalar
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50"
                  >
                    <tech.icon className="h-5 w-5" style={{ color: tech.color }} />
                    <span className="text-sm text-zinc-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 min-h-[120px] flex flex-col"
                >
                  <div className="mb-3 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <feature.icon className="h-6 w-6 sm:h-6 sm:w-6" />
                  </div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400 flex-1">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Mobil Loyihalar
              </h3>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-zinc-700"
                  >
                    <div>
                      <h4 className="font-medium text-white">{project.title}</h4>
                      <p className="mt-0.5 text-xs text-zinc-500 line-clamp-1">
                        {project.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-cyan-400">
                        {project.downloads}
                      </div>
                      <div className="text-xs text-zinc-500">downloads</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-6 transition-all duration-300 hover:border-cyan-500/50"
            >
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Mobil ilova kerakmi?
                </h4>
                <p className="text-sm text-zinc-400">
                  Loyihangiz haqida gaplashaylik
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
