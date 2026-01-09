"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Monitor,
  Cpu,
  HardDrive,
  Shield,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import {
  SiTauri,
  SiElectron,
  SiRust,
  SiTypescript,
  SiReact,
  SiVite,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tauriStack = [
  { name: "Tauri", icon: SiTauri, color: "#FFC131" },
  { name: "Rust", icon: SiRust, color: "#CE422B" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

const electronStack = [
  { name: "Electron", icon: SiElectron, color: "#47848F" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
];

const comparisons = [
  {
    feature: "Bundle Size",
    tauri: "~3 MB",
    electron: "~150 MB",
    tauriBetter: true,
  },
  {
    feature: "RAM Usage",
    tauri: "~30 MB",
    electron: "~200 MB",
    tauriBetter: true,
  },
  {
    feature: "Startup",
    tauri: "~0.5s",
    electron: "~2-3s",
    tauriBetter: true,
  },
  {
    feature: "Native APIs",
    tauri: "Rust",
    electron: "Node.js",
    tauriBetter: null,
  },
  {
    feature: "Security",
    tauri: "Yuqori",
    electron: "O'rta",
    tauriBetter: true,
  },
];

const features = [
  {
    icon: Cpu,
    title: "Native Performance",
    description: "Rust backend bilan tezkor va samarali ilovalar",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: HardDrive,
    title: "Kichik Hajm",
    description: "3MB dan boshlanadigan ultra-yengil ilovalar",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: Shield,
    title: "Xavfsizlik",
    description: "Rust memory safety va sandbox muhit",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Layers,
    title: "Cross-Platform",
    description: "Windows, macOS, Linux uchun bitta kod",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
];

const projects = [
  {
    title: "CodeVault",
    description:
      "Developer uchun kod snippet manager. Syntax highlighting, tags va cloud sync.",
    framework: "Tauri",
    platforms: ["Windows", "macOS", "Linux"],
  },
  {
    title: "MediaConverter",
    description:
      "FFmpeg asosida media fayllarni konvertatsiya qilish dasturi.",
    framework: "Tauri",
    platforms: ["Windows", "macOS"],
  },
  {
    title: "NotionClone",
    description: "Offline-first notes app. Markdown, blocks va database.",
    framework: "Electron",
    platforms: ["Windows", "macOS", "Linux"],
  },
];

export function DesktopDev() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

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

        titleTl.fromTo(
          h2Element,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );

        if (pElement) {
          titleTl.fromTo(
            pElement,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3"
          );
        }
      }

      // Window mockup animation
      if (windowRef.current) {
        gsap.fromTo(
          windowRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scrollTrigger: {
              trigger: windowRef.current,
              start: "top 85%",
            },
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      // Content animation
      if (contentRef.current?.children) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="desktop"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div ref={titleRef} className="mb-10 text-center sm:mb-14 lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs text-orange-400 sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
            <Monitor className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Desktop Development
          </div>
          <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Tauri & Electron
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:mt-4 sm:text-base lg:text-lg">
            Zamonaviy desktop ilovalar yarataman — Rust + Web texnologiyalari
            bilan tezkor, xavfsiz va cross-platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Window Mockup - Hidden on mobile, shown on sm+ */}
          <div
            ref={windowRef}
            className="relative hidden items-center justify-center sm:flex"
          >
            {/* Glow effect */}
            <div className="absolute h-48 w-48 rounded-full bg-orange-500/20 blur-[80px] lg:h-64 lg:w-64 lg:blur-[100px]" />

            {/* Window frame */}
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 py-2 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
                  </div>
                </div>
                <span className="text-[10px] text-zinc-500 sm:text-xs">
                  CodeVault v2.0
                </span>
                <div className="w-10 sm:w-12" />
              </div>

              {/* App content */}
              <div className="flex h-[280px] sm:h-[320px] lg:h-[350px]">
                {/* Sidebar */}
                <div className="w-36 border-r border-zinc-800 bg-zinc-900/50 p-2 sm:w-44 sm:p-3 lg:w-48">
                  <div className="mb-3 rounded-lg bg-zinc-800 px-2 py-1.5 sm:mb-4 sm:px-3 sm:py-2">
                    <div className="h-1.5 w-12 rounded bg-zinc-600 sm:h-2 sm:w-16" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-1.5 rounded-lg bg-orange-500/20 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                      <div className="h-2.5 w-2.5 rounded bg-orange-400 sm:h-3 sm:w-3" />
                      <div className="h-1.5 w-10 rounded bg-orange-400/60 sm:h-2 sm:w-12" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                      <div className="h-2.5 w-2.5 rounded bg-zinc-600 sm:h-3 sm:w-3" />
                      <div className="h-1.5 w-12 rounded bg-zinc-700 sm:h-2 sm:w-16" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                      <div className="h-2.5 w-2.5 rounded bg-zinc-600 sm:h-3 sm:w-3" />
                      <div className="h-1.5 w-8 rounded bg-zinc-700 sm:h-2 sm:w-10" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                      <div className="h-2.5 w-2.5 rounded bg-zinc-600 sm:h-3 sm:w-3" />
                      <div className="h-1.5 w-10 rounded bg-zinc-700 sm:h-2 sm:w-14" />
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-3 sm:p-4">
                  <div className="mb-3 flex items-center justify-between sm:mb-4">
                    <div className="h-2.5 w-20 rounded bg-zinc-600 sm:h-3 sm:w-24" />
                    <div className="h-5 w-5 rounded bg-zinc-800 sm:h-6 sm:w-6" />
                  </div>
                  {/* Code block */}
                  <div className="rounded-lg bg-zinc-950 p-3 font-mono text-[10px] sm:p-4 sm:text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">app</span>
                      <span className="text-zinc-500">=</span>
                      <span className="text-yellow-400">createApp</span>
                      <span className="text-zinc-400">();</span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
                      <span className="text-purple-400">await</span>
                      <span className="text-blue-400">app</span>
                      <span className="text-zinc-400">.</span>
                      <span className="text-yellow-400">init</span>
                      <span className="text-zinc-400">();</span>
                    </div>
                    <div className="mt-3 h-1.5 w-24 rounded bg-zinc-800 sm:mt-4 sm:h-2 sm:w-32" />
                    <div className="mt-1.5 h-1.5 w-16 rounded bg-zinc-800 sm:mt-2 sm:h-2 sm:w-24" />
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex gap-1.5 sm:mt-4 sm:gap-2">
                    <span className="rounded bg-orange-500/20 px-1.5 py-0.5 text-[10px] text-orange-400 sm:px-2 sm:py-1 sm:text-xs">
                      Rust
                    </span>
                    <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-400 sm:px-2 sm:py-1 sm:text-xs">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900/50 px-3 py-1 text-[10px] text-zinc-500 sm:px-4 sm:py-1.5 sm:text-xs">
                <span>Ready</span>
                <span>UTF-8 | Rust</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Features grid - First on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={`group rounded-xl border border-zinc-800 bg-gradient-to-br ${feature.gradient} p-3 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 sm:rounded-2xl sm:p-4`}
                >
                  <feature.icon className="mb-2 h-5 w-5 text-white sm:mb-3 sm:h-6 sm:w-6" />
                  <h4 className="text-xs font-semibold text-white sm:text-sm lg:text-base">
                    {feature.title}
                  </h4>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-zinc-400 sm:mt-1 sm:text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stacks */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3 sm:rounded-2xl sm:p-4">
                <h4 className="mb-2 text-xs font-semibold text-orange-400 sm:mb-3 sm:text-sm">
                  Tauri Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {tauriStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 rounded-md bg-zinc-900/50 px-1.5 py-0.5 sm:gap-1.5 sm:rounded-lg sm:px-2 sm:py-1"
                    >
                      <tech.icon
                        className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] text-zinc-300 sm:text-xs">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 sm:rounded-2xl sm:p-4">
                <h4 className="mb-2 text-xs font-semibold text-blue-400 sm:mb-3 sm:text-sm">
                  Electron Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {electronStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 rounded-md bg-zinc-900/50 px-1.5 py-0.5 sm:gap-1.5 sm:rounded-lg sm:px-2 sm:py-1"
                    >
                      <tech.icon
                        className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] text-zinc-300 sm:text-xs">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tauri vs Electron comparison */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-4 lg:p-6">
              <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base lg:text-lg">
                Tauri vs Electron
              </h3>
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                {/* Header row */}
                <div className="grid grid-cols-3 gap-2 px-2 text-[10px] font-medium text-zinc-500 sm:gap-4 sm:px-4 sm:text-xs">
                  <span>Feature</span>
                  <span className="text-center text-orange-400">Tauri</span>
                  <span className="text-center text-blue-400">Electron</span>
                </div>
                {comparisons.map((item) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-3 items-center gap-2 rounded-lg bg-zinc-900/50 px-2 py-1.5 text-[10px] sm:gap-4 sm:px-4 sm:py-2 sm:text-xs lg:text-sm"
                  >
                    <span className="text-zinc-400">{item.feature}</span>
                    <span
                      className={`text-center ${
                        item.tauriBetter === true
                          ? "font-medium text-orange-400"
                          : "text-zinc-300"
                      }`}
                    >
                      {item.tauri}
                    </span>
                    <span
                      className={`text-center ${
                        item.tauriBetter === false
                          ? "font-medium text-blue-400"
                          : "text-zinc-300"
                      }`}
                    >
                      {item.electron}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-4 lg:p-6">
              <h3 className="mb-3 text-sm font-semibold text-white sm:mb-4 sm:text-base lg:text-lg">
                Desktop Loyihalar
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 transition-all duration-300 hover:border-zinc-700 sm:rounded-xl sm:p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-medium text-white sm:text-sm lg:text-base">
                          {project.title}
                        </h4>
                        <p className="mt-0.5 line-clamp-2 text-[10px] text-zinc-500 sm:mt-1 sm:text-xs">
                          {project.description}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] sm:px-2 sm:text-xs ${
                          project.framework === "Tauri"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {project.framework}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5">
                      {project.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="rounded bg-zinc-800 px-1.5 py-0.5 text-[9px] text-zinc-400 sm:px-2 sm:text-xs"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group flex items-center justify-between rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-amber-500/10 p-4 transition-all duration-300 hover:border-orange-500/50 sm:rounded-2xl sm:p-5 lg:p-6"
            >
              <div>
                <h4 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                  Desktop ilova kerakmi?
                </h4>
                <p className="mt-0.5 text-[11px] text-zinc-400 sm:text-xs lg:text-sm">
                  Tauri yoki Electron — loyihangizga mos yechim topamiz
                </p>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 sm:h-5 sm:w-5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
