import React, { useState } from 'react';

/**
 * Accessible contact form with validation, honeypot anti-spam, and privacy consent.
 */
// PUBLIC_INTERFACE
const ContactForm = ({ onSubmitSuccess }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email is required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    if (!consent) e.consent = 'Please consent to the privacy policy';
    // honeypot company field should be empty
    if (form.company) e.company = 'Spam detected';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // No backend: simulate submission
    setSubmitted(true);
    onSubmitSuccess?.(form);
  };

  const update = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="form-success">
        <h3>Thank you!</h3>
        <p>We received your message and will respond within 2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-describedby="contact-privacy-note">
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" value={form.name} onChange={update('name')} required />
          {errors.name && <div className="error" role="alert">{errors.name}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={update('email')} required />
          {errors.email && <div className="error" role="alert">{errors.email}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input id="subject" value={form.subject} onChange={update('subject')} required />
          {errors.subject && <div className="error" role="alert">{errors.subject}</div>}
        </div>
        <div className="form-field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} value={form.message} onChange={update('message')} required />
          {errors.message && <div className="error" role="alert">{errors.message}</div>}
        </div>

        {/* Honeypot field - hidden from users */}
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" value={form.company} onChange={update('company')} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-field full checkbox">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-describedby="contact-privacy-note"
          />
          <label htmlFor="consent">
            I agree to the processing of my personal data as described in the privacy notice.
          </label>
          {errors.consent && <div className="error" role="alert">{errors.consent}</div>}
        </div>
        <div id="contact-privacy-note" className="muted small full">
          Your information is used solely to respond to your inquiry. We do not sell your data.
        </div>

        <div className="form-actions full">
          <button className="btn btn-primary" type="submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
