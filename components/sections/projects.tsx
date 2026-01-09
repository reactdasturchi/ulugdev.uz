"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "ShopFlow E-commerce",
    description:
      "To'liq funksional e-commerce platforma. Stripe to'lov tizimi, admin panel, buyurtmalarni kuzatish.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/ulugdev/shopflow",
    demo: "https://shopflow.ulugdev.uz",
    stars: 128,
    forks: 34,
    featured: true,
    size: "large", // Takes 2 columns
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
  },
  {
    title: "TaskMaster Pro",
    description:
      "Jamoa uchun vazifalarni boshqarish. Kanban board va real-time hamkorlik.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/ulugdev/taskmaster",
    demo: "https://taskmaster.ulugdev.uz",
    stars: 89,
    forks: 21,
    featured: true,
    size: "medium",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
  },
  {
    title: "AI Assistant Bot",
    description:
      "OpenAI GPT-4 asosida chat bot. Ko'p tilli qo'llab-quvvatlash.",
    tags: ["Python", "FastAPI", "OpenAI", "LangChain"],
    github: "https://github.com/ulugdev/ai-assistant",
    demo: "https://ai.ulugdev.uz",
    stars: 256,
    forks: 67,
    featured: true,
    size: "medium",
    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
  },
  {
    title: "DevConnect Social",
    description:
      "Dasturchilar uchun ijtimoiy tarmoq. Portfolio va blog.",
    tags: ["Next.js", "GraphQL", "Supabase"],
    github: "https://github.com/ulugdev/devconnect",
    demo: "https://devconnect.ulugdev.uz",
    stars: 74,
    forks: 18,
    featured: false,
    size: "small",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  },
  {
    title: "CloudDeploy CLI",
    description:
      "Serverless deploy qilish CLI. AWS, Vercel integratsiyasi.",
    tags: ["Node.js", "TypeScript", "AWS SDK"],
    github: "https://github.com/ulugdev/clouddeploy",
    demo: null,
    stars: 312,
    forks: 45,
    featured: false,
    size: "small",
    gradient: "from-rose-500/20 via-pink-500/10 to-red-500/20",
  },
  {
    title: "FinTrack Dashboard",
    description:
      "Moliyaviy analitika. Real-time grafiklar va hisobotlar.",
    tags: ["React", "D3.js", "PostgreSQL"],
    github: "https://github.com/ulugdev/fintrack",
    demo: "https://fintrack.ulugdev.uz",
    stars: 156,
    forks: 38,
    featured: false,
    size: "small",
    gradient: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
  },
];

function BentoCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Bento grid sizes
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/80 ${sizeClasses[project.size as keyof typeof sizeClasses]}`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Spotlight effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            {project.featured && (
              <Badge className="mb-3 border-0 bg-white/10 text-xs text-white backdrop-blur-sm">
                Featured
              </Badge>
            )}
            <h3
              className={`font-bold tracking-tight text-white ${project.size === "large" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}
            >
              {project.title}
            </h3>
          </div>

          {/* Arrow indicator */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
            <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
          </div>
        </div>

        {/* Description */}
        <p
          className={`mt-3 text-zinc-400 ${project.size === "large" ? "text-base sm:text-lg" : "text-sm"} ${project.size === "small" ? "line-clamp-2" : "line-clamp-3"}`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, project.size === "large" ? 5 : 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer - Stats & Actions */}
        <div className="mt-6 flex items-center justify-between">
          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1.5">
              <GitFork className="h-4 w-4" />
              {project.forks}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Grid cards animation
      if (gridRef.current?.children) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: "start",
          },
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Loyihalar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Open source va shaxsiy loyihalarim. Har bir loyiha real muammolarni
            hal qilish uchun yaratilgan.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[repeat(4,minmax(180px,1fr))]"
        >
          {projects.map((project) => (
            <BentoCard key={project.title} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-zinc-700 bg-zinc-900/50 text-white hover:border-white/20 hover:bg-white/10"
            asChild
          >
            <a
              href="https://github.com/ulugdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Barcha loyihalarni ko'rish
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
