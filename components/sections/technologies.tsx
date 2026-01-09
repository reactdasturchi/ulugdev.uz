"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { Card, CardContent } from "@/components/ui/card";

// React Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiVercel,
  SiTailwindcss,
  SiSass,
  SiFramer,
  SiGit,
  SiGithub,
  SiLinux,
  SiFigma,
  SiGraphql,
  SiFirebase,
  SiSupabase,
  SiVite,
  SiWebpack,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const technologies = [
  // Row 1 - Frontend
  [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  ],
  // Row 2 - Backend
  [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  ],
  // Row 3 - Database & DevOps
  [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
  ],
  // Row 4 - Tools
  [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ],
];

function TechCard({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <Card className="group mx-2 h-20 w-20 border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50 sm:mx-3 sm:h-28 sm:w-28 md:mx-3 md:h-36 md:w-36 lg:mx-4 lg:h-40 lg:w-40">
      <CardContent className="flex h-full flex-col items-center justify-center p-0 sm:gap-2.5 sm:p-3 md:gap-3 md:p-4 lg:p-5">
        <Icon
          className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18"
          style={{ color }}
        />
        <span className="hidden font-medium text-zinc-400 sm:block sm:text-[11px] md:text-xs lg:text-sm">
          {name}
        </span>
      </CardContent>
    </Card>
  );
}

export function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="technologies"
      className="overflow-hidden py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          ref={titleRef}
          className="mb-16 text-center text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl"
        >
          Texnologiyalar
        </h2>
      </div>

      <div className="space-y-6">
        {technologies.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            speed={40}
            pauseOnHover
            gradient={false}
          >
            {row.map((tech) => (
              <TechCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
