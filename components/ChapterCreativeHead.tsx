"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { careerTimeline } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function ChapterCreativeHead() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrollIdx, setScrollIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.45) setScrollIdx(0);
    else if (v < 0.8) setScrollIdx(1);
    else setScrollIdx(2);
  });

  const active = hovered ?? scrollIdx;

  return (
    <Chapter
      id="chapter-05"
      num="05"
      title="The Creative Head"
      accent="red"
      years="2023 — Now"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SplitText
            lines={["Creativity,", "Compounded.", "That's The Job."]}
            className="display text-[clamp(1.9rem,4.6vw,3.4rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted">
              Today I don&rsquo;t just design. I set the direction — for the
              brand, the team, and the business behind them.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Strategy",
                "Brand Direction",
                "Team Leadership",
                "AI Adoption",
                "Growth",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <div
              ref={ref}
              className="rounded-3xl border border-line bg-card p-6 md:p-8"
            >
              <div className="relative mb-10">
                <div
                  className="absolute left-0 right-0 top-[34px] h-px"
                  style={{ backgroundColor: "var(--line)" }}
                />
                <motion.div
                  className="absolute left-0 right-0 top-[34px] h-px origin-left"
                  style={{ scaleX, backgroundColor: "var(--accent)" }}
                />
                <div className="relative flex items-start justify-between">
                  {careerTimeline.map((t, i) => {
                    const isActive = active === i;
                    return (
                      <button
                        key={t.title}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setHovered(i)}
                        className="group flex flex-col items-center gap-3"
                        aria-label={`${t.title} — ${t.year}`}
                      >
                        <span className="font-mono text-xs text-muted">
                          {t.year}
                        </span>
                        <span
                          className="block h-3 w-3 rounded-full border-2 transition-all duration-300"
                          style={{
                            backgroundColor: isActive
                              ? "var(--accent)"
                              : "var(--bg-card)",
                            borderColor: isActive
                              ? "var(--accent)"
                              : "var(--line-strong)",
                          }}
                        />
                        <span
                          className={`text-center font-serif text-sm transition-colors md:text-base ${
                            isActive ? "text-accent" : "text-ink-soft"
                          }`}
                        >
                          {t.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="min-h-[210px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-serif text-2xl">
                        {careerTimeline[active].title}
                      </h3>
                      <span className="label-accent">
                        {careerTimeline[active].period}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {careerTimeline[active].achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                        >
                          <span
                            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: "var(--accent)" }}
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Chapter>
  );
}
