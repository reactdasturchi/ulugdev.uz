"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap, Rocket, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Oddiy sayt yoki landing",
    price: "300",
    period: "dan",
    features: [
      "1-5 sahifa",
      "Responsive dizayn",
      "Kontakt forma",
      "SEO asoslari",
      "1 oy qo'llab-quvvatlash",
    ],
    cta: "Buyurtma berish",
    popular: false,
    gradient: "from-zinc-700 to-zinc-800",
    border: "border-zinc-700",
  },
  {
    name: "Business",
    description: "Katalog, admin panel",
    price: "800",
    period: "dan",
    features: [
      "10+ sahifa",
      "Admin panel",
      "Ma'lumotlar bazasi",
      "To'lov integratsiyasi",
      "3 oy qo'llab-quvvatlash",
    ],
    cta: "Eng mashhur",
    popular: true,
    gradient: "from-violet-600 to-purple-700",
    border: "border-violet-500",
  },
  {
    name: "Enterprise",
    description: "Murakkab ilova yoki platforma",
    price: "2000",
    period: "dan",
    features: [
      "Cheksiz sahifa",
      "Maxsus funksiyalar",
      "API integratsiya",
      "Real-time",
      "6 oy qo'llab-quvvatlash",
    ],
    cta: "Muhokama qilish",
    popular: false,
    gradient: "from-amber-600 to-orange-600",
    border: "border-amber-500/50",
  },
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4 sm:mb-6">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
            <span className="text-xs sm:text-sm font-medium text-violet-400">
              Narxlar
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Xizmat paketlari
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 px-4">
            Loyiha turi va hajmiga qarab narxlar. Bepul konsultatsiya — byudjetni
            birga aniqlaymiz.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-zinc-900/80 overflow-hidden transition-all duration-700 hover:bg-zinc-900 ${
                plan.popular ? "md:-mt-2 md:mb-2 ring-2 ring-violet-500/50" : ""
              } ${plan.border} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-center text-xs font-semibold text-white">
                  Eng mashhur
                </div>
              )}

              <div className={`p-6 sm:p-8 ${plan.popular ? "pt-10" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  {plan.name === "Starter" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-700 text-white">
                      <Zap className="h-5 w-5" />
                    </div>
                  )}
                  {plan.name === "Business" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                      <Rocket className="h-5 w-5" />
                    </div>
                  )}
                  {plan.name === "Enterprise" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                      <Crown className="h-5 w-5" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-500 text-sm ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full h-12 rounded-xl font-semibold ${
                    plan.popular
                      ? "bg-violet-600 hover:bg-violet-500 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
                  }`}
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          Aniq narx loyiha tafsilotlariga qarab belgilanadi. Bepul tahmin olish
          uchun{" "}
          <a href="#contact" className="text-violet-400 hover:underline">
            bog'laning
          </a>
          .
        </p>
      </div>
    </section>
  );
}
