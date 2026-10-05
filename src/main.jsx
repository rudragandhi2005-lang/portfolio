import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import profile from "./assets/profile.png";
import "./styles.css";

const skills = [
  "ReactJS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Laravel / PHP",
  "MongoDB",
  "Android / Java",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Qudioo Cleaning Service",
    text: "A cleaning-services website and Android application for home and office services.",
    tech: ["Laravel", "PHP", "MongoDB", "Android"],
  },
  {
    number: "02",
    title: "Tours & Travel Website",
    text: "A responsive travel website designed for travel agents and customers with an easy-to-use interface.",
    tech: ["HTML", "CSS", "Laravel", "PHP"],
  },
];

function App() {
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <div className={light ? "site light" : "site"}>
      <header className="nav-wrap">
        <nav className="nav">
          <a href="#home" className="logo" onClick={closeMenu}>
            RG<span>.</span>
          </a>

          <div className={menu ? "links open" : "links"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className="nav-right">
            <button
              className="icon-button"
              onClick={() => setLight(!light)}
              aria-label="Toggle theme"
            >
              {light ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            <a href="#contact" className="talk-button">
              Let's talk <ArrowRight size={17} />
            </a>

            <button
              className="menu-button"
              onClick={() => setMenu(!menu)}
              aria-label="Menu"
            >
              {menu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="available">
              <i />
              Available for opportunities
            </div>

            <p className="hello">Hello, I'm</p>

            <h1>
              Rudra Nimish <strong>Gandhi.</strong>
            </h1>

            <h2>Web Developer &amp; Full Stack Enthusiast</h2>

            <p className="intro">
              I build thoughtful, responsive web experiences that connect clean
              interfaces with dependable backends.
            </p>

            <div className="hero-actions">
              <a className="green-button" href="#projects">
                View projects <ArrowDown size={18} />
              </a>

              <a
                className="outline-button"
                href="mailto:gandhirudra219@gmail.com"
              >
                Contact me <Mail size={17} />
              </a>

              <a
                className="cv-link"
                href="/Rudra-Nimish-Gandhi-Resume.pdf"
                download
              >
                Download CV <Download size={17} />
              </a>
            </div>

            <div className="contact-row">
              <span>
                <Mail size={16} />
                gandhirudra219@gmail.com
              </span>

              <span>
                <Phone size={16} />
                +91 7859915441
              </span>

              <span>
                <MapPin size={16} />
                Surat, Gujarat, India
              </span>
            </div>
          </div>

          <div className="hero-photo-area">
            <div className="photo-frame">
              <img src={profile} alt="Rudra Nimish Gandhi" />

              <div className="photo-gradient" />

              <div className="photo-caption">
                <span>Based in Surat</span>
                <b>Build. Learn. Improve.</b>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section container">
          <div className="section-label">01</div>

          <div>
            <p className="mini-title">ABOUT ME</p>

            <h2 className="section-title">
              Turning ideas into <span>useful experiences.</span>
            </h2>

            <div className="about-text">
              <p>
                I am a web-development graduate who enjoys creating practical,
                responsive websites and applications.
              </p>

              <p>
                I am a fresher looking for an opportunity where I can
                contribute, improve my skills and grow with a development team.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section container">
          <div className="section-label">02</div>

          <div className="wide">
            <p className="mini-title">SKILLS</p>

            <h2 className="section-title">
              My <span>toolkit.</span>
            </h2>

            <div className="skill-grid">
              {skills.map((skill, index) => (
                <div className="skill" key={skill}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <b>{skill}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section container">
          <div className="section-label">03</div>

          <div className="wide">
            <p className="mini-title">PROJECTS</p>

            <h2 className="section-title">
              Things I've <span>built.</span>
            </h2>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project-top">
                    <span>{project.number}</span>
                    <ArrowRight size={18} />
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>

                  <div className="chips">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section container">
          <div className="section-label">04</div>

          <div className="wide">
            <p className="mini-title">EDUCATION</p>

            <h2 className="section-title">
              Learning by <span>building.</span>
            </h2>

            <div className="education-card">
              <GraduationCap size={26} />

              <div>
                <b>
                  Bachelor of Computer Technology (Web Development)
                </b>

                <p>
                  UCCC &amp; SPBCBA &amp; SDHG College of BCA &amp; IT with
                  Veer Narmad South Gujarat University
                </p>

                <small>CGPA 7.26 / 10 · 2025</small>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div>
              <p className="mini-title">05 · CONTACT</p>

              <h2>
                Let's build something <span>great.</span>
              </h2>

              <p>
                Have a project, internship or opportunity? I'd love to hear
                from you.
              </p>
            </div>

            <a
              className="green-button big"
              href="mailto:gandhirudra219@gmail.com"
            >
              Get in touch <ArrowRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Rudra Nimish Gandhi</span>

        <span>Built with ReactJS</span>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={15} />
          GitHub
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);