# Juan Felipe Jaramillo — Portfolio

A bilingual (EN/ES) portfolio for a cybersecurity engineer specializing in data security and applied AI. Built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**.

> Cybersecurity engineer building with AI — and securing what AI builds.

---

## ✨ Features

- **Bilingual** EN/ES with a persistent language toggle (saved to `localStorage`)
- **Hybrid architecture** — one-page home + dedicated pages for projects and writing
- **Distinctive typography** — Geist (sans) + Instrument Serif (italic accents) + JetBrains Mono
- **Cinematic certifications carousel** — horizontal scroll snap with arrow nav, progress bar, and keyboard support
- **Layered hero photo** with 3D hover separation
- **Polaroid-style About photo** with offset shapes and stamp
- **Smooth scroll**, focus-visible accessibility, and `prefers-reduced-motion` support
- **SEO-ready** with OpenGraph + Twitter cards
- **Fully responsive** — designed mobile-first
- **Zero runtime dependencies** beyond React + lucide-react icons

---

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

---

## 📁 Structure

```
juan-felipe-portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, I18nProvider
│   ├── page.tsx                # Home (composes all sections)
│   ├── globals.css             # Tailwind v4 @theme tokens + base styles
│   ├── projects/[slug]/page.tsx  # Dynamic project case studies
│   └── writing/[slug]/page.tsx   # Dynamic blog posts
├── components/
│   ├── Nav.tsx                 # Sticky nav with language toggle
│   ├── Hero.tsx                # Layered photo hero
│   ├── About.tsx               # Polaroid + bio
│   ├── Experience.tsx          # Vertical timeline
│   ├── Skills.tsx              # 2×2 styled cards
│   ├── Certifications.tsx      # Horizontal scroll carousel
│   ├── Projects.tsx            # Linked project cards
│   ├── Writing.tsx             # Blog post teasers
│   ├── Contact.tsx             # CTA + social links
│   └── Footer.tsx              # Minimal footer
├── lib/
│   ├── i18n.tsx                # Language context + all translations (EN/ES)
│   └── utils.ts                # cn() helper
└── public/
    └── images/                 # Add your headshot.jpg and nyc-vessel.jpg here
```

---

## ✏️ How to customize

### 1. Add your images

Drop these files into `public/images/`:

- `headshot.jpg` — your hero portrait (recommend ~600×800px, optimized)
- `nyc-vessel.jpg` — your About-section photo (~600×800px portrait)

### 2. Edit content

All copy lives in **`lib/i18n.tsx`** — open it and edit the `en` or `es` objects.
Each section's content is clearly labeled (`hero`, `about`, `experience`, `skills`, etc.).

### 3. Update the CV

Add your CV as `public/cv.pdf` — the Hero "Download CV" button links there.

### 4. Update social links

Open `components/Contact.tsx` and replace:
- LinkedIn URL: `linkedin.com/in/juanfelipe-jaramillo`
- GitHub URL: `github.com/JuanFe2608`
- Calendar URL: `cal.com/juanfelipe`

### 5. Add a real email

In `lib/i18n.tsx`, edit `contact.email` in both `en` and `es`.

### 6. Add real project case studies

Open `app/projects/[slug]/page.tsx` and edit the `PROJECTS` object — each entry maps a URL slug (e.g., `academic-agent`) to its content. To swap for MDX later, replace the static data with a markdown-parsing pipeline.

### 7. Add blog posts

Same pattern in `app/writing/[slug]/page.tsx` — edit the `POSTS` object.

---

## 🎨 Design tokens

All color and typography tokens live in **`app/globals.css`** under the `@theme` block. The palette is teal-led with purple as a secondary accent.

```css
--color-teal-600: #0f6e56;   /* Primary brand */
--color-teal-50:  #e1f5ee;   /* Soft backgrounds */
--color-purple-200: #afa9ec; /* Hero/About accent */
--color-cream-50: #fafaf7;   /* Page background */
```

To change the primary color, swap the teal scale for any other (e.g., `--color-blue-*`).

---

## 🌐 Deploy

The easiest way is **Vercel** (creator of Next.js):

1. Push to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Deploy. Done.

Custom domain: in Vercel → Project → Settings → Domains, add `juanfelipej.dev`.

---

## ♿ Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<ol>`)
- `aria-label` and `aria-labelledby` on all major regions
- Focus-visible outlines using the brand color
- `prefers-reduced-motion` disables all animations
- Keyboard navigation supported on the certifications carousel (←/→ when focused)
- `aria-live` on the carousel counter for screen-reader updates

---

## 📊 Performance notes

- All animations use CSS transforms (no layout thrash)
- Fonts loaded with `display=swap` to avoid blocking render
- Images use `next/image` with priority on the hero
- No client-side JavaScript libraries beyond React + lucide icons
- Production build: ~80KB gzipped JS for the home page (estimated)

---

## 🗺️ Roadmap

Suggested next iterations:

- [ ] Replace static `PROJECTS` and `POSTS` objects with MDX content
- [ ] Add a dark mode toggle
- [ ] Add view transitions (Next.js 15+) between project pages
- [ ] Implement `/sitemap.xml` and `/robots.txt`
- [ ] Add analytics (Vercel Analytics or Plausible)
- [ ] Add an Open Graph image generator using Vercel OG

---

## 🛠️ Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (beta) |
| Type system | TypeScript 5 |
| Icons | lucide-react |
| Fonts | Geist · Instrument Serif · JetBrains Mono (Google Fonts) |
| Hosting (recommended) | Vercel |

---

Made with intention by Juan Felipe — May 2026.
