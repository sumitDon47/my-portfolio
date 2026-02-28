// src/components/About.jsx
import { GITHUB_USERNAME } from "../hooks/useGitHubRepos";
import { RevealOnScroll } from "../hooks/useScrollReveal";

const SKILLS = [
  "React", "JavaScript", "TypeScript", "HTML/CSS",
  "Node.js", "Git", "Vite", "REST APIs",
  "Tailwind CSS", "Figma",
];

const HIGHLIGHTS = [
  { icon: "🚀", title: "Fast Learner", desc: "Quick to pick up new frameworks and tools" },
  { icon: "🎯", title: "Detail Oriented", desc: "Obsessed with pixel-perfect implementations" },
  { icon: "🤝", title: "Team Player", desc: "Collaborative approach to problem solving" },
  { icon: "📈", title: "Growth Mindset", desc: "Always pushing boundaries and improving" },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "100px clamp(20px, 5vw, 60px)",
      maxWidth: "1100px",
      margin: "0 auto",
    }}>
      <RevealOnScroll>
        <span className="section-label">01. About</span>
      </RevealOnScroll>

      <div className="about-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "start",
      }}>

        {/* ── Left: bio text ── */}
        <RevealOnScroll delay={0.1} direction="right">
          <div>
            <h2 className="gradient-text section-title" style={{ marginBottom: "24px" }}>
              About Me
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                <>Hey! I'm <strong style={{ color: "var(--purple-light)" }}>Sumit Sapkota</strong>, a passionate full stack developer based in Nepal. I love turning ideas into elegant digital experiences — from crafting pixel-perfect UIs to building robust backend systems.</>,
                <>I've been learning and building for 2+ years, working with modern web technologies to create projects I'm proud of. I specialize in React, Node.js, and building end-to-end web applications that are responsive, accessible, and performant.</>,
                <>I believe great software is built at the intersection of clean code and thoughtful design. I'm actively looking for opportunities to contribute my skills to a team and grow as a developer.</>,
              ].map((text, i) => (
                <p key={i} style={{
                  color: "var(--text-muted)",
                  fontSize: "15px",
                  lineHeight: 1.8,
                }}>
                  {text}
                </p>
              ))}
            </div>

            {/* What makes me different */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "12px", marginTop: "28px",
            }}>
              {HIGHLIGHTS.map((h, i) => (
                <div key={i} style={{
                  padding: "14px 16px", borderRadius: "12px",
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  transition: "all 0.2s ease",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(124,58,237,0.4)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.transform="translateY(0)"; }}
                >
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{h.icon}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 700, color: "var(--text)", marginBottom: "3px" }}>{h.title}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-faint)", lineHeight: 1.5 }}>{h.desc}</div>
                </div>
              ))}
            </div>

            {/* GitHub link */}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                marginTop: "28px",
                fontFamily: "var(--font-mono)", fontSize: "13px",
                color: "var(--purple-light)", textDecoration: "none",
                border: "1px solid rgba(124,58,237,0.35)",
                padding: "10px 20px", borderRadius: "8px",
                background: "rgba(124,58,237,0.06)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(124,58,237,0.14)"; e.currentTarget.style.borderColor="rgba(124,58,237,0.7)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(124,58,237,0.06)"; e.currentTarget.style.borderColor="rgba(124,58,237,0.35)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              github.com/{GITHUB_USERNAME}
            </a>
          </div>
        </RevealOnScroll>

        {/* ── Right: skills + terminal card ── */}
        <RevealOnScroll delay={0.2} direction="left">
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700,
              color: "var(--text)", marginBottom: "20px", letterSpacing: "-0.02em",
            }}>
              Technologies I work with
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {SKILLS.map((skill, i) => (
                <div key={skill} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontFamily: "var(--font-mono)", fontSize: "13px",
                  color: "var(--text-muted)",
                  padding: "6px 10px", borderRadius: "8px",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background="rgba(124,58,237,0.08)"; e.currentTarget.style.color="var(--purple-light)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="var(--text-muted)"; }}
                >
                  <span style={{ color: "var(--purple)", fontSize: "10px" }}>▸</span>
                  {skill}
                </div>
              ))}
            </div>

            {/* Terminal card */}
            <div style={{
              marginTop: "32px", padding: "20px", borderRadius: "14px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex", flexDirection: "column", gap: "12px",
              position: "relative", overflow: "hidden",
            }}>
              {/* Top glow */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
              }} />
              
              {/* Traffic light dots */}
              <div style={{ display: "flex", gap: "6px" }}>
                {["#ff5f57","#febc2e","#28c840"].map(c => (
                  <div key={c} style={{ width:"10px", height:"10px", borderRadius:"50%", background:c }} />
                ))}
              </div>

              {/* Code snippet */}
              <div style={{ fontFamily:"var(--font-mono)", fontSize:"12px", lineHeight:1.9 }}>
                <span style={{ color:"var(--purple)" }}>const</span>
                <span style={{ color:"var(--text)" }}> sumit </span>
                <span style={{ color:"var(--purple)" }}>=</span>
                <span style={{ color:"var(--text-muted)" }}> {"{"}</span><br/>
                <span style={{ paddingLeft:"16px", color:"var(--purple-light)" }}>role:</span>
                <span style={{ color:"var(--text-muted)" }}> "Full Stack Developer"</span><span style={{ color:"var(--text-faint)" }}>,</span><br/>
                <span style={{ paddingLeft:"16px", color:"var(--purple-light)" }}>passion:</span>
                <span style={{ color:"var(--text-muted)" }}> "Building Full Stack Apps"</span><span style={{ color:"var(--text-faint)" }}>,</span><br/>
                <span style={{ paddingLeft:"16px", color:"var(--purple-light)" }}>location:</span>
                <span style={{ color:"var(--text-muted)" }}> "Nepal 🇳🇵"</span><span style={{ color:"var(--text-faint)" }}>,</span><br/>
                <span style={{ paddingLeft:"16px", color:"var(--purple-light)" }}>status:</span>
                <span style={{ color:"rgba(34,197,94,0.9)" }}> "open to work"</span><span style={{ color:"var(--text-faint)" }}>,</span><br/>
                <span style={{ paddingLeft:"16px", color:"var(--purple-light)" }}>hireable:</span>
                <span style={{ color:"rgba(34,197,94,0.9)" }}> true</span><br/>
                <span style={{ color:"var(--text-faint)" }}>{"}"}</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
