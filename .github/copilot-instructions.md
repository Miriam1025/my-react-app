### Quick orientation

This is a small React + Vite single-page app (src/) with a focus on a bookmark-page builder and a marketing "SalesPage". Key runtime pieces:

- Frontend: React 19 components under `src/` (entry point: `src/main.jsx`, root: `src/App.jsx` -> `src/components/SalesPage.jsx`).
- Builder: `src/components/BookmarkBuilder.jsx` is the main interactive feature — it builds a downloadable static HTML bookmark page client-side (no server required).
- Credentials UI: `src/components/CredentialsPopup/` contains a small security flow (hooks in `hooks/useCredentialsSecurity.js` and utils in `utils/credentialsUtils.js`).
- Serverless: `netlify/functions/chatgpt.js` demonstrates a Netlify function that calls OpenAI using `openai` and `dotenv` for local testing.

### What to change and why (high-impact areas)

- Prefer editing components under `src/components/` for UI changes. `BookmarkBuilder.jsx` contains most of the builder logic and the HTML generation template — change carefully because it produces the downloadable file users get.
- For credential-related work, see `useCredentialsSecurity.js` and `credentialsUtils.js`. These files intentionally keep logic client-side and use simple masking/validation for demo purposes — do not assume production-grade security.
- The Netlify function uses OpenAI v3-style completion APIs; if you upgrade the OpenAI SDK, update `netlify/functions/chatgpt.js` accordingly and keep environment secrets in Netlify or a local `.env` (never commit secrets).

### Build / run / debug

- Local dev (Vite): `npm run dev` — runs on the default Vite port (usually 5173). HMR is available.
- Build for production: `npm run build` then `npm run preview` to check the production build locally.
- Linting: `npm run lint` runs ESLint across the project.
- Netlify functions: Locally test `netlify/functions/chatgpt.js` by invoking Netlify CLI or deploying to Netlify; for quick unit tests, run the file's exported `handler` with a mock event in a Node script and set `OPENAI_API_KEY` in `.env`.

### Project-specific patterns & conventions

- Inline styles: Many components use inline style objects instead of external CSS modules. Keep UI changes consistent with the surrounding file (inline style). Example: `SalesPage.jsx` uses inline style objects for layout and theme.
- Single-file feature logic: `BookmarkBuilder.jsx` contains UI, theming, and the HTML-generation template in one file. When refactoring, prefer extracting pure helpers (e.g., HTML template string) into small utility functions to keep components readable.
- Minimal security primitives: `CredentialsPopup` relies on a demo `masterPin` and client-side masking. Treat these as placeholders; any production changes should replace `validatePin` with a secure server-side verification.
- Theme data: The themes object (in `BookmarkBuilder.jsx`) is the single source for theme colors/gradients. Reuse it when updating previews or generated HTML.

### Where to look for integration points

- Stripe buy links: Hard-coded in `SalesPage.jsx` (anchor href to Stripe checkout). If changing pricing flow, update these anchors.
- PWA: `vite.config.js` includes `vite-plugin-pwa` with manifest settings. Update icons and manifest fields here.
- Capacitor: `package.json` includes `@capacitor/*` dependencies — mobile packaging may be present. If bundling for mobile, check `capacitor.config.json` at repo root.

### Testing & safety notes for AI edits

- Changes that alter `generateHTML()` in `BookmarkBuilder.jsx` can directly change user-downloaded content. When modifying, include a small manual test: open the builder in dev, download generated file, and verify it opens correctly.
- Don't introduce server-side secrets into client code. The Netlify function is the expected server-side place for API keys; reference `netlify/functions/chatgpt.js` for examples.
- Keep accessibility in mind: interactive buttons often use semantic elements plus keyboard handlers (see FAQ buttons in `SalesPage.jsx`). Preserve these patterns when refactoring.

### Examples for common tasks

- Add a new theme: update the `themes` object in `src/components/BookmarkBuilder.jsx` and use its key as `selectedTheme` default. Ensure the preview (right-hand column) uses the theme via `themes[selectedTheme]`.
- Wire an integration (OpenAI): modify `netlify/functions/chatgpt.js` and deploy to Netlify; locally, set `OPENAI_API_KEY` in `.env` and run a small Node script that calls `handler` with a mock event JSON.

### Files to reference when coding

- Entry & routing: `src/main.jsx`, `index.html`
- App shell: `src/App.jsx`, `src/components/SalesPage.jsx`
- Builder: `src/components/BookmarkBuilder.jsx`
- Credentials: `src/components/CredentialsPopup/*` (hooks + utils)
- Serverless example: `netlify/functions/chatgpt.js`
- Tooling: `package.json`, `vite.config.js`, `eslint.config.js`, `capacitor.config.json`

If any behavior here is unclear or you want the instructions expanded (for testing scripts, CI, or mobile builds), say which area to expand and I will update this file.
