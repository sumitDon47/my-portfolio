function Navbar() {
  return (
    <nav style={{ padding: "1rem 2rem", background: "#111", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <h2>Sumit Sapkota</h2>
      <div>
        <a href="#projects" style={{ margin: "0 1rem" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 1rem" }}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
