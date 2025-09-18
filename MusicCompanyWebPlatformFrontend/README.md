# Music Company Web Platform (Frontend)

A blue and white themed web platform built with React to showcase artists, albums, and company services. Includes contact and inquiry forms, a simple admin UI, and accessibility best practices.

## Features

- Branding & hero section with clear CTAs
- Responsive navigation and layout
- Artist discovery (search, filter, sort) and detailed profiles
- Album catalog and album detail pages with tracks and external links
- Services overview with details and inquiry form
- Contact form with validation, anti-spam honeypot, and privacy consent
- Admin UI to manage artists, albums, and services (in-memory demo)
- WCAG 2.1 AA accessibility considerations
- Modular structure and documentation for easy updates
- Extensible data store for future backend/CMS integration

## Quick start

- Install: `npm install`
- Run: `npm start`
- Build: `npm run build`
- Test: `npm test`

## Content updates

- Edit `src/store/data.js` to update artists, albums, and services.
- Use `/admin` route for in-memory changes during sessions.
- See `CONTENT_GUIDE.md` for details.

## Accessibility

- See `ACCESSIBILITY.md` for guidance and verification steps.

## Developer notes

- See `DEVELOPER_NOTES.md` for architecture, theming, and extensibility.
