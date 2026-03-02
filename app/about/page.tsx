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

      {/* Background */}
      <div style={{ maxWidth: 640, marginBottom: "5rem" }}>
        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: FG, marginBottom: "1rem" }}>
          Background
        </div>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: M, fontWeight: 300, marginBottom: "1rem" }}>
          I graduated from Stanford with a degree in Bioengineering — trained to design elegant
          solutions to high-stakes problems. I apply that same precision to operations, strategy,
          and communication.
        </p>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: M, fontWeight: 300, marginBottom: "1rem" }}>
          Outside of my technical work, I&apos;m a photographer and communication tutor — practices
          that keep me sharp and deeply curious about how people express and understand ideas.
        </p>
        <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: M, fontWeight: 300 }}>
          I&apos;m a member of Alpha Kappa Alpha sorority and a former Hodegos — experiences that
          shaped how I think about mentorship, community, and showing up for others.
        </p>
      </div>

      {/* What I Do */}
      <div style={{ borderTop: `1px solid ${B}`, paddingTop: "3.5rem" }}>
        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: FG, marginBottom: "2rem" }}>
          What I Do
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {[
            { title: "Operations",      body: "Cross-functional problem solving, project management, and strategic frameworks." },
            { title: "Photography",     body: "Portrait photography — capturing people as they are." },
            { title: "Comm. Tutoring",  body: "Oral communication coaching for students, professionals, and non-native English speakers." },
          ].map((item) => (
            <div key={item.title} style={{ borderTop: `2px solid ${P}`, paddingTop: "1.1rem" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: FG, marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: M, fontWeight: 300, margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
