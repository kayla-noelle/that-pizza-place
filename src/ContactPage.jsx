import Navbar from './Navbar'
import Footer from './Footer'

export default function ContactPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <div className="menu-page-banner">
          <h1 className="menu-page-banner-title">Contact Us</h1>
        </div>
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
        <form className="community-form">
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
          <button type="submit" className="navbar-cta community-form-submit">Send</button>
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
