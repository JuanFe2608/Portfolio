"use client";

import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--color-cream-100)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[10px] text-[var(--color-stone-400)]">
        <span>{t.footer.left}</span>
        <span>{t.footer.right}</span>
      </div>
    </footer>
  );
}
