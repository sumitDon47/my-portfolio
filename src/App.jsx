// src/App.jsx
import { useState, useEffect } from "react";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";

export default function App() {
  // ── Theme state ──────────────────────────────────────────────
  // Read saved preference from localStorage on first load.
  // If none saved, default to dark mode.
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  // Apply/remove "light" class on <html> whenever theme changes.
  // All CSS variables in global.css use html.light to switch colors.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
    // Save preference so it persists across page refreshes
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <>
      {/* Pass isDark and toggleTheme down to Navbar */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
