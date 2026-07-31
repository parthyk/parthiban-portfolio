"use client";

import { Sparkles, Globe2, Users2, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { futureVisions } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  ai: BrainCircuit,
  globe: Globe2,
  users: Users2,
  spark: Sparkles,
};

export default function Future() {
  return (
    <Chapter id="chapter-09" num="09" title="The Future" accent="gold">
      <div className="mb-14 max-w-3xl">
        <SplitText
          lines={["What\u2019s Next?"]}
          className="display text-[clamp(2.4rem,6vw,4.4rem)]"
        />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          The last decade taught me how to make. The next one is about how to
          lead what we make — at scale, across the world.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {futureVisions.map((v, i) => {
          const Icon = ICONS[v.icon] ?? Sparkles;
          return (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-line bg-card p-6 transition-colors duration-300 hover:border-accent">
                <Icon
                  size={20}
                  className="mb-10 text-muted transition-colors group-hover:text-accent"
                />
                <h3 className="font-serif text-lg leading-snug">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Chapter>
  );
}
