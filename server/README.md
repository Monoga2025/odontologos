# server

Express server that serves the built front end in production and handles API routes in development.

- `index.ts`: server entry point
- `routes.ts`: API routes (appointment requests)
- `storage.ts`: database access through Drizzle
- `vite.ts`: Vite dev-server integration

Requires `DATABASE_URL` for the storage layer.
