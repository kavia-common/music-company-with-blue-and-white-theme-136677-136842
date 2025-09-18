import React, { useMemo, useState } from 'react';
import { artists as initialArtists, albums as initialAlbums, services as initialServices } from '../store/data';

/**
 * Simple admin/content management UI to add/edit/remove artists, albums, services in-memory.
 * This is frontend-only and demonstrates extensibility for future backend/CMS integration.
 */
const AdminPage = () => {
  const [artists, setArtists] = useState(initialArtists);
  const [albums, setAlbums] = useState(initialAlbums);
  const [services, setServices] = useState(initialServices);

  const [newArtist, setNewArtist] = useState({ name: '', genre: '', tagline: '' });
  const [newAlbum, setNewAlbum] = useState({ title: '', artistId: '', releaseYear: '', genre: '' });
  const [newService, setNewService] = useState({ title: '', summary: '' });

  const artistOptions = useMemo(() => artists.map(a => ({ id: a.id, name: a.name })), [artists]);

  const addArtist = (e) => {
    e.preventDefault();
    if (!newArtist.name.trim()) return;
    const next = { 
      id: Math.max(...artists.map(a=>a.id)) + 1, 
      name: newArtist.name.trim(), 
      genre: newArtist.genre.trim() || 'Unknown', 
      tagline: newArtist.tagline.trim() || '', 
      yearsActive: '2020–Present', 
      origin: 'N/A', 
      bio: '', 
      popularity: 0, 
      addedAt: new Date().toISOString() 
    };
    setArtists(prev => [...prev, next]);
    setNewArtist({ name: '', genre: '', tagline: '' });
  };

  const addAlbum = (e) => {
    e.preventDefault();
    if (!newAlbum.title.trim() || !newAlbum.artistId) return;
    const next = { 
      id: Math.max(...albums.map(a=>a.id)) + 1, 
      title: newAlbum.title.trim(), 
      artistId: Number(newAlbum.artistId), 
      releaseYear: Number(newAlbum.releaseYear) || new Date().getFullYear(), 
      genre: newAlbum.genre.trim() || 'Unknown', 
      label: 'Independent', 
      description: '', 
      tracks: [], 
      popularity: 0, 
      links: {} 
    };
    setAlbums(prev => [...prev, next]);
    setNewAlbum({ title: '', artistId: '', releaseYear: '', genre: '' });
  };

  const addService = (e) => {
    e.preventDefault();
    if (!newService.title.trim()) return;
    const next = { id: Math.max(...services.map(s=>s.id)) + 1, title: newService.title.trim(), summary: newService.summary.trim() };
    setServices(prev => [...prev, next]);
    setNewService({ title: '', summary: '' });
  };

  const removeArtist = (id) => setArtists(prev => prev.filter(a => a.id !== id));
  const removeAlbum = (id) => setAlbums(prev => prev.filter(a => a.id !== id));
  const removeService = (id) => setServices(prev => prev.filter(s => s.id !== id));

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Admin</h1>
        <p className="muted">Manage content for artists, albums, and services.</p>
      </header>

      <section className="section" aria-labelledby="artists-admin">
        <h2 id="artists-admin">Artists</h2>
        <form className="inline-form" onSubmit={addArtist}>
          <input placeholder="Name" value={newArtist.name} onChange={(e)=>setNewArtist(a=>({...a, name:e.target.value}))} required />
          <input placeholder="Genre" value={newArtist.genre} onChange={(e)=>setNewArtist(a=>({...a, genre:e.target.value}))} />
          <input placeholder="Tagline" value={newArtist.tagline} onChange={(e)=>setNewArtist(a=>({...a, tagline:e.target.value}))} />
          <button className="btn btn-primary" type="submit">Add Artist</button>
        </form>
        <ul className="admin-list">
          {artists.map(a => (
            <li key={a.id}>
              <span>{a.name} • {a.genre}</span>
              <button className="btn btn-ghost" onClick={()=>removeArtist(a.id)} aria-label={`Remove ${a.name}`}>Remove</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="albums-admin">
        <h2 id="albums-admin">Albums</h2>
        <form className="inline-form" onSubmit={addAlbum}>
          <input placeholder="Title" value={newAlbum.title} onChange={(e)=>setNewAlbum(s=>({...s, title:e.target.value}))} required />
          <select value={newAlbum.artistId} onChange={(e)=>setNewAlbum(s=>({...s, artistId:e.target.value}))} required aria-label="Artist">
            <option value="">Artist</option>
            {artistOptions.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
          <input type="number" placeholder="Year" value={newAlbum.releaseYear} onChange={(e)=>setNewAlbum(s=>({...s, releaseYear:e.target.value}))} />
          <input placeholder="Genre" value={newAlbum.genre} onChange={(e)=>setNewAlbum(s=>({...s, genre:e.target.value}))} />
          <button className="btn btn-primary" type="submit">Add Album</button>
        </form>
        <ul className="admin-list">
          {albums.map(a => (
            <li key={a.id}>
              <span>{a.title} • {a.genre}</span>
              <button className="btn btn-ghost" onClick={()=>removeAlbum(a.id)} aria-label={`Remove ${a.title}`}>Remove</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="services-admin">
        <h2 id="services-admin">Services</h2>
        <form className="inline-form" onSubmit={addService}>
          <input placeholder="Title" value={newService.title} onChange={(e)=>setNewService(s=>({...s, title:e.target.value}))} required />
          <input placeholder="Summary" value={newService.summary} onChange={(e)=>setNewService(s=>({...s, summary:e.target.value}))} />
          <button className="btn btn-primary" type="submit">Add Service</button>
        </form>
        <ul className="admin-list">
          {services.map(s => (
            <li key={s.id}>
              <span>{s.title}</span>
              <button className="btn btn-ghost" onClick={()=>removeService(s.id)} aria-label={`Remove ${s.title}`}>Remove</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Extensibility</h2>
        <p className="small muted">
          This admin UI updates in-memory data only. For a backend or CMS, integrate via the data store layer in src/store and replace in-memory arrays with API calls.
        </p>
      </section>
    </div>
  );
};

export default AdminPage;
