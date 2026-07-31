"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = {
  lines: string[];
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function SplitText({
  lines,
  className = "",
  delay = 0,
  duration = 1.1,
  once = true,
}: Props) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
  };

  const line: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const word: Variants = {
    hidden: { y: reduce ? 0 : "115%", opacity: reduce ? 0 : 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      aria-label={lines.join(" ")}
    >
      {lines.map((lineText, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.08em]">
          <motion.span className="block" variants={line}>
            {lineText.split(" ").map((w, j) => (
              <motion.span
                key={j}
                className="inline-block mr-[0.24em] will-change-transform"
                variants={word}
              >
                {w}
              </motion.span>
            ))}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
