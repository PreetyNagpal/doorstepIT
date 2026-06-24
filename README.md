# doorstep-it

Next.js App Router application for [doorstepIT](https://www.doorstepit.com.au).

## Stack

| Layer | Service |
|-------|---------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Database & Auth | [Supabase](https://supabase.com/dashboard/project/fauryebsvgmwogrkuoxk) |
| Hosting | [Vercel](https://vercel.com/aceai-webapp/doorstep-it) (`aceai-webapp/doorstep-it`) |
| Source control | [GitHub](https://github.com/PreetyNagpal/doorstepIT) |

## Pipeline

```
Local dev  →  git push (main)  →  GitHub  →  Vercel build & deploy  →  www.doorstepit.com.au
                    ↓
              Supabase (Postgres, Auth, Storage)
```

- **Push to `main`** triggers a Vercel production deployment automatically.
- **Preview deployments** are created for other branches and pull requests.
- Environment variables are managed in the [Vercel dashboard](https://vercel.com/aceai-webapp/doorstep-it/settings/environment-variables). Never commit secrets.

## Local setup

**Requirements:** Node.js 20+

```bash
# Install dependencies
npm install

# Copy env template and fill in values from Vercel / Supabase dashboards
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To sync env vars from Vercel (after `vercel link`):

```bash
vercel env pull .env.local
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
app/                  # Next.js App Router pages & layouts
lib/supabase/         # Supabase client helpers (browser + server)
middleware.ts         # Supabase session refresh (must stay at project root for Vercel Edge)
```
