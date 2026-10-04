import { NextResponse } from "next/server";

type Item = { name: string; date: string; message: string };

// STUB: in-memory only (resets on restart). Replace with a real store.
const store: Item[] = [];

const fmt = () =>
  new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export async function GET() {
  return NextResponse.json({ items: store });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim().slice(0, 80);
  const message = String(body?.message ?? "").trim().slice(0, 1000);
  if (!name || !message) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const item = { name, message, date: fmt() };
  store.unshift(item);
  return NextResponse.json({ item });
}
