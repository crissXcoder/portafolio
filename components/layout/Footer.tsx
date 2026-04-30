"use client";

import React from "react";
import { Mail, ArrowUp, ChevronRight, type LucideIcon } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="py-24 bg-slate-950 border-t border-border-subtle relative overflow-hidden">
      {/* Decorative Grid background (localized) */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <SectionHeader 
              eyebrow="Contacto"
              title="Hablemos de tu próximo"
              highlight="proyecto."
              description="Disponible para colaboraciones, desarrollo de software y oportunidades en ciencia de datos e IA aplicada."
              className="mb-8"
            />
            <div className="flex flex-col gap-4 -mt-4">
              <a 
                href={`mailto:${portfolioData.profile.email}`}
                className="flex items-center gap-4 text-white hover:text-brand-primary transition-colors group focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-4"
                aria-label={`Enviar un correo a ${portfolioData.profile.email}`}
              >
                <div className="h-12 w-12 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 transition-all">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-h3 truncate">{portfolioData.profile.email}</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end md:items-end gap-12">
            <div className="flex gap-4">
              {portfolioData.socialLinks.map((social, i: number) => {
                const Icon = ({
                  github: GithubIcon,
                  linkedin: LinkedinIcon,
                  email: Mail,
                  other: ChevronRight
                } as Record<string, LucideIcon | React.ComponentType<{ className?: string }>>)[social.platform] || ChevronRight;

                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="h-14 w-14 rounded-2xl border border-border-subtle flex items-center justify-center text-text-muted hover:text-white hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-brand-primary"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted/60 text-micro text-center md:text-left">
            © {new Date().getFullYear()} {portfolioData.profile.name.toUpperCase()} · ENGINEERING BLUEPRINT v1.0
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-muted hover:text-white transition-colors group text-micro focus-visible:outline-2 focus-visible:outline-brand-primary"
            aria-label="Volver al inicio de la página"
          >
            VOLVER ARRIBA
            <div className="h-8 w-8 rounded border border-border-subtle flex items-center justify-center group-hover:border-brand-primary transition-all">
              <ArrowUp className="w-3 h-3" aria-hidden="true" />
            </div>
          </button>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
export default Footer;

