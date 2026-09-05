# Gym App

A small checklist-style training app with four modes:

- **HOUSE WORKOUT** — bodyweight day: 100 push-ups, 100 squats, 10 min walking. Checklist resets automatically each day.
- **QUICK WORKOUTS** — the full machine split (Upper A / Lower A / Upper B / Lower B), each exercise as a checkbox, progress persisted per split.
- **6 MONTH TRAINING PROGRAM** — 3 progressive-overload phases (7 weeks each) with deload weeks, 5-day split (Chest & Core / Back & Traps / Legs / Shoulders & Core / Arms), checklist persisted per phase+day.
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

- Quick workouts split & weekly schedule: `src/data/workouts.js`
- Cardio protocols & HR zones: `src/data/cardio.js`
- House checklist targets: `src/components/HouseMode.jsx` (the `TASKS` array)
- 6-month training program: `src/data/sixMonthProgram.js`

## 6-Month Training Program

**Split:** Day 1 Chest & Core · Day 2 Back & Traps · Day 3 Legs · Day 4 Shoulders & Core · Day 5 Arms

Exercises stay the same across all 3 phases — only sets/reps/rest/tempo/RIR change as you progress:

- **Phase 1 — Control & Foundation** (Weeks 1–7, deload Week 8)
- **Phase 2 — Overload & Growth** (Weeks 9–15, deload Week 16)
- **Phase 3 — Volume & Density** (Weeks 17–23, deload Week 24, final)

Full exercise data lives in `src/data/sixMonthProgram.js`.
