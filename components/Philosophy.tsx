"use client";

import Chapter from "@/components/Chapter";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { philosophyPrinciples } from "@/lib/data";

export default function Philosophy() {
  return (
    <Chapter id="chapter-08" num="08" title="Creative Philosophy" accent="violet">
      <SplitText
        lines={[
          "Good Designers",
          "Create Visuals.",
          "Great Leaders",
          "Create Opportunities.",
        ]}
        className="display text-[clamp(2rem,5.4vw,4rem)]"
      />

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {philosophyPrinciples.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-line bg-card p-6 transition-colors hover:border-accent">
              <span className="label-accent">{p.n}</span>
              <h3 className="mt-4 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Chapter>
  );
}
