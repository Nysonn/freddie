import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import FreddieGuy from '../../public/images/freddie-guy.jpg';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <Header />
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title">Contact</h2>
            <div className="header-divider"></div>
            <p className="contact-subtitle">Management & Representation</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-group">
                <h3>Management</h3>
                <p>Universal Music Group</p>
                <p>management@example.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="info-group">
                <h3>Booking</h3>
                <p>Live Nation Entertainment</p>
                <p>booking@example.com</p>
                <p>+1 (555) 234-5678</p>
              </div>
              <div className="info-group">
                <h3>Press</h3>
                <p>Media Relations</p>
                <p>press@example.com</p>
                <p>+1 (555) 345-6789</p>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-group">
                <h3>Record Label</h3>
                <p>Columbia Records</p>
                <p>label@example.com</p>
                <p>+1 (555) 456-7890</p>
              </div>
              <div className="info-group">
                <h3>Legal</h3>
                <p>Entertainment Law Partners LLP</p>
                <p>legal@example.com</p>
                <p>+1 (555) 567-8901</p>
              </div>
              <div className="info-group">
                <h3>Licensing</h3>
                <p>Global Licensing Division</p>
                <p>licensing@example.com</p>
                <p>+1 (555) 678-9012</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
