import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero section with branding and primary CTAs.
 */
const Hero = () => {
  return (
    <section className="hero" aria-label="Brand hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">BlueWave Music</h1>
          <p className="hero-subtitle">
            Amplifying artists. Curating soundscapes. Delivering excellence.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" to="/artists">Explore Artists</Link>
            <Link className="btn btn-outline" to="/albums">View Albums</Link>
            <Link className="btn btn-ghost" to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Abstract blue wave shapes representing music waves" />
      </div>
    </section>
  );
};

export default Hero;
