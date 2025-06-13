import { Link } from "react-router-dom"

function Home () {
  return (
    <section className="home-page">
      <h1 className="home-page-heading">Welcome to MovieMatcher!</h1>
      <div className="hero-text">
        <p>This app is designed to recommend movies for you based on your taste</p>
        <p>Go to the <Link className="in-text-link" to="/rate">Rate tab</Link> and rate some movies. Our algorithm will do its best to recommend you a movie that you will love based on your previous rates</p>
        <p>The more movies you rate the more accurate recommendations you will recieve</p>
      </div>
      <div className="hero-btns">
        <Link className="hero-btn filled-btn" to="/rate">Rate</Link>
        <Link className="hero-btn ghost-btn" to="/get-movie">Recommendations</Link>
      </div>
    </section>
  )
}

export default Home