"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { EASE } from "@/lib/motion";

type Props = {
  id: string;
  num: string;
  title: string;
  accent: string;
  years?: string;
  sticky?: boolean;
  className?: string;
  children: ReactNode;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const growLine: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: EASE } },
};

export default function Chapter({
  id,
  num,
  title,
  accent,
  years,
  sticky = false,
  className = "",
  children,
}: Props) {
  const header = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
      }}
      className={`flex items-center gap-4 ${
        sticky
          ? "sticky top-20 z-20 mb-12 rounded-2xl border border-line bg-bg px-5 py-3 shadow-[var(--shadow)] md:mb-16"
          : "mb-12 md:mb-16"
      }`}
    >
      <motion.span variants={fadeUp} className="label-accent">
        Chapter {num}
      </motion.span>
      <motion.span
        variants={growLine}
        className="h-px flex-1 origin-left"
        style={{ backgroundColor: "var(--line)" }}
      />
      <motion.h2 variants={fadeUp} className="label">
        {title}
      </motion.h2>
      {years ? (
        <motion.span variants={fadeUp} className="label">
          {years}
        </motion.span>
      ) : null}
    </motion.div>
  );

  return (
    <section
      id={id}
      data-chapter={num}
      data-accent={accent}
      className={`relative scroll-mt-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        {header}
        {children}
      </div>
    </section>
  );
}
