// src/components/Footer.jsx
import { GITHUB_USERNAME } from "../hooks/useGitHubRepos";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: "40px clamp(20px, 5vw, 60px)",
      borderTop: "1px solid var(--border)",
      position: "relative",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "16px",
      }}>
        {/* Left */}
        <div style={{
          display: "flex", flexDirection: "column", gap: "6px",
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "18px", color: "var(--purple-light)",
            letterSpacing: "-0.03em",
          }}>
            Sumit Sapkota
          </span>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "11px",
            color: "var(--text-faint)", letterSpacing: "0.03em",
          }}>
            &copy; {currentYear} · Built with React & Vite · Powered by GitHub API
          </p>
        </div>

        {/* Right: Quick links */}
        <div style={{
          display: "flex", gap: "24px", alignItems: "center",
        }}>
          {[
            { label: "GitHub", href: `https://github.com/${GITHUB_USERNAME}` },
            { label: "LinkedIn", href: "https://linkedin.com/in/sumit-sapkota" },
            { label: "Email", href: "mailto:sumit@example.com" },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "12px",
                color: "var(--text-faint)", textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--purple-light)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-faint)"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed", bottom: "28px", right: "28px",
          width: "44px", height: "44px", borderRadius: "12px",
          background: "var(--bg-card)", border: "1px solid var(--border)",
          color: "var(--purple-light)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.2s ease", zIndex: 50,
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.background = "rgba(124,58,237,0.1)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "var(--bg-card)";
        }}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  );
}
