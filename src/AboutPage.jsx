import Navbar from './Navbar'
import Footer from './Footer'

export default function AboutPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <div className="menu-page-banner">
          <h1 className="menu-page-banner-title">Our Story</h1>
        </div>
        <div className="about-page-content">
          <div className="about-page-images">
            <img src="/about/unnamed.jpg" alt="That Pizza Place" />
            <img src="/about/Carboard.jpg" alt="Cardboard Hill" />
            <img src="/about/ThatPizzaPlace_1.jpg" alt="That Pizza Place" />
          </div>
          <div className="about-page-text">
            <h2 className="about-page-title">Feel Like You're Home</h2>
            <p className="about-page-paragraph">
              Back in 1978, a new pizza restaurant opened in Carlsbad, CA. Owner Mike Pfankuch named it “That Pizza Place,” with the goal of creating a space where families and friends of Carlsbad could gather as a community, eat good food, and create memories. That is exactly what became of it. Mike and his family went on to operate That Pizza Place for over 40 years. Over the years countless families and teams came into That Pizza Place for its great pizza and local vibe. Known for community, connection, great food, youth sports and family, That Pizza Place was beloved by many. During the height of the COVID-19 pandemic, Mike made the decision to close the doors to his restaurant. The devoted customer base, which spans generations, was devastated to see this special place close.
            </p>
            <p className="about-page-paragraph">
              When four long-time Carlsbad friends learned of this news, they immediately decided they could not let this slice of Carlsbad history (and part of their own childhood history) end. There was only one thing to do…re-open That Pizza Place to ensure the heart and pride of Carlsbad would live on for generations to come. John Chavez, Chris Chiarappa, Troy Guerra, and Thadd MacNeal made it their mission to keep That Pizza Place’s doors open, honoring original recipes and its support of the community and youth sports and, of course, adding some new touches as well.
            </p>
            <p className="about-page-paragraph">
              John, Chris, Troy, and Thadd have been friends for over four decades. Their childhood was spent at That Pizza Place. After playing Pop Warner games at Valley Junior High, baseball games at Chase Field, and football games at Carlsbad High School, they’d head to That Pizza Place with their teammates and families-of course, after taking a couple runs on “Cardboard Hill!”
            </p>
            <p className="about-page-paragraph">
              After the four friends graduated from Carlsbad High School, some stayed local, and others moved away. However, what remained constant were their memories of times spent at That Pizza Place. As they started their own families, That Pizza Place continued to hold a special place in their lives; taking their children to the restaurant after the games or meeting old childhood friends who were back in town.
            </p>
            <p className="about-page-paragraph">
              If you’ve been to That Pizza Place before, we hope you remember with fondness the memories made at the restaurant. If you are a new to it, we can’t wait for you to experience all that is That Pizza Place and make new memories with your friends and family. As you enter, we hope you feel the love we felt growing up! Join us as we re-open the doors to That Pizza Place, a time-honored Carlsbad tradition, as we continue to support the community and provide a space to gather and enjoy one another, for many, many years to come!
            </p>
          </div>
        </div>

        <div className="about-page-content-mobile">
          <h2 className="about-page-title">Feel Like You're Home</h2>
          <img src="/about/unnamed.jpg" alt="That Pizza Place" />
          <p className="about-page-paragraph">
            Back in 1978, a new pizza restaurant opened in Carlsbad, CA. Owner Mike Pfankuch named it “That Pizza Place,” with the goal of creating a space where families and friends of Carlsbad could gather as a community, eat good food, and create memories. That is exactly what became of it. Mike and his family went on to operate That Pizza Place for over 40 years. Over the years countless families and teams came into That Pizza Place for its great pizza and local vibe. Known for community, connection, great food, youth sports and family, That Pizza Place was beloved by many. During the height of the COVID-19 pandemic, Mike made the decision to close the doors to his restaurant. The devoted customer base, which spans generations, was devastated to see this special place close.
          </p>
          <img src="/about/Carboard.jpg" alt="Cardboard Hill" />
          <p className="about-page-paragraph">
            When four long-time Carlsbad friends learned of this news, they immediately decided they could not let this slice of Carlsbad history (and part of their own childhood history) end. There was only one thing to do…re-open That Pizza Place to ensure the heart and pride of Carlsbad would live on for generations to come. John Chavez, Chris Chiarappa, Troy Guerra, and Thadd MacNeal made it their mission to keep That Pizza Place’s doors open, honoring original recipes and its support of the community and youth sports and, of course, adding some new touches as well.
          </p>
          <img src="/about/ThatPizzaPlace_1.jpg" alt="That Pizza Place" />
          <p className="about-page-paragraph">
            John, Chris, Troy, and Thadd have been friends for over four decades. Their childhood was spent at That Pizza Place. After playing Pop Warner games at Valley Junior High, baseball games at Chase Field, and football games at Carlsbad High School, they’d head to That Pizza Place with their teammates and families-of course, after taking a couple runs on “Cardboard Hill!”
          </p>
          <p className="about-page-paragraph">
            After the four friends graduated from Carlsbad High School, some stayed local, and others moved away. However, what remained constant were their memories of times spent at That Pizza Place. As they started their own families, That Pizza Place continued to hold a special place in their lives; taking their children to the restaurant after the games or meeting old childhood friends who were back in town.
          </p>
          <p className="about-page-paragraph">
            If you’ve been to That Pizza Place before, we hope you remember with fondness the memories made at the restaurant. If you are a new to it, we can’t wait for you to experience all that is That Pizza Place and make new memories with your friends and family. As you enter, we hope you feel the love we felt growing up! Join us as we re-open the doors to That Pizza Place, a time-honored Carlsbad tradition, as we continue to support the community and provide a space to gather and enjoy one another, for many, many years to come!
          </p>
        </div>
        <div className="about-page-owners">
          <h3 className="menu-section-subtitle">MEET THE OWNERS</h3>
          <p className="about-page-paragraph">
            Top Row: Troy Guerra & Chris Chiarappa
            <br />
            Bottom Row: Thadd MacNeal & Johnny Chavez
          </p>
          <img src="/TPP-1978.JPEG" alt="That Pizza Place Owners" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
