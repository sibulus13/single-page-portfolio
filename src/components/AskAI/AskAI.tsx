"use client";
import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const QUESTIONS = [
  "What's Michael's experience with agentic AI?",
  "Walk me through his RAG chatbot work.",
  "What's his full-stack and AI automation stack?",
];

/**
 * Opens the embedded Miko chat and, when a question is supplied, prefills the
 * input and submits it so the suggested question is actually asked (the proof
 * payoff). The widget exposes no JS API, so we drive its DOM and degrade
 * gracefully (just open) if it's rate-limited or the markup shifts.
 */
function askMiko(question?: string) {
  const launcher = document.querySelector<HTMLButtonElement>(".pythia-btn");
  if (launcher && launcher.offsetParent !== null) launcher.click(); // visible only until panel opens
  if (!question) return;
  window.setTimeout(() => {
    const input = document.querySelector<HTMLInputElement>(".pythia-input");
    const form = document.querySelector<HTMLFormElement>(".pythia-form");
    if (!input || !form || input.disabled) return; // paused/rate-limited → leave for the user
    input.value = question;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    if (typeof form.requestSubmit === "function") form.requestSubmit();
    else form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  }, 220);
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
          <span style={{ color: "var(--color-text-1)" }}>Miko</span>, a
          retrieval-augmented (RAG) assistant that answers questions about my
          experience, projects, and stack, grounded in my real work history.
        </p>

        <div className="flex flex-col gap-2 mb-6">
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
              <span style={{ color: "var(--color-accent)" }}>▸</span> {q}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => askMiko()}
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
