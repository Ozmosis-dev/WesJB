# WesJB Site — Claude Context

## What This Is

Marketing/conversion website for **Wesley Johnson's basketball training** operation in New Orleans. Three pages: Home (pricing), About (story), Contact (booking). Static site, no backend.

**Live:** `wes.enapragma.dev` | **Status:** v10, production-ready, actively maintained

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 — **App Router** |
| React | 19.x |
| Styling | **Custom CSS Modules + CSS Variables** — no Tailwind |
| State | `useState` in one client component only |
| Auth | None |
| Data | Hardcoded constants in page files |
| Package mgr | **pnpm** |
| Build | `next dev --turbopack` |

---

## Project Structure

```
app/
├── layout.tsx             # Root layout: fonts, base metadata, Nav + Footer
├── page.tsx               # Home: hero, credentials, pricing, elite, pillars, FAQ
├── globals.css            # Design tokens + primitive classes (291 lines)
├── home.module.css        # Home page styles (477 lines)
├── robots.ts              # SEO robots.txt
├── sitemap.ts             # SEO sitemap
├── icon.tsx               # Favicon via next/og
├── apple-icon.tsx         # Apple icon via next/og
├── opengraph-image.tsx    # OG image: home
├── about/
│   ├── page.tsx           # About: 6-stop journey, voice pillars, identity quote
│   ├── about.module.css
│   └── opengraph-image.tsx
├── contact/
│   ├── page.tsx           # Contact: booking cards, maps embed, elite form
│   ├── contact.module.css
│   ├── elite-inquiry-form.tsx  # "use client" — only client component
│   └── opengraph-image.tsx
└── components/
    ├── nav.tsx / nav.module.css
    └── footer.tsx / footer.module.css

public/
├── wjb-wordmark.png
├── photos/wes-pelicans-orange-bg.jpg   # Only real Wes photo
└── inspo/                              # Placeholder images — NOT final
```

---

## Design System

**No Tailwind.** CSS variables in `globals.css`, scoped styles in `.module.css` files.

### Key Tokens
```css
--color-bg          /* dark base */
--color-surface     /* card/panel bg */
--color-warm        /* warm section bg */
--color-text        /* body text */
--color-accent      /* #c0541a — orange brand */
--content-max: 1280px
--space-section / --space-gutter / --space-card
--ease-snap         /* cubic-bezier for transitions */
```

### Primitive Classes (in globals.css — use these, don't recreate)
```
.display .eyebrow .lead .body
.cta-primary .cta-secondary .cta-text
.section .section--surface .section--warm
```

### Rules
- CSS Modules for all component/page scoping
- camelCase CSS class names (`.heroHeadline`, `.tierFeatured`)
- Mobile-first, breakpoints at 768px / 480px / 360px
- All photos: `filter: grayscale(1) contrast(1.05)`
- Images via `next/image`, formats: AVIF + WebP

---

## Conventions

### Adding a New Page
1. Create `app/[route]/page.tsx` — export default server component
2. Create `app/[route]/[route].module.css` alongside it
3. Add `export const metadata: Metadata` to the page
4. Add route to `sitemap.ts`
5. Add OG image: `app/[route]/opengraph-image.tsx`

### Adding Components
- Shared across pages → `app/components/`
- Used by one page only → co-locate in `app/[route]/`
- Needs `useState`/`useEffect`/event handlers → add `"use client"` directive at top
- Otherwise → leave as server component (default)

### Content Data Pattern
Hardcode content as typed constants at top of page files:
```typescript
const PRICING_TIERS: PricingTier[] = [...]
const FAQ: { q: string; a: string }[] = [...]
```

### Styling Pattern
```typescript
import s from './contact.module.css'
// ...
<section className={s.hero}>
  <h1 className={`${s.heroHeadline} display`}>...</h1>
</section>
```

---

## Server vs Client Components

**Default is server.** Only add `"use client"` when needed:
- `elite-inquiry-form.tsx` — uses `useState` for form submission state
- That's the only client component in the codebase

Do not add `"use client"` to pages or layout.

---

## Environment Variables

**Zero required for local dev.** App runs with just `pnpm install && pnpm dev`.

**Optional (auto-set by Vercel in production):**
```
VERCEL_PROJECT_PRODUCTION_URL    # Falls back to https://wes.enapragma.dev
```

---

## Local Setup

```bash
pnpm install
pnpm dev          # http://localhost:3000 with Turbopack
pnpm typecheck    # TypeScript check
pnpm build        # Production build
pnpm lint
```

---

## What NOT to Change

- **CSS variable names** in `globals.css` — used everywhere, renaming breaks all pages
- **Primitive class names** (`.display`, `.section`, `.cta-primary`, etc.) — same reason
- **`next/image` usage** — required for AVIF/WebP optimization; don't swap for `<img>`
- **App Router structure** — no `/pages` dir, keep everything in `/app`
- **Photo grayscale filter** — intentional design choice
- **`"use client"` placement** — only on `elite-inquiry-form.tsx`, nowhere else

---

## Known Placeholders

- `/public/inspo/` — placeholder inspiration images, NOT final Wes photos
- Only real photo: `/public/photos/wes-pelicans-orange-bg.jpg`
- Photo break sections on Home and Contact use inspo images — awaiting real photos

---

## Content Locations (for copy edits)

| Content | File | Where |
|---|---|---|
| Pricing tiers | `app/page.tsx` | `PRICING_TIERS` constant |
| FAQ | `app/page.tsx` | `FAQ` constant |
| Pillars | `app/page.tsx` and `app/about/page.tsx` | `PILLARS` constant |
| Journey stops | `app/about/page.tsx` | `JOURNEY` constant |
| Nav links | `app/components/nav.tsx` | inline JSX |
| Footer content | `app/components/footer.tsx` | inline JSX |
| Page metadata | Each `page.tsx` | `export const metadata` |
| OG image copy | Each `opengraph-image.tsx` | inline JSX |
| Contact email | Multiple files | search `mailto:` |
