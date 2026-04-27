# Wes Johnson Basketball — Official Site

Production website for Wesley Johnson's basketball training operation in New Orleans. Built and maintained by EP Studio for partner Andrew Mendy / Andrew Mindy Designs.

**Live:** https://wes.enapragma.dev

## Stack

- Next.js 15 App Router (TypeScript, React 19)
- Custom CSS with design tokens (no Tailwind)
- Self-hosted fonts via `next/font/google` (Oswald + Work Sans + JetBrains Mono)
- Static rendering — no runtime DB, no API routes, no auth
- Deployed to Vercel via GitHub integration

## Routes

- `/` — Home (conversions: hero, credentials, philosophy, fit, pricing, elite, FAQ, ribbon)
- `/about` — The Journey (story, 6-stop journey, voice pillars, identity quote)
- `/contact` — Book the Floor (mailto booking, location, B&W static map, elite inquiry form)

## Development

```bash
pnpm install
pnpm dev          # localhost:3000
pnpm build        # production build
pnpm typecheck    # type-only check
```

## Source-of-truth docs

All design + content + brand voice docs live in the EP vault at `company/clients/andrew-mendy/wes-johnson-basketball/` — DESIGN.md, SITE-MAP.md, BRAND-VOICE.md, INTAKE.md, BUILD-LOG.md, ANDREW-FEEDBACK-*.md. The vault is the spec; this repo is the implementation.

## Build provenance

- v1–v9 built via the Mozey/Andrew-Method pipeline (v0 prototype → hand-coded → vercel deploy from /tmp). v9 source was lost when /tmp got cleaned — see `BUILD-LOG.md` Build 014.
- v10 (this repo) is the first version persisted to a real GitHub repo. Vault and git history are now both authoritative.
# WesJB
