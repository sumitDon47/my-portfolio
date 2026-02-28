// src/App.jsx
import { useState, useEffect } from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Experience  from "./components/Experience";
import Projects    from "./components/Projects";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import ParticleField from "./components/ParticleField";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <>
      {/* Particle background (dark mode only) */}
      {isDark && <ParticleField />}

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
