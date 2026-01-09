import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Technologies } from "@/components/sections/technologies";
import { Experience } from "@/components/sections/experience";
import { MobileDev } from "@/components/sections/mobile-dev";
import { DesktopDev } from "@/components/sections/desktop-dev";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <MobileDev />
      <DesktopDev />
      <Projects />
      <Contact />
    </main>
  );
}
