# MUAZ TECH Portfolio

Personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Live Site

Current deployment:

- https://muaz-portfolio-eight.vercel.app

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run lint
npm run build
```

## Vercel Deployment

Use these settings in Vercel:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty
- Root Directory: project root `muaz-portfolio`

## Required Environment Variable

Add this variable in Vercel under Project Settings -> Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://muaz-portfolio-eight.vercel.app
```

If you use a custom domain later, replace the value with the final production domain.

This variable is used by:

- metadata canonical URLs
- Open Graph URLs
- sitemap generation
- robots host/sitemap
- web manifest ID

If you do not set it, the app will fall back to `http://localhost:3000`, which will not break the build but will produce incorrect production metadata.

## Files Prepared For Deployment

- `.env.example` added for environment setup
- `package.json` now declares the Node.js version requirement
- `README.md` updated with Vercel deployment data
