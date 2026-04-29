"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className="text-xl font-heading font-bold text-white tracking-tighter">
          CAM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border p-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-muted hover:text-white transition-colors"
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
