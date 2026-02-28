// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { GITHUB_USERNAME } from "../hooks/useGitHubRepos";

// ─────────────────────────────────────────────────────────────
// 👇 RESUME: Put your resume PDF in the /public folder and
//    set the filename here. e.g. "resume.pdf"
//    Then place your file at: portfolio/public/resume.pdf
// ─────────────────────────────────────────────────────────────
const RESUME_FILE = "/resume.pdf";

const NAV_LINKS = [
  { label: "About",      href: "#about",      num: "01" },
  { label: "Skills",     href: "#skills",     num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Projects",   href: "#projects",   num: "04" },
  { label: "Contact",    href: "#contact",    num: "05" },
];

// ── Sun icon (light mode indicator) ──────────────────────────
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ animation: "iconPop 0.25s ease both" }}
    >
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"  x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2"  y1="12" x2="4"  y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  );
}

// ── Moon icon (dark mode indicator) ──────────────────────────
function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
      style={{ animation: "iconPop 0.25s ease both" }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

// ── Download icon ─────────────────────────────────────────────
function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

export default function Navbar({ isDark, onToggleTheme }) {
  // isDark        — boolean passed from App.jsx (true = dark mode)
  // onToggleTheme — function passed from App.jsx to flip the theme

  const [scrolled,  setScrolled] = useState(false);
  const [menuOpen,  setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState("");

  // ── Scroll detection: navbar bg + active section ──
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "skills", "experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Colors that adapt to current theme
  const mutedColor    = isDark ? "rgba(255,255,255,0.45)"  : "rgba(15,10,30,0.5)";
  const activeColor   = isDark ? "#a78bfa"                  : "#6d28d9";
  const navBg         = scrolled
    ? isDark ? "rgba(8,8,15,0.88)"       : "rgba(244,243,255,0.92)"
    : "transparent";
  const navBorder     = scrolled
    ? isDark ? "rgba(255,255,255,0.05)"  : "rgba(124,58,237,0.1)"
    : "transparent";

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 clamp(20px, 5vw, 60px)",
      height: "70px",
      background: navBg,
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: `1px solid ${navBorder}`,
      transition: "background 0.3s ease, border-color 0.3s ease",
    }}>

      {/* ── Logo ── */}
      <a href="#" style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: "20px",
        color: "var(--purple-light)",
        textDecoration: "none",
        letterSpacing: "-0.03em",
      }}>
        Sumit
      </a>

      {/* ── Desktop: nav links + resume + theme toggle ── */}
      <div style={{ display: "flex", gap: "28px", alignItems: "center" }} className="nav-desktop">

        {/* Nav links */}
        {NAV_LINKS.map(({ label, href, num }) => (
          <a key={href} href={href} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: activeSection === href.slice(1) ? activeColor : mutedColor,
            textDecoration: "none",
            transition: "color 0.2s",
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}>
            <span style={{ color: "rgba(124,58,237,0.65)", fontSize: "11px" }}>{num}.</span>
            {label}
          </a>
        ))}

        {/* ── Resume download button ── */}
        <a
          href={RESUME_FILE}
          download="Sumit_Sapkota_Resume.pdf"
          // "download" attribute tells browser to download, not navigate.
          // The value is the filename that saves to the user's computer.
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--purple-light)",
            border: "1px solid rgba(124,58,237,0.45)",
            padding: "7px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            background: "rgba(124,58,237,0.08)",
            transition: "all 0.2s ease",
            display: "flex",
            gap: "6px",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background   = "rgba(124,58,237,0.18)";
            e.currentTarget.style.borderColor  = "rgba(124,58,237,0.8)";
            e.currentTarget.style.transform    = "translateY(-1px)";
            e.currentTarget.style.boxShadow    = "0 4px 16px rgba(124,58,237,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background   = "rgba(124,58,237,0.08)";
            e.currentTarget.style.borderColor  = "rgba(124,58,237,0.45)";
            e.currentTarget.style.transform    = "translateY(0)";
            e.currentTarget.style.boxShadow    = "none";
          }}
        >
          <DownloadIcon />
          Resume
        </a>

        {/* ── Theme toggle button ── */}
        <button
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(124,58,237,0.2)"}`,
            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(124,58,237,0.07)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isDark ? "rgba(255,255,255,0.7)" : "rgba(124,58,237,0.8)",
            transition: "all 0.2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background  = isDark ? "rgba(255,255,255,0.1)"  : "rgba(124,58,237,0.14)";
            e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.2)"  : "rgba(124,58,237,0.4)";
            e.currentTarget.style.transform   = "scale(1.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background  = isDark ? "rgba(255,255,255,0.05)" : "rgba(124,58,237,0.07)";
            e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.1)"  : "rgba(124,58,237,0.2)";
            e.currentTarget.style.transform   = "scale(1)";
          }}
        >
          {/* Icon switches between sun and moon */}
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

      </div>

      {/* ── Mobile: theme toggle + hamburger ── */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }} className="nav-mobile-actions">

        {/* Theme toggle (mobile) */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          style={{
            width: "36px", height: "36px",
            borderRadius: "8px",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(124,58,237,0.2)"}`,
            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(124,58,237,0.07)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isDark ? "rgba(255,255,255,0.7)" : "rgba(124,58,237,0.8)",
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: "var(--purple-light)",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "70px", left: 0, right: 0,
          background: isDark ? "rgba(8,8,15,0.97)" : "rgba(244,243,255,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(124,58,237,0.1)"}`,
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          animation: "fadeIn 0.15s ease",
        }}>
          {NAV_LINKS.map(({ label, href, num }) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: mutedColor,
                textDecoration: "none",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span style={{ color: "rgba(124,58,237,0.7)" }}>{num}.</span>
              {label}
            </a>
          ))}

          {/* Resume in mobile menu too */}
          <a
            href={RESUME_FILE}
            download="Sumit_Sapkota_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--purple-light)",
              textDecoration: "none",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              paddingTop: "6px",
              borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(124,58,237,0.08)"}`,
            }}
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        /* Desktop: show nav links, hide mobile actions */
        .nav-desktop       { display: flex !important; }
        .nav-mobile-actions { display: none !important; }

        /* Mobile: hide nav links, show mobile actions */
        @media (max-width: 640px) {
          .nav-desktop        { display: none !important; }
          .nav-mobile-actions { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
