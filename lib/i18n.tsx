"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Lang = "en" | "es";

type Dict = typeof en;

export const en = {
  nav: {
    work: "Work",
    about: "About",
    writing: "Writing",
    contact: "Contact",
  },
  hero: {
    available: "Available for opportunities",
    name: "JUAN FELIPE JARAMILLO RODRÍGUEZ",
    titleStart: "Cybersecurity engineer building",
    titleWithItalic: "with",
    titleAi: "AI",
    titleEnd: "and securing what",
    titleAiSecond: "AI",
    titleFinal: "builds.",
    pitch:
      "Systems & Computing Engineer specializing in data security with IBM Guardium and AI-augmented workflows. ISC2 CC certified. Based in Bogotá, open globally.",
    ctaProjects: "View projects",
    ctaCv: "Download CV",
    badgeCert: "ISC2 CC",
    badgeGithub: "@JuanFe2608",
  },
  about: {
    section: "02 / ABOUT",
    kicker: "ABOUT ME",
    title: "Two worlds,",
    titleItalic: "one focus.",
    polaroidCap: "Travel teaches engineering.",
    polaroidStamp: "NYC · 2024",
    p1Start: "I'm",
    p1Name: "Juan Felipe Jaramillo Rodríguez",
    p1End:
      ", a Systems and Computing Engineer from Universidad Católica de Colombia. My path into cybersecurity started in a six-month research seminar NIST, ISO 27001, social engineering and led to my ISC2 CC certification.",
    p2Start: "For my undergraduate thesis I built an",
    p2Mid: "educational AI agent",
    p2End:
      " integrating WhatsApp, Microsoft Graph, and a RAG system on Azure. Tested with 13 students. Results validated the concept.",
    p3Start: "My focus is",
    p3Mid: "data security and applied AI",
    p3End:
      " — two worlds converging, where I want to build my career over the coming years.",
  },
  experience: {
    section: "03 / EXPERIENCE",
    kicker: "THE JOURNEY",
    title: "Steps along",
    titleItalic: "the way.",
    items: [
      {
        date: "JUN 2026 →",
        title: "Cybersecurity Analyst",
        org: "Cybersecurity Consultancy · Bogotá",
        desc: "Implementing IBM Guardium and other enterprise security platforms for clients across industries. Joining the customer success team.",
        future: true,
      },
      {
        date: "MAY 2026",
        title: "Systems & Computing Engineer",
        org: "Universidad Católica de Colombia",
        desc: "Graduated with a thesis on AI agents for academic productivity combining LangGraph, RAG, and Microsoft Graph.",
      },
      {
        date: "APR 2026",
        title: "ISC2 Certified in Cybersecurity",
        org: "(ISC)² · Credential earned",
        desc: "Passed the ISC2 CC exam covering security principles, BC/DR, access controls, network security, and security operations.",
      },
      {
        date: "2025 · H2",
        title: "Cybersecurity Research Seminar",
        org: "6 months · industry-led program",
        desc: "Hands-on training in NIST CSF, ISO 27001, social engineering analysis, and cybersecurity fundamentals.",
      },
    ],
  },
  skills: {
    section: "04 / SKILLS",
    kicker: "STACK & TOOLS",
    title: "What I",
    titleItalic: "work with.",
    lead: "A toolkit built between two disciplines: protecting systems and building with intelligence.",
    cards: [
      {
        name: "Security",
        sub: "core",
        tags: ["IBM Guardium", "NIST CSF", "ISO 27001", "ISC2 CC"],
        footL: "Primary focus",
        footR: "Daily",
      },
      {
        name: "AI & ML",
        sub: "applied",
        tags: ["LangGraph", "RAG", "pgvector", "OpenAI API"],
        footL: "Research project",
        footR: "Active",
      },
      {
        name: "Cloud",
        sub: "infra",
        tags: ["Azure Foundry", "Container Apps", "MS Graph"],
        footL: "Prod. deploys",
        footR: "Azure",
      },
      {
        name: "Engineering",
        sub: "fundamentals",
        tags: ["Python", "PostgreSQL", "REST APIs", "Git"],
        footL: "4+ years",
        footR: "Daily",
      },
    ],
    softLabel: "Beyond the stack",
    softSkills: [
      "Analytical thinking",
      "Communication",
      "Teamwork",
      "Continuous learning",
      "Detail-oriented",
    ],
  },
  certs: {
    section: "05 / CERTIFICATIONS",
    kicker: "CREDENTIALS",
    title: "Certifications",
    titleItalic: "earned & planned.",
    lead: "A continuous learning roadmap — what I hold, and what's coming next.",
    hint: "SCROLL OR USE ARROWS",
    items: [
      { name: "Certified in Cybersecurity", org: "(ISC)²", year: "2026", status: "EARNED", earned: true },
      { name: "Security+", org: "CompTIA", year: "Planned", status: "2027" },
      { name: "Security Specialty", org: "AWS", year: "Planned", status: "2027" },
      { name: "Azure Security AZ-500", org: "Microsoft", year: "Planned", status: "2027" },
      { name: "CCSP", org: "(ISC)²", year: "Planned", status: "2028" },
      { name: "Ethical Hacker", org: "EC-Council", year: "Planned", status: "2028" },
      { name: "CISSP", org: "(ISC)²", year: "Long-term", status: "2029+" },
    ],
  },
  projects: {
    section: "06 / WORK",
    kicker: "SELECTED PROJECTS",
    title: "Things I've",
    titleItalic: "built & deployed.",
    items: [
      {
        slug: "academic-agent",
        name: "Academic Agent",
        sub: "AI productivity assistant",
        desc: "A WhatsApp-native AI agent helping students plan academic work, integrated with Outlook Calendar & To-Do via Microsoft Graph. Tested with 13 students.",
        tags: ["LangGraph", "RAG", "Azure", "pgvector"],
        wip: false,
      },
      {
        slug: "phishguard-ai",
        name: "PhishGuard AI",
        sub: "SOC phishing triage copilot",
        desc: "Full-stack tool that automates phishing triage with a ReAct agent. Detects phishing, BEC, quishing and typosquatting — with VirusTotal intel, SPF/DKIM/DMARC analysis, and bilingual PDF reports.",
        tags: ["FastAPI", "LangGraph", "React", "Azure OpenAI", "VirusTotal"],
        wip: false,
      },
      {
        slug: "secops-knowledge-assistant",
        name: "SecOps Knowledge Assistant",
        sub: "compliance Q&A",
        desc: "RAG-powered chatbot answering questions about NIST CSF, ISO 27001, and OWASP Top 10 in natural language.",
        tags: ["RAG", "NIST", "OpenAI"],
        wip: true,
      },
      {
        slug: "sensitive-data-detector",
        name: "Sensitive Data Detector",
        sub: "LLM-powered log scanner",
        desc: "CLI tool that scans log files using a hybrid regex + LLM pipeline to detect PII, hardcoded credentials, and API tokens.",
        tags: ["Python", "LLM", "DLP"],
        wip: true,
      },
    ],
  },
  writing: {
    section: "07 / WRITING",
    kicker: "THOUGHTS & NOTES",
    title: "Things I've",
    titleItalic: "been writing.",
    items: [
      {
        slug: "isc2-cc-exam-prep",
        date: "2026 · 05",
        title: "How I prepared for the",
        italic: "ISC2 CC exam",
        time: "8 min",
      },
      {
        slug: "langgraph-thesis-lessons",
        date: "2026 · 04",
        title: "Building agents with LangGraph:",
        italic: "lessons from my thesis",
        time: "12 min",
      },
      {
        slug: "ibm-guardium-explained",
        date: "2026 · 03",
        title: "Database security with",
        italic: "IBM Guardium",
        titleEnd: ", explained",
        time: "10 min",
      },
    ],
  },
  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Let's",
    titleItalic: "build something.",
    sub: "Open to roles in cybersecurity, AI engineering, or the intersection of both.",
    email: "jufejaro@gmail.com",
    linkedin: "LinkedIn",
    github: "GitHub",
    calendar: "Schedule a call",
  },
  footer: {
    left: "© 2026 Juan Felipe Jaramillo",
    right: "Built with Next.js · Designed with intention",
  },
  detail: {
    backProjects: "Back to projects",
    backWriting: "Back to writing",
  },
};

export const es: Dict = {
  nav: {
    work: "Proyectos",
    about: "Sobre mí",
    writing: "Escritos",
    contact: "Contacto",
  },
  hero: {
    available: "Disponible para oportunidades",
    name: "JUAN FELIPE JARAMILLO",
    titleStart: "Ingeniero de ciberseguridad que construye",
    titleWithItalic: "con",
    titleAi: "IA",
    titleEnd: "y asegura lo que la",
    titleAiSecond: "IA",
    titleFinal: "construye.",
    pitch:
      "Ingeniero de Sistemas y Computación especializado en seguridad de datos con IBM Guardium y flujos potenciados por IA. Certificado ISC2 CC. Desde Bogotá, abierto al mundo.",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
    badgeCert: "ISC2 CC",
    badgeGithub: "@JuanFe2608",
  },
  about: {
    section: "02 / SOBRE MÍ",
    kicker: "SOBRE MÍ",
    title: "Dos mundos,",
    titleItalic: "un enfoque.",
    polaroidCap: "Viajar enseña ingeniería.",
    polaroidStamp: "NYC · 2024",
    p1Start: "Soy",
    p1Name: "Juan Felipe Jaramillo Rodríguez",
    p1End:
      ", Ingeniero de Sistemas y Computación egresado de la Universidad Católica de Colombia. Mi camino hacia la ciberseguridad comenzó con un semillero de seis meses donde aprendí los fundamentos desde NIST e ISO 27001 hasta el análisis de ataques de ingeniería social y me preparé para certificarme como ISC2 Certified in Cybersecurity.",
    p2Start: "En mi trabajo de grado desarrollé un",
    p2Mid: "agente de IA educativo",
    p2End:
      " integrando WhatsApp, Microsoft Graph y un sistema RAG sobre Azure. Lo probaron 13 estudiantes y los resultados validaron la idea.",
    p3Start: "Mi enfoque está en",
    p3Mid: "seguridad de datos e IA aplicada",
    p3End:
      " — dos mundos que están convergiendo y donde quiero construir mi carrera en los próximos años.",
  },
  experience: {
    section: "03 / EXPERIENCIA",
    kicker: "EL CAMINO",
    title: "Pasos en",
    titleItalic: "el recorrido.",
    items: [
      {
        date: "JUN 2026 →",
        title: "Analista de Ciberseguridad",
        org: "Consultora de Ciberseguridad · Bogotá",
        desc: "Implementando IBM Guardium y otras plataformas enterprise para clientes de distintas industrias. Equipo de customer success.",
        future: true,
      },
      {
        date: "MAY 2026",
        title: "Ingeniero de Sistemas y Computación",
        org: "Universidad Católica de Colombia",
        desc: "Egresado con tesis sobre agentes de IA para productividad académica combinando LangGraph, RAG y Microsoft Graph.",
      },
      {
        date: "ABR 2026",
        title: "ISC2 Certified in Cybersecurity",
        org: "(ISC)² · Credencial obtenida",
        desc: "Aprobé el examen ISC2 CC: principios de seguridad, BC/DR, controles de acceso, seguridad de red y operaciones.",
      },
      {
        date: "2025 · H2",
        title: "Semillero de Ciberseguridad",
        org: "6 meses · programa con la industria",
        desc: "Formación práctica en NIST CSF, ISO 27001, análisis de ingeniería social y fundamentos de ciberseguridad.",
      },
    ],
  },
  skills: {
    section: "04 / SKILLS",
    kicker: "STACK & HERRAMIENTAS",
    title: "Con qué",
    titleItalic: "trabajo.",
    lead: "Un toolkit construido entre dos disciplinas: proteger sistemas y construir con inteligencia.",
    cards: [
      {
        name: "Seguridad",
        sub: "core",
        tags: ["IBM Guardium", "NIST CSF", "ISO 27001", "ISC2 CC"],
        footL: "Enfoque principal",
        footR: "Diario",
      },
      {
        name: "IA & ML",
        sub: "aplicado",
        tags: ["LangGraph", "RAG", "pgvector", "OpenAI API"],
        footL: "Proyecto de tesis",
        footR: "Activo",
      },
      {
        name: "Cloud",
        sub: "infra",
        tags: ["Azure Foundry", "Container Apps", "MS Graph"],
        footL: "Despliegues",
        footR: "Azure",
      },
      {
        name: "Ingeniería",
        sub: "fundamentos",
        tags: ["Python", "PostgreSQL", "REST APIs", "Git"],
        footL: "4+ años",
        footR: "Diario",
      },
    ],
    softLabel: "Más allá del stack",
    softSkills: [
      "Pensamiento analítico",
      "Comunicación",
      "Trabajo en equipo",
      "Aprendizaje continuo",
      "Atención al detalle",
    ],
  },
  certs: {
    section: "05 / CERTIFICACIONES",
    kicker: "CREDENCIALES",
    title: "Certificaciones",
    titleItalic: "obtenidas y planeadas.",
    lead: "Un roadmap de aprendizaje continuo — lo que tengo y lo que viene.",
    hint: "SCROLL O FLECHAS",
    items: [
      { name: "Certified in Cybersecurity", org: "(ISC)²", year: "2026", status: "OBTENIDA", earned: true },
      { name: "Security+", org: "CompTIA", year: "Planeada", status: "2027" },
      { name: "Security Specialty", org: "AWS", year: "Planeada", status: "2027" },
      { name: "Azure Security AZ-500", org: "Microsoft", year: "Planeada", status: "2027" },
      { name: "CCSP", org: "(ISC)²", year: "Planeada", status: "2028" },
      { name: "Ethical Hacker", org: "EC-Council", year: "Planeada", status: "2028" },
      { name: "CISSP", org: "(ISC)²", year: "Largo plazo", status: "2029+" },
    ],
  },
  projects: {
    section: "06 / PROYECTOS",
    kicker: "PROYECTOS DESTACADOS",
    title: "Cosas que he",
    titleItalic: "construido & desplegado.",
    items: [
      {
        slug: "academic-agent",
        name: "Academic Agent",
        sub: "asistente de IA para productividad",
        desc: "Un agente de IA en WhatsApp que ayuda a estudiantes a planificar su trabajo académico, integrado con Outlook Calendar y To-Do vía Microsoft Graph. Probado con 13 estudiantes.",
        tags: ["LangGraph", "RAG", "Azure", "pgvector"],
        wip: false,
      },
      {
        slug: "phishguard-ai",
        name: "PhishGuard AI",
        sub: "copiloto SOC de triaje de phishing",
        desc: "Herramienta full-stack que automatiza el triaje de phishing con un agente ReAct. Detecta phishing, BEC, quishing y typosquatting — con inteligencia de VirusTotal, análisis SPF/DKIM/DMARC y reportes PDF bilingües.",
        tags: ["FastAPI", "LangGraph", "React", "Azure OpenAI", "VirusTotal"],
        wip: false,
      },
      {
        slug: "secops-knowledge-assistant",
        name: "SecOps Knowledge Assistant",
        sub: "Q&A sobre cumplimiento",
        desc: "Chatbot con RAG que responde preguntas sobre NIST CSF, ISO 27001 y OWASP Top 10 en lenguaje natural.",
        tags: ["RAG", "NIST", "OpenAI"],
        wip: true,
      },
      {
        slug: "sensitive-data-detector",
        name: "Sensitive Data Detector",
        sub: "scanner de logs con LLM",
        desc: "Herramienta CLI que escanea archivos de log con un pipeline híbrido regex + LLM para detectar PII, credenciales y tokens de API.",
        tags: ["Python", "LLM", "DLP"],
        wip: true,
      },
    ],
  },
  writing: {
    section: "07 / ESCRITOS",
    kicker: "PENSAMIENTOS & NOTAS",
    title: "Cosas que he",
    titleItalic: "estado escribiendo.",
    items: [
      {
        slug: "isc2-cc-exam-prep",
        date: "2026 · 05",
        title: "Cómo me preparé para el",
        italic: "examen ISC2 CC",
        time: "8 min",
      },
      {
        slug: "langgraph-thesis-lessons",
        date: "2026 · 04",
        title: "Construyendo agentes con LangGraph:",
        italic: "lecciones de mi tesis",
        time: "12 min",
      },
      {
        slug: "ibm-guardium-explained",
        date: "2026 · 03",
        title: "Seguridad de bases de datos con",
        italic: "IBM Guardium",
        titleEnd: ", explicado",
        time: "10 min",
      },
    ],
  },
  contact: {
    eyebrow: "HABLEMOS",
    title: "Construyamos",
    titleItalic: "algo juntos.",
    sub: "Abierto a roles en ciberseguridad, ingeniería de IA, o la intersección de ambos.",
    email: "jufejaro@gmail.com",
    linkedin: "LinkedIn",
    github: "GitHub",
    calendar: "Agendar una llamada",
  },
  footer: {
    left: "© 2026 Juan Felipe Jaramillo",
    right: "Hecho con Next.js · Diseñado con intención",
  },
  detail: {
    backProjects: "Volver a proyectos",
    backWriting: "Volver a escritos",
  },
};

const dictionaries: Record<Lang, Dict> = { en, es };

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Lang | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    } else {
      // Detect browser language
      const browser = navigator.language.toLowerCase();
      if (browser.startsWith("es")) setLangState("es");
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("portfolio-lang", next);
    document.documentElement.lang = next;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
