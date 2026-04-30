"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  X, 
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
  ArrowRight,
  Sparkles
} from "lucide-react";
import { type Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Badge } from "@/components/ui/Badge";

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

  const getTypeVariant = (type: string): "primary" | "secondary" | "accent" | "ghost" | "warning" => {
    switch (type.toLowerCase()) {
      case "institutional": return "secondary";
      case "academic": return "accent";
      case "professional": return "primary";
      case "personal": return "ghost";
      default: return "ghost";
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
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-5xl max-h-[92vh] bg-slate-950 border border-border-subtle rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Pattern Overlay */}
            <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-brand-primary/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-border-subtle text-text-muted hover:text-white transition-all z-50 group cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            </button>

            {/* Header Section */}
            <div className="p-8 md:p-12 pb-8 relative shrink-0">
              <motion.div variants={itemVariants} className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Badge variant={getTypeVariant(project.type)} icon={getTypeIcon(project.type)}>
                    {getTypeLabel(project.type)}
                  </Badge>
                  <Badge variant="ghost" icon={<Calendar className="w-3.5 h-3.5" />}>
                    {project.year}
                  </Badge>
                </div>

                <h2 id="modal-title" className="text-h1 font-bold text-white mb-4 tracking-tighter leading-none">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-brand-primary/40" />
                  <p className="text-body-lg text-text-muted font-medium tracking-wide">
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-0 custom-scrollbar relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-12">
                  {/* Highlighted Summary Card */}
                  <motion.section variants={itemVariants} className="relative group">
                    <div className="relative p-8 rounded-3xl bg-surface-card border border-border-subtle group-hover:border-brand-primary/20 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary border border-brand-primary/20 group-hover:scale-110 transition-transform">
                          <Target className="w-5 h-5" />
                        </div>
                        <h3 className="text-h3 font-bold text-white tracking-tight">Resumen Ejecutivo</h3>
                      </div>
                      <p className="text-white/80 leading-relaxed text-body font-light">
                        {project.details?.context || project.description}
                      </p>
                    </div>
                  </motion.section>

                  {/* Contribution Block */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-h3 font-bold text-white tracking-tight">Enfoque y Contribución</h3>
                    </div>
                    <div className="pl-14">
                      <p className="text-text-muted leading-relaxed text-body-sm">
                        {project.details?.contribution}
                      </p>
                    </div>
                  </motion.section>

                  {/* Features / Modules */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="text-h3 font-bold text-white tracking-tight">Módulos Técnicos</h3>
                    </div>
                    <div className="pl-14 grid grid-cols-1 gap-4">
                      {project.details?.modules.map((module, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/2 border border-border-subtle hover:border-brand-primary/20 hover:bg-brand-primary/5 transition-all group/item">
                          <div className="mt-1 h-5 w-5 shrink-0 flex items-center justify-center rounded-lg bg-slate-900 border border-border-subtle group-hover/item:border-brand-primary/50 transition-colors">
                            <ArrowRight className="w-3 h-3 text-text-muted group-hover/item:text-brand-primary transition-transform group-hover/item:translate-x-0.5" />
                          </div>
                          <span className="text-white/80 text-body-sm leading-relaxed">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-5 space-y-10">
                  {/* Role Block */}
                  <motion.section variants={itemVariants} className="p-8 rounded-3xl bg-brand-primary/5 border border-brand-primary/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                           <User2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-micro font-bold text-white uppercase tracking-widest">Mi Rol</h3>
                      </div>
                      <p className="text-white/80 text-body-sm leading-relaxed font-medium">
                        {project.details?.role}
                      </p>
                    </div>
                  </motion.section>

                  {/* Tech Stack Block */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="w-5 h-5 text-brand-accent" />
                      <h3 className="text-micro font-bold text-white uppercase tracking-widest">Tecnologías</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="ghost" className="px-4 py-2 border-border-subtle bg-slate-950/40 text-micro text-text-muted hover:text-brand-accent hover:border-brand-accent/20">
                           {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.section>

                  {/* Technical Approach / Learnings */}
                  <motion.section variants={itemVariants} className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-brand-secondary" />
                      <h3 className="text-micro font-bold text-white uppercase tracking-widest">Aprendizaje</h3>
                    </div>
                    <div className="p-6 rounded-2xl border border-border-subtle bg-white/2 relative transition-colors italic">
                      <div className="absolute top-4 left-4 text-4xl text-white/5 font-serif select-none">"</div>
                      <p className="text-text-muted text-body-sm leading-relaxed relative z-10 px-2">
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
              className="p-8 md:p-10 border-t border-border-subtle bg-slate-950 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-border-subtle rounded-2xl text-white text-micro font-bold transition-all duration-300 group/btn focus-visible:outline-2 focus-visible:outline-brand-primary"
                  >
                    <GithubIcon className="w-4 h-4 text-text-muted group-hover/btn:text-white transition-colors" />
                    CÓDIGO FUENTE
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-brand-primary hover:bg-brand-primary/80 text-white rounded-2xl text-micro font-bold transition-all duration-300 shadow-xl shadow-brand-primary/20 active:scale-95 group/live focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <Globe className="w-4 h-4 group-hover/live:rotate-12 transition-transform" />
                    DEMO EN VIVO
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/live:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-4 text-text-muted/60 hover:text-white text-micro font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                CERRAR SISTEMA
              </button>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;

