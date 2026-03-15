import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand reveal">
            <a href="#hero" className="footer-logo">
              &lt;<span>YourName</span> /&gt;
            </a>
            <p className="footer-tagline">
              Building beautiful digital experiences,<br />one line of code at a time.
            </p>
          </div>

          <div className="footer-links-group reveal" style={{ transitionDelay: '100ms' }}>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group reveal" style={{ transitionDelay: '200ms' }}>
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:your@email.com">Email Me</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} Your Name. Built with <span className="heart">❤️</span> using React.
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
