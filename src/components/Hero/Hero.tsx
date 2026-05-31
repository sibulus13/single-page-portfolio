"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Contacts from "./Contacts";
import { FiExternalLink } from "react-icons/fi";
import { useTextScramble } from "@/hooks/useTextScramble";
import { gsap } from "gsap";

const ROWS = [
  { key: "role",     val: "AI-Native Full-Stack Engineer",               accent: false, delay: 280 },
  { key: "stack",    val: "Next.js · TypeScript · Supabase · Claude API", accent: false, delay: 430 },
  { key: "velocity", val: "5x faster with agentic workflows",            accent: true,  delay: 580 },
];

function ScrambleRow({
  label,
  value,
  accent,
  delay,
}: {
  label: string;
  value: string;
  accent: boolean;
  delay: number;
}) {
  const display = useTextScramble(value, { delay, frames: 20 });
  return (
    <div
      className="flex items-baseline gap-0 py-1.5 border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <span
        className="w-20 shrink-0 text-xs font-mono"
        style={{ color: "var(--color-text-3)" }}
      >
        {label}
      </span>
      <span
        className="text-sm font-mono"
        style={{ color: accent ? "var(--color-accent)" : "var(--color-text-2)" }}
      >
        {display}
      </span>
    </div>
  );
}

const Hero: React.FC = () => {
  const avatarWrapRef = useRef<HTMLDivElement>(null);
  const photoPanelRef = useRef<HTMLDivElement>(null);
  const overlayRef    = useRef<HTMLDivElement>(null);
  const textRef       = useRef<HTMLDivElement>(null);
  // Store avatar center + expand params so collapse can reconstruct the clip-path
  const savedRect = useRef<{ cx: number; cy: number; r: number; bigR: number; isDesktop: boolean } | null>(null);
  const expandedRef = useRef(false);
  const [, forceUpdate] = useState(0);

  const handleCollapse = useCallback(() => {
    if (!expandedRef.current) return;
    const photoPanel = photoPanelRef.current;
    const overlay    = overlayRef.current;
    const textEl     = textRef.current;
    const s          = savedRect.current;
    if (!photoPanel || !overlay || !textEl || !s) return;

    // clip-path was cleared after expand; restore it before reversing
    gsap.set(photoPanel, {
      borderRadius: 0,
      clipPath: `circle(${s.bigR}px at ${s.cx}px ${s.cy}px)`,
    });

    gsap.timeline({
      onComplete() {
        gsap.set(overlay, { display: "none" });
        expandedRef.current = false;
        forceUpdate((n) => n + 1);
        (
          (window as unknown as { __lenis?: { start(): void } }).__lenis
        )?.start();
      },
    })
      .to(photoPanel, {
        clipPath: `circle(${s.r}px at ${s.cx}px ${s.cy}px)`,
        duration: 0.7,
        ease: "power3.inOut",
      })
      .to(textEl, { x: 0, duration: 0.7, ease: "power3.inOut" }, "<");
  }, []);

  // ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCollapse();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleCollapse]);

  const handleAvatarClick = useCallback(() => {
    if (expandedRef.current) return;
    const avatarEl   = avatarWrapRef.current;
    const photoPanel = photoPanelRef.current;
    const overlay    = overlayRef.current;
    const textEl     = textRef.current;
    if (!avatarEl || !photoPanel || !overlay || !textEl) return;

    const rect = avatarEl.getBoundingClientRect();
    const cx   = rect.left + rect.width / 2;
    const cy   = rect.top  + rect.height / 2;
    const vw         = window.innerWidth;
    const isDesktop  = vw >= 768;
    const bigR       = Math.ceil(Math.hypot(vw, window.innerHeight) * 1.5);
    savedRect.current = { cx, cy, r: rect.width / 2, bigR, isDesktop };

    // Translate text so its left edge lands at vw/2 + 32px (desktop only)
    const textRect  = textEl.getBoundingClientRect();
    const deltaX    = isDesktop ? Math.round(vw / 2 + 32 - textRect.left) : 0;

    (
      (window as unknown as { __lenis?: { stop(): void } }).__lenis
    )?.stop();

    expandedRef.current = true;
    forceUpdate((n) => n + 1);
    gsap.set(overlay, { display: "block" });

    gsap.timeline({
      onComplete() {
        // Swap clip-path → border-radius so the CSS shape is stable at rest
        gsap.set(photoPanel, {
          clipPath: "none",
          borderRadius: isDesktop ? "0 24px 24px 0" : "0 0 24px 24px",
        });
      },
    })
      .fromTo(
        photoPanel,
        { clipPath: `circle(${rect.width / 2}px at ${cx}px ${cy}px)` },
        { clipPath: `circle(${bigR}px at ${cx}px ${cy}px)`, duration: 0.82, ease: "power3.inOut" }
      )
      .to(textEl, { x: deltaX, duration: 0.82, ease: "power3.inOut" }, "<");
  }, []);

  return (
    <>
      {/* ── Photo overlay ─────────────────────────────── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50"
        style={{ display: "none" }}
        onClick={handleCollapse}
      >
        {/* Left half on desktop, top half on mobile */}
        <div
          ref={photoPanelRef}
          className="absolute left-0 top-0 w-full h-1/2 md:w-1/2 md:h-full overflow-hidden"
          style={{
            willChange: "clip-path",
            boxShadow: "8px 0 48px rgba(0,0,0,0.22)",
          }}
        >
          <Image
            src="/founder.jpg"
            alt="Michael Huang"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          {/* Soft gradient bleed — right edge on desktop, bottom on mobile */}
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-32 pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, var(--color-bg))" }}
          />
          <div
            className="md:hidden absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg))" }}
          />

          <p
            className="absolute bottom-5 left-5 text-xs font-mono pointer-events-none select-none"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            click anywhere · esc
          </p>
        </div>
      </div>

      {/* ── Hero section ──────────────────────────────── */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">

        {/* Status bar — stays anchored; avatar is the easter egg trigger */}
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-10 text-xs font-mono animate-fade-in"
          style={{ color: "var(--color-text-3)", animationDelay: "0ms" }}
        >
          <div
            ref={avatarWrapRef}
            className="w-10 h-10 rounded-full overflow-hidden shrink-0 transition-transform duration-150 hover:scale-110 active:scale-95"
            style={{
              border: "1px solid var(--color-border)",
              cursor: expandedRef.current ? "default" : "zoom-in",
            }}
            onClick={handleAvatarClick}
            role="button"
            aria-label="View portrait"
          >
            <Image
              src="/founder.jpg"
              alt="Michael Huang"
              width={40}
              height={40}
              className="w-full h-full object-cover grayscale"
              priority
            />
          </div>

          <span className="inline-flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#16a34a" }}
            />
            available
          </span>
          <span aria-hidden>·</span>
          <span>vancouver, bc</span>
          <span aria-hidden>·</span>
          <span>consulting + eng roles</span>
        </div>

        {/* Text — translates right on expand */}
        <div
          ref={textRef}
          className="max-w-2xl"
          style={{ willChange: "transform" }}
        >
          {/* Name */}
          <div className="animate-fade-up mb-6" style={{ animationDelay: "60ms" }}>
            <p
              className="font-bold leading-[0.90] tracking-tighter"
              style={{
                fontSize: "clamp(3.25rem, 9vw, 6.5rem)",
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "WONK" 1',
                color: "var(--color-text-1)",
              }}
            >
              Michael
            </p>
            <p
              className="font-bold leading-[0.90] tracking-tighter"
              style={{
                fontSize: "clamp(3.25rem, 9vw, 6.5rem)",
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "WONK" 1',
                color: "var(--color-accent)",
              }}
            >
              Huang
              <span className="terminal-cursor" aria-hidden="true" />
            </p>
          </div>

          {/* Rule */}
          <div
            className="h-px max-w-xs mb-6 animate-fade-up"
            style={{ backgroundColor: "var(--color-border)", animationDelay: "100ms" }}
          />

          {/* Terminal decode rows */}
          <div className="grid gap-0 mb-8 animate-fade-up" style={{ animationDelay: "160ms" }}>
            {ROWS.map((row) => (
              <ScrambleRow
                key={row.key}
                label={row.key}
                value={row.val}
                accent={row.accent}
                delay={row.delay}
              />
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex items-center gap-6 mb-8 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#projects"
              className="text-xs font-mono transition-colors"
              style={{ color: "var(--color-accent)" }}
            >
              ▸ view work
            </a>
            <a
              href="https://www.si8tech.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono transition-colors clickable"
            >
              <FiExternalLink className="w-3 h-3" />
              book a call
            </a>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "280ms" }}>
            <Contacts />
          </div>
        </div>

        <div
          className="mt-14 h-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />
      </section>
    </>
  );
};

export default Hero;
