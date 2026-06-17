# Repository Guidelines

## Project Overview

This is a static React app built with Vite, TypeScript, and Tailwind CSS. It uses React 19, shadcn-style components under `src/components/ui`, Radix UI primitives, `lucide-react` icons, GSAP/Lenis for motion and scrolling, and Three.js for 3D or canvas-based visuals.

## Commands

- `npm run dev` starts the Vite dev server on port 3000.
- `npm run build` runs `tsc -b` and then creates the static Vite build in `dist/`.
- `npm run lint` runs ESLint across the repository.
- `npm run preview` serves the production build locally.

## Structure

- `src/main.tsx` is the React entry point.
- `src/App.tsx` wires the app shell and routes.
- `src/pages/` contains page-level views.
- `src/sections/` contains major homepage sections.
- `src/components/` contains shared UI and visual components.
- `src/components/ui/` contains shadcn-style primitives.
- `src/lib/utils.ts` contains shared utility helpers.

## Development Notes

- Keep the app deployable as a static Vite site. Avoid server-only features unless the deployment target changes.
- Use the existing `@/` alias for imports from `src`.
- Follow the current component style and Tailwind conventions before adding new abstractions.
- Keep generated artifacts such as `dist/`, local env files, logs, and OS metadata out of git.
- For GitHub Pages deployment, the Vite `base` setting is currently `./`, which supports relative asset paths in the generated static site.
