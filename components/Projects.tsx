"use client";

import Link from "next/link";
import { ArrowUpRight, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[var(--color-cream-100)]"
    >
      <div className="kicker">{t.projects.kicker}</div>
      <h2
        id="projects-heading"
        className="text-2xl md:text-3xl font-medium tracking-tight mb-10"
      >
        {t.projects.title}{" "}
        <span className="font-italic-serif">{t.projects.titleItalic}</span>
      </h2>

      <div className="flex flex-col gap-3">
        {t.projects.items.map((p, i) => {
          const inner = (
            <>
              <span className="font-mono text-lg text-[var(--color-stone-400)] leading-none pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="text-[15px] font-medium mb-1 flex items-center gap-2 flex-wrap">
                  {p.name}{" "}
                  <span className="font-italic-serif text-[13px] text-[var(--color-stone-500)] font-normal">
                    {p.sub}
                  </span>
                  {p.wip && (
                    <span className="font-mono text-[9px] tracking-wider text-[#d97706] border border-[#d97706]/40 rounded-full px-1.5 py-0.5 leading-none">
                      BUILDING
                    </span>
                  )}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-stone-500)] mb-3">
                  {p.desc}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-2 py-0.5 bg-[var(--color-teal-50)] text-[var(--color-teal-900)] rounded-full font-mono text-[10px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {p.wip ? (
                <Wrench size={15} className="text-[#d97706]/50 mt-1 shrink-0" aria-hidden />
              ) : (
                <ArrowUpRight
                  size={18}
                  className="text-[var(--color-stone-400)] mt-1 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-teal-600)]"
                  aria-hidden
                />
              )}
            </>
          );

          const base = "group grid grid-cols-[36px_1fr_20px] gap-4 items-start p-5 bg-white rounded-md border transition-all duration-300";

          return p.wip ? (
            <div
              key={p.slug}
              className={cn(base, "border-dashed border-[var(--color-cream-200)]")}
            >
              {inner}
            </div>
          ) : (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={cn(base, "border-[var(--color-cream-200)] hover:-translate-y-1 hover:border-[var(--color-teal-200)] active:scale-[0.98]")}
              aria-label={`${p.name} — ${p.sub}`}
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
