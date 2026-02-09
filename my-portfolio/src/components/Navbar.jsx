import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <h2 className="logo">Sumit</h2>

        <div className="nav-right">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          {/* Resume Download */}
          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>

          {/* Theme Toggle */}
          <div
            className={`theme-toggle ${dark ? "active" : ""}`}
            onClick={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
}
