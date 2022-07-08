# SOC Asklepios
> A serious game to learn software refactorings and save your spaceship.
## [🚀 LAUNCH THE GAME 🚀](https://tonirah.github.io/soc-asklepios/)

---

## Development

Node.js >= 12.22.0 required, 16.x recommended.

Install dependencies with `npm install`.

To start the project in development mode, run `npm run dev`.

Open `http://localhost:3000` with your browser to see the result.

## Serve static app locally in production mode
```bash
npm run export
cd ./out
# serve directory locally, e.g. via php server
php -S localhost:3000
```

Open `http://localhost:3000` with your browser to see the result.

## Scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:3000`.
- `npm run build` — Creates an optimized production build of your application.
- `npm run start` — Starts the application in production mode.
- `npm run export` — Builds the application and exports generated files to `out/` folder.
- `npm run type-check` — Validate code using TypeScript compiler.
- `npm run lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.
