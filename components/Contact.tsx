"use client";

import Image from "next/image";
import { Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";
import type { ElementType } from "react";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { profile } from "@/lib/data";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIALS: {
  label: string;
  href: string;
  handle: string;
  Icon: ElementType;
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
    Icon: LinkedinIcon,
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
              "With a single pixel.",
              "The next chapter",
              "Could start with your brand.",
            ]}
            className="display text-[clamp(2rem,5.6vw,4.2rem)]"
          />

          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Magnetic strength={0.4}>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 font-serif text-lg text-bg transition-shadow hover:shadow-[var(--shadow)]"
                >
                  Let&rsquo;s Create Together
                  <ArrowUpRight
                    size={18}
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
