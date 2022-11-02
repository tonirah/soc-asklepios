# SOC Asklepios
> Serious Game 'SOC Asklepios': Lerne Software Refactorings und rette dein Raumschiff!

> A serious game to learn software refactorings and save your spaceship!
## [🚀 --> SPIEL STARTEN // LAUNCH THE GAME <-- 🚀](https://tonirah.github.io/soc-asklepios/)

---
(English below)
## Lokale Einrichtung und Entwicklung

Für die Ausführung wird Node.js mit einer Version >= 12.22.0 benötigt, Version 16.x oder höher wird empfohlen.

Dependencies müssen mit dem Konsolenbefehl `npm install` installiert werden.

`npm run dev` startet das Projekt im Entwicklungsmodus.

Die Applikation kann nun unter `http://localhost:3000` im Browser aufgerufen werden.

### Statische Anwendung lokal im Produktionsmodus bereitstellen
```bash
npm run export
cd ./out
# Verzeichnis mit einem Server lokal bereitstellen
# z.B. via php server
php -S localhost:3000
# ODER via python3 server
python3 -m http.server 3000
# ODER via python 2 server
python -m SimpleHTTPServer 3000
```

Die Applikation kann nun unter `http://localhost:3000` im Browser aufgerufen werden.

### Anwendungskonfiguration
```javascript
// Datei next.config.js
// Grundkonfiguration des Anwendungsverhaltens

const env = {
  LOCAL_STORAGE_KEY: 'soc-progress', // Schlüssel zum Speichern des Fortschritts im localStorage des Browsers
  MIN_CHARACTERS_FOR_COMBOBOX: '2', // Minimale Anzahl von Zeichen für die Anzeige von Eingabeoptionen
  DELAY_FOR_VISITED: '10', // Dauer der Betrachtung einer Aufgabe in Sekunden, bevor diese als “besucht” markiert wird
  POINTS_FOR_VISITED: '1', // Punkte für den Besuch einer Aufgabe
  POINTS_FOR_SOLVED: '4', // Punkte für das Lösen einer Aufgabe
  CODE_SMELLS_ENABLED: 'false', // Aktivierung der Abfrage von Code-Smells in einigen Aufgaben
  SSR_ENABLED: 'false', // Server-Side Rendering ist deaktiviert (Frontend-Anwendung)
};
```

### Build and deployment (Bau und Bereitstellung der Applikation)
#### GitHub
Der GitHub Deployment-Workflow [deploy.js.yml](.github/workflows/deploy.js.yml) erstellt und verteilt die Anwendung automatisch, sobald ein neuer Commit im Main-Branch erfolgt.

`NEXT_PUBLIC_BASE_PATH`, festgelegt in `deploy.js.yml`: Umgebungsparameter für die Bereitstellung der Anwendung unter einem Unterpfad einer Domain. Für GitHub Pages muss dies der Name des Repositories sein, in diesem Fall `/soc-asklepios`.

Die Veröffentlichung des Repositorys über GitHub Pages muss in den Repository-Einstellungen aktiviert werden (`<repository url>/settings/pages`):
- Source: `Deployment from a branch`.
- Branch: `gh-pages`, `/ (root)` (wie in `deploy.js.yml` konfiguriert)

Nach dieser Einrichtung wird die Anwendung über `https://<Benutzername>.github.io/<Repository-Name>/` veröffentlicht, in diesem Fall `https://tonirah.github.io/soc-asklepios/`.

Vollständige Dokumentation: [GitHub Pages Dokumentation](https://docs.github.com/en/pages).

#### Andere Server / Bereitstellungsumgebungen
Der Bereitstellungsprozess von GitHub Pages kann auf andere Umgebungen portiert werden:
- `NEXT_PUBLIC_BASE_PATH` wird genutzt, um die Anwendung in einem Unterpfad einer Domäne einzusetzen. Er kann undefiniert gelassen werden, wenn die Anwendung in Root (`/`) bereitgestellt wird.
- `npm run export` wird genutzt, um ein statisches `out/` Verzeichnis zu erstellen.
- Der Inhalt des statischen `out/`-Verzeichnisses kann von jedem Webserver bereitgestellt werden (php, python, Apache, nginx...)

### Skripte der Datei [package.json](package.json)

- `npm run dev` - Startet die Anwendung im Entwicklungsmodus unter `http://localhost:3000`.
- `npm run build` - Erzeugt einen optimierten Produktions-Build der Anwendung.
- `npm run start` - Startet die Anwendung im Produktionsmodus.
- `npm run export` - Erstellt die Anwendung und exportiert die erzeugten Dateien in den Ordner `out/`.
- `npm run type-check` - Überprüft den Code mit dem TypeScript-Compiler.
- `npm run lint` - Führt ESLint für alle Dateien im `src` Verzeichnis aus.
- `npm run format` - Führt Prettier für alle Dateien im `src`-Verzeichnis aus.

---

## Local setup and development (english version)

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
