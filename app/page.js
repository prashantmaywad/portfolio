"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const cursorRef = useRef(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = window.localStorage.getItem("theme");
    const currentTheme = savedTheme || "dark";
    setTheme(currentTheme);
    document.documentElement.classList.toggle("light-theme", currentTheme === "light");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.documentElement.classList.toggle("light-theme", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const addExpand = () => cursor.classList.add("expand");
    const removeExpand = () => cursor.classList.remove("expand");

    const hoverTargets = document.querySelectorAll("a, button, .project-card, .stat-card");
    hoverTargets.forEach((element) => {
      element.addEventListener("mouseenter", addExpand);
      element.addEventListener("mouseleave", removeExpand);
    });

    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), index * 60);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    revealElements.forEach((element) => revealObserver.observe(element));

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
              bar.style.width = `${bar.dataset.width}%`;
            });
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".skills-list").forEach((element) => skillObserver.observe(element));

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((element) => {
        element.removeEventListener("mouseenter", addExpand);
        element.removeEventListener("mouseleave", removeExpand);
      });
      revealElements.forEach((element) => revealObserver.unobserve(element));
      document.querySelectorAll(".skills-list").forEach((element) => skillObserver.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />

      <nav>
        <div className="nav-logo">Prashant Maywad</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>
      </nav>

      <section id="hero">
        <div className="hero-bg-text">BUILD</div>
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

      <div className="marquee-wrap">
        <div className="marquee">
          <span>React</span>
          <span className="dot">✦</span>
          <span>Next.js</span>
          <span className="dot">✦</span>
          <span>Node.js</span>
          <span className="dot">✦</span>
          <span>PostgreSQL</span>
          <span className="dot">✦</span>
          <span>TypeScript</span>
          <span className="dot">✦</span>
          <span>Docker</span>
          <span className="dot">✦</span>
          <span>AWS</span>
          <span className="dot">✦</span>
          <span>Tailwind CSS</span>
          <span className="dot">✦</span>
          <span>GraphQL</span>
          <span className="dot">✦</span>
          <span>Redis</span>
          <span className="dot">✦</span>
          <span>React</span>
          <span className="dot">✦</span>
          <span>Next.js</span>
          <span className="dot">✦</span>
          <span>Node.js</span>
          <span className="dot">✦</span>
          <span>PostgreSQL</span>
          <span className="dot">✦</span>
          <span>TypeScript</span>
          <span className="dot">✦</span>
          <span>Docker</span>
          <span className="dot">✦</span>
          <span>AWS</span>
          <span className="dot">✦</span>
          <span>Tailwind CSS</span>
          <span className="dot">✦</span>
          <span>GraphQL</span>
          <span className="dot">✦</span>
          <span>Redis</span>
          <span className="dot">✦</span>
        </div>
      </div>

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
          <div className="project-card reveal">
            <div className="project-num">001</div>
            <h3 className="project-title">SaaS Dashboard</h3>
            <p className="project-desc">
              A full-featured analytics dashboard with real-time data, role-based access control, and a billing system integrated with Stripe.
            </p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Stripe</span>
              <span className="tag">Prisma</span>
            </div>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card reveal">
            <div className="project-num">002</div>
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-desc">
              A scalable online store with inventory management, order tracking, and a custom CMS for product management.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Redis</span>
            </div>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card reveal">
            <div className="project-num">003</div>
            <h3 className="project-title">Real-time Chat App</h3>
            <p className="project-desc">
              End-to-end encrypted messaging platform with rooms, file sharing, and notification support via WebSockets.
            </p>
            <div className="project-tags">
              <span className="tag">Socket.io</span>
              <span className="tag">Express</span>
              <span className="tag">React</span>
              <span className="tag">Docker</span>
            </div>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card reveal">
            <div className="project-num">004</div>
            <h3 className="project-title">API Gateway Service</h3>
            <p className="project-desc">
              Microservices API gateway with rate limiting, JWT authentication, logging, and load balancing.
            </p>
            <div className="project-tags">
              <span className="tag">Node.js</span>
              <span className="tag">AWS</span>
              <span className="tag">GraphQL</span>
            </div>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card reveal">
            <div className="project-num">005</div>
            <h3 className="project-title">Dev Blog Platform</h3>
            <p className="project-desc">
              Markdown-powered technical blog with syntax highlighting, SEO optimization, and a newsletter subscription system.
            </p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">MDX</span>
              <span className="tag">Tailwind</span>
            </div>
            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card reveal">
            <div className="project-num">006</div>
            <h3 className="project-title">Open Source CLI Tool</h3>
            <p className="project-desc">
              A developer productivity CLI with project scaffolding, environment management, and Git workflow automation.
            </p>
            <div className="project-tags">
              <span className="tag">TypeScript</span>
              <span className="tag">Node.js</span>
              <span className="tag">npm</span>
            </div>
            <a href="#" className="project-link">
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

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
          <div className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-date">2023 — Present</div>
              <div className="exp-company">Company Name</div>
            </div>
            <div>
              <div className="exp-role">Senior Full Stack Developer</div>
              <p className="exp-desc">
                Led development of core product features serving 50K+ users. Architected a microservices migration that reduced infrastructure costs by 40%. Mentored junior developers and established code review standards.
              </p>
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-date">2021 — 2023</div>
              <div className="exp-company">Startup Name</div>
            </div>
            <div>
              <div className="exp-role">Full Stack Developer</div>
              <p className="exp-desc">
                Built the MVP from scratch using Next.js and Node.js. Integrated payment systems, real-time notifications, and third-party APIs. Helped grow the platform from 0 to 10K users in 12 months.
              </p>
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-date">2020 — 2021</div>
              <div className="exp-company">Agency Name</div>
            </div>
            <div>
              <div className="exp-role">Frontend Developer</div>
              <p className="exp-desc">
                Delivered responsive web applications for clients across e-commerce, fintech, and media. Worked closely with designers to implement pixel-perfect UIs with smooth animations and high Lighthouse scores.
              </p>
            </div>
          </div>

           <div className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-date">2020 — 2021</div>
              <div className="exp-company">Agency Name</div>
            </div>
            <div>
              <div className="exp-role">Frontend Developer</div>
              <p className="exp-desc">
                Delivered responsive web applications for clients across e-commerce, fintech, and media. Worked closely with designers to implement pixel-perfect UIs with smooth animations and high Lighthouse scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="links">
        <p className="section-label">04 — Links</p>
        <h2 className="section-title reveal">
          Find me on
          <br />
          <em>social.</em>
        </h2>
        <div className="links-grid reveal">
          <a href="https://www.linkedin.com/in/prashant-maywad-859438126/" target="_blank" rel="noreferrer" className="link-card" aria-label="LinkedIn">
            <div className="link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zm7.5 0h4.77v2.15h.07c.66-1.25 2.28-2.56 4.7-2.56 5.03 0 5.95 3.31 5.95 7.62V24h-5v-7.98c0-1.9-.04-4.35-2.65-4.35-2.65 0-3.06 2.06-3.06 4.2V24h-5V8.98z"/>
              </svg>
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/prashantmaywad" target="_blank" rel="noreferrer" className="link-card" aria-label="GitHub">
            <div className="link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.73-1.33-1.73-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.56 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <span>GitHub</span>
          </a>
          <a href="https://www.quora.com/profile/Prashant-Maywad" target="_blank" rel="noreferrer" className="link-card" aria-label="Quora">
            <div className="link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c6.64 0 12-5.36 12-12S18.64 0 12 0zm2.37 18.1c-.54.24-1.14.37-1.78.37-1.59 0-2.91-.78-3.8-1.62-.3.9-1.05 1.68-2.12 1.68-.59 0-1.06-.2-1.43-.55-.41-.4-.64-.97-.64-1.69 0-.77.28-1.4.84-1.9.55-.5 1.34-.76 2.4-.76.97 0 1.74.26 2.3.78.56.52.85 1.2.85 2.06 0 .33-.05.68-.16 1.05.77.85 1.79 1.46 3.1 1.46.24 0 .48-.02.71-.07v1.74zm3.86-4.06c0 3.65-2.51 4.9-4.16 4.9-.64 0-1.16-.11-1.56-.32-.08-.39-.29-.75-.62-1.08-1.2-.83-1.79-1.87-1.79-3.12 0-1.46.8-2.59 2.38-2.59.91 0 1.6.6 1.9 1.3.15.38.22.78.22 1.19 0 .57-.15 1.08-.44 1.53.63.36 1.33.56 2.15.56 1.05 0 1.71-.41 2.05-1.13.07-.14.12-.3.17-.46.17-.6.26-1.24.26-1.92 0-2.22-1.34-3.68-3.71-3.68-2.32 0-3.66 1.5-3.66 3.67 0 1.14.41 1.97 1.23 2.52.68.45 1.66.67 2.93.67.09 0 .2 0 .3-.01.31-.45.6-1.02.56-1.72-.01-.22-.08-.42-.21-.59-.25-.33-.72-.48-1.34-.48-.71 0-1.27.18-1.65.54-.17.15-.3.37-.35.63-.06.4.03.8.25 1.16.28.46.87.71 1.72.71 1.08 0 1.85-.36 2.3-1.08.03-.07.06-.15.08-.22.04-.16.07-.33.07-.51 0-.58-.21-1.11-.59-1.53-.42-.46-.99-.7-1.6-.7-.98 0-1.72.5-2.05 1.22-.05.12-.09.24-.12.37-.04.18-.06.36-.06.56 0 .93.39 1.7 1.16 2.34.46.37 1.03.57 1.7.57 1 0 1.76-.4 2.26-1.15.19-.27.32-.59.41-.93.06-.2.09-.4.09-.6v-.08z"/>
              </svg>
            </div>
            <span>Quora</span>
          </a>
          <a href="https://twitter.com/prashantmaywad" target="_blank" rel="noreferrer" className="link-card" aria-label="Twitter">
            <div className="link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.44 4.83c-.8.35-1.66.59-2.56.69a4.48 4.48 0 0 0 1.96-2.47 9.04 9.04 0 0 1-2.84 1.08 4.52 4.52 0 0 0-7.7 4.12 12.83 12.83 0 0 1-9.31-4.72 4.5 4.5 0 0 0 1.4 6.03 4.43 4.43 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.43 4.5 4.5 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.05 9.05 0 0 1 1 19.54 12.78 12.78 0 0 0 7.29 21c8.76 0 13.55-7.26 13.55-13.55 0-.21 0-.42-.02-.63a9.68 9.68 0 0 0 2.38-2.46z"/>
              </svg>
            </div>
            <span>Twitter</span>
          </a>
        </div>
      </section>

      <section id="contact" style={{ padding: "6rem 3rem" }}>
        <div className="contact-left reveal">
          <p className="section-label">05 — Contact</p>
          <h2 className="contact-headline">
            Let's build
            <br />
            something
            <br />
            <em>great.</em>
          </h2>
          <p className="contact-sub">
            Open to freelance projects, full-time roles, and interesting collaborations.
            <br />
            Drop me a message — I usually reply within 24 hours.
          </p>
          <br />
        </div>
        <div className="contact-form reveal">
          <div className="form-field">
            <label>Prashant Maywad</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your project..." />
          </div>
          <div className="form-submit">
            <button className="btn btn-primary" style={{ cursor: "none", border: "none", width: "100%", textAlign: "center" }}>
              Send Message
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Prashant Maywad — Crafted with care.</p>
        <p className="footer-note">Designed & Built by You</p>
      </footer>
    </>
  );
}
