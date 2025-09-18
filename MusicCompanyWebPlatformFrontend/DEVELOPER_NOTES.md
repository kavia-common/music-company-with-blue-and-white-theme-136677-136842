# Developer Notes

## Structure

- src/components: Reusable UI components (layout, forms, cards).
- src/pages: Route pages (Home, Artists, Albums, Services, Contact, Admin).
- src/store: In-memory data and future data access layer.
- src/styles: Theme and layout CSS.

## Routing

Defined in src/App.js using react-router-dom v6.

## Theming

- Blue/white theme variables in styles/theme.css.
- Dark mode toggled in Layout via data-theme attribute.

## Extensibility

- Abstract data access in src/store. Replace arrays with API calls without changing UI.
- Consider adding context or state management if content grows.
- For CMS integration, implement adapters in the store layer.

## Tests

CRA setup remains; extend tests as needed to cover key flows.

