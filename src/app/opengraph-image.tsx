import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Michael Huang — AI-Native Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same faces as the site (layout.js: Fraunces display, JetBrains Mono meta); edge has no system fonts.
const DISPLAY_FONT = "Fraunces";
const MONO_FONT = "JetBrains Mono";

export default async function Image() {
  const [display, mono] = await Promise.all([
    fetch(new URL("./_og-fonts/fraunces-700.woff", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./_og-fonts/jetbrains-mono-400.woff", import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: MONO_FONT,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(251,146,60,0.10) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Edge fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, #09090b 85%)",
          }}
        />

        {/* Status line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#52525b",
            fontSize: 15,
            letterSpacing: "0.05em",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#16a34a",
            }}
          />
          available for consulting and senior roles · vancouver, bc
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: 112,
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              fontFamily: DISPLAY_FONT,
            }}
          >
            Michael
          </span>
          <span
            style={{
              fontSize: 112,
              fontWeight: 700,
              color: "#FB923C",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              fontFamily: DISPLAY_FONT,
            }}
          >
            Huang
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "#27272a",
            margin: "28px 0 20px",
            position: "relative",
          }}
        />

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            position: "relative",
          }}
        >
          <span style={{ color: "#a1a1aa", fontSize: 18, fontFamily: MONO_FONT }}>
            AI-Native Full-Stack Engineer
          </span>
          <span style={{ color: "#3f3f46", fontSize: 18 }}>·</span>
          <span style={{ color: "#71717a", fontSize: 18, fontFamily: MONO_FONT }}>
            SI8 Technology
          </span>
          <span style={{ color: "#3f3f46", fontSize: 18 }}>·</span>
          <span style={{ color: "#71717a", fontSize: 18, fontFamily: MONO_FONT }}>
            michaelhuang.ca
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: DISPLAY_FONT, data: display, weight: 700, style: "normal" },
        { name: MONO_FONT, data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
