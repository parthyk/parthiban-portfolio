"use client";

export default function AmbientGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(58% 40% at 50% 0%, var(--glow), transparent 72%)",
      }}
      aria-hidden
    />
  );
}
