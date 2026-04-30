"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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
  Globe,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight
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
      case "institutional": return <Building2 className="w-3.5 h-3.5" />;
      case "academic": return <GraduationCap className="w-3.5 h-3.5" />;
      case "professional": return <Briefcase className="w-3.5 h-3.5" />;
      case "personal": return <Terminal className="w-3.5 h-3.5" />;
      default: return <LayoutIcon className="w-3.5 h-3.5" />;
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
      case "institutional": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/5";
      case "academic": return "text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-amber-500/5";
      case "professional": return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 shadow-indigo-500/5";
      case "personal": return "text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-purple-500/5";
      default: return "text-slate-400 bg-slate-500/10 border-slate-500/20";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        duration: 0.5, 
        bounce: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 lg:p-8">
          {/* Backdrop with heavy blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-2xl"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0A0F1E] border border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Pattern Overlay */}
            <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-indigo-500/5 to-transparent pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400 hover:text-white transition-all z-50 group"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header Section */}
            <div className="p-8 md:p-12 pb-8 relative shrink-0">
              <motion.div variants={itemVariants} className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest shadow-sm ${getTypeColor(project.type)}`}>
                    {getTypeIcon(project.type)}
                    {getTypeLabel(project.type)}
                  </span>
                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                <h2 id="modal-title" className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight leading-none">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-indigo-500/40" />
                  <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-0 custom-scrollbar relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-12">
                  {/* Highlighted Summary Card */}
                  <motion.section variants={itemVariants} className="relative group">
                    <div className="absolute -inset-2 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 md:p-8 rounded-3xl bg-white/3 border border-white/5 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                          <Target className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Resumen Ejecutivo</h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-lg font-light">
                        {project.details?.context || project.description}
                      </p>
                    </div>
                  </motion.section>

                  {/* Contribution Block */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Enfoque y Contribución</h3>
                    </div>
                    <div className="pl-14">
                      <p className="text-slate-400 leading-relaxed text-base">
                        {project.details?.contribution}
                      </p>
                    </div>
                  </motion.section>

                  {/* Features / Modules */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Módulos y Funcionalidades</h3>
                    </div>
                    <div className="pl-14 grid grid-cols-1 gap-3">
                      {project.details?.modules.map((module, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all group/item">
                          <div className="mt-1 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover/item:text-indigo-400 transition-colors" />
                          </div>
                          <span className="text-slate-300 text-[15px] leading-relaxed">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <motion.section variants={itemVariants} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                          <Zap className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Puntos Destacados</h3>
                      </div>
                      <div className="pl-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/2 border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="text-slate-300 text-sm font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </motion.section>
                  )}
                </div>

                {/* Right Column */}
                <div className="lg:col-span-5 space-y-10">
                  {/* Role Block */}
                  <motion.section variants={itemVariants} className="p-8 rounded-4xl bg-indigo-500/5 border border-indigo-500/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <User2 className="w-5 h-5 text-indigo-400" />
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider text-[13px]">Mi Rol</h3>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.details?.role}
                      </p>
                    </div>
                  </motion.section>

                  {/* Tech Stack Block */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider text-[13px]">Tecnologías</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-4 py-2 bg-slate-950/40 text-slate-400 text-[11px] font-bold font-mono rounded-xl border border-white/5 uppercase tracking-widest hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.section>

                  {/* Technical Approach / Learnings */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-sky-400" />
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider text-[13px]">Aprendizaje & Enfoque</h3>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/1 relative italic">
                      <div className="absolute top-4 left-4 text-4xl text-white/5 font-serif">"</div>
                      <p className="text-slate-400 text-[15px] leading-relaxed relative z-10 px-2">
                        {project.details?.learnings}
                      </p>
                    </div>
                  </motion.section>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-10 border-t border-white/5 bg-slate-900/30 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-sm font-bold transition-all group/btn"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400 group-hover/btn:text-white transition-colors" />
                    Source Code
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-8 py-4 bg-linear-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-2xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95 group/live"
                  >
                    <Globe className="w-4 h-4 group-hover/live:rotate-12 transition-transform" />
                    Live Project
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/live:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 text-slate-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
