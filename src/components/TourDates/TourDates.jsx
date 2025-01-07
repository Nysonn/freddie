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
  {
    id: 4,
    date: "May 12, 2024",
    venue: "Grand Theater",
    location: "Chicago, IL",
    ticketLink: "#",
  },
  {
    id: 5,
    date: "May 19, 2024",
    venue: "Starlight Amphitheater",
    location: "Dallas, TX",
    ticketLink: "#",
  },
  {
    id: 6,
    date: "May 26, 2024",
    venue: "Sunset Pavilion",
    location: "San Francisco, CA",
    ticketLink: "#",
  },
  {
    id: 7,
    date: "Jun 2, 2024",
    venue: "Riverfront Stage",
    location: "Nashville, TN",
    ticketLink: "#",
  },
  {
    id: 8,
    date: "Jun 9, 2024",
    venue: "City Lights Hall",
    location: "Denver, CO",
    ticketLink: "#",
  },
  {
    id: 9,
    date: "Jun 16, 2024",
    venue: "Ocean Breeze Center",
    location: "Seattle, WA",
    ticketLink: "#",
  },
  {
    id: 10,
    date: "Jun 23, 2024",
    venue: "Mountain View Arena",
    location: "Phoenix, AZ",
    ticketLink: "#",
  },
  {
    id: 11,
    date: "Jun 30, 2024",
    venue: "Blue Moon Theater",
    location: "Atlanta, GA",
    ticketLink: "#",
  },
  {
    id: 12,
    date: "Jul 7, 2024",
    venue: "Capital Music Hall",
    location: "Washington, D.C.",
    ticketLink: "#",
  },
  {
    id: 13,
    date: "Jul 14, 2024",
    venue: "Skyline Stadium",
    location: "Boston, MA",
    ticketLink: "#",
  },
  {
    id: 14,
    date: "Jul 21, 2024",
    venue: "Harbor Lights Arena",
    location: "San Diego, CA",
    ticketLink: "#",
  },
  {
    id: 15,
    date: "Jul 28, 2024",
    venue: "Rustic Fields Amphitheater",
    location: "Austin, TX",
    ticketLink: "#",
  },
  {
    id: 16,
    date: "Aug 4, 2024",
    venue: "Freedom Hall",
    location: "Philadelphia, PA",
    ticketLink: "#",
  },
];

const TourDates = () => {
  return (
    <section className="tour-section" id="tour">
      <div className="container">
        <h2 className="section-title">Upcoming Shows</h2>
        <div className="tour-dates-container">
          {tourDates.map((show, index) => (
            <div 
              key={show.id} 
              className="tour-date-card"
              style={{ '--index': index }}
            >
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
