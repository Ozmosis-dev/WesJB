import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0c0b",
          color: "#c0541a",
          fontSize: 32,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
          letterSpacing: -1,
          border: "2px solid #c0541a",
          borderRadius: 4,
        }}
      >
        WJ
      </div>
    ),
    { ...size }
  );
}
