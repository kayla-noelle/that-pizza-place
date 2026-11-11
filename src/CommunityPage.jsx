import Navbar from './Navbar'
import Footer from './Footer'

export default function CommunityPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <div className="menu-page-banner">
          <h1 className="menu-page-banner-title">Community</h1>
        </div>
        <h3 className="menu-section-subtitle">SPONSORSHIPS AND IN-STORE FUNDRAISERS</h3>
        <p className="menu-page-intro">
          That Pizza Place is a long standing supporter of the community.
          Whether team sports or special causes, we love to give back!
        </p>
        <h3 className="menu-section-subtitle">LARGE GROUP GATHERINGS</h3>
        <p className="menu-page-intro">
          That Pizza Place is the perfect spot for your next gathering! Whether a birthday party, sports banquet or large family outing, we are the place for you.
          <br /><br />
          <strong>Please fill out the request below and we will see where we can help.</strong>
        </p>
        <form className="community-form" name="community-fundraising" method="POST" netlify="true">
          <input type="hidden" name="form-name" value="community-fundraising" />
          <div className="community-form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="community-form-group">
            <label htmlFor="organization">Organization/Entity Name</label>
            <input type="text" id="organization" name="organization" required />
          </div>
          <div className="community-form-group">
            <label htmlFor="fundraisingDate">Desired Fundraising Date</label>
            <input type="date" id="fundraisingDate" name="fundraisingDate" required />
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
        <h3 className="menu-section-subtitle">Fundraising Expectations and Limitations:</h3>
        <p className="menu-page-intro">
          Participating organizations must promote the fundraising event to their community (email, social media etc.). No other discounts, specials, or coupons will be honored in conjunction with fundraising transactions. Per California Law, the sale of alcoholic beverages cannot count towards your sales.
        </p>
      </main>
      <Footer />
    </div>
  )
}
