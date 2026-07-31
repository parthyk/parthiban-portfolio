"use client";

import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

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
    <div
      className={`flex items-center gap-4 ${
        sticky
          ? "sticky top-20 z-20 mb-12 rounded-2xl border border-line glass px-5 py-3 md:mb-16"
          : "mb-12 md:mb-16"
      }`}
    >
      <span className="label-accent">Chapter {num}</span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: "var(--line)" }}
      />
      <h2 className="label">{title}</h2>
      {years ? <span className="label">{years}</span> : null}
    </div>
  );

  return (
    <section
      id={id}
      data-chapter={num}
      data-accent={accent}
      className={`relative scroll-mt-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        {sticky ? header : <Reveal>{header}</Reveal>}
        {children}
      </div>
    </section>
  );
}
