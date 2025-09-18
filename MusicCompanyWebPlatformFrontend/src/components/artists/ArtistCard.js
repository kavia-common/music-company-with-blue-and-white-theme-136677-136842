import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Card for an artist in grid/list.
 */
const ArtistCard = ({ artist }) => {
  return (
    <article className="card artist-card">
      <div className="card-media" aria-hidden="true">
        <div className="avatar" role="img" aria-label={`${artist.name} avatar`} />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
        </h3>
        <p className="card-meta">{artist.genre} • Active since {artist.yearsActive}</p>
        <p className="card-desc">{artist.tagline}</p>
      </div>
    </article>
  );
};

export default ArtistCard;
