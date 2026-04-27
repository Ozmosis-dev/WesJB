import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "About Wes Johnson. The journey from a small town outside Dallas to Syracuse to almost a decade in the NBA.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function AboutOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(180deg, #0d0c0b 0%, #0d0c0b 50%, #3b2a1a 100%)",
          fontFamily: "Arial, sans-serif",
          color: "#f0ebe2",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 14,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(240, 235, 226, 0.7)",
              fontFamily: "monospace",
            }}
          >
            June 24, 2010 · Madison Square Garden
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c0541a",
              fontWeight: 600,
            }}
          >
            About · The Journey
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 128,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -2,
              textTransform: "uppercase",
              color: "#f0ebe2",
            }}
          >
            <span>Then He Heard</span>
            <span>His Name.</span>
          </div>
          <p
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "rgba(240, 235, 226, 0.85)",
              maxWidth: 880,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            "Preparation outperforms talent."
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 16,
            borderTop: "2px solid #c0541a",
          }}
        >
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c0541a",
              fontWeight: 700,
            }}
          >
            Wes Johnson Basketball
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(240, 235, 226, 0.6)",
              fontFamily: "monospace",
            }}
          >
            New Orleans
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
