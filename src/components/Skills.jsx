import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    category: 'Java & Backend',
    icon: '☕',
    skills: [
      { name: 'Java (8/11/17/21)', level: 95, color: '#f89820' },
      { name: 'Spring Boot', level: 92, color: '#6db33f' },
      { name: 'Spring Security + JWT', level: 85, color: '#6db33f' },
      { name: 'Hibernate / JPA', level: 88, color: '#59666c' },
      { name: 'Microservices', level: 80, color: '#f89820' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 88, color: '#61dafb' },
      { name: 'JavaScript (ES6+)', level: 85, color: '#f7df1e' },
      { name: 'TypeScript', level: 75, color: '#3178c6' },
      { name: 'HTML5 & CSS3', level: 92, color: '#e34c26' },
      { name: 'Redux', level: 72, color: '#764abc' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 90, color: '#4479a1' },
      { name: 'PostgreSQL', level: 85, color: '#336791' },
      { name: 'MongoDB', level: 72, color: '#47a248' },
      { name: 'Redis (Caching)', level: 70, color: '#dc382d' },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🔧',
    skills: [
      { name: 'Maven / Gradle', level: 88, color: '#c71a36' },
      { name: 'Docker', level: 78, color: '#2496ed' },
      { name: 'Git & GitHub', level: 92, color: '#f1502f' },
      { name: 'AWS (EC2, S3, RDS)', level: 68, color: '#ff9900' },
    ],
  },
]

const techBadges = [
  'Java', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate',
  'JPA', 'React', 'JavaScript', 'TypeScript', 'REST APIs',
  'Microservices', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'Maven', 'Git', 'JWT', 'AWS',
]

const Skills = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    // Animate cards in on scroll
    const cardObserver = new IntersectionObserver(
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
      if (card) cardObserver.observe(card)
    })

    // Animate skill bars when section enters viewport
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animated class to all bars inside this section
            const bars = entry.target.querySelectorAll('.skill-fill')
            bars.forEach((bar) => {
              bar.classList.add('animate')
            })
            barObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      barObserver.observe(sectionRef.current)
    }

    return () => {
      cardObserver.disconnect()
      barObserver.disconnect()
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        <p className="section-subtitle reveal">Java Full Stack technologies and tools I work with</p>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div
              className="skill-card fade-up"
              key={cat.category}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-category">{cat.category}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        data-level={skill.level}
                        style={{
                          '--skill-width': `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                          boxShadow: `0 0 10px ${skill.color}55`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges-section reveal">
          <h3 className="tech-badges-title">Technologies I&apos;ve Worked With</h3>
          <div className="tech-badges">
            {techBadges.map((tech) => (
              <span className="tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
