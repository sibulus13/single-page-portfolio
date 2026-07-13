"use client";
import React from "react";
import Image from "next/image";
import Contacts from "./Contacts";
import { FiExternalLink } from "react-icons/fi";
import { useTextScramble } from "@/hooks/useTextScramble";

const ROWS = [
  { key: "role",     val: "AI-Native Full-Stack Engineer",               accent: false, delay: 280 },
  { key: "stack",    val: "Next.js · TypeScript · Supabase · Claude API", accent: false, delay: 430 },
  { key: "velocity", val: "2–3x faster with agentic workflows",            accent: true,  delay: 580 },
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

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="md:flex md:items-start md:justify-between md:gap-10 lg:gap-16">
        {/* Left — identity + content */}
        <div className="md:flex-1 md:min-w-0">
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-10 text-xs font-mono animate-fade-in"
            style={{ color: "var(--color-text-3)", animationDelay: "0ms" }}
          >
            {/* Small avatar — mobile only; desktop gets the portrait on the right */}
            <div
              className="w-10 h-10 rounded-full overflow-hidden shrink-0 md:hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Image
                src="/founder.jpg"
                alt="Michael Huang"
                width={40}
                height={40}
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: "50% 14%" }}
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

          <div className="max-w-2xl">

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
        </div>

        {/* Right — semi-portrait hero: bordered window, grayscale→color, fades into the page */}
        <div className="hidden md:block shrink-0 mt-1 animate-fade-in" style={{ animationDelay: "120ms" }}>
          <figure
            className="group relative w-52 lg:w-64 aspect-[4/5] rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <Image
              src="/founder.jpg"
              alt="Michael Huang — founder of SI8 Technology, seated outdoors"
              width={256}
              height={320}
              className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
              style={{ objectPosition: "50% 14%" }}
              priority
            />
            {/* Bottom fade — the portrait melts into the page background */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
              style={{ background: "linear-gradient(to top, var(--color-bg) 4%, transparent)" }}
              aria-hidden="true"
            />
            {/* Terminal-flavored corner tag — matches the site's mono aesthetic */}
            <figcaption
              className="absolute bottom-2.5 left-3 text-[10px] font-mono tracking-widest"
              style={{ color: "var(--color-text-2)" }}
            >
              ~/vancouver
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mt-14 h-px" style={{ backgroundColor: "var(--color-border)" }} />
    </section>
  );
};

export default Hero;
