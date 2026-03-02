import { P, FG, M, B } from "../lib/tokens";

export default function Photography() {
  const slots = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>

      <h1 style={{
        fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900,
        letterSpacing: "-0.03em", lineHeight: 0.92,
        color: FG, marginBottom: "0.75rem",
      }}>
        Photo<br /><span style={{ color: P }}>graphy.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />
      <p style={{
        fontSize: "0.88rem", lineHeight: 1.85, color: M,
        fontWeight: 300, maxWidth: 460, marginBottom: "3.5rem",
      }}>
        Portraits. Capturing people as they are.
      </p>

      <style>{`
        .photo-slot .photo-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .photo-slot:hover .photo-overlay {
          opacity: 1;
        }
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
        {slots.map((id) => (
          <div
            key={id}
            className="photo-slot"
            style={{
              aspectRatio: "4/5",
              background: "#111",
              border: `1px solid ${B}`,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/*
              TO ADD YOUR PHOTO:
              1. Put your image in the /public folder e.g. public/portrait-1.jpg
              2. Add `import Image from "next/image"` at the top of this file
              3. Replace this placeholder div with:
                 <Image src="/portrait-1.jpg" alt="Portrait" fill style={{ objectFit: "cover" }} sizes="(max-width: 1000px) 50vw, 500px" />
            */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "0.5rem",
            }}>
              <span style={{ fontSize: "1.4rem", color: "rgba(240,237,232,0.07)" }}>+</span>
              <span style={{
                fontSize: "0.52rem", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "rgba(240,237,232,0.12)",
              }}>
                Photo {id}
              </span>
            </div>
            <div className="photo-overlay" />
          </div>
        ))}
      </div>

    </div>
  );
}
