import React, { useState } from 'react';
import InquiryForm from '../components/forms/InquiryForm';

/**
 * Services overview with expandable details and inquiry form.
 */
const servicesData = [
  {
    id: 'production',
    title: 'Music Production',
    summary: 'End-to-end production from songwriting to mastering.',
    details: 'Our studios and producers craft high-fidelity records tailored to your artistic vision. We provide composition, recording, mixing, mastering, and release support.',
    badge: 'Top Rated'
  },
  {
    id: 'management',
    title: 'Artist Management',
    summary: 'Career strategy, branding, and growth for artists.',
    details: 'We partner with artists for long-term career development, including branding, marketing, touring, partnerships, and revenue optimization.',
    badge: 'Premium'
  },
  {
    id: 'events',
    title: 'Event Management',
    summary: 'Planning and executing world-class events.',
    details: 'From showcases to festivals, we handle logistics, production, talent, promotion, and on-site operations for memorable experiences.',
    badge: 'Popular'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    summary: 'Advisory services for labels, venues, and brands.',
    details: 'Market analysis, strategy, rights management, and digital transformation for stakeholders across the music ecosystem.',
    badge: 'New'
  }
];

const ServicesPage = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Services</h1>
        <p className="muted">Solutions designed to elevate your music journey.</p>
      </header>

      <section aria-label="Services overview" className="grid-2">
        <div>
          {servicesData.map(s => (
            <article key={s.id} className="service-card">
              <div className="service-header">
                <h2>{s.title}</h2>
                <span className="badge">{s.badge}</span>
              </div>
              <p className="muted">{s.summary}</p>
              <button
                className="btn btn-ghost"
                aria-expanded={expanded === s.id}
                aria-controls={`svc-${s.id}`}
                onClick={() => setExpanded(expanded === s.id ? null : s.id)}
              >
                {expanded === s.id ? 'Hide details' : 'View details'}
              </button>
              {expanded === s.id && (
                <div id={`svc-${s.id}`} className="service-details">
                  <p>{s.details}</p>
                </div>
              )}
              <a className="btn btn-primary" href="#inquiry">Request More Info</a>
            </article>
          ))}
        </div>
        <aside id="inquiry" aria-label="Inquiry form">
          <div className="sticky-card">
            <h2>Business Inquiry</h2>
            <p className="muted small">Tell us about your needs. We’ll respond ASAP.</p>
            <InquiryForm defaultService="" />
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ServicesPage;
