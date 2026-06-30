import React from "react";
import Link from "next/link";

const specs = [
  { key: "degree",  val: "BASc Mechatronic Systems Engineering · SFU" },
  { key: "exp",     val: "6+ years · 5 companies · 1 founded" },
  { key: "method",  val: "Agentic AI-native development" },
  { key: "base",    val: "Vancouver, BC" },
];

const About: React.FC = () => {
  return (
    <div>
      {/* System spec table */}
      <div className="mb-8 max-w-2xl border-t" style={{ borderColor: "var(--color-border)" }}>
        {specs.map(({ key, val }) => (
          <div
            key={key}
            className="grid grid-cols-[6rem_1fr] gap-4 py-2.5 border-b text-sm font-mono"
            style={{ borderColor: "var(--color-border)" }}
          >
            <span style={{ color: "var(--color-text-3)" }}>{key}</span>
            <span style={{ color: "var(--color-text-2)" }}>{val}</span>
          </div>
        ))}
      </div>

      {/* Prose */}
      <div className="space-y-4 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--color-text-2)" }}>
        <p>
          My engineering background is in{" "}
          <Link href="https://www.sfu.ca/engineering/prospective-students/undergraduate-programs/mechatronic-systems-engineering.html" target="_blank" rel="noopener noreferrer">
            <span className="clickable">Mechatronic Systems Engineering</span>
          </Link>
          {" "}— the discipline at the intersection of mechanical, electrical, and software systems.
          I started writing code to animate autonomous robots, and never stopped.
        </p>
        <p>
          Today I build production-grade software with agentic AI workflows. At{" "}
          <Link href="https://www.tractioncomplete.com" target="_blank" rel="noopener noreferrer">
            <span className="clickable">Traction Complete</span>
          </Link>
          {" "}I introduced agentic development practices that improved feature delivery 2–3×. Through{" "}
          <Link href="https://www.si8tech.com" target="_blank" rel="noopener noreferrer">
            <span className="clickable">SI8 Technology</span>
          </Link>
          {" "}I work as an AI consultant — building AI automation, RAG chatbots, and full-stack
          web systems that help teams ship faster without growing headcount.
        </p>
        <p>
          Outside of code: I chase golden hours with a{" "}
          <Link href="#photography">
            <span className="clickable">camera</span>
          </Link>
          , explore mountain trails, ride through the twisties, and occasionally convince
          myself the ukulele is coming along fine.
        </p>
      </div>
    </div>
  );
};

export default About;
