"use client";
import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%░▒▓";
const PRESERVE = new Set([" ", "·", ".", ",", "/", "-", "+"]);

export function useTextScramble(
  target: string,
  { delay = 0, frames = 18 }: { delay?: number; frames?: number } = {}
): string {
  // Initialize with real text so SSR/hydration renders correctly
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const rand = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const timeoutId = setTimeout(() => {
      // Immediately show scrambled state before animating
      setDisplay(
        target
          .split("")
          .map((c) => (PRESERVE.has(c) ? c : rand()))
          .join("")
      );

      intervalId = setInterval(() => {
        frame++;
        const revealed = Math.floor((frame / frames) * target.length);

        setDisplay(
          target
            .split("")
            .map((c, i) => {
              if (PRESERVE.has(c)) return c;
              if (i < revealed) return c;
              return rand();
            })
            .join("")
        );

        if (frame >= frames) {
          clearInterval(intervalId);
          setDisplay(target);
        }
      }, 22);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [target, delay, frames]);

  return display;
}
