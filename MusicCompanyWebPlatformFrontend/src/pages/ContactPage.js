import React from 'react';
import ContactForm from '../components/forms/ContactForm';

/**
 * Contact page with general inquiry form and company details.
 */
const ContactPage = () => {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Contact Us</h1>
        <p className="muted">We’re here to help—reach out anytime.</p>
      </header>

      <section className="grid-2">
        <div>
          <h2>Send a message</h2>
          <ContactForm />
        </div>
        <aside>
          <div className="info-card">
            <h3>Company</h3>
            <p>BlueWave Music</p>
            <p>123 Harmony Ave, Suite 100</p>
            <p>Melody City, CA 90000</p>
            <p>Email: hello@bluewavemusic.example</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="info-card">
            <h3>Privacy</h3>
            <p className="small muted">
              We value your privacy. Your data is used to process your request and is not shared with third parties without consent.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ContactPage;
