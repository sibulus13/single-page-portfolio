"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitcher";

const navLinks = [
  { label: "about",      href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "ask my ai",  href: "#ask-ai" },
  { label: "projects",   href: "#projects" },
  { label: "gallery",    href: "#photography" },
  { label: "blog",       href: "#blog" },
];

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePg = pathname === "/";

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      const ids = ["about", "experience", "ask-ai", "projects", "photography", "blog"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="py-3 flex justify-between items-center">
        {isHomePg ? (
          <>
            <Link
              href="#home"
              className="font-mono text-xs tracking-widest"
              style={{ color: "var(--color-text-3)" }}
            >
              mh
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-mono transition-colors"
                    style={{
                      color: isActive ? "var(--color-accent)" : "var(--color-text-3)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://www.si8tech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex text-xs font-mono transition-colors"
                style={{ color: "var(--color-text-3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-3)")}
              >
                si8tech.com →
              </a>
              <ThemeSwitch />
            </div>
          </>
        ) : (
          <div className="flex justify-between w-full">
            <button
              className="text-xs font-mono clickable"
              onClick={() => router.back()}
            >
              ← back
            </button>
            <ThemeSwitch />
          </div>
        )}
      </div>

      {/* Scroll progress — single accent line */}
      {isHomePg && (
        <div
          className="h-px transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: "var(--color-accent)",
          }}
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuenow={Math.round(scrollProgress)}
        />
      )}
    </div>
  );
};

export default Header;
