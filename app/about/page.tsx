import { P, FG, M, B } from "../lib/tokens";

export default function About() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>

      <h1 style={{
        fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900,
        letterSpacing: "-0.03em", lineHeight: 0.92,
        color: FG, marginBottom: "0.75rem",
      }}>
        <span style={{ color: P }}>About</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "4rem" }} />

      <div style={{ maxWidth: 580 }}>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: M, fontWeight: 300, marginBottom: "1.25rem" }}>
          I graduated from Stanford in December 2025 with a degree in Bioengineering.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: M, fontWeight: 300, marginBottom: "1.25rem" }}>
          I&apos;m early in my career and actively exploring work in operations, portrait photography,
          and communication coaching. I care about doing things with intention — whatever the field.
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: M, fontWeight: 300 }}>
          I&apos;m a member of Alpha Kappa Alpha sorority and a former Hodegos.
        </p>
      </div>

    </div>
  );
}
