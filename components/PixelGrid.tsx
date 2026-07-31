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

const PALETTE = ["var(--accent)", "#8b5cf6", "#e3b955", "#4fd1c5", "#f26d71"];

function isLit(i: number) {
  return (i * 7919 + 37) % 5 === 0;
}

function pixelColor(i: number) {
  return PALETTE[(i * 7 + 3) % PALETTE.length];
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
        const color = lit ? pixelColor(i) : "var(--line-strong)";
        return (
          <span
            key={i}
            className={`aspect-square rounded-[2px] ${lit ? "animate-pixel" : ""}`}
            style={{
              backgroundColor: color,
              boxShadow: lit ? `0 0 8px 1px ${color}` : undefined,
              animationDelay: lit ? `${(i % 13) * 0.42}s` : undefined,
              animationDuration: lit ? `${2 + (i % 4) * 0.8}s` : undefined,
            }}
          />
        );
      })}
    </motion.div>
  );
}
