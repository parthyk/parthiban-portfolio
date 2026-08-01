"use client";

import { Award, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { education, honors } from "@/lib/data";

export default function ChapterEducation() {
  return (
    <section
      id="education"
      data-accent="teal"
      className="relative scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <SplitText
          lines={["Built on a", "strong foundation."]}
          className="display text-[clamp(2.2rem,5vw,4rem)]"
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 transition-colors hover:border-accent md:p-8">
              <span
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                <GraduationCap size={16} style={{ color: "var(--accent)" }} />
              </span>
              <span className="label-accent mt-8">Education</span>
              <h3 className="mt-3 font-serif text-2xl leading-snug">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {education.school}
              </p>
              <p className="mt-auto pt-6 font-mono text-xs text-muted">
                {education.year}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-card p-6 transition-colors hover:border-accent md:p-8">
              <span
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{ backgroundColor: "var(--accent-soft)" }}
              >
                <Award size={16} style={{ color: "var(--accent)" }} />
              </span>
              <span className="label-accent mt-8">Honors</span>
              <ul className="mt-5 space-y-3">
                {honors.map((h) => (
                  <li key={h.title} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <span>
                      <span className="block text-sm font-medium">{h.title}</span>
                      <span className="block text-xs text-muted">{h.org}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
