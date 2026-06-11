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
            <a href="#" className="hero-btn hero-btn--pickup">Order Pickup</a>
            <a href="#" className="hero-btn hero-btn--delivery">Order Delivery</a>
          </div>
        </div>
      </div>
    </section>
  )
}
