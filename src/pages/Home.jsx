import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import AlbumsSection from '../components/AlbumsSection/AlbumsSection'
import TourDates from '../components/TourDates/TourDates'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <AlbumsSection />
      <TourDates />
      <Footer />
    </div>
  )
}

export default Home
