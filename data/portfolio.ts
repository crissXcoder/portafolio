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

export interface ProjectDetails {
  context: string;
  contribution: string; // "Qué se trabajó"
  modules: string[];
  learnings: string;
  role: string;
}

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
  details?: ProjectDetails; // New detailed info
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
      title: "SIGADI-RC / ADI Río Cañas",
      subtitle: "Plataforma institucional para gestión comunitaria",
      description: "Plataforma web con sitio público y panel administrativo orientada a la gestión de información comunitaria, afiliados, reservas, noticias, eventos, proyectos y usuarios. El proyecto integra frontend, backend, base de datos, autenticación y flujos administrativos.",
      year: "2025 - 2026",
      type: "Institutional",
      tags: ["Fullstack", "Management", "Community"],
      technologies: [
        "React", "Vite", "TypeScript", "TailwindCSS", 
        "TanStack Query", "TanStack Router", "TanStack Form", "TanStack Table", 
        "Zustand", "Axios", "Zod", "NestJS", "TypeORM", "MySQL/MariaDB", "JWT", "Swagger"
      ],
      highlights: [
        "Digitalización de procesos comunitarios",
        "Arquitectura modular y escalable",
        "Gestión administrativa centralizada"
      ],
      githubUrl: "https://github.com/crissXcoder/canasysFrontEnd",
      liveUrl: "https://sigadi-rc.org/",
      details: {
        context: "El objetivo fue construir una solución digital integral para apoyar los procesos de la asociación de desarrollo, centralizando la información pública y administrativa en una plataforma moderna, mantenible y segura.",
        contribution: "Diseño y análisis de módulos públicos y administrativos, implementación de formularios complejos con validaciones, tablas administrativas con filtros y paginación, integración frontend-backend, seguridad de rutas y sesiones, y flujos de reservas con validaciones de negocio.",
        modules: [
          "Sitio público institucional y Panel administrativo",
          "Gestión de afiliados y solicitudes de afiliación",
          "Gestión de eventos, noticias y proyectos comunitarios",
          "Sistema de reservas con validaciones automáticas",
          "Autenticación segura y recuperación de contraseña",
          "Correos automáticos (MailService) y Auditoría"
        ],
        learnings: "Implementación de arquitectura modular, validación en doble capa, seguridad de sesiones con cookies httpOnly, separación estricta de rutas públicas/protegidas y diseño de formularios robustos para UX administrativa.",
        role: "Participación en el análisis, diseño, mejora e implementación de componentes frontend, validaciones, flujos administrativos, estructura modular, integración con API y revisión de seguridad entre frontend y backend."
      }
    },
    {
      title: "Water-sf / ASADA San Fernando de Sámara",
      subtitle: "Sitio institucional para comunicación pública y presencia digital",
      description: "Sitio web institucional enfocado en mejorar la comunicación pública, la visibilidad digital, la estructura del contenido y la experiencia de navegación. El trabajo se centró en optimización visual, rendimiento, SEO técnico e indexación.",
      year: "2026",
      type: "Institutional",
      tags: ["SEO", "Performance", "Public Presence"],
      technologies: ["React", "TailwindCSS", "Vercel", "SEO técnico", "Optimización web"],
      highlights: [
        "Optimización de presencia digital",
        "Estructura orientada al usuario",
        "Alto rendimiento y SEO técnico"
      ],
      githubUrl: "https://github.com/1van2004/Water-SF",
      liveUrl: "https://www.water-sf.com/",
      details: {
        context: "El sitio busca ofrecer información clara y accesible para los usuarios de la ASADA, fortaleciendo su presencia en línea y facilitando la consulta de contenido institucional de manera intuitiva.",
        contribution: "Revisión de la estructura pública del sitio, mejoras de diseño visual, análisis de rendimiento, revisión de indexación en buscadores, optimización de metadatos y organización lógica del contenido institucional.",
        modules: [
          "Sitio público institucional optimizado",
          "Secciones informativas y de transparencia",
          "Contenido estratégico orientado al usuario",
          "Estructura optimizada para buscadores",
          "Experiencia de navegación simplificada",
          "Revisión de visibilidad y despliegue"
        ],
        learnings: "Aplicación de SEO técnico, importancia de la estructura semántica para la accesibilidad, optimización de sitios institucionales y mejora de la percepción del usuario mediante el rendimiento y la organización de contenido.",
        role: "Participación en el análisis, mejora visual, revisión técnica y optimización de la estructura pública, rendimiento, SEO e indexación del sitio."
      }
    },
    {
      title: "AstroAssist AI",
      subtitle: "Frontend e-commerce con enfoque en asistencia inteligente",
      description: "Proyecto frontend de comercio electrónico temático con catálogo, carrito, checkout visual, productos relacionados y estructura modular. El proyecto explora cómo integrar asistencia inteligente y recomendaciones dentro de una experiencia de compra digital.",
      year: "2026",
      type: "Personal",
      tags: ["AI-Ready", "E-commerce", "Frontend Architecture"],
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Zustand", "Feature-Based Structure"],
      highlights: [
        "Experiencia e-commerce moderna",
        "Preparado para integración con IA",
        "Arquitectura escalable por features"
      ],
      githubUrl: "https://github.com/crissXcoder/AstroAssist-AI-FrontEnd",
      liveUrl: "https://astro-assist-ai.vercel.app/en",
      details: {
        context: "El objetivo fue construir una experiencia e-commerce moderna, clara y escalable, inicialmente con datos locales y preparada para conectarse posteriormente a un backend robusto y servicios de asistencia inteligente mediante IA.",
        contribution: "Limpieza y estabilización del frontend, organización modular por features, centralización del catálogo, implementación del store de carrito local, checkout visual y lógica de recomendaciones de productos relacionados.",
        modules: [
          "Catálogo de productos dinámico y detalle de producto",
          "Store de carrito local con persistencia y Drawer de compra",
          "Flujo de checkout visual y página de confirmación",
          "Lógica de recomendaciones y productos relacionados",
          "Estructura modular preparada para integración con IA",
          "Base de código estabilizada y documentación técnica"
        ],
        learnings: "Diseño de flujos e-commerce, organización frontend escalable, manejo eficiente del estado global, separación de lógica y UI, y preparación de la arquitectura para el consumo futuro de APIs de IA.",
        role: "Participación en la planificación, análisis, organización y desarrollo frontend del flujo e-commerce, estructura modular, catálogo, carrito, recomendaciones y preparación para integración futura con backend e IA."
      }
    },
    {
      title: "AutoStock Pro S.A.",
      subtitle: "Sistema empresarial para inventario, repuestos y trazabilidad",
      description: "Sistema orientado a la administración de repuestos, control de inventario, ventas, compras, proveedores, traslados, devoluciones, garantías, auditoría y reportes. El proyecto se trabajó desde una perspectiva modular, empresarial y orientada a procesos de negocio.",
      year: "2025",
      type: "Professional",
      tags: ["Enterprise", "Inventory", "Auditing"],
      technologies: [
        "React", "TypeScript", "Vite", "TailwindCSS", 
        "TanStack Query", "ASP.NET Core", "Dapper", "SQL Server"
      ],
      highlights: [
        "Administración integral de repuestos",
        "Trazabilidad y auditoría de stock",
        "Integración POS y Data Warehouse"
      ],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        context: "El objetivo fue diseñar y organizar una solución empresarial para controlar el inventario y las operaciones relacionadas con repuestos, considerando la trazabilidad, auditoría, integración con POS y la generación de reportes estratégicos.",
        contribution: "Análisis de requerimientos, diseño de módulos funcionales, estructura frontend por features, diseño de procesos de inventario, control de stock por sucursal, integración con ventas/POS y base técnica robusta con SQL Server y procedimientos almacenados.",
        modules: [
          "Gestión de repuestos y Stock por sucursal",
          "Módulo de Ventas, POS y Pedidos",
          "Compras, Órdenes de compra y Proveedores",
          "Traslados entre sucursales y Devoluciones",
          "Sistema de Auditoría y Reportes detallados",
          "Integración con Data Warehouse y Garantías"
        ],
        learnings: "Especialización en sistemas empresariales, trazabilidad de inventario, movimientos de stock, auditoría de procesos, diseño modular orientado a la operación administrativa y lógica de procesos de negocio complejos.",
        role: "Participación en el análisis del sistema, diseño modular, definición de requerimientos, estructura frontend, modelado de procesos de inventario y revisión de arquitectura para integración con base de datos y servicios empresariales."
      }
    },
    {
      title: "DataScienceHub",
      subtitle: "Proyecto académico de bases de datos y carga de datos JSON",
      description: "Proyecto académico desarrollado en SQL Server para modelar, cargar y consultar información relacionada con artículos científicos. Incluyó diseño relacional, relaciones muchos a muchos, carga desde JSON, vistas de resumen, auditoría y scripts administrativos.",
      year: "2025",
      type: "Academic",
      tags: ["SQL Server", "Data Engineering", "Academic"],
      technologies: ["SQL Server", "T-SQL", "JSON", "OPENJSON", "OPENROWSET", "DDL", "Vistas", "Auditoría"],
      highlights: [
        "Diseño relacional y normalización",
        "Transformación de datos JSON",
        "Auditoría y administración SQL"
      ],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        context: "El objetivo fue construir una base de datos relacional a partir de datos semiestructurados en formato JSON, aplicando principios de normalización, transformación de datos y consultas SQL avanzadas para el análisis de información académica.",
        contribution: "Diseño del modelo relacional, creación de DDL, definición de tablas maestras y puente, carga de datos masiva desde JSON utilizando OPENJSON, diseño de consultas analíticas y vistas de resumen técnico.",
        modules: [
          "Modelo relacional completo (Article, Author, Venue, Team)",
          "Relaciones muchos a muchos y tablas puente",
          "Carga y transformación de datos semiestructurados (JSON)",
          "Vistas analíticas y de resumen (vw_ArticleSummary)",
          "Sistema de auditoría interna y monitoreo de la base de datos",
          "Scripts administrativos y gestión de estructura (Filegroups)"
        ],
        learnings: "Dominio de normalización, modelado relacional complejo, transformación de datos semiestructurados a tablas SQL, implementación de auditoría interna y administración básica de motores de base de datos.",
        role: "Desarrollador del modelo relacional, scripts SQL, carga de datos, consultas, vistas y organización de entregables técnicos para el proyecto académico de Administración de Bases de Datos."
      }
    },
    {
      title: "TalentLink",
      subtitle: "Proyecto académico de base de datos con dataset de empleos",
      description: "Proyecto académico desarrollado en SQL Server a partir de un conjunto de datos de ofertas laborales. Se trabajó el diseño de la estructura relacional, carga desde JSON, transformación de datos y consultas SQL para analizar la información.",
      year: "2025",
      type: "Academic",
      tags: ["SQL Server", "Data Transformation", "Academic"],
      technologies: ["SQL Server", "T-SQL", "JSON", "DDL", "Consultas SQL", "Modelado Relacional"],
      highlights: [
        "Diseño de estructura relacional",
        "Ingesta y transformación de JSON",
        "Consultas analíticas laborales"
      ],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        context: "El objetivo fue tomar datos semiestructurados provenientes de un dataset de ofertas laborales y convertirlos en una base de datos relacional organizada, consultable y adecuada para el análisis descriptivo del mercado de empleo.",
        contribution: "Análisis del dataset original, diseño del modelo relacional, carga de datos desde JSON, transformación de información mediante T-SQL y desarrollo de consultas para la extracción de métricas relevantes.",
        modules: [
          "Modelado relacional de ofertas laborales",
          "Script DDL para creación de estructura",
          "Script de carga y parsing de JSON",
          "Transformación y limpieza de datos",
          "Consultas SQL para análisis de tendencias",
          "Organización de información de empleadores y puestos"
        ],
        learnings: "Experiencia en ingesta de datos, limpieza y transformación de información, diseño relacional aplicado a casos de uso reales y trabajo con estructuras de datos semiestructuradas.",
        role: "Desarrollo de scripts T-SQL, modelado relacional, carga de datos desde JSON y consultas para análisis dentro del contexto académico del proyecto."
      }
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
