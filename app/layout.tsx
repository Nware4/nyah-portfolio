import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "N.W — Portfolio",
  description: "Nyah W. — Bioengineering, Operations, Photography & Communication Tutoring.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            background: #0a0a0a;
            color: #f0ede8;
            font-family: var(--font-inter), sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          a { text-decoration: none; color: inherit; }
        `}</style>
      </head>
      <body>
        <Nav />
        <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 2rem" }}>
          {children}
        </main>
        <footer style={{ borderTop: "1px solid rgba(240,237,232,0.08)", marginTop: "2rem" }}>
          <div style={{
            maxWidth: 1000, margin: "0 auto", padding: "1.4rem 2rem",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,237,232,0.18)", margin: 0 }}>
              © {new Date().getFullYear()} Nyah W.
            </p>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,237,232,0.12)", margin: 0 }}>
              Built with Next.js 14
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
