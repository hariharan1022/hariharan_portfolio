import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const basePath = process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/hariharan_portfolio/docs/' : '/hariharan_portfolio/');

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    (mode === 'production' || process.env.NODE_ENV === 'production') && {
      name: 'strip-redirect',
      transformIndexHtml(html) {
        return html.replace(/<script>if\(location\.hostname[^<]+<\/script>/, '');
      },
    },
  ].filter(Boolean),
  base: basePath,
}))
