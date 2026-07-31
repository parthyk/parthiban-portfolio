"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Chapter from "@/components/Chapter";
import SplitText from "@/components/SplitText";
import { industries } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Projects() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Chapter id="chapter-07" num="07" title="Featured Projects" accent="red">
      <div className="mb-14 max-w-3xl">
        <SplitText
          lines={["Not a gallery.", "A portfolio of industries."]}
          className="display text-[clamp(2rem,5vw,3.6rem)]"
        />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          Every industry is a different language. Here&rsquo;s how I&rsquo;ve
          learned to speak them.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-line">
        {industries.map((ind, i) => {
          const isOpen = open === i;
          return (
            <div key={ind.name} className={i > 0 ? "border-t border-line" : ""}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-[var(--accent-soft)] md:px-8"
              >
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <span className="flex-1">
                  <span className="block font-serif text-xl md:text-2xl">
                    {ind.name}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-widest text-muted">
                    {ind.tag}
                  </span>
                </span>
                <span className="hidden text-sm text-muted sm:block">
                  {ind.clients.length} brands
                </span>
                <ChevronDown
                  size={18}
                  style={{ color: "var(--muted)" }}
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 md:px-8">
                      <p className="mb-6 max-w-xl text-base leading-relaxed text-muted">
                        {ind.blurb}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {ind.clients.map((c) => (
                          <span
                            key={c}
                            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm"
                          >
                            {c}
                            <ArrowUpRight size={13} className="text-muted" />
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Chapter>
  );
}
