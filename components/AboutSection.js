export default function AboutSection() {
  return (
    <section id="about">
      <p className="section-label">01 — About</p>
      <div className="about-grid">
        <div>
          <h2 className="section-title reveal">
            I build things
            <br />
            that <em>matter.</em>
          </h2>
          <div className="about-text reveal">
            <p>
              I'm a full-stack developer based in Indore, Madhya Pradesh, passionate about building products that combine elegant design with robust engineering. I work across the entire stack — from crafting intuitive UIs to designing scalable backend systems.
            </p>
            <p>
              When I'm not coding, I'm exploring new tech, contributing to open source, or drinking too much coffee. I believe great software is as much about the experience as it is the code behind it.
            </p>
          </div>
        </div>
        <div>
          <div className="skills-list reveal">
            <div className="skill-row">
              <span className="skill-name">React / Next.js</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-width="92" />
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-name">Node.js / Express</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-width="88" />
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-name">TypeScript</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-width="85" />
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-name">PostgreSQL / MongoDB</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-width="80" />
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-name">Docker / AWS</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-width="75" />
              </div>
            </div>
            <div className="skill-row">
              <span className="skill-name">GraphQL</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-width="72" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
