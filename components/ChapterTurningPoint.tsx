"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ChapterTurningPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const s1Opacity = useTransform(scrollYProgress, [0.05, 0.3], [1, 0]);
  const s1Y = useTransform(scrollYProgress, [0.05, 0.3], [0, -40]);
  const s2Opacity = useTransform(scrollYProgress, [0.4, 0.62], [0, 1]);
  const s2Scale = useTransform(scrollYProgress, [0.4, 0.66], [0.96, 1]);
  const s2Y = useTransform(scrollYProgress, [0.4, 0.62], [20, 0]);

  return (
    <section
      id="chapter-03"
      data-chapter="03"
      data-accent="violet"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0d", color: "#f1f0ec" }}
    >
      <div ref={ref} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center px-6">
          <div className="mx-auto w-full max-w-4xl text-center">
            <motion.div
              style={{ opacity: s1Opacity, y: s1Y }}
              className="absolute inset-0 grid place-items-center px-6"
            >
              <div>
                <p className="label mb-6" style={{ color: "var(--accent)" }}>
                  Chapter 03 — The Turning Point
                </p>
                <h2 className="display text-[clamp(2.2rem,6.4vw,4.8rem)]">
                  Then I realized — great design isn&rsquo;t enough.
                </h2>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: s2Opacity, scale: s2Scale, y: s2Y }}
              className="absolute inset-0 grid place-items-center px-6"
            >
              <div className="max-w-3xl">
                <p className="label mb-6" style={{ color: "var(--accent)" }}>
                  The Shift
                </p>
                <h2 className="display text-[clamp(1.7rem,4.6vw,3.4rem)] leading-[1.15]">
                  Businesses don&rsquo;t grow because something looks beautiful.
                </h2>
                <div
                  className="mx-auto mt-8 h-px w-16"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <p
                  className="display mt-8 text-[clamp(1.7rem,4.6vw,3.4rem)] leading-[1.15]"
                  style={{ color: "var(--accent)" }}
                >
                  They grow because creativity solves problems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
