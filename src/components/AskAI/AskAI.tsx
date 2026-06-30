"use client";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const QUESTIONS = [
  "What's Michael's experience with agentic AI?",
  "Walk me through his RAG chatbot work.",
  "What's his full-stack and AI automation stack?",
];

function openChat() {
  const btn = document.querySelector<HTMLButtonElement>(".pythia-btn");
  if (btn) {
    btn.click();
  }
}

const AskAI: React.FC = () => {
  return (
    <div data-reveal>
      <div
        className="max-w-2xl rounded-lg p-6 md:p-8"
        style={{
          backgroundColor: "var(--color-accent-sub)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-mono mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          live · RAG chatbot
        </div>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--color-text-2)" }}
        >
          Don&apos;t take my word for it — ask my AI. I built{" "}
          <span style={{ color: "var(--color-text-1)" }}>Mikibot</span>, a
          retrieval-augmented (RAG) assistant that answers questions about my
          experience, projects, and stack, grounded in my real work history.
        </p>

        <div className="flex flex-col gap-2 mb-6">
          {QUESTIONS.map((q) => (
            <button
              key={q}
              type="button"
              onClick={openChat}
              className="text-left text-sm font-mono py-2.5 px-3.5 rounded-md transition-colors clickable"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-2)",
              }}
            >
              <span style={{ color: "var(--color-accent)" }}>▸</span> {q}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={openChat}
          className="inline-flex items-center gap-2 text-xs font-mono transition-colors clickable"
        >
          <FiMessageCircle className="w-3.5 h-3.5" />
          ask the bot — or tap the chat button, bottom-right
        </button>
      </div>
    </div>
  );
};

export default AskAI;
