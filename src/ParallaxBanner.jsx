import { useRef } from 'react'
import useParallax from './useParallax'

// Page banner with a photo background that scrolls slower than the page.
// Meant for the top of a page (see useParallax).
export default function ParallaxBanner({ title, image, className = '' }) {
  const bgRef = useRef(null)
  useParallax(bgRef, { speed: 0.4 })

  return (
    <div className={`menu-page-banner parallax-banner ${className}`.trim()}>
      <div
        className="parallax-banner-bg"
        ref={bgRef}
        aria-hidden="true"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <h1 className="menu-page-banner-title">{title}</h1>
    </div>
  )
}
