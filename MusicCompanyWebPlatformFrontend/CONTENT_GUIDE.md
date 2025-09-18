# Content Management Guide

This platform stores content in the frontend (no backend). Non-technical editors can update content via simple files and the Admin UI.

## Where content lives

- src/store/data.js
  - artists: list of artists and their properties
  - albums: list of albums, tracks, and links
  - services: list of services
- Admin UI (in-app): /admin
  - Add/remove entries during runtime (in-memory only)

To make permanent content updates, edit src/store/data.js and redeploy.

## Adding an artist

1. Open src/store/data.js
2. Add an object to `artists` with:
   - id (unique integer)
   - name, tagline, genre, origin, yearsActive, bio
   - social (links), popularity (0–100), addedAt (YYYY-MM-DD)

## Adding an album

1. Open src/store/data.js
2. Add an object to `albums` with:
   - id, artistId (must match an artist id), title
   - releaseYear, genre, label, description
   - tracks: [{ title, duration }]
   - links: streaming/purchase links
   - popularity

## Adding a service

1. Open src/store/data.js
2. Add an object to `services` with:
   - id, title, summary

## Extending data fields

You can safely add new fields to these objects. Components use robust access patterns and will ignore unknown fields.

## Future backend / CMS integration

- Replace src/store/data.js arrays with API calls.
- Provide functions like:
  - getArtists(), getArtist(id), getAlbums(), getAlbum(id), getServices()
- Update components to call these async functions.
- Keep response shape consistent for minimal UI changes.

## Accessibility checklist for content

- Provide descriptive text (not "click here").
- Ensure headings follow a logical order (H1, H2, H3).
- Include meaningful link text.
- Provide alt text if adding images in the future.

