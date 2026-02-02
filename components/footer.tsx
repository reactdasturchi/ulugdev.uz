"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, ArrowUpRight, Mail, MapPin, ChevronRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiTelegram, SiInstagram } from "react-icons/si";
import { ServiceOrderModal } from "@/components/service-order-modal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const quickLinks = [
  { name: "Bosh sahifa", href: "#" },
  { name: "Haqimda", href: "#about" },
  { name: "Yutuqlar", href: "#achievements" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Narxlar", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Bog'lanish", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/reactdasturchi", icon: SiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/reactnenjauz", icon: SiLinkedin },
  { name: "Telegram", href: "https://t.me/ulugdev", icon: SiTelegram },
  { name: "Instagram", href: "https://instagram.com/ulugdev", icon: SiInstagram },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "API Integration",
  "Database Design",
] as const;

type ServiceType = typeof services[number];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(
    () => {
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: footerRef }
  );

  function handleServiceClick(service: ServiceType) {
    setSelectedService(service);
    setIsModalOpen(true);
  }

  return (
    <>
      <footer ref={footerRef} className="relative border-t border-zinc-800/50 bg-zinc-950">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="footer-content lg:col-span-1">
              <Link href="#" className="inline-block mb-4">
                <span className="text-xl font-bold text-white">
                  ulugdev<span className="text-zinc-500">.uz</span>
                </span>
              </Link>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Full-Stack Developer — Zamonaviy va yuqori samarali web ilovalar yarataman.
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <MapPin className="h-4 w-4" />
                <span>Toshkent, O'zbekiston</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:ulugbekeshnazarov42@gmail.com" className="hover:text-white transition-colors">
                  ulugbekeshnazarov42@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-content">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Tez havolalar
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - Now clickable */}
            <div className="footer-content">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Xizmatlar
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="group flex items-center gap-2 w-full text-left text-sm text-zinc-400 hover:text-white transition-all py-1.5 px-2 -ml-2 rounded-lg hover:bg-white/5"
                    >
                      <ChevronRight className="h-3 w-3 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                      <span>{service}</span>
                      <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Buyurtma
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="footer-content">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Ijtimoiy tarmoqlar
              </h3>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/5"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume yuklab olish
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-content border-t border-zinc-800/50 py-6 sm:py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-zinc-500 text-center sm:text-left">
                © {currentYear} ulugdev.uz. Barcha huquqlar himoyalangan.
              </p>
              <p className="flex items-center gap-1.5 text-sm text-zinc-500">
                <span>Sevgi bilan yaratildi</span>
                <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
                <span>O'zbekistonda</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Order Modal */}
      <ServiceOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
}
