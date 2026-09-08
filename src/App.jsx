import React from 'react';
import { personalInfo, skills, projects } from './data';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">{personalInfo.name}</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Welcome to my portfolio</span>
            <h1>
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="hero-sub">{personalInfo.title}</p>
            <p className="bio">{personalInfo.bio}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects ↗
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
                LinkedIn
              </a>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                Resume 📄
              </a>
            </div>
          </div>

          <div className="hero-avatar-wrap">
            <div className="floating-bubble-wrap">
              <div className="bubble-particle particle-1"></div>
              <div className="bubble-particle particle-2"></div>
              <div className="bubble-particle particle-3"></div>
              <div className="avatar-ring bubble">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="avatar-bubble-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p style={{ maxWidth: '750px', margin: '0.8rem auto 0', color: 'var(--text-muted)' }}>
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>Technologies, libraries, and tools I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon-box">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-badge">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Recent software, computer vision tools, and web applications</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {project.image && (
                  <div className="project-img-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-img" 
                    />
                  </div>
                )}
                <div className="project-body">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">
                      {project.tech.map((techItem, i) => (
                        <span key={i} className="tech-badge">{techItem}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
                      Code ↗
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <h2>Let's Connect</h2>
            <p>Have an interesting project, question, or opportunity? Feel free to reach out!</p>
          </div>
          <div className="contact-cards-grid">
            <a href={`mailto:${personalInfo.email}`} className="contact-card">
              <div className="contact-icon-wrapper">
                ✉
              </div>
              <div>
                <span className="contact-label">Email Me</span>
                <p className="contact-value">{personalInfo.email}</p>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon-wrapper">
                in
              </div>
              <div>
                <span className="contact-label">LinkedIn</span>
                <p className="contact-value">Connect on LinkedIn ↗</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;