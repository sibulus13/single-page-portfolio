"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Dynamic import so Lenis doesn't run on server
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      (window as unknown as { __lenis: typeof lenis }).__lenis = lenis;

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time: number) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // Wire all [data-reveal] elements to scroll-triggered fade-up
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      targets.forEach((el) => {
        const delay = parseFloat(el.dataset.revealDelay ?? "0");
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      // Stagger child rows inside [data-reveal-stagger] parents
      const staggerParents = gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]");
      staggerParents.forEach((parent) => {
        const children = gsap.utils.toArray<HTMLElement>(
          parent.querySelectorAll("[data-reveal-item]")
        );
        gsap.fromTo(
          children,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: parent,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      return () => {
        delete (window as unknown as { __lenis?: unknown }).__lenis;
        lenis.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, []);

  return null;
}
