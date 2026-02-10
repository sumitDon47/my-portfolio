import { useEffect, useRef } from 'react';

function About() {
  const skills = [
    { name: 'HTML', level: 90, icon: '🏗️', color: '#e34c26' },
    { name: 'CSS', level: 85, icon: '🎨', color: '#264de4' },
    { name: 'JavaScript', level: 80, icon: '⚡', color: '#f0db4f' },
    { name: 'React', level: 75, icon: '⚛️', color: '#61dafb' },
    { name: 'Git', level: 70, icon: '🔀', color: '#f34f29' },
    { name: 'Node', level: 65, icon: '🟢', color: '#68a063' }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">
            About <span className="title-highlight">Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text fade-in-up">
            <div className="text-card">
              <div className="card-decoration"></div>
              <h3 className="about-greeting">
                Hello! I'm Sumit 
                <span className="wave-emoji">👋</span>
              </h3>
              <p className="about-paragraph">
                A <strong>self-taught developer</strong> from the beautiful landscapes of 
                <span className="nepal-flag"> 🇳🇵 Nepal</span>, on a mission to craft 
                pixel-perfect web experiences that people love to use.
              </p>
              <p className="about-paragraph">
                I believe in the power of <strong>clean code</strong>, beautiful design, 
                and continuous learning. Every line I write is a step toward mastery, 
                and every project is an opportunity to push boundaries.
              </p>
              <p className="about-paragraph">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or sketching out ideas for the next big project.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">
                    <strong>Goal-Oriented</strong>
                    <span>Driven by challenges</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-text">
                    <strong>Fast Learner</strong>
                    <span>Always evolving</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div className="highlight-text">
                    <strong>Problem Solver</strong>
                    <span>Creative solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-container fade-in-up">
            <h3 className="skills-title">
              <span className="skills-icon">⚡</span>
              Tech Arsenal
            </h3>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-icon-wrapper">
                      <span className="skill-icon">{skill.icon}</span>
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar-fill"
                      style={{ 
                        width: `${skill.level}%`,
                        background: skill.color
                      }}
                    >
                      <div className="skill-bar-glow" style={{ boxShadow: `0 0 20px ${skill.color}` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-footer">
              <p>...and always learning more! 📚</p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="about-decoration about-decoration-1"></div>
        <div className="about-decoration about-decoration-2"></div>
        <div className="about-decoration about-decoration-3"></div>
      </div>
    </section>
  );
}

export default About;