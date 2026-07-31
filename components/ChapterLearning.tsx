"use client";

import { motion } from "framer-motion";
import { PenTool, Palette, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { skillGroups } from "@/lib/data";
import { EASE } from "@/lib/motion";

const ICONS: Record<string, LucideIcon> = {
  tools: PenTool,
  craft: Palette,
  future: Sparkles,
};

export default function ChapterLearning() {
  return (
    <Chapter id="chapter-02" num="02" title="Learning" accent="teal">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SplitText
            lines={["Learning", "Never", "Stops."]}
            className="display text-[clamp(2.2rem,5vw,4rem)]"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              A designer who stops learning is a designer who stops growing. So
              I studied every tool, every style, every rule — and then I learned
              how to break them.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8 lg:col-span-7">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[group.icon] ?? Sparkles;
            return (
              <Reveal key={group.title} delay={gi * 0.05}>
                <div className="rounded-3xl border border-line bg-card p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-full"
                      style={{ backgroundColor: "var(--accent-soft)" }}
                    >
                      <Icon size={16} style={{ color: "var(--accent)" }} />
                    </span>
                    <h3 className="font-serif text-xl">{group.title}</h3>
                  </div>

                  <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {group.skills.map((s, si) => (
                      <div key={s.name} className="group">
                        <div className="mb-2 flex items-baseline justify-between">
                          <span className="text-sm text-ink-soft transition-colors group-hover:text-accent">
                            {s.name}
                          </span>
                          <span className="font-mono text-xs text-muted">
                            {s.level}
                          </span>
                        </div>
                        <div
                          className="h-[3px] w-full overflow-hidden rounded-full"
                          style={{ backgroundColor: "var(--line)" }}
                        >
                          <motion.div
                            className="h-full origin-left rounded-full"
                            style={{ backgroundColor: "var(--accent)" }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: s.level / 100 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{
                              duration: 1.1,
                              delay: si * 0.06,
                              ease: EASE,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Chapter>
  );
}
