import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Toggle scroll behavior when menu is opened/closed
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'; // Re-enable scroll
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      window.scrollTo(0, 0); // Scroll to the top when menu opens
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">FREDDIE</span>
        </Link>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/music" className="nav-link" onClick={() => setIsOpen(false)}>
              Music
            </Link>
            <Link to="/tour" className="nav-link" onClick={() => setIsOpen(false)}>
              Tour
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
          <div className="nav-footer">
            <Link to="/shop" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        </nav>

        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
