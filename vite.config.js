import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubPages = process.env.BASE_PATH || process.env.npm_lifecycle_event === 'deploy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/hariharan_portfolio/' : '/',
})
