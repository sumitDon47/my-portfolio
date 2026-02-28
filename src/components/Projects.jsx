// src/components/Projects.jsx
import { useState } from "react";
import { useGitHubRepos, GITHUB_USERNAME } from "../hooks/useGitHubRepos";

const LANG_COLORS = {
  JavaScript:"#f1e05a", TypeScript:"#3178c6", Python:"#3572A5",
  HTML:"#e34c26", CSS:"#563d7c", SCSS:"#c6538c", Vue:"#41b883",
  Svelte:"#ff3e00", Java:"#b07219", "C++":"#f34b7d", C:"#555555",
  Go:"#00ADD8", Rust:"#dea584", PHP:"#4F5D95", Ruby:"#701516",
  Shell:"#89e051", Kotlin:"#A97BFF", Swift:"#F05138", Dart:"#00B4AB",
};

function SkeletonCard() {
  return (
    <div style={{
      padding:"24px", borderRadius:"16px",
      border:"1px solid var(--border)",
      background:"var(--bg-card)",
      display:"flex", flexDirection:"column", gap:"14px",
    }}>
      {[90,60,80,45].map((w,i) => (
        <div key={i} style={{
          height: i===0 ? "14px" : "10px", width:`${w}%`,
          borderRadius:"6px", background:"var(--border)",
          animation:`shimmer 1.6s ease-in-out ${i*0.1}s infinite`,
        }} />
      ))}
      <div style={{ height:"1px", background:"var(--border)", marginTop:"4px" }} />
      <div style={{ display:"flex", gap:"10px" }}>
        {[40,30,25].map((w,i) => (
          <div key={i} style={{
            height:"10px", width:`${w}%`, borderRadius:"6px",
            background:"var(--border)",
            animation:`shimmer 1.6s ease-in-out ${i*0.15}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

function RepoCard({ repo, index }) {
  const [hovered, setHovered] = useState(false);
  const langColor = LANG_COLORS[repo.language] || "#8b949e";
  const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-US", { month:"short", year:"numeric" });

  return (
    <a
      href={repo.html_url}
      target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Open ${repo.name} on GitHub`}
      style={{
        display:"flex", flexDirection:"column", gap:"12px",
        padding:"24px", borderRadius:"16px",
        border:`1px solid ${hovered ? "rgba(124,58,237,0.5)" : "var(--border)"}`,
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        boxShadow: hovered
          ? "0 8px 40px rgba(124,58,237,0.12), inset 0 1px 0 rgba(124,58,237,0.08)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
        textDecoration:"none", color:"inherit",
        cursor:"pointer", position:"relative", overflow:"hidden",
        animation:`fadeUp 0.5s ease both`,
        animationDelay:`${index*60}ms`,
      }}
    >
      {/* Top glow line on hover */}
      <div style={{
        position:"absolute", top:0, left:0, right:0, height:"1px",
        background: hovered
          ? "linear-gradient(90deg, transparent, rgba(167,139,250,0.8), transparent)"
          : "transparent",
        transition:"background 0.3s ease",
      }} />

      {/* Header: icon + name + external arrow */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"8px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px", minWidth:0 }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="rgba(124,58,237,0.75)" style={{ flexShrink:0 }}>
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
          </svg>
          <span style={{
            fontFamily:"var(--font-mono)", fontSize:"13.5px", fontWeight:700,
            color: hovered ? "var(--purple-light)" : "var(--purple-light)",
            transition:"color 0.2s",
            overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
          }}>
            {repo.name}
          </span>
        </div>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="rgba(124,58,237,0.6)" style={{
          flexShrink:0,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0,0)" : "translate(-4px,4px)",
          transition:"all 0.2s ease",
        }}>
          <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/>
        </svg>
      </div>

      {/* Description */}
      <p style={{
        fontSize:"13px", color:"var(--text-muted)", lineHeight:1.65,
        margin:0, flex:1, overflow:"hidden",
        display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical",
      }}>
        {repo.description || "No description added yet."}
      </p>

      {/* Topics */}
      {repo.topics?.length > 0 && (
        <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
          {repo.topics.slice(0,4).map(topic => (
            <span key={topic} style={{
              fontSize:"10px", padding:"2px 9px", borderRadius:"20px",
              background:"rgba(124,58,237,0.1)", color:"var(--purple-light)",
              border:"1px solid rgba(124,58,237,0.2)",
              fontFamily:"var(--font-mono)", letterSpacing:"0.02em",
            }}>
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer: language · stars · forks · date */}
      <div style={{
        display:"flex", alignItems:"center", gap:"14px",
        paddingTop:"10px", borderTop:"1px solid var(--border)",
        fontSize:"12px", color:"var(--text-faint)", flexWrap:"wrap",
      }}>
        {repo.language && (
          <span style={{ display:"flex", alignItems:"center", gap:"5px" }}>
            <span style={{
              width:"10px", height:"10px", borderRadius:"50%",
              background:langColor, display:"inline-block",
              boxShadow:`0 0 5px ${langColor}60`,
            }} />
            <span style={{ fontFamily:"var(--font-mono)", color:"var(--text-muted)" }}>{repo.language}</span>
          </span>
        )}
        <span style={{ display:"flex", alignItems:"center", gap:"4px" }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
          </svg>
          {repo.stargazers_count}
        </span>
        <span style={{ display:"flex", alignItems:"center", gap:"4px" }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
          </svg>
          {repo.forks_count}
        </span>
        <span style={{ marginLeft:"auto", fontFamily:"var(--font-mono)", fontSize:"10.5px" }}>{updatedDate}</span>
      </div>
    </a>
  );
}

export default function Projects() {
  const { repos, stats, loading, error } = useGitHubRepos();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? repos
    : repos.filter(r => r.language === activeFilter);

  return (
    <section id="projects" style={{
      padding:"100px clamp(20px, 5vw, 60px)",
      background:"linear-gradient(180deg, transparent 0%, var(--bg-card-hover) 50%, transparent 100%)",
      position:"relative",
    }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign:"center", marginBottom:"52px" }}>
          <span className="section-label">04. Projects</span>
          <h2 className="gradient-text section-title" style={{ marginBottom:"16px" }}>
            Things I've Built
          </h2>
          <p style={{
            color:"var(--text-muted)", fontSize:"14px",
            fontFamily:"var(--font-mono)", marginBottom:"14px",
          }}>
            {loading
              ? "Fetching live from GitHub..."
              : `${stats.count} public repos · ${stats.stars} total stars · ${stats.languages.length} languages`}
          </p>

          {/* Live badge */}
          {!loading && !error && (
            <div style={{
              display:"inline-flex", alignItems:"center", gap:"7px",
              padding:"5px 14px", borderRadius:"20px",
              background:"rgba(34,197,94,0.07)",
              border:"1px solid rgba(34,197,94,0.2)",
            }}>
              <div style={{
                width:"6px", height:"6px", borderRadius:"50%",
                background:"#22c55e", animation:"pulse-live 2s ease infinite",
              }} />
              <span style={{
                fontFamily:"var(--font-mono)", fontSize:"10px",
                color:"rgba(34,197,94,0.9)", letterSpacing:"0.08em", textTransform:"uppercase",
              }}>
                Live — synced with GitHub
              </span>
            </div>
          )}
        </div>

        {/* Language filter pills */}
        {!loading && stats.languages.length > 0 && (
          <div style={{ display:"flex", gap:"8px", justifyContent:"center", flexWrap:"wrap", marginBottom:"40px" }}>
            {["all", ...stats.languages].map(lang => {
              const active = activeFilter === lang;
              const color  = LANG_COLORS[lang] || "rgba(124,58,237,0.5)";
              return (
                <button key={lang} onClick={() => setActiveFilter(lang)} style={{
                  padding:"6px 16px", borderRadius:"20px",
                  border:`1px solid ${active ? "rgba(124,58,237,0.6)" : "var(--border)"}`,
                  background: active ? "rgba(124,58,237,0.15)" : "var(--bg-card)",
                  color: active ? "var(--purple-light)" : "var(--text-muted)",
                  cursor:"pointer", fontSize:"12px",
                  fontFamily:"var(--font-mono)", transition:"all 0.2s ease",
                  display:"flex", alignItems:"center", gap:"6px",
                }}>
                  {lang !== "all" && (
                    <span style={{
                      width:"8px", height:"8px", borderRadius:"50%",
                      background:color, display:"inline-block",
                      boxShadow: active ? `0 0 6px ${color}90` : "none",
                    }} />
                  )}
                  {lang}
                </button>
              );
            })}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"20px" }}>
            {Array.from({ length:6 }).map((_,i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            textAlign:"center", padding:"60px 0",
            color:"rgba(255,80,80,0.8)", fontFamily:"var(--font-mono)", fontSize:"14px",
          }}>
            <div style={{ fontSize:"32px", marginBottom:"12px" }}>⚠️</div>
            <p>Failed to load repos: {error}</p>
            <p style={{ color:"var(--text-faint)", fontSize:"12px", marginTop:"8px" }}>
              Check your internet connection or try refreshing.
            </p>
          </div>
        )}

        {/* Repo grid */}
        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <p style={{ textAlign:"center", color:"var(--text-muted)", fontFamily:"var(--font-mono)", fontSize:"13px" }}>
                No repos found for "{activeFilter}"
              </p>
            ) : (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"20px" }}>
                {filtered.map((repo,i) => <RepoCard key={repo.id} repo={repo} index={i} />)}
              </div>
            )}

            <div style={{ textAlign:"center", marginTop:"48px" }}>
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  fontFamily:"var(--font-mono)", fontSize:"13px",
                  color:"var(--purple-light)", textDecoration:"none",
                  border:"1px solid rgba(124,58,237,0.3)",
                  padding:"12px 28px", borderRadius:"10px",
                  background:"rgba(124,58,237,0.06)", transition:"all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(124,58,237,0.14)"; e.currentTarget.style.borderColor="rgba(124,58,237,0.7)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(124,58,237,0.06)"; e.currentTarget.style.borderColor="rgba(124,58,237,0.3)";  e.currentTarget.style.transform="translateY(0)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View all repositories on GitHub
                <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"/>
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
