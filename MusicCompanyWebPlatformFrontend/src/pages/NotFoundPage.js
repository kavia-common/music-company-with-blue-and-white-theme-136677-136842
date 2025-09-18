import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 page.
 */
const NotFoundPage = () => (
  <div className="page container">
    <h1>Page not found</h1>
    <p>We couldn't find what you were looking for.</p>
    <Link className="btn btn-primary" to="/">Back to Home</Link>
  </div>
);

export default NotFoundPage;
