import React, { useState } from 'react';

/**
 * Business inquiry form with routing-friendly "service" prefill, validation and anti-spam.
 */
// PUBLIC_INTERFACE
const InquiryForm = ({ defaultService = '' , onSubmitSuccess }) => {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    inquiryType: defaultService,
    message: '',
    botField: ''
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.companyName.trim()) e.companyName = 'Company name is required';
    if (!form.contactPerson.trim()) e.contactPerson = 'Contact name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email is required';
    if (!form.inquiryType.trim()) e.inquiryType = 'Inquiry type is required';
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    // honeypot
    if (form.botField) e.botField = 'Spam detected';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setDone(true);
    onSubmitSuccess?.(form);
  };

  const update = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }));

  if (done) {
    return (
      <div role="status" aria-live="polite" className="form-success">
        <h3>Inquiry submitted</h3>
        <p>Our team will reach out shortly to discuss your needs.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="companyName">Company Name</label>
          <input id="companyName" value={form.companyName} onChange={update('companyName')} required />
          {errors.companyName && <div className="error" role="alert">{errors.companyName}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="contactPerson">Contact Person</label>
          <input id="contactPerson" value={form.contactPerson} onChange={update('contactPerson')} required />
          {errors.contactPerson && <div className="error" role="alert">{errors.contactPerson}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={update('email')} required />
          {errors.email && <div className="error" role="alert">{errors.email}</div>}
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={update('phone')} />
        </div>
        <div className="form-field">
          <label htmlFor="inquiryType">Inquiry Type</label>
          <select id="inquiryType" value={form.inquiryType} onChange={update('inquiryType')} required>
            <option value="">Select a service</option>
            <option>Music Production</option>
            <option>Artist Management</option>
            <option>Event Management</option>
            <option>Consulting</option>
          </select>
          {errors.inquiryType && <div className="error" role="alert">{errors.inquiryType}</div>}
        </div>
        <div className="form-field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} value={form.message} onChange={update('message')} required />
          {errors.message && <div className="error" role="alert">{errors.message}</div>}
        </div>

        {/* Honeypot */}
        <div className="visually-hidden" aria-hidden="true">
          <label htmlFor="botField">Leave this field blank</label>
          <input id="botField" value={form.botField} onChange={update('botField')} tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-actions full">
          <button className="btn btn-primary" type="submit">Submit Inquiry</button>
        </div>
      </div>
    </form>
  );
};

export default InquiryForm;
