"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PixelGrid from "@/components/PixelGrid";
import { EASE } from "@/lib/motion";

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

const DURATION = 4000;

export default function ChapterTurningPoint() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || hovering) return;
    const id = window.setTimeout(() => {
      setActive((a) => (a + 1) % STATEMENTS.length);
    }, DURATION);
    return () => window.clearTimeout(id);
  }, [active, inView, hovering]);

  const go = (dir: number) =>
    setActive((a) => (a + dir + STATEMENTS.length) % STATEMENTS.length);

  return (
    <section
      id="chapter-03"
      ref={sectionRef}
      data-chapter="03"
      data-accent="violet"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0d", color: "#f1f0ec" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 42%, rgba(139,92,246,0.16), transparent 70%)",
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

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-4xl flex-col items-center justify-center px-6 py-24">
        <p className="label mb-10" style={{ color: "var(--accent)" }}>
          Chapter 03 — The Turning Point
        </p>

        <div className="relative flex min-h-[300px] w-full items-center justify-center sm:min-h-[340px]">
          {STATEMENTS.map((s, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={s.label}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                aria-hidden={!isActive}
              >
                <p className="label mb-6 opacity-80">{s.label}</p>
                <h2 className="display text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.15]">
                  {s.text}
                </h2>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex items-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous statement"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(241,240,236,0.18)] text-[rgba(241,240,236,0.7)] transition-colors hover:border-[rgba(139,92,246,0.6)] hover:text-[#a78bfa]"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {STATEMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to statement ${i + 1}`}
                className="relative h-1.5 w-10 overflow-hidden rounded-full bg-[rgba(241,240,236,0.16)]"
              >
                {i === active && (
                  <motion.span
                    key={`bar-${active}`}
                    className="absolute inset-0 origin-left rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next statement"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(241,240,236,0.18)] text-[rgba(241,240,236,0.7)] transition-colors hover:border-[rgba(139,92,246,0.6)] hover:text-[#a78bfa]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
