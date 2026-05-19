"use client";

import Image from "next/image";
import { ArrowRight, Github, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24"
    >
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-[var(--color-teal-50)] text-[var(--color-teal-900)] mb-5"
            role="status"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal-600)] animate-blink" />
            {t.hero.available}
          </span>

          <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-stone-500)] mb-3">
            {t.hero.name}
          </p>

          <h1
            id="hero-heading"
            className="text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.08] tracking-tight mb-5"
          >
            {t.hero.titleStart}{" "}
            <span className="font-italic-serif text-[var(--color-stone-500)]">
              {t.hero.titleWithItalic}
            </span>{" "}
            <span className="inline-block bg-[var(--color-teal-600)] text-white px-2 -rotate-[1deg]">
              {t.hero.titleAi}
            </span>{" "}
            {t.hero.titleEnd}{" "}
            <span className="font-italic-serif text-[var(--color-stone-500)]">
              {t.hero.titleAiSecond}
            </span>{" "}
            {t.hero.titleFinal}
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed text-[var(--color-stone-500)] mb-7 max-w-xl">
            {t.hero.pitch}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-teal-600)] text-white text-sm font-medium rounded-md border border-[var(--color-teal-600)] hover:bg-[var(--color-teal-800)] hover:border-[var(--color-teal-800)] transition-colors"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={14} aria-hidden />
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border border-[var(--color-cream-200)] hover:border-[var(--color-teal-600)] hover:text-[var(--color-teal-600)] transition-colors"
            >
              {t.hero.ctaCv}
            </a>
          </div>
        </div>

        {/* Photo stage — layered with hover separation */}
        <div className="relative flex items-center justify-center [perspective:1200px] min-h-[320px] group">
          <div className="relative w-[200px] h-[260px] md:w-[220px] md:h-[290px] cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-10deg)_rotateX(6deg)_translateZ(20px)]">
            {/* Layer back — purple */}
            <div className="absolute inset-0 rounded-md bg-[var(--color-purple-200)] translate-x-3 translate-y-3 rotate-[4deg] transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-[8deg]" />
            {/* Layer middle — teal */}
            <div className="absolute inset-0 rounded-md bg-[var(--color-teal-200)] translate-x-1.5 translate-y-1.5 -rotate-[2deg] transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-[5deg]" />
            {/* Layer front — photo */}
            <div className="absolute inset-0 rounded-md border border-[var(--color-cream-200)] bg-[var(--color-stone-700)] overflow-hidden">
              <Image
                src="/images/JFJR.png"
                alt="Juan Felipe Jaramillo Rodriguez"
                fill
                priority
                sizes="(max-width: 768px) 200px, 220px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating badge — ISC2 */}
          <div className="absolute top-2 right-2 md:right-6 bg-white border border-[var(--color-cream-200)] rounded-md px-2.5 py-1.5 font-mono text-[10px] inline-flex items-center gap-1.5 text-[var(--color-teal-600)] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-[3deg]">
            <ShieldCheck size={11} aria-hidden />
            {t.hero.badgeCert}
          </div>

          {/* Floating badge — GitHub */}
          <div className="absolute bottom-6 left-2 md:left-0 bg-white border border-[var(--color-cream-200)] rounded-md px-2.5 py-1.5 font-mono text-[10px] inline-flex items-center gap-1.5 text-[var(--color-purple-600)] transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-[3deg]">
            <Github size={11} aria-hidden />
            {t.hero.badgeGithub}
          </div>
        </div>
      </div>
    </section>
  );
}
