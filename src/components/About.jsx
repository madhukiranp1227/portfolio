import './About.css'

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '4', label: 'Companies' },
  { number: 'AWS', label: 'Cloud Platform' },
  { number: '30%', label: 'Release Cycle Reduction' },
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title reveal">About <span>Me</span></h2>
        <p className="section-subtitle reveal">A little bit about who I am and what I do</p>

        <div className="about-content">
          <div className="about-image-wrap fade-up">
            <div className="about-image">
              <div className="about-avatar">MK</div>
            </div>
            <div className="about-image-deco"></div>
            <div className="experience-badge">
              <span className="exp-number">5+</span>
              <span className="exp-text">Years of<br/>Experience</span>
            </div>
          </div>

          <div className="about-text fade-up" style={{ transitionDelay: '150ms' }}>
            <h3 className="about-heading">
              I&apos;m <span>Madhu Kiran Pathuri</span> — Java Full Stack Developer based in Seattle, WA
            </h3>
            <p className="about-para">
              Java Full Stack Developer with senior-level expertise delivering scalable, cloud-native applications.
              Currently at <strong>Amazon</strong>, I lead the design and deployment of high-throughput microservices on <strong>AWS</strong>,
              enabling secure, real-time transaction processing and integrating AI-driven fraud detection APIs.
            </p>
            <p className="about-para">
              I implemented event-driven architectures using <strong>Apache Kafka</strong> and CI/CD pipelines that reduced release
              cycle time by <strong>30%</strong>. I have deep experience across the full Java ecosystem — Spring Boot, Spring Security,
              Hibernate/JPA, React, Docker, Kubernetes, and cloud deployments on AWS and Azure. ☕
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">📧 Email</span>
                <span className="detail-value">madhukiranpathuri1@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📍 Location</span>
                <span className="detail-value">Seattle, Washington, USA</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📞 Phone</span>
                <span className="detail-value">858-243-3176</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎓 Degree</span>
                <span className="detail-value">M.S. Computer Science — Cal State Long Beach</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">☕ Specialty</span>
                <span className="detail-value">Java Full Stack &amp; Cloud-Native Apps</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💼 Availability</span>
                <span className="detail-value available">Open to Work</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="/resume.pdf" download className="btn btn-outline">Download CV</a>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card fade-up" key={s.label} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
