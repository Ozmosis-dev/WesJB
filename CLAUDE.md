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
| Styling | **CSS Modules + CSS Variables** for scoped styles; **Tailwind v4** for layout utilities |
| Animation | **Framer Motion** — constants in `lib/motion.ts` |
| Icons | **lucide-react** + custom inline SVGs |
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

CSS variables in `globals.css`, scoped brand styles in `.module.css` files, Tailwind v4 utilities for layout.

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

### Styling Rules
- CSS Modules for scoped component/page styles — camelCase class names (`.heroHeadline`, `.tierFeatured`)
- Tailwind utilities for layout (flex, grid, gap, padding, overflow, whitespace, etc.) — inline in JSX
- Never mix: don't put layout in `.module.css`, don't put brand colors/typography in Tailwind arbitrary values
- Mobile-first, breakpoints at 768px / 480px / 360px
- Images via `next/image`, formats: AVIF + WebP
- Photos: `filter: grayscale(1) contrast(1.05)` by default — exceptions require explicit approval

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
  {/* CSS module for brand styles, Tailwind for layout */}
  <h1 className={`${s.heroHeadline} display flex items-center gap-3`}>...</h1>
</section>
```

---

## Animation System

All animation uses **Framer Motion**. Constants live in `lib/motion.ts` — always import from there.

```typescript
import { motion } from "framer-motion";
import { SPRING, fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/lib/motion";
```

### Constants (`lib/motion.ts`)
```typescript
SPRING = [0.32, 0.72, 0, 1]          // cubic-bezier — use for all ease values
fadeUpVariants                         // { hidden: opacity 0 + y 40 + blur 4px, visible: ... }
staggerContainerVariants               // staggerChildren: 0.1
staggerItemVariants                    // same as fadeUpVariants, for stagger children
```

### Pattern 1 — Hero entrance (page load, not scroll-triggered)
```tsx
// Word-by-word blur reveal — used for h1 on all pages
{"Your Headline Here".split(" ").map((word, i) => (
  <motion.span
    key={i}
    className="inline-block mr-[0.22em] last:mr-0"
    initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ delay: 0.22 + i * 0.08, duration: 0.55, ease: SPRING }}
  >
    {word}
  </motion.span>
))}

// Supporting text beneath hero h1
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.6, ease: SPRING }}
>
```

### Pattern 2 — Section entrance (scroll-triggered)
```tsx
// Single element fade-up with blur
<motion.div
  initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, ease: SPRING }}
>

// Shorthand using exported variants
<motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
```

### Pattern 3 — Stagger grid (cards, pillars, lists)
```tsx
<motion.ul
  variants={staggerContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
  {items.map((item) => (
    <motion.li key={item.label} variants={staggerItemVariants}>
      ...
    </motion.li>
  ))}
</motion.ul>
```

### Pattern 4 — Photo entrance
```tsx
// Slide in from side with blur (used when photo is beside text)
<motion.div
  initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
  whileInView={{ opacity: 0.75, x: 0, filter: "blur(0px)" }}  // note: opacity target = desired final opacity
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.8, ease: SPRING }}
>

// Scale-in for full-bleed photo backgrounds
<motion.div
  initial={{ scale: 1.05 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.4, ease: SPRING }}
>
```

### Pattern 5 — Staggered blockquote lines
```tsx
// Each line reveals separately — used for pull-quotes and large display text
{["Line One", "Line Two", "Line Three"].map((line, i) => (
  <motion.span
    key={line}
    className="block"
    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: i * 0.12, duration: 0.6, ease: SPRING }}
  >
    {line}
  </motion.span>
))}
```

### Pattern 6 — Infinite marquee
```tsx
// Outer wrapper: fades in on scroll
<motion.div
  className="overflow-hidden"
  initial={{ opacity: 0, filter: "blur(4px)" }}
  whileInView={{ opacity: 1, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.8, ease: SPRING }}
>
  {/* Inner strip: duplicate content 4x, animate -50% for seamless loop */}
  <motion.div
    className="flex whitespace-nowrap"
    style={{ width: "max-content" }}
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 35, ease: "linear", repeat: Infinity }}
  >
    {Array.from({ length: 4 }).map((_, i) => (
      <span key={i}>...repeated content...</span>
    ))}
  </motion.div>
</motion.div>
```

### Rules
- Always use `SPRING` for `ease` — never hardcode cubic-bezier strings
- `whileInView` always uses `viewport={{ once: true }}` — animations don't replay on scroll-up
- Hero animations use `animate`, not `whileInView`
- `margin` on viewport: `-100px` for section headers, `-80px` for cards, `-60px` for inline elements
- Never animate layout properties (width, height) — only opacity, transform (x/y/scale), filter

---

## Icons & SVGs

### Lucide icons
```typescript
import { ArrowRight, ChevronDown } from "lucide-react"
// Use for UI chrome (nav, buttons, arrows)
```

### Custom SVG icons in pillars/sections
Add as `icon: ReactNode` in the data constant, render with accent color wrapper:
```typescript
const ITEMS = [
  {
    label: "Section Title",
    body: "...",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path ... stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

// Render inline with title
<h3 className="... flex items-center gap-3">
  <span className="text-accent shrink-0">{item.icon}</span>
  {item.label}
</h3>
```

### Outline/stroke text (marquee style)
```tsx
<span
  className="font-display font-bold uppercase"
  style={{ WebkitTextStroke: "1.5px white", color: "transparent" }}
>
  Text Here
</span>
```

---

## Client Component Pattern

Pages that need Framer Motion or `useState` use a `_content.tsx` split:
```
app/about/page.tsx          ← server component, exports metadata
app/about/_content.tsx      ← "use client", all JSX and animation
```
`page.tsx` just renders `<AboutContent />`. This keeps metadata server-side while allowing client animations.

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

## Photos

Real photos in `/public/photos/`:
- `wes-pelicans-orange-bg.jpg` — Wes in Pelicans gear, orange background
- `WSJ youth.jpg` — Wes as a youth player (used in home photo break)
- `WSJ syracuse.png` — Wes at Syracuse (used in about page blockquote section)

Placeholder inspiration images in `/public/inspo/` — NOT final, awaiting replacement with real Wes photos.

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
