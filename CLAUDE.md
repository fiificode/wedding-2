@AGENTS.md

## Design system (rebuilt from benwedshannah.lovable.app)
- Dark-only theme. Tokens live in `src/app/globals.css` (`:root`): background `oklch(21.92% .0165 58)`, foreground `oklch(94.18% .0138 90)`, gold `oklch(75.62% .0854 82)`, glass `oklch(32% .018 58/.58)`, radius `.875rem`.
- Fonts via `next/font`: Cormorant Garamond (`font-display`), Jost 300 body (`font-sans`), Beau Rivage (`font-script`).
- Utilities: `.frost` (glass card), `.eyebrow` (section label), `.rule-line` (gold gradient rule).
- Layout: single column `max-w-[480px]`, sections `px-6 py-[25px]`.
- All personal content (names, payment details, contacts, guest messages) lives in `src/content/wedding.ts` as placeholders.
- Motion: GSAP hero intro (`hero.tsx`), Framer Motion reveals (`reveal.tsx`); both gated by `EXTRA_MOTION` in `src/lib/motion.ts`.
- Visual reference: `/style-guide`.
