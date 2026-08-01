"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { MouseEvent } from "react";
import SplitText from "@/components/SplitText";
import PixelGrid from "@/components/PixelGrid";
import { profile } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const gridX = useTransform(sx, (v) => v * -26);
  const gridY = useTransform(sy, (v) => v * -18);
  const glowX = useTransform(sx, (v) => v * 14);
  const glowY = useTransform(sy, (v) => v * 10);

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="top"
      data-chapter="00"
      data-accent="stone"
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col gap-8 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ x: glowX, y: glowY }}
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 30%, var(--glow), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 grid place-items-center"
        style={{ x: gridX, y: gridY }}
        aria-hidden
      >
        <PixelGrid className="w-[min(92vw,860px)] opacity-60" bare split />
      </motion.div>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6 pt-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="label mb-8 flex items-center gap-3"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          {profile.name} — {profile.role}
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </motion.p>

        <SplitText
          lines={["Every Leader", "Starts As", "A Creator."]}
          delay={0.3}
          className="display text-[clamp(2.6rem,8vw,5.6rem)]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
          className="mt-8 max-w-md text-balance text-base leading-relaxed text-muted md:text-lg"
        >
          From pixel to perspective. This isn&rsquo;t my portfolio — it&rsquo;s
          my transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
          className="mt-12 mb-6"
        >
          <Image
            src="/images/parthiban.jpg"
            alt={`Portrait of ${profile.name}`}
            width={128}
            height={128}
            className="h-32 w-32 rounded-full object-cover"
            style={{
              border: "2px solid var(--accent)",
              boxShadow:
                "0 0 0 10px var(--accent-soft), 0 24px 60px -24px var(--glow)",
            }}
          />
        </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center px-6 pb-8">
        <motion.a
          href="#chapter-01"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="label">Scroll to Begin the Journey</span>
          <span
            className="relative block h-10 w-px overflow-hidden"
            style={{ backgroundColor: "var(--line-strong)" }}
          >
            <span
              className="animate-scroll-dot absolute left-0 top-0 block h-3 w-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
