import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0c0b",
          color: "#f0ebe2",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            color: "#c0541a",
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          WJ
        </div>
        <div
          style={{
            fontSize: 14,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(240, 235, 226, 0.7)",
            marginTop: 8,
            fontWeight: 600,
          }}
        >
          Basketball
        </div>
      </div>
    ),
    { ...size }
  );
}
