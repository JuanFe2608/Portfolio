"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[var(--color-cream-100)]"
    >
      <div className="kicker">{t.about.kicker}</div>
      <h2
        id="about-heading"
        className="text-2xl md:text-3xl font-medium tracking-tight mb-12"
      >
        {t.about.title}{" "}
        <span className="font-italic-serif">{t.about.titleItalic}</span>
      </h2>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-center">
        {/* Polaroid */}
        <div className="relative flex items-center justify-center py-4">
          {/* Offset shape 2 — purple */}
          <div className="absolute inset-x-8 inset-y-5 bg-[var(--color-purple-200)] rounded-md rotate-[3deg] opacity-70" />
          {/* Offset shape 1 — teal */}
          <div className="absolute inset-x-6 inset-y-6 bg-[var(--color-teal-200)] rounded-md -rotate-[4deg]" />

          <div className="relative bg-[var(--color-cream-50)] border border-[var(--color-cream-200)] rounded-md p-2 pb-9 md:-rotate-[1.5deg] max-w-[240px] w-full transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
            <span className="absolute -top-2 -right-2 px-2.5 py-1 bg-[var(--color-teal-600)] text-white font-mono text-[9px] rounded-full rotate-[8deg] z-10">
              {t.about.polaroidStamp}
            </span>

            <div className="relative aspect-[3/4] bg-[var(--color-stone-700)] rounded-sm overflow-hidden">
              <Image
                src="/images/IMG_3573.jpeg"
                alt="Juan Felipe in NYC"
                fill
                sizes="(max-width: 768px) 240px, 260px"
                className="object-cover"
              />
            </div>

            <p className="absolute bottom-2 inset-x-3 text-center font-italic-serif text-xs text-[var(--color-stone-500)]">
              {t.about.polaroidCap}
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="text-[15px] leading-[1.75] text-[var(--color-stone-500)] space-y-3">
          <p>
            {t.about.p1Start}{" "}
            <strong className="font-medium text-[var(--color-stone-900)]">
              {t.about.p1Name}
            </strong>
            {t.about.p1End}
          </p>
          <p>
            {t.about.p2Start}{" "}
            <strong className="font-medium text-[var(--color-stone-900)]">
              {t.about.p2Mid}
            </strong>
            {t.about.p2End}
          </p>
          <p>
            {t.about.p3Start}{" "}
            <strong className="font-medium text-[var(--color-stone-900)]">
              {t.about.p3Mid}
            </strong>
            {t.about.p3End}
          </p>
        </div>
      </div>
    </section>
  );
}
