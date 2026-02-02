"use client";

import { useRef, useEffect, useState } from "react";
import { Trophy, Award, Github, Star, GitFork, Code2, Zap } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    title: "Frontend Development",
    issuer: "Najot Ta'lim",
    year: "2024",
    image: "/najot-talim.jpg",
  },
  {
    title: "React & Next.js",
    issuer: "Udemy",
    year: "2024",
    image: "/najot-talim.jpg",
  },
  {
    title: "TypeScript Mastery",
    issuer: "Frontend Masters",
    year: "2023",
    image: "/najot-talim.jpg",
  },
];

const hackathons = [
  {
    name: "TechStars Toshkent",
    place: "1-o'rin",
    year: "2024",
    description: "E-commerce yechimi",
    icon: Trophy,
    color: "amber",
  },
  {
    name: "Startup Weekend",
    place: "2-o'rin",
    year: "2023",
    description: "Task management platform",
    icon: Zap,
    color: "violet",
  },
  {
    name: "Hackathon O'zbekiston",
    place: "Finalist",
    year: "2023",
    description: "AI chatbot",
    icon: Code2,
    color: "cyan",
  },
];

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [githubStats, setGithubStats] = useState({
    repos: 50,
    stars: 312,
    forks: 89,
    contributions: "500+",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4 sm:mb-6">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-amber-400">
              Yutuqlar
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Nima qildim?
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 px-4">
            GitHub statistikasi, sertifikatlar va hackathon natijalari
          </p>
        </div>

        {/* GitHub Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-white">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {githubStats.repos}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Repozitoriyalar</div>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {githubStats.stars}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Yulduzlar</div>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
              <GitFork className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {githubStats.forks}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Forklar</div>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 sm:p-6 flex items-center gap-4 col-span-2 md:col-span-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {githubStats.contributions}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500">Contributions</div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            Sertifikatlar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden transition-all hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-semibold text-white text-sm sm:text-base">
                      {cert.title}
                    </p>
                    <p className="text-xs text-zinc-400">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-400" />
            Hackathonlar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {hackathons.map((h) => {
              const Icon = h.icon;
              const colorMap = {
                amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
                cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
              };
              const cls = colorMap[h.color as keyof typeof colorMap];
              return (
                <div
                  key={h.name}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-4 ${cls}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-white text-base sm:text-lg mb-1">
                    {h.name}
                  </h4>
                  <p className="text-amber-400 font-medium text-sm mb-2">
                    {h.place} · {h.year}
                  </p>
                  <p className="text-sm text-zinc-500">{h.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
