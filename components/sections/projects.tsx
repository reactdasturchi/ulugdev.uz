"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects-data";
import type { Project } from "@/lib/projects-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function BentoCard({ project }: { project: Project }) {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/80 ${sizeClasses[project.size]}`}
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

          {/* Arrow indicator - 44px min touch target */}
          <span className="flex h-11 w-11 min-h-[44px] min-w-[44px] sm:h-10 sm:w-10 sm:min-h-0 sm:min-w-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 shrink-0">
            <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
          </span>
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

          {/* Actions - 44px touch targets on mobile; stopPropagation so Link is not triggered */}
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] sm:h-9 sm:w-9 sm:min-h-0 sm:min-w-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white touch-manipulation"
            >
              <Github className="h-5 w-5 sm:h-4 sm:w-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-11 w-11 min-h-[44px] min-w-[44px] sm:h-9 sm:w-9 sm:min-h-0 sm:min-w-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white touch-manipulation"
              >
                <ExternalLink className="h-5 w-5 sm:h-4 sm:w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
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

        titleTl.fromTo(
          h2Element,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" }
        );

        if (pElement) {
          titleTl.fromTo(
            pElement,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", clearProps: "all" },
            "-=0.4"
          );
        }
      }

      // Grid cards animation
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: {
              amount: 0.6,
              from: "start",
            },
            ease: "power3.out",
            clearProps: "all",
          }
        );
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
            <BentoCard key={project.slug} project={project} />
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
