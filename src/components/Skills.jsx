import { useEffect, useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    category: 'Java & Backend',
    icon: '☕',
    skills: [
      { name: 'Java (8/11/17)', level: 95, color: '#f89820' },
      { name: 'Spring Boot', level: 93, color: '#6db33f' },
      { name: 'Spring Security + JWT', level: 87, color: '#6db33f' },
      { name: 'Hibernate / JPA', level: 88, color: '#59666c' },
      { name: 'Microservices', level: 90, color: '#f89820' },
      { name: 'Node.js / Express', level: 72, color: '#8cc84b' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90, color: '#61dafb' },
      { name: 'Angular', level: 82, color: '#dd0031' },
      { name: 'TypeScript', level: 80, color: '#3178c6' },
      { name: 'JavaScript (ES6+)', level: 88, color: '#f7df1e' },
      { name: 'HTML5 & CSS3', level: 92, color: '#e34c26' },
      { name: 'Redux', level: 75, color: '#764abc' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 85, color: '#ff9900' },
      { name: 'Microsoft Azure', level: 78, color: '#0078d4' },
      { name: 'Docker', level: 82, color: '#2496ed' },
      { name: 'Kubernetes / EKS', level: 76, color: '#326ce5' },
      { name: 'CI/CD (Jenkins / GitHub Actions)', level: 85, color: '#d24939' },
      { name: 'Google Cloud (GCP)', level: 60, color: '#4285f4' },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 90, color: '#4479a1' },
      { name: 'Oracle', level: 80, color: '#f80000' },
      { name: 'MongoDB', level: 74, color: '#47a248' },
      { name: 'DynamoDB', level: 72, color: '#ff9900' },
      { name: 'Redis (Caching)', level: 74, color: '#dc382d' },
      { name: 'Cassandra', level: 62, color: '#1287b1' },
    ],
  },
  {
    category: 'AI / ML / GenAI',
    icon: '🤖',
    skills: [
      { name: 'Generative AI & LLMs', level: 70, color: '#a855f7' },
      { name: 'AI-driven API Integration', level: 75, color: '#a855f7' },
      { name: 'NLP Pipelines', level: 65, color: '#7c3aed' },
      { name: 'GitHub Copilot', level: 85, color: '#6e40c9' },
      { name: 'Machine Learning (ML)', level: 62, color: '#9333ea' },
    ],
  },
  {
    category: 'Event Streaming & Tools',
    icon: '⚡',
    skills: [
      { name: 'Apache Kafka', level: 84, color: '#231f20' },
      { name: 'RabbitMQ / ActiveMQ', level: 72, color: '#ff6600' },
      { name: 'GraphQL APIs', level: 68, color: '#e10098' },
      { name: 'Maven / Gradle', level: 88, color: '#c71a36' },
      { name: 'Git / GitHub / GitLab', level: 92, color: '#f1502f' },
    ],
  },
]

const techBadges = [
  'Java', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'Hibernate',
  'React.js', 'Angular', 'TypeScript', 'JavaScript', 'REST APIs',
  'GraphQL', 'Microservices', 'Apache Kafka', 'OAuth 2.0', 'JWT',
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
  'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis',
  'Generative AI', 'LLMs', 'GitHub Copilot', 'NLP',
  'Jenkins', 'GitHub Actions', 'Maven', 'Git', 'ELK Stack',
  'JUnit', 'Mockito', 'Selenium', 'Postman', 'Swagger',
]

const Skills = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
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

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-fill')
            bars.forEach((bar) => bar.classList.add('animate'))
            barObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) barObserver.observe(sectionRef.current)

    return () => {
      cardObserver.disconnect()
      barObserver.disconnect()
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        <p className="section-subtitle reveal">Java Full Stack, Cloud, AI/ML, and DevOps technologies I work with</p>

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
