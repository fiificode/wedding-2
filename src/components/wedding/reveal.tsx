"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EXTRA_MOTION } from "@/lib/motion";

/**
 * Scroll-in reveal (Framer Motion). NOTE: the original site has no scroll animation;
 * this is an addition, controlled by EXTRA_MOTION in src/lib/motion.ts.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (!EXTRA_MOTION || reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
