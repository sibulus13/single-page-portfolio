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
  label, value, accent, delay,
}: {
  label: string; value: string; accent: boolean; delay: number;
}) {
  const display = useTextScramble(value, { delay, frames: 20 });
  return (
    <div className="flex items-baseline gap-0 py-1.5 border-b" style={{ borderColor: "var(--color-border)" }}>
      <span className="w-20 shrink-0 text-xs font-mono" style={{ color: "var(--color-text-3)" }}>{label}</span>
      <span className="text-sm font-mono" style={{ color: accent ? "var(--color-accent)" : "var(--color-text-2)" }}>{display}</span>
    </div>
  );
}

const DIM_BG   = "rgba(9,9,11,0.78)";
const RADIUS   = "120px"; // corner radius at full expansion

const Hero: React.FC = () => {
  const avatarWrapRef = useRef<HTMLDivElement>(null);
  const photoPanelRef = useRef<HTMLDivElement>(null);
  const overlayRef    = useRef<HTMLDivElement>(null);
  const rightDimRef   = useRef<HTMLDivElement>(null);
  const textRef       = useRef<HTMLDivElement>(null);
  const savedRect = useRef<{
    cx: number; cy: number; r: number;
    startClip: string; endClip: string;
    isDesktop: boolean;
  } | null>(null);
  const expandedRef = useRef(false);
  const [, forceUpdate] = useState(0);

  const handleCollapse = useCallback(() => {
    if (!expandedRef.current) return;
    const photoPanel = photoPanelRef.current;
    const overlay    = overlayRef.current;
    const rightDim   = rightDimRef.current;
    const textEl     = textRef.current;
    const s          = savedRect.current;
    if (!photoPanel || !overlay || !rightDim || !textEl || !s) return;

    // Restore the fully-expanded inset state before reversing
    gsap.set(photoPanel, { clipPath: s.endClip });

    gsap.timeline({
      onComplete() {
        gsap.set(overlay, { display: "none" });
        gsap.set(photoPanel, { clearProps: "clipPath,filter,boxShadow" });
        expandedRef.current = false;
        forceUpdate((n) => n + 1);
        (window as unknown as { __lenis?: { start(): void } }).__lenis?.start();
      },
    })
      // Inset grows back to the small avatar-circle shape
      .to(photoPanel, { clipPath: s.startClip, duration: 0.7, ease: "power3.inOut" }, 0)
      // Text slides home
      .to(textEl,     { x: 0, duration: 0.7, ease: "power3.inOut" }, 0)
      // Photo drains back to greyscale
      .to(photoPanel, { filter: "grayscale(1)", duration: 0.45, ease: "power2.in" }, 0)
      // Shadow fades before the clip fully closes
      .to(photoPanel, { boxShadow: "0 0 0px rgba(0,0,0,0)", duration: 0.4, ease: "power2.in" }, 0)
      // Dim fades out
      .to(rightDim,   { opacity: 0, duration: 0.4, ease: "power2.in" }, 0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleCollapse(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleCollapse]);

  const handleAvatarClick = useCallback(() => {
    if (expandedRef.current) return;
    const avatarEl   = avatarWrapRef.current;
    const photoPanel = photoPanelRef.current;
    const overlay    = overlayRef.current;
    const rightDim   = rightDimRef.current;
    const textEl     = textRef.current;
    if (!avatarEl || !photoPanel || !overlay || !rightDim || !textEl) return;

    const rect      = avatarEl.getBoundingClientRect();
    const cx        = rect.left + rect.width / 2;
    const cy        = rect.top  + rect.height / 2;
    const r         = rect.width / 2;
    const vw        = window.innerWidth;
    const vh        = window.innerHeight;
    const isDesktop = vw >= 768;

    // Panel dimensions — photo panel covers left-half (desktop) or top-half (mobile)
    const panelW = isDesktop ? vw / 2 : vw;
    const panelH = isDesktop ? vh : vh / 2;

    // inset() start: a square inset at the avatar centre with 999px rounding
    // (999px caps at r=20px on a 40×40 box → appears as a perfect circle)
    const iT = Math.max(0, cy - r);
    const iR = Math.max(0, panelW - cx - r);
    const iB = Math.max(0, panelH - cy - r);
    const iL = Math.max(0, cx - r);
    const startClip = `inset(${iT}px ${iR}px ${iB}px ${iL}px round 999px 999px 999px 999px)`;

    // inset() end: full panel, right corners rounded (desktop) or bottom corners (mobile)
    const endClip = isDesktop
      ? `inset(0px 0px 0px 0px round 0px ${RADIUS} ${RADIUS} 0px)`
      : `inset(0px 0px 0px 0px round 0px 0px ${RADIUS} ${RADIUS})`;

    savedRect.current = { cx, cy, r, startClip, endClip, isDesktop };

    const textRect = textEl.getBoundingClientRect();
    const deltaX   = isDesktop ? Math.round(vw / 2 + 32 - textRect.left) : 0;

    (window as unknown as { __lenis?: { stop(): void } }).__lenis?.stop();

    expandedRef.current = true;
    forceUpdate((n) => n + 1);

    gsap.set(photoPanel, {
      filter: "grayscale(1)",
      boxShadow: "0 0 0px rgba(0,0,0,0)",
    });
    gsap.set(rightDim, { opacity: 0 });
    gsap.set(overlay,  { display: "block" });

    gsap.timeline()
      // inset shrinks outward from avatar-circle to full rounded panel —
      // border-radius curves continuously because it's part of the clip-path
      .fromTo(
        photoPanel,
        { clipPath: startClip },
        { clipPath: endClip, duration: 0.9, ease: "power3.inOut" },
        0
      )
      // Text slides to right half
      .to(textEl,     { x: deltaX, duration: 0.82, ease: "power3.inOut" }, 0)
      // Photo comes to life — greyscale lifts across the full expand
      .to(photoPanel, { filter: "grayscale(0)", duration: 0.95, ease: "power2.inOut" }, 0)
      // Shadow materialises mid-expand (box-shadow is not clipped, so delay it)
      .to(photoPanel, { boxShadow: "0 0 80px rgba(0,0,0,0.5)", duration: 0.5, ease: "power2.out" }, 0.45)
      // Dark dim rises on the opposite side
      .to(rightDim,   { opacity: 1, duration: 0.6, ease: "power2.out" }, 0.18);
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
        {/* Portrait panel */}
        <div
          ref={photoPanelRef}
          className="absolute left-0 top-0 w-full h-1/2 md:w-1/2 md:h-full overflow-hidden"
          style={{ willChange: "clip-path" }}
        >
          <Image
            src="/founder.jpg"
            alt="Michael Huang"
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          {/* Portrait vignette — darkens edges, keeps face bright */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 75% 80% at 50% 30%, transparent 35%, rgba(0,0,0,0.6) 100%)",
            }}
          />

          {/* Edge bleed into the dark dim */}
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-28 pointer-events-none"
            style={{ background: `linear-gradient(to right, transparent, ${DIM_BG})` }}
          />
          <div
            className="md:hidden absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, ${DIM_BG})` }}
          />

          <p
            className="absolute bottom-5 left-5 text-xs font-mono pointer-events-none select-none"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            click anywhere · esc
          </p>
        </div>

        {/* Dark dim over the opposite half */}
        <div
          ref={rightDimRef}
          className="absolute top-1/2 left-0 right-0 bottom-0 md:top-0 md:left-1/2 pointer-events-none"
          style={{ opacity: 0, backgroundColor: DIM_BG }}
        />
      </div>

      {/* ── Hero section ──────────────────────────────── */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">

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
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#16a34a" }} />
            available
          </span>
          <span aria-hidden>·</span>
          <span>vancouver, bc</span>
          <span aria-hidden>·</span>
          <span>consulting + eng roles</span>
        </div>

        <div ref={textRef} className="max-w-2xl" style={{ willChange: "transform" }}>

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

          <div
            className="h-px max-w-xs mb-6 animate-fade-up"
            style={{ backgroundColor: "var(--color-border)", animationDelay: "100ms" }}
          />

          <div className="grid gap-0 mb-8 animate-fade-up" style={{ animationDelay: "160ms" }}>
            {ROWS.map((row) => (
              <ScrambleRow key={row.key} label={row.key} value={row.val} accent={row.accent} delay={row.delay} />
            ))}
          </div>

          <div className="flex items-center gap-6 mb-8 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <a href="#projects" className="text-xs font-mono transition-colors" style={{ color: "var(--color-accent)" }}>
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

        <div className="mt-14 h-px" style={{ backgroundColor: "var(--color-border)" }} />
      </section>
    </>
  );
};

export default Hero;
