"use client";

import { useRef } from "react";
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
  { value: "5+", label: "Yillik tajriba" },
  { value: "50+", label: "Loyihalar" },
  { value: "30+", label: "Mijozlar" },
  { value: "99%", label: "Mamnunlik" },
];

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
            <div key={stat.label} className="stat-item text-center">
              <p className="glow-text text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
