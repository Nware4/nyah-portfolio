import Link from "next/link";
import { P, FG, M, B, BG } from "../lib/tokens";


const services = [
  {
    title: "Interview Coaching",
    audience: "Early career · Career changers",
    body: "Practice and refine how you talk about yourself, your work, and your goals. For job interviews, school applications, and professional conversations.",
  },
  {
    title: "Presentation & Public Speaking",
    audience: "Students · Professionals",
    body: "Structure, delivery, and confidence for presentations, pitches, and public speaking — from classroom to boardroom.",
  },
  {
    title: "Conversational English",
    audience: "Non-native speakers",
    body: "Build fluency, reduce hesitation, and communicate naturally in professional and everyday settings.",
  },
  {
    title: "Academic & Professional Writing",
    audience: "All levels",
    body: "Writing support when you need it — essays, cover letters, emails, and reports. Grounded in clear thinking and strong structure.",
  },
];

const faqs = [
  {
    q: "What does a session look like?",
    a: "Most sessions are 60 minutes over video call. We'll warm up with a real scenario — an interview question, a presentation opener, a difficult conversation — and work through it together with feedback.",
  },
  {
    q: "I'm not a native English speaker. Can you help?",
    a: "Absolutely — this is a big part of what I do. We focus on fluency, natural phrasing, and building the confidence to speak without second-guessing yourself.",
  },
  {
    q: "How many sessions do I need?",
    a: "It depends on your goal. For a specific event like an interview or presentation, 2–3 focused sessions can make a big difference. For ongoing fluency work, a regular cadence tends to work best.",
  },
  {
    q: "Do you offer discounts?",
    a: "Yes — reduced rates for students and non-profit employees. Just reach out and we'll work something out.",
  },
];

export default function Tutoring() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "7rem" }}>

      <h1 style={{
        fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900,
        letterSpacing: "-0.03em", lineHeight: 0.92,
        color: FG, marginBottom: "0.75rem",
      }}>
        Comm.<br /><span style={{ color: P }}>Tutoring.</span>
      </h1>
      <div style={{ width: 56, height: 3, background: P, marginBottom: "1.5rem" }} />

      <p style={{
        fontSize: "0.88rem", lineHeight: 1.85, color: M,
        fontWeight: 300, maxWidth: 520, marginBottom: "4rem",
      }}>
        My strength is oral communication — helping people find their voice, speak with clarity,
        and show up confidently in high-stakes conversations. I also work on writing and overall
        communication skills, but spoken expression is where I do my best work.
      </p>

      {/* Service cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: B, marginBottom: "5rem" }}>
        {services.map((s) => (
          <div key={s.title} style={{ background: BG, padding: "2.2rem" }}>
            <div style={{
              fontSize: "0.58rem", letterSpacing: "0.24em",
              textTransform: "uppercase", color: P, marginBottom: "0.65rem",
            }}>
              {s.audience}
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: FG, marginBottom: "0.65rem" }}>
              {s.title}
            </div>
            <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: M, fontWeight: 300, margin: 0 }}>
              {s.body}
            </p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div style={{ borderTop: `1px solid ${B}`, paddingTop: "3.5rem", marginBottom: "4.5rem" }}>
        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: FG, marginBottom: "2rem" }}>
          How It Works
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
          {[
            { num: "01", title: "Reach Out",  body: "Send a message with your goals. I'll respond within 24 hours." },
            { num: "02", title: "Assessment", body: "First session is a deep-dive into where you are and where you want to go." },
            { num: "03", title: "Practice",   body: "Structured sessions with real scenarios — speaking, delivery, feedback." },
            { num: "04", title: "Confidence", body: "Leave with tools and strategies to communicate clearly and without hesitation." },
          ].map((step) => (
            <div key={step.num}>
              <div style={{
                fontSize: "2.2rem", fontWeight: 900, color: P,
                lineHeight: 1, marginBottom: "0.65rem",
              }}>
                {step.num}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: FG, marginBottom: "0.4rem" }}>
                {step.title}
              </div>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: M, fontWeight: 300, margin: 0 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div style={{ borderTop: `1px solid ${B}`, paddingTop: "3.5rem", marginBottom: "4rem" }}>
        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: FG, marginBottom: "2rem" }}>FAQs</div>
        {faqs.map((f, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem", padding: "1.25rem 0",
            borderBottom: `1px solid ${B}`,
          }}>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: FG, margin: 0 }}>{f.q}</p>
            <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: M, fontWeight: 300, margin: 0 }}>{f.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        borderTop: `2px solid ${P}`, paddingTop: "2rem",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "1rem",
      }}>
        <div>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: FG, marginBottom: "0.25rem" }}>
            Ready to start?
          </div>
          <p style={{ fontSize: "0.82rem", color: M, fontWeight: 300, margin: 0 }}>
            First session is always a conversation — no pressure.
          </p>
        </div>
        <Link href="/contact" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.82rem", fontWeight: 500, padding: "0.82rem 1.8rem",
          background: P, color: "#fff", border: `2px solid ${P}`,
        }}>
          Book a Session →
        </Link>
      </div>

    </div>
  );
}
