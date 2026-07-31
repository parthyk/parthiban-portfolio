"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
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

type StepStyles = { opacity: MotionValue<number>; x: MotionValue<number> };

export default function ChapterTurningPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });

  const [step, setStep] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const s = v >= 0.75 ? 3 : v >= 0.5 ? 2 : v >= 0.25 ? 1 : 0;
    setStep((prev) => (prev === s ? prev : s));
  });

  const fillY = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const stepStyles: StepStyles[] = [
    {
      opacity: useTransform(scrollYProgress, [0, 0.18], [0, 1]),
      x: useTransform(scrollYProgress, [0, 0.18], [28, 0]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.25, 0.43], [0, 1]),
      x: useTransform(scrollYProgress, [0.25, 0.43], [28, 0]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.5, 0.68], [0, 1]),
      x: useTransform(scrollYProgress, [0.5, 0.68], [28, 0]),
    },
    {
      opacity: useTransform(scrollYProgress, [0.75, 0.93], [0, 1]),
      x: useTransform(scrollYProgress, [0.75, 0.93], [28, 0]),
    },
  ];

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
            "radial-gradient(55% 55% at 50% 18%, rgba(139,92,246,0.16), transparent 70%)",
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

      <div ref={ref} className="relative mx-auto max-w-4xl px-6 py-24 md:py-36">
        <div className="mb-16 text-center md:mb-20">
          <p className="label" style={{ color: "var(--accent)" }}>
            Chapter 03 — The Turning Point
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-1 left-[5px] top-1 w-px bg-[rgba(241,240,236,0.12)]" />
          <motion.div
            className="absolute bottom-1 left-[5px] top-1 w-px origin-top"
            style={{ scaleY: fillY, backgroundColor: "var(--accent)" }}
          />

          {STATEMENTS.map((s, i) => {
            const active = i <= step;
            return (
              <motion.div
                key={s.label}
                style={{ opacity: stepStyles[i].opacity, x: stepStyles[i].x }}
                className="relative flex gap-6 pb-16 pl-8 last:pb-0 md:gap-8 md:pl-10"
              >
                <span
                  className="absolute left-0 top-1 block h-3 w-3 rounded-full border-2 transition-colors duration-500"
                  style={{
                    backgroundColor: active ? "var(--accent)" : "#0a0a0d",
                    borderColor: active
                      ? "var(--accent)"
                      : "rgba(241,240,236,0.35)",
                    boxShadow: active
                      ? "0 0 0 6px rgba(167,139,250,0.16)"
                      : undefined,
                  }}
                />
                <div>
                  <p
                    className={`mb-3 font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-500 ${
                      active ? "" : "opacity-50"
                    }`}
                    style={active ? { color: "var(--accent)" } : undefined}
                  >
                    0{i + 1} — {s.label}
                  </p>
                  <h2 className="display max-w-xl text-[clamp(1.7rem,4.4vw,3.2rem)] leading-[1.15]">
                    {s.text}
                  </h2>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
