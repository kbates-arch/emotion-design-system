This folder contains color tokens for the design system.

Usage
- Use HSL triplet tokens with `hsl(var(--color-...))` so alpha variants are easy:

  color: hsl(var(--color-gray-700));
  background: hsl(var(--color-primary-500) / 0.08);

Guidelines
- Always use these variables in components rather than hard-coded colors.
- For typography, use `--text` / `--text-strong` aliases defined in `src/index.css`.
- To add a new semantic color, prefer adding triplet scales and then an alias.

Dark mode
- Dark-mode overrides are handled with `prefers-color-scheme: dark` inside `colors.css`.
