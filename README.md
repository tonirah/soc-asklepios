# SOC Asklepios
> Serious Game 'SOC Asklepios': Lerne Software Refactorings und rette dein Raumschiff!

> A serious game to learn software refactorings and save your spaceship!
## [🚀 --> SPIEL STARTEN // LAUNCH THE GAME <-- 🚀](https://tonirah.github.io/soc-asklepios/)

---

## Development

Node.js >= 12.22.0 required, 16.x recommended.

Install dependencies with `npm install`.

To start the project in development mode, run `npm run dev`.

Open `http://localhost:3000` with your browser to see the result.

### Serve static app locally in production mode
```bash
npm run export
cd ./out
# serve directory locally
# e.g. via php server
php -S localhost:3000
# OR e.g. via python3 server
python3 -m http.server 3000
# OR e.g. via python 2 server
python -m SimpleHTTPServer 3000
```

Open `http://localhost:3000` with your browser to see the result.

### Application configuration
```javascript
// file next.config.js
// application behavior base configuration

const env = {
  LOCAL_STORAGE_KEY: 'soc-progress', // key to store progress in localStorage
  MIN_CHARACTERS_FOR_COMBOBOX: '2', // minimal number of characters to show input options
  DELAY_FOR_VISITED: '10', // seconds to view task for status 'visited'
  POINTS_FOR_VISITED: '1', // points given for task visit
  POINTS_FOR_SOLVED: '4', // points given for solved task
  CODE_SMELLS_ENABLED: 'false', // activate asking for code smells in some tasks
  SSR_ENABLED: 'false', // SSR deactivated for frontend only application
};
```

### Build and deployment
#### GitHub
GitHub Deployment workflow [deploy.js.yml](.github/workflows/deploy.js.yml) automatically builds and deploys application after a new commit enters the main branch.

`NEXT_PUBLIC_BASE_PATH`, set in `deploy.js.yml`: Environment parameter to deploy the application under a sub-path of a domain. For GitHub Pages, this must be the repository name, in this case `/soc-asklepios`.

The publishing of the repository via GitHub Pages must be enabled in the repository settings (`<repository url>/settings/pages`):
- Source: `Deployment from a branch`.
- Branch: `gh-pages`, `/ (root)` (as configured in `deploy.js.yml`)

After this setup, the application will be published via `https://<username>.github.io/<repository name>/`, in this case `https://tonirah.github.io/soc-asklepios/`.

Full documentation: [GitHub Pages Documentation](https://docs.github.com/en/pages).

#### Other servers / deployment environments
The GitHub Pages deployment process can be ported to other environments:
- `NEXT_PUBLIC_BASE_PATH` to deploy the application under a sub-path of a domain. Can be left undefined if deployed to root (`/`).
- `npm run export` to build static `out/` directory.
- Content of static `out/` directory can be served by any web server (php, python, Apache, nginx...)

### Scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:3000`.
- `npm run build` — Creates an optimized production build of your application.
- `npm run start` — Starts the application in production mode.
- `npm run export` — Builds the application and exports generated files to `out/` folder.
- `npm run type-check` — Validate code using TypeScript compiler.
- `npm run lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.
