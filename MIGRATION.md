# Migration: benwedshannah.lovable.app → Next.js

Source: https://benwedshannah.lovable.app (Lovable / Vite + React + Tailwind v4 + shadcn, Supabase backend)
Target stack: Next.js (App Router), Tailwind CSS, shadcn/ui, Framer Motion, GSAP

## Status
- Phase 0 Survey: done (this file)
- Phase 1 Design system: done (tokens in `src/app/globals.css`, `/style-guide` route, notes in `CLAUDE.md`)
- Phase 2 Homepage: built; measured against original at 375px and 1024px (computed type, section heights). Awaiting your review. No pixel-diff score: no comparison tool exists in this project.
  - Matches: H1 60/75px, eyebrow 10.88px/.34em, body 16/24 Jost 300, hero 517px, all section heights (434/469/240/536) at 375px.
  - Known differences: guestbook uses placeholders (original has ~20 real messages, 2,768px tall at 375px); Next.js dev badge shows in dev only.
  - Additions not in original: GSAP hero intro timeline and Framer Motion scroll reveals. Toggle with `EXTRA_MOTION` in `src/lib/motion.ts` (set false for 1:1 static).
- Phase 3 Other templates: n/a (single page)
- Phase 4 Remainder: see below

## Templates
Only **one** template: a single mobile-first page, content column `max-w-[480px]` centred, always dark theme (`<html class="dark">`).

| # | Region | Notes |
|---|--------|-------|
| 1 | Fixed background | couple photo, `blur-[5px] saturate-[0.85] scale-110`, gradient overlay `from-background/70 via-background/55 to-background/80`, `fixed inset-0 -z-20` |
| 2 | Hero header | floral corner PNG (top-left, 132px), eyebrow "Save the Date", script H1 (60px), names block, frosted date strip (3 cells), frosted countdown (4 cells: days/hours/mins/secs, live) |
| 3 | Venue & Directions | eyebrow with gold `rule-line` rules either side, Google Maps iframe (220px), "Get Directions" outline button |
| 4 | RSVP | frosted card form: name, phone, "Who do you know?" select (4 options), submit button |
| 5 | Dress Code | "A Touch of White" + three colour swatches (white / ivory / cream) |
| 6 | Gifts & Support | 3 frosted cards (Mobile money, Bank transfer, Interac) each with COPY button |
| 7 | RSVP Contacts | 3 phone links |
| 8 | Prayers & Blessings | "Send blessing" form + long scrolling guestbook list (~2,400px) |
| 9 | Footer | "B & H", sign-off line, floral corner (bottom-right, rotated 180°, 60% opacity), music toggle button 🔊 (fixed) |

Page height at 1024px viewport: ~4,800px (guestbook dominates).

## Design tokens (read from computed styles / `:root`)
Fonts (Google Fonts, all self-hostable via `next/font`): **Cormorant Garamond** 400/600/700 + italic 400 (display), **Jost** 300/400/500 (body, default weight 300), **Beau Rivage** 400 (script).
Dark theme: background `oklch(21.92% .0165 58)`, foreground `oklch(94.18% .0138 90)`, card `oklch(27.12% .0175 58)`, muted-fg `oklch(75% .018 82)`, gold/accent `oklch(75.62% .0854 82)`, border `gold/.3`, glass `oklch(32% .018 58/.58)`, glass-border `gold/.22`, radius `.875rem`, shadow-frost `0 10px 30px -12px oklch(12% .01 58/.6)`.
`.frost` = glass bg + `backdrop-blur(14px) saturate(140%)` + 1px glass-border + shadow-frost + radius-xl.
`.eyebrow` = Jost 300, uppercase, tracking .34em, .68rem.
Light-theme tokens also exist in the source but are never active; not ported.
Breakpoints in source CSS: `40rem`, `48rem`, `(hover:hover)` only. The layout is a fixed 480px column, so the meaningful widths are mobile (390) and desktop (1024+).

## Animations found
The source ships **no** Framer Motion or GSAP. Motion is: Tailwind `animate-in` (fade/slide-in) utilities, `IntersectionObserver`-triggered reveals, live countdown tick, copy-button feedback, audio toggle. Still to measure frame by frame in Phase 2 (durations/easings per element). Framer Motion will own reveals/presence; GSAP will own hero intro timeline + any scroll-linked effects.

## Cannot come across / needs you
- Backend (Supabase; stubbed with in-memory `/api/rsvp` and `/api/blessings` route handlers, data resets on restart): RSVP + guestbook submissions and the stored messages. Not visible from outside.
- `couple.jpg` (real photo of the couple), `floral-corner.png`, `gratitude.mp3` (background music, likely a copyrighted song).
- Real personal/financial data on the page (bank account, mobile money, email, phone numbers, guests' messages). Not copied; placeholders used. See `migration.json` → `needsYou`.
- Pixel-score comparison tool: none provided in this project; measurement will be screenshot + computed-style comparison in the built-in browser.
