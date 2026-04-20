
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/Hero";
import MetricsSection from "@/components/sections/MetricsSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>
      </div>
      <div className="relative z-10">
        <Hero />
        <MetricsSection />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        
      </div>
    </main>
  );
}
