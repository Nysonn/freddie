import { useEffect, useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">Freddie Music</h1>
        <p className="hero-subtitle">Experience the Sound of Tomorrow</p>
        <div className="hero-cta">
          <a href="#latest" className="cta-button">Latest Releases</a>
          <a href="#tour" className="cta-button outline">Tour Dates</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
