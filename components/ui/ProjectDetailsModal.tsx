"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  Layers, 
  Target, 
  Cpu, 
  Code2, 
  User2,
  Calendar,
  Building2,
  GraduationCap,
  Briefcase,
  Terminal,
  Layout as LayoutIcon,
  Globe
} from "lucide-react";
import { type Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "institutional": return <Building2 className="w-4 h-4" />;
      case "academic": return <GraduationCap className="w-4 h-4" />;
      case "professional": return <Briefcase className="w-4 h-4" />;
      case "personal": return <Terminal className="w-4 h-4" />;
      default: return <LayoutIcon className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type.toLowerCase()) {
      case "institutional": return "Institucional";
      case "academic": return "Académico";
      case "professional": return "Profesional";
      case "personal": return "Personal";
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "institutional": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "academic": return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "professional": return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
      case "personal": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      default: return "text-slate-400 bg-slate-500/10 border-slate-500/20";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all z-20 group"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header / Banner area */}
            <div className="p-8 md:p-12 pb-6 border-b border-white/5 relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${getTypeColor(project.type)}`}>
                    {getTypeIcon(project.type)}
                    {getTypeLabel(project.type)}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-slate-400 text-[10px] font-mono uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </div>
                </div>

                <h2 id="modal-title" className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-indigo-400 font-medium tracking-wide uppercase">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-10 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Context & Core Info */}
                <div className="lg:col-span-7 space-y-10">
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-5 h-5 text-indigo-400" />
                      <h3 className="text-xl font-semibold text-white">Contexto del Proyecto</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {project.details?.context || project.description}
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Code2 className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">Qué se trabajó</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {project.details?.contribution}
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-5">
                      <Layers className="w-5 h-5 text-amber-400" />
                      <h3 className="text-xl font-semibold text-white">Módulos Principales</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {project.details?.modules.map((module, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                          <div className="mt-1 h-5 w-5 shrink-0 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 font-mono text-[10px] group-hover:bg-indigo-500 group-hover:text-white transition-all">
                            {i + 1}
                          </div>
                          <span className="text-slate-300 text-sm leading-snug">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Column: Tech & Meta */}
                <div className="lg:col-span-5 space-y-10">
                  <section className="p-6 rounded-4xl bg-indigo-500/5 border border-indigo-500/10">
                    <div className="flex items-center gap-3 mb-4">
                      <User2 className="w-5 h-5 text-indigo-400" />
                      <h3 className="text-lg font-semibold text-white">Mi Rol</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.details?.role}
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-5">
                      <Cpu className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Stack Tecnológico</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 bg-slate-950/50 text-slate-300 text-xs font-mono rounded-lg border border-white/5 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-5 h-5 text-sky-400" />
                      <h3 className="text-lg font-semibold text-white">Enfoque Técnico</h3>
                    </div>
                    <div className="p-5 rounded-2xl border border-white/5 bg-white/5">
                      <p className="text-slate-400 text-sm italic leading-relaxed">
                        "{project.details?.learnings}"
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 md:p-10 border-t border-white/5 bg-slate-900/50 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-sm font-semibold transition-all group/btn"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                    GitHub
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                  >
                    <Globe className="w-4 h-4" />
                    Ver Proyecto
                  </a>
                )}
              </div>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 text-slate-500 hover:text-white text-sm font-medium transition-colors"
              >
                Cerrar Detalles
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
