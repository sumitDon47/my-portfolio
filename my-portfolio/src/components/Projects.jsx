function Projects() {
  const projects = [
    { name: "Portfolio Website", description: "My personal portfolio built with React & Vite", link: "#" },
    { name: "Todo App", description: "Simple Todo App using React", link: "#" },
    { name: "Weather App", description: "Fetch weather data from API using React", link: "#" }
  ]

  return (
    <section id="projects" style={{ padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{ border: "1px solid #ddd", padding: "1rem", width: "250px", borderRadius: "8px" }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
