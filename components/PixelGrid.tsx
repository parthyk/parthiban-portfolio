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

const PALETTE = ["#4f6ef7", "#8b5cf6", "#e3b955", "#4fd1c5", "#f26d71"];

function hash(n: number) {
  let x = n;
  x = (x ^ 61) ^ (x >> 16);
  x = x + (x << 3);
  x = x ^ (x >> 4);
  x = (x * 0x27d4eb2d) | 0;
  x = x ^ (x >> 15);
  return Math.abs(x);
}

function isLit(i: number) {
  return hash(i) % 100 < 26;
}

function pixelColor(i: number) {
  return PALETTE[hash(i + 101) % PALETTE.length];
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
