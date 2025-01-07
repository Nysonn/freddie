import './AlbumsSection.css'
import LoveInWaters from '../../../public/images/love-in-waters.jpg'
import MatthiasGroene from '../../../public/images/matthias-groene.jpg'
import TimaGuitar from '../../../public/images/tima-guitar.jpg'

const albums = [
  {
    id: 1,
    title: "Summer Vibes",
    image: LoveInWaters, 
    year: "2024",
  },
  {
    id: 2,
    title: "Electric Dreams",
    image: MatthiasGroene,
    year: "2023",
  },
  {
    id: 3,
    title: "Night Rhythm",
    image: TimaGuitar,
    year: "2023",
  },
  // Add more albums as needed
]

const AlbumsSection = () => {
  return (
    <section className="albums-section" id="latest">
      <div className="container">
        <h2 className="section-title">Latest Releases</h2>
        <div className="albums-grid">
          {albums.map((album, index) => (
            <div 
              key={album.id} 
              className="album-card"
              style={{ '--index': index }}
            >
              <div className="album-image-container">
                <img src={album.image} alt={album.title} className="album-image" />
                <div className="album-overlay">
                  <button className="play-button">Listen Now</button>
                </div>
              </div>
              <h3 className="album-title">{album.title}</h3>
              <p className="album-year">{album.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AlbumsSection 