# Emotion Design System

A React + TypeScript design system scaffolded with Vite. This repository contains a small, component-driven design system using plain CSS tokens and atomic component organization (atoms → molecules → organisms).

This README documents the technical structure, development workflow, build/publish steps (including GitHub Pages), and conventions to follow when extending the system.

**Quick links**
- Source: [src](src)
- Vite config: [vite.config.ts](vite.config.ts#L1-L11)
- Package scripts: [package.json](package.json#L1-L40)

## Project overview

- Framework: React + TypeScript
- Bundler: Vite
- Styling: global CSS files, tokenized under `src/styles/tokens` (colors and other tokens)
- Component structure: `src/components/atoms`, `src/components/molecules`, `src/components/organisms`
- Storybook-style stories: `.stories.tsx` are included for example components

## Folder layout

- src/
  - assets/ — static assets (images, icons)
  - components/
    - atoms/ — smallest building blocks (buttons, inputs, labels)
    - molecules/ — composed components built from atoms
    - organisms/ — larger sections composed from molecules and atoms
    - styles/
      - tokens/ — CSS token files (colors.css, etc.)

## Design tokens

- Tokens are plain CSS files located in `src/styles/tokens`. Example: `colors.css` exposes CSS custom properties used across components.
- Usage example (in component CSS):

```css
:root {
  --color-primary: #0b5fff;
}

.btn {
  background-color: var(--color-primary);
}
```

When adding new tokens:
- Update a token file under `src/styles/tokens`.
- Import or include tokens at a global entry (e.g., in `index.css` or `main.tsx`) so they are available to all components.

## Component conventions

- Each component lives in its own folder under the appropriate level (atoms, molecules, organisms).
- Files per component:
  - `Component.tsx` — component implementation
  - `Component.css` — component styles (scoped by class names)
  - `Component.stories.tsx` — story/examples for the component (optional)
- Naming: PascalCase for components and files.
- Props: keep components typed with explicit interfaces (no implicit any). Example:

```ts
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return <button className={`btn btn--${variant}`} onClick={onClick}>{children}</button>
}
```

## Theming and CSS strategy

- This repository uses simple CSS files and CSS custom properties for theming. Avoid global side effects; prefer class-scoped rules and token usage.
- If you later adopt a CSS-in-JS solution or CSS Modules, keep the token files as the single source of truth for colors, spacing, and typography.

## Accessibility

- Follow semantic HTML (button, nav, header, main) and ensure interactive elements have keyboard focus and ARIA attributes where appropriate.
- Buttons should use `<button>` elements, not clickable `<div>`s
- For any composite widgets (e.g., rating), implement ARIA roles and keyboard interactions.

## Linting & Type checking

- TypeScript project is configured via `tsconfig.json` and `tsconfig.app.json`.
- Linting is configured using ESLint; run:

```bash
npm run lint
```

Fix type errors using the TypeScript compiler and address lint warnings as part of PRs.

## Build and publish

- Build the production bundle with:

```bash
npm run build
```

- This project includes `gh-pages` and uses `vite` output in `dist` for publishing to GitHub Pages. The following npm scripts are available in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

- To publish to GitHub Pages (repository must be `username/repo` and `repo` should match the `base` set in `vite.config.ts`):

```bash
npm run deploy
```

- Important: `vite.config.ts` sets `base` for production builds. Verify the `repoName` constant in [vite.config.ts](vite.config.ts#L1-L11) matches your repository name.

## Development

- Run the dev server with hot reload:

```bash
npm run dev
```

- Preview the production build locally:

```bash
npm run preview
```

## Stories & visual testing

- Some components include `.stories.tsx` files for example usage. You can integrate Storybook or another component visual test runner; stories are a starting point.

## Tests

- No unit test runner is included by default. For component testing, we recommend adding `vitest` + `@testing-library/react` and a small test harness.

## Contribution guidelines

- Create PRs against `main` (or your chosen default branch). Keep each PR focused on a single component or token change.
- Include visual checks (screenshots or story updates) for any visual changes.
- Run `npm run lint` and ensure TypeScript compiles before opening a PR.

## Troubleshooting

- If your deployed site shows 404s for assets, confirm `vite.config.ts` `base` value matches the repo name and that you ran `npm run deploy` after building.
- If styles are missing, ensure token files are imported in `index.css` or your app entry.

## License

Specify your project license here.

---

If you want, I can also:
- Add a CI workflow to automatically publish `gh-pages` on commits to `main`.
- Add Storybook with a basic config and scripts.

Tell me which of those you'd like next.
