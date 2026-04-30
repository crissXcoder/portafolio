"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Competencias", href: "#competencias" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Formación", href: "#formacion" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-border-subtle py-4 shadow-2xl shadow-black/20" : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter group flex items-center gap-1" aria-label="Cristhian Altamirano Montes - Inicio">
          <span className="group-hover:text-brand-primary transition-colors">CAM</span>
          <span className="text-brand-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-micro font-bold text-text-muted hover:text-white transition-all hover:tracking-widest focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-4"
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-muted hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-border-subtle p-6 animate-in slide-in-from-top duration-300"
        >
          <nav className="flex flex-col gap-6" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-h3 font-bold text-text-muted hover:text-brand-primary transition-all focus-visible:outline-2 focus-visible:outline-brand-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
