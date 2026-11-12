import Navbar from './Navbar'
import Footer from './Footer'

export default function OrderPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <div className="menu-page-banner">
          <h1 className="menu-page-banner-title">Order Online</h1>
        </div>
        <div className="order-page-delivery">
          <div className="order-page-delivery-text">
            <h3 className="menu-section-subtitle order-page-delivery-title">Order Delivery</h3>
            <div className="order-page-delivery-buttons">
              <a href="https://www.ubereats.com/store/that-pizza-place/HNLysahxXRqqC6n118tB1Q?diningMode=PICKUP&ps=1" className="order-page-delivery-btn">Uber Eats Delivery</a>
              <a href="https://www.grubhub.com/restaurant/that-pizza-place-2622-el-camino-real-suite-b-carlsbad/5008248?affiliate=1185&utm_campaign=1185&utm_content=5008248&utm_medium=affiliate&utm_source=bing-affiliate-network" className="order-page-delivery-btn">Grubhub Delivery</a>
            </div>
          </div>
          <div className="order-page-delivery-image">
            <img src="/ThatPizzaPlace_58.jpg" alt="Order Delivery" />
          </div>
        </div>
        <div className="order-page-section">
          <div className="order-page-image">
            <img src="/ThatPizzaPlace_24.png" alt="Order Takeout" />
          </div>
          <div className="order-page-text">
            <h3 className="menu-section-subtitle order-page-takeout-title">Order Takeout</h3>
            <p className="menu-page-intro order-page-takeout-text">
              For carry out call <a href="tel:7604343171">760 434 3171</a> or order online for pick up
            </p>
            <a href="https://www.toasttab.com/local/order/that-pizza-place/r-32db71c1-64cd-4796-9676-06da90995f7d" className="hero-btn order-page-pickup-btn">Order Pickup</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
