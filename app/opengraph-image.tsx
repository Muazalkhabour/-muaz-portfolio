import { ImageResponse } from "next/og";

export const alt = "MUAZ TECH portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #050816 0%, #0f172a 65%, #13233c 100%)",
          color: "#f8fafc",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-40px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(251, 191, 36, 0.16)",
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-40px",
            width: "340px",
            height: "340px",
            borderRadius: "999px",
            background: "rgba(56, 189, 248, 0.12)",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "36px",
            padding: "44px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "22px",
                border: "1px solid rgba(253,230,138,0.28)",
                background: "rgba(255,255,255,0.04)",
                padding: "14px 18px",
                color: "#fde68a",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              {"</>"}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "10px 16px",
                fontSize: 18,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              MUAZ TECH
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: "760px" }}>
            <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.2 }}>Muaz Alshmoty</div>
            <div style={{ fontSize: 30, color: "#fde68a", fontWeight: 700 }}>Modern websites and digital experiences</div>
            <div style={{ fontSize: 24, lineHeight: 1.6, color: "rgba(255,255,255,0.76)" }}>
              Portfolio focused on modern web development, landing pages, user interfaces, and stronger digital presence.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {[
              "Next.js",
              "TypeScript",
              "UI Engineering",
              "Digital Presence",
            ].map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "12px 18px",
                  fontSize: 18,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}