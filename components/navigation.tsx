"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Bosh sahifa", href: "#" },
  { name: "Haqimda", href: "#about" },
  { name: "Texnologiyalar", href: "#technologies" },
  { name: "Tajriba", href: "#experience" },
  { name: "Yutuqlar", href: "#achievements" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Narxlar", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Bog'lanish", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop navbar entrance animation
  useGSAP(
    () => {
      if (isAnimated) return;

      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => setIsAnimated(true),
      });

      // Container slides down
      tl.fromTo(
        navContainerRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      // Logo fades in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      );

      // Links stagger in
      tl.fromTo(
        linksRef.current.filter(Boolean),
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.2"
      );
    },
    { scope: navRef, dependencies: [isAnimated] }
  );

  // Mobile nav entrance animation
  useGSAP(() => {
    if (!mobileNavRef.current) return;

    gsap.fromTo(
      mobileNavRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  // Scroll-based navbar effect
  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        scale: isScrolled ? 0.98 : 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [isScrolled]);

  // Mobile menu animations
  useEffect(() => {
    if (isOpen && menuRef.current && itemsRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      );

      tl.fromTo(
        Array.from(itemsRef.current.children),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.1"
      );
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Floating Capsule */}
      <nav
        ref={navRef}
        className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 md:block lg:top-6"
      >
        <div
          ref={navContainerRef}
          className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl lg:gap-2 lg:px-4 lg:py-2.5"
        >
          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            onClick={() => handleNavClick("#")}
            className="magnetic-btn mr-1 flex items-center rounded-full bg-white px-3 py-1.5 transition-transform duration-300 hover:scale-105 lg:mr-2 lg:px-4 lg:py-2"
          >
            <span className="text-xs font-bold tracking-tight text-black lg:text-sm">
              ulugdev<span className="text-zinc-500">.uz</span>
            </span>
          </Link>

          {navItems.slice(1).map((item, index) => (
            <Link
              key={item.name}
              ref={(el) => {
                linksRef.current[index] = el;
              }}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="magnetic-btn whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-zinc-800 hover:text-white lg:px-4 lg:py-2 lg:text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar with Logo */}
      <div
        ref={mobileNavRef}
        className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 pb-[env(safe-area-inset-bottom,0)] md:hidden"
      >
        {/* Mobile Logo */}
        <Link
          href="#"
          onClick={() => handleNavClick("#")}
          className="flex min-h-[48px] min-w-[48px] items-center rounded-full border border-zinc-800 bg-zinc-900/90 px-5 py-3.5 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:bg-zinc-800 active:scale-95"
        >
          <span className="text-sm font-bold tracking-tight text-white">
            ulugdev<span className="text-zinc-500">.uz</span>
          </span>
        </Link>

        {/* Menu Button - 48px min touch target */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:bg-zinc-800 active:scale-95 touch-manipulation"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 backdrop-blur-xl md:hidden"
        >
          <div ref={itemsRef} className="flex flex-col items-center gap-8">
            {/* Mobile Logo */}
            <div className="mb-8 rounded-full bg-white px-6 py-3">
              <span className="text-xl font-bold tracking-tight text-black">
                ulugdev<span className="text-zinc-500">.uz</span>
              </span>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-3xl font-bold tracking-tight text-white transition-colors hover:text-zinc-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
