import { NextResponse } from "next/server";

// STUB: replace with a real store (Supabase, database, Google Sheet...).
const store: { name: string; phone: string; who: string; at: string }[] = [];

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim().slice(0, 100);
  const phone = String(body?.phone ?? "").trim().slice(0, 30);
  const who = String(body?.who ?? "prefer-not");
  if (!name || !phone) return NextResponse.json({ error: "invalid" }, { status: 400 });
  store.push({ name, phone, who, at: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
