"use client";

import { Mail, Linkedin, Github, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[var(--color-cream-100)]/60 border-t border-[var(--color-cream-100)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
        <div className="kicker !text-[var(--color-teal-600)]">
          {t.contact.eyebrow}
        </div>
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-medium tracking-tight mb-3"
        >
          {t.contact.title}{" "}
          <span className="font-italic-serif">{t.contact.titleItalic}</span>
        </h2>
        <p className="text-sm md:text-[15px] text-[var(--color-stone-500)] mb-8 max-w-xl mx-auto">
          {t.contact.sub}
        </p>

        <a
          href={`mailto:${t.contact.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-teal-600)] text-white text-[14px] font-medium rounded-md border border-[var(--color-teal-600)] hover:bg-[var(--color-teal-800)] hover:border-[var(--color-teal-800)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <Mail size={16} aria-hidden />
          {t.contact.email}
        </a>

        <div className="flex flex-wrap justify-center gap-5 mt-6 font-mono text-[11px] text-[var(--color-stone-500)]">
          <a
            href="https://www.linkedin.com/in/juan-felipe-jaramillo-rodriguez-a8b820192"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-teal-600)] transition-colors"
          >
            <Linkedin size={12} aria-hidden /> {t.contact.linkedin}
          </a>
          <a
            href="https://github.com/JuanFe2608"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-teal-600)] transition-colors"
          >
            <Github size={12} aria-hidden /> {t.contact.github}
          </a>
          <a
            href="https://cal.com/juanfelipe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-teal-600)] transition-colors"
          >
            <Calendar size={12} aria-hidden /> {t.contact.calendar}
          </a>
        </div>
      </div>
    </section>
  );
}
