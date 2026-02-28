// src/components/Experience.jsx
import { RevealOnScroll } from "../hooks/useScrollReveal";

const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2024 — Present",
    description:
      "Building end-to-end web applications using React, Node.js, Express, and MongoDB. Focused on clean architecture, RESTful APIs, database design, and responsive frontends.",
    highlights: ["React & Node.js", "REST API Development", "MongoDB & Express"],
    current: true,
  },
  {
    title: "Web Development Learner",
    company: "Self-Taught & Online Courses",
    period: "2023 — 2024",
    description:
      "Intensive self-learning journey through HTML, CSS, JavaScript, React, and Node.js. Built multiple projects to solidify understanding of frontend fundamentals and modern tooling.",
    highlights: ["JavaScript ES6+", "React Fundamentals", "CSS Animations"],
    current: false,
  },
  {
    title: "Programming Foundations",
    company: "Academic & Self-Study",
    period: "2022 — 2023",
    description:
      "Started programming journey with foundational concepts. Explored algorithms, data structures, and got introduced to web technologies and version control with Git.",
    highlights: ["Programming Logic", "Git Version Control", "Problem Solving"],
    current: false,
  },
];

function TimelineItem({ exp, index }) {
  return (
    <RevealOnScroll delay={index * 0.12} direction="left">
      <div
        style={{
          display: "flex",
          gap: "28px",
          position: "relative",
          paddingBottom: index < EXPERIENCES.length - 1 ? "48px" : "0",
        }}
      >
        {/* Timeline line + dot */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: 0,
            width: "20px",
          }}
        >
          {/* Dot */}
          <div
            style={{
              width: exp.current ? "16px" : "12px",
              height: exp.current ? "16px" : "12px",
              borderRadius: "50%",
              background: exp.current
                ? "linear-gradient(135deg, #7c3aed, #a855f7)"
                : "var(--border)",
              border: exp.current
                ? "3px solid rgba(124,58,237,0.3)"
                : "2px solid var(--border-hover)",
              boxShadow: exp.current
                ? "0 0 20px rgba(124,58,237,0.5)"
                : "none",
              animation: exp.current ? "pulse-live 2s ease infinite" : "none",
              flexShrink: 0,
              marginTop: "6px",
            }}
          />
          {/* Line */}
          {index < EXPERIENCES.length - 1 && (
            <div
              style={{
                width: "2px",
                flex: 1,
                background:
                  "linear-gradient(180deg, rgba(124,58,237,0.4), rgba(124,58,237,0.05))",
                marginTop: "8px",
              }}
            />
          )}
        </div>

        {/* Content card */}
        <div
          style={{
            flex: 1,
            padding: "24px",
            borderRadius: "16px",
            background: "var(--bg-card)",
            border: `1px solid ${exp.current ? "rgba(124,58,237,0.3)" : "var(--border)"}`,
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
            e.currentTarget.style.transform = "translateX(4px)";
            e.currentTarget.style.boxShadow =
              "0 8px 30px rgba(124,58,237,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = exp.current
              ? "rgba(124,58,237,0.3)"
              : "var(--border)";
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Top glow for current */}
          {exp.current && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
              }}
            />
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                }}
              >
                {exp.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--purple-light)",
                  marginTop: "2px",
                }}
              >
                {exp.company}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {exp.current && (
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "12px",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    fontSize: "10px",
                    fontFamily: "var(--font-mono)",
                    color: "rgba(34,197,94,0.9)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Current
                </span>
              )}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-faint)",
                  letterSpacing: "0.05em",
                }}
              >
                {exp.period}
              </span>
            </div>
          </div>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "14px",
            }}
          >
            {exp.description}
          </p>

          {/* Highlights */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {exp.highlights.map((h) => (
              <span
                key={h}
                style={{
                  fontSize: "10px",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  background: "rgba(124,58,237,0.08)",
                  color: "var(--purple-light)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px clamp(20px, 5vw, 60px)",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <RevealOnScroll>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">03. Experience</span>
          <h2
            className="gradient-text section-title"
            style={{ marginBottom: "16px" }}
          >
            My Journey
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "15px",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            Every step of the way — from first lines of code to building
            real-world applications.
          </p>
        </div>
      </RevealOnScroll>

      <div>
        {EXPERIENCES.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
