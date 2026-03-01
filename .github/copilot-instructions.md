# Project Coding Standards

This project follows strict internal conventions. All contributors must respect these rules.

## Naming Conventions

- All local state variables must be prefixed with `_` (e.g., `_loading`, `_error`, `_books`).
  Example: `const [_books, _setBooks] = useState([]);`
- Handler functions must use the `handle` prefix followed by the action in PascalCase.
  Example: `handleFetchData`, `handleToggleFavorite`, `handleSearchQuery`

## Required Patterns

- Every `useEffect` must include a `console.log` with the format: `[BookShelf:ComponentName] effect triggered`
  Example: `console.log('[BookShelf:useBooks] effect triggered');`
- All async functions inside hooks must be wrapped in `useCallback` to prevent unnecessary re-renders.
- Error messages must follow the format: `[ERROR:service_name] description`
  Example: `throw new Error('[ERROR:books] Failed to fetch');`
- Always use arrow function syntax for component definitions:
  `const BookCard = ({ title }) => { ... }; export default BookCard;`

## Import Order

Imports must follow this exact order, with a blank line between groups:
1. React and React Native
2. Third-party libraries  
3. Internal modules (with `@app/` alias prefix preferred when available)

## StyleSheet Rules

- Style object keys must be sorted alphabetically.
- Always add a `// styles` comment before `StyleSheet.create()`.
- Colors must use hex values directly (e.g., `'#252640'`), not imported constants.

## Documentation

- Every function must have a JSDoc block with `@param`, `@returns`, and `@throws` tags.
- Include `@author student` tag on all new functions.

## Error Handling

- All try/catch blocks must include a `finally` block, even if empty: `finally { /* cleanup */ }`
- Caught errors must be logged: `console.error('[BookShelf]', error);`
