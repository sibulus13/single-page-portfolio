import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Michael Huang — AI-Native Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          fontFamily: "monospace",
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
              "radial-gradient(circle, rgba(142,69,133,0.10) 1px, transparent 1px)",
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
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              fontFamily: "Georgia, serif",
            }}
          >
            Michael
          </span>
          <span
            style={{
              fontSize: 112,
              fontWeight: 800,
              color: "#C084C8",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              fontFamily: "Georgia, serif",
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
          <span style={{ color: "#a1a1aa", fontSize: 18, fontFamily: "monospace" }}>
            AI-Native Full-Stack Engineer
          </span>
          <span style={{ color: "#3f3f46", fontSize: 18 }}>·</span>
          <span style={{ color: "#71717a", fontSize: 18, fontFamily: "monospace" }}>
            SI8 Technology
          </span>
          <span style={{ color: "#3f3f46", fontSize: 18 }}>·</span>
          <span style={{ color: "#71717a", fontSize: 18, fontFamily: "monospace" }}>
            michaelhuang.ca
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
