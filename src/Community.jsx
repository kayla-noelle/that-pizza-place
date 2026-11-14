import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useParallax from './useParallax'

export default function Community() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  useParallax(imageRef, { speed: 0.25, sectionRef })

  return (
    <section className="community" ref={sectionRef}>
      <img
        ref={imageRef}
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
          <Link
            to="/community"
            className="community-btn btn-outline-light"
            aria-label="Learn more about our community involvement"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
