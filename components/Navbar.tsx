"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme";
import { useStory } from "@/components/story";
import { chapters } from "@/lib/data";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { chapter } = useStory();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = chapters.find((c) => c.id === chapter) ?? chapters[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
        scrolled ? "glass border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight transition-colors hover:text-accent"
        >
          Parthiban<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4">
          <span className="label hidden items-center gap-2 sm:flex">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Chapter {active.id} · {active.label}
          </span>

          <button
            onClick={toggle}
            aria-label="Switch color theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:border-accent"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
}
