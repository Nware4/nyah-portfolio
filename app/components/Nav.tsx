"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { P, FG, B } from "../lib/tokens";

const M = "rgba(240,237,232,0.4)";

const LINKS = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Operations",  href: "/operations" },
  { label: "Photography", href: "/photography" },
  { label: "Tutoring",    href: "/tutoring" },
  { label: "Contact",     href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [hov, setHov] = useState<string | null>(null);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: `1px solid ${B}`,
      backdropFilter: "blur(14px)",
      background: "rgba(10,10,10,0.9)",
    }}>
      <div style={{
        maxWidth: 1000, margin: "0 auto", padding: "1.1rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <Link href="/" style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.08em", color: FG }}>
          N<span style={{ color: P }}>.</span>W
        </Link>
        <nav style={{ display: "flex", gap: "1.75rem" }}>
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={() => setHov(l.href)}
                onMouseLeave={() => setHov(null)}
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: active ? P : hov === l.href ? FG : M,
                  borderBottom: active ? `1px solid ${P}` : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
