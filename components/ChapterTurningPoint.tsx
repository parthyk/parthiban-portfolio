"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

export default function ChapterTurningPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const s1Opacity = useTransform(scrollYProgress, [0.02, 0.13, 0.18, 0.28], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0.02, 0.28], [28, -28]);

  const s2Opacity = useTransform(scrollYProgress, [0.31, 0.42, 0.47, 0.57], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.31, 0.57], [28, -28]);

  const s3Opacity = useTransform(scrollYProgress, [0.6, 0.71, 0.76, 0.86], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.6, 0.86], [28, -28]);

  const s4Opacity = useTransform(scrollYProgress, [0.9, 0.98], [0, 1]);
  const s4Y = useTransform(scrollYProgress, [0.9, 0.98], [24, 0]);

  const statement = (
    label: string,
    title: string,
    styles: { opacity: MotionValue<number>; y: MotionValue<number> },
    accentTitle = false
  ) => (
    <motion.div
      style={{ opacity: styles.opacity, y: styles.y }}
      className="absolute inset-0 grid place-items-center px-6"
    >
      <div>
        <p className="label mb-6" style={{ color: "var(--accent)" }}>
          {label}
        </p>
        <h2
          className="display text-[clamp(1.8rem,5vw,3.6rem)] leading-[1.1]"
          style={accentTitle ? { color: "var(--accent)" } : undefined}
        >
          {title}
        </h2>
      </div>
    </motion.div>
  );

  return (
    <section
      id="chapter-03"
      data-chapter="03"
      data-accent="violet"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0d", color: "#f1f0ec" }}
    >
      <div ref={ref} className="relative h-[320vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center px-6">
          <div className="mx-auto w-full max-w-4xl text-center">
            {statement(
              "Chapter 03 — The Turning Point",
              "Then I realized — great design isn\u2019t enough.",
              { opacity: s1Opacity, y: s1Y }
            )}

            {statement(
              "The Realization",
              "Businesses don\u2019t grow because something looks beautiful.",
              { opacity: s2Opacity, y: s2Y }
            )}

            {statement(
              "The Shift",
              "They grow because creativity solves problems.",
              { opacity: s3Opacity, y: s3Y },
              true
            )}

            {statement(
              "The Decision",
              "So I stopped designing pixels — and started designing outcomes.",
              { opacity: s4Opacity, y: s4Y }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
