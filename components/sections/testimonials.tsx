"use client";

import { useRef, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aziz Karimov",
    role: "CEO, TechStart",
    content:
      "Ulug'bek bilan ishlash juda yoqimli tajriba bo'ldi. U loyihamizni o'z vaqtida va mukammal sifatda yakunladi. Professionallik va mas'uliyatlilik - uning asosiy xususiyatlari.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nilufar Saidova",
    role: "Founder, EduPlatform",
    content:
      "Bizning ta'lim platformamiz uchun yaratilgan veb-sayt kutilganidan ham zo'r chiqdi. Har bir detalga e'tibor berilgan va foydalanuvchi tajribasi ajoyib.",
    rating: 5,
  },
  {
    id: 3,
    name: "Bekzod Rahimov",
    role: "CTO, FinApp",
    content:
      "Texnik bilimi va kreativligi bilan ajralib turadi. Murakkab vazifalarni ham osonlik bilan hal qiladi. Keyingi loyihalarda ham albatta hamkorlik qilamiz.",
    rating: 5,
  },
  {
    id: 4,
    name: "Madina Yusupova",
    role: "Marketing Director",
    content:
      "Ulug'bekning ishi sifatli va tezkor. Kommunikatsiya ham juda yaxshi - har doim aloqada va savollarimizga tez javob beradi.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-zinc-700"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="testimonials" 
      className="py-16 sm:py-24 px-4 sm:px-6 bg-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div 
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4 sm:mb-6">
            <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-amber-400">Mijozlar fikri</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Ular nima deyishadi?
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-zinc-400 px-4">
            Mijozlarimning ishlash tajribasi va fikrlari
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {/* Card 1 - Violet */}
          <div 
            className={`group relative rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-6 transition-all duration-500 hover:bg-zinc-900 hover:border-zinc-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Quote icon */}
            <div className="absolute -top-3 right-5 sm:right-6 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            
            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={testimonials[0].rating} />
            </div>
            
            {/* Content */}
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              &ldquo;{testimonials[0].content}&rdquo;
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-violet-500/30">
                <div className="h-full w-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  A
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{testimonials[0].name}</h4>
                <p className="text-xs sm:text-sm text-zinc-500">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Cyan */}
          <div 
            className={`group relative rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-6 transition-all duration-500 hover:bg-zinc-900 hover:border-zinc-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute -top-3 right-5 sm:right-6 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            
            <div className="mb-4">
              <StarRating rating={testimonials[1].rating} />
            </div>
            
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              &ldquo;{testimonials[1].content}&rdquo;
            </p>
            
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-cyan-500/30">
                <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  N
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{testimonials[1].name}</h4>
                <p className="text-xs sm:text-sm text-zinc-500">{testimonials[1].role}</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Emerald */}
          <div 
            className={`group relative rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-6 transition-all duration-500 hover:bg-zinc-900 hover:border-zinc-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute -top-3 right-5 sm:right-6 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            
            <div className="mb-4">
              <StarRating rating={testimonials[2].rating} />
            </div>
            
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              &ldquo;{testimonials[2].content}&rdquo;
            </p>
            
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-emerald-500/30">
                <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  B
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{testimonials[2].name}</h4>
                <p className="text-xs sm:text-sm text-zinc-500">{testimonials[2].role}</p>
              </div>
            </div>
          </div>

          {/* Card 4 - Amber */}
          <div 
            className={`group relative rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 sm:p-6 transition-all duration-500 hover:bg-zinc-900 hover:border-zinc-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute -top-3 right-5 sm:right-6 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            
            <div className="mb-4">
              <StarRating rating={testimonials[3].rating} />
            </div>
            
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              &ldquo;{testimonials[3].content}&rdquo;
            </p>
            
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-amber-500/30">
                <div className="h-full w-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  M
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">{testimonials[3].name}</h4>
                <p className="text-xs sm:text-sm text-zinc-500">{testimonials[3].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
