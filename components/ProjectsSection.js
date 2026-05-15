import { projectsData } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <p className="section-label">02 — Selected Work</p>
      <h2 className="section-title reveal">
        Projects that
        <br />
        <em>ship.</em>
      </h2>
      <br />
      <br />
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card reveal">
            <div className="project-num">{project.num}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              {project.title === "Open Source CLI Tool" ? "View on GitHub →" : "View Project →"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
