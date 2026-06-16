import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about">
      <div className="about-left">
        <img src="/TPP-1978.JPEG" alt="That Pizza Place 1978" className="about-image" />
      </div>
      <div className="about-right">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Learn about the history of That Pizza Place and the team behind your favorite pizza!
        </p>
        <Link to="/about" className="about-btn">Our Story</Link>
      </div>
    </section>
  )
}
