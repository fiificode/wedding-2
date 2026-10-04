import { wedding } from "@/content/wedding";
import { Reveal } from "./reveal";

export function Contacts() {
  return (
    <section className="px-6 py-[25px]">
      <Reveal>
        <div className="text-center text-sm">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">RSVP Contacts</p>
          <div className="mt-2 space-y-1">
            {wedding.contacts.map((c) => (
              <p key={c.name}>
                {c.name} —{" "}
                <a
                  href={`tel:${c.phone.replace(/\D/g, "")}`}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {c.phone}
                </a>
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
