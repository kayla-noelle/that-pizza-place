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
            Voted Best Pizza in the Best of North County
          </p>
          <h1 className="hero-title">Welcome to That Pizza Place</h1>
          <p className="hero-subtitle">
            A Carlsbad Tradition for over four decade
          </p>
          <div className="hero-buttons">
            <a href="https://www.toasttab.com/local/order/that-pizza-place/r-32db71c1-64cd-4796-9676-06da90995f7d" className="hero-btn hero-btn--pickup">Order Pickup</a>
            <Link to="/order" className="hero-btn hero-btn--delivery">Order Delivery</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
