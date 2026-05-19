"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Writing() {
  const { t } = useI18n();

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24 border-t border-[var(--color-cream-100)]"
    >
      <div className="kicker">{t.writing.kicker}</div>
      <h2
        id="writing-heading"
        className="text-2xl md:text-3xl font-medium tracking-tight mb-10"
      >
        {t.writing.title}{" "}
        <span className="font-italic-serif">{t.writing.titleItalic}</span>
      </h2>

      <ul className="max-w-3xl">
        {t.writing.items.map((post) => (
          <li
            key={post.slug}
            className="border-b border-[var(--color-cream-100)] last:border-b-0"
          >
            <Link
              href={`/writing/${post.slug}`}
              className="group grid grid-cols-[80px_1fr_50px] gap-4 items-center py-4 transition-all duration-200 hover:pl-2 active:opacity-70"
            >
              <span className="font-mono text-[11px] text-[var(--color-stone-400)]">
                {post.date}
              </span>
              <span className="text-[14px] font-medium">
                {post.title}{" "}
                <span className="font-italic-serif font-normal">
                  {post.italic}
                </span>
                {"titleEnd" in post ? post.titleEnd : ""}
              </span>
              <span className="font-mono text-[11px] text-[var(--color-stone-400)] text-right">
                {post.time}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
