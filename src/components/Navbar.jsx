import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
      const sections = ['about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-bracket"></span>
          Sumit
          <span className="logo-bracket"></span>
        </a>

        <div className="nav-center">
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            <span className="nav-number">01.</span> About
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            <span className="nav-number">02.</span> Projects
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <span className="nav-number">03.</span> Contact
          </a>
        </div>

        <div className="nav-right">
          <a href="/resume.pdf" download className="resume-btn">
            <svg className="resume-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Resume
          </a>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className={`toggle-track ${dark ? 'dark' : ''}`}>
              <div className="toggle-thumb">
                {dark ? '🌙' : '☀️'}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Animated progress bar */}
      <div className="nav-progress">
        <div className="nav-progress-bar"></div>
      </div>
    </nav>
  );
}
