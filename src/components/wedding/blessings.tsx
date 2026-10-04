"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { wedding } from "@/content/wedding";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { fieldClass, primaryButtonClass } from "./styles";

type Blessing = { name: string; date: string; message: string };

export function Blessings() {
  const [items, setItems] = useState<Blessing[]>([...wedding.blessings]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetch("/api/blessings")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { items: Blessing[] } | null) => {
        if (d?.items?.length) setItems((prev) => [...d.items, ...prev]);
      })
      .catch(() => {});
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as { name: string; message: string };
    setPending(true);
    try {
      const res = await fetch("/api/blessings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      const { item } = (await res.json()) as { item: Blessing };
      setItems((prev) => [item, ...prev]);
      toast.success("Thank you for your blessing.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="px-6 py-[25px]">
      <Reveal>
        <SectionHeading>Prayers &amp; Blessings</SectionHeading>
        <p className="text-center text-sm text-muted-foreground">
          Leave us a prayer or a word of blessing.
        </p>
        <form onSubmit={onSubmit} className="frost mt-4 space-y-3 p-5">
          <Input name="name" required maxLength={80} placeholder="Your name" className={`${fieldClass} mt-0`} />
          <Textarea
            name="message"
            required
            maxLength={1000}
            rows={3}
            placeholder="Your blessing"
            className={`${fieldClass} mt-0 min-h-0`}
          />
          <Button type="submit" disabled={pending} className={primaryButtonClass}>
            Send Blessing
          </Button>
        </form>
      </Reveal>

      <div className="mt-4 space-y-3">
        <AnimatePresence initial={false}>
          {items.map((b, i) => (
            <motion.div
              key={`${b.name}-${b.date}-${i}`}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="frost p-4"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-display text-base text-gold">{b.name}</p>
                <p className="text-[0.6rem] text-muted-foreground">{b.date}</p>
              </div>
              <p className="mt-1 text-sm leading-relaxed">{b.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
