import { Link } from 'react-router-dom'

// Homepage "Have a question?" section under About Us: heading on the left, phone number + button on the right
export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-section-title">
        Have a question? <span className="contact-section-title-line">Contact us!</span>
      </h2>
      <div className="contact-section-right">
        <a href="tel:7604343171" className="contact-section-phone">(760) 434-3171</a>
        <Link to="/contact" className="contact-section-btn">Contact Us</Link>
      </div>
    </section>
  )
}
