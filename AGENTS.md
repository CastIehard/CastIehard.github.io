# Repository Guidelines

## Project Overview

This is a plain-markdown static website for castlehard.com. Source pages live in `content/` as `.md` files. The build script generates minimal HTML pages that display markdown as plain text.

## Commands

- `npm run build` generates the deployable site in `dist/`.
- `npm run dev` builds the site and serves `dist/` locally on port 3000.

## Structure

- `content/main.md` is the homepage source and also deploys to `/main/`.
- Every other `content/*.md` file deploys to `/<filename-without-md>/`.
- `build.mjs` scans `content/`, creates the plain markdown menu, writes route pages, copies raw markdown files, and copies `CNAME`.
- `.github/workflows/deploy-pages.yml` builds and deploys `dist/` to GitHub Pages.

## Development Notes

- Keep setup minimal. Do not add React, Vite, Tailwind, or client-side routing unless the site concept changes.
- Add new pages by adding a markdown file under `content/`.
- Keep generated `dist/` out of git.
- Keep pages readable as raw markdown text for humans and web scrapers.
