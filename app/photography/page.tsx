import Image from "next/image";
import { P, FG, M } from "../lib/tokens";

const photos = [
  { src: "/1-DSC_1841.jpg",  alt: "Portrait", ratio: "4/5" },
  { src: "/2-IMG_8603.jpg",  alt: "Portrait", ratio: "3/2" },
  { src: "/3-IMG_8605.jpg",  alt: "Portrait", ratio: "4/5" },
  { src: "/4-IMG_8610.jpg",  alt: "Portrait", ratio: "3/2" },
  { src: "/5-_DSC6456.jpg",  alt: "Portrait", ratio: "4/5" },
  { src: "/6-IMG_0004.jpg",  alt: "Portrait", ratio: "3/2" },
  { src: "/7-IMG_0005.jpg",  alt: "Portrait", ratio: "3/2" },
  { src: "/8-DSC_0141.jpg",  alt: "Portrait", ratio: "4/5" },
  { src: "/9-DSC_0187.jpg",  alt: "Portrait", ratio: "3/2" },
];

export default function Photography() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>
      <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.92, color: "#f0ede8", marginBottom: "0.75rem" }}>
        Photo<br /><span style={{ color: "#e4036c" }}>graphy.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: "#e4036c", marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(240,237,232,0.55)", fontWeight: 300, maxWidth: 420, marginBottom: "3.5rem" }}>
        Portraits. Capturing people as they are.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
        {photos.map((p) => (
          <div key={p.src} style={{ aspectRatio: p.ratio, position: "relative", overflow: "hidden", background: "#111" }}>
            <Image src={p.src} alt={p.alt} fill sizes="(max-width: 680px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
