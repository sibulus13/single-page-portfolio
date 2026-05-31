"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, type Project } from "@/data/projects";

const STATUS_LABEL: Record<string, string> = {
  live:           "live",
  in_development: "in dev",
  archived:       "archived",
};

const STATUS_COLOR: Record<string, React.CSSProperties> = {
  live:           { color: "#16a34a", backgroundColor: "rgba(22,163,74,0.08)", borderColor: "#16a34a" },
  in_development: { color: "var(--color-accent)", backgroundColor: "var(--color-accent-sub)", borderColor: "var(--color-accent)" },
  archived:       { color: "var(--color-text-3)", backgroundColor: "transparent", borderColor: "var(--color-border-2)" },
};

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div
      className="p-6 rounded-2xl flex flex-col gap-3"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--color-text-3)" }}>
          Featured
        </span>
        <span
          className="text-xs font-mono px-2 py-0.5 rounded-full border"
          style={STATUS_COLOR[project.status]}
        >
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <div>
        <h3
          className="text-xl font-bold leading-snug mb-1"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text-1)" }}
        >
          {project.name}
        </h3>
        <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
          {project.tagline}
        </p>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-3)" }}>
        {project.description}
      </p>

      {project.honesty_note && (
        <p className="text-xs font-mono italic" style={{ color: "var(--color-text-3)" }}>
          {project.honesty_note}
        </p>
      )}

      <div className="flex flex-wrap gap-1 mt-auto">
        {project.stack.map((tag) => (
          <span key={tag} className="pill">{tag}</span>
        ))}
      </div>

      <div className="flex gap-4 pt-1">
        {project.live_url && (
          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
            style={{ color: "var(--color-accent)" }}
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Live site
          </Link>
        )}
        {project.source_url && project.source_visibility === "public" && (
          <Link
            href={project.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors clickable"
          >
            <FiGithub className="w-3.5 h-3.5" />
            Source
          </Link>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="group grid grid-cols-[2.5rem_1fr_auto] gap-3 items-start py-4 border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Row number */}
      <span
        className="text-xs font-mono pt-1 select-none"
        style={{ color: "var(--color-text-3)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
          <span
            className="font-semibold text-sm"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text-1)" }}
          >
            {project.name}
          </span>

          {/* Links appear on hover */}
          <span className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.live_url && (
              <Link
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                <FiExternalLink className="w-3 h-3" />
                Live
              </Link>
            )}
            {project.source_url && project.source_visibility === "public" && (
              <Link
                href={project.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs transition-colors clickable"
              >
                <FiGithub className="w-3 h-3" />
                Source
              </Link>
            )}
          </span>
        </div>

        <p className="text-xs mb-2" style={{ color: "var(--color-text-3)" }}>
          {project.tagline}
        </p>

        {project.honesty_note && (
          <p className="text-xs font-mono italic mb-2" style={{ color: "var(--color-text-3)" }}>
            {project.honesty_note}
          </p>
        )}

        <div className="flex flex-wrap gap-1">
          {project.stack.map((tag) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>
      </div>

      {/* Status badge */}
      <span
        className="text-xs font-mono mt-0.5 shrink-0 px-2 py-0.5 rounded-full border"
        style={STATUS_COLOR[project.status]}
      >
        {STATUS_LABEL[project.status]}
      </span>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;
  const visible = showAll ? rest : rest.slice(0, INITIAL_COUNT);

  return (
    <section className="grid gap-8">
      {/* Featured — 2-column editorial cards */}
      <div className="grid md:grid-cols-2 gap-4" data-reveal-stagger>
        {featured.map((p) => (
          <div key={p.id} data-reveal-item>
            <FeaturedCard project={p} />
          </div>
        ))}
      </div>

      {/* Rest — numbered editorial list */}
      <div>
        {/* List header */}
        <div
          className="grid grid-cols-[2.5rem_1fr_auto] gap-3 pb-2 mb-1 border-b-2"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span className="text-xs font-mono" style={{ color: "var(--color-text-3)" }}>#</span>
          <span className="text-xs font-mono" style={{ color: "var(--color-text-3)" }}>Project</span>
          <span className="text-xs font-mono" style={{ color: "var(--color-text-3)" }}>Status</span>
        </div>

        <div data-reveal-stagger>
          {visible.map((p, i) => (
            <div key={p.id} data-reveal-item>
              <ProjectRow project={p} index={i} />
            </div>
          ))}
        </div>
      </div>

      {!showAll && rest.length > INITIAL_COUNT && (
        <button
          onClick={() => setShowAll(true)}
          className="clickable font-medium text-sm self-start"
        >
          Show all {rest.length} projects →
        </button>
      )}
    </section>
  );
}
