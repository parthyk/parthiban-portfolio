"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import PixelGrid from "@/components/PixelGrid";

const STATEMENTS = [
  {
    label: "The Turning Point",
    text: "Then I realized \u2014 great design isn\u2019t enough.",
  },
  {
    label: "The Realization",
    text: "Businesses don\u2019t grow because something looks beautiful.",
  },
  {
    label: "The Shift",
    text: "They grow because creativity solves problems.",
  },
  {
    label: "The Decision",
    text: "So I stopped designing pixels \u2014 and started designing outcomes.",
  },
];

export default function ChapterTurningPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const s1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.26], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.26], [0, -32]);

  const s2Opacity = useTransform(
    scrollYProgress,
    [0.24, 0.3, 0.45, 0.51],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(scrollYProgress, [0.24, 0.51], [36, -36]);

  const s3Opacity = useTransform(
    scrollYProgress,
    [0.49, 0.55, 0.7, 0.76],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(scrollYProgress, [0.49, 0.76], [36, -36]);

  const s4Opacity = useTransform(scrollYProgress, [0.74, 0.8], [0, 1]);
  const s4Y = useTransform(scrollYProgress, [0.74, 0.86], [28, 0]);

  const statement = (
    label: string,
    text: string,
    styles: { opacity: MotionValue<number>; y: MotionValue<number> },
    accent = false
  ) => (
    <motion.div
      style={{ opacity: styles.opacity, y: styles.y }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="label mb-6 opacity-80">{label}</p>
      <h2
        className="display text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.15]"
        style={accent ? { color: "var(--accent)" } : undefined}
      >
        {text}
      </h2>
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 42%, rgba(139,92,246,0.16), transparent 70%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-between px-[4vw]"
        aria-hidden
      >
        <PixelGrid className="w-[min(26vw,300px)] opacity-25" bare />
        <PixelGrid className="w-[min(26vw,300px)] opacity-25" bare />
      </div>

      <div ref={ref} className="relative h-[400vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center px-6">
          <div className="mx-auto w-full max-w-4xl text-center">
            <p className="label mb-10" style={{ color: "var(--accent)" }}>
              Chapter 03 — The Turning Point
            </p>

            <div className="relative min-h-[300px] sm:min-h-[340px]">
              {statement(
                STATEMENTS[0].label,
                STATEMENTS[0].text,
                { opacity: s1Opacity, y: s1Y }
              )}
              {statement(
                STATEMENTS[1].label,
                STATEMENTS[1].text,
                { opacity: s2Opacity, y: s2Y }
              )}
              {statement(
                STATEMENTS[2].label,
                STATEMENTS[2].text,
                { opacity: s3Opacity, y: s3Y },
                true
              )}
              {statement(
                STATEMENTS[3].label,
                STATEMENTS[3].text,
                { opacity: s4Opacity, y: s4Y }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
