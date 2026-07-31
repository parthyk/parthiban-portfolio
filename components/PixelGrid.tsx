"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";

type Props = {
  className?: string;
  x?: MotionValue<number>;
  y?: MotionValue<number>;
};

const ROWS = 9;
const COLS = 26;

function isLit(i: number) {
  return (i * 7919 + 37) % 5 === 0;
}

export default function PixelGrid({ className = "", x, y }: Props) {
  return (
    <motion.div
      className={`grid ${className}`}
      style={{ x, y, gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      aria-hidden
    >
      {Array.from({ length: ROWS * COLS }).map((_, i) => {
        const lit = isLit(i);
        return (
          <span
            key={i}
            className={`aspect-square rounded-[2px] ${lit ? "animate-pixel" : ""}`}
            style={{
              backgroundColor: lit ? "var(--accent)" : "var(--line-strong)",
              animationDelay: `${(i % 7) * 0.4}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
}
