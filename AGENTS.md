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

## Copy Guidelines

- Write for skimming. Put main point in first 1-2 lines, then use short sections, meaningful headings, lists, and links with specific labels. Readers scan pages and miss walls of text.
- Homepage first screen should answer: who this is, what they do or care about, who should keep reading, and what next step exists.
- Prefer first person for personal pages. Sound like person, not resume, press release, or generic brand.
- Use concrete nouns, projects, places, tools, outcomes, and constraints. Avoid vague claims like "passionate", "innovative", "impactful", "creative problem solver", unless backed by specific proof.
- Balance human context with professional signal. Include selected personal details only when they explain taste, values, work, or why reader should trust page.
- About copy should build trust, not list every credential. Useful order: short intro, current focus, relevant background, approach or values, proof, contact path.
- Portfolio/work copy should describe role, problem, work done, constraints, result, and link to artifact. Keep 3-7 strongest examples more valuable than full archive.
- Calls to action should be low-friction and direct: email, read work, view project, follow, or book. Do not ask for commitment before trust exists.
- Cut by default. Web copy should be much shorter than print copy; move long stories or details into separate linked pages.
- Preserve site voice: plain markdown, direct sentences, minimal styling assumptions, readable raw text.