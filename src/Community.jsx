import { Link } from 'react-router-dom'

export default function Community() {
  return (
    <section className="community">
      <img
        src="/tpp-community.jpeg"
        alt="That Pizza Place in the community"
        className="community-image"
      />
      <div className="community-overlay">
        <div className="community-content">
          <h2 className="community-title">Community</h2>
          <p className="community-text">
            That Pizza Place is a long standing supporter of the community.
            Whether team sports or special causes, we love to give back!
          </p>
          <Link to="/community" className="community-btn">Learn More</Link>
        </div>
      </div>
    </section>
  )
}
