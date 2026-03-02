import { P, FG, M, B } from "../lib/tokens";

export default function About() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>
      <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.92, color: FG, marginBottom: "0.75rem" }}>
        <span style={{ color: P }}>About</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "4rem" }} />

      <div style={{ maxWidth: 520 }}>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: M, fontWeight: 300, marginBottom: "1.25rem" }}>
          Stanford Bioengineering, December 2025.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: M, fontWeight: 300 }}>
          I work in operations, portrait photography, and communication coaching.
        </p>
      </div>
    </div>
  );
}
