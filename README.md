<div align="center">

# juan-felipe-portfolio

**Personal portfolio of Juan Felipe Jaramillo Rodríguez**  
Cybersecurity engineer · Data security specialist · AI builder

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

</div>

---

## Overview

A bilingual (EN / ES), single-page portfolio with dynamic routes for project case studies and writing posts. Built from scratch with Next.js 15 App Router, Tailwind CSS v4 CSS-first config, and zero UI component libraries.

> *"Cybersecurity engineer building with AI — and securing what AI builds."*

---

## Features

| | Feature |
|---|---|
| 🌗 | **Dark / light mode** — system preference by default, manual override via Sun/Moon toggle; persists across sessions |
| 🌐 | **EN / ES i18n** — full bilingual support via React Context; language persists in `localStorage`, auto-detects browser locale |
| 📱 | **Mobile-first** — responsive at every breakpoint; hamburger drawer with slide-in animation for mobile nav |
| 🗂️ | **Hybrid routing** — single-page home + dedicated URLs for `/projects/[slug]` and `/writing/[slug]` |
| ✏️ | **Editorial typography** — Geist (sans) + Instrument Serif (italic accents) + JetBrains Mono (mono) |
| 🎞️ | **Certifications carousel** — horizontal scroll snap, arrow nav, keyboard (← →), progress bar, `aria-live` counter |
| 🃏 | **WIP project cards** — dashed border + amber `BUILDING` badge distinguishes in-progress from shipped work |
| ♿ | **Accessible** — semantic HTML, `aria-label`, focus-visible outlines, `prefers-reduced-motion` support |
| ⚡ | **Performant** — CSS transforms only, `next/image` with priority on hero, ~80KB gzip on home |

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 15** | App Router, React Server Components |
| UI | **React 19** | Client components only where needed |
| Styling | **Tailwind CSS v4** | CSS-first config via `@theme` in `globals.css` |
| Types | **TypeScript 5** | Strict mode; `Dict = typeof en` enforces i18n shape |
| Icons | **lucide-react** | Tree-shaken per icon |
| Theme | **next-themes** | `data-theme` attribute → CSS variable overrides |
| Fonts | **Geist · Instrument Serif · JetBrains Mono** | Via `next/font/google` |
| Hosting | **Vercel** | Zero-config Next.js deploy |

---

## Project Structure

```
juan-felipe-portfolio/
│
├── app/
│   ├── layout.tsx                  # Root layout — fonts, metadata, providers
│   ├── page.tsx                    # Home: composes all section components
│   ├── globals.css                 # @theme tokens, base styles, dark mode, animations
│   ├── projects/
│   │   └── [slug]/page.tsx         # Dynamic project case study pages
│   └── writing/
│       └── [slug]/page.tsx         # Dynamic blog post pages
│
├── components/
│   ├── Nav.tsx                     # Sticky nav — desktop links + mobile drawer
│   ├── ThemeProvider.tsx           # next-themes wrapper (data-theme attribute)
│   ├── BackLink.tsx                # Translated "← Back to …" for detail pages
│   ├── Hero.tsx                    # Layered photo hero with floating badges
│   ├── About.tsx                   # Polaroid photo + bio text
│   ├── Experience.tsx              # Vertical timeline
│   ├── Skills.tsx                  # 2×2 skill cards with animated accent line
│   ├── Certifications.tsx          # Horizontal scroll carousel
│   ├── Projects.tsx                # Project cards (built vs. WIP)
│   ├── Writing.tsx                 # Blog post list
│   ├── Contact.tsx                 # CTA + social links
│   └── Footer.tsx                  # Minimal footer
│
├── lib/
│   ├── i18n.tsx                    # Language context + all EN/ES translations
│   └── utils.ts                    # cn() — clsx + tailwind-merge helper
│
└── public/
    └── images/                     # Static assets (photos, cv.pdf)
```

---

## Quick Start

```bash
# Clone and install
git clone https://github.com/JuanFe2608/juan-felipe-portfolio.git
cd juan-felipe-portfolio
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

---

## Customization

### Content
All copy lives in [`lib/i18n.tsx`](lib/i18n.tsx). Edit the `en` and `es` objects — every section is labeled (`hero`, `about`, `experience`, `skills`, `projects`, `writing`, `contact`). TypeScript enforces that both languages have identical shapes (`type Dict = typeof en`).

### Projects & Writing
Static data objects live directly in the dynamic route pages:
- Projects → [`app/projects/[slug]/page.tsx`](app/projects/[slug]/page.tsx) — edit the `PROJECTS` record
- Writing → [`app/writing/[slug]/page.tsx`](app/writing/[slug]/page.tsx) — edit the `POSTS` record

> Swap for MDX by replacing the static objects with a markdown-parsing pipeline when the content grows.

### Design Tokens
The entire color palette and font stack are CSS variables defined in the `@theme` block of [`app/globals.css`](app/globals.css):

```css
/* Brand */
--color-teal-600:   #0f6e56;   /* primary accent  */
--color-purple-200: #afa9ec;   /* secondary accent */

/* Surfaces */
--color-cream-50:   #fafaf7;   /* page background  */
--color-cream-100:  #f1efe8;   /* card surface     */

/* Dark mode overrides — same file, @media + [data-theme] selectors */
```

To swap the brand color, replace the teal scale across `globals.css` and remove all `text-[var(--color-teal-*)]` references in components.

### Images
Drop files into `public/images/`:
- Hero portrait: any `3:4` aspect ratio, ~600×800 px
- About photo: same

### CV
Add `public/cv.pdf` — the Hero "Download CV" button links there automatically.

---

## Architecture Notes

### Dark mode
Implemented with CSS variable overrides rather than Tailwind's `dark:` variant, giving full control over the warm dark palette. `next-themes` writes a `data-theme` attribute on `<html>`:

```css
@layer base {
  @media (prefers-color-scheme: dark) { :root { /* warm dark tokens */ } }
  [data-theme="dark"]  { /* same tokens — for manual override */ }
  [data-theme="light"] { /* light tokens — overrides system pref */ }
}
/* bg-white needs a bare rule outside @layer to beat Tailwind's utility layer */
@media (prefers-color-scheme: dark) { .bg-white { background-color: var(--color-cream-100); } }
```

### i18n
No library — a single React Context (`I18nContext`) holds the active `Dict` object. `type Dict = typeof en` means TypeScript will error if the Spanish object is missing any key, preventing silent translation gaps.

### Nav routing
The Nav detects `pathname` via `usePathname()`. On the home page, links use `#section` hash anchors for smooth scroll. On detail pages (`/projects/*`, `/writing/*`), links resolve to `/#section` so clicking "Work" from a project page navigates home and scrolls to the projects section.

---

## Deploy

**Vercel** (recommended — zero config for Next.js):

1. Push to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo
3. Click **Deploy** — that's it

Each `git push` to `main` triggers an automatic redeploy. Custom domain can be added under **Project → Settings → Domains**.

---

## Roadmap

- [x] Dark / light mode with manual toggle
- [x] EN / ES bilingual support
- [x] Mobile responsive nav with drawer
- [x] WIP project badges
- [x] Dynamic routes for projects and writing
- [ ] Replace static data with MDX content pipeline
- [ ] Active section highlighting in nav on scroll
- [ ] View transitions between project pages (Next.js 15+)
- [ ] `/sitemap.xml` and `/robots.txt`
- [ ] Vercel Analytics or Plausible
- [ ] Open Graph image generator (Vercel OG)

---

<div align="center">

Made with intention — Juan Felipe Jaramillo · 2026

</div>
