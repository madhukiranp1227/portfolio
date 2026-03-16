import { useRef, useEffect } from 'react'
import './Experience.css'

const experiences = [
  {
    id: 1,
    company: 'Amazon',
    role: 'Java Full Stack Developer',
    period: 'Sep 2025 – Present',
    location: 'Seattle, Washington, USA',
    color: '#ff9900',
    logo: '🛒',
    bullets: [
      'Designed and developed microservices with Java 17 and Spring Boot, building RESTful APIs that support large-scale distributed systems and enable high-volume customer transactions.',
      'Implemented service-oriented and event-driven architectures using Spring Cloud and Apache Kafka, enabling reliable communication between distributed services.',
      'Built secure APIs using Spring Security, OAuth 2.0, JWT, and OpenID Connect for large-scale cloud applications.',
      'Developed dynamic Single Page Applications (SPA) using React.js, Angular, TypeScript, HTML5, CSS3, and Bootstrap for internal dashboards and operational tools.',
      'Designed data access layers using Spring Data JPA, Hibernate, DynamoDB, and PostgreSQL.',
      'Built and deployed cloud-native applications on AWS utilizing EC2, S3, Lambda, API Gateway, DynamoDB, and CloudWatch.',
      'Containerized services using Docker and Kubernetes (Amazon EKS) for automated orchestration and deployment.',
      'Developed and maintained CI/CD pipelines using Jenkins, GitHub Actions, and Maven.',
    ],
    tech: ['Java 17', 'Spring Boot', 'React.js', 'Angular', 'AWS', 'Kafka', 'Docker', 'Kubernetes', 'OAuth 2.0', 'JWT'],
  },
  {
    id: 2,
    company: 'Bank of America',
    role: 'Java Full Stack Developer',
    period: 'May 2023 – Aug 2025',
    location: 'Charlotte, North Carolina, USA',
    color: '#e31837',
    logo: '🏦',
    bullets: [
      'Built and maintained enterprise applications with Java, Spring Boot, and Hibernate; implemented RESTful APIs and integrated business workflows using Drools Rule Engine.',
      'Developed responsive UI components using Angular, TypeScript, HTML5, CSS3, JavaScript, and Bootstrap for internal financial platforms.',
      'Implemented microservices architecture with Spring Boot applying Saga patterns for reliable distributed transactions across financial systems.',
      'Deployed and managed applications on Microsoft Azure using Azure App Services, Azure SQL Database, and Azure Resource Manager (ARM).',
      'Built and maintained CI/CD pipelines using Azure DevOps and Jenkins, automating build, testing, and deployment processes.',
      'Performed unit and integration testing using JUnit 5, Postman, Swagger, and SoapUI.',
      'Collaborated within Agile/Scrum SDLC, maintaining source control with Git/GitHub and managing releases through Maven builds.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'Azure', 'Microservices', 'JUnit 5', 'Docker', 'Kubernetes', 'Drools'],
  },
  {
    id: 3,
    company: 'Morgan Stanley',
    role: 'Java Full Stack Developer',
    period: 'Jan 2021 – Nov 2021',
    location: 'Bangalore, India',
    color: '#003087',
    logo: '📈',
    bullets: [
      'Implemented high-performance microservices with Java, Spring Boot, and Spring Cloud to process financial transactions, trade management, and portfolio services.',
      'Developed secure RESTful APIs using Spring Security, OAuth2, and RBAC for internal banking and trading applications.',
      'Built responsive web interfaces using React.js, JavaScript, HTML5, and CSS3 for real-time financial dashboards and portfolio management tools.',
      'Designed and optimized data access layers using Spring Data JPA, Hibernate, Oracle, and PostgreSQL for high-volume financial transactions.',
      'Implemented event-driven architecture using Apache Kafka and REST APIs to support real-time data streaming between trading, risk, and settlement systems.',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'Kafka', 'Oracle', 'PostgreSQL', 'OAuth2', 'Spring Security'],
  },
  {
    id: 4,
    company: 'Optum',
    role: 'Java Developer',
    period: 'Jan 2020 – Dec 2020',
    location: 'Hyderabad, India',
    color: '#d9534f',
    logo: '🏥',
    bullets: [
      'Developed and maintained backend microservices using Java, Spring Boot, and Spring WebFlux, exposing secure REST APIs for claims processing, member services, and provider integrations.',
      'Built responsive healthcare dashboards and member/provider portals using React.js, JavaScript, HTML5, CSS3, and AJAX.',
      'Implemented data persistence using Spring JDBC, Hibernate, SQL databases, and Redis caching for efficient handling of large healthcare datasets.',
      'Containerized healthcare applications using Docker and orchestrated deployments with Kubernetes; implemented CI/CD pipelines with Jenkins and Git.',
      'Collaborated with cross-functional teams in Agile/Scrum environments using Jira for sprint management; implemented JMS messaging for secure healthcare system communication.',
      'Leveraged Docker and Azure AKS for container deployment, and used Jenkins and Bamboo to automate CI/CD pipelines; applied TestNG and GitHub Copilot to improve code quality.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring WebFlux', 'React.js', 'Docker', 'Kubernetes', 'Redis', 'Azure AKS', 'Jenkins'],
  },
]

const Experience = () => {
  const itemRefs = useRef([])

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
    itemRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title reveal">Work <span>Experience</span></h2>
        <p className="section-subtitle reveal">My professional journey as a Java Full Stack Developer</p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              className={`timeline-item fade-up ${index % 2 === 0 ? 'left' : 'right'}`}
              key={exp.id}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 0 4px ${exp.color}33` }}>
                <span>{exp.logo}</span>
              </div>

              <div className="timeline-card" style={{ '--exp-color': exp.color }}>
                <div className="exp-header">
                  <div className="exp-header-left">
                    <h3 className="exp-company">{exp.company}</h3>
                    <p className="exp-role">{exp.role}</p>
                  </div>
                  <div className="exp-header-right">
                    <span className="exp-period">📅 {exp.period}</span>
                    <span className="exp-location">📍 {exp.location}</span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span className="exp-tech-badge" key={t} style={{ borderColor: `${exp.color}55`, color: exp.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
