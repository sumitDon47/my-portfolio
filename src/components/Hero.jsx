// src/components/Hero.jsx
import { useGitHubRepos } from "../hooks/useGitHubRepos";

function StatCard({ value, label, loading }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"4px", flex:1 }}>
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(22px, 3vw, 30px)",
        fontWeight: 800,
        color: "var(--purple-light)",
        letterSpacing: "-0.03em",
        animation: loading ? "shimmer 1.4s ease infinite" : "none",
        opacity: loading ? 0.4 : 1,
        transition: "opacity 0.3s",
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--text-muted)",
        letterSpacing: "0.05em",
        textAlign: "center",
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { stats, loading } = useGitHubRepos();

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px clamp(20px, 5vw, 60px) 60px",
      position: "relative",
      textAlign: "center",
    }}>

      {/* Purple ambient glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, var(--purple-glow) 0%, transparent 70%)",
        pointerEvents: "none", borderRadius: "50%",
      }} />

      {/* Wave emoji */}
      <div style={{
        fontSize: "clamp(36px, 5vw, 52px)", marginBottom: "20px",
        display: "inline-block",
        animation: "wave 2.5s ease-in-out infinite, fadeUp 0.6s ease both",
        animationDelay: "0s, 0.1s",
        transformOrigin: "70% 70%",
      }}>
        👋
      </div>

      {/* Name */}
      <h1 className="gradient-text section-title" style={{
        marginBottom: "16px",
        animation: "fadeUp 0.7s ease both",
        animationDelay: "0.15s",
        fontSize: "clamp(48px, 8vw, 88px)",
        lineHeight: 1.0,
      }}>
        Sumit Sapkota
      </h1>

      {/* Tagline */}
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "clamp(16px, 2.5vw, 20px)",
        color: "var(--text-muted)",
        marginBottom: "40px",
        fontWeight: 300,
        letterSpacing: "0.02em",
        animation: "fadeUp 0.7s ease both",
        animationDelay: "0.25s",
      }}>
        crafting digital experiences
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: "flex", gap: "16px", flexWrap: "wrap",
        justifyContent: "center", marginBottom: "72px",
        animation: "fadeUp 0.7s ease both", animationDelay: "0.35s",
      }}>
        <a href="#projects" style={{
          fontFamily: "var(--font-mono)", fontSize: "14px",
          padding: "14px 32px", borderRadius: "10px",
          background: "linear-gradient(135deg, #7c3aed, #a855f7)",
          color: "#fff", textDecoration: "none", fontWeight: 600,
          boxShadow: "0 0 30px rgba(124,58,237,0.4)",
          transition: "all 0.25s ease",
          display: "flex", alignItems: "center", gap: "8px",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 0 50px rgba(124,58,237,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)";    e.currentTarget.style.boxShadow="0 0 30px rgba(124,58,237,0.4)"; }}
        >
          Explore My Work →
        </a>
        <a href="#contact" style={{
          fontFamily: "var(--font-mono)", fontSize: "14px",
          padding: "14px 32px", borderRadius: "10px",
          background: "transparent",
          color: "var(--text)",
          textDecoration: "none",
          border: "1px solid var(--border-hover)",
          transition: "all 0.25s ease",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(124,58,237,0.7)"; e.currentTarget.style.color="var(--purple-light)"; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.background="rgba(124,58,237,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border-hover)";   e.currentTarget.style.color="var(--text)";         e.currentTarget.style.transform="translateY(0)";    e.currentTarget.style.background="transparent"; }}
        >
          Let's Talk
        </a>
      </div>

      {/* Stats bar — "10+" is LIVE from GitHub API */}
      <div style={{
        display: "flex", alignItems: "center", gap: "0",
        padding: "28px 40px", borderRadius: "20px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        width: "100%", maxWidth: "520px",
        animation: "fadeUp 0.7s ease both", animationDelay: "0.45s",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)",
        }} />
        <StatCard value="2+"                                    label="Years Learning" loading={false} />
        <div style={{ width:"1px", height:"40px", background:"var(--border)", flexShrink:0 }} />
        <StatCard value={loading ? "..." : `${stats.count}+`}  label="Projects Built" loading={loading} />
        <div style={{ width:"1px", height:"40px", background:"var(--border)", flexShrink:0 }} />
        <StatCard value="∞"                                     label="Ideas Brewing"  loading={false} />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        animation: "fadeIn 1s ease both", animationDelay: "1s",
      }}>
        <div style={{
          width: "22px", height: "36px",
          border: "1.5px solid var(--border-hover)",
          borderRadius: "11px", display: "flex",
          justifyContent: "center", paddingTop: "6px",
        }}>
          <div style={{
            width: "3px", height: "8px", borderRadius: "2px",
            background: "var(--purple)",
            animation: "scrollBounce 1.5s ease infinite",
          }} />
        </div>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "9px",
          letterSpacing: "0.2em", color: "var(--text-faint)",
          textTransform: "uppercase",
        }}>
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
