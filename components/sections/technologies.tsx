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
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
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
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#44B78B" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
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
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  ],
  // Row 4 - Tools
  [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
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
    <Card className="group mx-3 h-36 w-36 shrink-0 border-zinc-800 bg-zinc-900/80 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/90 min-[480px]:h-40 min-[480px]:w-40 sm:mx-4 sm:h-44 sm:w-44 md:h-40 md:w-40 lg:mx-5 lg:h-44 lg:w-44">
      <CardContent className="flex h-full flex-col items-center justify-center gap-2.5 p-3 sm:gap-3 sm:p-4 md:gap-3 md:p-4 lg:gap-4 lg:p-5">
        <Icon
          className="h-16 w-16 min-[480px]:h-18 min-[480px]:w-18 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-24 lg:w-24"
          style={{ color }}
        />
        <span className="block text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors sm:text-sm md:text-sm lg:text-base">
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
      className="overflow-x-clip py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          ref={titleRef}
          className="mb-16 text-center text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-4xl md:text-5xl"
        >
          Texnologiyalar
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-6 -mx-2 sm:mx-0">
        {technologies.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            speed={35}
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
