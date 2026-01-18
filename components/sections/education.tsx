"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, Clock, Award, Code2, CheckCircle2 } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiSass,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "SCSS", icon: SiSass, color: "#CC6699" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const achievements = [
  "10+ amaliy loyihalar",
  "REST API integratsiya",
  "Responsive dizayn",
  "Clean code amaliyoti",
];

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Card animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Skills container animation
      gsap.from(skillsContainerRef.current, {
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          start: "top 80%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Individual skill items
      const skillItems = skillsContainerRef.current?.querySelectorAll(".skill-chip");
      if (skillItems && skillItems.length > 0) {
        gsap.fromTo(
          skillItems,
          { scale: 0.8, opacity: 0 },
          {
            scrollTrigger: {
              trigger: skillsContainerRef.current,
              start: "top 75%",
            },
            scale: 1,
            opacity: 1,
            stagger: 0.05,
            duration: 0.4,
            ease: "back.out(1.7)",
            delay: 0.3,
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="education" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400">
            <GraduationCap className="h-4 w-4" />
            Ta&apos;lim
          </div>
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Qayerda o&apos;qiganman?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Professional dasturchi bo&apos;lish yo&apos;lidagi ta&apos;lim va ko&apos;nikmalarim
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Education Card */}
          <div ref={cardRef} className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-75 blur-sm animate-border-spin" />

            {/* Card content */}
            <div className="relative rounded-2xl bg-zinc-950 p-1">
              <div className="rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/najot-talim.jpg"
                    alt="Najot Ta'lim"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

                  {/* Badge overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-amber-500/90 px-3 py-1.5 backdrop-blur-sm">
                    <Award className="h-4 w-4 text-zinc-900" />
                    <span className="text-sm font-semibold text-zinc-900">Frontend Developer</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Najot Ta&apos;lim
                  </h3>
                  <p className="mt-1 text-lg font-medium text-amber-400">
                    Frontend Development kursi
                  </p>

                  <p className="mt-4 text-zinc-400 leading-relaxed">
                    8 oylik intensiv kurs davomida zamonaviy web texnologiyalarini chuqur o&apos;rgandim. Amaliy loyihalar orqali real tajriba ortirdim.
                  </p>

                  {/* Meta info */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 rounded-lg bg-zinc-800/50 px-3 py-2 text-sm">
                      <Calendar className="h-4 w-4 text-amber-400" />
                      <span className="text-zinc-300">2023 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-zinc-800/50 px-3 py-2 text-sm">
                      <Clock className="h-4 w-4 text-amber-400" />
                      <span className="text-zinc-300">8 oy</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {achievements.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div ref={skillsContainerRef} className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                O&apos;rgangan texnologiyalarim
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-chip group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 p-4 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/80"
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
                    }}
                  />

                  <div className="relative flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      <skill.icon
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
                <div className="text-2xl font-bold text-amber-400 sm:text-3xl">10+</div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">Loyihalar</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
                <div className="text-2xl font-bold text-amber-400 sm:text-3xl">8</div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">Oy davomiylik</div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
                <div className="text-2xl font-bold text-amber-400 sm:text-3xl">10</div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">Texnologiya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
