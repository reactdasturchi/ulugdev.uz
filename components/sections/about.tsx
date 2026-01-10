"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const paragraphs = [
  "Men full-stack dasturchiman.",
  "Zamonaviy texnologiyalar yordamida tezkor, chiroyli va qulay web ilovalar yarataman.",
  "Har bir loyihada sifat va foydalanuvchi tajribasiga alohida e'tibor beraman.",
  "Frontend dan backend gacha, database dan DevOps gacha — barcha bosqichlarni o'zim bajara olaman.",
  "Clean code va best practices ga rioya qilaman.",
];

const stats = [
  { value: 3, suffix: "+", label: "Yillik tajriba" },
  { value: 50, suffix: "+", label: "Loyihalar" },
  { value: 30, suffix: "+", label: "Mijozlar" },
  { value: 99, suffix: "%", label: "Mamnunlik" },
];

// Counter component with hover blur effect
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counter
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={statRef}
      className="stat-item group relative text-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background blur number */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none ${
          isHovered ? "opacity-100 scale-150" : "opacity-0 scale-100"
        }`}
      >
        <span className="text-8xl sm:text-9xl font-bold text-emerald-500/20 blur-sm select-none">
          {count}{suffix}
        </span>
      </div>

      {/* Main number */}
      <div className="relative z-10">
        <p
          className={`text-4xl font-bold text-white sm:text-5xl md:text-6xl transition-all duration-300 ${
            isHovered ? "text-emerald-400 scale-110" : ""
          }`}
        >
          {count}
          <span className="text-emerald-400">{suffix}</span>
        </p>
        <p className="mt-2 text-sm text-zinc-500">{label}</p>
      </div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      });

      // Scrollytelling - each word highlights as you scroll
      const words = wordsRef.current?.querySelectorAll(".scroll-word");
      if (words) {
        words.forEach((word) => {
          gsap.to(word, {
            scrollTrigger: {
              trigger: word,
              start: "top 70%",
              end: "top 30%",
              scrub: 1,
            },
            color: "#ffffff",
            opacity: 1,
          });
        });
      }

      // Stats animation
      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems) {
        gsap.from(statItems, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section title */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Men haqimda
          </p>
          <h2
            ref={titleRef}
            className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
          >
            Kim men?
          </h2>
        </div>

        {/* Scrollytelling text */}
        <div ref={wordsRef} className="mb-32">
          <p className="text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl lg:text-5xl">
            {paragraphs.map((paragraph, pIndex) => (
              <span key={pIndex}>
                {paragraph.split(" ").map((word, wIndex) => (
                  <span
                    key={`${pIndex}-${wIndex}`}
                    className="scroll-word mr-3 inline-block text-zinc-600 transition-colors duration-300"
                    style={{ opacity: 0.3 }}
                  >
                    {word}
                  </span>
                ))}
                <br className="mb-4 block" />
              </span>
            ))}
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-16 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
