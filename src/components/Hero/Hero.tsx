"use client";
import React from "react";
import Image from "next/image";
import Contacts from "./Contacts";
import { FiExternalLink } from "react-icons/fi";

const systemData = [
  { key: "role",     val: "AI-Native Full-Stack Engineer" },
  { key: "stack",    val: "Next.js · TypeScript · Supabase · Claude API" },
  { key: "velocity", val: "5x faster with agentic workflows", accent: true },
];

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">

      {/* System status line with avatar */}
      <div
        className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-10 text-xs font-mono animate-fade-in"
        style={{ color: "var(--color-text-3)", animationDelay: "0ms" }}
      >
        {/* Circular avatar */}
        <div
          className="w-10 h-10 rounded-full overflow-hidden shrink-0"
          style={{ border: "1px solid var(--color-border)" }}
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

      <div className="max-w-2xl">

          {/* Name — Fraunces as the single expressive element */}
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
            </p>
          </div>

          {/* Thin rule */}
          <div
            className="h-px max-w-xs mb-6 animate-fade-up"
            style={{ backgroundColor: "var(--color-border)", animationDelay: "100ms" }}
          />

          {/* System data table */}
          <div
            className="grid gap-0 mb-8 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {systemData.map(({ key, val, accent }) => (
              <div
                key={key}
                className="flex items-baseline gap-0 py-1.5 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span
                  className="w-20 shrink-0 text-xs font-mono"
                  style={{ color: "var(--color-text-3)" }}
                >
                  {key}
                </span>
                <span
                  className="text-sm font-mono"
                  style={{ color: accent ? "var(--color-accent)" : "var(--color-text-2)" }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>

          {/* Action links */}
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

      {/* Divider */}
      <div
        className="mt-14 h-px"
        style={{ backgroundColor: "var(--color-border)" }}
      />
    </section>
  );
};

export default Hero;
