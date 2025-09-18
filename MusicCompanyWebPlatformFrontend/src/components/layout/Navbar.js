import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Accessible responsive navigation bar with mobile menu and theme toggle.
 */
const Navbar = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' active' : '');

  return (
    <header className="navbar" role="banner">
      <div className="container nav-container">
        <Link to="/" className="brand" aria-label="Music Company Home">
          <span className="brand-logo" aria-hidden="true">🎵</span>
          <span className="brand-text">BlueWave Music</span>
        </Link>

        <button
          className="menu-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon" aria-hidden="true">☰</span>
          <span className="visually-hidden">{open ? 'Close' : 'Open'} menu</span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${open ? 'open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/artists" className={linkClass} onClick={() => setOpen(false)}>Artists</NavLink>
          <NavLink to="/albums" className={linkClass} onClick={() => setOpen(false)}>Albums</NavLink>
          <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/admin" className={linkClass} onClick={() => setOpen(false)}>Admin</NavLink>
          <button
            className="btn theme-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
            <span className="btn-text">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
