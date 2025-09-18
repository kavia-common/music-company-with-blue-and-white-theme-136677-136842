import React, { useMemo, useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import AlbumCard from '../components/albums/AlbumCard';
import { albums, artists } from '../store/data';

/**
 * Albums catalog with grid/list toggle, filters, sorting, and search.
 */
const AlbumsPage = () => {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('newest');

  const suggestions = useMemo(() => {
    if (!query) return [];
    return albums
      .map(a => a.title)
      .filter(t => t.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  }, [query]);

  const genres = ['All', ...Array.from(new Set(albums.map(a => a.genre)))];

  const resolved = useMemo(() => {
    let list = albums.map(a => ({
      ...a,
      artistName: artists.find(ar => ar.id === a.artistId)?.name || 'Unknown'
    }));
    if (query) {
      list = list.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.description.toLowerCase().includes(query.toLowerCase()) ||
        a.artistName.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (genre !== 'All') list = list.filter(a => a.genre === genre);

    if (sort === 'newest') list = list.sort((a,b) => b.releaseYear - a.releaseYear);
    if (sort === 'popular') list = list.sort((a,b) => b.popularity - a.popularity);
    if (sort === 'alpha') list = list.sort((a,b) => a.title.localeCompare(b.title));
    return list;
  }, [query, genre, sort]);

  return (
    <div className="page container">
      <header className="page-header">
        <h1>Albums</h1>
        <p className="muted">Browse our catalog by genre, artist, and more.</p>
      </header>
      <div className="toolbar">
        <SearchBar
          id="album-search"
          label="Search albums"
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
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="alpha">A–Z</option>
          </select>
        </div>
      </div>

      <section aria-label="Album results">
        <div className="grid">
          {resolved.map(a => <AlbumCard key={a.id} album={a} />)}
        </div>
      </section>
    </div>
  );
};

export default AlbumsPage;
