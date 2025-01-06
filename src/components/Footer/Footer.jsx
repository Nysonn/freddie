import { FaInstagram, FaTwitter, FaSpotify, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Freddie Music</h3>
            <p className="footer-description">
              Experience the sound of tomorrow with cutting-edge electronic music.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="/music">Music</a>
              <a href="/tour">Tour</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Spotify">
                <FaSpotify />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Freddie Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
