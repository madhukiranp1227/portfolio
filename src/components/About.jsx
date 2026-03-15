import './About.css'

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '30+', label: 'Projects Completed' },
  { number: '15+', label: 'Happy Clients' },
  { number: '10+', label: 'Technologies' },
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
              <div className="about-avatar">YN</div>
            </div>
            <div className="about-image-deco"></div>
            <div className="experience-badge">
              <span className="exp-number">5+</span>
              <span className="exp-text">Years of<br/>Experience</span>
            </div>
          </div>

          <div className="about-text fade-up" style={{ transitionDelay: '150ms' }}>
            <h3 className="about-heading">
              I&apos;m a <span>Java Full Stack Developer</span> based in Your City
            </h3>
            <p className="about-para">
              Hi there! I&apos;m a passionate Java Full Stack Developer who loves building scalable,
              production-ready applications. I specialize in <strong>Java</strong> &amp; <strong>Spring Boot</strong> backends
              with clean RESTful APIs, microservices architecture, and <strong>React</strong> frontends that deliver
              exceptional user experiences.
            </p>
            <p className="about-para">
              I have deep experience with the entire Java ecosystem — from <strong>Spring MVC</strong>, <strong>Spring Security</strong>,
              and <strong>Hibernate/JPA</strong> to containerization with <strong>Docker</strong> and cloud deployments.
              I&apos;m always learning and looking for impactful opportunities to grow. ☕
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">📧 Email</span>
                <span className="detail-value">your@email.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📍 Location</span>
                <span className="detail-value">Your City, Country</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎓 Degree</span>
                <span className="detail-value">B.Sc. Computer Science</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">☕ Specialty</span>
                <span className="detail-value">Java Full Stack</span>
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
