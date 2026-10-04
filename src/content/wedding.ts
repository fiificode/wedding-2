/**
 * Single source of truth for everything personal on the page.
 * Values below are PLACEHOLDERS; replace them with your own details.
 * The couple's names/date/venue mirror the original layout so the typography can be verified.
 */
export const wedding = {
  groom: { first: "Benjamin", short: "Ben", middle: "Kenneth Sey Jnr." },
  bride: { first: "Hannah", short: "Hannah", middle: "Aghogho Poweide Onovwakpor" },
  weekday: "THURSDAY",
  dateShort: "5 NOV 2026",
  dateLabel: "5 November 2026",
  time: "@ 10 AM",
  /** ISO timestamp of the ceremony start (Accra = UTC+0). */
  startsAt: "2026-11-05T10:00:00Z",
  venue: {
    name: "Love Economy Church",
    address: "Thesaurus – Agbogba, Accra, Ghana",
    mapsQuery: "Love Economy Church, Agbogba, Accra, Ghana",
  },
  dressCode: {
    title: "A Touch of White",
    body: "White, ivory and cream tones are warmly encouraged.\nWear a hint of white with us.",
  },
  gifts: [
    { initial: "M", method: "MOBILE MONEY", value: "000 000 0000", holder: "Account Holder Name" },
    { initial: "B", method: "BANK TRANSFER", value: "0000000000000", holder: "Bank Name — Account Holder" },
    { initial: "I", method: "INTERAC E-TRANSFER", value: "name@example.com", holder: "Account Holder Name" },
  ],
  contacts: [
    { name: "Contact Person One", phone: "000-000-0000" },
    { name: "Contact Person Two", phone: "000-000-0000" },
    { name: "Contact Person Three", phone: "000-000-0000" },
  ],
  whoOptions: ["Prefer not to say", "Groom's side", "Bride's side", "Both"],
  signoff: "With love, Benjamin & Hannah",
  /** Placeholder guestbook entries (name, date, message). */
  blessings: [
    { name: "Guest One", date: "4 Oct 2026", message: "Placeholder blessing message. Replace with real guest messages from your backend." },
    { name: "Guest Two", date: "3 Oct 2026", message: "Another placeholder blessing, a little longer so the card layout wraps onto a second line to show how long messages behave." },
    { name: "Guest Three", date: "2 Oct 2026", message: "Short placeholder." },
  ],
} as const;
