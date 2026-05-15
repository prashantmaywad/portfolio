export default function HeroSection({ theme }) {
  return (
    <section id="hero">
      <div className={`hero-bg-text ${theme === "light" ? "light-mode" : "dark-mode"}`}>BUILD</div>
      <div className="hero-left">
        <p className="hero-tag">Full Stack Developer</p>
        <h1 className="hero-name">
          Prashant
          <br />
          <em>Maywad</em>
          <br />
          Here
        </h1>
        <p className="hero-sub">
          I design and build fast, scalable, and beautiful web products — from pixel-perfect frontends to rock-solid APIs.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="stat-card">
          <div className="stat-num">8+</div>
          <div className="stat-label">Years of Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">20+</div>
          <div className="stat-label">Projects Shipped</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">10+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
      </div>
    </section>
  );
}
