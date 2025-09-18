import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SkipLinks from './SkipLinks';
import '../../styles/theme.css';
import '../../styles/layout.css';

/**
 * Layout wraps all pages with navigation and footer, sets theme and provides skip links.
 */
const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light'); // blue/white default

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell">
      <SkipLinks />
      <a className="visually-hidden" href="#main" aria-hidden="false">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main id="main" tabIndex={-1} className="main-content" role="main" aria-live="polite">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
