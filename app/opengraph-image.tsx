import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt =
  "Wes Johnson Basketball. Train With a Pro. Private basketball training in New Orleans with a former top-5 NBA draft pick.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function HomeOG() {
  const bgData = readFileSync(join(process.cwd(), "public", "inspo", "inspo-04-warm-gym-arched.jpg"));
  const logoData = readFileSync(join(process.cwd(), "public", "wjb-wordmark.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          color: "#f0ebe2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src={`data:image/jpeg;base64,${bgData.toString("base64")}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
        {/* Overlay matches the gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "linear-gradient(180deg, rgba(13,12,11,0.5) 0%, rgba(13,12,11,0.1) 40%, rgba(13,12,11,0.85) 100%)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "80px",
          }}
        >
          {/* Logo at the top left */}
          <div style={{ position: "absolute", top: 60, left: 80, display: "flex" }}>
            <img
              src={`data:image/png;base64,${logoData.toString("base64")}`}
              style={{ height: 60 }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span
              style={{
                fontSize: 16,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#c0541a",
                fontFamily: "monospace",
              }}
            >
              Coach Wesley Johnson · New Orleans
            </span>

            <div
              style={{
                display: "flex",
                fontSize: 110,
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: -2,
                textTransform: "uppercase",
                color: "#f0ebe2",
                marginTop: 10,
              }}
            >
              TRAIN WITH A PRO.
            </div>

            <p
              style={{
                fontSize: 32,
                lineHeight: 1.5,
                color: "rgba(240, 235, 226, 0.9)",
                maxWidth: 900,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              Learn the game through private training with Wesley Johnson, a
              former top-5 NBA draft pick who has done it at the highest level,
              now developing the next generation of elite players out of New
              Orleans.
            </p>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#c0541a",
                  color: "#f0ebe2",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  padding: "20px 40px",
                  borderRadius: 4,
                }}
              >
                Book a Session
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
