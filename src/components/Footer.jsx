import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand reveal">
            <a href="#hero" className="footer-logo">
              MadhuKiran
            </a>
            <p className="footer-tagline">
              Building scalable cloud-native applications,<br />one microservice at a time.
            </p>
          </div>

          <div className="footer-links-group reveal" style={{ transitionDelay: '100ms' }}>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group reveal" style={{ transitionDelay: '200ms' }}>
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/madhukiranp1227" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/madhukiran12/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:madhukiranpathuri1@gmail.com">Email Me</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} Madhu Kiran Pathuri. Built with <span className="heart">❤️</span> using React.
          </p>
          <p className="footer-back-top">
            <a href="#hero">Back to top ↑</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
