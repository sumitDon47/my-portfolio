// src/components/Contact.jsx
import { GITHUB_USERNAME } from "../hooks/useGitHubRepos";
import { RevealOnScroll } from "../hooks/useScrollReveal";

const SOCIALS = [
  {
    name: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sumitsapkota",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:sumitsapkota47@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sumitDon47",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

function ContactCard({ icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{
        display: "flex", alignItems: "center", gap: "16px",
        padding: "20px 24px", borderRadius: "14px",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        textDecoration: "none", color: "inherit",
        transition: "all 0.25s ease", cursor: "pointer",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,58,237,0.1)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px",
        background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--purple-light)", fontSize: "22px", flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: "11px",
          color: "var(--text-faint)", letterSpacing: "0.08em",
          textTransform: "uppercase", marginBottom: "4px",
        }}>{title}</div>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: "14px",
          color: "var(--text-muted)", fontWeight: 400,
        }}>{value}</div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: "100px clamp(20px, 5vw, 60px) 60px",
      position: "relative",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", bottom: "10%", left: "50%",
        transform: "translateX(-50%)",
        width: "500px", height: "400px",
        background: "radial-gradient(ellipse, var(--purple-glow) 0%, transparent 70%)",
        pointerEvents: "none", filter: "blur(30px)",
      }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="section-label">05. Contact</span>
            <h2 className="gradient-text section-title" style={{ marginBottom: "16px" }}>
              Let's Work Together
            </h2>
            <p style={{
              color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8,
              maxWidth: "500px", margin: "0 auto", fontWeight: 300,
            }}>
              I'm actively seeking new opportunities. Whether you have a project in mind
              or just want to connect — my inbox is always open.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div style={{
            display: "flex", flexDirection: "column", gap: "16px",
            maxWidth: "600px", margin: "0 auto",
          }}>
            <ContactCard icon="📧" title="Email" value="sumitsapkota47@gmail.com" href="mailto:sumitsapkota47@gmail.com" />
            <ContactCard icon="📍" title="Location" value="Nepal" href="#" />
            <ContactCard icon="💼" title="Availability" value="Open for full-time & freelance" href="#" />
          </div>
        </RevealOnScroll>

        {/* Email CTA */}
        <RevealOnScroll delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href="mailto:sumitsapkota47@gmail.com"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "16px 36px", borderRadius: "12px",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                color: "#fff", textDecoration: "none",
                fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 600,
                boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                transition: "all 0.25s ease", marginBottom: "40px",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 0 50px rgba(124,58,237,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 0 30px rgba(124,58,237,0.4)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Say Hello
            </a>
          </div>
        </RevealOnScroll>

        {/* Social links */}
        <RevealOnScroll delay={0.3}>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            {SOCIALS.map(({ name, href, icon }) => (
              <a
                key={name} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={name}
                style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-muted)", textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
                  e.currentTarget.style.color = "var(--purple-light)";
                  e.currentTarget.style.background = "rgba(124,58,237,0.1)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "var(--bg-card)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
