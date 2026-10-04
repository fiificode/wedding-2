/**
 * Single source of truth for everything personal on the page.
 * Values below are PLACEHOLDERS; replace them with your own details.
 * The couple's names/date/venue mirror the original layout so the typography can be verified.
 */
export const wedding = {
  groom: { first: "Marcus", short: "Marcus", middle: "Elijah Thompson Jnr." },
  bride: { first: "Naomi", short: "Naomi", middle: "Adaeze Grace Okafor" },
  weekday: "THURSDAY",
  dateShort: "5 NOV 2026",
  dateLabel: "5 November 2026",
  time: "@ 10 AM",
  /** ISO timestamp of the ceremony start (Accra = UTC+0). */
  startsAt: "2026-11-05T10:00:00Z",
  venue: {
    name: "Grace Chapel",
    address: "East Legon, Accra, Ghana",
    mapsQuery: "Grace Chapel, East Legon, Accra, Ghana",
  },
  dressCode: {
    title: "A Touch of White",
    body: "White, ivory and cream tones are warmly encouraged.\nWear a hint of white with us.",
  },
  contacts: [
    { name: "Contact Person One", phone: "000-000-0000" },
    { name: "Contact Person Two", phone: "000-000-0000" },
    { name: "Contact Person Three", phone: "000-000-0000" },
  ],
  whoOptions: ["Prefer not to say", "Groom's side", "Bride's side", "Both"],
  signoff: "With love, Marcus & Naomi",
  /** Placeholder guestbook entries (name, date, message). */
  blessings: [
    { name: "Guest One", date: "4 Oct 2026", message: "Placeholder blessing message. Replace with real guest messages from your backend." },
    { name: "Guest Two", date: "3 Oct 2026", message: "Another placeholder blessing, a little longer so the card layout wraps onto a second line to show how long messages behave." },
    { name: "Guest Three", date: "2 Oct 2026", message: "Short placeholder." },
  ],
} as const;
