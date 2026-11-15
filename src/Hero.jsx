import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/ThatPizzaPlace_30.jpg"
        alt=""
        className="hero-image"
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">
            VOTED BEST OF NORTH COUNTY!
          </p>
          <h1 className="hero-title">That Pizza Place</h1>
          <p className="hero-subtitle">
            A Carlsbad Tradition since 1978
          </p>
          <div className="hero-buttons">
            <a href="https://www.toasttab.com/local/order/that-pizza-place/r-32db71c1-64cd-4796-9676-06da90995f7d" className="hero-btn hero-btn--dark">Order Pickup</a>
            <Link to="/menu" className="hero-btn hero-btn--dark">View Menu</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
