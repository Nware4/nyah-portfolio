import Link from "next/link";
import Image from "next/image";

const P  = "#e4036c";
const FG = "#f0ede8";
const M  = "rgba(240,237,232,0.55)";
const B  = "rgba(240,237,232,0.08)";

const tiles = [
  { label: "Operations",  sub: "Strategy & execution",  href: "/operations" },
  { label: "Photography", sub: "Portrait work",          href: "/photography" },
  { label: "Tutoring",    sub: "Communication coaching", href: "/tutoring" },
  { label: "About",       sub: "Background",             href: "/about" },
];

export default function Home() {
  return (
    <div style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <style>{`
        .nav-tile { background: #0a0a0a; padding: 1.75rem; border-top: 2px solid transparent; transition: border-color 0.2s, background 0.2s; display: flex; flex-direction: column; gap: 0.4rem; }
        .nav-tile:hover { border-color: #e4036c; background: #0f0f0f; }
        @media (max-width: 680px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { order: -1; max-width: 280px; margin: 0 auto; }
          .tile-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="hero-grid" style={{
        display: "grid", gridTemplateColumns: "1fr 320px",
        gap: "4rem", alignItems: "center", marginBottom: "4rem",
      }}>
        <div>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: P, marginBottom: "1.4rem" }}>
            Stanford Bioengineering · December 2025
          </p>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.92, color: FG, marginBottom: "1.75rem" }}>
            Nyah<br /><span style={{ color: P }}>Ware.</span>
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: M, fontWeight: 300, maxWidth: 340, marginBottom: "2.5rem" }}>
            Bioengineering. Operations. Photography. Tutoring.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", fontWeight: 500, padding: "0.82rem 1.8rem", background: P, color: "#fff", border: `2px solid ${P}` }}>
              Learn More →
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", fontSize: "0.82rem", fontWeight: 500, padding: "0.82rem 1.8rem", background: "transparent", color: M, border: `2px solid ${B}` }}>
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="hero-photo" style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
          <Image src="/nyah.jpg" alt="Nyah Ware" fill sizes="320px" style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>
      </div>

      <div className="tile-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: B }}>
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
