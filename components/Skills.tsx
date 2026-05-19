"use client";

import { useI18n } from "@/lib/i18n";
import { ShieldCheck, Brain, Cloud, Code2 } from "lucide-react";

const ICONS = [ShieldCheck, Brain, Cloud, Code2];

export default function Skills() {
  const { t } = useI18n();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[var(--color-cream-100)]"
    >
      <div className="kicker">{t.skills.kicker}</div>
      <h2
        id="skills-heading"
        className="text-2xl md:text-3xl font-medium tracking-tight mb-3"
      >
        {t.skills.title}{" "}
        <span className="font-italic-serif">{t.skills.titleItalic}</span>
      </h2>
      <p className="text-sm leading-relaxed text-[var(--color-stone-500)] mb-10 max-w-xl">
        {t.skills.lead}
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {t.skills.cards.map((card, i) => {
          const Icon = ICONS[i];
          return (
            <article
              key={card.name}
              className="group relative p-5 bg-white border border-[var(--color-cream-200)] rounded-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-teal-400)] active:scale-[0.98] overflow-hidden"
            >
              {/* Accent line — animates on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] bg-[var(--color-teal-600)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[var(--ease-fluid)]"
              />

              {/* Number tag */}
              <span className="absolute top-3 right-4 font-mono text-[11px] text-[var(--color-stone-400)]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Head */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[var(--color-teal-50)] text-[var(--color-teal-900)] rounded-md border border-[var(--color-teal-100)] flex items-center justify-center">
                  <Icon size={18} aria-hidden />
                </div>
                <h3 className="text-[15px] font-medium">
                  {card.name}{" "}
                  <span className="font-italic-serif text-[12px] text-[var(--color-stone-500)]">
                    {card.sub}
                  </span>
                </h3>
              </div>

              {/* Tags */}
              <ul className="flex flex-wrap gap-1.5 mb-4">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-2 py-0.5 bg-[var(--color-cream-100)] rounded-full font-mono text-[10px] text-[var(--color-stone-500)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Footer meta */}
              <div className="pt-3 border-t border-[var(--color-cream-100)] flex justify-between font-mono text-[10px] text-[var(--color-stone-400)]">
                <span>{card.footL}</span>
                <span>{card.footR}</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Soft skills — visually distinct from tech stack tags */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10px] text-[var(--color-stone-400)] tracking-wider uppercase mr-1">
          {t.skills.softLabel}
        </span>
        {t.skills.softSkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 border border-[var(--color-cream-200)] rounded-full text-[11px] text-[var(--color-stone-500)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
