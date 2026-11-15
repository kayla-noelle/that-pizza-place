export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">That Pizza Place</p>

        <address className="footer-address">
          <p>2622 El Camino Real Ste B</p>
          <p>Carlsbad, CA 92008</p>
          <p>
            <a href="tel:7604343171">760-434-3171</a>
          </p>
        </address>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Sun-Thurs : 11am-8pm</p>
          <p>Fri-Sat: 11am-9pm</p>
        </div>

        <div className="footer-section">
          <h3>Follow</h3>
          <div className="footer-social">
            <a href="https://www.facebook.com/ThatPizzaPlace" target="_blank" rel="noreferrer" aria-label="Facebook (opens in a new tab)">
              <img src="/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png" alt="" className="footer-social-facebook" />
            </a>
            <a href="https://www.instagram.com/thatpizzaplacecarlsbad/" target="_blank" rel="noreferrer" aria-label="Instagram (opens in a new tab)">
              <img src="/instagram-white-icon.webp" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
