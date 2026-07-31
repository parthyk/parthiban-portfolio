"use client";

import Image from "next/image";
import { Mail, Linkedin, Instagram, Globe, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { profile } from "@/lib/data";

const SOCIALS: {
  label: string;
  href: string;
  handle: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    handle: "in/parthyk",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: profile.instagram,
    handle: profile.instagramHandle,
    Icon: Instagram,
  },
  {
    label: "Behance",
    href: profile.behance,
    handle: "behance.net/parthyk",
    Icon: Globe,
  },
];

export default function Contact() {
  return (
    <section
      id="chapter-10"
      data-chapter="10"
      data-accent="gold"
      className="relative scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="text-center">
          <Reveal delay={0.1}>
            <Image
              src="/images/parthiban.jpg"
              alt={`Portrait of ${profile.name}`}
              width={72}
              height={72}
              className="mx-auto mb-10 h-16 w-16 rounded-full object-cover"
              style={{
                border: "2px solid var(--accent)",
                boxShadow: "0 0 0 6px var(--accent-soft)",
              }}
            />
          </Reveal>

          <SplitText
            lines={[
              "My journey started",
              "with a single pixel.",
              "The next chapter",
              "could start with your brand.",
            ]}
            className="display text-[clamp(2rem,5.6vw,4.2rem)]"
          />

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-4">
              <Magnetic strength={0.4}>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex flex-col items-center gap-1.5 rounded-3xl bg-ink px-10 py-5 text-bg transition-shadow hover:shadow-[var(--shadow)]"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] opacity-70">
                    Let&rsquo;s Create Together
                  </span>
                  <span className="font-serif text-lg md:text-xl">
                    {profile.email}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {SOCIALS.map(({ label, href, handle, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Icon size={15} />
                  {handle}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
