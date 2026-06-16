import { Link } from 'react-router-dom'

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <p className="contact-banner-text">Have a Question? <Link to="/contact" className="contact-banner-link">Contact Us!</Link></p>
    </section>
  )
}
