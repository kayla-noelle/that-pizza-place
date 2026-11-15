import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about">
      <div className="about-left">
        <img src="/TPP_Owners_v2.jpg" alt="The owners of That Pizza Place" className="about-image" />
      </div>
      <div className="about-right">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Learn about the history of That Pizza Place and the team behind your favorite pizza!
        </p>
        <Link to="/about" className="about-btn btn-outline-light btn-solid-light" aria-label="Our Story: the history of That Pizza Place and its owners">
          Our Story
        </Link>
      </div>
    </section>
  )
}
