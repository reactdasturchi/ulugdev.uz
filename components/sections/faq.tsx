"use client";

import { useRef, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Loyiha qancha vaqtda tayyor bo'ladi?",
    answer:
      "Loyiha murakkabligiga qarab 1 haftadan 3 oygacha. Oddiy landing page 1-2 hafta, murakkab web ilova 1-2 oy, mobil ilova 2-3 oy davom etishi mumkin. Aniq muddatni loyiha tafsilotlarini muhokama qilgach beraman.",
  },
  {
    question: "Narxlar qanday hisoblanadi?",
    answer:
      "Narx loyiha hajmi, texnik murakkablik va kerak bo'ladigan vaqtga qarab belgilanadi. Bepul konsultatsiya beraman — loyihangiz haqida gaplashib, taxminiy byudjet va muddatni aytaman.",
  },
  {
    question: "Keyinroq o'zgartirishlar mumkinmi?",
    answer:
      "Ha. Barcha loyihalarda 1-3 oy davomida bepul texnik qo'llab-quvvatlash beraman. Keyinroq yangilanishlar va o'zgartirishlar alohida kelishilgan narxda amalga oshiriladi.",
  },
  {
    question: "Qanday to'lov usullari qabul qilinasiz?",
    answer:
      "Bank o'tkazmasi, Click, Payme, Uzcard. Xalqaro loyihalar uchun PayPal yoki kriptovalyuta ham mumkin. Odatda 30-50% oldindan, qolgani tayyor bo'lgach to'lanadi.",
  },
  {
    question: "Loyiha kodlari menga tegishli bo'ladimi?",
    answer:
      "Ha. Loyiha tugagach barcha kodlar, dizayn fayllar va kerakli hujjatlar sizga topshiriladi. Hech qanday yashirin xarajat yoki obuna yo'q.",
  },
  {
    question: "Qanday bog'lanish mumkin?",
    answer:
      "Telegram (@ulugdev), email (ulugbekeshnazarov42@gmail.com) yoki ushbu saytdagi kontakt formasi orqali. Odatda 24 soat ichida javob beraman.",
  },
];

export function FAQ() {
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
      id="faq"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-black"
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4 sm:mb-6">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-medium text-cyan-400">
              Savol-javob
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Tez-tez so'raladigan savollar
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 px-4">
            Mijozlar ko'p beradigan savollar va javoblar
          </p>
        </div>

        {/* Accordion */}
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 sm:px-5 data-[state=open]:bg-zinc-900/80 data-[state=open]:border-zinc-700 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-white hover:text-white hover:no-underline py-5 [&[data-state=open]>svg]:text-cyan-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-zinc-400 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
