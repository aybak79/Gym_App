# Gym App

A small checklist-style training app with three modes:

- **GYM** — the full machine split (Upper A / Lower A / Upper B / Lower B), each exercise as a checkbox, progress persisted per split.
- **HOUSE** — bodyweight day: 100 push-ups, 100 squats, 10 min walking. Checklist resets automatically each day.
- **CARDIO** — reference protocols (Brisk Walking, LISS, HIIT, Mixed) with HR zones, interval tables, and timer setup instructions.

Progress is saved in the browser's local storage, so it persists between visits on the same device.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`.

One-time setup after pushing this repo to GitHub:

1. Go to your repo's **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`.

No changes to `vite.config.js` are needed — it uses a relative base path so it works under any repo name.

## Editing the plan

- Gym split & weekly schedule: `src/data/workouts.js`
- Cardio protocols & HR zones: `src/data/cardio.js`
- House checklist targets: `src/components/HouseMode.jsx` (the `TASKS` array)
