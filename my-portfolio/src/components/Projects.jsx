import p1 from "../assets/project1.png"
import p2 from "../assets/project2.png"

function Projects() {
  const projects = [
    {
      name: "React Portfolio",
      img: p1,
      desc: "Personal portfolio built using React + Vite",
      link: "#"
    },
    {
      name: "Todo App",
      img: p2,
      desc: "Simple task manager with React",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="section fade">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank">View</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
