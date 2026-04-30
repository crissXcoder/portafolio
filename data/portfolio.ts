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
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  color?: string; // Brand color for the institution
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  url: string;
  color?: string; // Brand color for the issuer
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
    email: "crisaltamontes@gmail.com",
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
      id: "una-ingenieria",
      degree: "Ingeniería en Sistemas de Comunicación",
      institution: "Universidad Nacional de Costa Rica (UNA)",
      period: "2023 — Actualidad",
      status: "Cursando 4.º año",
      description: "Formación integral en infraestructura de red, seguridad informática y sistemas distribuidos. Especializado en el desarrollo de soluciones de software escalables y eficientes.",
      highlights: ["Último año de carrera", "Énfasis en desarrollo web y telemática", "Gestión de proyectos tecnológicos"],
      color: "#0066cc"
    },
    {
      id: "una-diplomado",
      degree: "Diplomado en Programación de Aplicaciones Informáticas",
      institution: "Universidad Nacional de Costa Rica (UNA)",
      period: "2023 — 2025",
      status: "Completado",
      description: "Base técnica sólida en fundamentos de programación, estructuras de datos, bases de datos relacionales y desarrollo de aplicaciones web multiplataforma.",
      highlights: ["Título intermedio obtenido", "Programación orientada a objetos", "Modelado de datos"],
      color: "#cc0000"
    }
  ],
  certifications: [
    {
      id: "scrum-fundamentals",
      title: "Scrum Fundamentals Certified",
      issuer: "SCRUMstudy",
      year: "2025",
      description: "Certificación en fundamentos de Scrum, gestión de sprints, roles y artefactos del framework para el desarrollo ágil de proyectos.",
      url: "/certs/scrum-fundamentals.pdf",
      color: "#6366f1"
    },
    {
      id: "cisco-data-science",
      title: "Introducción a la Ciencia de Datos",
      issuer: "Cisco Networking Academy",
      year: "2024",
      description: "Formación introductoria en conceptos básicos de ciencia de datos, análisis exploratorio, recopilación de información y fundamentos de visualización.",
      url: "/certs/cisco-data-science.pdf",
      color: "#00b4d8"
    }
  ],

  projects: [
    {
      title: "SIGADI-RC",
      subtitle: "ADI Río Cañas",
      description: "Plataforma institucional integral con sitio público y panel administrativo. Gestiona membresías, solicitudes, eventos, noticias, proyectos y sesiones con autenticación segura.",
      year: "2024",
      type: "Institutional",
      tags: ["Full-stack", "Fintech Local", "Social Impact"],
      technologies: ["NestJS", "React", "PostgreSQL", "TailwindCSS"],
      highlights: [
        "Módulos de afiliados, eventos y finanzas",
        "Panel administrativo con control de accesos",
        "Digitalización total de procesos comunitarios"
      ],
      githubUrl: "https://github.com/crissXcoder/canasysFronEnd",
      liveUrl: "https://sigadi-rc.org/",
    },
    {
      title: "Water-sf",
      subtitle: "ASADA San Fernando de Sámara",
      description: "Sitio institucional especializado en gestión hídrica y comunicación pública. Optimizado para alto rendimiento, SEO e indexación en buscadores.",
      year: "2024",
      type: "Institutional",
      tags: ["SEO", "Performance", "Public Sector"],
      technologies: ["Next.js", "TypeScript", "Zustand", "PostgreSQL"],
      highlights: [
        "Enfoque en comunicación y transparencia",
        "Optimización avanzada de rendimiento",
        "Indexación estructurada para servicios públicos"
      ],
      githubUrl: "https://github.com/1van2004/Water-SF",
      liveUrl: "https://www.water-sf.com/",
    },
    {
      title: "AstroAssist AI",
      subtitle: "E-commerce con IA",
      description: "Frontend e-commerce temático con asistencia técnica inteligente. Incluye catálogo dinámico, carrito de compras y un flujo de checkout visual modular.",
      year: "2024",
      type: "Personal",
      tags: ["AI", "E-commerce", "UX Design"],
      technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "TailwindCSS"],
      highlights: [
        "Asistente inteligente para resolución técnica",
        "Checkout visual con estructura modular",
        "Interfaz inmersiva con temática espacial"
      ],
      githubUrl: "https://github.com/crissXcoder/AstroAssist-AI-FrontEnd",
      liveUrl: "https://astro-assist-ai.vercel.app/en",
    },
    {
      title: "AutoStock Pro S.A.",
      subtitle: "Gestión Empresarial",
      description: "Sistema robusto para el control de inventarios, repuestos y ventas. Incluye módulos de auditoría, gestión de proveedores y reportes detallados.",
      year: "2024",
      type: "Professional",
      tags: ["Enterprise", "Inventory", "Auditing"],
      technologies: ["React", "Node.js", "SQL Server", "Dapper"],
      highlights: [
        "Control exhaustivo de stock y ventas",
        "Sistema de auditoría de movimientos",
        "Generación de reportes empresariales"
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "DataScienceHub",
      subtitle: "Modelado SQL Server",
      description: "Proyecto académico enfocado en modelado relacional complejo, carga masiva de datos JSON, optimización de consultas y vistas de auditoría.",
      year: "2024",
      type: "Academic",
      tags: ["Data Science", "Databases", "SQL"],
      technologies: ["SQL Server", "T-SQL", "Python", "Pandas"],
      highlights: [
        "Diseño relacional de alta complejidad",
        "Procesamiento y carga de archivos JSON",
        "Implementación de triggers y vistas de auditoría"
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "TalentLink",
      subtitle: "Dataset & SQL Analytics",
      description: "Plataforma de base de datos para la gestión de empleos. Aplicación de modelado relacional sobre datasets reales y consultas analíticas de alto nivel.",
      year: "2024",
      type: "Academic",
      tags: ["SQL", "Analytics", "Dataset Management"],
      technologies: ["React Native", "Firebase", "SQL Server", "Expo"],
      highlights: [
        "Modelado de datos para mercados laborales",
        "Transformación de datasets heterogéneos",
        "Consultas SQL optimizadas para análisis"
      ],
      githubUrl: "#",
      liveUrl: "#",
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
      title: "Análisis Predictivo",
      description: "Entiendo el problema en su totalidad antes de escribir la primera línea de código. Analizo la relación entre el modelo de datos y la interfaz.",
      highlight: "Arquitectura Primero"
    },
    {
      title: "Organización Modular",
      description: "Sistemas construidos por módulos independientes y reutilizables. Facilito el escalado y la mantenibilidad del software a largo plazo.",
      highlight: "Estructura Atómica"
    },
    {
      title: "Validación & Seguridad",
      description: "La integridad de los datos es innegociable. Implemento validaciones estrictas y capas de seguridad en cada punto de entrada.",
      highlight: "Data Integrity"
    },
    {
      title: "Experiencia de Usuario",
      description: "No solo construyo funciones; diseño flujos. El software debe ser intuitivo, rápido y accesible para cualquier perfil de usuario.",
      highlight: "UX Focused"
    },
    {
      title: "Mejora Continua",
      description: "Refactorización constante y adopción de nuevas tecnologías. Busco soluciones que no solo funcionen hoy, sino que perduren mañana.",
      highlight: "Evolución Técnica"
    },
    {
      title: "Documentación & Claridad",
      description: "Código limpio y autodocumentado. Valoro que el sistema sea fácil de entender para otros desarrolladores y para el cliente.",
      highlight: "Clean Documentation"
    }
  ],

  contributionAreas: [
    {
      title: "Desarrollo Frontend",
      description: "Experiencia práctica en la construcción de interfaces modernas, reactivas y altamente interactivas, priorizando el rendimiento.",
      keyTechs: ["Next.js & React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Desarrollo Backend",
      description: "Construcción de lógica de negocio robusta y APIs escalables bajo arquitecturas limpias y patrones de diseño modernos.",
      keyTechs: ["NestJS", "Node.js", "ASP.NET Core", "RESTful APIs"]
    },
    {
      title: "Bases de Datos",
      description: "Conocimientos aplicados en el modelado relacional, optimización de consultas complejas y gestión de integridad de datos.",
      keyTechs: ["PostgreSQL", "SQL Server", "MySQL", "TypeORM / Dapper"]
    },
    {
      title: "Análisis y Arquitectura",
      description: "Familiaridad con la estructuración de sistemas complejos, documentación técnica y metodologías de desarrollo ágil.",
      keyTechs: ["Clean Architecture", "Scrum", "UML", "System Design"]
    },
    {
      title: "UI/UX Aplicado",
      description: "Aplicación de principios de usabilidad y diseño centrado en el usuario para crear experiencias digitales intuitivas y accesibles.",
      keyTechs: ["Responsive Design", "Accesibilidad", "Prototipado", "Figma Design"]
    },
    {
      title: "Datos e IA Aplicada",
      description: "Interés e implementación de soluciones basadas en datos y agentes de inteligencia artificial para la automatización de procesos.",
      keyTechs: ["OpenAI API", "Vercel AI SDK", "Python", "Data Analysis"]
    }
  ],

  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/crissXcoder",
      platform: "github"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/cristhian-altamirano-montes-31b8013b5",
      platform: "linkedin"
    },
    {
      label: "Email",
      url: "mailto:crisaltamontes@gmail.com",
      platform: "email"
    }
  ]
};
