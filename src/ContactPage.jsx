import Navbar from './Navbar'
import Footer from './Footer'
import ParallaxBanner from './ParallaxBanner'

export default function ContactPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <ParallaxBanner
          title="Contact Us"
          image="/IMG_4424.webp"
          className="contact-page-banner"
        />
        <div className="contact-page-info">
          <div className="contact-page-text">
            <h3 className="menu-section-subtitle">Feel free to contact us with any questions and comments</h3>
            <p className="menu-page-intro">
              Have a question, comment or feedback? Fill out the form below and we'll get back to you as soon as we can.
              <br /><br />
              (760) 434-3171
              <br /><br />
              2622 El Camino Real Ste B
              <br />
              Carlsbad, CA 92008
              <br /><br />
              tony@thatpizzaplacecarlsbad.com
              <br /><br />
              HOURS
              <br />
              Sun-Thurs : 11am-9pm
              <br />
              Fri-Sat: 11am-10pm
            </p>
          </div>
          <div className="contact-page-map">
            <iframe
              title="Map showing That Pizza Place at 2622 El Camino Real Ste B, Carlsbad, CA"
              src="https://www.google.com/maps?q=That+Pizza+Place,+2622+El+Camino+Real+Ste+B,+Carlsbad,+CA+92008&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <form className="community-form" name="contact" method="POST" netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="community-form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="community-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="community-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="community-form-submit">Send</button>
        </form>
        <p className="menu-page-intro">
          No Reservations Accepted
          <br /><br />
          Please note: We will allow you to hold a table up
          to 15 minutes to allow for your party to arrive.
          <br /><br />
          No Outside Alcohol Allowed
          <br /><br />
          Thank you for your understanding!
        </p>
      </main>
      <Footer />
    </div>
  )
}
