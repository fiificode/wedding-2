import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Beau_Rivage } from "next/font/google";
import "./globals.css";
import { wedding } from "@/content/wedding";
import { Toaster } from "@/components/ui/sonner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const beauRivage = Beau_Rivage({
  variable: "--font-beau-rivage",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${wedding.groom.first} & ${wedding.bride.first} — ${wedding.dateLabel}`,
  description: `Join us for the wedding ceremony of ${wedding.groom.first} and ${wedding.bride.first}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${beauRivage.variable} dark antialiased`}
    >
      <body className="min-h-dvh">
        {children}
        <Toaster theme="dark" position="top-center" />
      </body>
    </html>
  );
}
