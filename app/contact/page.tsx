import { P, FG, M, B } from "../lib/tokens";

const links = [
  { label: "Email",    value: "nyah@example.com",     href: "mailto:nyah@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/nyah",  href: "https://linkedin.com/in/nyah" },
  { label: "GitHub",   value: "github.com/nyah",       href: "https://github.com/nyah" },
];

export default function Contact() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>

      <style>{`
        .contact-link { transition: color 0.2s; color: ${FG}; }
        .contact-link:hover { color: ${P}; }
        .contact-link .contact-arrow { opacity: 0.2; transition: opacity 0.2s; }
        .contact-link:hover .contact-arrow { opacity: 1; }
      `}</style>

      <h1 style={{
        fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900,
        letterSpacing: "-0.03em", lineHeight: 0.92,
        color: FG, marginBottom: "0.75rem",
      }}>
        Let&apos;s <span style={{ color: P }}>Talk.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>

        <div>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: M, fontWeight: 300, marginBottom: "1.25rem" }}>
            Whether you&apos;re looking for an operations collaborator, a photographer, or a
            communication tutor — I&apos;d love to hear from you.
          </p>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: M, fontWeight: 300, marginBottom: "2.5rem" }}>
            I typically respond within 24 hours.
          </p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.7rem",
            border: `1px solid ${B}`, padding: "0.85rem 1.3rem",
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#4ade80", display: "inline-block",
              boxShadow: "0 0 8px rgba(74,222,128,0.5)",
            }} />
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.08em", color: M }}>
              Available for new opportunities
            </span>
          </div>
        </div>

        <div>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-link"
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1.3rem 0", borderBottom: `1px solid ${B}`,
              }}
            >
              <div>
                <div style={{
                  fontSize: "0.58rem", letterSpacing: "0.22em",
                  textTransform: "uppercase", color: P, marginBottom: "0.2rem",
                }}>
                  {l.label}
                </div>
                <div style={{ fontSize: "0.9rem" }}>{l.value}</div>
              </div>
              <span className="contact-arrow" style={{ fontSize: "1rem" }}>↗</span>
            </a>
          ))}
          <div style={{ borderTop: `1px solid ${B}` }} />
        </div>

      </div>
    </div>
  );
}
