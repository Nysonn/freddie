import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Tour = () => {
  const tourDates = [
    {
      id: 1,
      date: "Apr 15, 2024",
      venue: "Electric Arena",
      location: "Los Angeles, CA",
      ticketLink: "#",
      status: "On Sale"
    },
    // Add more tour dates here
  ]

  return (
    <div className="tour-page">
      <Header />
      <main className="tour-content">
        <section className="tour-hero">
          <div className="container">
            <h1>Tour Dates</h1>
            <p>Come experience the music live</p>
          </div>
        </section>
        
        <section className="tour-listings">
          <div className="container">
            {tourDates.map(show => (
              <div key={show.id} className="tour-item">
                <div className="tour-info">
                  <div className="date">{show.date}</div>
                  <div className="venue">{show.venue}</div>
                  <div className="location">{show.location}</div>
                </div>
                <div className="tour-action">
                  <span className="status">{show.status}</span>
                  <a href={show.ticketLink} className="ticket-link">
                    Get Tickets
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Tour
