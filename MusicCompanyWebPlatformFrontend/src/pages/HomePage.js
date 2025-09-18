import React from 'react';
import Hero from '../components/common/Hero';

/**
 * HomePage: Branding, hero, mission and offerings overview.
 */
const HomePage = () => {
  return (
    <div className="page">
      <Hero />
      <section className="section" aria-labelledby="mission-heading">
        <div className="container">
          <h2 id="mission-heading">Our Mission</h2>
          <p className="lead">
            We empower artists and curate unforgettable music experiences through production,
            management, and events—grounded in quality, integrity, and innovation.
          </p>
          <div className="grid-3">
            <div className="info">
              <h3>Artist Promotion</h3>
              <p>Tailored strategies to grow audiences and amplify voices.</p>
            </div>
            <div className="info">
              <h3>Music Production</h3>
              <p>World-class production with a focus on craft and authenticity.</p>
            </div>
            <div className="info">
              <h3>Event Experiences</h3>
              <p>From intimate showcases to large-scale events, we deliver.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt" aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading">Discover our roster and catalog</h2>
          <p>Explore artists, browse albums, and learn how we can partner.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/artists">Discover Artists</a>
            <a className="btn btn-outline" href="/albums">Browse Albums</a>
            <a className="btn btn-ghost" href="/services">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
