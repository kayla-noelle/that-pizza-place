import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { src: '/ThatPizzaPlace_24.png', alt: 'Pizza', label: 'Pizza', to: '/menu#pizza' },
  { src: '/menu/ThatPizzaPlace_47.png', alt: 'Sandwiches', label: 'Sandwiches', to: '/menu#sandwiches' },
  { src: '/menu/ThatPizzaPlace_78.png', alt: 'Desserts', label: 'Desserts', to: '/menu#desserts' },
  { src: '/menu/ThatPizzaPlace_62.png', alt: 'Appetizers', label: 'Appetizers', to: '/menu#appetizers' },
  { src: '/menu/ThatPizzaPlace_49.jpg', alt: 'Drinks', label: 'Drinks', objectPosition: 'center 70%', to: '/menu#drinks' },
  { src: '/menu/ThatPizzaPlace_16.png', alt: 'Salads', label: 'Salads', to: '/menu#salads' },
]

const SWIPE_THRESHOLD = 40

// Position of card i relative to the active card, wrapped so the carousel loops.
// e.g. with 6 cards and active 0: card 1 -> +1, card 5 -> -1.
function relativeOffset(i, active, n) {
  let offset = (i - active + n) % n
  if (offset > n / 2) offset -= n
  return offset
}

export default function MenuPreview() {
  const [active, setActive] = useState(0)
  const n = menuItems.length
  const dragStartX = useRef(null)
  const didSwipe = useRef(false)

  const go = (step) => setActive((a) => (a + step + n) % n)

  const onPointerDown = (e) => {
    dragStartX.current = e.clientX
    didSwipe.current = false
  }

  const onPointerUp = (e) => {
    if (dragStartX.current === null) return
    const dx = e.clientX - dragStartX.current
    dragStartX.current = null
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      didSwipe.current = true
      go(dx < 0 ? 1 : -1)
    }
  }

  const onCardClick = (e, offset) => {
    // A swipe or a click on a side card moves the carousel instead of navigating.
    if (didSwipe.current || offset !== 0) {
      e.preventDefault()
      didSwipe.current = false
      if (offset !== 0) go(offset)
    }
  }

  return (
    <section className="menu-preview">
      <h2 className="menu-preview-title">Our Menu</h2>

      <div
        className="menu-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Menu categories"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') go(-1)
          if (e.key === 'ArrowRight') go(1)
        }}
      >
        <button
          type="button"
          className="menu-carousel-arrow menu-carousel-arrow--prev"
          aria-label="Previous menu category"
          onClick={() => go(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
        </button>

        <div
          className="menu-carousel-stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { dragStartX.current = null }}
        >
          {menuItems.map((item, i) => {
            const offset = relativeOffset(i, active, n)
            const visible = Math.abs(offset) <= 1
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`menu-carousel-card${offset === 0 ? ' is-active' : ''}`}
                style={{ '--offset': offset }}
                aria-label={offset === 0 ? `View ${item.label} menu` : `Show ${item.label}`}
                aria-hidden={!visible}
                tabIndex={visible ? 0 : -1}
                draggable={false}
                onClick={(e) => onCardClick(e, offset)}
                data-visible={visible}
              >
                <span className="menu-carousel-image">
                  <img
                    src={item.src}
                    alt=""
                    draggable={false}
                    style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
                  />
                </span>
                <span className="menu-preview-label">{item.label}</span>
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          className="menu-carousel-arrow menu-carousel-arrow--next"
          aria-label="Next menu category"
          onClick={() => go(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>

      <Link to="/menu" className="menu-preview-link">View Full Menu</Link>
    </section>
  )
}
