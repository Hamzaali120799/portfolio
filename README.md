# Hamza Ali — Portfolio

Personal portfolio built with Next.js, TailwindCSS, TypeScript, and Framer Motion.

## Tech Stack

- **Framework:** Next.js (App Router, static export)
- **Styling:** TailwindCSS v4
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light, system default)
- **Icons:** Lucide React
- **Deploy:** GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
```

The static output is generated in the `out/` folder.

## GitHub Pages Deployment

### Option A — Repo named `portfolio` (URL: `hamzaali120799.github.io/portfolio`)

The `BASE_PATH=/portfolio` in `.github/workflows/deploy.yml` is already set correctly. Push to `main` and GitHub Actions will deploy automatically.

### Option B — Repo named `hamzaali120799.github.io` (URL: `hamzaali120799.github.io`)

1. Open `.github/workflows/deploy.yml`
2. Change `BASE_PATH: /portfolio` to `BASE_PATH: ` (empty)
3. The `basePath` in `next.config.ts` resolves automatically

### Enabling GitHub Pages in your repo

1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. Save

After your first push to `main`, GitHub Actions runs the workflow and the site goes live.

## Customisation

All content (projects, experience, skills) lives in [`lib/data.ts`](lib/data.ts). Edit it there — nothing is hardcoded in components.

Replace `public/resume.pdf` with your actual CV file to enable the Download CV button.
