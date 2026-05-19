"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[var(--color-cream-100)]"
    >
      <div className="kicker">{t.experience.kicker}</div>
      <h2
        id="experience-heading"
        className="text-2xl md:text-3xl font-medium tracking-tight mb-10"
      >
        {t.experience.title}{" "}
        <span className="font-italic-serif">{t.experience.titleItalic}</span>
      </h2>

      <ol className="relative pl-7 max-w-2xl">
        {/* Vertical line */}
        <span
          aria-hidden
          className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-[var(--color-cream-200)]"
        />

        {t.experience.items.map((item, i) => (
          <li
            key={i}
            className={cn("relative pb-7 last:pb-0", item.future && "future")}
          >
            <span
              aria-hidden
              className={cn(
                "absolute -left-[26px] top-1.5 w-[11px] h-[11px] rounded-full ring-2 ring-[var(--color-cream-50)]",
                item.future
                  ? "bg-[var(--color-cream-50)] outline outline-1 outline-[var(--color-teal-600)]"
                  : "bg-[var(--color-teal-600)] outline outline-1 outline-[var(--color-teal-600)]"
              )}
            />
            <div className="font-mono text-[11px] text-[var(--color-stone-400)] tracking-wider mb-1">
              {item.date}
            </div>
            <h3 className="text-[15px] font-medium leading-snug">
              {item.title}
            </h3>
            <p className="font-mono text-[11px] text-[var(--color-teal-600)] mt-0.5 mb-1.5">
              {item.org}
            </p>
            <p className="text-[13px] leading-relaxed text-[var(--color-stone-500)]">
              {item.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
