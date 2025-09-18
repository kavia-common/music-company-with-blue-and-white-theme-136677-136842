import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Card for an album in grid/list.
 */
const AlbumCard = ({ album }) => {
  return (
    <article className="card album-card">
      <div className="card-media" aria-hidden="true">
        <div className="cover" role="img" aria-label={`${album.title} album cover`} />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </h3>
        <p className="card-meta">{album.artistName} • {album.releaseYear} • {album.genre}</p>
        <p className="card-desc">{album.description}</p>
      </div>
    </article>
  );
};

export default AlbumCard;
