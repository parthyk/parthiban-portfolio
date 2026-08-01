"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { MouseEvent } from "react";
import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import PixelGrid from "@/components/PixelGrid";
import { designerTimeline } from "@/lib/data";

export default function ChapterDesigner() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <Chapter id="chapter-01" num="01" title="The Designer" accent="blue" years="2015">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10" onMouseMove={onMove}>
        <div className="lg:col-span-7">
          <SplitText
            lines={["I started", "Not by leading people.", "I started", "Moving pixels."]}
            className="display text-[clamp(2rem,5.4vw,3.9rem)]"
          />

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              In 2015 I sat alone at a desk — a freelance designer with no
              title, no team, no plan. Just a blank canvas and a stubborn
              belief that pixels could tell stories.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              {["UI Design", "Brand Design", "Social Media"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            style={{ x: sx, y: sy }}
            className="relative rounded-3xl border border-line bg-card p-6 shadow-[var(--shadow)]"
          >
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="label">Sketchbook — 2015</span>
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </div>
            <div className="space-y-5 py-5">
              <p className="font-mono text-xs leading-relaxed text-muted">
                brief: “make it look premium”
              </p>
              <div className="h-px" style={{ backgroundColor: "var(--line)" }} />
              <p className="font-mono text-xs leading-relaxed text-muted">
                note to self: never stop learning the craft.
              </p>
              <div className="h-px" style={{ backgroundColor: "var(--line)" }} />
              <PixelGrid className="w-28 opacity-60" />
            </div>
            <div className="border-t border-line pt-3">
              <span className="font-serif text-sm italic text-ink-soft">
                try · fail · learn · repeat
              </span>
            </div>
          </motion.div>

          <div className="mt-10">
            {designerTimeline.map((t, i) => (
              <div key={t.company} className="relative pl-6">
                {i < designerTimeline.length - 1 && (
                  <span
                    className="absolute left-[3px] top-3 h-full w-px"
                    style={{ backgroundColor: "var(--line-strong)" }}
                  />
                )}
                <span
                  className="absolute left-0 top-1.5 block h-[7px] w-[7px] rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <Reveal delay={i * 0.08}>
                  <div className="pb-8">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="label-accent">{t.period}</span>
                      <h3 className="font-serif text-lg">{t.company}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {t.role} — {t.note}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  );
}
