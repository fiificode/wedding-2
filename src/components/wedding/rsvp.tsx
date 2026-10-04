"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { wedding } from "@/content/wedding";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { fieldClass, labelClass, primaryButtonClass } from "./styles";

const values = ["prefer-not", "groom", "bride", "both"];

export function Rsvp() {
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setPending(true);
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success("Thank you — your attendance is confirmed.");
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
        <SectionHeading>RSVP</SectionHeading>
        <p className="text-center text-sm text-muted-foreground">
          Kindly let us know if you can join us.
        </p>
        <form onSubmit={onSubmit} className="frost mt-4 space-y-3 p-5">
          <label className="block">
            <span className={labelClass}>Name</span>
            <Input name="name" required maxLength={100} className={fieldClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Phone Number</span>
            <Input name="phone" type="tel" required maxLength={30} className={fieldClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Who do you know?</span>
            <select name="who" defaultValue="prefer-not" className={fieldClass}>
              {wedding.whoOptions.map((o, i) => (
                <option key={o} value={values[i]}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <Button type="submit" disabled={pending} className={primaryButtonClass}>
            Confirm Attendance
          </Button>
        </form>
        <p className="mt-3 text-center text-[0.68rem] text-muted-foreground">
          Your details are used only for our guest list.
        </p>
      </Reveal>
    </section>
  );
}
