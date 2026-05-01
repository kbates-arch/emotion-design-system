import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set `base` so the app works when published to GitHub Pages.
// It uses the repo name on production builds and `/` for dev.
const repoName = 'emotion-design-system'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  plugins: [react()],
})
