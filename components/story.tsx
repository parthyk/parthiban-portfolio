"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type AccentKey = "stone" | "blue" | "teal" | "violet" | "red" | "gold";

const ACCENTS: Record<
  AccentKey,
  { light: [string, string, string]; dark: [string, string, string] }
> = {
  stone: {
    light: ["#6b7280", "rgba(107,114,128,0.1)", "rgba(107,114,128,0.14)"],
    dark: ["#9ca3af", "rgba(156,163,175,0.12)", "rgba(156,163,175,0.16)"],
  },
  blue: {
    light: ["#4f6ef7", "rgba(79,110,247,0.1)", "rgba(79,110,247,0.14)"],
    dark: ["#8ba3ff", "rgba(139,163,255,0.12)", "rgba(139,163,255,0.16)"],
  },
  teal: {
    light: ["#0e9f9e", "rgba(14,159,158,0.1)", "rgba(14,159,158,0.14)"],
    dark: ["#4fd1c5", "rgba(79,209,197,0.12)", "rgba(79,209,197,0.16)"],
  },
  violet: {
    light: ["#8b5cf6", "rgba(139,92,246,0.1)", "rgba(139,92,246,0.14)"],
    dark: ["#a78bfa", "rgba(167,139,250,0.12)", "rgba(167,139,250,0.16)"],
  },
  red: {
    light: ["#e5484d", "rgba(229,72,77,0.1)", "rgba(229,72,77,0.14)"],
    dark: ["#f26d71", "rgba(242,109,113,0.12)", "rgba(242,109,113,0.16)"],
  },
  gold: {
    light: ["#b8860b", "rgba(184,134,11,0.1)", "rgba(184,134,11,0.14)"],
    dark: ["#e3b955", "rgba(227,185,85,0.12)", "rgba(227,185,85,0.16)"],
  },
};

const StoryContext = createContext<{ chapter: string; accent: string }>({
  chapter: "00",
  accent: "stone",
});

export function StoryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ chapter: "00", accent: "stone" });
  const current = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]")
    );
    if (!sections.length) return;

    const applyAccent = (el: HTMLElement) => {
      const chapter = el.getAttribute("data-chapter") || "00";
      const accent = (el.getAttribute("data-accent") as AccentKey) || "stone";
      current.current = el;
      setState({ chapter, accent });
      const root = document.documentElement;
      const mode = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const pal = ACCENTS[accent] ?? ACCENTS.stone;
      const [c, soft, glow] = mode === "dark" ? pal.dark : pal.light;
      root.style.setProperty("--accent", c);
      root.style.setProperty("--accent-soft", soft);
      root.style.setProperty("--glow", glow);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const best = visible.reduce((a, b) =>
          b.intersectionRatio > a.intersectionRatio ? b : a
        );
        applyAccent(best.target as HTMLElement);
      },
      { rootMargin: "-42% 0px -42% 0px" }
    );

    const themeObserver = new MutationObserver(() => {
      if (current.current) applyAccent(current.current);
    });

    sections.forEach((s) => observer.observe(s));
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <StoryContext.Provider value={state}>{children}</StoryContext.Provider>
  );
}

export function useStory() {
  return useContext(StoryContext);
}
