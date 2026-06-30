export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img
            src="/tpp-white.png"
            alt="That Pizza Place"
            className="footer-logo"
          />
          <address className="footer-address">
            <p>2622 El Camino Real Ste B</p>
            <p>Carlsbad, CA 92008</p>
            <p>
              <a href="tel:7604343171">760-434-3171</a>
            </p>
          </address>
        </div>

        <div className="footer-hours">
          <h3>Hours</h3>
          <p>Sun-Thurs : 11am-8pm</p>
          <p>Fri-Sat: 11am-9pm</p>
        </div>

        <div className="footer-follow">
          <h3>Follow</h3>
          <p><a href="https://www.facebook.com/ThatPizzaPlace" target="_blank" rel="noreferrer">Facebook</a></p>
          <p><a href="https://www.instagram.com/thatpizzaplacecarlsbad/" target="_blank" rel="noreferrer">Instagram</a></p>
        </div>
      </div>
    </footer>
  )
}
