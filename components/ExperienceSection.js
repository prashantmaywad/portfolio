import { experienceData } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <p className="section-label">03 — Experience</p>
      <h2 className="section-title reveal">
        Where I've
        <br />
        <em>worked.</em>
      </h2>
      <br />
      <br />
      <div className="exp-list">
        {experienceData.reverse().map((exp) => (
          <div key={exp.id} className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-company">{exp.company}</div>
            </div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

