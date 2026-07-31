"use client";

import { Briefcase, Building2, Layers, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { metrics } from "@/lib/data";

const ICONS: LucideIcon[] = [Briefcase, Building2, Layers, Clock, Users];

export default function Dashboard() {
  return (
    <Chapter id="chapter-06" num="06" title="Leadership Dashboard" accent="red">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((m, i) => {
          const Icon = ICONS[i] ?? Briefcase;
          return (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-line bg-card p-6 transition-colors duration-300 hover:border-accent">
                <Icon
                  size={18}
                  className="mb-8 text-muted transition-colors group-hover:text-accent"
                />
                <p className="display text-5xl md:text-6xl">
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium">{m.label}</p>
                <p className="mt-1 text-xs text-muted">{m.hint}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Chapter>
  );
}
