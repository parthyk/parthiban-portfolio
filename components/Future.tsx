"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Globe2, Users2, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { futureVisions } from "@/lib/data";
import { EASE } from "@/lib/motion";

const ICONS: Record<string, LucideIcon> = {
  ai: BrainCircuit,
  globe: Globe2,
  users: Users2,
  spark: Sparkles,
};

export default function Future() {
  const [active, setActive] = useState(0);

  return (
    <Chapter id="chapter-09" num="09" title="The Future" accent="gold">
      <div className="mb-14 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SplitText
            lines={["What\u2019s", "Next?"]}
            className="display text-[clamp(2.4rem,5.2vw,3.8rem)]"
          />
        </div>
        <div className="flex items-end lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              The last decade taught me how to make. The next one is about how
              to lead what we make — at scale, across the world.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:h-[440px] lg:flex-row">
        {futureVisions.map((v, i) => {
          const Icon = ICONS[v.icon] ?? Sparkles;
          const isActive = active === i;
          return (
            <div
              key={v.title}
              role="button"
              tabIndex={0}
              onClick={() => setActive(isActive ? -1 : i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActive(isActive ? -1 : i);
                }
              }}
              className={`group relative flex min-h-[190px] flex-1 cursor-pointer flex-col justify-end overflow-hidden rounded-3xl border p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-0 ${
                isActive
                  ? "border-accent lg:flex-[3.2]"
                  : "border-line hover:border-accent"
              }`}
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg) 0%, transparent 60%)",
                }}
              />
              <div className="absolute inset-x-6 top-6 flex items-start justify-between">
                <Icon
                  size={22}
                  style={{
                    color: isActive ? "var(--accent)" : "var(--muted)",
                  }}
                />
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>
              <div className="relative">
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="mb-3 max-w-xs text-sm leading-relaxed text-muted"
                    >
                      {v.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
                <p className="label mb-2">{v.tag}</p>
                <h3
                  className={`font-serif text-xl transition-colors ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {v.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </Chapter>
  );
}
