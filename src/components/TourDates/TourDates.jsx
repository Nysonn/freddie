import './TourDates.css'

const tourDates = [
  {
    id: 1,
    date: "Apr 15, 2024",
    venue: "Electric Arena",
    location: "Los Angeles, CA",
    ticketLink: "#",
  },
  {
    id: 2,
    date: "Apr 22, 2024",
    venue: "Sound Factory",
    location: "New York, NY",
    ticketLink: "#",
  },
  {
    id: 3,
    date: "May 5, 2024",
    venue: "Bass Club",
    location: "Miami, FL",
    ticketLink: "#",
  },
  // Add more tour dates as needed
]

const TourDates = () => {
  return (
    <section className="tour-section" id="tour">
      <div className="container">
        <h2 className="section-title">Upcoming Shows</h2>
        <div className="tour-dates-container">
          {tourDates.map((show) => (
            <div key={show.id} className="tour-date-card">
              <div className="date-info">
                <span className="show-date">{show.date}</span>
              </div>
              <div className="venue-info">
                <h3 className="venue-name">{show.venue}</h3>
                <p className="venue-location">{show.location}</p>
              </div>
              <div className="ticket-action">
                <a href={show.ticketLink} className="ticket-button">
                  Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="tour-cta">
          <a href="/tour" className="view-all-button">View All Shows</a>
        </div>
      </div>
    </section>
  )
}

export default TourDates
