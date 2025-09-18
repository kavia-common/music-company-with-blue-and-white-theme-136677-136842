import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer with brand, quick links, and privacy notice.
 */
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span aria-hidden="true">🎵</span> BlueWave Music
          </div>
          <p className="muted">Empowering artists. Elevating sound.</p>
        </div>
        <div>
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#privacy" onClick={(e)=>e.preventDefault()}>Privacy</a></li>
            <li><a href="#accessibility" onClick={(e)=>e.preventDefault()}>Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BlueWave Music. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
