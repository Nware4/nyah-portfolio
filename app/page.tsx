import Link from "next/link";

const P  = "#e4036c";
const FG = "#f0ede8";
const M  = "rgba(240,237,232,0.55)";
const B  = "rgba(240,237,232,0.08)";

const tiles = [
  { label: "About",       sub: "Background & vision",      href: "/about" },
  { label: "Operations",  sub: "Projects & strategy work", href: "/operations" },
  { label: "Photography", sub: "Visual storytelling",      href: "/photography" },
  { label: "Tutoring",    sub: "Communication & writing",  href: "/tutoring" },
];

export default function Home() {
  return (
    <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>

      <style>{`
        .nav-tile {
          background: #0a0a0a;
          padding: 1.75rem;
          border-top: 2px solid transparent;
          transition: border-color 0.2s, background 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .nav-tile:hover {
          border-color: #e4036c;
          background: #0f0f0f;
        }
      `}</style>

      {/* Hero */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "4rem",
        alignItems: "center",
        marginBottom: "5rem",
      }}>
        <div>
          <p style={{
            fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase",
            color: P, marginBottom: "1.4rem",
          }}>
            Bioengineering × Operations × Creative
          </p>
          <h1 style={{
            fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900,
            letterSpacing: "-0.03em", lineHeight: 0.92,
            color: FG, marginBottom: "1.75rem",
          }}>
            Creative<br />
            <span style={{ color: P }}>Vision.</span><br />
            Bold<br />
            Execution.
          </h1>
          <p style={{
            fontSize: "0.88rem", lineHeight: 1.85, color: M,
            fontWeight: 300, maxWidth: 460, marginBottom: "2.5rem",
          }}>
            Stanford Bioengineering graduate. I work at the intersection of science,
            strategy, and storytelling — through operations consulting, photography,
            and communication tutoring.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/operations" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.82rem", fontWeight: 500, padding: "0.82rem 1.8rem",
              background: P, color: "#fff", border: `2px solid ${P}`,
            }}>
              View My Work →
            </Link>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center",
              fontSize: "0.82rem", fontWeight: 500, padding: "0.82rem 1.8rem",
              background: "transparent", color: M, border: `2px solid ${B}`,
            }}>
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Photo placeholder */}
        <div style={{
          aspectRatio: "4/5",
          background: "#111",
          border: `1px solid ${B}`,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "0.75rem",
          }}>
            <span style={{ fontSize: "2rem", color: "rgba(240,237,232,0.07)" }}>+</span>
            <span style={{
              fontSize: "0.52rem", letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(240,237,232,0.15)",
            }}>
              Your Photo
            </span>
          </div>
        </div>
      </div>

      {/* Page tiles */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: B }}>
        {tiles.map((t) => (
          <Link key={t.href} href={t.href} className="nav-tile">
            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: FG }}>{t.label}</span>
            <span style={{ fontSize: "0.75rem", color: M, fontWeight: 300 }}>{t.sub}</span>
          </Link>
        ))}
      </div>

    </div>
  );
}
