"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const h = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const navLinks = [
    { href: h("#projects"), label: t.nav.work },
    { href: h("#about"), label: t.nav.about },
    { href: h("#writing"), label: t.nav.writing },
    { href: h("#contact"), label: t.nav.contact },
  ];

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ThemeIcon = mounted && resolvedTheme === "dark" ? Sun : Moon;

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className={cn(
          "sticky top-0 z-50 backdrop-blur-md transition-all border-b",
          "bg-[var(--color-cream-50)]/85 border-[var(--color-cream-100)]",
          !scrolled && "md:bg-transparent md:border-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Logo */}
          <a
            href={pathname === "/" ? "#hero" : "/"}
            className="font-mono text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
            aria-label="Home"
          >
            jfjr<span className="text-[var(--color-teal-600)]">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 font-mono text-xs text-[var(--color-stone-500)]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[var(--color-teal-600)] transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle — always visible */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="w-8 h-8 flex items-center justify-center border border-[var(--color-cream-200)] rounded-md text-[var(--color-stone-400)] hover:border-[var(--color-teal-600)] hover:text-[var(--color-teal-600)] transition-colors"
            >
              <ThemeIcon size={13} aria-hidden />
            </button>

            {/* Language toggle — always visible */}
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              aria-label="Toggle language"
              className="flex font-mono text-[10px] tracking-wide items-center gap-1.5 px-2.5 py-1.5 border border-[var(--color-cream-200)] rounded-md hover:border-[var(--color-teal-600)] transition-colors"
            >
              <span className={cn(lang === "en" ? "text-[var(--color-teal-600)] font-medium" : "text-[var(--color-stone-400)]")}>EN</span>
              <span className="text-[var(--color-stone-400)]">·</span>
              <span className={cn(lang === "es" ? "text-[var(--color-teal-600)] font-medium" : "text-[var(--color-stone-400)]")}>ES</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden w-8 h-8 flex items-center justify-center border border-[var(--color-cream-200)] rounded-md text-[var(--color-stone-400)] hover:border-[var(--color-teal-600)] hover:text-[var(--color-teal-600)] transition-colors"
            >
              {mobileOpen ? <X size={15} aria-hidden /> : <Menu size={15} aria-hidden />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "visible" : "invisible pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-[var(--color-stone-900)]/40 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-72 bg-[var(--color-cream-50)] border-l border-[var(--color-cream-200)] flex flex-col transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-cream-100)]">
            <span className="font-mono text-sm font-medium tracking-wide">
              jfjr<span className="text-[var(--color-teal-600)]">.</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center text-[var(--color-stone-400)] hover:text-[var(--color-teal-600)] transition-colors"
            >
              <X size={15} aria-hidden />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-6 pt-6 flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 py-4 border-b border-[var(--color-cream-100)] group"
              >
                <span className="font-mono text-[10px] text-[var(--color-stone-400)] w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-sm text-[var(--color-stone-700)] group-hover:text-[var(--color-teal-600)] transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
