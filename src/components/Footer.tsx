import React from "react";
import Link from "next/link";
import { FaArrowUp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div
        className="py-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Left: branding + cross-link */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="text-sm" style={{ color: "var(--color-text-3)" }}>
            © {new Date().getFullYear()} Michael Huang · Vancouver, BC
          </p>
          <a
            href="https://www.si8tech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono font-medium transition-colors"
            style={{ color: "var(--color-accent)" }}
          >
            Consulting via SI8 Technology
            <FiExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Right: socials + back to top */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/sibulus0/"
            target="_blank"
            rel="noopener noreferrer"
            className="clickable text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/sibulus13"
            target="_blank"
            rel="noopener noreferrer"
            className="clickable text-lg"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="#home"
            className="clickable text-lg"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
