import React from 'react';

/**
 * Accessible search bar with label and auto-complete support (basic suggestions).
 */
const SearchBar = ({ id, label, query, onChange, placeholder = 'Search...', suggestions = [], onSuggestionClick }) => {
  return (
    <div className="searchbar">
      <label className="searchbar-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        type="search"
        className="searchbar-input"
        value={query}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-autocomplete="list"
        aria-controls={`${id}-listbox`}
      />
      {suggestions.length > 0 && (
        <ul id={`${id}-listbox`} role="listbox" className="suggestions">
          {suggestions.map((s, i) => (
            <li
              key={`${s}-${i}`}
              role="option"
              tabIndex={0}
              className="suggestion"
              onClick={() => onSuggestionClick?.(s)}
              onKeyDown={(e) => e.key === 'Enter' && onSuggestionClick?.(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
