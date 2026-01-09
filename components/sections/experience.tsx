"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: "Freelance",
    position: "Full Stack Developer",
    location: "Remote",
    period: "2023 - Hozir",
    description:
      "Turli startaplar va kompaniyalar uchun veb va mobil ilovalar ishlab chiqish. React, Next.js, Node.js va boshqa zamonaviy texnologiyalar bilan ishlash.",
    skills: ["React", "Next.js", "Node.js", "TypeScript"],
    isCurrent: true,
  },
  {
    id: 2,
    company: "Tech Solutions",
    position: "Frontend Developer",
    location: "Toshkent",
    period: "2022 - 2023",
    description:
      "E-commerce platformalari uchun foydalanuvchi interfeyslarini ishlab chiqish. UI/UX dizaynlarini pixel-perfect amalga oshirish.",
    skills: ["React", "Vue.js", "Tailwind CSS", "SASS"],
    isCurrent: false,
  },
  {
    id: 3,
    company: "Digital Agency",
    position: "Junior Developer",
    location: "Toshkent",
    period: "2021 - 2022",
    description:
      "Korporativ veb-saytlar va landing page'lar yaratish. HTML, CSS, JavaScript va WordPress bilan ishlash tajribasi.",
    skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
    isCurrent: false,
  },
  {
    id: 4,
    company: "IT Academy",
    position: "Intern",
    location: "Toshkent",
    period: "2020 - 2021",
    description:
      "Dasturlash asoslarini o'rganish va amaliy loyihalarda qatnashish. Mentorlar rahbarligida real proyektlarda ishlash.",
    skills: ["Python", "JavaScript", "Git", "SQL"],
    isCurrent: false,
  },
];

function TimelineDot({ isCurrent }: { isCurrent: boolean }) {
  return (
    <div className="relative flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">
      {/* Pulsating ring - only for current */}
      {isCurrent && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      )}
      {/* Outer glow */}
      <span
        className={`absolute inline-flex h-full w-full rounded-full ${
          isCurrent ? "bg-emerald-500/30" : "bg-emerald-600/20"
        }`}
      />
      {/* Solid dot */}
      <span
        className={`relative inline-flex h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 ${
          isCurrent ? "bg-emerald-400" : "bg-emerald-600"
        } shadow-lg shadow-emerald-500/50`}
      />
    </div>
  );
}

function ExperienceCard({
  experience,
  isLeft,
}: {
  experience: (typeof experiences)[0];
  isLeft: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        x: isLeft ? -30 : 30,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-800/60 sm:p-5 md:p-6 ${
        experience.isCurrent ? "border-emerald-500/20" : ""
      }`}
    >
      {/* Current badge */}
      {experience.isCurrent && (
        <div className="absolute -top-2 right-4 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-black sm:px-3 sm:text-xs">
          Hozirgi
        </div>
      )}

      {/* Header */}
      <div className="mb-3 flex flex-col gap-2 sm:mb-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div
            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${
              experience.isCurrent ? "bg-emerald-500/20" : "bg-emerald-500/10"
            }`}
          >
            <Building2 className="h-4 w-4 text-emerald-500 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-zinc-100 sm:text-base md:text-lg">
              {experience.company}
            </h3>
            <p className="truncate text-xs font-medium text-emerald-500 sm:text-sm">
              {experience.position}
            </p>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500 sm:text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {experience.period}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-3 text-xs leading-relaxed text-zinc-400 sm:mb-4 sm:text-sm">
        {experience.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {experience.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] font-medium text-zinc-400 transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-400 sm:px-2.5 sm:py-1 sm:text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
        }
      );

      // Timeline line animation
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
          scaleY: 1,
          transformOrigin: "top center",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          ref={titleRef}
          className="mb-10 text-center text-2xl font-bold tracking-tighter text-zinc-50 sm:mb-14 sm:text-3xl md:mb-16 md:text-4xl lg:text-5xl"
        >
          Ish Tajribasi
        </h2>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line - Desktop (center) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
            <div className="timeline-line h-full w-full bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-500/10" />
          </div>

          {/* Timeline Line - Mobile/Tablet (left) */}
          <div className="absolute left-2 top-0 h-full w-px sm:left-3 md:hidden">
            <div className="timeline-line h-full w-full bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-emerald-500/10" />
          </div>

          {/* Experience Items */}
          <div className="relative space-y-6 sm:space-y-8 md:space-y-10">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative flex items-start gap-4 sm:gap-6 md:gap-0"
              >
                {/* Mobile/Tablet: Dot on left */}
                <div className="relative z-10 flex flex-shrink-0 items-start pt-4 md:hidden">
                  <TimelineDot isCurrent={experience.isCurrent} />
                </div>

                {/* Mobile/Tablet: Card */}
                <div className="flex-1 md:hidden">
                  <ExperienceCard experience={experience} isLeft={true} />
                </div>

                {/* Desktop: Alternating layout */}
                {/* Left Card */}
                <div className="hidden w-[calc(50%-1.5rem)] md:block">
                  {index % 2 === 0 ? (
                    <ExperienceCard experience={experience} isLeft={true} />
                  ) : (
                    <div />
                  )}
                </div>

                {/* Center Dot - Desktop */}
                <div className="relative z-10 hidden w-12 flex-shrink-0 items-start justify-center pt-5 md:flex">
                  <TimelineDot isCurrent={experience.isCurrent} />
                </div>

                {/* Right Card */}
                <div className="hidden w-[calc(50%-1.5rem)] md:block">
                  {index % 2 !== 0 ? (
                    <ExperienceCard experience={experience} isLeft={false} />
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
