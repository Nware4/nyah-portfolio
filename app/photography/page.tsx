import Image from "next/image";
import { P, FG, M, B } from "../lib/tokens";

const photos = [
  { src: "/1-DSC_1841.jpg",  alt: "Portrait 1" },
  { src: "/2-IMG_8603.jpg",  alt: "Portrait 2" },
  { src: "/3-IMG_8605.jpg",  alt: "Portrait 3" },
  { src: "/4-IMG_8610.jpg",  alt: "Portrait 4" },
  { src: "/5-_DSC6456.jpg",  alt: "Portrait 5" },
  { src: "/6-IMG_0004.jpg",  alt: "Portrait 6" },
  { src: "/7-IMG_0005.jpg",  alt: "Portrait 7" },
  { src: "/8-DSC_0141.jpg",  alt: "Portrait 8" },
  { src: "/9-DSC_0187.jpg",  alt: "Portrait 9" },
  { src: "/10-IMG_0051.jpg", alt: "Portrait 10" },
];

export default function Photography() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>
      <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.92, color: FG, marginBottom: "0.75rem" }}>
        Photo<br /><span style={{ color: P }}>graphy.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: M, fontWeight: 300, maxWidth: 420, marginBottom: "3.5rem" }}>
        Portraits. Capturing people as they are.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
        {photos.map((p) => (
          <div key={p.src} style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden", background: "#111" }}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 680px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
