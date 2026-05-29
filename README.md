# Signal Analyzer — Local development

```bash
npm install
npm run dev
```

Open http://localhost:8080 or http://localhost:5000

## Deployment

A TanStack Start app with the Signal Analyzer at `/` and a static live view at `/live` (served from `public/live.html`).

## Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this folder to a new GitHub/GitLab/Bitbucket repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework Preset: **Other** (leave defaults — `vercel.json` already configures it).
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output: auto-detected (`.vercel/output`)
4. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # preview deploy
vercel --prod # production deploy
```

## Routes

- `/` — Signal Analyzer (React app)
- `/live` — redirects to `/live.html` (static HTML in `public/`)

The `Live` button in the header navigates to `/live`.

## Notes

- Built with TanStack Start + Vite, configured with the Nitro `vercel` preset (see `vite.config.ts`).
- The `public/` directory is served at the site root, so `public/live.html` is reachable at `/live.html`.
- No environment variables are required for the base app.