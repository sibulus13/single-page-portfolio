"use client";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { askMiko } from "@/lib/askMiko";

const QUESTIONS = [
  "What's Michael's experience with agentic AI?",
  "Walk me through his RAG chatbot work.",
  "What's his full-stack and AI automation stack?",
];

const AskAI: React.FC = () => {
  return (
    <div data-reveal>
      <div
        className="rounded-lg p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-10 items-start"
        style={{
          backgroundColor: "var(--color-accent-sub)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Left — the pitch */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono mb-3">
            {/* established "live" tag — same green pill as project status badges (Projects.tsx STATUS_COLOR.live) */}
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full border"
              style={{ color: "#16a34a", backgroundColor: "rgba(22,163,74,0.08)", borderColor: "#16a34a" }}
            >
              live
            </span>
            <span style={{ color: "var(--color-text-3)" }}>RAG chatbot</span>
          </div>

          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "var(--color-text-2)" }}
          >
            Don&apos;t take my word for it — ask my AI. I built{" "}
            <span style={{ color: "var(--color-text-1)" }}>Miko</span>, a
            retrieval-augmented (RAG) assistant that answers questions about my
            experience, projects, and stack, grounded in my real work history.
          </p>

          <button
            type="button"
            onClick={() => askMiko()}
            className="inline-flex items-center gap-2 text-xs font-mono transition-colors clickable"
            style={{ color: "var(--color-accent)" }}
          >
            <FiMessageCircle className="w-3.5 h-3.5" />
            ask the bot — or tap the chat button, bottom-right
          </button>

          <a
            href="https://www.si8tech.com/miko"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-xs font-mono transition-colors clickable"
            style={{ color: "var(--color-text-3)" }}
          >
            Miko is also a product — see how it&apos;s sold &rarr;
          </a>
        </div>

        {/* Right — try it: suggested questions open + auto-ask the bot */}
        <div className="flex flex-col gap-2">
          {QUESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => askMiko(q)}
              className="text-left text-sm font-mono py-2.5 px-3.5 rounded-md transition-colors clickable"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-2)",
              }}
            >
              <span style={{ color: "var(--color-accent)" }}>&#9656;</span> {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskAI;
