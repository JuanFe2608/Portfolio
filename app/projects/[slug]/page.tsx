import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackLink from "@/components/BackLink";
import { notFound } from "next/navigation";

// Static project data — replace with MDX when ready
const PROJECTS: Record<
  string,
  {
    title: string;
    subtitle: string;
    year: string;
    stack: string[];
    repo?: string;
    sections: { heading: string; content: string }[];
  }
> = {
  "academic-agent": {
    title: "Academic Agent",
    subtitle: "AI-powered productivity assistant for university students",
    year: "2025 — 2026",
    stack: [
      "Python",
      "LangGraph",
      "Azure Foundry (GPT-4.1 mini)",
      "PostgreSQL + pgvector",
      "Azure Container Apps",
      "Microsoft Graph API",
      "WhatsApp Business API",
    ],
    repo: "https://github.com/JuanFe2608/academic_agent",
    sections: [
      {
        heading: "The problem",
        content:
          "University students struggle with time management. Existing tools are fragmented — Outlook, To-Do, a notebook — and nobody connects them. Students lose hours every week translating between systems instead of studying.",
      },
      {
        heading: "The solution",
        content:
          "A conversational AI agent reachable from WhatsApp that understands natural language, plans the academic calendar, and recommends personalized study methods — bridging the gap between chat, calendar, and task management.",
      },
      {
        heading: "Architecture",
        content:
          "WhatsApp Business API → LangGraph agent (state-machine-based) → GPT-4.1 mini for reasoning + Whisper small for voice transcription → RAG over PostgreSQL with pgvector → Microsoft Graph for bidirectional sync with Outlook Calendar and To-Do. Everything deployed on Azure Container Apps.",
      },
      {
        heading: "Results",
        content:
          "Tested with 13 university students. Strong qualitative feedback on the WhatsApp interface — students appreciated not having to leave the chat they already use daily. The bidirectional Outlook sync was highlighted as the standout feature.",
      },
      {
        heading: "What I learned",
        content:
          "Designing stateful agents with LangGraph. Production challenges of RAG (chunking strategies, retrieval precision). OAuth 2.0 flow with Microsoft Graph. Deploying multi-service containers on Azure. Designing for a conversational interface forces clarity in product thinking.",
      },
    ],
  },
  "phishguard-ai": {
    title: "PhishGuard AI",
    subtitle: "SOC copilot for automated phishing triage",
    year: "2025",
    stack: [
      "Python 3.12",
      "FastAPI",
      "LangGraph",
      "React 18",
      "TypeScript",
      "Azure OpenAI",
      "VirusTotal API v3",
      "jsPDF",
    ],
    repo: "https://github.com/JuanFe2608/PhishGuard-AI",
    sections: [
      {
        heading: "The problem",
        content:
          "SOC analysts spend hours manually triaging phishing emails — checking headers, verifying domains, querying threat intel, and writing reports. This repetitive work slows incident response and leaves teams exposed during peak attack windows.",
      },
      {
        heading: "The solution",
        content:
          "PhishGuard AI automates the full triage pipeline using a ReAct agent with specialized deterministic tools. Analysts submit a suspicious email; the agent runs SPF/DKIM/DMARC checks, queries VirusTotal, decodes QR codes, detects typosquatting, and produces a risk verdict (PHISHING / SUSPICIOUS / LEGITIMATE) with a confidence score and evidence chain.",
      },
      {
        heading: "Architecture",
        content:
          "React 18 + TypeScript frontend → FastAPI backend → LangGraph ReAct agent → specialized tools (email parser, DNS checker, VirusTotal v3, pyzbar QR decoder, typosquatting engine) → verdict generator → bilingual PDF export via jsPDF. Eight demo scenarios included for testing.",
      },
      {
        heading: "Results",
        content:
          "The system handles detection of phishing, BEC, VEC, quishing, and typosquatting scenarios. Bilingual (EN/ES) PDF reports include the full evidence chain, indicators of compromise, and department-level analytics aggregated by employee.",
      },
      {
        heading: "What I learned",
        content:
          "Designing deterministic tool pipelines for ReAct agents. Integrating threat intelligence APIs (VirusTotal v3) in a production-grade pipeline. Building a full-stack security tool with FastAPI + React. Email protocol analysis (SPF, DKIM, DMARC) at the code level.",
      },
    ],
  },
  "secops-knowledge-assistant": {
    title: "SecOps Knowledge Assistant",
    subtitle: "RAG-powered Q&A over security frameworks",
    year: "2026",
    stack: ["Python", "LangGraph", "pgvector", "OpenAI / Azure OpenAI"],
    sections: [
      {
        heading: "The problem",
        content:
          "Cybersecurity teams constantly reference frameworks like NIST CSF, ISO 27001, and OWASP Top 10 — but finding specific controls or interpretations buried in hundreds of pages of PDFs is slow.",
      },
      {
        heading: "The solution",
        content:
          "A RAG chatbot trained on indexed versions of NIST CSF 2.0, ISO 27001:2022, and OWASP Top 10 (2021). Answers questions in natural language with citations to the source document.",
      },
      {
        heading: "What I'm learning",
        content:
          "How retrieval quality changes when source documents are dense and highly structured. Different chunking strategies for compliance text. Reusing the LangGraph patterns from my thesis in a security-focused domain.",
      },
    ],
  },
  "sensitive-data-detector": {
    title: "Sensitive Data Detector",
    subtitle: "LLM-powered log scanner — mini Guardium for logs",
    year: "2026",
    stack: ["Python", "LLM (regex + LLM cascade)", "Click (CLI)"],
    sections: [
      {
        heading: "The problem",
        content:
          "Logs from applications often leak sensitive data — PII, credentials, API tokens, credit card numbers. Regex-only scanners produce too many false positives, while pure LLM scanners are slow and expensive at scale.",
      },
      {
        heading: "The solution",
        content:
          "A CLI tool that scans log files in a two-pass pipeline. First pass: fast regex to flag candidate lines. Second pass: a lightweight LLM classifies whether candidates are true positives. Reduces LLM calls by ~90% while keeping accuracy.",
      },
      {
        heading: "Inspiration",
        content:
          "Conceptually inspired by IBM Guardium's data classification capabilities — bringing the same idea (find sensitive data where it shouldn't be) to log files using modern LLM techniques.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 lg:px-10 pt-8 lg:pt-10 pb-16 lg:pb-24">
        <BackLink type="projects" />

        <div className="kicker">{project.year}</div>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
          {project.title}
        </h1>
        <p className="font-italic-serif text-xl text-[var(--color-stone-500)] mb-8">
          {project.subtitle}
        </p>

        {/* Stack */}
        <div className="mb-10 p-5 bg-[var(--color-teal-50)] border border-[var(--color-teal-200)] rounded-md">
          <p className="font-mono text-[10px] tracking-wider text-[var(--color-teal-600)] mb-2">
            STACK
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <li
                key={t}
                className="px-2.5 py-1 bg-white rounded-full font-mono text-[11px] text-[var(--color-teal-900)] border border-[var(--color-teal-100)]"
              >
                {t}
              </li>
            ))}
          </ul>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-mono text-[11px] text-[var(--color-teal-600)] hover:text-[var(--color-teal-800)]"
            >
              ↗ View repository
            </a>
          )}
        </div>

        {/* Sections */}
        {project.sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-lg font-medium mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[var(--color-teal-600)]" />
              {s.heading}
            </h2>
            <p className="text-[15px] leading-[1.8] text-[var(--color-stone-500)]">
              {s.content}
            </p>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
