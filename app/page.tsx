import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Competencies } from "@/components/sections/Competencies";
import { Projects } from "@/components/sections/Projects";
import { Collaboration } from "@/components/sections/Collaboration";
import { WorkPrinciples } from "@/components/sections/WorkPrinciples";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Technical Competencies (Bento Grid) */}
      <Competencies />
      
      {/* Projects Gallery */}
      <Projects />
      
      {/* Collaboration Areas (Services) */}
      <Collaboration />
      
      {/* Work Principles (Methodology) */}
      <WorkPrinciples />
      
      {/* Certifications & Education */}
      <Certifications />
      
      {/* Final Contact & Footer */}
      <Footer />
    </main>
  );
}
