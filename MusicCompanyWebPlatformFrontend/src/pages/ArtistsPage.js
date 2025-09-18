import React, { useMemo, useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import ArtistCard from '../components/artists/ArtistCard';
import { artists } from '../store/data';

/**
 * Artists listing with search, filter by genre, and sort options.
 */
const ArtistsPage = () => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('name');

  const suggestions = useMemo(() => {
    if (!query) return [];
    return artists
      .map(a => a.name)
      .filter(n => n.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  }, [query]);

  const genres = ['All', ...Array.from(new Set(artists.map(a => a.genre)))];

  const filtered = useMemo(() => {
    let list = artists.filter(a =>
      a.name.toLowerCase().includes(query.toLowerCase())
      || a.tagline.toLowerCase().includes(query.toLowerCase())
    );
    if (genre !== 'All') list = list.filter(a => a.genre === genre);
    if (sort === 'name') list = list.sort((a,b) => a.name.localeCompare(b.name));
    if (sort === 'popularity') list = list.sort((a,b) => b.popularity - a.popularity);
    if (sort === 'recent') list = list.sort((a,b) => b.addedAt.localeCompare(a.addedAt));
    return list;
  }, [query, genre, sort]);

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Artists</h1>
        <p className="muted">Search, filter, and explore our roster.</p>
      </header>

      <div className="toolbar">
        <SearchBar
          id="artist-search"
          label="Search artists"
          query={query}
          onChange={setQuery}
          suggestions={suggestions}
          onSuggestionClick={(s) => setQuery(s)}
        />
        <div className="filters">
          <label htmlFor="genre">Genre</label>
          <select id="genre" value={genre} onChange={(e)=>setGenre(e.target.value)}>
            {genres.map(g => <option key={g} value={g}>{g}</option>)}
          </select>

          <label htmlFor="sort">Sort by</label>
          <select id="sort" value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="popularity">Popularity</option>
            <option value="recent">Recently Added</option>
          </select>
        </div>
      </div>

      <section aria-label="Artist results">
        <div className="grid">
          {filtered.map(a => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistsPage;
