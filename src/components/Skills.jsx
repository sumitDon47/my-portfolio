// src/components/Skills.jsx
import { RevealOnScroll, useScrollReveal } from "../hooks/useScrollReveal";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 72 },
      { name: "HTML/CSS", level: 92 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 68 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 60 },
      { name: "Vite", level: 82 },
      { name: "Linux/CLI", level: 70 },
      { name: "CI/CD", level: 58 },
    ],
  },
];

function SkillBar({ name, level, delay, isVisible }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
        }}
      >
        <span style={{ color: "var(--text-muted)" }}>{name}</span>
        <span style={{ color: "var(--purple-light)", fontWeight: 600 }}>
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          borderRadius: "3px",
          background: "var(--border)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: isVisible ? `${level}%` : "0%",
            borderRadius: "3px",
            background: "linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)",
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
            boxShadow: "0 0 10px rgba(124,58,237,0.3)",
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        padding: "28px",
        borderRadius: "18px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <span style={{ fontSize: "28px" }}>{category.icon}</span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          {category.title}
        </h3>
      </div>

      {category.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={0.1 + i * 0.1}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px clamp(20px, 5vw, 60px)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <RevealOnScroll>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">02. Skills</span>
          <h2
            className="gradient-text section-title"
            style={{ marginBottom: "16px" }}
          >
            My Toolkit
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "15px",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto",
              fontWeight: 300,
            }}
          >
            Technologies and tools I use to bring ideas to life. Always learning,
            always improving.
          </p>
        </div>
      </RevealOnScroll>

      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {SKILL_CATEGORIES.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
