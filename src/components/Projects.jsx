import { useState, useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Finance Split',
    description: 'A smart expense-splitting web app that helps groups track shared costs, split bills fairly, and settle debts effortlessly. Features real-time balance tracking, expense categorization, and intuitive split calculations for friends, roommates, and travel groups.',
    technologies: ['React', 'JavaScript', 'CSS3', 'Netlify'],
    category: 'Full Stack',
    github: 'https://github.com/madhukiranp1227',
    live: 'https://financesplit.netlify.app/',
    emoji: '�',
    color: '#4ade80',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'A full-stack task management application inspired by Jira. Features JWT-based authentication, task creation with priority and status tracking, and a responsive dashboard. Built with React frontend, Spring Boot backend, and MySQL database.',
    technologies: ['React', 'Spring Boot', 'Java', 'MySQL', 'JWT', 'Netlify'],
    category: 'Full Stack',
    github: 'https://github.com/madhukiranp1227',
    live: 'https://taskmanagerjira.netlify.app/',
    emoji: '✅',
    color: '#6c63ff',
  },
]

const categories = ['All', 'Full Stack']

const Projects = () => {
  const [active, setActive] = useState('All')
  const cardRefs = useRef([])

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [filtered])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal">My <span>Projects</span></h2>
        <p className="section-subtitle reveal">Live projects I&apos;ve built and deployed</p>

        <div className="filter-tabs reveal">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div
              className="project-card fade-up"
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="project-emoji" style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}>
                <span>{project.emoji}</span>
              </div>
              <div className="project-body">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map(tech => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link live">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
