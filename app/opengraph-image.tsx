import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Wes Johnson Basketball. Train With a Pro. Private basketball training in New Orleans with a former top-5 NBA draft pick.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function HomeOG() {
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
            "linear-gradient(180deg, #0d0c0b 0%, #0d0c0b 60%, #1a1410 100%)",
          fontFamily: "Arial, sans-serif",
          color: "#f0ebe2",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c0541a",
              fontWeight: 600,
            }}
          >
            Wes Johnson Basketball
          </span>
          <span
            style={{
              fontSize: 13,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(240, 235, 226, 0.6)",
              fontFamily: "monospace",
            }}
          >
            Coach Wesley Johnson · New Orleans
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 168,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: -2,
              textTransform: "uppercase",
              color: "#f0ebe2",
            }}
          >
            <span>Train With</span>
            <span>A Pro.</span>
          </div>
          <p
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(240, 235, 226, 0.9)",
              maxWidth: 880,
              margin: 0,
            }}
          >
            Private basketball training with a former top-5 NBA draft pick.
            Almost a decade in the league. Now developing the next generation of
            elite players out of New Orleans.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
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
            Almost a Decade NBA
          </span>
          <span style={{ fontSize: 18, color: "rgba(240, 235, 226, 0.4)" }}>
            ·
          </span>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(240, 235, 226, 0.85)",
              fontWeight: 600,
            }}
          >
            #4 Overall Pick
          </span>
          <span style={{ fontSize: 18, color: "rgba(240, 235, 226, 0.4)" }}>
            ·
          </span>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(240, 235, 226, 0.85)",
              fontWeight: 600,
            }}
          >
            Syracuse
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
