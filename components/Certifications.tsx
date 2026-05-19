"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  ShieldCheck,
  Shield,
  Cloud,
  Lock,
  KeyRound,
  Bug,
  Award,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ICONS = [ShieldCheck, Shield, Cloud, Lock, KeyRound, Bug, Award];
const CARD_WIDTH = 208; // 192px card + 16px gap

export default function Certifications() {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const total = t.certs.items.length;

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pct = max > 0 ? Math.round((el.scrollLeft / max) * 100) : 0;
    setProgress(pct);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    const idx = Math.min(Math.round(el.scrollLeft / CARD_WIDTH) + 1, total);
    setCurrentIdx(idx);
  }, [total]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateState();
    el.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scroll = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({
      left: dir * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  // Keyboard navigation when section is focused
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll(1);
    }
  };

  return (
    <section
      id="certifications"
      aria-labelledby="certs-heading"
      onKeyDown={onKeyDown}
      tabIndex={0}
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[var(--color-cream-100)] focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-teal-600)] focus-visible:outline-offset-4 rounded-md"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div className="flex-1">
          <div className="kicker">{t.certs.kicker}</div>
          <h2
            id="certs-heading"
            className="text-2xl md:text-3xl font-medium tracking-tight mb-2"
          >
            {t.certs.title}{" "}
            <span className="font-italic-serif">{t.certs.titleItalic}</span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-stone-500)] max-w-md">
            {t.certs.lead}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Previous certifications"
            className="w-9 h-9 rounded-full border border-[var(--color-cream-200)] bg-white flex items-center justify-center text-[var(--color-stone-500)] hover:border-[var(--color-teal-600)] hover:bg-[var(--color-teal-50)] hover:text-[var(--color-teal-600)] hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ArrowLeft size={15} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Next certifications"
            className="w-9 h-9 rounded-full border border-[var(--color-cream-200)] bg-white flex items-center justify-center text-[var(--color-stone-500)] hover:border-[var(--color-teal-600)] hover:bg-[var(--color-teal-50)] hover:text-[var(--color-teal-600)] hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ArrowRight size={15} aria-hidden />
          </button>
        </div>
      </div>

      {/* Scroll wrapper — overflow-x:clip fixes zoom bleed without clipping vertical hover effects */}
      <div className="relative -mx-6 lg:-mx-10 [overflow-x:clip]">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mt-2 pt-2 pb-4 hide-scrollbar px-6 lg:px-10 scroll-pl-6 lg:scroll-pl-10"
        role="region"
        aria-label="Certifications carousel"
      >
        {t.certs.items.map((item, i) => {
          const Icon = ICONS[i] ?? ShieldCheck;
          const earned = item.earned;
          return (
            <article
              key={`${item.name}-${i}`}
              className={cn(
                "group relative shrink-0 w-[192px] snap-start p-5 pt-4 rounded-md border text-center cursor-pointer transition-all duration-300 ease-[var(--ease-fluid)] hover:-translate-y-1 overflow-hidden",
                earned
                  ? "bg-[var(--color-teal-50)] border-[var(--color-teal-200)]"
                  : "bg-white border-[var(--color-cream-200)] hover:border-[var(--color-teal-400)]"
              )}
            >
              {/* Top accent line */}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 top-0 h-[2px] bg-[var(--color-teal-600)] origin-left transition-transform duration-500 ease-[var(--ease-fluid)]",
                  earned
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )}
              />

              {/* Status badge */}
              <span
                className={cn(
                  "inline-block font-mono text-[9px] tracking-wider px-2 py-0.5 rounded-full mb-1",
                  earned
                    ? "bg-[var(--color-teal-600)] text-white animate-badge-pulse"
                    : "bg-[var(--color-cream-100)] text-[var(--color-stone-400)]"
                )}
              >
                {item.status}
              </span>

              {/* Icon */}
              <div className="relative w-12 h-12 mx-auto my-3">
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-0 rounded-full border border-dashed transition-all duration-500 ease-[var(--ease-fluid)]",
                    earned
                      ? "border-[var(--color-teal-600)] border-solid opacity-100"
                      : "border-[var(--color-teal-400)] opacity-0 group-hover:opacity-100 group-hover:scale-[1.18] group-hover:rotate-45"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-1 rounded-full flex items-center justify-center text-base transition-transform duration-500 ease-[var(--ease-fluid)] group-hover:-rotate-[8deg] group-hover:scale-105",
                    earned
                      ? "bg-[var(--color-teal-600)] text-white"
                      : "bg-[var(--color-cream-100)] text-[var(--color-stone-500)] border border-[var(--color-cream-200)]"
                  )}
                >
                  <Icon size={18} aria-hidden />
                </div>
              </div>

              <h3 className="text-[13px] font-medium leading-snug min-h-[34px] flex items-center justify-center">
                {item.name}
              </h3>
              <p className="font-mono text-[10px] text-[var(--color-stone-400)] tracking-wide mb-2">
                {item.org}
              </p>
              <p
                className={cn(
                  "font-mono text-[11px] pt-2 border-t",
                  earned
                    ? "text-[var(--color-teal-900)] border-[var(--color-teal-200)]"
                    : "text-[var(--color-stone-500)] border-[var(--color-cream-100)]"
                )}
              >
                {item.year}
              </p>
            </article>
          );
        })}
      </div>
      {/* Fade gradient — indicates more content to the right */}
      {canNext && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-[var(--color-cream-50)] via-[var(--color-cream-50)]/70 to-transparent"
        />
      )}
      </div>

      {/* Footer: counter + hint + progress bar */}
      <div className="flex justify-between font-mono text-[10px] text-[var(--color-stone-400)] tracking-wider mt-2 mb-2">
        <span aria-live="polite">
          {currentIdx} / {total}
        </span>
      </div>
      <div className="h-0.5 bg-[var(--color-cream-100)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--color-teal-600)] rounded-full transition-[width] duration-300 ease-[var(--ease-fluid)]"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Scroll progress"
        />
      </div>
    </section>
  );
}
