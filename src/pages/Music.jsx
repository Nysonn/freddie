import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Music = () => {
  return (
    <div className="music-page">
      <Header />
      <main className="music-content">
        <section className="featured-releases">
          <div className="container">
            <h1>Music</h1>
            <div className="music-grid">
              {/* Featured Albums Section */}
              <div className="featured-album">
                <img src="/src/assets/album1.jpg" alt="Featured Album" />
                <div className="album-info">
                  <h2>Latest Release</h2>
                  <p>Stream now on all platforms</p>
                  <div className="streaming-links">
                    <a href="#spotify" className="stream-button">Spotify</a>
                    <a href="#apple" className="stream-button">Apple Music</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Music
