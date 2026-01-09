"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Zap, Package, RefreshCw, ArrowUpRight } from "lucide-react";
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
          <div ref={phoneRef} className="relative flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px]" />

            {/* Phone frame */}
            <div className="relative z-10 h-[500px] w-[250px] rounded-[40px] border-4 border-zinc-700 bg-zinc-900 p-2 shadow-2xl sm:h-[580px] sm:w-[280px]">
              {/* Notch */}
              <div className="absolute left-1/2 top-4 h-6 w-24 -translate-x-1/2 rounded-full bg-zinc-800" />

              {/* Screen */}
              <div className="h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20">
                {/* App content mockup */}
                <div className="flex h-full flex-col p-4 pt-10">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-4 rounded-sm bg-white/60" />
                      <div className="h-2.5 w-2.5 rounded-full border border-white/60" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white">Dashboard</h3>
                    <p className="text-sm text-white/60">Welcome back!</p>
                  </div>

                  {/* Stats cards */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-cyan-400">12.5K</div>
                      <div className="text-xs text-white/60">Steps today</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-purple-400">8.2</div>
                      <div className="text-xs text-white/60">Hours sleep</div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm text-white">Daily Goal</span>
                      <span className="text-sm font-bold text-cyan-400">78%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto flex items-center justify-around rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/30">
                      <div className="h-5 w-5 rounded bg-cyan-400" />
                    </div>
                    <div className="h-5 w-5 rounded-full bg-white/30" />
                    <div className="h-5 w-5 rounded bg-white/30" />
                    <div className="h-5 w-5 rounded-full bg-white/30" />
                  </div>
                </div>
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
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-white">{feature.title}</h4>
                  <p className="mt-1 text-xs text-zinc-400">{feature.description}</p>
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
              className="group flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 transition-all duration-300 hover:border-cyan-500/50"
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
