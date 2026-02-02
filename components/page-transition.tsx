"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // Sahifa o'zgarganda animatsiya
    const tl = gsap.timeline();

    tl.to(".page-content", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setDisplayChildren(children);
      },
    }).to(".page-content", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [pathname, children]);

  return <div className="page-content">{displayChildren}</div>;
}
