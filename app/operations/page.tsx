import { P, FG, M, B, BG } from "../lib/tokens";

const areas = [
  { title: "Project Management",      body: "Keeping complex work on track." },
  { title: "Strategy & Research",     body: "Turning ambiguity into clear next steps." },
  { title: "Process Design",          body: "Systems that help teams move faster." },
  { title: "Technical Communication", body: "Complex ideas, made accessible." },
];

export default function Operations() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>
      <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.92, color: FG, marginBottom: "0.75rem" }}>
        Operations<br /><span style={{ color: P }}>& Strategy.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: M, fontWeight: 300, maxWidth: 420, marginBottom: "5rem" }}>
        Technical foundation. Generalist range. Looking to contribute to real problems.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: B }}>
        {areas.map((a) => (
          <div key={a.title} style={{ background: BG, padding: "2rem" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: FG, marginBottom: "0.5rem" }}>{a.title}</div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: M, fontWeight: 300, margin: 0 }}>{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
