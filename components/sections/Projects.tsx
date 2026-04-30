"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Globe, 
  Terminal, 
  Database, 
  Layout, 
  Building2, 
  GraduationCap, 
  Briefcase,
  ExternalLink,
  ChevronRight,
  Info
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Container } from "@/components/ui/Container";
import { portfolioData, type Project } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[128px] translate-y-1/2" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-mono text-indigo-400 tracking-[0.3em] uppercase">
                Selección de Trabajos
              </span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              Proyectos <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-emerald-400 font-serif italic">Destacados</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-slate-400 text-lg leading-relaxed"
            >
              Una visión honesta de mi trayectoria técnica: desde sistemas institucionales de alto impacto hasta exploraciones académicas y de IA.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href={portfolioData.socialLinks.find((s: any) => s.platform === 'github')?.url || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-2"
              aria-label="Ver todos los repositorios en GitHub"
            >
              <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" aria-hidden="true" />
              Ver Repositorio Completo
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project: Project, index: number) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "institutional": return <Building2 className="w-3.5 h-3.5" />;
      case "academic": return <GraduationCap className="w-3.5 h-3.5" />;
      case "professional": return <Briefcase className="w-3.5 h-3.5" />;
      case "personal": return <Terminal className="w-3.5 h-3.5" />;
      default: return <Layout className="w-3.5 h-3.5" />;
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col h-full bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 backdrop-blur-sm"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Header: Type Badge */}
      <div className="p-6 pb-0 flex justify-between items-start relative z-10">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${getTypeColor(project.type)}`}>
          {getTypeIcon(project.type)}
          {project.type}
        </div>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          {project.year}
        </span>
      </div>

      {/* Main Content */}
      <div className="p-8 flex flex-col flex-1 relative z-10">
        <div className="mb-4">
          <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-xs text-indigo-400/80 font-mono mt-1 uppercase tracking-wide">
            {project.subtitle}
          </p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>

        {/* Technical Highlights */}
        <div className="space-y-3 mb-8">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-3 group/item">
              <div className="mt-1.5 h-1 w-1 rounded-full bg-indigo-500/50 group-hover/item:bg-indigo-400 transition-colors" />
              <span className="text-[11px] text-slate-500 group-hover/item:text-slate-300 transition-colors leading-tight">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto mb-8">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-0.5 bg-slate-950/50 text-slate-500 text-[9px] font-mono rounded border border-white/5 uppercase tracking-tighter hover:text-indigo-300 hover:border-indigo-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-slate-600 text-[9px] font-mono">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-6 border-t border-white/5">
          {project.githubUrl !== "#" ? (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-xs font-semibold transition-all group/btn focus-visible:outline-2 focus-visible:outline-indigo-400"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white" aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-slate-600 text-xs font-semibold cursor-not-allowed">
              Privado
            </div>
          )}

          {project.liveUrl !== "#" && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white border border-indigo-500/20 rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-indigo-400"
              title="Ver Demo"
              aria-label={`Ver demo en vivo de ${project.title}`}
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
          
          {project.liveUrl !== "#" && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-indigo-400"
              title="Ver Detalles"
              aria-label={`Ver detalles de ${project.title}`}
            >
              <Info className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export { Projects };
export default Projects;
