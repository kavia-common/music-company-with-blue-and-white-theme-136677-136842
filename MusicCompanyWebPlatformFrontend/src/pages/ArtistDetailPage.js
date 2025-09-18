import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artists, albums } from '../store/data';

/**
 * Artist details page with bio, facts, discography, and related links.
 */
const ArtistDetailPage = () => {
  const { artistId } = useParams();
  const artist = artists.find(a => String(a.id) === artistId);

  if (!artist) {
    return (
      <div className="page container">
        <h1>Artist not found</h1>
        <p><Link to="/artists">Back to Artists</Link></p>
      </div>
    );
  }

  const artistAlbums = albums.filter(alb => alb.artistId === artist.id);

  return (
    <div className="page container">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link to="/artists">Artists</Link> <span aria-hidden="true">/</span> <span aria-current="page">{artist.name}</span>
      </nav>
      <header className="detail-header">
        <div className="avatar-lg" role="img" aria-label={`${artist.name} portrait`} />
        <div>
          <h1>{artist.name}</h1>
          <p className="muted">{artist.tagline}</p>
          <ul className="facts">
            <li><strong>Genre:</strong> {artist.genre}</li>
            <li><strong>Origin:</strong> {artist.origin}</li>
            <li><strong>Years Active:</strong> {artist.yearsActive}</li>
          </ul>
          <div className="social">
            {artist.social?.website && <a className="btn btn-ghost" href={artist.social.website} target="_blank" rel="noopener noreferrer">Website</a>}
            {artist.social?.twitter && <a className="btn btn-ghost" href={artist.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
            {artist.social?.instagram && <a className="btn btn-ghost" href={artist.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
          </div>
        </div>
      </header>

      <section aria-labelledby="bio-heading" className="section">
        <h2 id="bio-heading">Biography</h2>
        <p>{artist.bio}</p>
      </section>

      <section aria-labelledby="discography-heading" className="section">
        <h2 id="discography-heading">Discography</h2>
        <ul className="list">
          {artistAlbums.map(alb => (
            <li key={alb.id}>
              <Link to={`/albums/${alb.id}`}>{alb.title}</Link> • {alb.releaseYear} • {alb.genre}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ArtistDetailPage;
