import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'madhukiranpathuri1@gmail.com',
    href: 'mailto:madhukiranpathuri1@gmail.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Seattle, Washington, USA',
    href: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '858-243-3176',
    href: 'tel:8582433176',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/madhukiran12',
    href: 'https://www.linkedin.com/in/madhukiran12/',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/madhukiranp1227',
    href: 'https://github.com/madhukiranp1227',
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission (replace with actual email service like EmailJS)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title reveal">Get In <span>Touch</span></h2>
        <p className="section-subtitle reveal">Have a project in mind? Let&apos;s talk about it!</p>

        <div className="contact-wrapper">
          {/* Info Side */}
          <div className="contact-info fade-up">
            <h3 className="contact-info-title">Let&apos;s work together!</h3>
            <p className="contact-info-desc">
              I&apos;m currently available for full-time positions and exciting projects.
              Whether you need a Java Full Stack Developer, cloud-native architect, or
              someone to build scalable microservices, feel free to reach out!
            </p>

            <div className="contact-items">
              {contactInfo.map((item) => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-item-value link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-item-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <span className="availability-dot"></span>
              Available for new opportunities
            </div>
          </div>

          {/* Form Side */}
          <form className="contact-form fade-up" style={{ transitionDelay: '150ms' }} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <><span className="spinner"></span> Sending...</>
              ) : (
                <>Send Message 🚀</>
              )}
            </button>

            {status === 'success' && (
              <div className="form-success">
                ✅ Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
