"use client";

import { useEffect, useRef, useState } from "react";
import { Cursor, Navbar, HeroSection, Marquee, AboutSection, ProjectsSection, ExperienceSection, LinksSection, ContactSection } from "../components";

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
      <Cursor cursorRef={cursorRef} />
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <HeroSection theme={theme} />
      <Marquee />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <LinksSection />
      <ContactSection />
      <footer>
        <p>© 2026 Prashant Maywad — Crafted with care.</p>
        <p className="footer-note">Reach Out</p>
      </footer>
    </>
  );
}
