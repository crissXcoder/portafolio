/**
 * PORTFOLIO DATA CENTRALIZATION
 * 
 * Este archivo centraliza todo el contenido del portafolio con tipado estricto.
 * Para añadir nuevo contenido, siga las interfaces definidas abajo.
 */

// --- TYPES ---

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  location: string;
  tagline: string;
}

export interface HeroData {
  rotatingTitles: string[];
  mainHeading: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  url: string;
}

export type ProjectType = 'Professional' | 'Academic' | 'Personal' | 'Institutional';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  tags: string[];
  technologies: string[];
  type: ProjectType;
  highlights: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface WorkPrinciple {
  title: string;
  description: string;
  highlight: string;
}

export interface ContributionArea {
  title: string;
  description: string;
  keyTechs: string[];
}

export interface ContactLink {
  label: string;
  url: string;
  platform: 'github' | 'linkedin' | 'email' | 'other';
}

export interface PortfolioData {
  profile: Profile;
  hero: HeroData;
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  skills: SkillCategory[];
  workPrinciples: WorkPrinciple[];
  contributionAreas: ContributionArea[];
  socialLinks: ContactLink[];
}

// --- DATA ---

export const portfolioData: PortfolioData = {
  profile: {
    name: "Cristhian Altamirano Montes",
    title: "Desarrollador de Software en formación",
    subtitle: "Sistemas web · Bases de datos · Inteligencia Artificial aplicada",
    description: "Estudiante avanzado de Ingeniería en Sistemas de Comunicación con enfoque en la construcción de soluciones de software robustas, escalables y orientadas a datos. Especializado en arquitecturas modernas y metodologías ágiles.",
    tagline: "Enfocado en sistemas web, gestión de datos e IA aplicada.",
    email: "crisalmont@gmail.com",
    location: "Costa Rica",
  },

  hero: {
    rotatingTitles: [
      "Software Developer en formación",
      "Estudiante de Ingeniería UNA",
      "Enfocado en Datos e IA",
      "Full-stack Web Enthusiast"
    ],
    mainHeading: "Ingeniería aplicada a la construcción de soluciones digitales.",
    description: "Desarrollo de aplicaciones robustas con un enfoque técnico en la escalabilidad, el análisis de información y la integración de inteligencia artificial.",
  },

  education: [
    {
      degree: "Ingeniería en Sistemas de Comunicación",
      institution: "Universidad Nacional de Costa Rica (UNA)",
      period: "2023 — Presente",
      status: "Actualmente cursando 4.º y último año",
      highlights: [
        "Enfoque en desarrollo de software y telemática",
        "Diplomado en Programación de Aplicaciones Informáticas (2025)"
      ],
    }
  ],

  certifications: [
    {
      title: "Scrum Fundamentals Certified",
      issuer: "SCRUMstudy",
      year: "2025",
      description: "Validación de conocimientos en metodologías ágiles y gestión de proyectos bajo el framework Scrum.",
      url: "https://www.scrumstudy.com/certification/scrum-fundamentals-certified",
    },
    {
      title: "Introducción a la Ciencia de Datos",
      issuer: "Cisco Networking Academy",
      year: "2024",
      description: "Fundamentos de análisis de datos, visualización y toma de decisiones basada en información.",
      url: "#",
    }
  ],

  projects: [
    {
      title: "SIGADI-RC",
      subtitle: "Sistema de Gestión Administrativa",
      description: "Plataforma integral para la Asociación de Desarrollo Integral de Río Cañas, automatizando el control de membresías y finanzas comunitarias.",
      year: "2024",
      type: "Institutional",
      tags: ["Full-stack", "Fintech Local", "Social Impact"],
      technologies: ["NestJS", "React", "PostgreSQL", "TailwindCSS"],
      highlights: [
        "Digitalización del 100% de los procesos administrativos manuales",
        "Generación automatizada de reportes financieros",
        "Gestión de usuarios y roles con alta seguridad"
      ],
      githubUrl: "https://github.com/crisalmont/sigadi-rc",
      liveUrl: "#",
      imageUrl: "/projects/sigadi.jpg"
    },
    {
      title: "Water-sf",
      subtitle: "Gestión Hídrica Inteligente",
      description: "Sistema especializado para la ASADA San Fernando de Sámara, optimizando la facturación y el monitoreo de infraestructura hídrica.",
      year: "2024",
      type: "Institutional",
      tags: ["Infrastructure", "Monitoring", "Automation"],
      technologies: ["Next.js", "TypeScript", "Zustand", "PostgreSQL", "TanStack Table"],
      highlights: [
        "Módulo de facturación masiva con validación técnica",
        "Dashboard interactivo para monitoreo de consumo",
        "Arquitectura escalable para múltiples comunidades"
      ],
      githubUrl: "https://github.com/crisalmont/water-sf",
      liveUrl: "#",
      imageUrl: "/projects/watersf.jpg"
    },
    {
      title: "AstroAssist AI",
      subtitle: "Asistente Técnico Inteligente",
      description: "Agente de inteligencia artificial diseñado para asistir en la resolución de problemas de programación y consulta de documentación técnica.",
      year: "2024",
      type: "Personal",
      tags: ["AI", "LLM", "Developer Tools"],
      technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "TailwindCSS"],
      highlights: [
        "Integración de modelos GPT para respuestas contextuales",
        "Interfaz minimalista y optimizada para desarrolladores",
        "Capacidad de análisis de fragmentos de código"
      ],
      githubUrl: "https://github.com/crisalmont/astroassist",
      liveUrl: "#",
      imageUrl: "/projects/astroassist.jpg"
    },
    {
      title: "AutoStock Pro S.A.",
      subtitle: "Control de Inventarios Automotrices",
      description: "Sistema robusto de gestión de inventarios para repuestos automotrices, con integración de facturación y alertas de stock.",
      year: "2024",
      type: "Academic",
      tags: ["Inventory", "B2B", "Enterprise"],
      technologies: ["React", "Node.js", "SQL Server", "TanStack Query", "Dapper"],
      highlights: [
        "Optimización de consultas SQL complejas para reportes",
        "Manejo de estados globales con TanStack",
        "Sistema de alertas preventivas de desabastecimiento"
      ],
      githubUrl: "#", // TODO: Añadir repo
      liveUrl: "#",
      imageUrl: "/projects/autostock.jpg"
    },
    {
      title: "DataScienceHub",
      subtitle: "Laboratorio de Visualización de Datos",
      description: "Plataforma interactiva para el análisis y exploración de datasets complejos mediante herramientas modernas de ciencia de datos.",
      year: "2024",
      type: "Academic",
      tags: ["Data Science", "Analytics", "Education"],
      technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
      highlights: [
        "Visualizaciones interactivas en tiempo real",
        "Limpieza y procesamiento automatizado de datos",
        "Documentación integrada de hallazgos estadísticos"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "/projects/datascience.jpg"
    },
    {
      title: "TalentLink",
      subtitle: "Plataforma de Conexión Estudiantil",
      description: "Ecosistema digital diseñado para conectar el talento universitario con oportunidades de pasantías y primer empleo técnico.",
      year: "2024",
      type: "Academic",
      tags: ["UX/UI", "Job Board", "Education"],
      technologies: ["React Native", "Firebase", "TailwindCSS", "Expo"],
      highlights: [
        "Diseño mobile-first centrado en la experiencia del usuario",
        "Sistema de autenticación y perfiles dinámicos",
        "Filtros de búsqueda avanzados por competencias"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: "/projects/talentlink.jpg"
    }
  ],

  skills: [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vite", "TypeScript", "TailwindCSS", "Zustand"]
    },
    {
      title: "Data & State Management",
      skills: ["TanStack Query", "TanStack Router", "TanStack Form", "TanStack Table"]
    },
    {
      title: "Backend & API Design",
      skills: ["NestJS", "TypeORM", "ASP.NET Core", "Dapper", "Swagger", "Postman"]
    },
    {
      title: "Databases",
      skills: ["MySQL/MariaDB", "SQL Server", "T-SQL", "PostgreSQL"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Vercel", "Docker", "Linux"]
    }
  ],

  workPrinciples: [
    {
      title: "Mantenibilidad",
      description: "Escribo código pensando en quien lo leerá mañana, priorizando la legibilidad y la estructura.",
      highlight: "Clean Code"
    },
    {
      title: "Eficiencia",
      description: "El análisis previo y el modelado correcto ahorran horas de refactorización innecesaria.",
      highlight: "Análisis Primero"
    },
    {
      title: "Adaptabilidad",
      description: "Aprendizaje continuo para dominar las herramientas que mejor resuelven el problema actual.",
      highlight: "Evolución Constante"
    }
  ],

  contributionAreas: [
    {
      title: "Desarrollo Web Full-stack",
      description: "Creación de aplicaciones web dinámicas y responsivas, optimizadas para el rendimiento y la experiencia del usuario.",
      keyTechs: ["Next.js & React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Arquitectura de Datos",
      description: "Diseño de esquemas eficientes, migraciones de datos y optimización de consultas complejas.",
      keyTechs: ["PostgreSQL", "MySQL", "TypeORM"]
    },
    {
      title: "IA & Automatización",
      description: "Implementación de lógica inteligente y automatización de flujos de trabajo mediante la integración de APIs de IA.",
      keyTechs: ["OpenAI API", "Vercel AI SDK", "Python"]
    },
    {
      title: "Sistemas Backend",
      description: "Construcción de APIs robustas y seguras, siguiendo principios de Clean Architecture.",
      keyTechs: ["NestJS", "Node.js", "API Design"]
    },
    {
      title: "UI/UX Engineering",
      description: "Traducción de diseños complejos a componentes funcionales, priorizando la accesibilidad.",
      keyTechs: ["Framer Motion", "Shadcn/ui", "Responsive Design"]
    },
    {
      title: "Sistemas Móviles",
      description: "Desarrollo de interfaces móviles eficientes y comunicación fluida con servicios backend.",
      keyTechs: ["React Native", "Expo", "Mobile UI"]
    }
  ],

  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/crisalmont",
      platform: "github"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/crisalmont",
      platform: "linkedin"
    },
    {
      label: "Email",
      url: "mailto:crisalmont@gmail.com",
      platform: "email"
    }
  ]
};
