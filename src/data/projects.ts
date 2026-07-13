export type ProjectStatus = "live" | "in_development" | "archived";

export interface Project {
  id: string;
  name: string;
  tier: 1 | 2;
  status: ProjectStatus;
  tagline: string;
  description: string;
  stack: string[];
  live_url: string | null;
  source_url: string | null;
  source_visibility: "public" | "private";
  featured: boolean;
  honesty_note?: string;
}

export const projects: Project[] = [
  {
    id: "miko",
    name: "Miko (Pythia)",
    tier: 1,
    status: "live",
    tagline: "Guardrailed multi-tenant RAG chatbot — shipped as a commercial SaaS",
    description:
      "Multi-tenant RAG chatbot platform sold as a productized SaaS. Supabase pgvector retrieval pipeline, deterministic eval gate that blocks deploys on info leaks, durable cross-instance rate limiting, and Stripe subscription billing with webhook-driven tenant activation. Live in production on michaelhuang.ca and si8tech.com.",
    stack: ["RAG", "pgvector", "Stripe", "multi-tenant", "evals", "Next.js", "TypeScript", "Supabase"],
    live_url: "https://www.si8tech.com/miko",
    source_url: null,
    source_visibility: "private",
    featured: true,
  },
  {
    id: "tarive",
    name: "Tarive",
    tier: 1,
    status: "live",
    tagline: "AI-powered personal finance — no spreadsheets, no manual entry",
    description:
      "Personal finance platform that auto-connects to bank accounts via Plaid, categorizes transactions using AI, and surfaces insights including a life-cost annotation (spending expressed as hours of working life), 20-year net worth projections, and an AI chat assistant.",
    stack: ["Next.js", "TypeScript", "Supabase", "Plaid", "Gemini"],
    live_url: "https://tarive.vercel.app/home",
    source_url: null,
    source_visibility: "private",
    featured: true,
  },
  {
    id: "prompt-studio",
    name: "Prompt Studio",
    tier: 1,
    status: "live",
    tagline: "Make AI workflows repeatable — browser-native prompt chaining",
    description:
      "Chrome extension for creating, saving, and executing multi-step AI prompt workflows. Supports dynamic input templates, prompt collections, and in-browser execution. Privacy-first: data stays local unless explicitly synced.",
    stack: ["React", "Plasmo", "Chrome Extension APIs", "OpenAI API", "Anthropic API"],
    live_url:
      "https://chromewebstore.google.com/detail/prompt-studio/gggdidjaokfggaabjgalcncclnppanih",
    source_url: null,
    source_visibility: "private",
    featured: true,
  },
  {
    id: "nightfalls",
    name: "Nightfalls",
    tier: 2,
    status: "live",
    tagline: "Sunset quality forecasting for photographers and golden-hour chasers",
    description:
      "Web app delivering accurate sunset quality forecasts and golden hour timing worldwide. Analyzes weather patterns and atmospheric conditions to score viewing quality.",
    stack: ["Next.js", "TypeScript", "Weather API"],
    live_url: "https://www.nightfalls.ca",
    source_url: null,
    source_visibility: "private",
    featured: false,
  },
  {
    id: "purchasing-bot",
    name: "Purchasing Automation",
    tier: 2,
    status: "in_development",
    tagline: "300% faster purchasing — multi-vendor portal automation",
    description:
      "Playwright automation pipeline for complex purchasing workflows across vendor portals. Includes validation logic and exception handling. 300% faster than manual in controlled testing.",
    stack: ["Playwright", "Python", "Shopify API"],
    live_url: null,
    source_url: null,
    source_visibility: "private",
    featured: false,
    honesty_note: "Proof of concept — not yet deployed to production.",
  },
  {
    id: "ssbc-bot",
    name: "SSBC Discord Bot",
    tier: 2,
    status: "live",
    tagline: "Automated waitlist and court management for a badminton club",
    description:
      "Discord bot managing court booking waitlists, session announcements, and member coordination. Actively used by real club members.",
    stack: ["Python", "Firebase", "GCP", "Discord API"],
    live_url: null,
    source_url: null,
    source_visibility: "private",
    featured: false,
  },
  {
    id: "vital",
    name: "Vital — Fitbit Watchface",
    tier: 2,
    status: "live",
    tagline: "Minimalist watchface for Fitbit Versa 2 with real-time health metrics",
    description:
      "Battery-optimized digital watchface displaying time, date, real-time heart rate, and toggleable barometric pressure. Clean dark interface with tap-to-toggle interactivity.",
    stack: ["JavaScript", "CSS", "Fitbit SDK 4.0"],
    live_url: null,
    source_url: "https://github.com/sibulus13/Vital",
    source_visibility: "public",
    featured: false,
  },
  {
    id: "algo-trader",
    name: "Algo Trader",
    tier: 2,
    status: "archived",
    tagline: "Automated stock trading across 13 symbols using ML signal generation",
    description:
      "Algorithmic trading system using Python and ML to generate buy/sell signals across a portfolio of 13 symbols. Multiple strategy models with a backtesting framework.",
    stack: ["Python", "Pandas", "scikit-learn"],
    live_url: null,
    source_url: "https://github.com/sibulus13/Algo-Trader",
    source_visibility: "public",
    featured: false,
  },
  {
    id: "aynon",
    name: "Aynon",
    tier: 2,
    status: "archived",
    tagline: "Hyperlocal anonymous social forum",
    description:
      "Full-stack social platform for hyperlocal anonymous discussion. Features location-based post discovery, anonymous identity management, and real-time interactions.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    live_url: null,
    source_url: "https://github.com/sibulus13/aynon-web",
    source_visibility: "public",
    featured: false,
  },
  {
    id: "course-scheduler",
    name: "Course Scheduler",
    tier: 2,
    status: "archived",
    tagline: "Automated conflict-free course planning for engineering departments",
    description:
      "Constraint-solving automation for semester and quarterly course planning at a university departmental level. Addressed bottleneck classes caused by conflicting offerings — a previously manual, error-prone process.",
    stack: ["Python"],
    live_url: null,
    source_url: null,
    source_visibility: "private",
    featured: false,
  },
  {
    id: "multi-agent-pathfinding",
    name: "Multi-Agent Pathfinding",
    tier: 2,
    status: "archived",
    tagline: "Simulation of concurrent autonomous agents navigating shared environments",
    description:
      "Real-time simulation of multiple autonomous agents navigating a shared grid with collision avoidance and cooperative path resolution. Demonstrates emergent coordination under dynamic conditions.",
    stack: ["Python", "Simulation"],
    live_url: null,
    source_url: null,
    source_visibility: "private",
    featured: false,
  },
  {
    id: "6dof-simulator",
    name: "6-DOF Racing Simulator",
    tier: 2,
    status: "archived",
    tagline: "Kinematic simulation of a Stewart platform motion system",
    description:
      "Kinematic simulation of a Stewart platform (parallel manipulator) as a 6-DOF racing simulator. Models the full motion envelope used in high-fidelity driving simulators. Built as part of Mechatronic Systems Engineering coursework.",
    stack: ["MATLAB", "Simulink", "Kinematics"],
    live_url: null,
    source_url: null,
    source_visibility: "private",
    featured: false,
  },
];
