import { P, FG, M, B, BG } from "../lib/tokens";


const capabilities = [
  {
    title: "Project & Program Management",
    body: "Leading cross-functional initiatives from scoping through delivery — coordinating stakeholders, managing timelines, and keeping complex work on track.",
  },
  {
    title: "Strategy & Research",
    body: "Translating ambiguous problems into structured analyses. Market research, competitive landscape, and decision frameworks that drive action.",
  },
  {
    title: "Process & Systems Design",
    body: "Building operational infrastructure — workflows, playbooks, and tools that help teams move faster and more consistently.",
  },
  {
    title: "Data & Technical Communication",
    body: "Bridging technical and non-technical audiences. Comfortable with data pipelines, research methods, and turning complexity into clarity.",
  },
];

export default function Operations() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>

      <h1 style={{
        fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900,
        letterSpacing: "-0.03em", lineHeight: 0.92,
        color: FG, marginBottom: "0.75rem",
      }}>
        Operations<br /><span style={{ color: P }}>& Strategy.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />

      <p style={{
        fontSize: "0.88rem", lineHeight: 1.85, color: M,
        fontWeight: 300, maxWidth: 560, marginBottom: "5rem",
      }}>
        I&apos;m a generalist with a technical foundation — comfortable moving between research,
        strategy, process design, and execution. I thrive in roles where the work is complex,
        the problems are real, and the team is scrappy.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: B }}>
        {capabilities.map((c) => (
          <div key={c.title} style={{ background: BG, padding: "2rem" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: FG, marginBottom: "0.6rem" }}>
              {c.title}
            </div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: M, fontWeight: 300, margin: 0 }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
