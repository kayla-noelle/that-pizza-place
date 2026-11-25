export default function Award() {
  return (
    <section className="award">
      <div className="award-left">
        <p className="award-eyebrow">As seen in the Best of North County</p>
        <h2 className="award-title">Voted Best Pizza in North County <span className="award-years">2025 &amp; 2026</span></h2>
      </div>
      <div className="award-right">
        <div className="award-photo">
          <img
            src="/ThatPizzaPlace_24.png"
            alt="That Pizza Place"
            className="award-image"
          />
          <img src="/images.jpg" alt="The Best of North County, The Coast News" className="award-logo" />
        </div>
      </div>
    </section>
  )
}
