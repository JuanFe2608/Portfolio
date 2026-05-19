"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function BackLink({ type }: { type: "projects" | "writing" }) {
  const { t } = useI18n();
  const label = type === "projects" ? t.detail.backProjects : t.detail.backWriting;
  const href = type === "projects" ? "/#projects" : "/#writing";

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--color-stone-500)] hover:text-[var(--color-teal-600)] transition-colors mb-10"
    >
      <ArrowLeft size={12} aria-hidden /> {label}
    </Link>
  );
}
