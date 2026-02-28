// src/components/Hero.jsx
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import TypingEffect from "./TypingEffect";
import { useState, useEffect } from "react";

function AnimatedCounter({ target, duration = 2000, suffix = "", loading }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (loading) return;
    const num = parseInt(target) || 0;
    if (num === 0) { setCount(0); return; }

    let start = 0;
    const step = Math.max(1, Math.ceil(num / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, loading, duration]);

  return (
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(26px, 3.5vw, 36px)",
      fontWeight: 800,
      color: "var(--purple-light)",
      letterSpacing: "-0.03em",
      opacity: loading ? 0.4 : 1,
      transition: "opacity 0.3s",
    }}>
      {loading ? "..." : `${count}${suffix}`}
    </span>
  );
}

function StatCard({ value, label, loading, suffix = "+" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flex: 1 }}>
      <AnimatedCounter target={value} loading={loading} suffix={suffix} />
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "11px",
        color: "var(--text-muted)", letterSpacing: "0.05em", textAlign: "center",
      }}>{label}</span>
    </div>
  );
}

export default function Hero() {
  const { stats, loading } = useGitHubRepos();

  const roles = [
    "Full Stack Developer",
    "React Enthusiast",
    "Node.js Builder",
    "Problem Solver",
  ];

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "100px clamp(20px, 5vw, 60px) 60px",
      position: "relative", textAlign: "center",
    }}>
      {/* Gradient mesh background */}
      <div style={{
        position: "absolute", top: "15%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "800px",
        background: "radial-gradient(circle at 30% 40%, rgba(124,58,237,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(168,85,247,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        pointerEvents: "none", borderRadius: "50%", filter: "blur(40px)",
      }} />

      {/* Availability badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        padding: "8px 20px", borderRadius: "30px",
        background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)",
        marginBottom: "28px",
        animation: "fadeUp 0.6s ease both", animationDelay: "0.05s",
      }}>
        <div style={{
          width: "8px", height: "8px", borderRadius: "50%",
          background: "#22c55e", animation: "pulse-live 2s ease infinite",
        }} />
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "12px",
          color: "rgba(34,197,94,0.9)", letterSpacing: "0.05em",
        }}>Available for opportunities</span>
      </div>

      {/* Wave emoji */}
      <div style={{
        fontSize: "clamp(36px, 5vw, 52px)", marginBottom: "20px",
        display: "inline-block",
        animation: "wave 2.5s ease-in-out infinite, fadeUp 0.6s ease both",
        animationDelay: "0s, 0.1s", transformOrigin: "70% 70%",
      }}>👋</div>

      {/* Name */}
      <h1 className="gradient-text section-title" style={{
        marginBottom: "16px", animation: "fadeUp 0.7s ease both",
        animationDelay: "0.15s", fontSize: "clamp(48px, 8vw, 88px)", lineHeight: 1.0,
      }}>Sumit Sapkota</h1>

      {/* Typing tagline */}
      <div style={{
        fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2.8vw, 24px)",
        color: "var(--text-muted)", marginBottom: "20px", fontWeight: 300,
        letterSpacing: "0.01em", animation: "fadeUp 0.7s ease both",
        animationDelay: "0.25s", minHeight: "36px",
      }}>
        <TypingEffect words={roles} typingSpeed={80} deletingSpeed={50} pauseTime={2200} />
      </div>

      {/* Short description */}
      <p style={{
        fontFamily: "var(--font-body)", fontSize: "clamp(14px, 2vw, 16px)",
        color: "var(--text-faint)", marginBottom: "40px", fontWeight: 300,
        maxWidth: "500px", lineHeight: 1.7,
        animation: "fadeUp 0.7s ease both", animationDelay: "0.3s",
      }}>
        I craft beautiful, performant web experiences with modern technologies.
        Let's build something amazing together.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex", gap: "16px", flexWrap: "wrap",
        justifyContent: "center", marginBottom: "72px",
        animation: "fadeUp 0.7s ease both", animationDelay: "0.35s",
      }}>
        <a href="#projects" className="btn-primary" style={{
          fontFamily: "var(--font-mono)", fontSize: "14px",
          padding: "14px 32px", borderRadius: "10px",
          background: "linear-gradient(135deg, #7c3aed, #a855f7)",
          color: "#fff", textDecoration: "none", fontWeight: 600,
          boxShadow: "0 0 30px rgba(124,58,237,0.4)",
          transition: "all 0.25s ease",
          display: "flex", alignItems: "center", gap: "8px",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 50px rgba(124,58,237,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 0 30px rgba(124,58,237,0.4)"; }}
        >
          Explore My Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a href="/resume.pdf" download="Sumit_Sapkota_Resume.pdf" style={{
          fontFamily: "var(--font-mono)", fontSize: "14px",
          padding: "14px 32px", borderRadius: "10px", background: "transparent",
          color: "var(--text)", textDecoration: "none",
          border: "1px solid var(--border-hover)", transition: "all 0.25s ease",
          display: "flex", alignItems: "center", gap: "8px",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(124,58,237,0.7)"; e.currentTarget.style.color="var(--purple-light)"; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.background="rgba(124,58,237,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border-hover)"; e.currentTarget.style.color="var(--text)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.background="transparent"; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </div>

      {/* Stats bar */}
      <div className="hero-stats" style={{
        display: "flex", alignItems: "center", gap: "0",
        padding: "28px 40px", borderRadius: "20px",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        backdropFilter: "blur(12px)", width: "100%", maxWidth: "620px",
        animation: "fadeUp 0.7s ease both", animationDelay: "0.45s",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }} />
        <StatCard value="2" label="Years Learning" loading={false} />
        <div style={{ width: "1px", height: "40px", background: "var(--border)", flexShrink: 0 }} />
        <StatCard value={loading ? "0" : `${stats.count}`} label="Projects Built" loading={loading} />
        <div style={{ width: "1px", height: "40px", background: "var(--border)", flexShrink: 0 }} />
        <StatCard value={loading ? "0" : `${stats.languages.length}`} label="Technologies" loading={loading} />
        <div style={{ width: "1px", height: "40px", background: "var(--border)", flexShrink: 0 }} />
        <StatCard value={loading ? "0" : `${stats.stars}`} label="GitHub Stars" loading={loading} />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        animation: "fadeIn 1s ease both", animationDelay: "1.5s",
      }}>
        <div style={{
          width: "22px", height: "36px",
          border: "1.5px solid var(--border-hover)",
          borderRadius: "11px", display: "flex",
          justifyContent: "center", paddingTop: "6px",
        }}>
          <div style={{
            width: "3px", height: "8px", borderRadius: "2px",
            background: "var(--purple)", animation: "scrollBounce 1.5s ease infinite",
          }} />
        </div>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "9px",
          letterSpacing: "0.2em", color: "var(--text-faint)",
          textTransform: "uppercase",
        }}>Scroll to explore</span>
      </div>
    </section>
  );
}
