import { Hero } from "@/components/wedding/hero";
import { Venue } from "@/components/wedding/venue";
import { Rsvp } from "@/components/wedding/rsvp";
import { DressCode } from "@/components/wedding/dress-code";
import { Contacts } from "@/components/wedding/contacts";
import { Blessings } from "@/components/wedding/blessings";
import { Footer } from "@/components/wedding/footer";
import { MusicToggle } from "@/components/wedding/music-toggle";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[480px] pt-[env(safe-area-inset-top)]">
      <Hero />
      <Venue />
      <Rsvp />
      <DressCode />
      <Contacts />
      <Blessings />
      <Footer />
      <MusicToggle />
    </main>
  );
}
