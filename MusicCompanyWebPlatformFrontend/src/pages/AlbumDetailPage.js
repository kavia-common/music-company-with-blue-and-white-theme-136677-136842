import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { albums, artists } from '../store/data';

/**
 * Album details with track listing, streaming/purchase links, and navigation to artist.
 */
const AlbumDetailPage = () => {
  const { albumId } = useParams();
  const album = albums.find(a => String(a.id) === albumId);

  if (!album) {
    return (
      <div className="page container">
        <h1>Album not found</h1>
        <p><Link to="/albums">Back to Albums</Link></p>
      </div>
    );
  }

  const artist = artists.find(ar => ar.id === album.artistId);

  return (
    <div className="page container">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/albums">Albums</Link> <span aria-hidden="true">/</span> <span aria-current="page">{album.title}</span>
      </nav>
      <header className="detail-header">
        <div className="cover-lg" role="img" aria-label={`${album.title} cover art`} />
        <div>
          <h1>{album.title}</h1>
          <p className="muted">{artist ? <Link to={`/artists/${artist.id}`}>{artist.name}</Link> : 'Unknown Artist'}</p>
          <ul className="facts">
            <li><strong>Released:</strong> {album.releaseYear}</li>
            <li><strong>Genre:</strong> {album.genre}</li>
            <li><strong>Label:</strong> {album.label}</li>
          </ul>
          <p>{album.description}</p>
          <div className="cta-row">
            {album.links?.spotify && <a className="btn btn-primary" href={album.links.spotify} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>}
            {album.links?.apple && <a className="btn btn-outline" href={album.links.apple} target="_blank" rel="noopener noreferrer">Listen on Apple Music</a>}
            {album.links?.buy && <a className="btn btn-ghost" href={album.links.buy} target="_blank" rel="noopener noreferrer">Buy</a>}
          </div>
        </div>
      </header>

      <section aria-labelledby="tracks-heading" className="section">
        <h2 id="tracks-heading">Track listing</h2>
        <ol className="tracks">
          {album.tracks.map((t, i) => (
            <li key={`${album.id}-track-${i}`}>
              <span className="track-name">{t.title}</span>
              <span className="track-duration">{t.duration}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default AlbumDetailPage;
