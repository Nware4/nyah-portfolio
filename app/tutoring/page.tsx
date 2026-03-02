import Link from "next/link";
import { P, FG, M, B, BG } from "../lib/tokens";

const services = [
  { title: "Interview Coaching",               audience: "Early career · Career changers", body: "Talk about your work with clarity and confidence." },
  { title: "Presentation & Public Speaking",   audience: "Students · Professionals",       body: "Structure and delivery for high-stakes moments." },
  { title: "Conversational English",           audience: "Non-native speakers",             body: "Fluency and confidence in professional settings." },
  { title: "Academic & Professional Writing",  audience: "All levels",                     body: "Clear thinking. Strong structure." },
];

export default function Tutoring() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>
      <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.92, color: FG, marginBottom: "0.75rem" }}>
        Comm.<br /><span style={{ color: P }}>Tutoring.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: M, fontWeight: 300, maxWidth: 420, marginBottom: "4rem" }}>
        Helping people communicate clearly in interviews, presentations, and professional settings.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: B, marginBottom: "4rem" }}>
        {services.map((s) => (
          <div key={s.title} style={{ background: BG, padding: "2.2rem" }}>
            <div style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: P, marginBottom: "0.65rem" }}>{s.audience}</div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: FG, marginBottom: "0.65rem" }}>{s.title}</div>
            <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: M, fontWeight: 300, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `2px solid ${P}`, paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.88rem", color: M, fontWeight: 300, margin: 0 }}>Interested? Let&apos;s talk.</p>
        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", fontWeight: 500, padding: "0.82rem 1.8rem", background: P, color: "#fff", border: `2px solid ${P}` }}>
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}
