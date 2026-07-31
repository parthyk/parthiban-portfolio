"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import { portfolioItems } from "@/lib/data";
import type { PortfolioCategory } from "@/lib/data";
import { EASE } from "@/lib/motion";

const FILTERS: ("All" | PortfolioCategory)[] = [
  "All",
  "UI Design",
  "Brand Design",
  "Social Media",
];

const COVER_ASPECTS = ["aspect-[4/3]", "aspect-square", "aspect-[3/4]"];

export default function Portfolio() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const items =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section
      id="selected-work"
      data-chapter="01"
      data-accent="blue"
      className="relative scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="label-accent mb-3">Selected Work</p>
            <SplitText
              lines={["Things I made", "while learning."]}
              className="display text-[clamp(1.9rem,4.4vw,3.2rem)]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 active:scale-95 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-line text-ink-soft hover:border-accent"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div key={active} className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="mb-4 break-inside-avoid"
            >
              <article className="group overflow-hidden rounded-3xl border border-line bg-card transition-colors duration-300 hover:border-accent">
                <div
                  className={`relative flex ${COVER_ASPECTS[i % 3]} flex-col justify-between overflow-hidden p-5`}
                  style={{
                    background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                  }}
                >
                  <span
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl leading-tight text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="label mb-2">{item.category}</p>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
