"use client";

import React from "react";
import { Mail, ArrowUp, ChevronRight, type LucideIcon } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Container } from "@/components/ui/Container";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Grid background (localized) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-mono text-indigo-400 tracking-[0.3em] uppercase mb-4">
              [ CONTACTO ]
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Hablemos de tu próximo proyecto.
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-md font-light leading-relaxed">
              Disponible para colaboraciones, desarrollo de software y oportunidades en ciencia de datos e IA aplicada.
            </p>
            <div className="flex flex-col gap-4">
              <a 
                href={`mailto:${portfolioData.profile.email}`}
                className="flex items-center gap-4 text-white hover:text-indigo-400 transition-colors group focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-4"
                aria-label={`Enviar un correo a ${portfolioData.profile.email}`}
              >
                <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-xl font-medium tracking-tight truncate">{portfolioData.profile.email}</span>
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
                    className="h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-indigo-400"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-mono tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} {portfolioData.profile.name.toUpperCase()} · ENGINEERING BLUEPRINT v1.0
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-xs font-mono uppercase tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-indigo-400"
            aria-label="Volver al inicio de la página"
          >
            Volver arriba
            <div className="h-8 w-8 rounded border border-white/10 flex items-center justify-center group-hover:border-indigo-500 transition-all">
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
