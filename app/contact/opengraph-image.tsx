import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Book the Floor. Private basketball training with Wesley Johnson in New Orleans, monthly memberships and elite custom programs.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ContactOG() {
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
            "linear-gradient(180deg, #0d0c0b 0%, #0d0c0b 70%, #2c2925 100%)",
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
            Book a Session
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
            <span>Book the</span>
            <span>Floor.</span>
          </div>
          <p
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "rgba(240, 235, 226, 0.85)",
              maxWidth: 880,
              margin: 0,
            }}
          >
            Private monthly memberships. Elite custom programs by application.
            Reach out direct and Wes will come back with available windows.
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
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "rgba(240, 235, 226, 0.85)",
              fontFamily: "monospace",
            }}
          >
            3001 Tchoupitoulas St · New Orleans, LA 70115
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#c0541a",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            wes@wesjbasketball.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
